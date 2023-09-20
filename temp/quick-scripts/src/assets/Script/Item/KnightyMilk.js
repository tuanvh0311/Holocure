"use strict";
cc._RF.push(module, 'aa112anKcxAa4uQvZAEV8vv', 'KnightyMilk');
// Script/Item/KnightyMilk.ts

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
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var KnightyMilk = /** @class */ (function (_super) {
    __extends(KnightyMilk, _super);
    function KnightyMilk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sizeIncreaseRate = 10;
        _this.pickUpRangeIncreaseRate = 30;
        _this.currentLevel = _this.level;
        return _this;
        // update (dt) {}
    }
    KnightyMilk_1 = KnightyMilk;
    KnightyMilk.prototype.onLoad = function () {
        KnightyMilk_1.instance = this;
        this.description =
            "Increases attack size of weapons by 5%. Also increase Pick Up Range by 30%.";
        this.itemOnLoad();
        this.itemOnLoad();
    };
    KnightyMilk.prototype.start = function () { };
    var KnightyMilk_1;
    __decorate([
        property(cc.Float)
    ], KnightyMilk.prototype, "sizeIncreaseRate", void 0);
    __decorate([
        property(cc.Float)
    ], KnightyMilk.prototype, "pickUpRangeIncreaseRate", void 0);
    KnightyMilk = KnightyMilk_1 = __decorate([
        ccclass
    ], KnightyMilk);
    return KnightyMilk;
}(Item_1.default));
exports.default = KnightyMilk;

cc._RF.pop();