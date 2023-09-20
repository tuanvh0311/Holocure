"use strict";
cc._RF.push(module, 'df1d1uxaA5KSLgkH7jmHlKq', 'Dumbbell');
// Script/Item/Dumbbell.ts

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
var HealthAndShield_1 = require("../Player/HealthAndShield");
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Dumbbell = /** @class */ (function (_super) {
    __extends(Dumbbell, _super);
    function Dumbbell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hpRate = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    Dumbbell_1 = Dumbbell;
    // LIFE-CYCLE CALLBACKS:
    Dumbbell.prototype.onLoad = function () {
        this.itemOnLoad();
        Dumbbell_1.instance = this;
        this.description = "Increase max HP by 10%.";
    };
    Dumbbell.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase max HP by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    this.loadStats();
                    break;
                case 2:
                    this.description = "Increase max HP by 30%.";
                    this.updateStats(10);
                    break;
                case 3:
                    this.description = "Increase max HP by 40%.";
                    this.updateStats(10);
                    break;
                case 4:
                    this.description = "Increase max HP by 50%.";
                    this.updateStats(10);
                    break;
                case 5:
                    this.updateStats(10);
                    break;
                default:
                    break;
            }
        }
    };
    Dumbbell.prototype.loadStats = function () {
        this.overallStats.increaseMaxHPRate(this.hpRate);
        HealthAndShield_1.default.instance.setStateHP(PlayerController_1.default.instance.currentHp, PlayerController_1.default.instance.maxHp);
    };
    Dumbbell.prototype.updateStats = function (additionHpRate) {
        this.overallStats.increaseMaxHPRate(additionHpRate);
        this.hpRate += additionHpRate;
        HealthAndShield_1.default.instance.setStateHP(PlayerController_1.default.instance.currentHp, PlayerController_1.default.instance.maxHp);
    };
    Dumbbell.prototype.start = function () { };
    Dumbbell.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var Dumbbell_1;
    __decorate([
        property(cc.Float)
    ], Dumbbell.prototype, "hpRate", void 0);
    Dumbbell = Dumbbell_1 = __decorate([
        ccclass
    ], Dumbbell);
    return Dumbbell;
}(Item_1.default));
exports.default = Dumbbell;

cc._RF.pop();