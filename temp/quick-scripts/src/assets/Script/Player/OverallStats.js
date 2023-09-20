"use strict";
cc._RF.push(module, 'b3e72yWqRJJTI7+/B39kZpf', 'OverallStats');
// Script/Player/OverallStats.ts

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
var Weapon_1 = require("../Weapon/Weapon");
var PlayerController_1 = require("./PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverallStats = /** @class */ (function (_super) {
    __extends(OverallStats, _super);
    function OverallStats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   maxHpRate: number = 0;
        //   atkRate: number = 0;
        //   spdRate: number = 0;
        //   critChance: number = 0;
        //   pickupRangeRate: number = 0;
        //   resistRate: number = 0;
        _this.nameList = new Array();
        _this.statList = new Array();
        return _this;
    }
    OverallStats_1 = OverallStats;
    OverallStats.prototype.loadStats = function () {
        for (var i = 0; i < this.nameList.length; i++) {
            this.statList[i] = 0;
        }
    };
    OverallStats.prototype.loadFromCharacterData = function () {
        var data = PlayerController_1.default.instance.loadedData;
        this.increaseAttackRate(data.atk);
        this.increaseCritChance(data.crit);
    };
    OverallStats.prototype.pushToList = function () {
        this.nameList.push("Max HP Rate");
        this.nameList.push("Attack Rate");
        this.nameList.push("Speed Rate");
        this.nameList.push("Haste Rate");
        this.nameList.push("Weapon size Rate");
        this.nameList.push("Critical Chance");
        this.nameList.push("Critical Damage Rate");
        this.nameList.push("Pickup Range Rate");
        this.nameList.push("Resist Rate");
        this.nameList.push("Bonus Healing Rate");
        this.nameList.push("Bonus Exp Rate");
    };
    OverallStats.prototype.onStatsChange = function () {
        if (GameController_1.default.instance.isGameOver)
            return;
        PlayerController_1.default.instance.onStatChange();
        Weapon_1.default.instance.onStatChange();
        UIController_1.default.instance.updateStats();
    };
    OverallStats.prototype.increaseMaxHPRate = function (amount) {
        this.statList[0] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseAttackRate = function (amount) {
        this.statList[1] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseSpeedRate = function (amount) {
        this.statList[2] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseHasteRate = function (amount) {
        this.statList[3] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseWeaponSizeRate = function (amount) {
        this.statList[4] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseCritChance = function (amount) {
        this.statList[5] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseCritDamageRate = function (amount) {
        this.statList[6] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increasePickupRangeRate = function (amount) {
        this.statList[7] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseResistRate = function (amount) {
        this.statList[8] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseBonusHealingRate = function (amount) {
        this.statList[9] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseBonusExpRate = function (amount) {
        this.statList[10] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.getMaxHPRate = function () {
        return this.statList[0];
    };
    OverallStats.prototype.getAttackRate = function () {
        return this.statList[1];
    };
    OverallStats.prototype.getSpeedRate = function () {
        return this.statList[2];
    };
    OverallStats.prototype.getHasteRate = function () {
        return this.statList[3];
    };
    OverallStats.prototype.getWeaponSizeRate = function () {
        return this.statList[4];
    };
    OverallStats.prototype.getCritChance = function () {
        return this.statList[5];
    };
    OverallStats.prototype.getCritDamageRate = function () {
        return this.statList[6];
    };
    OverallStats.prototype.getPickupRangeRate = function () {
        return this.statList[7];
    };
    OverallStats.prototype.getResistRate = function () {
        return this.statList[8];
    };
    OverallStats.prototype.getBonusHealingRate = function () {
        return this.statList[9];
    };
    OverallStats.prototype.getBonusExpRate = function () {
        return this.statList[10];
    };
    OverallStats.prototype.onLoad = function () {
        OverallStats_1.instance = this;
        this.player = PlayerController_1.default.instance;
        this.pushToList();
        this.loadStats();
    };
    OverallStats.prototype.start = function () {
        this.loadFromCharacterData();
    };
    OverallStats.prototype.update = function (dt) { };
    var OverallStats_1;
    OverallStats = OverallStats_1 = __decorate([
        ccclass
    ], OverallStats);
    return OverallStats;
}(cc.Component));
exports.default = OverallStats;

cc._RF.pop();