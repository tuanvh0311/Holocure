"use strict";
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