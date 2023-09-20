"use strict";
cc._RF.push(module, 'eaf99P7GNlGm5wNAwn6/BdW', 'Button');
// Script/Menu/Button.ts

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
var Utils_1 = require("../Controller/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalSpr = null;
        _this.hoverSpr = null;
        _this.other = null;
        _this.isFaded = false;
        _this.buttonSound = null;
        _this.changeOnHover = true;
        return _this;
    }
    Button.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onTouchEnd, this, true);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
    };
    Button.prototype.onTouchStart = function (event) {
        if (!this.changeOnHover)
            return;
        this.node.getChildByName("Label").color = new cc.Color(0, 0, 0);
        this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame =
            this.hoverSpr;
        this.node.getChildByName("Background").opacity = 255;
        if (this.other)
            this.other.color = new cc.Color(0, 0, 0);
    };
    Button.prototype.onSoundButtonCLick = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        if (Utils_1.default.getLocal("Sound") == "true") {
            Utils_1.default.setLocal("Sound", false);
        }
        else {
            Utils_1.default.setLocal("Sound", true);
        }
    };
    Button.prototype.onTouchEnd = function (event) {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        if (!this.changeOnHover)
            return;
        this.node.getChildByName("Label").color = new cc.Color(255, 255, 255);
        this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame =
            this.normalSpr;
        if (this.isFaded) {
            this.node.getChildByName("Background").opacity = 150;
        }
        if (this.other)
            this.other.color = new cc.Color(255, 255, 255);
    };
    Button.prototype.start = function () { };
    Button.prototype.update = function (dt) { };
    __decorate([
        property(cc.SpriteFrame)
    ], Button.prototype, "normalSpr", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Button.prototype, "hoverSpr", void 0);
    __decorate([
        property(cc.Node)
    ], Button.prototype, "other", void 0);
    __decorate([
        property(cc.Boolean)
    ], Button.prototype, "isFaded", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Button.prototype, "buttonSound", void 0);
    __decorate([
        property(cc.Boolean)
    ], Button.prototype, "changeOnHover", void 0);
    Button = __decorate([
        ccclass
    ], Button);
    return Button;
}(cc.Component));
exports.default = Button;

cc._RF.pop();