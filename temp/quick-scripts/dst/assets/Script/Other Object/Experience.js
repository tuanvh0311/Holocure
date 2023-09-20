
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Experience.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXEV4cGVyaWVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBQ3hDLDBDQUFxQztBQUNyQywwREFBcUQ7QUFFL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE2QkM7UUEzQkMsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUVqQixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFZLEtBQUssQ0FBQzs7UUF1QjFCLGlCQUFpQjtJQUNuQixDQUFDO0lBdEJDLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHVCQUFhLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELHdCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QscUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTTtnQkFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLHVCQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBQ0QsMEJBQUssR0FBTCxjQUFTLENBQUM7SUF4QlY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDRjtJQUVqQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNVO0lBSmQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTZCOUI7SUFBRCxpQkFBQztDQTdCRCxBQTZCQyxDQTdCdUMsRUFBRSxDQUFDLFNBQVMsR0E2Qm5EO2tCQTdCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi4vTWFuYWdlci9MZXZlbFwiO1xuaW1wb3J0IG9iamVjdFBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvT2JqZWN0UG9vbGluZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJpZW5jZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgZXhwOiBudW1iZXIgPSAxMDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgZ2V0RXhwU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGlzTG9vdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS56SW5kZXggPSAxMDAwMDtcbiAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLmFkZFRvRXhwTGlzdCh0aGlzLm5vZGUpO1xuICB9XG4gIHNldChleHA6IG51bWJlcikge1xuICAgIHRoaXMuZXhwID0gZXhwO1xuICAgIHRoaXMuaXNMb290ZWQgPSBmYWxzZTtcbiAgfVxuICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2V0RXhwU291bmQsIGZhbHNlLCAxKTtcbiAgICAgIExldmVsLmluc3RhbmNlLmFkZEV4cGVyaWVuY2UodGhpcy5leHApO1xuICAgICAgdGhpcy5pc0xvb3RlZCA9IHRydWU7XG4gICAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgICB9XG4gIH1cbiAgc3RhcnQoKSB7fVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=