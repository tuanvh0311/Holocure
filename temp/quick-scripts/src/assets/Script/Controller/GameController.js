"use strict";
cc._RF.push(module, 'd5413AXpftMwoBmVDgpSUYq', 'GameController');
// Script/Controller/GameController.ts

"use strict";
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
var SlotController_1 = require("./SlotController");
var UIController_1 = require("./UIController");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameOverSound = null;
        _this.timer = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.killAmount = 0;
        _this.coinAmount = 0;
        _this.dynamicBuff = new Array();
        _this.itemList = new Array();
        _this.weaponList = new Array();
        _this.equipedWeapon = new Array();
        _this.equipedItem = new Array();
        _this.isGameOver = null;
        return _this;
    }
    GameController_1 = GameController;
    GameController.prototype.onLoad = function () {
        GameController_1.instance = this;
        Utils_1.default.isPause = false;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
    };
    GameController.prototype.gainKill = function () {
        this.killAmount++;
        UIController_1.default.instance.updateKillLabel(this.killAmount);
    };
    GameController.prototype.gainCoin = function (amount) {
        this.coinAmount += amount;
        UIController_1.default.instance.updateCoinLabel(this.coinAmount);
    };
    GameController.prototype.takeDamage = function () {
        for (var i = 0; i < this.dynamicBuff.length; i++) {
            this.dynamicBuff[i].onTakeDamage();
        }
    };
    GameController.prototype.addWeapon = function (weapon) {
        this.weaponList.push(weapon);
    };
    GameController.prototype.addEquipedWeapon = function (weapon) {
        this.equipedWeapon.push(weapon);
    };
    GameController.prototype.addItem = function (item) {
        this.itemList.push(item);
    };
    GameController.prototype.addEquipedItem = function (item) {
        this.equipedItem.push(item);
    };
    GameController.prototype.onLevelUp = function () {
        UIController_1.default.instance.onLevelUp();
    };
    GameController.prototype.start = function () {
        SlotController_1.default.instance.updateSlot();
    };
    GameController.prototype.tuyetvong = function () {
        for (var i = 0; i < this.weaponList.length; i++) {
            this.weaponList[i].onLevelUp();
        }
        for (var i = 0; i < this.itemList.length; i++) {
            this.itemList[i].onLevelUp();
        }
    };
    GameController.prototype.onGameOver = function () {
        this.isGameOver = true;
        this.equipedItem.forEach(function (element) {
            element.isEquiped = false;
        });
        this.equipedWeapon.forEach(function (element) {
            element.isEquiped = false;
        });
        this.scheduleOnce(function () {
            this.node.getComponent(cc.AudioSource).pause();
            UIController_1.default.instance.onGameOver();
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.gameOverSound, false, 1);
        }, 3);
    };
    GameController.prototype.update = function (dt) {
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.AudioSource).resume();
        else
            this.node.getComponent(cc.AudioSource).pause();
        if (Utils_1.default.isPause) {
            return;
        }
        this.timer += dt;
    };
    var GameController_1;
    __decorate([
        property(cc.AudioClip)
    ], GameController.prototype, "gameOverSound", void 0);
    GameController = GameController_1 = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

cc._RF.pop();