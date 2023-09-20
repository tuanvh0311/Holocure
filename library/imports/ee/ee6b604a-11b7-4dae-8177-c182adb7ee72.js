"use strict";
cc._RF.push(module, 'ee6b6BKEbdNroF3wYKtt+5y', 'Pickup');
// Script/Other Object/Pickup.ts

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
var Pickup = /** @class */ (function (_super) {
    __extends(Pickup, _super);
    function Pickup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPicking = false;
        _this.speed = 100;
        return _this;
    }
    Pickup.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 7) {
            this.isPicking = true;
        }
    };
    Pickup.prototype.onLoad = function () { };
    Pickup.prototype.set = function () {
        this.isPicking = false;
        this.speed = 100;
    };
    Pickup.prototype.moveToPlayer = function (dt) {
        var player = this.node.parent.getChildByName("PlayerBase");
        var deltaX = player.x - this.node.x;
        var deltaY = player.y - this.node.y;
        var normalizedDelta = cc.v2(deltaX, deltaY).normalize();
        this.node.x += normalizedDelta.x * this.speed * dt;
        this.node.y += normalizedDelta.y * this.speed * dt;
        this.speed += 20;
    };
    Pickup.prototype.start = function () { };
    Pickup.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        if (!this.isPicking)
            return;
        this.moveToPlayer(dt);
    };
    Pickup = __decorate([
        ccclass
    ], Pickup);
    return Pickup;
}(cc.Component));
exports.default = Pickup;

cc._RF.pop();