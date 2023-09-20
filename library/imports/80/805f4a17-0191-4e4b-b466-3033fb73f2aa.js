"use strict";
cc._RF.push(module, '805f4oXAZFOS7RmMDP7c/Kq', 'ShurikenThrower');
// Script/Weapon/ShurikenThrower.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var OrbitProjectile_1 = require("./OrbitProjectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShurikenThrower = /** @class */ (function (_super) {
    __extends(ShurikenThrower, _super);
    function ShurikenThrower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shuriken = null;
        _this.player = null;
        _this.parent = null;
        _this.hitLimit = 5;
        _this.baseHitLimit = _this.hitLimit;
        _this.spawnAmount = 3;
        _this.shurikenList = new Array();
        _this.currentLevel = _this.level;
        return _this;
    }
    ShurikenThrower_1 = ShurikenThrower;
    ShurikenThrower.prototype.onLoad = function () {
        ShurikenThrower_1.instance = this;
        this.durationPercentage = 0;
        this.weaponOnLoad();
        this.timer = 0;
        var initCount = 10;
        this.description = "Repels targets with orbiting shurikens.";
        for (var i = 0; i < initCount; ++i) {
            var shuriken = cc.instantiate(this.shuriken);
            shuriken.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.shurikenPool.put(shuriken);
        }
    };
    ShurikenThrower.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Add 1 additional shuriken.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description =
                        "Increase damage by 30% and increase duration by 1 second.";
                    this.spawnAmount += 1;
                    break;
                case 3:
                    this.description = "Add 1 additional shuriken.";
                    this.updateStats(30, 0, 0, 0, 0, 50);
                    break;
                case 4:
                    this.description = "Increase Damage by 40%.";
                    this.spawnAmount += 1;
                    break;
                case 5:
                    this.description = "Add 1 additional shuriken.";
                    this.updateStats(40, 0, 0, 0, 0, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 40%.";
                    this.spawnAmount += 1;
                    break;
                case 7:
                    this.updateStats(40, 0, 0, 0, 0, 0);
                    break;
                default:
                    break;
            }
        }
    };
    ShurikenThrower.prototype.spawnShuriken = function (angleDelta) {
        var shuriken = null;
        if (ProjectilePooling_1.default.instance.shurikenPool.size() > 0) {
            shuriken = ProjectilePooling_1.default.instance.shurikenPool.get();
        }
        else {
            shuriken = cc.instantiate(this.shuriken);
        }
        shuriken.opacity = 0;
        cc.tween(shuriken).to(0.05, { opacity: 255 }).start();
        shuriken.parent = this.parent;
        shuriken
            .getComponent(OrbitProjectile_1.default)
            .setStats(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.durationPercentage, this.player, angleDelta);
        this.shurikenList.push(shuriken);
    };
    ShurikenThrower.prototype.updateStats = function (damagePercentage, baseDamage, hitLimit, attackSpeedPercentage, weaponScalePercentage, durationPercentage) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.hitLimit += hitLimit;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.durationPercentage += durationPercentage;
        this.onStatChange();
    };
    ShurikenThrower.prototype.throwShuriken = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            this.hitLimit = this.baseHitLimit * this.spawnAmount;
            for (var i = 0; i < this.spawnAmount; i++) {
                var angleDelta = (360 / this.spawnAmount) * i * (Math.PI / 180);
                this.spawnShuriken(angleDelta);
            }
        }
        this.shurikenList = this.shurikenList.filter(function (item) { return item.getComponent(OrbitProjectile_1.default).isInPool !== true; });
    };
    ShurikenThrower.prototype.onNoHitLimit = function () {
        if (this.hitLimit <= 0) {
            this.shurikenList.forEach(function (element) {
                element.getComponent(OrbitProjectile_1.default).forceToPutBack();
            });
        }
    };
    ShurikenThrower.prototype.start = function () { };
    ShurikenThrower.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.throwShuriken();
        this.onNoHitLimit();
    };
    var ShurikenThrower_1;
    __decorate([
        property(cc.Prefab)
    ], ShurikenThrower.prototype, "shuriken", void 0);
    __decorate([
        property(cc.Node)
    ], ShurikenThrower.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], ShurikenThrower.prototype, "parent", void 0);
    ShurikenThrower = ShurikenThrower_1 = __decorate([
        ccclass
    ], ShurikenThrower);
    return ShurikenThrower;
}(Weapon_1.default));
exports.default = ShurikenThrower;

cc._RF.pop();