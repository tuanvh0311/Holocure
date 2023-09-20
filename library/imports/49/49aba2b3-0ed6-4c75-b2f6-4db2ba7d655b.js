"use strict";
cc._RF.push(module, '49abaKzDtZMdbL2TbK6fWVb', 'Shield');
// Script/Item/Shield.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseShield = 15;
        _this.baseResist = 5;
        _this.refreshTimer = 15;
        _this.timer = _this.refreshTimer;
        _this.currentLevel = _this.level;
        return _this;
    }
    Shield_1 = Shield;
    Shield.prototype.onLoad = function () {
        Shield_1.instance = this;
        GameController_1.default.instance.dynamicBuff.push(this);
        this.itemOnLoad();
        this.description =
            "Gain a shield that absorbs up to 15 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 5%.";
    };
    Shield.prototype.refreshShield = function (dt) {
        if (this.player.currentShield < this.player.maxShield) {
            this.timer -= dt;
            if (this.timer < 0) {
                this.timer = this.refreshTimer;
                this.player.gainShield(this.baseShield);
            }
        }
        else {
            this.timer = this.refreshTimer;
        }
    };
    Shield.prototype.onTakeDamage = function () {
        this.timer = 15;
    };
    Shield.prototype.updateStats = function (shieldAmount, resistAmount) {
        this.baseShield += shieldAmount;
        OverallStats_1.default.instance.increaseResistRate(resistAmount);
        this.addShieldToPlayer(shieldAmount);
    };
    Shield.prototype.loadStats = function () {
        OverallStats_1.default.instance.increaseResistRate(this.baseResist);
        this.addShieldToPlayer(this.baseShield);
    };
    Shield.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.loadStats();
                    this.description =
                        "Gain a shield that absorbs up to 20 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 10%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description =
                        "Gain a shield that absorbs up to 25 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 15%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description =
                        "Gain a shield that absorbs up to 30 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 20%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description =
                        "Gain a shield that absorbs up to 35 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 25%.";
                    this.updateStats(5, 5);
                    break;
                case 5:
                    this.updateStats(5, 5);
                    break;
                default:
                    break;
            }
        }
    };
    Shield.prototype.addShieldToPlayer = function (shield) {
        this.player.gainMaxShield(shield);
    };
    Shield.prototype.start = function () {
        this.player = PlayerController_1.default.instance;
    };
    Shield.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.refreshShield(dt);
    };
    var Shield_1;
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "baseShield", void 0);
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "baseResist", void 0);
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "refreshTimer", void 0);
    Shield = Shield_1 = __decorate([
        ccclass
    ], Shield);
    return Shield;
}(Item_1.default));
exports.default = Shield;

cc._RF.pop();