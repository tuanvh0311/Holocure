"use strict";
cc._RF.push(module, '9f6acBY9sFIl74hB06mNTGQ', 'Level');
// Script/Manager/Level.ts

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
var GameController_1 = require("../Controller/GameController");
var UIController_1 = require("../Controller/UIController");
var Utils_1 = require("../Controller/Utils");
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 1;
        _this.experience = 0;
        _this.expRequired = 0;
        _this.levelUpSound = null;
        return _this;
    }
    Level_1 = Level;
    Level.prototype.addExperience = function (amount) {
        amount += (amount * OverallStats_1.default.instance.getBonusExpRate()) / 100;
        this.experience += amount;
    };
    Level.prototype.calculateNextLevel = function () {
        var currentLevel = this.level;
        var nextLevel = currentLevel + 1;
        var element1 = Math.pow(4 * nextLevel, 2.1);
        var element2 = Math.pow(4 * currentLevel, 2.1);
        var roundedElement1 = Math.round(element1);
        var roundedElement2 = Math.round(element2);
        this.expRequired = roundedElement1 - roundedElement2;
    };
    // calculateNextLevelTest(current) {
    //   const currentLevel = current;
    //   const nextLevel = currentLevel + 1;
    //   const element1 = Math.pow(4 * nextLevel, 2.1);
    //   const element2 = Math.pow(4 * currentLevel, 2.1);
    //   const roundedElement1 = Math.round(element1);
    //   const roundedElement2 = Math.round(element2);
    //   var required = roundedElement1 - roundedElement2;
    //   console.log(required);
    // }
    Level.prototype.checkLevelUp = function () {
        if (this.experience >= this.expRequired) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.levelUpSound, false, 1);
            var expLeft = this.experience - this.expRequired;
            this.level += 1;
            this.expRequired = this.expRequired * 1.2;
            this.experience = expLeft;
            this.calculateNextLevel();
            GameController_1.default.instance.onLevelUp();
        }
        var levelString = "LEVEL " + this.level;
        UIController_1.default.instance.updateExp(levelString, this.expRequired, this.experience);
    };
    Level.prototype.onLoad = function () {
        Level_1.instance = this;
        this.calculateNextLevel();
    };
    Level.prototype.start = function () { };
    Level.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        this.checkLevelUp();
    };
    var Level_1;
    __decorate([
        property(cc.Integer)
    ], Level.prototype, "level", void 0);
    __decorate([
        property(cc.Float)
    ], Level.prototype, "experience", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Level.prototype, "levelUpSound", void 0);
    Level = Level_1 = __decorate([
        ccclass
    ], Level);
    return Level;
}(cc.Component));
exports.default = Level;

cc._RF.pop();