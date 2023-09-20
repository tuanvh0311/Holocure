"use strict";
cc._RF.push(module, '145b7r+bNZJHoxfw9nmx9MA', 'SlotController');
// Script/Controller/SlotController.ts

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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlotController = /** @class */ (function (_super) {
    __extends(SlotController, _super);
    function SlotController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weaponSlotList = new Array();
        _this.itemSlotList = new Array();
        _this.nullSpriteFrame = null;
        _this.itemList = new Array();
        _this.weaponList = new Array();
        return _this;
    }
    SlotController_1 = SlotController;
    SlotController.prototype.onLoad = function () {
        SlotController_1.instance = this;
    };
    SlotController.prototype.updateSlot = function () {
        this.itemList = GameController_1.default.instance.equipedItem;
        this.weaponList = GameController_1.default.instance.equipedWeapon;
        // console.log(this.weaponList);
        for (var i = 0; i < this.weaponSlotList.length; i++) {
            if (this.weaponList[i] == undefined)
                break;
            if (this.weaponList[i].displayIcon)
                this.weaponSlotList[i]
                    .getChildByName("WeaponIcon")
                    .getComponent(cc.Sprite).spriteFrame = this.weaponList[i].displayIcon;
            else
                this.weaponSlotList[i]
                    .getChildByName("WeaponIcon")
                    .getComponent(cc.Sprite).spriteFrame = this.nullSpriteFrame;
            this.weaponSlotList[i]
                .getChildByName("WeaponLevelLabel")
                .getComponent(cc.Label).string = "LV " + this.weaponList[i].level;
            this.weaponSlotList[i].getChildByName("WeaponIcon").opacity = 255;
        }
        for (var i = 0; i < this.itemSlotList.length; i++) {
            if (this.itemList[i] == undefined)
                break;
            if (this.itemList[i].displayIcon)
                this.itemSlotList[i]
                    .getChildByName("ItemIcon")
                    .getComponent(cc.Sprite).spriteFrame = this.itemList[i].displayIcon;
            else
                this.itemSlotList[i]
                    .getChildByName("ItemIcon")
                    .getComponent(cc.Sprite).spriteFrame = this.nullSpriteFrame;
            this.itemSlotList[i]
                .getChildByName("ItemLevelLabel")
                .getComponent(cc.Label).string = "LV " + this.itemList[i].level;
            this.itemSlotList[i].getChildByName("ItemIcon").opacity = 255;
        }
    };
    SlotController.prototype.start = function () { };
    SlotController.prototype.update = function (dt) {
        this.updateSlot();
    };
    var SlotController_1;
    __decorate([
        property(Array(cc.Node))
    ], SlotController.prototype, "weaponSlotList", void 0);
    __decorate([
        property(Array(cc.Node))
    ], SlotController.prototype, "itemSlotList", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SlotController.prototype, "nullSpriteFrame", void 0);
    SlotController = SlotController_1 = __decorate([
        ccclass
    ], SlotController);
    return SlotController;
}(cc.Component));
exports.default = SlotController;

cc._RF.pop();