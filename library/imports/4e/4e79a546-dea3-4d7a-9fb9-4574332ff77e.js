"use strict";
cc._RF.push(module, '4e79aVG3qNNep+5RXQzL/d+', 'AxeThrower');
// Script/Weapon/AxeThrower.ts

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
var SpiralProjectile_1 = require("./SpiralProjectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AxeThrower = /** @class */ (function (_super) {
    __extends(AxeThrower, _super);
    function AxeThrower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.axe = null;
        _this.player = null;
        _this.parent = null;
        _this.throwSound = null;
        _this.hitLimit = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    AxeThrower_1 = AxeThrower;
    AxeThrower.prototype.onLoad = function () {
        AxeThrower_1.instance = this;
        this.weaponOnLoad();
        this.durationPercentage = 0;
        this.timer = 0;
        var initCount = 10;
        this.description = "Throw an axe that spirals outward from the player.";
        for (var i = 0; i < initCount; ++i) {
            var axe = cc.instantiate(this.axe);
            axe.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.axePool.put(axe);
        }
    };
    AxeThrower.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "Increase size of axe by 20%. Increase damage of axe by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Reduce delay between attacks by 20%.";
                    this.updateStats(20, 0, 0, 0, 20, 0);
                    break;
                case 3:
                    this.description = "Increase damage by 33%";
                    this.updateStats(0, 0, 0, 20, 0, 0);
                    break;
                case 4:
                    this.description = "Remove hit limit, and lasts 1 second longer.";
                    this.updateStats(33, 0, 0, 0, 0, 0);
                    break;
                case 5:
                    this.description = "Increase attack size by 30%.";
                    this.updateStats(0, 0, 99999999, 0, 0, 33.3);
                    break;
                case 6:
                    this.description = "Increase damage by 50%.";
                    this.updateStats(0, 0, 0, 0, 30, 0);
                    break;
                case 7:
                    this.updateStats(50, 0, 0, 0, 0, 0);
                    break;
                default:
                    break;
            }
        }
    };
    AxeThrower.prototype.spawnAxe = function () {
        var axe = null;
        if (ProjectilePooling_1.default.instance.axePool.size() > 0) {
            axe = ProjectilePooling_1.default.instance.axePool.get();
        }
        else {
            axe = cc.instantiate(this.axe);
        }
        axe.opacity = 0;
        cc.tween(axe).to(0.05, { opacity: 255 }).start();
        axe.parent = this.parent;
        axe
            .getComponent(SpiralProjectile_1.default)
            .setStats(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.hitLimit, this.durationPercentage, this.player);
    };
    AxeThrower.prototype.updateStats = function (damagePercentage, baseDamage, hitLimit, attackSpeedPercentage, weaponScalePercentage, durationPercentage) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.hitLimit += hitLimit;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.durationPercentage += durationPercentage;
        this.onStatChange();
    };
    AxeThrower.prototype.throwAxe = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.throwSound, false, 1);
            this.timer = this.attackSpeed;
            this.spawnAxe();
        }
    };
    AxeThrower.prototype.start = function () { };
    AxeThrower.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.throwAxe();
    };
    var AxeThrower_1;
    __decorate([
        property(cc.Prefab)
    ], AxeThrower.prototype, "axe", void 0);
    __decorate([
        property(cc.Node)
    ], AxeThrower.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], AxeThrower.prototype, "parent", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AxeThrower.prototype, "throwSound", void 0);
    AxeThrower = AxeThrower_1 = __decorate([
        ccclass
    ], AxeThrower);
    return AxeThrower;
}(Weapon_1.default));
exports.default = AxeThrower;

cc._RF.pop();