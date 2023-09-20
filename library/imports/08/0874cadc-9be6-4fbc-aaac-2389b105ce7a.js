"use strict";
cc._RF.push(module, '0874crcm+ZPvKqsI4mxBc56', 'WisdomStone');
// Script/Item/WisdomStone.ts

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
var WisdomStone = /** @class */ (function (_super) {
    __extends(WisdomStone, _super);
    function WisdomStone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expBonusRate = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    WisdomStone_1 = WisdomStone;
    // LIFE-CYCLE CALLBACKS:
    WisdomStone.prototype.onLoad = function () {
        WisdomStone_1.instance = this;
        this.itemOnLoad();
        this.description = "Increase EXP gain by 10%.";
    };
    WisdomStone.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase EXP gain by 15%.";
                    this.isEquiped = true;
                    this.loadStats();
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Increase EXP gain by 20%.";
                    this.updateStats(5);
                    break;
                case 3:
                    this.description = "Increase EXP gain by 25%.";
                    this.updateStats(5);
                    break;
                case 4:
                    this.description = "Increase EXP gain by 30%.";
                    this.updateStats(5);
                    break;
                case 5:
                    this.updateStats(5);
                    break;
                default:
                    break;
            }
        }
    };
    WisdomStone.prototype.loadStats = function () {
        this.overallStats.increaseBonusExpRate(this.expBonusRate);
    };
    WisdomStone.prototype.updateStats = function (additionExpAmount) {
        this.overallStats.increaseBonusExpRate(additionExpAmount);
    };
    WisdomStone.prototype.start = function () { };
    WisdomStone.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var WisdomStone_1;
    __decorate([
        property(cc.Float)
    ], WisdomStone.prototype, "expBonusRate", void 0);
    WisdomStone = WisdomStone_1 = __decorate([
        ccclass
    ], WisdomStone);
    return WisdomStone;
}(Item_1.default));
exports.default = WisdomStone;

cc._RF.pop();