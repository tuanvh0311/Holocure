"use strict";
cc._RF.push(module, '1789cmurvRDqren9TBbR0oc', 'HealthAndShield');
// Script/Player/HealthAndShield.ts

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
var HealthAndShield = /** @class */ (function (_super) {
    __extends(HealthAndShield, _super);
    function HealthAndShield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hpBar = null;
        _this.shieldBar = null;
        _this.hpBarUI = null;
        _this.shieldBarUI = null;
        _this.HpLabel = null;
        // LIFE-CYCLE CALLBACKS:
        _this.timer = 0;
        return _this;
    }
    HealthAndShield_1 = HealthAndShield;
    HealthAndShield.prototype.onLoad = function () {
        HealthAndShield_1.instance = this;
    };
    HealthAndShield.prototype.start = function () { };
    HealthAndShield.prototype.setStateHP = function (current, max) {
        this.timer = 3;
        var state = current;
        state /= max;
        var hpString = Math.ceil(current) + " / " + Math.ceil(max);
        if (state < 0)
            state = 0;
        this.hpBar.scaleX = state;
        this.hpBarUI.scaleX = state;
        this.HpLabel.string = hpString;
    };
    HealthAndShield.prototype.setStateShield = function (current, max) {
        this.timer = 3;
        var state = current;
        state /= max;
        if (state < 0)
            state = 0;
        this.shieldBar.scaleX = state;
        this.shieldBarUI.scaleX = state;
    };
    HealthAndShield.prototype.setStateOnLoad = function (currentHp, maxHp, currentShield, maxShield) {
        var stateHp = currentHp;
        stateHp /= maxHp;
        var hpString = Math.ceil(currentHp) + " / " + Math.ceil(maxHp);
        if (stateHp < 0)
            stateHp = 0;
        this.hpBar.scaleX = stateHp;
        this.hpBarUI.scaleX = stateHp;
        this.HpLabel.string = hpString;
        var StateShield = currentShield;
        StateShield /= maxShield;
        if (StateShield < 0)
            StateShield = 0;
        this.shieldBar.scaleX = StateShield;
        this.shieldBarUI.scaleX = StateShield;
    };
    HealthAndShield.prototype.update = function (dt) {
        this.timer -= dt;
        if (this.timer <= 0) {
            this.hpBar.parent.opacity = 0;
        }
        else {
            this.hpBar.parent.opacity = 255;
        }
    };
    var HealthAndShield_1;
    __decorate([
        property(cc.Node)
    ], HealthAndShield.prototype, "hpBar", void 0);
    __decorate([
        property(cc.Node)
    ], HealthAndShield.prototype, "shieldBar", void 0);
    __decorate([
        property(cc.Node)
    ], HealthAndShield.prototype, "hpBarUI", void 0);
    __decorate([
        property(cc.Node)
    ], HealthAndShield.prototype, "shieldBarUI", void 0);
    __decorate([
        property(cc.Label)
    ], HealthAndShield.prototype, "HpLabel", void 0);
    HealthAndShield = HealthAndShield_1 = __decorate([
        ccclass
    ], HealthAndShield);
    return HealthAndShield;
}(cc.Component));
exports.default = HealthAndShield;

cc._RF.pop();