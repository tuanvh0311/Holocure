"use strict";
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