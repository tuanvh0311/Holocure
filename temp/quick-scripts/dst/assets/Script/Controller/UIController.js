
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/UIController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '236acwHreNOfYvV22pE9Sju', 'UIController');
// Script/Controller/UIController.ts

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
var PlayerController_1 = require("../Player/PlayerController");
var GameController_1 = require("./GameController");
var OptionGenerator_1 = require("./OptionGenerator");
var SlotController_1 = require("./SlotController");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIController = /** @class */ (function (_super) {
    __extends(UIController, _super);
    function UIController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.killLabel = null;
        _this.coinLabel = null;
        _this.expBar = null;
        _this.screenCover = null;
        _this.buffParent = null;
        _this.buffNodePrefab = null;
        _this.levelLabel = null;
        _this.secondLabel = null;
        _this.minusLabel = null;
        _this.statsPanel = null;
        _this.pauseMenu = null;
        _this.upgradePanel = null;
        _this.displayName = null;
        _this.levelUpLabel = null;
        _this.hpAmount = null;
        _this.atkAmount = null;
        _this.spdAmount = null;
        _this.crtAmount = null;
        _this.pickupAmount = null;
        _this.hasteAmount = null;
        _this.portrait = null;
        _this.portraitList = new Array();
        _this.gameOverLabel = null;
        _this.retryButton = null;
        _this.mainMenuButton = null;
        _this.gainedHolocoins = null;
        _this.buttonSound = null;
        _this.dynamicBuff = new Array();
        _this.buffNodeList = new Array();
        return _this;
    }
    UIController_1 = UIController;
    // LIFE-CYCLE CALLBACKS:
    UIController.prototype.onLoad = function () {
        UIController_1.instance = this;
        this.gameController = GameController_1.default.instance;
    };
    UIController.prototype.onClickPauseButton = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        if (this.gameController.isGameOver)
            return;
        Utils_1.default.isPause = true;
        this.statsPanel.active = true;
        this.pauseMenu.active = true;
    };
    UIController.prototype.onResumeButton = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        if (this.gameController.isGameOver)
            return;
        Utils_1.default.isPause = false;
        this.statsPanel.active = false;
        this.pauseMenu.active = false;
    };
    UIController.prototype.onReturnButton = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        Utils_1.default.isPause = false;
        cc.director.loadScene("Main Menu");
    };
    UIController.prototype.onUpgradeButtonClick = function (event, customEventData) {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        Utils_1.default.isPause = false;
        this.statsPanel.active = false;
        this.upgradePanel.active = false;
        this.levelUpLabel.node.active = false;
        OptionGenerator_1.default.instance.onOptionSelect(customEventData);
        SlotController_1.default.instance.updateSlot();
    };
    UIController.prototype.start = function () { };
    UIController.prototype.updateKillLabel = function (amount) {
        this.killLabel.string = amount.toString();
    };
    UIController.prototype.updateCoinLabel = function (amount) {
        this.coinLabel.string = amount.toString();
    };
    UIController.prototype.updateExp = function (levelLabel, expRequired, expCurrent) {
        this.levelLabel.string = levelLabel;
        this.expBar.getComponent(cc.Sprite).fillRange = expCurrent / expRequired;
    };
    UIController.prototype.addNewBuff = function (buff) {
        this.dynamicBuff.push(buff);
        var buffNode = cc.instantiate(this.buffNodePrefab);
        buffNode.parent = this.buffParent;
        buffNode.x = this.buffNodeList.length * 70;
        buffNode.getComponent(cc.Sprite).spriteFrame = buff.buffIcon;
        buffNode.getChildByName("Stack number").getComponent(cc.Label).string =
            buff.getCounting();
        this.buffNodeList.push(buffNode);
    };
    UIController.prototype.setPortrait = function (index) {
        this.portrait.getComponent(cc.Sprite).spriteFrame =
            this.portraitList[index];
        this.displayName.string = Utils_1.default.getCharacterByName().toString();
    };
    UIController.prototype.updateBuff = function () {
        for (var i = 0; i < this.buffNodeList.length; i++) {
            this.buffNodeList[i]
                .getChildByName("Stack number")
                .getComponent(cc.Label).string = this.dynamicBuff[i].getCounting();
        }
    };
    UIController.prototype.onLevelUp = function () {
        OptionGenerator_1.default.instance.displayOptions();
        Utils_1.default.isPause = true;
        this.screenCover.active = true;
        this.levelUpLabel.node.active = true;
        this.statsPanel.active = true;
        this.upgradePanel.active = true;
    };
    UIController.prototype.updateTimer = function () {
        var timer = this.gameController.timer;
        var minus = Math.floor(timer / 60);
        var second = Math.floor(timer - minus * 60);
        this.minusLabel.string = (minus < 10 ? "0" : "") + minus;
        this.secondLabel.string = (second < 10 ? "0" : "") + second;
        // if (minus < 10) this.minusLabel.string = "0" + minus;
        // else this.minusLabel.string = minus.toString();
        // if (second < 10) this.secondLabel.string = "0" + second;
        // else this.secondLabel.string = second.toString();
    };
    UIController.prototype.updateStats = function () {
        this.overallStats = OverallStats_1.default.instance;
        this.hpAmount.string =
            Math.ceil(PlayerController_1.default.instance.currentHp) +
                " / " +
                Math.ceil(PlayerController_1.default.instance.maxHp);
        this.atkAmount.string = this.overallStats.getAttackRate().toString() + "%";
        this.spdAmount.string = this.overallStats.getSpeedRate().toString() + "%";
        this.crtAmount.string = this.overallStats.getCritChance().toString() + "%";
        this.pickupAmount.string =
            this.overallStats.getPickupRangeRate().toString() + "%";
        this.hasteAmount.string = this.overallStats.getHasteRate().toString() + "%";
    };
    UIController.prototype.onGameOver = function () {
        Utils_1.default.isPause = true;
        cc.tween(this.gameOverLabel)
            .to(3, { position: cc.v3(0, 200) })
            .start();
        this.scheduleOnce(function () {
            this.mainMenuButton.active = true;
            this.retryButton.active = true;
            this.gainedHolocoins.node.active = true;
            this.gainedHolocoins.string =
                "Holocoins Gained: " + this.coinLabel.string;
        }, 3);
    };
    UIController.prototype.onRetryButtonClick = function () {
        cc.director.loadScene("Gamescene");
    };
    UIController.prototype.onMainMenuButtonClick = function () {
        cc.director.loadScene("Main Menu");
    };
    UIController.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            this.screenCover.active = true;
            return;
        }
        this.screenCover.active = false;
        this.updateTimer();
        this.updateBuff();
        // this.updateStats();
    };
    var UIController_1;
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "killLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "coinLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "expBar", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "screenCover", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "buffParent", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "buffNodePrefab", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "secondLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "minusLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "statsPanel", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "pauseMenu", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "upgradePanel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "displayName", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "levelUpLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "hpAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "atkAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "spdAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "crtAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "pickupAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "hasteAmount", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "portrait", void 0);
    __decorate([
        property(Array(cc.SpriteFrame))
    ], UIController.prototype, "portraitList", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "gameOverLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "retryButton", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "mainMenuButton", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "gainedHolocoins", void 0);
    __decorate([
        property(cc.AudioClip)
    ], UIController.prototype, "buttonSound", void 0);
    UIController = UIController_1 = __decorate([
        ccclass
    ], UIController);
    return UIController;
}(cc.Component));
exports.default = UIController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxVSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEYsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFxTUM7UUFsTUMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlC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VTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztzREFDa0M7SUFFbEU7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNVO0lBdkRkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxTWhDO0lBQUQsbUJBQUM7Q0FyTUQsQUFxTUMsQ0FyTXlDLEVBQUUsQ0FBQyxTQUFTLEdBcU1yRDtrQkFyTW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9NZW51L1NvdW5kXCI7XG5pbXBvcnQgT3ZlcmFsbFN0YXRzIGZyb20gXCIuLi9QbGF5ZXIvT3ZlcmFsbFN0YXRzXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi4vUGxheWVyL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IE9wdGlvbkdlbmVyYXRvciBmcm9tIFwiLi9PcHRpb25HZW5lcmF0b3JcIjtcbmltcG9ydCBTbG90Q29udHJvbGxlciBmcm9tIFwiLi9TbG90Q29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IFVJQ29udHJvbGxlcjtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBraWxsTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBjb2luTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGV4cEJhcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzY3JlZW5Db3ZlcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBidWZmUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgYnVmZk5vZGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHNlY29uZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbWludXNMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgc3RhdHNQYW5lbDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwYXVzZU1lbnU6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgdXBncmFkZVBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBkaXNwbGF5TmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxldmVsVXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGhwQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYXRrQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3BkQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgY3J0QW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgcGlja3VwQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgaGFzdGVBbW91bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBvcnRyYWl0OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KEFycmF5KGNjLlNwcml0ZUZyYW1lKSlcbiAgcG9ydHJhaXRMaXN0OiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBuZXcgQXJyYXk8Y2MuU3ByaXRlRnJhbWU+KCk7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lT3ZlckxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHJldHJ5QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG1haW5NZW51QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBnYWluZWRIb2xvY29pbnM6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgYnV0dG9uU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGR5bmFtaWNCdWZmOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgYnVmZk5vZGVMaXN0OiBBcnJheTxjYy5Ob2RlPiA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIG92ZXJhbGxTdGF0czogT3ZlcmFsbFN0YXRzO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBVSUNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBHYW1lQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgfVxuICBvbkNsaWNrUGF1c2VCdXR0b24oKSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uU291bmQsIGZhbHNlLCAxKTtcbiAgICBpZiAodGhpcy5nYW1lQ29udHJvbGxlci5pc0dhbWVPdmVyKSByZXR1cm47XG4gICAgVXRpbHMuaXNQYXVzZSA9IHRydWU7XG4gICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5wYXVzZU1lbnUuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBvblJlc3VtZUJ1dHRvbigpIHtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25Tb3VuZCwgZmFsc2UsIDEpO1xuICAgIGlmICh0aGlzLmdhbWVDb250cm9sbGVyLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICBVdGlscy5pc1BhdXNlID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucGF1c2VNZW51LmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIG9uUmV0dXJuQnV0dG9uKCkge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJ1dHRvblNvdW5kLCBmYWxzZSwgMSk7XG4gICAgVXRpbHMuaXNQYXVzZSA9IGZhbHNlO1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW4gTWVudVwiKTtcbiAgfVxuICBvblVwZ3JhZGVCdXR0b25DbGljayhldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uU291bmQsIGZhbHNlLCAxKTtcbiAgICBVdGlscy5pc1BhdXNlID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudXBncmFkZVBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubGV2ZWxVcExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgT3B0aW9uR2VuZXJhdG9yLmluc3RhbmNlLm9uT3B0aW9uU2VsZWN0KGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgU2xvdENvbnRyb2xsZXIuaW5zdGFuY2UudXBkYXRlU2xvdCgpO1xuICB9XG4gIHN0YXJ0KCkge31cbiAgdXBkYXRlS2lsbExhYmVsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5raWxsTGFiZWwuc3RyaW5nID0gYW1vdW50LnRvU3RyaW5nKCk7XG4gIH1cbiAgdXBkYXRlQ29pbkxhYmVsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5jb2luTGFiZWwuc3RyaW5nID0gYW1vdW50LnRvU3RyaW5nKCk7XG4gIH1cbiAgdXBkYXRlRXhwKGxldmVsTGFiZWw6IHN0cmluZywgZXhwUmVxdWlyZWQ6IG51bWJlciwgZXhwQ3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyA9IGxldmVsTGFiZWw7XG4gICAgdGhpcy5leHBCYXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gZXhwQ3VycmVudCAvIGV4cFJlcXVpcmVkO1xuICB9XG5cbiAgYWRkTmV3QnVmZihidWZmOiBhbnkpIHtcbiAgICB0aGlzLmR5bmFtaWNCdWZmLnB1c2goYnVmZik7XG4gICAgdmFyIGJ1ZmZOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWZmTm9kZVByZWZhYik7XG4gICAgYnVmZk5vZGUucGFyZW50ID0gdGhpcy5idWZmUGFyZW50O1xuICAgIGJ1ZmZOb2RlLnggPSB0aGlzLmJ1ZmZOb2RlTGlzdC5sZW5ndGggKiA3MDtcbiAgICBidWZmTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGJ1ZmYuYnVmZkljb247XG4gICAgYnVmZk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFjayBudW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgYnVmZi5nZXRDb3VudGluZygpO1xuICAgIHRoaXMuYnVmZk5vZGVMaXN0LnB1c2goYnVmZk5vZGUpO1xuICB9XG4gIHNldFBvcnRyYWl0KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnBvcnRyYWl0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgIHRoaXMucG9ydHJhaXRMaXN0W2luZGV4XTtcbiAgICB0aGlzLmRpc3BsYXlOYW1lLnN0cmluZyA9IFV0aWxzLmdldENoYXJhY3RlckJ5TmFtZSgpLnRvU3RyaW5nKCk7XG4gIH1cbiAgdXBkYXRlQnVmZigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnVmZk5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmJ1ZmZOb2RlTGlzdFtpXVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFjayBudW1iZXJcIilcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5keW5hbWljQnVmZltpXS5nZXRDb3VudGluZygpO1xuICAgIH1cbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgT3B0aW9uR2VuZXJhdG9yLmluc3RhbmNlLmRpc3BsYXlPcHRpb25zKCk7XG4gICAgVXRpbHMuaXNQYXVzZSA9IHRydWU7XG4gICAgdGhpcy5zY3JlZW5Db3Zlci5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubGV2ZWxVcExhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnVwZ3JhZGVQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIHVwZGF0ZVRpbWVyKCkge1xuICAgIGxldCB0aW1lciA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIudGltZXI7XG4gICAgdmFyIG1pbnVzID0gTWF0aC5mbG9vcih0aW1lciAvIDYwKTtcbiAgICB2YXIgc2Vjb25kID0gTWF0aC5mbG9vcih0aW1lciAtIG1pbnVzICogNjApO1xuICAgIHRoaXMubWludXNMYWJlbC5zdHJpbmcgPSAobWludXMgPCAxMCA/IFwiMFwiIDogXCJcIikgKyBtaW51cztcbiAgICB0aGlzLnNlY29uZExhYmVsLnN0cmluZyA9IChzZWNvbmQgPCAxMCA/IFwiMFwiIDogXCJcIikgKyBzZWNvbmQ7XG5cbiAgICAvLyBpZiAobWludXMgPCAxMCkgdGhpcy5taW51c0xhYmVsLnN0cmluZyA9IFwiMFwiICsgbWludXM7XG4gICAgLy8gZWxzZSB0aGlzLm1pbnVzTGFiZWwuc3RyaW5nID0gbWludXMudG9TdHJpbmcoKTtcblxuICAgIC8vIGlmIChzZWNvbmQgPCAxMCkgdGhpcy5zZWNvbmRMYWJlbC5zdHJpbmcgPSBcIjBcIiArIHNlY29uZDtcbiAgICAvLyBlbHNlIHRoaXMuc2Vjb25kTGFiZWwuc3RyaW5nID0gc2Vjb25kLnRvU3RyaW5nKCk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoKSB7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2U7XG4gICAgdGhpcy5ocEFtb3VudC5zdHJpbmcgPVxuICAgICAgTWF0aC5jZWlsKFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuY3VycmVudEhwKSArXG4gICAgICBcIiAvIFwiICtcbiAgICAgIE1hdGguY2VpbChQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLm1heEhwKTtcbiAgICB0aGlzLmF0a0Ftb3VudC5zdHJpbmcgPSB0aGlzLm92ZXJhbGxTdGF0cy5nZXRBdHRhY2tSYXRlKCkudG9TdHJpbmcoKSArIFwiJVwiO1xuICAgIHRoaXMuc3BkQW1vdW50LnN0cmluZyA9IHRoaXMub3ZlcmFsbFN0YXRzLmdldFNwZWVkUmF0ZSgpLnRvU3RyaW5nKCkgKyBcIiVcIjtcbiAgICB0aGlzLmNydEFtb3VudC5zdHJpbmcgPSB0aGlzLm92ZXJhbGxTdGF0cy5nZXRDcml0Q2hhbmNlKCkudG9TdHJpbmcoKSArIFwiJVwiO1xuICAgIHRoaXMucGlja3VwQW1vdW50LnN0cmluZyA9XG4gICAgICB0aGlzLm92ZXJhbGxTdGF0cy5nZXRQaWNrdXBSYW5nZVJhdGUoKS50b1N0cmluZygpICsgXCIlXCI7XG4gICAgdGhpcy5oYXN0ZUFtb3VudC5zdHJpbmcgPSB0aGlzLm92ZXJhbGxTdGF0cy5nZXRIYXN0ZVJhdGUoKS50b1N0cmluZygpICsgXCIlXCI7XG4gIH1cbiAgb25HYW1lT3ZlcigpIHtcbiAgICBVdGlscy5pc1BhdXNlID0gdHJ1ZTtcbiAgICBjYy50d2Vlbih0aGlzLmdhbWVPdmVyTGFiZWwpXG4gICAgICAudG8oMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KVxuICAgICAgLnN0YXJ0KCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5tYWluTWVudUJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5yZXRyeUJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5nYWluZWRIb2xvY29pbnMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5nYWluZWRIb2xvY29pbnMuc3RyaW5nID1cbiAgICAgICAgXCJIb2xvY29pbnMgR2FpbmVkOiBcIiArIHRoaXMuY29pbkxhYmVsLnN0cmluZztcbiAgICB9LCAzKTtcbiAgfVxuXG4gIG9uUmV0cnlCdXR0b25DbGljaygpIHtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lc2NlbmVcIik7XG4gIH1cbiAgb25NYWluTWVudUJ1dHRvbkNsaWNrKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW4gTWVudVwiKTtcbiAgfVxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkge1xuICAgICAgdGhpcy5zY3JlZW5Db3Zlci5hY3RpdmUgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNjcmVlbkNvdmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlVGltZXIoKTtcbiAgICB0aGlzLnVwZGF0ZUJ1ZmYoKTtcbiAgICAvLyB0aGlzLnVwZGF0ZVN0YXRzKCk7XG4gIH1cbn1cbiJdfQ==