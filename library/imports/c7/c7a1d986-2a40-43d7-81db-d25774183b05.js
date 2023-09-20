"use strict";
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