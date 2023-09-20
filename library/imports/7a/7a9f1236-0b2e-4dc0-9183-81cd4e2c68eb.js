"use strict";
cc._RF.push(module, '7a9f1I2Cy5NwJGDgc1OLGjr', 'StartWeapon');
// Script/Weapon/StartWeapon.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartWeapon = /** @class */ (function (_super) {
    __extends(StartWeapon, _super);
    function StartWeapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 0;
        _this.maxLevel = 7;
        _this.isEquiped = false;
        _this.isResizeable = true;
        _this.baseDamage = 20;
        _this.isLockLevel = false;
        _this.description = null;
        _this.attackSpeed = 2;
        _this.minAS = 1;
        _this.displayIcon = null;
        return _this;
    }
    StartWeapon_1 = StartWeapon;
    // onLoad () {}
    StartWeapon.prototype.start = function () { };
    StartWeapon.prototype.onLevelMax = function () {
        if (this.level >= this.maxLevel) {
            this.isLockLevel = true;
        }
    };
    StartWeapon.prototype.weaponOnLoad = function () {
        StartWeapon_1.instance = this;
        this.overallStat = OverallStats_1.default.instance;
        this.name = this.node.name;
        this.baseAS = this.attackSpeed;
        this.damagePercentage = 0;
        this.attackSpeedPercentage = 0;
        this.weaponScalePercentage = 0;
        this.resultDamagePercentage = 0;
        this.resultAttackSpeedPercentage = 0;
        this.resultWeaponScalePercentage = 0;
        this.onStatChange();
    };
    StartWeapon.prototype.onStatChange = function () {
        this.resultDamagePercentage =
            this.damagePercentage + this.overallStat.getAttackRate();
        this.resultWeaponScalePercentage = this.weaponScalePercentage;
        if (this.isResizeable)
            this.resultWeaponScalePercentage =
                this.weaponScalePercentage + this.overallStat.getWeaponSizeRate();
        this.resultAttackSpeedPercentage =
            this.attackSpeedPercentage + this.overallStat.getHasteRate();
        this.attackSpeed =
            this.baseAS - (this.baseAS * this.resultAttackSpeedPercentage) / 100;
        if (this.attackSpeed < this.minAS)
            this.attackSpeed = this.minAS;
    };
    var StartWeapon_1;
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "level", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "maxLevel", void 0);
    __decorate([
        property(cc.Boolean)
    ], StartWeapon.prototype, "isResizeable", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "baseDamage", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "attackSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "minAS", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StartWeapon.prototype, "displayIcon", void 0);
    StartWeapon = StartWeapon_1 = __decorate([
        ccclass
    ], StartWeapon);
    return StartWeapon;
}(cc.Component));
exports.default = StartWeapon;

cc._RF.pop();