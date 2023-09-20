"use strict";
cc._RF.push(module, 'c54a1Bbd9xDxK3MtppYqqc9', 'Experience');
// Script/Other Object/Experience.ts

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
var Level_1 = require("../Manager/Level");
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Experience = /** @class */ (function (_super) {
    __extends(Experience, _super);
    function Experience() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exp = 10;
        _this.getExpSound = null;
        _this.isLooted = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Experience.prototype.onLoad = function () {
        this.node.zIndex = 10000;
        ObjectPooling_1.default.instance.addToExpList(this.node);
    };
    Experience.prototype.set = function (exp) {
        this.exp = exp;
        this.isLooted = false;
    };
    Experience.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.getExpSound, false, 1);
            Level_1.default.instance.addExperience(this.exp);
            this.isLooted = true;
            ObjectPooling_1.default.instance.putBackToPool(this.node);
        }
    };
    Experience.prototype.start = function () { };
    __decorate([
        property(cc.Float)
    ], Experience.prototype, "exp", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Experience.prototype, "getExpSound", void 0);
    Experience = __decorate([
        ccclass
    ], Experience);
    return Experience;
}(cc.Component));
exports.default = Experience;

cc._RF.pop();