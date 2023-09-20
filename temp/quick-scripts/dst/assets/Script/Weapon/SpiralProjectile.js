
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/SpiralProjectile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1912f9dqKhLZJdO/kDnBkla', 'SpiralProjectile');
// Script/Weapon/SpiralProjectile.ts

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
var Utils_1 = require("../Controller/Utils");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var Projectile_1 = require("../Weapon/Projectile");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpiralProjectile = /** @class */ (function (_super) {
    __extends(SpiralProjectile, _super);
    function SpiralProjectile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = 3;
        _this.baseDuration = _this.duration;
        _this.durationPercentage = 0;
        _this.currentTime = 0;
        _this.startRadius = 100;
        _this.currentRadius = 100;
        _this.maxRadius = 400;
        _this.angleDelta = 0;
        _this.pivot = null;
        _this.interval = 0.01;
        _this.time = _this.interval;
        _this.previous = null;
        _this.trailList = new Array();
        return _this;
    }
    SpiralProjectile.prototype.start = function () { };
    SpiralProjectile.prototype.onLoad = function () {
        this.node.zIndex = 10000;
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScale;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
        this.currentRadius = this.startRadius;
    };
    SpiralProjectile.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScale =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.duration =
            this.baseDuration + (this.durationPercentage / 100) * this.baseDuration;
        this.node.scale = this.weaponScale;
    };
    SpiralProjectile.prototype.setStats = function (damagePercentage, bonusDamage, weaponScalePercentage, hitLimit, durationPercentage, pivot) {
        this.time = this.interval;
        this.angleDelta = 0;
        this.currentRadius = this.startRadius;
        this.currentTime = 0;
        this.baseDamange = bonusDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.pivot = pivot;
        this.hitLimit = hitLimit;
        this.durationPercentage = durationPercentage;
        this.lock = false;
        this.updateStats();
    };
    SpiralProjectile.prototype.putBackToPool = function () {
        if (this.hitLimit <= 0) {
            this.trailList.forEach(function (element) {
                ProjectilePooling_1.default.instance.putBackToPool(element);
            });
            this.trailList.length = 0;
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
        if (this.currentTime >= this.duration) {
            this.trailList.forEach(function (element) {
                ProjectilePooling_1.default.instance.putBackToPool(element);
            });
            this.trailList.length = 0;
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
    };
    SpiralProjectile.prototype.spinAround = function (dt) {
        this.addTrail(dt);
        this.node.angle += dt * 1500;
        this.angleDelta -= dt * 4;
        this.currentRadius += dt * 90;
        if (this.currentRadius > this.maxRadius)
            this.currentRadius = this.maxRadius;
        this.node.x = this.pivot.x + this.currentRadius * Math.cos(this.angleDelta);
        this.node.y = this.pivot.y + this.currentRadius * Math.sin(this.angleDelta);
    };
    SpiralProjectile.prototype.addTrail = function (dt) {
        if (this.time > 0)
            this.time -= dt;
        else {
            this.time = this.interval;
            var clone = null;
            clone = ProjectilePooling_1.default.instance.trailPool.get();
            if (clone == null) {
                clone = new cc.Node("Trail");
            }
            this.trailList.push(clone);
            clone.parent = this.node.parent;
            clone.scale = this.node.scale;
            clone.opacity = 200;
            clone.angle = this.node.angle;
            clone.zIndex = 9999;
            clone.position = cc.v3(this.node.x, this.node.y);
            if (clone.getComponent(cc.Sprite) != null)
                clone.getComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
            else
                clone.addComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
            clone.setContentSize(this.node.getContentSize());
            cc.tween(clone).to(0.08, { opacity: 0 }).start();
        }
    };
    SpiralProjectile.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            return;
        }
        this.currentTime += dt;
        this.spinAround(dt);
        this.putBackToPool();
    };
    __decorate([
        property(cc.Float)
    ], SpiralProjectile.prototype, "duration", void 0);
    __decorate([
        property(cc.Float)
    ], SpiralProjectile.prototype, "startRadius", void 0);
    __decorate([
        property(cc.Float)
    ], SpiralProjectile.prototype, "maxRadius", void 0);
    SpiralProjectile = __decorate([
        ccclass
    ], SpiralProjectile);
    return SpiralProjectile;
}(Projectile_1.default));
exports.default = SpiralProjectile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFNwaXJhbFByb2plY3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBQ3hDLGtFQUE2RDtBQUM3RCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVU7SUFBeEQ7UUFBQSxxRUEySEM7UUF6SEMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFXLEtBQUksQ0FBQyxRQUFRLENBQUM7UUFDckMsd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDOztJQTJHbkQsQ0FBQztJQTFHQyxnQ0FBSyxHQUFMLGNBQVMsQ0FBQztJQUNWLGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcs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O1FBQ0QsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNFO0lBS3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDSztJQVZMLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMkhwQztJQUFELHVCQUFDO0NBM0hELEFBMkhDLENBM0g2QyxvQkFBVSxHQTJIdkQ7a0JBM0hvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcbmltcG9ydCBQcm9qZWN0aWxlIGZyb20gXCIuLi9XZWFwb24vUHJvamVjdGlsZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpcmFsUHJvamVjdGlsZSBleHRlbmRzIFByb2plY3RpbGUge1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGR1cmF0aW9uOiBudW1iZXIgPSAzO1xuICBiYXNlRHVyYXRpb246IG51bWJlciA9IHRoaXMuZHVyYXRpb247XG4gIGR1cmF0aW9uUGVyY2VudGFnZTogbnVtYmVyID0gMDtcbiAgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgc3RhcnRSYWRpdXM6IG51bWJlciA9IDEwMDtcbiAgY3VycmVudFJhZGl1czogbnVtYmVyID0gMTAwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1heFJhZGl1czogbnVtYmVyID0gNDAwO1xuICBhbmdsZURlbHRhOiBudW1iZXIgPSAwO1xuICBwaXZvdDogY2MuTm9kZSA9IG51bGw7XG4gIGludGVydmFsID0gMC4wMTtcbiAgdGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gIHByZXZpb3VzOiBjYy5Ob2RlID0gbnVsbDtcbiAgdHJhaWxMaXN0OiBBcnJheTxjYy5Ob2RlPiA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICBzdGFydCgpIHt9XG4gIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDA7XG4gICAgdGhpcy5iYXNlRGFtYW5nZSA9IHRoaXMuZGFtYWdlO1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy53ZWFwb25TY2FsZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLnN0YXJ0UmFkaXVzO1xuICB9XG4gIHVwZGF0ZVN0YXRzKCkge1xuICAgIHRoaXMuZGFtYWdlID1cbiAgICAgICh0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlRGFtYW5nZSArIHRoaXMuYmFzZURhbWFuZ2U7XG4gICAgdGhpcy53ZWFwb25TY2FsZSA9XG4gICAgICAodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUgKyB0aGlzLmJhc2VTY2FsZTtcbiAgICB0aGlzLmR1cmF0aW9uID1cbiAgICAgIHRoaXMuYmFzZUR1cmF0aW9uICsgKHRoaXMuZHVyYXRpb25QZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZUR1cmF0aW9uO1xuICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMud2VhcG9uU2NhbGU7XG4gIH1cblxuICBzZXRTdGF0cyhcbiAgICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgYm9udXNEYW1hZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBoaXRMaW1pdDogbnVtYmVyLFxuICAgIGR1cmF0aW9uUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIHBpdm90OiBjYy5Ob2RlXG4gICkge1xuICAgIHRoaXMudGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gICAgdGhpcy5hbmdsZURlbHRhID0gMDtcbiAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLnN0YXJ0UmFkaXVzO1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuYmFzZURhbWFuZ2UgPSBib251c0RhbWFnZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSBkYW1hZ2VQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gd2VhcG9uU2NhbGVQZXJjZW50YWdlO1xuICAgIHRoaXMucGl2b3QgPSBwaXZvdDtcbiAgICB0aGlzLmhpdExpbWl0ID0gaGl0TGltaXQ7XG4gICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UgPSBkdXJhdGlvblBlcmNlbnRhZ2U7XG4gICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVTdGF0cygpO1xuICB9XG5cbiAgcHV0QmFja1RvUG9vbCgpIHtcbiAgICBpZiAodGhpcy5oaXRMaW1pdCA8PSAwKSB7XG4gICAgICB0aGlzLnRyYWlsTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2woZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudHJhaWxMaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKHRoaXMubm9kZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID49IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgIHRoaXMudHJhaWxMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UucHV0QmFja1RvUG9vbChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50cmFpbExpc3QubGVuZ3RoID0gMDtcbiAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgICB9XG4gIH1cbiAgc3BpbkFyb3VuZChkdDogbnVtYmVyKSB7XG4gICAgdGhpcy5hZGRUcmFpbChkdCk7XG4gICAgdGhpcy5ub2RlLmFuZ2xlICs9IGR0ICogMTUwMDtcbiAgICB0aGlzLmFuZ2xlRGVsdGEgLT0gZHQgKiA0O1xuICAgIHRoaXMuY3VycmVudFJhZGl1cyArPSBkdCAqIDkwO1xuICAgIGlmICh0aGlzLmN1cnJlbnRSYWRpdXMgPiB0aGlzLm1heFJhZGl1cylcbiAgICAgIHRoaXMuY3VycmVudFJhZGl1cyA9IHRoaXMubWF4UmFkaXVzO1xuICAgIHRoaXMubm9kZS54ID0gdGhpcy5waXZvdC54ICsgdGhpcy5jdXJyZW50UmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZURlbHRhKTtcbiAgICB0aGlzLm5vZGUueSA9IHRoaXMucGl2b3QueSArIHRoaXMuY3VycmVudFJhZGl1cyAqIE1hdGguc2luKHRoaXMuYW5nbGVEZWx0YSk7XG4gIH1cbiAgYWRkVHJhaWwoZHQpIHtcbiAgICBpZiAodGhpcy50aW1lID4gMCkgdGhpcy50aW1lIC09IGR0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy50aW1lID0gdGhpcy5pbnRlcnZhbDtcbiAgICAgIGxldCBjbG9uZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICBjbG9uZSA9IFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnRyYWlsUG9vbC5nZXQoKTtcblxuICAgICAgaWYgKGNsb25lID09IG51bGwpIHtcbiAgICAgICAgY2xvbmUgPSBuZXcgY2MuTm9kZShcIlRyYWlsXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyYWlsTGlzdC5wdXNoKGNsb25lKTtcbiAgICAgIGNsb25lLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICBjbG9uZS5zY2FsZSA9IHRoaXMubm9kZS5zY2FsZTtcbiAgICAgIGNsb25lLm9wYWNpdHkgPSAyMDA7XG4gICAgICBjbG9uZS5hbmdsZSA9IHRoaXMubm9kZS5hbmdsZTtcbiAgICAgIGNsb25lLnpJbmRleCA9IDk5OTk7XG5cbiAgICAgIGNsb25lLnBvc2l0aW9uID0gY2MudjModGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcbiAgICAgIGlmIChjbG9uZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSAhPSBudWxsKVxuICAgICAgICBjbG9uZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgY2MuU3ByaXRlXG4gICAgICAgICkuc3ByaXRlRnJhbWU7XG4gICAgICBlbHNlXG4gICAgICAgIGNsb25lLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcbiAgICAgICAgICBjYy5TcHJpdGVcbiAgICAgICAgKS5zcHJpdGVGcmFtZTtcbiAgICAgIGNsb25lLnNldENvbnRlbnRTaXplKHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpKTtcbiAgICAgIGNjLnR3ZWVuKGNsb25lKS50bygwLjA4LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50VGltZSArPSBkdDtcbiAgICB0aGlzLnNwaW5Bcm91bmQoZHQpO1xuICAgIHRoaXMucHV0QmFja1RvUG9vbCgpO1xuICB9XG59XG4iXX0=