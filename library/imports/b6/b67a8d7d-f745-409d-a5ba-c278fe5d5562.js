"use strict";
cc._RF.push(module, 'b67a81990VAnaW6wnj+XVVi', 'PlayerController');
// Script/Player/PlayerController.ts

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
var UIController_1 = require("../Controller/UIController");
var Utils_1 = require("../Controller/Utils");
var DeathHeart_1 = require("../Other Object/DeathHeart");
var StartWeapon_1 = require("../Weapon/StartWeapon");
var HealthAndShield_1 = require("./HealthAndShield");
var OverallStats_1 = require("./OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataPlayer = null;
        _this.deathHeart = null;
        _this.speed = 1;
        _this.maxHp = 100;
        _this.maxShield = 0;
        _this.iFrameDuration = 0.3;
        _this.pickupRange = 100;
        _this.resist = 0;
        _this.enableIframe = false;
        _this.isUnkilled = false;
        _this.characterPrefab = Array();
        _this.hurtSound = null;
        _this.deadSound = null;
        _this.healSound = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.onLoad = function () {
        PlayerController_1.instance = this;
        this.overallStat = OverallStats_1.default.instance;
        this.basePR = this.pickupRange;
        this.baseResist = this.resist;
        this.loadCharacter();
        this.node.parent.zIndex = 10000;
        this.isIFrame = false;
        this.isMoving = false;
        this.iFrametimer = 0;
    };
    PlayerController.prototype.loadCharacter = function () {
        var characterLevel = Utils_1.default.getCharacterLevel();
        for (var i = 0; i < this.characterPrefab.length; i++) {
            if (Utils_1.default.getCharacterByName() == this.characterPrefab[i].name) {
                var character = cc.instantiate(this.characterPrefab[i]);
                character.parent = this.node;
                UIController_1.default.instance.setPortrait(i);
                this.loadedData =
                    this.dataPlayer.json.character[i].stats[characterLevel - 1];
                this.startWeapon = this.dataPlayer.json.character[i].weapon;
                this.baseMaxHp = this.loadedData.health;
                this.maxHp = this.baseMaxHp;
                this.currentHp = this.maxHp;
                this.baseSpd = this.loadedData.speed;
                // this.overallStat.increaseAttackRate(data.atk);
                // this.overallStat.increaseCritChance(data.crit);
            }
        }
        this.anim = this.getComponentInChildren(cc.Animation);
        this.animList = this.anim.getClips();
        this.anim.play(this.animList[0]);
        this.currentShield = this.maxShield;
        HealthAndShield_1.default.instance.setStateOnLoad(this.currentHp, this.maxHp, this.currentShield, this.maxShield);
        this.onStatChange();
        this.node.getComponent(cc.CircleCollider).radius = this.pickupRange;
    };
    PlayerController.prototype.start = function () {
        this.node.parent
            .getChildByName("StartWeapon")
            .getChildByName(this.startWeapon)
            .getComponent(StartWeapon_1.default).level++;
    };
    PlayerController.prototype.takeDamage = function (damage) {
        if (this.isIFrame)
            return;
        if (this.isUnkilled)
            return;
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.hurtSound, false, 1);
        damage -= (damage * this.resist) / 100;
        var damageLeft = this.currentShield - damage;
        this.currentShield -= damage;
        if (this.currentShield < 0)
            this.currentShield = 0;
        if (damageLeft < 0) {
            this.currentHp += damageLeft;
            HealthAndShield_1.default.instance.setStateHP(this.currentHp, this.maxHp);
            GameController_1.default.instance.takeDamage();
        }
        if (this.enableIframe) {
            this.isIFrame = true;
            this.iFrametimer = this.iFrameDuration;
        }
        HealthAndShield_1.default.instance.setStateShield(this.currentShield, this.maxShield);
        if (this.currentHp <= 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.deadSound, false, 1);
            this.currentHp = 0;
            HealthAndShield_1.default.instance.setStateHP(this.currentHp, this.maxHp);
            for (var x = -1; x <= 1; x++) {
                for (var y = -1; y <= 1; y += 0.25) {
                    var deathHeart = cc.instantiate(this.deathHeart);
                    deathHeart.position = this.node.position;
                    deathHeart.parent = this.node.parent;
                    deathHeart.getComponent(DeathHeart_1.default).vec2 = cc.v2(x, y);
                }
            }
            GameController_1.default.instance.onGameOver();
            this.node.destroy();
        }
    };
    PlayerController.prototype.onStatChange = function () {
        var oldMaxHP = this.maxHp;
        this.maxHp =
            (this.baseMaxHp * this.overallStat.getMaxHPRate()) / 100 + this.baseMaxHp;
        this.currentHp += this.maxHp - oldMaxHP;
        this.resist = this.overallStat.getResistRate() + this.baseResist;
        if (this.resist > 100)
            this.resist = 100;
        this.pickupRange =
            (this.basePR * this.overallStat.getPickupRangeRate()) / 100 + this.basePR;
        this.node.getComponent(cc.CircleCollider).radius = this.pickupRange;
        this.speed =
            (this.baseSpd * this.overallStat.getSpeedRate()) / 100 + this.baseSpd;
        HealthAndShield_1.default.instance.setStateOnLoad(this.currentHp, this.maxHp, this.currentShield, this.maxShield);
    };
    PlayerController.prototype.gainMaxShield = function (amount) {
        this.maxShield += amount;
        this.currentShield += amount;
        HealthAndShield_1.default.instance.setStateOnLoad(this.currentHp, this.maxHp, this.currentShield, this.maxShield);
    };
    PlayerController.prototype.gainShield = function (amount) {
        this.currentShield += amount;
        if (this.currentShield > this.maxShield)
            this.currentShield = this.maxShield;
        HealthAndShield_1.default.instance.setStateOnLoad(this.currentHp, this.maxHp, this.currentShield, this.maxShield);
    };
    PlayerController.prototype.heal = function (healAmount) {
        if (this.currentHp <= 0)
            return;
        if (this.currentHp == this.maxHp)
            return;
        this.currentHp +=
            healAmount + (healAmount / 100) * this.overallStat.getBonusHealingRate();
        if (this.currentHp > this.maxHp) {
            this.currentHp = this.maxHp;
        }
        HealthAndShield_1.default.instance.setStateHP(Math.ceil(this.currentHp), this.maxHp);
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.healSound, false, 1);
    };
    PlayerController.prototype.regenHP = function (healAmount) {
        if (this.currentHp <= 0)
            return;
        if (this.currentHp == this.maxHp)
            return;
        this.currentHp +=
            healAmount + (healAmount / 100) * this.overallStat.getBonusHealingRate();
        if (this.currentHp > this.maxHp) {
            this.currentHp = this.maxHp;
        }
        HealthAndShield_1.default.instance.setStateOnLoad(Math.ceil(this.currentHp), this.maxHp, this.currentShield, this.maxShield);
    };
    PlayerController.prototype.healByPercentage = function (healPercentage) {
        if (this.currentHp <= 0)
            return;
        if (this.currentHp == this.maxHp)
            return;
        this.currentHp +=
            (this.maxHp / 100) *
                (healPercentage +
                    (healPercentage / 100) * this.overallStat.getBonusHealingRate());
        if (this.currentHp > this.maxHp) {
            this.currentHp = this.maxHp;
        }
        HealthAndShield_1.default.instance.setStateHP(Math.ceil(this.currentHp), this.maxHp);
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.healSound, false, 1);
    };
    PlayerController.prototype.runAnimation = function () {
        if (!this.anim.getAnimationState(this.animList[1].name).isPlaying &&
            this.isMoving == true) {
            this.anim.play(this.animList[1].name);
        }
        if (this.isMoving == false &&
            !this.anim.getAnimationState(this.animList[0].name).isPlaying) {
            this.anim.play(this.animList[0].name);
        }
    };
    PlayerController.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            this.anim.pause();
            return;
        }
        this.anim.resume();
        this.deltaTime = dt;
        this.iFrametimer -= dt;
        if (this.iFrametimer < 0) {
            this.enableIframe = false;
            this.isIFrame = false;
        }
        this.runAnimation();
    };
    var PlayerController_1;
    __decorate([
        property(cc.JsonAsset)
    ], PlayerController.prototype, "dataPlayer", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "deathHeart", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "iFrameDuration", void 0);
    __decorate([
        property(cc.Boolean)
    ], PlayerController.prototype, "enableIframe", void 0);
    __decorate([
        property(cc.Boolean)
    ], PlayerController.prototype, "isUnkilled", void 0);
    __decorate([
        property(Array(cc.Prefab))
    ], PlayerController.prototype, "characterPrefab", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "hurtSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "deadSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "healSound", void 0);
    PlayerController = PlayerController_1 = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();