"use strict";
cc._RF.push(module, 'b9897yMpl9NvbK8XCL3SHQJ', 'Utils');
// Script/Controller/Utils.ts

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utils = /** @class */ (function (_super) {
    __extends(Utils, _super);
    function Utils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Utils.worldSpaceToLocal = function (worldSpace, local) { };
    Utils.randomFloor = function (minInclusive, maxInclusive) {
        return (Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) +
            minInclusive);
    };
    Utils.random = function (minInclusive, maxInclusive) {
        return Math.random() * (maxInclusive - minInclusive) + minInclusive;
    };
    Utils.getLocal = function (itemName) {
        return cc.sys.localStorage.getItem("Holo" + itemName);
    };
    Utils.setLocal = function (itemName, value) {
        return cc.sys.localStorage.setItem("Holo" + itemName, value);
    };
    Utils.wait = function (duration) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, duration * 1000);
        });
    };
    Utils.setCharacter = function (name) {
        this.currentCharacter = name;
    };
    Utils.setCharacterLevel = function (level) {
        this.characterLevel = level;
    };
    Utils.getCharacterByName = function () {
        return this.currentCharacter;
    };
    Utils.getCharacterLevel = function () {
        return this.characterLevel;
    };
    Utils.currentCharacter = null;
    Utils.characterLevel = null;
    Utils.isPause = false;
    return Utils;
}(cc.Component));
exports.default = Utils;

cc._RF.pop();