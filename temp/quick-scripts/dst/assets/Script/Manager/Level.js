
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/Level.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxMZXZlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELDZDQUF3QztBQVV4Qyx1REFBa0Q7QUFRNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE4REM7UUExREMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBcURwQyxDQUFDO2NBOURvQixLQUFLO0lBVXhCLDZCQUFhLEdBQWIsVUFBYyxNQUFjO1FBQzFCLE1BQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBQ0Qsa0NBQWtCLEdBQWxCO1FBQ0UsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFNLFNBQVMsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsbURBQW1EO0lBQ25ELHNEQUFzRDtJQUN0RCxrREFBa0Q7SUFDbEQsa0RBQWtEO0lBQ2xELHNEQUFzRDtJQUN0RCwyQkFBMkI7SUFDM0IsSUFBSTtJQUNKLDRCQUFZLEdBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTTtnQkFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2pELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsd0JBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDckM7UUFDRCxJQUFJLFdBQVcsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzdCLFdBQVcsRUFDWCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUNELHNCQUFNLEdBQU47UUFDRSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQscUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOztJQXpERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dDQUNIO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDVztJQVRmLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0E4RHpCO0lBQUQsWUFBQztDQTlERCxBQThEQyxDQTlEa0MsRUFBRSxDQUFDLFNBQVMsR0E4RDlDO2tCQTlEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVSUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVUlDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBCYW5lT2ZSZWdlbmVyYXRpb24gZnJvbSBcIi4uL0l0ZW0vQmFuZU9mUmVnZW5lcmF0aW9uXCI7XG5pbXBvcnQgQmxvb2R5VGVhciBmcm9tIFwiLi4vSXRlbS9CbG9vZHlUZWFyXCI7XG5pbXBvcnQgRHVtYmJlbGwgZnJvbSBcIi4uL0l0ZW0vRHVtYmJlbGxcIjtcbmltcG9ydCBFeWVQYXRjaCBmcm9tIFwiLi4vSXRlbS9FeWVQYXRjaFwiO1xuaW1wb3J0IEdyb3d0aFBpbGwgZnJvbSBcIi4uL0l0ZW0vR3Jvd3RoUGlsbFwiO1xuaW1wb3J0IEhhc3RlUG90aW9uIGZyb20gXCIuLi9JdGVtL0hhc3RlUG90aW9uXCI7XG5pbXBvcnQgTWlnaHR5U3RvbmUgZnJvbSBcIi4uL0l0ZW0vTWlnaHR5U3RvbmVcIjtcbmltcG9ydCBTaGllbGQgZnJvbSBcIi4uL0l0ZW0vU2hpZWxkXCI7XG5pbXBvcnQgV2lzZG9tU3RvbmUgZnJvbSBcIi4uL0l0ZW0vV2lzZG9tU3RvbmVcIjtcbmltcG9ydCBPdmVyYWxsU3RhdHMgZnJvbSBcIi4uL1BsYXllci9PdmVyYWxsU3RhdHNcIjtcbmltcG9ydCBBeGVUaHJvd2VyIGZyb20gXCIuLi9XZWFwb24vQXhlVGhyb3dlclwiO1xuaW1wb3J0IEJvdyBmcm9tIFwiLi4vV2VhcG9uL0Jvd1wiO1xuaW1wb3J0IE1lbGVlIGZyb20gXCIuLi9XZWFwb24vTWVsZWVcIjtcbmltcG9ydCBNb2xseVRocm93ZXIgZnJvbSBcIi4uL1dlYXBvbi9Nb2xseVRocm93ZXJcIjtcbmltcG9ydCBTaHVyaWtlblRocm93ZXIgZnJvbSBcIi4uL1dlYXBvbi9TaHVyaWtlblRocm93ZXJcIjtcbmltcG9ydCBTd29yZCBmcm9tIFwiLi4vV2VhcG9uL1N3b3JkXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogTGV2ZWw7XG5cbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIGxldmVsOiBudW1iZXIgPSAxO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGV4cGVyaWVuY2U6IG51bWJlciA9IDA7XG4gIGV4cFJlcXVpcmVkOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBsZXZlbFVwU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGFkZEV4cGVyaWVuY2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICBhbW91bnQgKz0gKGFtb3VudCAqIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5nZXRCb251c0V4cFJhdGUoKSkgLyAxMDA7XG4gICAgdGhpcy5leHBlcmllbmNlICs9IGFtb3VudDtcbiAgfVxuICBjYWxjdWxhdGVOZXh0TGV2ZWwoKSB7XG4gICAgY29uc3QgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICBjb25zdCBuZXh0TGV2ZWwgPSBjdXJyZW50TGV2ZWwgKyAxO1xuICAgIGNvbnN0IGVsZW1lbnQxID0gTWF0aC5wb3coNCAqIG5leHRMZXZlbCwgMi4xKTtcbiAgICBjb25zdCBlbGVtZW50MiA9IE1hdGgucG93KDQgKiBjdXJyZW50TGV2ZWwsIDIuMSk7XG4gICAgY29uc3Qgcm91bmRlZEVsZW1lbnQxID0gTWF0aC5yb3VuZChlbGVtZW50MSk7XG4gICAgY29uc3Qgcm91bmRlZEVsZW1lbnQyID0gTWF0aC5yb3VuZChlbGVtZW50Mik7XG4gICAgdGhpcy5leHBSZXF1aXJlZCA9IHJvdW5kZWRFbGVtZW50MSAtIHJvdW5kZWRFbGVtZW50MjtcbiAgfVxuICAvLyBjYWxjdWxhdGVOZXh0TGV2ZWxUZXN0KGN1cnJlbnQpIHtcbiAgLy8gICBjb25zdCBjdXJyZW50TGV2ZWwgPSBjdXJyZW50O1xuICAvLyAgIGNvbnN0IG5leHRMZXZlbCA9IGN1cnJlbnRMZXZlbCArIDE7XG4gIC8vICAgY29uc3QgZWxlbWVudDEgPSBNYXRoLnBvdyg0ICogbmV4dExldmVsLCAyLjEpO1xuICAvLyAgIGNvbnN0IGVsZW1lbnQyID0gTWF0aC5wb3coNCAqIGN1cnJlbnRMZXZlbCwgMi4xKTtcbiAgLy8gICBjb25zdCByb3VuZGVkRWxlbWVudDEgPSBNYXRoLnJvdW5kKGVsZW1lbnQxKTtcbiAgLy8gICBjb25zdCByb3VuZGVkRWxlbWVudDIgPSBNYXRoLnJvdW5kKGVsZW1lbnQyKTtcbiAgLy8gICB2YXIgcmVxdWlyZWQgPSByb3VuZGVkRWxlbWVudDEgLSByb3VuZGVkRWxlbWVudDI7XG4gIC8vICAgY29uc29sZS5sb2cocmVxdWlyZWQpO1xuICAvLyB9XG4gIGNoZWNrTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5leHBlcmllbmNlID49IHRoaXMuZXhwUmVxdWlyZWQpIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubGV2ZWxVcFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICB2YXIgZXhwTGVmdCA9IHRoaXMuZXhwZXJpZW5jZSAtIHRoaXMuZXhwUmVxdWlyZWQ7XG4gICAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgICB0aGlzLmV4cFJlcXVpcmVkID0gdGhpcy5leHBSZXF1aXJlZCAqIDEuMjtcbiAgICAgIHRoaXMuZXhwZXJpZW5jZSA9IGV4cExlZnQ7XG4gICAgICB0aGlzLmNhbGN1bGF0ZU5leHRMZXZlbCgpO1xuICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2Uub25MZXZlbFVwKCk7XG4gICAgfVxuICAgIHZhciBsZXZlbFN0cmluZyA9IFwiTEVWRUwgXCIgKyB0aGlzLmxldmVsO1xuICAgIFVJQ29udHJvbGxlci5pbnN0YW5jZS51cGRhdGVFeHAoXG4gICAgICBsZXZlbFN0cmluZyxcbiAgICAgIHRoaXMuZXhwUmVxdWlyZWQsXG4gICAgICB0aGlzLmV4cGVyaWVuY2VcbiAgICApO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBMZXZlbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5jYWxjdWxhdGVOZXh0TGV2ZWwoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIHRoaXMuY2hlY2tMZXZlbFVwKCk7XG4gIH1cbn1cbiJdfQ==