
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/OrbitProjectile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7a1dmGKkBD14Hb0ld0GDsF', 'OrbitProjectile');
// Script/Weapon/OrbitProjectile.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var Projectile_1 = require("./Projectile");
var ShurikenThrower_1 = require("./ShurikenThrower");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrbitProjectile = /** @class */ (function (_super) {
    __extends(OrbitProjectile, _super);
    function OrbitProjectile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = 2;
        _this.baseDuration = _this.duration;
        _this.durationPercentage = 0;
        _this.currentTime = 0;
        _this.startRadius = 150;
        _this.currentRadius = 150;
        _this.maxRadius = 150;
        _this.angleDelta = 0;
        _this.isInPool = true;
        _this.pivot = null;
        _this.interval = 0.005;
        _this.time = _this.interval;
        _this.previous = 9999;
        _this.trailList = new Array();
        return _this;
    }
    OrbitProjectile.prototype.start = function () { };
    OrbitProjectile.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).takeDamage(this.damage);
            ShurikenThrower_1.default.instance.hitLimit -= 1;
        }
    };
    OrbitProjectile.prototype.onLoad = function () {
        this.node.zIndex = 10000;
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScale;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
        this.currentRadius = this.startRadius;
    };
    OrbitProjectile.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScale =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.duration =
            this.baseDuration + (this.durationPercentage / 100) * this.baseDuration;
        this.node.scale = this.weaponScale;
    };
    OrbitProjectile.prototype.setStats = function (damagePercentage, bonusDamage, weaponScalePercentage, durationPercentage, pivot, angleDelta) {
        this.isInPool = false;
        this.time = this.interval;
        this.angleDelta = angleDelta;
        this.currentRadius = this.startRadius;
        this.currentTime = 0;
        this.baseDamange = bonusDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.pivot = pivot;
        this.durationPercentage = durationPercentage;
        this.lock = false;
        this.updateStats();
    };
    OrbitProjectile.prototype.putBackToPool = function () {
        if (this.currentTime >= this.duration) {
            this.isInPool = true;
            this.trailList.forEach(function (element) {
                ProjectilePooling_1.default.instance.putBackToPool(element);
            });
            this.trailList.length = 0;
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
    };
    OrbitProjectile.prototype.forceToPutBack = function () {
        this.isInPool = true;
        this.trailList.forEach(function (element) {
            ProjectilePooling_1.default.instance.putBackToPool(element);
        });
        this.trailList.length = 0;
        ProjectilePooling_1.default.instance.putBackToPool(this.node);
    };
    OrbitProjectile.prototype.orbitAround = function (dt) {
        this.addTrail(dt);
        this.node.angle += dt * 1500;
        this.angleDelta -= dt * 2.5;
        if (this.currentRadius > this.maxRadius)
            this.currentRadius = this.maxRadius;
        this.node.x = this.pivot.x + this.currentRadius * Math.cos(this.angleDelta);
        this.node.y = this.pivot.y + this.currentRadius * Math.sin(this.angleDelta);
    };
    OrbitProjectile.prototype.addTrail = function (dt) {
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
    OrbitProjectile.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        this.currentTime += dt;
        this.orbitAround(dt);
        this.putBackToPool();
        // for (let i = 0; i < this.trailList.length; i++) {
        //   this.trailList[i].opacity -= dt * 100;
        // }
    };
    __decorate([
        property(cc.Float)
    ], OrbitProjectile.prototype, "duration", void 0);
    __decorate([
        property(cc.Float)
    ], OrbitProjectile.prototype, "startRadius", void 0);
    __decorate([
        property(cc.Float)
    ], OrbitProjectile.prototype, "maxRadius", void 0);
    __decorate([
        property(cc.Float)
    ], OrbitProjectile.prototype, "angleDelta", void 0);
    OrbitProjectile = __decorate([
        ccclass
    ], OrbitProjectile);
    return OrbitProjectile;
}(Projectile_1.default));
exports.default = OrbitProjectile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXE9yYml0UHJvamVjdGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFDeEMsNERBQXVEO0FBQ3ZELGtFQUE2RDtBQUM3RCwyQ0FBc0M7QUFDdEMscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFVO0lBQXZEO1FBQUEscUVBMElDO1FBeElDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsa0JBQVksR0FBVyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLHdCQUFrQixHQUFXLENBQUMsQ0FBQztRQUMvQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsZUFBUyxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDOztJQXdIbkQsQ0FBQztJQXZIQywrQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUNWLDBDQUFnQixHQUFoQixVQUFpQixLQUFrQixFQUFFLElBQWlCO1FBQ3BELElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7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QUFNLENBQ1YsQ0FBQyxXQUFXLENBQUM7WUFDaEIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBQ0QsZ0NBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLGVBQUssQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixvREFBb0Q7UUFDcEQsMkNBQTJDO1FBQzNDLElBQUk7SUFDTixDQUFDO0lBdklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0U7SUFLckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ0k7SUFaSixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBMEluQztJQUFELHNCQUFDO0NBMUlELEFBMElDLENBMUk0QyxvQkFBVSxHQTBJdEQ7a0JBMUlvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi4vRW5lbXkvRW5lbXlDb250cm9sbGVyXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcbmltcG9ydCBQcm9qZWN0aWxlIGZyb20gXCIuL1Byb2plY3RpbGVcIjtcbmltcG9ydCBTaHVyaWtlblRocm93ZXIgZnJvbSBcIi4vU2h1cmlrZW5UaHJvd2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmJpdFByb2plY3RpbGUgZXh0ZW5kcyBQcm9qZWN0aWxlIHtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBkdXJhdGlvbjogbnVtYmVyID0gMjtcbiAgYmFzZUR1cmF0aW9uOiBudW1iZXIgPSB0aGlzLmR1cmF0aW9uO1xuICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHN0YXJ0UmFkaXVzOiBudW1iZXIgPSAxNTA7XG4gIGN1cnJlbnRSYWRpdXM6IG51bWJlciA9IDE1MDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBtYXhSYWRpdXM6IG51bWJlciA9IDE1MDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBhbmdsZURlbHRhOiBudW1iZXIgPSAwO1xuICBpc0luUG9vbDogYm9vbGVhbiA9IHRydWU7XG4gIHBpdm90OiBjYy5Ob2RlID0gbnVsbDtcbiAgaW50ZXJ2YWwgPSAwLjAwNTtcbiAgdGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gIHByZXZpb3VzOiBudW1iZXIgPSA5OTk5O1xuICB0cmFpbExpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIHN0YXJ0KCkge31cbiAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XG4gICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xuICAgICAgU2h1cmlrZW5UaHJvd2VyLmluc3RhbmNlLmhpdExpbWl0IC09IDE7XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDA7XG4gICAgdGhpcy5iYXNlRGFtYW5nZSA9IHRoaXMuZGFtYWdlO1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy53ZWFwb25TY2FsZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLnN0YXJ0UmFkaXVzO1xuICB9XG4gIHVwZGF0ZVN0YXRzKCkge1xuICAgIHRoaXMuZGFtYWdlID1cbiAgICAgICh0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlRGFtYW5nZSArIHRoaXMuYmFzZURhbWFuZ2U7XG4gICAgdGhpcy53ZWFwb25TY2FsZSA9XG4gICAgICAodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUgKyB0aGlzLmJhc2VTY2FsZTtcbiAgICB0aGlzLmR1cmF0aW9uID1cbiAgICAgIHRoaXMuYmFzZUR1cmF0aW9uICsgKHRoaXMuZHVyYXRpb25QZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZUR1cmF0aW9uO1xuICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMud2VhcG9uU2NhbGU7XG4gIH1cblxuICBzZXRTdGF0cyhcbiAgICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgYm9udXNEYW1hZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBwaXZvdDogY2MuTm9kZSxcbiAgICBhbmdsZURlbHRhOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5pc0luUG9vbCA9IGZhbHNlO1xuICAgIHRoaXMudGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gICAgdGhpcy5hbmdsZURlbHRhID0gYW5nbGVEZWx0YTtcbiAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLnN0YXJ0UmFkaXVzO1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuYmFzZURhbWFuZ2UgPSBib251c0RhbWFnZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSBkYW1hZ2VQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gd2VhcG9uU2NhbGVQZXJjZW50YWdlO1xuICAgIHRoaXMucGl2b3QgPSBwaXZvdDtcblxuICAgIHRoaXMuZHVyYXRpb25QZXJjZW50YWdlID0gZHVyYXRpb25QZXJjZW50YWdlO1xuICAgIHRoaXMubG9jayA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlU3RhdHMoKTtcbiAgfVxuXG4gIHB1dEJhY2tUb1Bvb2woKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgdGhpcy5pc0luUG9vbCA9IHRydWU7XG4gICAgICB0aGlzLnRyYWlsTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2woZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudHJhaWxMaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKHRoaXMubm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VUb1B1dEJhY2soKSB7XG4gICAgdGhpcy5pc0luUG9vbCA9IHRydWU7XG4gICAgdGhpcy50cmFpbExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UucHV0QmFja1RvUG9vbChlbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLnRyYWlsTGlzdC5sZW5ndGggPSAwO1xuICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgfVxuXG4gIG9yYml0QXJvdW5kKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLmFkZFRyYWlsKGR0KTtcbiAgICB0aGlzLm5vZGUuYW5nbGUgKz0gZHQgKiAxNTAwO1xuICAgIHRoaXMuYW5nbGVEZWx0YSAtPSBkdCAqIDIuNTtcbiAgICBpZiAodGhpcy5jdXJyZW50UmFkaXVzID4gdGhpcy5tYXhSYWRpdXMpXG4gICAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLm1heFJhZGl1cztcbiAgICB0aGlzLm5vZGUueCA9IHRoaXMucGl2b3QueCArIHRoaXMuY3VycmVudFJhZGl1cyAqIE1hdGguY29zKHRoaXMuYW5nbGVEZWx0YSk7XG4gICAgdGhpcy5ub2RlLnkgPSB0aGlzLnBpdm90LnkgKyB0aGlzLmN1cnJlbnRSYWRpdXMgKiBNYXRoLnNpbih0aGlzLmFuZ2xlRGVsdGEpO1xuICB9XG5cbiAgYWRkVHJhaWwoZHQpIHtcbiAgICBpZiAodGhpcy50aW1lID4gMCkgdGhpcy50aW1lIC09IGR0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy50aW1lID0gdGhpcy5pbnRlcnZhbDtcbiAgICAgIGxldCBjbG9uZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICBjbG9uZSA9IFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnRyYWlsUG9vbC5nZXQoKTtcblxuICAgICAgaWYgKGNsb25lID09IG51bGwpIHtcbiAgICAgICAgY2xvbmUgPSBuZXcgY2MuTm9kZShcIlRyYWlsXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyYWlsTGlzdC5wdXNoKGNsb25lKTtcbiAgICAgIGNsb25lLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICBjbG9uZS5zY2FsZSA9IHRoaXMubm9kZS5zY2FsZTtcbiAgICAgIGNsb25lLm9wYWNpdHkgPSAyMDA7XG4gICAgICBjbG9uZS5hbmdsZSA9IHRoaXMubm9kZS5hbmdsZTtcbiAgICAgIGNsb25lLnpJbmRleCA9IDk5OTk7XG5cbiAgICAgIGNsb25lLnBvc2l0aW9uID0gY2MudjModGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcbiAgICAgIGlmIChjbG9uZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSAhPSBudWxsKVxuICAgICAgICBjbG9uZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgY2MuU3ByaXRlXG4gICAgICAgICkuc3ByaXRlRnJhbWU7XG4gICAgICBlbHNlXG4gICAgICAgIGNsb25lLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcbiAgICAgICAgICBjYy5TcHJpdGVcbiAgICAgICAgKS5zcHJpdGVGcmFtZTtcbiAgICAgIGNsb25lLnNldENvbnRlbnRTaXplKHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpKTtcbiAgICAgIGNjLnR3ZWVuKGNsb25lKS50bygwLjA4LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGR0O1xuICAgIHRoaXMub3JiaXRBcm91bmQoZHQpO1xuICAgIHRoaXMucHV0QmFja1RvUG9vbCgpO1xuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYWlsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgdGhpcy50cmFpbExpc3RbaV0ub3BhY2l0eSAtPSBkdCAqIDEwMDtcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==