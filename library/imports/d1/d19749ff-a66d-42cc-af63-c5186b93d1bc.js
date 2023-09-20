"use strict";
cc._RF.push(module, 'd1974n/pm1CzK9jxRhrk9G8', 'EyePatch');
// Script/Item/EyePatch.ts

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
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EyePatch = /** @class */ (function (_super) {
    __extends(EyePatch, _super);
    function EyePatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxCrit = 10;
        _this.critPerSec = 1;
        _this.buffIcon = null;
        _this.timer = 1;
        _this.currentStack = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    EyePatch_1 = EyePatch;
    EyePatch.prototype.onLoad = function () {
        EyePatch_1.instance = this;
        this.description =
            "Gain 1% crit buff every second up to 10%. If taking damage by a target, lose half the buff.";
        this.itemOnLoad();
    };
    EyePatch.prototype.start = function () { };
    EyePatch.prototype.gainStack = function () {
        if (this.timer < 0) {
            this.timer = this.critPerSec;
            if (this.currentStack < this.maxCrit) {
                var oldStack = this.currentStack;
                this.currentStack += 1;
                this.overallStats.increaseCritChance(this.currentStack - oldStack);
            }
        }
    };
    EyePatch.prototype.onTakeDamage = function () {
        if (!this.isEquiped)
            return;
        var oldStack = this.currentStack;
        this.currentStack = Math.floor(this.currentStack / 2);
        this.overallStats.increaseCritChance(this.currentStack - oldStack);
    };
    EyePatch.prototype.updateStats = function (maxCrit) {
        this.maxCrit += maxCrit;
    };
    EyePatch.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    GameController_1.default.instance.dynamicBuff.push(this);
                    UIController_1.default.instance.addNewBuff(this);
                    GameController_1.default.instance.addEquipedItem(this);
                    this.description =
                        "Gain 1% crit buff every second up to 15%. If taking damage by a target, lose half the buff.";
                    this.isEquiped = true;
                    break;
                case 2:
                    this.description =
                        "Gain 1% crit buff every second up to 20%. If taking damage by a target, lose half the buff.";
                    this.updateStats(5);
                    break;
                case 3:
                    this.updateStats(5);
                    break;
                default:
                    break;
            }
        }
    };
    EyePatch.prototype.getCounting = function () {
        return this.currentStack;
    };
    EyePatch.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.gainStack();
    };
    var EyePatch_1;
    __decorate([
        property(cc.Integer)
    ], EyePatch.prototype, "maxCrit", void 0);
    __decorate([
        property(cc.Integer)
    ], EyePatch.prototype, "critPerSec", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], EyePatch.prototype, "buffIcon", void 0);
    EyePatch = EyePatch_1 = __decorate([
        ccclass
    ], EyePatch);
    return EyePatch;
}(Item_1.default));
exports.default = EyePatch;

cc._RF.pop();