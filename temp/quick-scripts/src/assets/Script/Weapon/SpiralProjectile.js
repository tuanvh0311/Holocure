"use strict";
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