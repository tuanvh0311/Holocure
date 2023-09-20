"use strict";
cc._RF.push(module, '98842CKG2xN2YADg0szZ0rz', 'GrowthPill');
// Script/Item/GrowthPill.ts

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
var GrowthPill = /** @class */ (function (_super) {
    __extends(GrowthPill, _super);
    function GrowthPill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sizeIncreaseRate = 10;
        _this.pickUpRangeIncreaseRate = 30;
        _this.currentLevel = _this.level;
        return _this;
    }
    GrowthPill_1 = GrowthPill;
    // LIFE-CYCLE CALLBACKS:
    GrowthPill.prototype.onLoad = function () {
        GrowthPill_1.instance = this;
        this.description =
            "Increases attack size of weapons by 5%. Also increase Pick Up Range by 30%.";
        this.itemOnLoad();
    };
    GrowthPill.prototype.loadStats = function () {
        this.overallStats.statList[4] += this.sizeIncreaseRate;
        this.overallStats.statList[7] += this.pickUpRangeIncreaseRate;
        this.overallStats.onStatsChange();
    };
    GrowthPill.prototype.updateStats = function (additionSizeAmount, additionPickupRangeAmount) {
        this.sizeIncreaseRate += additionSizeAmount;
        this.pickUpRangeIncreaseRate += additionPickupRangeAmount;
        this.overallStats.statList[4] += additionSizeAmount;
        this.overallStats.statList[7] += additionPickupRangeAmount;
        this.overallStats.onStatsChange();
    };
    GrowthPill.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "Increases attack size of weapons by 10%. Also increase Pick Up Range by 35%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    this.loadStats();
                    break;
                case 2:
                    this.description =
                        "Increases attack size of weapons by 15%. Also increase Pick Up Range by 40%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description =
                        "Increases attack size of weapons by 20%. Also increase Pick Up Range by 45%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description =
                        "Increases attack size of weapons by 25%. Also increase Pick Up Range by 50%.";
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
    GrowthPill.prototype.start = function () { };
    GrowthPill.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var GrowthPill_1;
    __decorate([
        property(cc.Float)
    ], GrowthPill.prototype, "sizeIncreaseRate", void 0);
    __decorate([
        property(cc.Float)
    ], GrowthPill.prototype, "pickUpRangeIncreaseRate", void 0);
    GrowthPill = GrowthPill_1 = __decorate([
        ccclass
    ], GrowthPill);
    return GrowthPill;
}(Item_1.default));
exports.default = GrowthPill;

cc._RF.pop();