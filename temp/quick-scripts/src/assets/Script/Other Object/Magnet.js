"use strict";
cc._RF.push(module, 'f76c04uEK9BHq4nUwnmWWvw', 'Magnet');
// Script/Other Object/Magnet.ts

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
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Magnet = /** @class */ (function (_super) {
    __extends(Magnet, _super);
    function Magnet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getExpSound = null;
        return _this;
    }
    Magnet.prototype.onLoad = function () {
        this.node.zIndex = 10002;
        ObjectPooling_1.default.instance.addToMagnetList(this.node);
    };
    Magnet.prototype.start = function () { };
    Magnet.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.getExpSound, false, 1);
            this.node.destroy();
            ObjectPooling_1.default.instance.onMagnetPickup();
        }
    };
    Magnet.prototype.update = function (dt) { };
    __decorate([
        property(cc.AudioClip)
    ], Magnet.prototype, "getExpSound", void 0);
    Magnet = __decorate([
        ccclass
    ], Magnet);
    return Magnet;
}(cc.Component));
exports.default = Magnet;

cc._RF.pop();