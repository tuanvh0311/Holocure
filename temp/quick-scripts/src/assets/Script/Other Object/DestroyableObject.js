"use strict";
cc._RF.push(module, 'bbc57hCFpRHALPri/eMuEs/', 'DestroyableObject');
// Script/Other Object/DestroyableObject.ts

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
var DestroyableObject = /** @class */ (function (_super) {
    __extends(DestroyableObject, _super);
    function DestroyableObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.food = null;
        _this.foodDropChance = 20;
        return _this;
    }
    DestroyableObject.prototype.takeDamage = function () {
        this.node.destroy();
    };
    DestroyableObject.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 2) {
            this.takeDamage();
        }
    };
    DestroyableObject.prototype.onDestroy = function () {
        if (Utils_1.default.random(0, 100) < this.foodDropChance) {
            var food = cc.instantiate(this.food);
            food.position = this.node.position;
        }
    };
    DestroyableObject.prototype.start = function () { };
    DestroyableObject.prototype.update = function (dt) { };
    __decorate([
        property(cc.Prefab)
    ], DestroyableObject.prototype, "food", void 0);
    __decorate([
        property(cc.Float)
    ], DestroyableObject.prototype, "foodDropChance", void 0);
    DestroyableObject = __decorate([
        ccclass
    ], DestroyableObject);
    return DestroyableObject;
}(cc.Component));
exports.default = DestroyableObject;

cc._RF.pop();