"use strict";
cc._RF.push(module, '19443nnzbdGfbWyTgARfsWa', 'BloodyTear');
// Script/Item/BloodyTear.ts

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
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BloodyTear = /** @class */ (function (_super) {
    __extends(BloodyTear, _super);
    function BloodyTear() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healingAmount = 2;
        _this.healingChance = 30;
        _this.refreshTimer = 0.25;
        _this.timer = 0.25;
        _this.killCount = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    BloodyTear_1 = BloodyTear;
    BloodyTear.prototype.onLoad = function () {
        BloodyTear_1.instance = this;
        this.itemOnLoad();
        this.player = PlayerController_1.default.instance;
        this.description =
            "When defeating a target, there is a 30% chance to life-steal 2 HP.";
    };
    BloodyTear.prototype.start = function () { };
    BloodyTear.prototype.updateStats = function (additionHealingAmount, additionHealingChange) {
        this.healingAmount += additionHealingAmount;
        this.healingChance += additionHealingChange;
    };
    BloodyTear.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "When defeating a target, there is a 30% chance to life-steal 4 HP.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description =
                        "When defeating a target, there is a 30% chance to life-steal 6 HP.";
                    this.updateStats(2, 0);
                    break;
                case 3:
                    this.updateStats(2, 0);
                    break;
                default:
                    break;
            }
        }
    };
    BloodyTear.prototype.healPlayer = function (dt) {
        this.timer -= dt;
        if (this.timer < 0) {
            if (this.killCount != GameController_1.default.instance.killAmount) {
                this.timer = this.refreshTimer;
                this.killCount = GameController_1.default.instance.killAmount;
                var healChange = this.healingChance / 100;
                var random = Math.random();
                if (random < healChange) {
                    this.player.heal(this.healingAmount);
                }
            }
        }
    };
    BloodyTear.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.healPlayer(dt);
    };
    var BloodyTear_1;
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "healingAmount", void 0);
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "healingChance", void 0);
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "refreshTimer", void 0);
    BloodyTear = BloodyTear_1 = __decorate([
        ccclass
    ], BloodyTear);
    return BloodyTear;
}(Item_1.default));
exports.default = BloodyTear;

cc._RF.pop();