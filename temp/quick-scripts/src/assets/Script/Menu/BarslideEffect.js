"use strict";
cc._RF.push(module, '9e3abgvaPBOdbNJQ+GA/29X', 'BarslideEffect');
// Script/Menu/BarslideEffect.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuEffect = /** @class */ (function (_super) {
    __extends(MenuEffect, _super);
    function MenuEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startPoint = cc.v2(800, -215);
        _this.endPoint = cc.v2(-800, -215);
        return _this;
    }
    MenuEffect.prototype.onLoad = function () { };
    MenuEffect.prototype.start = function () { };
    MenuEffect.prototype.update = function (dt) {
        this.node.x -= dt * 100;
        if (this.node.x <= this.endPoint.x)
            this.node.x = this.startPoint.x;
    };
    MenuEffect = __decorate([
        ccclass
    ], MenuEffect);
    return MenuEffect;
}(cc.Component));
exports.default = MenuEffect;

cc._RF.pop();