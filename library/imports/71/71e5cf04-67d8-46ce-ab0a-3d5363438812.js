"use strict";
cc._RF.push(module, '71e5c8EZ9hGzqsKPVNjQ4gS', 'BaneOfRegeneration');
// Script/Item/BaneOfRegeneration.ts

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
var BaneOfRegeneration = /** @class */ (function (_super) {
    __extends(BaneOfRegeneration, _super);
    function BaneOfRegeneration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regenTick = 5;
        _this.timer = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    BaneOfRegeneration_1 = BaneOfRegeneration;
    // LIFE-CYCLE CALLBACKS:
    BaneOfRegeneration.prototype.onLoad = function () {
        BaneOfRegeneration_1.instance = this;
        this.description = "Recover health by 1 every 5 seconds.";
        this.itemOnLoad();
        GameController_1.default.instance.addItem(this);
    };
    BaneOfRegeneration.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Recover health by 1 every 4 seconds.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Recover health by 1 every 3 seconds.";
                    this.updateStats(4);
                    break;
                case 3:
                    this.description = "Recover health by 1 every 2 seconds.";
                    this.updateStats(3);
                    break;
                case 4:
                    this.description = "Recover health by 1 every second.";
                    this.updateStats(2);
                    break;
                case 5:
                    this.updateStats(1);
                    break;
                default:
                    break;
            }
        }
    };
    BaneOfRegeneration.prototype.regenPlayer = function () {
        if (this.timer < 0) {
            this.timer = this.regenTick;
            PlayerController_1.default.instance.regenHP(1);
        }
    };
    BaneOfRegeneration.prototype.updateStats = function (regenTick) {
        this.regenTick = regenTick;
    };
    BaneOfRegeneration.prototype.start = function () { };
    BaneOfRegeneration.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.regenPlayer();
    };
    var BaneOfRegeneration_1;
    __decorate([
        property(cc.Float)
    ], BaneOfRegeneration.prototype, "regenTick", void 0);
    BaneOfRegeneration = BaneOfRegeneration_1 = __decorate([
        ccclass
    ], BaneOfRegeneration);
    return BaneOfRegeneration;
}(Item_1.default));
exports.default = BaneOfRegeneration;

cc._RF.pop();