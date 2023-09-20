
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu/Button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51XFxCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBR2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBbURDO1FBakRDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBdUNoQyxDQUFDO0lBdENDLHVCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FB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LElBQUksQ0FBQzt5Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJDQUNJO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDUztJQVpYLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FtRDFCO0lBQUQsYUFBQztDQW5ERCxBQW1EQyxDQW5EbUMsRUFBRSxDQUFDLFNBQVMsR0FtRC9DO2tCQW5Eb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9Tb3VuZFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBub3JtYWxTcHI6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBob3ZlclNwcjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgb3RoZXI6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgaXNGYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBidXR0b25Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gIGNoYW5nZU9uSG92ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcywgdHJ1ZSk7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMsIHRydWUpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMsIHRydWUpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcywgdHJ1ZSk7XG4gIH1cbiAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNoYW5nZU9uSG92ZXIpIHJldHVybjtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgIHRoaXMuaG92ZXJTcHI7XG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5vcGFjaXR5ID0gMjU1O1xuICAgIGlmICh0aGlzLm90aGVyKSB0aGlzLm90aGVyLmNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xuICB9XG4gIG9uU291bmRCdXR0b25DTGljaygpIHtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25Tb3VuZCwgZmFsc2UsIDEpO1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKSB7XG4gICAgICBVdGlscy5zZXRMb2NhbChcIlNvdW5kXCIsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVXRpbHMuc2V0TG9jYWwoXCJTb3VuZFwiLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgb25Ub3VjaEVuZChldmVudCkge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJ1dHRvblNvdW5kLCBmYWxzZSwgMSk7XG4gICAgaWYgKCF0aGlzLmNoYW5nZU9uSG92ZXIpIHJldHVybjtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgIHRoaXMubm9ybWFsU3ByO1xuICAgIGlmICh0aGlzLmlzRmFkZWQpIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikub3BhY2l0eSA9IDE1MDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3RoZXIpIHRoaXMub3RoZXIuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge31cbn1cbiJdfQ==