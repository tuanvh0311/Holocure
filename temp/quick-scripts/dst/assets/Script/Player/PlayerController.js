
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUN0RCw2Q0FBd0M7QUFHeEMseURBQW9EO0FBQ3BELHFEQUFnRDtBQUVoRCxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBNk9DO1FBMU9DLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUVaLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFHZCxvQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUNyQixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFjNUIscUJBQWUsR0FBcUIsS0FBSyxFQUFhLENBQUM7UUFFdkQsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBdU1qQyxDQUFDO3lCQTdPb0IsZ0JBQWdCO0lBd0NuQyxpQ0FBTSxHQUFOO1FBQ0Usa0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLHNCQUFZLENBQUMs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bnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFVJQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9VSUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi4vRW5lbXkvRW5lbXlDb250cm9sbGVyXCI7XG5pbXBvcnQgQmFuZU9mUmVnZW5lcmF0aW9uIGZyb20gXCIuLi9JdGVtL0JhbmVPZlJlZ2VuZXJhdGlvblwiO1xuaW1wb3J0IERlYXRoSGVhcnQgZnJvbSBcIi4uL090aGVyIE9iamVjdC9EZWF0aEhlYXJ0XCI7XG5pbXBvcnQgU3RhcnRXZWFwb24gZnJvbSBcIi4uL1dlYXBvbi9TdGFydFdlYXBvblwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi4vV2VhcG9uL1dlYXBvblwiO1xuaW1wb3J0IEhlYWx0aEFuZFNoaWVsZCBmcm9tIFwiLi9IZWFsdGhBbmRTaGllbGRcIjtcbmltcG9ydCBPdmVyYWxsU3RhdHMgZnJvbSBcIi4vT3ZlcmFsbFN0YXRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGluc3RhbmNlOiBQbGF5ZXJDb250cm9sbGVyO1xuICBAcHJvcGVydHkoY2MuSnNvbkFzc2V0KVxuICBkYXRhUGxheWVyOiBjYy5Kc29uQXNzZXQgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBkZWF0aEhlYXJ0OiBjYy5QcmVmYWIgPSBudWxsO1xuICBzcGVlZCA9IDE7XG4gIG1heEhwID0gMTAwO1xuICBjdXJyZW50SHA7XG4gIG1heFNoaWVsZCA9IDA7XG4gIGN1cnJlbnRTaGllbGQ6IG51bWJlcjtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBpRnJhbWVEdXJhdGlvbiA9IDAuMztcbiAgcGlja3VwUmFuZ2UgPSAxMDA7XG4gIHJlc2lzdCA9IDA7XG4gIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICBlbmFibGVJZnJhbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gIGlzVW5raWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYmFzZVNwZDogbnVtYmVyO1xuICBiYXNlTWF4SHA6IG51bWJlcjtcbiAgYmFzZVBSOiBudW1iZXI7XG4gIGJhc2VSZXNpc3Q6IG51bWJlcjtcbiAgaXNJRnJhbWU6IGJvb2xlYW47XG4gIGlGcmFtZXRpbWVyOiBudW1iZXI7XG4gIGlzTW92aW5nOiBib29sZWFuO1xuICBhbmltOiBjYy5BbmltYXRpb247XG4gIGFuaW1MaXN0O1xuICBkZWx0YVRpbWU6IG51bWJlcjtcbiAgb3ZlcmFsbFN0YXQ6IE92ZXJhbGxTdGF0cztcbiAgbG9hZGVkRGF0YTtcbiAgQHByb3BlcnR5KEFycmF5KGNjLlByZWZhYikpXG4gIGNoYXJhY3RlclByZWZhYjogQXJyYXk8Y2MuUHJlZmFiPiA9IEFycmF5PGNjLlByZWZhYj4oKTtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgaHVydFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBkZWFkU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGhlYWxTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgc3RhcnRXZWFwb246IHN0cmluZztcbiAgb25Mb2FkKCkge1xuICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMub3ZlcmFsbFN0YXQgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2U7XG4gICAgdGhpcy5iYXNlUFIgPSB0aGlzLnBpY2t1cFJhbmdlO1xuICAgIHRoaXMuYmFzZVJlc2lzdCA9IHRoaXMucmVzaXN0O1xuICAgIHRoaXMubG9hZENoYXJhY3RlcigpO1xuICAgIHRoaXMubm9kZS5wYXJlbnQuekluZGV4ID0gMTAwMDA7XG4gICAgdGhpcy5pc0lGcmFtZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlGcmFtZXRpbWVyID0gMDtcbiAgfVxuICBsb2FkQ2hhcmFjdGVyKCkge1xuICAgIGxldCBjaGFyYWN0ZXJMZXZlbCA9IFV0aWxzLmdldENoYXJhY3RlckxldmVsKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYXJhY3RlclByZWZhYi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFV0aWxzLmdldENoYXJhY3RlckJ5TmFtZSgpID09IHRoaXMuY2hhcmFjdGVyUHJlZmFiW2ldLm5hbWUpIHtcbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hhcmFjdGVyUHJlZmFiW2ldKTtcbiAgICAgICAgY2hhcmFjdGVyLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgVUlDb250cm9sbGVyLmluc3RhbmNlLnNldFBvcnRyYWl0KGkpO1xuICAgICAgICB0aGlzLmxvYWRlZERhdGEgPVxuICAgICAgICAgIHRoaXMuZGF0YVBsYXllci5qc29uLmNoYXJhY3RlcltpXS5zdGF0c1tjaGFyYWN0ZXJMZXZlbCAtIDFdO1xuICAgICAgICB0aGlzLnN0YXJ0V2VhcG9uID0gdGhpcy5kYXRhUGxheWVyLmpzb24uY2hhcmFjdGVyW2ldLndlYXBvbjtcbiAgICAgICAgdGhpcy5iYXNlTWF4SHAgPSB0aGlzLmxvYWRlZERhdGEuaGVhbHRoO1xuICAgICAgICB0aGlzLm1heEhwID0gdGhpcy5iYXNlTWF4SHA7XG4gICAgICAgIHRoaXMuY3VycmVudEhwID0gdGhpcy5tYXhIcDtcbiAgICAgICAgdGhpcy5iYXNlU3BkID0gdGhpcy5sb2FkZWREYXRhLnNwZWVkO1xuXG4gICAgICAgIC8vIHRoaXMub3ZlcmFsbFN0YXQuaW5jcmVhc2VBdHRhY2tSYXRlKGRhdGEuYXRrKTtcbiAgICAgICAgLy8gdGhpcy5vdmVyYWxsU3RhdC5pbmNyZWFzZUNyaXRDaGFuY2UoZGF0YS5jcml0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkFuaW1hdGlvbik7XG4gICAgdGhpcy5hbmltTGlzdCA9IHRoaXMuYW5pbS5nZXRDbGlwcygpO1xuICAgIHRoaXMuYW5pbS5wbGF5KHRoaXMuYW5pbUxpc3RbMF0pO1xuICAgIHRoaXMuY3VycmVudFNoaWVsZCA9IHRoaXMubWF4U2hpZWxkO1xuICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZS5zZXRTdGF0ZU9uTG9hZChcbiAgICAgIHRoaXMuY3VycmVudEhwLFxuICAgICAgdGhpcy5tYXhIcCxcbiAgICAgIHRoaXMuY3VycmVudFNoaWVsZCxcbiAgICAgIHRoaXMubWF4U2hpZWxkXG4gICAgKTtcbiAgICB0aGlzLm9uU3RhdENoYW5nZSgpO1xuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IHRoaXMucGlja3VwUmFuZ2U7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudFxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiU3RhcnRXZWFwb25cIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZSh0aGlzLnN0YXJ0V2VhcG9uKVxuICAgICAgLmdldENvbXBvbmVudChTdGFydFdlYXBvbikubGV2ZWwrKztcbiAgfVxuICB0YWtlRGFtYWdlKGRhbWFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNJRnJhbWUpIHJldHVybjtcbiAgICBpZiAodGhpcy5pc1Vua2lsbGVkKSByZXR1cm47XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuaHVydFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgZGFtYWdlIC09IChkYW1hZ2UgKiB0aGlzLnJlc2lzdCkgLyAxMDA7XG4gICAgdmFyIGRhbWFnZUxlZnQgPSB0aGlzLmN1cnJlbnRTaGllbGQgLSBkYW1hZ2U7XG4gICAgdGhpcy5jdXJyZW50U2hpZWxkIC09IGRhbWFnZTtcbiAgICBpZiAodGhpcy5jdXJyZW50U2hpZWxkIDwgMCkgdGhpcy5jdXJyZW50U2hpZWxkID0gMDtcblxuICAgIGlmIChkYW1hZ2VMZWZ0IDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50SHAgKz0gZGFtYWdlTGVmdDtcbiAgICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZS5zZXRTdGF0ZUhQKHRoaXMuY3VycmVudEhwLCB0aGlzLm1heEhwKTtcbiAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLnRha2VEYW1hZ2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5hYmxlSWZyYW1lKSB7XG4gICAgICB0aGlzLmlzSUZyYW1lID0gdHJ1ZTtcbiAgICAgIHRoaXMuaUZyYW1ldGltZXIgPSB0aGlzLmlGcmFtZUR1cmF0aW9uO1xuICAgIH1cbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVTaGllbGQodGhpcy5jdXJyZW50U2hpZWxkLCB0aGlzLm1heFNoaWVsZCk7XG4gICAgaWYgKHRoaXMuY3VycmVudEhwIDw9IDApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZGVhZFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICB0aGlzLmN1cnJlbnRIcCA9IDA7XG4gICAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVIUCh0aGlzLmN1cnJlbnRIcCwgdGhpcy5tYXhIcCk7XG4gICAgICBmb3IgKGxldCB4ID0gLTE7IHggPD0gMTsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAtMTsgeSA8PSAxOyB5ICs9IDAuMjUpIHtcbiAgICAgICAgICBsZXQgZGVhdGhIZWFydCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGVhdGhIZWFydCk7XG4gICAgICAgICAgZGVhdGhIZWFydC5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICBkZWF0aEhlYXJ0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgZGVhdGhIZWFydC5nZXRDb21wb25lbnQoRGVhdGhIZWFydCkudmVjMiA9IGNjLnYyKHgsIHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5vbkdhbWVPdmVyKCk7XG4gICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBvblN0YXRDaGFuZ2UoKSB7XG4gICAgdmFyIG9sZE1heEhQID0gdGhpcy5tYXhIcDtcbiAgICB0aGlzLm1heEhwID1cbiAgICAgICh0aGlzLmJhc2VNYXhIcCAqIHRoaXMub3ZlcmFsbFN0YXQuZ2V0TWF4SFBSYXRlKCkpIC8gMTAwICsgdGhpcy5iYXNlTWF4SHA7XG4gICAgdGhpcy5jdXJyZW50SHAgKz0gdGhpcy5tYXhIcCAtIG9sZE1heEhQO1xuICAgIHRoaXMucmVzaXN0ID0gdGhpcy5vdmVyYWxsU3RhdC5nZXRSZXNpc3RSYXRlKCkgKyB0aGlzLmJhc2VSZXNpc3Q7XG4gICAgaWYgKHRoaXMucmVzaXN0ID4gMTAwKSB0aGlzLnJlc2lzdCA9IDEwMDtcbiAgICB0aGlzLnBpY2t1cFJhbmdlID1cbiAgICAgICh0aGlzLmJhc2VQUiAqIHRoaXMub3ZlcmFsbFN0YXQuZ2V0UGlja3VwUmFuZ2VSYXRlKCkpIC8gMTAwICsgdGhpcy5iYXNlUFI7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzID0gdGhpcy5waWNrdXBSYW5nZTtcbiAgICB0aGlzLnNwZWVkID1cbiAgICAgICh0aGlzLmJhc2VTcGQgKiB0aGlzLm92ZXJhbGxTdGF0LmdldFNwZWVkUmF0ZSgpKSAvIDEwMCArIHRoaXMuYmFzZVNwZDtcbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVPbkxvYWQoXG4gICAgICB0aGlzLmN1cnJlbnRIcCxcbiAgICAgIHRoaXMubWF4SHAsXG4gICAgICB0aGlzLmN1cnJlbnRTaGllbGQsXG4gICAgICB0aGlzLm1heFNoaWVsZFxuICAgICk7XG4gIH1cbiAgZ2Fpbk1heFNoaWVsZChhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMubWF4U2hpZWxkICs9IGFtb3VudDtcbiAgICB0aGlzLmN1cnJlbnRTaGllbGQgKz0gYW1vdW50O1xuICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZS5zZXRTdGF0ZU9uTG9hZChcbiAgICAgIHRoaXMuY3VycmVudEhwLFxuICAgICAgdGhpcy5tYXhIcCxcbiAgICAgIHRoaXMuY3VycmVudFNoaWVsZCxcbiAgICAgIHRoaXMubWF4U2hpZWxkXG4gICAgKTtcbiAgfVxuICBnYWluU2hpZWxkKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50U2hpZWxkICs9IGFtb3VudDtcbiAgICBpZiAodGhpcy5jdXJyZW50U2hpZWxkID4gdGhpcy5tYXhTaGllbGQpXG4gICAgICB0aGlzLmN1cnJlbnRTaGllbGQgPSB0aGlzLm1heFNoaWVsZDtcbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVPbkxvYWQoXG4gICAgICB0aGlzLmN1cnJlbnRIcCxcbiAgICAgIHRoaXMubWF4SHAsXG4gICAgICB0aGlzLmN1cnJlbnRTaGllbGQsXG4gICAgICB0aGlzLm1heFNoaWVsZFxuICAgICk7XG4gIH1cbiAgaGVhbChoZWFsQW1vdW50OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SHAgPD0gMCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRIcCA9PSB0aGlzLm1heEhwKSByZXR1cm47XG4gICAgdGhpcy5jdXJyZW50SHAgKz1cbiAgICAgIGhlYWxBbW91bnQgKyAoaGVhbEFtb3VudCAvIDEwMCkgKiB0aGlzLm92ZXJhbGxTdGF0LmdldEJvbnVzSGVhbGluZ1JhdGUoKTtcbiAgICBpZiAodGhpcy5jdXJyZW50SHAgPiB0aGlzLm1heEhwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRIcCA9IHRoaXMubWF4SHA7XG4gICAgfVxuICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZS5zZXRTdGF0ZUhQKE1hdGguY2VpbCh0aGlzLmN1cnJlbnRIcCksIHRoaXMubWF4SHApO1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmhlYWxTb3VuZCwgZmFsc2UsIDEpO1xuICB9XG4gIHJlZ2VuSFAoaGVhbEFtb3VudDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEhwIDw9IDApIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50SHAgPT0gdGhpcy5tYXhIcCkgcmV0dXJuO1xuICAgIHRoaXMuY3VycmVudEhwICs9XG4gICAgICBoZWFsQW1vdW50ICsgKGhlYWxBbW91bnQgLyAxMDApICogdGhpcy5vdmVyYWxsU3RhdC5nZXRCb251c0hlYWxpbmdSYXRlKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudEhwID4gdGhpcy5tYXhIcCkge1xuICAgICAgdGhpcy5jdXJyZW50SHAgPSB0aGlzLm1heEhwO1xuICAgIH1cbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVPbkxvYWQoXG4gICAgICBNYXRoLmNlaWwodGhpcy5jdXJyZW50SHApLFxuICAgICAgdGhpcy5tYXhIcCxcbiAgICAgIHRoaXMuY3VycmVudFNoaWVsZCxcbiAgICAgIHRoaXMubWF4U2hpZWxkXG4gICAgKTtcbiAgfVxuICBoZWFsQnlQZXJjZW50YWdlKGhlYWxQZXJjZW50YWdlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SHAgPD0gMCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRIcCA9PSB0aGlzLm1heEhwKSByZXR1cm47XG4gICAgdGhpcy5jdXJyZW50SHAgKz1cbiAgICAgICh0aGlzLm1heEhwIC8gMTAwKSAqXG4gICAgICAoaGVhbFBlcmNlbnRhZ2UgK1xuICAgICAgICAoaGVhbFBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5vdmVyYWxsU3RhdC5nZXRCb251c0hlYWxpbmdSYXRlKCkpO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudEhwID4gdGhpcy5tYXhIcCkge1xuICAgICAgdGhpcy5jdXJyZW50SHAgPSB0aGlzLm1heEhwO1xuICAgIH1cbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVIUChNYXRoLmNlaWwodGhpcy5jdXJyZW50SHApLCB0aGlzLm1heEhwKTtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5oZWFsU291bmQsIGZhbHNlLCAxKTtcbiAgfVxuICBydW5BbmltYXRpb24oKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLmFuaW1MaXN0WzFdLm5hbWUpLmlzUGxheWluZyAmJlxuICAgICAgdGhpcy5pc01vdmluZyA9PSB0cnVlXG4gICAgKSB7XG4gICAgICB0aGlzLmFuaW0ucGxheSh0aGlzLmFuaW1MaXN0WzFdLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLmlzTW92aW5nID09IGZhbHNlICYmXG4gICAgICAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuYW5pbUxpc3RbMF0ubmFtZSkuaXNQbGF5aW5nXG4gICAgKSB7XG4gICAgICB0aGlzLmFuaW0ucGxheSh0aGlzLmFuaW1MaXN0WzBdLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSB7XG4gICAgICB0aGlzLmFuaW0ucGF1c2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hbmltLnJlc3VtZSgpO1xuICAgIHRoaXMuZGVsdGFUaW1lID0gZHQ7XG4gICAgdGhpcy5pRnJhbWV0aW1lciAtPSBkdDtcbiAgICBpZiAodGhpcy5pRnJhbWV0aW1lciA8IDApIHtcbiAgICAgIHRoaXMuZW5hYmxlSWZyYW1lID0gZmFsc2U7XG4gICAgICB0aGlzLmlzSUZyYW1lID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucnVuQW5pbWF0aW9uKCk7XG4gIH1cbn1cbiJdfQ==