
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu/Sound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82d38zYk45A5JW5Dsd2V51q', 'Sound');
// Script/Menu/Sound.ts

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
var Sound = /** @class */ (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audible = null;
        _this.mute = null;
        return _this;
    }
    Sound_1 = Sound;
    // LIFE-CYCLE CALLBACKS:
    Sound.prototype.onLoad = function () {
        Sound_1.instance = this;
    };
    Sound.prototype.start = function () { };
    Sound.prototype.update = function (dt) {
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.Sprite).spriteFrame = this.audible;
        else
            this.node.getComponent(cc.Sprite).spriteFrame = this.mute;
    };
    var Sound_1;
    __decorate([
        property(cc.SpriteFrame)
    ], Sound.prototype, "audible", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Sound.prototype, "mute", void 0);
    Sound = Sound_1 = __decorate([
        ccclass
    ], Sound);
    return Sound;
}(cc.Component));
exports.default = Sound;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51XFxTb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFvQkM7UUFqQkMsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFFL0IsVUFBSSxHQUFtQixJQUFJLENBQUM7O0lBZTlCLENBQUM7Y0FwQm9CLEtBQUs7SUFPeEIsd0JBQXdCO0lBRXhCLHNCQUFNLEdBQU47UUFDRSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQscUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksZUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7O0lBaEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1Q0FDRztJQUxULEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FvQnpCO0lBQUQsWUFBQztDQXBCRCxBQW9CQyxDQXBCa0MsRUFBRSxDQUFDLFNBQVMsR0FvQjlDO2tCQXBCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGluc3RhbmNlOiBTb3VuZDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBhdWRpYmxlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgbXV0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBTb3VuZC5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmF1ZGlibGU7XG4gICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm11dGU7XG4gIH1cbn1cbiJdfQ==