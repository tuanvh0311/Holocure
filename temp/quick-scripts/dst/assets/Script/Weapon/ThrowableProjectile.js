
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/ThrowableProjectile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3cf38Ri2VGc6DPWJLQub4W', 'ThrowableProjectile');
// Script/Weapon/ThrowableProjectile.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThrowableProjectile = /** @class */ (function (_super) {
    __extends(ThrowableProjectile, _super);
    function ThrowableProjectile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.velocity = cc.Vec2.ZERO;
        _this.sprite = null;
        _this.speed = 1000;
        _this.damage = 20;
        _this.weaponScale = 1;
        _this.duration = 3;
        _this.lavaLand = null;
        _this.targetPos = null;
        _this.dt = 0;
        _this.isLanded = false;
        _this.timer = 100;
        _this.interval = 0.01;
        _this.time = _this.interval;
        _this.lock = false;
        _this.curveY = 0;
        _this.travelTime = 0;
        _this.currentTime = 0;
        _this.previous = null;
        _this.trailList = new Array();
        return _this;
    }
    ThrowableProjectile.prototype.onCollisionStay = function (other, self) {
        if (other.tag == 1) {
            other.node
                .getComponent(EnemyController_1.default)
                .takeDamageWithTick(this.damage, 0.5);
        }
    };
    ThrowableProjectile.prototype.set = function (damagePercentage, baseDamage, weaponScalePercentage, durationPercentage, target, position) {
        this.baseDamange = baseDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.durationPercentage = durationPercentage;
        this.targetPos = target;
        this.node.position = position;
        this.node.getComponent(cc.Animation).stop();
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite;
        this.isLanded = false;
        this.lock = false;
        this.timer = 100;
        this.currentTime = 0;
        this.node.getComponent(cc.CircleCollider).enabled = false;
        this.updateStats();
    };
    ThrowableProjectile.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScale =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.duration =
            -(this.durationPercentage / 100) * this.baseDuration + this.baseDuration;
    };
    ThrowableProjectile.prototype.onLand = function () {
        if ((!this.isLanded && this.distanceToTarget() < 50) ||
            (!this.isLanded && this.currentTime > this.travelTime)) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.lavaLand, false, 1);
            this.node.zIndex = 1;
            this.trailList.forEach(function (element) {
                ProjectilePooling_1.default.instance.putBackToPool(element);
            });
            this.trailList.length = 0;
            this.node.getComponent(cc.Animation).play("MollySpread");
            this.node.scale = this.weaponScale / 2;
            cc.tween(this.node).to(0.42, { scale: this.weaponScale }).start();
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            this.node.getComponent(cc.CircleCollider).enabled = true;
            this.isLanded = true;
        }
        if (this.isLanded &&
            !this.node.getComponent(cc.Animation).getAnimationState("MollySpread")
                .isPlaying &&
            !this.node.getComponent(cc.Animation).getAnimationState("MollyOnGround")
                .isPlaying) {
            this.timer = this.duration;
            this.node.getComponent(cc.Animation).play("MollyOnGround");
        }
    };
    ThrowableProjectile.prototype.distanceToTarget = function () {
        var distanceX = (this.targetPos.x - this.node.x) * (this.targetPos.x - this.node.x);
        var distanceY = (this.targetPos.y - this.node.y) * (this.targetPos.y - this.node.y);
        var distance = Math.sqrt(distanceX + distanceY);
        return distance;
    };
    ThrowableProjectile.prototype.onLoad = function () {
        this.node.getComponent(cc.CircleCollider).enabled = false;
        this.node.scale = 0.3;
        this.node.zIndex = 10001;
        this.baseDamange = this.damage;
        this.baseDuration = this.duration;
        this.baseScale = this.weaponScale;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
        this.durationPercentage = 0;
    };
    ThrowableProjectile.prototype.start = function () { };
    ThrowableProjectile.prototype.lockTarget = function (dt) {
        if (this.isLanded)
            return;
        if (this.lock)
            return;
        this.lock = true;
        var deltaX = this.targetPos.x - this.node.x;
        var deltaY = this.targetPos.y - this.node.y;
        this.directionVector = cc.v2(deltaX, deltaY);
        this.travelTime = this.distanceToTarget() / this.speed;
        if (this.travelTime > 0.5)
            this.travelTime = 0.5;
        // this.node.x += this.directionVector.normalize().x * this.speed * dt;
        // this.node.y += this.directionVector.normalize().y * this.speed * dt;
        this.velocity = cc.v2(this.directionVector.normalize().x * this.speed, this.directionVector.normalize().y * this.speed + 150);
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.velocity.x, this.velocity.y);
    };
    ThrowableProjectile.prototype.moveNode = function (dt) {
        if (this.isLanded)
            return;
        this.node.scale = 0.3;
        this.addTrail(dt);
        this.curveY = dt * 1000;
        this.velocity.y -= this.curveY;
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.velocity.x * dt * 50, this.velocity.y * dt * 50);
        this.node.angle =
            Math.atan2(this.velocity.y, this.velocity.x) * (180 / Math.PI);
    };
    ThrowableProjectile.prototype.addTrail = function (dt) {
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
    ThrowableProjectile.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            this.node.getComponent(cc.Animation).pause();
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            return;
        }
        this.node.getComponent(cc.Animation).resume();
        if (this.targetPos == null)
            return;
        this.timer -= dt;
        this.currentTime += dt;
        if (this.timer < 0) {
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
        this.moveNode(dt);
        this.lockTarget(dt);
        this.onLand();
    };
    __decorate([
        property(cc.SpriteFrame)
    ], ThrowableProjectile.prototype, "sprite", void 0);
    __decorate([
        property(cc.Float)
    ], ThrowableProjectile.prototype, "damage", void 0);
    __decorate([
        property(cc.Float)
    ], ThrowableProjectile.prototype, "weaponScale", void 0);
    __decorate([
        property(cc.Float)
    ], ThrowableProjectile.prototype, "duration", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ThrowableProjectile.prototype, "lavaLand", void 0);
    ThrowableProjectile = __decorate([
        ccclass
    ], ThrowableProjectile);
    return ThrowableProjectile;
}(cc.Component));
exports.default = ThrowableProjectile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFRocm93YWJsZVByb2plY3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBQ3hDLDREQUF1RDtBQUN2RCxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUE4TUM7UUE3TUMsY0FBUSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRWpDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBQzlCLFdBQUssR0FBRyxJQUFJLENBQUM7UUFFYixZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsUUFBRSxHQUFXLENBQUMsQ0FBQztRQVFmLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBSSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDOztJQStLbkQsQ0FB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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNIO0lBRWhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ047SUFFYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3lEQUNPO0lBWlgsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0E4TXZDO0lBQUQsMEJBQUM7Q0E5TUQsQUE4TUMsQ0E5TWdELEVBQUUsQ0FBQyxTQUFTLEdBOE01RDtrQkE5TW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBFbmVteUNvbnRyb2xsZXIgZnJvbSBcIi4uL0VuZW15L0VuZW15Q29udHJvbGxlclwiO1xuaW1wb3J0IFByb2plY3RpbGVQb29saW5nIGZyb20gXCIuLi9NYW5hZ2VyL1Byb2plY3RpbGVQb29saW5nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJvd2FibGVQcm9qZWN0aWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgdmVsb2NpdHk6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgc3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIHNwZWVkID0gMTAwMDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBkYW1hZ2UgPSAyMDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICB3ZWFwb25TY2FsZSA9IDE7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgZHVyYXRpb24gPSAzO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBsYXZhTGFuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgdGFyZ2V0UG9zOiBjYy5WZWMzID0gbnVsbDtcbiAgZHQ6IG51bWJlciA9IDA7XG4gIGJhc2VEYW1hbmdlOiBudW1iZXI7XG4gIGJhc2VTY2FsZTogbnVtYmVyO1xuICBiYXNlRHVyYXRpb246IG51bWJlcjtcbiAgZGFtYWdlUGVyY2VudGFnZTogbnVtYmVyO1xuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgZHVyYXRpb25QZXJjZW50YWdlOiBudW1iZXI7XG4gIGRpcmVjdGlvblZlY3RvcjogY2MuVmVjMjtcbiAgaXNMYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGltZXIgPSAxMDA7XG4gIGludGVydmFsID0gMC4wMTtcbiAgdGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gIGxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY3VydmVZOiBudW1iZXIgPSAwO1xuICB0cmF2ZWxUaW1lOiBudW1iZXIgPSAwO1xuICBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcbiAgcHJldmlvdXM6IGNjLk5vZGUgPSBudWxsO1xuICB0cmFpbExpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgb25Db2xsaXNpb25TdGF5KG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgIG90aGVyLm5vZGVcbiAgICAgICAgLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpXG4gICAgICAgIC50YWtlRGFtYWdlV2l0aFRpY2sodGhpcy5kYW1hZ2UsIDAuNSk7XG4gICAgfVxuICB9XG4gIHNldChcbiAgICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgYmFzZURhbWFnZTogbnVtYmVyLFxuICAgIHdlYXBvblNjYWxlUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIGR1cmF0aW9uUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIHRhcmdldDogY2MuVmVjMyxcbiAgICBwb3NpdGlvbjogY2MuVmVjM1xuICApIHtcbiAgICB0aGlzLmJhc2VEYW1hbmdlID0gYmFzZURhbWFnZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSBkYW1hZ2VQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gd2VhcG9uU2NhbGVQZXJjZW50YWdlO1xuICAgIHRoaXMuZHVyYXRpb25QZXJjZW50YWdlID0gZHVyYXRpb25QZXJjZW50YWdlO1xuICAgIHRoaXMudGFyZ2V0UG9zID0gdGFyZ2V0O1xuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU7XG4gICAgdGhpcy5pc0xhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMubG9jayA9IGZhbHNlO1xuICAgIHRoaXMudGltZXIgPSAxMDA7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlU3RhdHMoKTtcbiAgfVxuICB1cGRhdGVTdGF0cygpIHtcbiAgICB0aGlzLmRhbWFnZSA9XG4gICAgICAodGhpcy5kYW1hZ2VQZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZURhbWFuZ2UgKyB0aGlzLmJhc2VEYW1hbmdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGUgPVxuICAgICAgKHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZVNjYWxlICsgdGhpcy5iYXNlU2NhbGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9XG4gICAgICAtKHRoaXMuZHVyYXRpb25QZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZUR1cmF0aW9uICsgdGhpcy5iYXNlRHVyYXRpb247XG4gIH1cblxuICBvbkxhbmQoKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzTGFuZGVkICYmIHRoaXMuZGlzdGFuY2VUb1RhcmdldCgpIDwgNTApIHx8XG4gICAgICAoIXRoaXMuaXNMYW5kZWQgJiYgdGhpcy5jdXJyZW50VGltZSA+IHRoaXMudHJhdmVsVGltZSlcbiAgICApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubGF2YUxhbmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxO1xuICAgICAgdGhpcy50cmFpbExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRyYWlsTGlzdC5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJNb2xseVNwcmVhZFwiKTtcbiAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMud2VhcG9uU2NhbGUgLyAyO1xuICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjQyLCB7IHNjYWxlOiB0aGlzLndlYXBvblNjYWxlIH0pLnN0YXJ0KCk7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pc0xhbmRlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuaXNMYW5kZWQgJiZcbiAgICAgICF0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuZ2V0QW5pbWF0aW9uU3RhdGUoXCJNb2xseVNwcmVhZFwiKVxuICAgICAgICAuaXNQbGF5aW5nICYmXG4gICAgICAhdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmdldEFuaW1hdGlvblN0YXRlKFwiTW9sbHlPbkdyb3VuZFwiKVxuICAgICAgICAuaXNQbGF5aW5nXG4gICAgKSB7XG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiTW9sbHlPbkdyb3VuZFwiKTtcbiAgICB9XG4gIH1cbiAgZGlzdGFuY2VUb1RhcmdldCgpIHtcbiAgICB2YXIgZGlzdGFuY2VYID1cbiAgICAgICh0aGlzLnRhcmdldFBvcy54IC0gdGhpcy5ub2RlLngpICogKHRoaXMudGFyZ2V0UG9zLnggLSB0aGlzLm5vZGUueCk7XG4gICAgdmFyIGRpc3RhbmNlWSA9XG4gICAgICAodGhpcy50YXJnZXRQb3MueSAtIHRoaXMubm9kZS55KSAqICh0aGlzLnRhcmdldFBvcy55IC0gdGhpcy5ub2RlLnkpO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVggKyBkaXN0YW5jZVkpO1xuICAgIHJldHVybiBkaXN0YW5jZTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuMztcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDE7XG4gICAgdGhpcy5iYXNlRGFtYW5nZSA9IHRoaXMuZGFtYWdlO1xuICAgIHRoaXMuYmFzZUR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMud2VhcG9uU2NhbGU7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UgPSAwO1xuICB9XG4gIHN0YXJ0KCkge31cbiAgbG9ja1RhcmdldChkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNMYW5kZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5sb2NrKSByZXR1cm47XG4gICAgdGhpcy5sb2NrID0gdHJ1ZTtcbiAgICB2YXIgZGVsdGFYID0gdGhpcy50YXJnZXRQb3MueCAtIHRoaXMubm9kZS54O1xuICAgIHZhciBkZWx0YVkgPSB0aGlzLnRhcmdldFBvcy55IC0gdGhpcy5ub2RlLnk7XG4gICAgdGhpcy5kaXJlY3Rpb25WZWN0b3IgPSBjYy52MihkZWx0YVgsIGRlbHRhWSk7XG4gICAgdGhpcy50cmF2ZWxUaW1lID0gdGhpcy5kaXN0YW5jZVRvVGFyZ2V0KCkgLyB0aGlzLnNwZWVkO1xuICAgIGlmICh0aGlzLnRyYXZlbFRpbWUgPiAwLjUpIHRoaXMudHJhdmVsVGltZSA9IDAuNTtcbiAgICAvLyB0aGlzLm5vZGUueCArPSB0aGlzLmRpcmVjdGlvblZlY3Rvci5ub3JtYWxpemUoKS54ICogdGhpcy5zcGVlZCAqIGR0O1xuICAgIC8vIHRoaXMubm9kZS55ICs9IHRoaXMuZGlyZWN0aW9uVmVjdG9yLm5vcm1hbGl6ZSgpLnkgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGNjLnYyKFxuICAgICAgdGhpcy5kaXJlY3Rpb25WZWN0b3Iubm9ybWFsaXplKCkueCAqIHRoaXMuc3BlZWQsXG4gICAgICB0aGlzLmRpcmVjdGlvblZlY3Rvci5ub3JtYWxpemUoKS55ICogdGhpcy5zcGVlZCArIDE1MFxuICAgICk7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoXG4gICAgICB0aGlzLnZlbG9jaXR5LngsXG4gICAgICB0aGlzLnZlbG9jaXR5LnlcbiAgICApO1xuICB9XG4gIG1vdmVOb2RlKGR0KSB7XG4gICAgaWYgKHRoaXMuaXNMYW5kZWQpIHJldHVybjtcbiAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjM7XG4gICAgdGhpcy5hZGRUcmFpbChkdCk7XG4gICAgdGhpcy5jdXJ2ZVkgPSBkdCAqIDEwMDA7XG4gICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuY3VydmVZO1xuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKFxuICAgICAgdGhpcy52ZWxvY2l0eS54ICogZHQgKiA1MCxcbiAgICAgIHRoaXMudmVsb2NpdHkueSAqIGR0ICogNTBcbiAgICApO1xuICAgIHRoaXMubm9kZS5hbmdsZSA9XG4gICAgICBNYXRoLmF0YW4yKHRoaXMudmVsb2NpdHkueSwgdGhpcy52ZWxvY2l0eS54KSAqICgxODAgLyBNYXRoLlBJKTtcbiAgfVxuICBhZGRUcmFpbChkdCkge1xuICAgIGlmICh0aGlzLnRpbWUgPiAwKSB0aGlzLnRpbWUgLT0gZHQ7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRpbWUgPSB0aGlzLmludGVydmFsO1xuICAgICAgbGV0IGNsb25lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgIGNsb25lID0gUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UudHJhaWxQb29sLmdldCgpO1xuXG4gICAgICBpZiAoY2xvbmUgPT0gbnVsbCkge1xuICAgICAgICBjbG9uZSA9IG5ldyBjYy5Ob2RlKFwiVHJhaWxcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhaWxMaXN0LnB1c2goY2xvbmUpO1xuICAgICAgY2xvbmUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgIGNsb25lLnNjYWxlID0gdGhpcy5ub2RlLnNjYWxlO1xuICAgICAgY2xvbmUub3BhY2l0eSA9IDIwMDtcbiAgICAgIGNsb25lLmFuZ2xlID0gdGhpcy5ub2RlLmFuZ2xlO1xuICAgICAgY2xvbmUuekluZGV4ID0gOTk5OTtcblxuICAgICAgY2xvbmUucG9zaXRpb24gPSBjYy52Myh0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgaWYgKGNsb25lLmdldENvbXBvbmVudChjYy5TcHJpdGUpICE9IG51bGwpXG4gICAgICAgIGNsb25lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcbiAgICAgICAgICBjYy5TcHJpdGVcbiAgICAgICAgKS5zcHJpdGVGcmFtZTtcbiAgICAgIGVsc2VcbiAgICAgICAgY2xvbmUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgIGNjLlNwcml0ZVxuICAgICAgICApLnNwcml0ZUZyYW1lO1xuICAgICAgY2xvbmUuc2V0Q29udGVudFNpemUodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkpO1xuICAgICAgY2MudHdlZW4oY2xvbmUpLnRvKDAuMDgsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGF1c2UoKTtcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucmVzdW1lKCk7XG4gICAgaWYgKHRoaXMudGFyZ2V0UG9zID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlTm9kZShkdCk7XG4gICAgdGhpcy5sb2NrVGFyZ2V0KGR0KTtcblxuICAgIHRoaXMub25MYW5kKCk7XG4gIH1cbn1cbiJdfQ==