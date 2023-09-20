"use strict";
cc._RF.push(module, '1345bSW42tDqoSdTpptD0bR', 'Sword');
// Script/Weapon/Sword.ts

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
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftWhip = null;
        _this.rightWhip = null;
        _this.slashSound = null;
        _this.stats = null;
        _this.statsLeft = null;
        _this.currentLevel = _this.level;
        return _this;
    }
    Sword_1 = Sword;
    // LIFE-CYCLE CALLBACKS:
    Sword.prototype.onLoad = function () {
        this.weaponOnLoad();
        Sword_1.instance = this;
        this.stats = this.node.getChildByName("Right").getComponent(Melee_1.default);
        this.statsLeft = this.node.getChildByName("Left").getComponent(Melee_1.default);
        this.timer = this.attackSpeed;
        this.description = "Swings in a half circle arc in front.";
        this.unactiveLeftWhip();
        this.unactiveRightWhip();
    };
    Sword.prototype.onLevelUp = function () {
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
                    this.description = "Add one more attack to the back.";
                    this.updateSwordStats(0, 20, 0, 0);
                    break;
                case 3:
                    this.description = "Increase damage by 30%.";
                    break;
                case 4:
                    this.description = "Reduce the time between attacks by 30%.";
                    this.updateSwordStats(0, 30, 0, 0);
                    break;
                case 5:
                    this.description = "Increase attack area by 30%.";
                    this.updateSwordStats(0, 0, 30, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 40%.";
                    this.updateSwordStats(0, 0, 0, 30);
                    break;
                case 7:
                    this.updateSwordStats(0, 40, 0, 0);
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    Sword.prototype.updateSwordStats = function (bonusBaseDamage, damage, attackSpeed, weaponScale) {
        this.baseDamage += bonusBaseDamage;
        this.attackSpeedPercentage += attackSpeed;
        this.damagePercentage += damage;
        this.weaponScalePercentage += weaponScale;
        this.onStatChange();
    };
    Sword.prototype.start = function () { };
    Sword.prototype.attackRight = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.slashSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightWhip.active = true;
            this.stats.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
            this.unactiveRightWhip();
        }
    };
    Sword.prototype.attackLeft = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.slashSound, false, 1);
            this.leftWhip.active = true;
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
            this.unactiveLeftWhip();
        }
    };
    Sword.prototype.attackBothSide = function () {
        var _this = this;
        if (this.timer < 0) {
            this.stats.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            if (!Movement_1.default.instance.isFlip) {
                this.timer = this.attackSpeed;
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.slashSound, false, 1);
                this.rightWhip.scaleY = this.stats.weaponScaleY * 1;
                this.rightWhip.active = true;
                this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
                this.unactiveRightWhip();
                setTimeout(function () {
                    if (Utils_1.default.getLocal("Sound") == "true")
                        cc.audioEngine.play(_this.slashSound, false, 1);
                    _this.leftWhip.scaleY = _this.stats.weaponScaleY * -1;
                    _this.leftWhip.active = true;
                    _this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
                    _this.unactiveLeftWhip();
                }, 250);
            }
            else {
                this.timer = this.attackSpeed;
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.slashSound, false, 1);
                this.leftWhip.scaleY = this.stats.weaponScaleY * -1;
                this.leftWhip.active = true;
                this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
                this.unactiveLeftWhip();
                setTimeout(function () {
                    if (Utils_1.default.getLocal("Sound") == "true")
                        cc.audioEngine.play(_this.slashSound, false, 1);
                    _this.rightWhip.scaleY = _this.stats.weaponScaleY * 1;
                    _this.rightWhip.active = true;
                    _this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
                    _this.unactiveRightWhip();
                }, 250);
            }
        }
    };
    Sword.prototype.unactiveLeftWhip = function () {
        this.scheduleOnce(function () {
            this.leftWhip.active = false;
        }, 0.3);
    };
    Sword.prototype.unactiveRightWhip = function () {
        this.scheduleOnce(function () {
            this.rightWhip.active = false;
        }, 0.3);
    };
    Sword.prototype.perfromAttack = function () {
        if (this.timer < 0) {
            this.node.angle =
                Math.atan2(Movement_1.default.instance.directionVector.y, Movement_1.default.instance.directionVector.x) *
                    (180 / Math.PI);
            if (Movement_1.default.instance.isFlip) {
                this.node.scaleX = -1;
            }
            else
                this.node.scaleX = 1;
        }
        if (this.level < 3) {
            if (!Movement_1.default.instance.isFlip) {
                this.attackRight();
            }
            else {
                this.attackLeft();
            }
        }
        if (this.level >= 3) {
            this.attackBothSide();
        }
    };
    Sword.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.perfromAttack();
    };
    var Sword_1;
    __decorate([
        property(cc.Node)
    ], Sword.prototype, "leftWhip", void 0);
    __decorate([
        property(cc.Node)
    ], Sword.prototype, "rightWhip", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Sword.prototype, "slashSound", void 0);
    Sword = Sword_1 = __decorate([
        ccclass
    ], Sword);
    return Sword;
}(StartWeapon_1.default));
exports.default = Sword;

cc._RF.pop();