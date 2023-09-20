
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Projectile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '937f2AD/1NMJKL35/8weEe2', 'Projectile');
// Script/Weapon/Projectile.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Movement_1 = require("../Controller/Movement");
var Utils_1 = require("../Controller/Utils");
var EnemyController_1 = require("../Enemy/EnemyController");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Projectile = /** @class */ (function (_super) {
    __extends(Projectile, _super);
    function Projectile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = 20;
        _this.weaponScale = 1;
        _this.travelSpeed = 400;
        _this.hitLimit = 1;
        _this.isShootingAtTarget = true;
        _this.lock = false;
        _this.target = null;
        return _this;
    }
    Projectile.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).takeDamage(this.damage);
            this.hitLimit -= 1;
        }
    };
    Projectile.prototype.putBackToPool = function () {
        var player = this.node.parent.getChildByName("PlayerBase");
        var distanceX = (player.x - this.node.x) * (player.x - this.node.x);
        var distanceY = (player.y - this.node.y) * (player.y - this.node.y);
        var distance = Math.sqrt(distanceX + distanceY);
        if (this.hitLimit <= 0) {
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
        if (distance > 1200) {
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
    };
    Projectile.prototype.moveToTarget = function (target, dt) {
        if (this.isShootingAtTarget) {
            this.target = target;
        }
        if (target == null && !this.lock) {
            this.directionVector = Movement_1.default.instance.directionVector.normalize();
            this.directionVector = cc.v2(this.directionVector.x + Utils_1.default.random(-0.1, 0.1), this.directionVector.y + Utils_1.default.random(-0.1, 0.1));
            this.node.angle =
                Math.atan2(this.directionVector.y, this.directionVector.x) *
                    (180 / Math.PI);
            this.lock = true;
        }
        if (target != null && !this.lock) {
            this.lock = true;
            var deltaX = this.target.x - this.node.x;
            var deltaY = this.target.y - this.node.y;
            this.directionVector = cc.v2(deltaX, deltaY).normalize();
            this.node.angle =
                Math.atan2(this.directionVector.y, this.directionVector.x) *
                    (180 / Math.PI);
        }
        this.node.x += this.directionVector.normalize().x * this.travelSpeed * dt;
        this.node.y += this.directionVector.normalize().y * this.travelSpeed * dt;
    };
    Projectile.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScale =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.node.scale = this.weaponScale;
    };
    Projectile.prototype.set = function (damagePercentage, bonusDamage, weaponScalePercentage, hitLimit, target, position) {
        this.baseDamange = bonusDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.target = target;
        this.node.position = position;
        this.hitLimit = hitLimit;
        this.lock = false;
        this.updateStats();
    };
    // LIFE-CYCLE CALLBACKS:
    Projectile.prototype.onLoad = function () {
        this.node.zIndex = 10001;
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScale;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
    };
    Projectile.prototype.start = function () { };
    Projectile.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            return;
        }
        this.moveToTarget(this.target, dt);
        this.putBackToPool();
    };
    __decorate([
        property(cc.Float)
    ], Projectile.prototype, "damage", void 0);
    __decorate([
        property(cc.Float)
    ], Projectile.prototype, "weaponScale", void 0);
    __decorate([
        property(cc.Float)
    ], Projectile.prototype, "travelSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], Projectile.prototype, "hitLimit", void 0);
    __decorate([
        property(cc.Boolean)
    ], Projectile.prototype, "isShootingAtTarget", void 0);
    Projectile = __decorate([
        ccclass
    ], Projectile);
    return Projectile;
}(cc.Component));
exports.default = Projectile;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFByb2plY3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsbURBQThDO0FBQzlDLDZDQUF3QztBQUN4Qyw0REFBdUQ7QUFDdkQsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBOEdDO1FBNUdDLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVoQixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUVsQixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsd0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBTzFCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsWUFBTSxHQUFZLElBQUksQ0FBQzs7SUE0RnpCLENBQUM7SUEzRkMscUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFDRCxrQ0FBYSxHQUFiO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksU0FBUyxHQUFHLENBQUMsTUFBTSxD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QUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwwQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLDJCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQTNHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNQO0lBRVo7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDSDtJQUVoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNEO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ047SUFFYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzBEQUNLO0lBVlAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThHOUI7SUFBRCxpQkFBQztDQTlHRCxBQThHQyxDQTlHdUMsRUFBRSxDQUFDLFNBQVMsR0E4R25EO2tCQTlHb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTW92ZW1lbnQgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTW92ZW1lbnRcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi4vRW5lbXkvRW5lbXlDb250cm9sbGVyXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RpbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGRhbWFnZSA9IDIwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHdlYXBvblNjYWxlID0gMTtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICB0cmF2ZWxTcGVlZCA9IDQwMDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBoaXRMaW1pdCA9IDE7XG4gIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICBpc1Nob290aW5nQXRUYXJnZXQgPSB0cnVlO1xuICBiYXNlRGFtYW5nZTogbnVtYmVyO1xuICBiYXNlU2NhbGU6IG51bWJlcjtcbiAgZGFtYWdlUGVyY2VudGFnZTogbnVtYmVyO1xuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgZGlyZWN0aW9uVmVjdG9yOiBjYy5WZWMyO1xuICBhbmdsZTogbnVtYmVyO1xuICBsb2NrOiBib29sZWFuID0gZmFsc2U7XG4gIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xuICAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS50YWtlRGFtYWdlKHRoaXMuZGFtYWdlKTtcbiAgICAgIHRoaXMuaGl0TGltaXQgLT0gMTtcbiAgICB9XG4gIH1cbiAgcHV0QmFja1RvUG9vbCgpIHtcbiAgICB2YXIgcGxheWVyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllckJhc2VcIik7XG4gICAgdmFyIGRpc3RhbmNlWCA9IChwbGF5ZXIueCAtIHRoaXMubm9kZS54KSAqIChwbGF5ZXIueCAtIHRoaXMubm9kZS54KTtcbiAgICB2YXIgZGlzdGFuY2VZID0gKHBsYXllci55IC0gdGhpcy5ub2RlLnkpICogKHBsYXllci55IC0gdGhpcy5ub2RlLnkpO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVggKyBkaXN0YW5jZVkpO1xuICAgIGlmICh0aGlzLmhpdExpbWl0IDw9IDApIHtcbiAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgICB9XG4gICAgaWYgKGRpc3RhbmNlID4gMTIwMCkge1xuICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UucHV0QmFja1RvUG9vbCh0aGlzLm5vZGUpO1xuICAgIH1cbiAgfVxuICBtb3ZlVG9UYXJnZXQodGFyZ2V0OiBjYy5Ob2RlLCBkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZ0F0VGFyZ2V0KSB7XG4gICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG4gICAgaWYgKHRhcmdldCA9PSBudWxsICYmICF0aGlzLmxvY2spIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uVmVjdG9yID0gTW92ZW1lbnQuaW5zdGFuY2UuZGlyZWN0aW9uVmVjdG9yLm5vcm1hbGl6ZSgpO1xuICAgICAgdGhpcy5kaXJlY3Rpb25WZWN0b3IgPSBjYy52MihcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25WZWN0b3IueCArIFV0aWxzLnJhbmRvbSgtMC4xLCAwLjEpLFxuICAgICAgICB0aGlzLmRpcmVjdGlvblZlY3Rvci55ICsgVXRpbHMucmFuZG9tKC0wLjEsIDAuMSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMubm9kZS5hbmdsZSA9XG4gICAgICAgIE1hdGguYXRhbjIodGhpcy5kaXJlY3Rpb25WZWN0b3IueSwgdGhpcy5kaXJlY3Rpb25WZWN0b3IueCkgKlxuICAgICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICB0aGlzLmxvY2sgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ICE9IG51bGwgJiYgIXRoaXMubG9jaykge1xuICAgICAgdGhpcy5sb2NrID0gdHJ1ZTtcblxuICAgICAgdmFyIGRlbHRhWCA9IHRoaXMudGFyZ2V0LnggLSB0aGlzLm5vZGUueDtcbiAgICAgIHZhciBkZWx0YVkgPSB0aGlzLnRhcmdldC55IC0gdGhpcy5ub2RlLnk7XG4gICAgICB0aGlzLmRpcmVjdGlvblZlY3RvciA9IGNjLnYyKGRlbHRhWCwgZGVsdGFZKS5ub3JtYWxpemUoKTtcbiAgICAgIHRoaXMubm9kZS5hbmdsZSA9XG4gICAgICAgIE1hdGguYXRhbjIodGhpcy5kaXJlY3Rpb25WZWN0b3IueSwgdGhpcy5kaXJlY3Rpb25WZWN0b3IueCkgKlxuICAgICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgfVxuICAgIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyZWN0aW9uVmVjdG9yLm5vcm1hbGl6ZSgpLnggKiB0aGlzLnRyYXZlbFNwZWVkICogZHQ7XG4gICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5kaXJlY3Rpb25WZWN0b3Iubm9ybWFsaXplKCkueSAqIHRoaXMudHJhdmVsU3BlZWQgKiBkdDtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRzKCkge1xuICAgIHRoaXMuZGFtYWdlID1cbiAgICAgICh0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlRGFtYW5nZSArIHRoaXMuYmFzZURhbWFuZ2U7XG4gICAgdGhpcy53ZWFwb25TY2FsZSA9XG4gICAgICAodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUgKyB0aGlzLmJhc2VTY2FsZTtcbiAgICB0aGlzLm5vZGUuc2NhbGUgPSB0aGlzLndlYXBvblNjYWxlO1xuICB9XG4gIHNldChcbiAgICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgYm9udXNEYW1hZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBoaXRMaW1pdDogbnVtYmVyLFxuICAgIHRhcmdldDogY2MuTm9kZSxcbiAgICBwb3NpdGlvbjogY2MuVmVjM1xuICApIHtcbiAgICB0aGlzLmJhc2VEYW1hbmdlID0gYm9udXNEYW1hZ2U7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlID0gZGFtYWdlUGVyY2VudGFnZTtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSA9IHdlYXBvblNjYWxlUGVyY2VudGFnZTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmhpdExpbWl0ID0gaGl0TGltaXQ7XG4gICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVTdGF0cygpO1xuICB9XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDE7XG4gICAgdGhpcy5iYXNlRGFtYW5nZSA9IHRoaXMuZGFtYWdlO1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy53ZWFwb25TY2FsZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gMDtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1vdmVUb1RhcmdldCh0aGlzLnRhcmdldCwgZHQpO1xuICAgIHRoaXMucHV0QmFja1RvUG9vbCgpO1xuICB9XG59XG4iXX0=