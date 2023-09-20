"use strict";
cc._RF.push(module, 'eb6baJQKUhCko4rHk90SUfS', 'Melee');
// Script/Weapon/Melee.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Melee = /** @class */ (function (_super) {
    __extends(Melee, _super);
    function Melee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = 20;
        _this.weaponScaleX = 1;
        _this.collider = null;
        _this.weaponScaleY = 1;
        return _this;
        // update (dt) {}
    }
    Melee_1 = Melee;
    Melee.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).takeDamage(this.damage);
        }
    };
    Melee.prototype.set = function (BaseDamage, damagePercentage, weaponScalePercentage) {
        this.damage = BaseDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.updateStats();
    };
    Melee.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScaleX =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.weaponScaleY =
            Math.abs((this.weaponScalePercentage / 100) * this.baseScale) +
                Math.abs(this.baseScale);
        this.node.scaleX = this.weaponScaleX;
        this.node.scaleY = this.weaponScaleY;
    };
    // LIFE-CYCLE CALLBACKS:
    Melee.prototype.onLoad = function () {
        Melee_1.instance = this;
        this.node.zIndex = 2;
        this.collider = this.node.getComponent(cc.BoxCollider);
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScaleX;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
    };
    Melee.prototype.start = function () { };
    var Melee_1;
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "damage", void 0);
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "weaponScaleX", void 0);
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "weaponScaleY", void 0);
    Melee = Melee_1 = __decorate([
        ccclass
    ], Melee);
    return Melee;
}(cc.Component));
exports.default = Melee;

cc._RF.pop();