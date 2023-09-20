"use strict";
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