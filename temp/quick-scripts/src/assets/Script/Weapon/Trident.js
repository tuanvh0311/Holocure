"use strict";
cc._RF.push(module, 'b0a27u68OxAsa5L6qIjpdoh', 'Trident');
// Script/Weapon/Trident.ts

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
var Movement_1 = require("../Controller/Movement");
var Utils_1 = require("../Controller/Utils");
var Melee_1 = require("./Melee");
var StartWeapon_1 = require("./StartWeapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Trident = /** @class */ (function (_super) {
    __extends(Trident, _super);
    function Trident() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftThrust = null;
        _this.rightThrust = null;
        _this.midThrust = null;
        _this.thrustSound = null;
        _this.statsRight = null;
        _this.statsLeft = null;
        _this.statsMiddle = null;
        _this.currentLevel = _this.level;
        return _this;
    }
    Trident.prototype.onLoad = function () {
        this.weaponOnLoad();
        this.statsRight = this.node.getChildByName("Right").getComponent(Melee_1.default);
        this.statsLeft = this.node.getChildByName("Left").getComponent(Melee_1.default);
        this.statsMiddle = this.node.getChildByName("Middle").getComponent(Melee_1.default);
        this.timer = this.attackSpeed;
        this.description = "Mid ranged stab attack in front.";
        this.unactiveLeftThrust();
        this.unactiveRightThrust();
        this.unactiveMiddleThrust();
    };
    Trident.prototype.updateSwordStats = function (bonusBaseDamage, damage, attackSpeed, weaponScale) {
        this.baseDamage += bonusBaseDamage;
        this.attackSpeedPercentage += attackSpeed;
        this.damagePercentage += damage;
        this.weaponScalePercentage += weaponScale;
        this.onStatChange();
    };
    Trident.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase damage by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Stab 1 extra time, forming a V shape.";
                    this.updateSwordStats(0, 20, 0, 0);
                    break;
                case 3:
                    this.description = "Reduce time between attacks by 15%";
                    break;
                case 4:
                    this.description = "Increase damage by 40%";
                    this.updateSwordStats(0, 0, 15, 0);
                    break;
                case 5:
                    this.description = "Increase attack area by 25%.";
                    this.updateSwordStats(0, 40, 0, 0);
                    break;
                case 6:
                    this.description = "Thrust 3 times, in a fork-like shape.";
                    this.updateSwordStats(0, 0, 0, 25);
                    break;
                case 7:
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    Trident.prototype.unactiveLeftThrust = function () {
        this.scheduleOnce(function () {
            this.leftThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.unactiveRightThrust = function () {
        this.scheduleOnce(function () {
            this.rightThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.unactiveMiddleThrust = function () {
        this.scheduleOnce(function () {
            this.midThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.perfromAttack = function () {
        if (this.timer < 0)
            this.node.angle =
                Math.atan2(Movement_1.default.instance.directionVector.y, Movement_1.default.instance.directionVector.x) *
                    (180 / Math.PI);
        if (this.level < 3) {
            this.attackMiddle();
        }
        if (this.level >= 7) {
            this.attackAllSide();
        }
        if (this.level >= 3) {
            this.attackV();
        }
    };
    Trident.prototype.attackRight = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightThrust.active = true;
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveRightThrust();
        }
    };
    Trident.prototype.attackMiddle = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.midThrust.active = true;
            this.statsMiddle.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.midThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveMiddleThrust();
        }
    };
    Trident.prototype.attackLeft = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.leftThrust.active = true;
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveLeftThrust();
        }
    };
    Trident.prototype.attackAllSide = function () {
        if (this.timer < 0) {
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsMiddle.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.timer = this.attackSpeed;
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.midThrust.active = true;
            this.midThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveLeftThrust();
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.rightThrust.active = true;
                this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveRightThrust();
            }, 0.15);
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.leftThrust.scaleX = this.statsRight.weaponScaleX;
                this.leftThrust.active = true;
                this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveLeftThrust();
            }, 0.3);
        }
    };
    Trident.prototype.attackV = function () {
        if (this.timer < 0) {
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightThrust.active = true;
            this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveRightThrust();
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.leftThrust.scaleX = this.statsRight.weaponScaleX;
                this.leftThrust.active = true;
                this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveLeftThrust();
            }, 0.15);
        }
    };
    Trident.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.perfromAttack();
    };
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "leftThrust", void 0);
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "rightThrust", void 0);
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "midThrust", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Trident.prototype, "thrustSound", void 0);
    Trident = __decorate([
        ccclass
    ], Trident);
    return Trident;
}(StartWeapon_1.default));
exports.default = Trident;

cc._RF.pop();