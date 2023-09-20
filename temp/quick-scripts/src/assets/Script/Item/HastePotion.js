"use strict";
cc._RF.push(module, 'e86behE45tB+ZFEjjLVrX8A', 'HastePotion');
// Script/Item/HastePotion.ts

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
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HastePotion = /** @class */ (function (_super) {
    __extends(HastePotion, _super);
    function HastePotion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasteRate = 5;
        _this.speedRate = 30;
        _this.currentLevel = _this.level;
        return _this;
    }
    HastePotion_1 = HastePotion;
    HastePotion.prototype.onLoad = function () {
        this.itemOnLoad();
        HastePotion_1.instance = this;
        this.description = "Increase Haste by 5% and SPD by 30%.";
    };
    HastePotion.prototype.loadStats = function () {
        this.overallStats.increaseHasteRate(this.hasteRate);
        this.overallStats.increaseSpeedRate(this.speedRate);
    };
    HastePotion.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase Haste by 10% and SPD by 35%.";
                    this.isEquiped = true;
                    this.loadStats();
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Increase Haste by 15% and SPD by 40%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description = "Increase Haste by 20% and SPD by 45%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description = "Increase Haste by 25% and SPD by 50%.";
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
    HastePotion.prototype.updateStats = function (additionHasteAmount, additionSpeedAmount) {
        this.overallStats.increaseHasteRate(additionHasteAmount);
        this.overallStats.increaseSpeedRate(additionSpeedAmount);
    };
    HastePotion.prototype.start = function () { };
    HastePotion.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var HastePotion_1;
    __decorate([
        property(cc.Float)
    ], HastePotion.prototype, "hasteRate", void 0);
    __decorate([
        property(cc.Float)
    ], HastePotion.prototype, "speedRate", void 0);
    HastePotion = HastePotion_1 = __decorate([
        ccclass
    ], HastePotion);
    return HastePotion;
}(Item_1.default));
exports.default = HastePotion;

cc._RF.pop();