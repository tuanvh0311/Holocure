
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/HealthAndShield.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXEhlYWx0aEFuZFNoaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW1FQztRQWhFQyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLHdCQUF3QjtRQUN4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQXFEcEIsQ0FBQzt3QkFuRW9CLGVBQWU7SUFlbEMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQUssR0FBTCxjQUFTLENBQUM7SUFFVixvQ0FBVSxHQUFWLFVBQVcsT0FBZSxFQUFFLEdBQVc7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDcEIsS0FBSyxJQUFJLEdBQUcsQ0FBQztRQUNiLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUNELHdDQUFjLEdBQWQsVUFBZSxPQUFlLEVBQUUsR0FBVztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNwQixLQUFLLElBQUksR0FBRyxDQUFDO1FBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsd0NBQWMsR0FBZCxVQUNFLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixhQUFxQixFQUNyQixTQUFpQjtRQUVqQixJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDeEIsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUNqQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLENBQUM7WUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQy9CLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNoQyxXQUFXLElBQUksU0FBUyxDQUFDO1FBQ3pCLElBQUksV0FBVyxHQUFHLENBQUM7WUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7SUFDeEMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7SUEvREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNNO0lBWE4sZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW1FbkM7SUFBRCxzQkFBQztDQW5FRCxBQW1FQyxDQW5FNEMsRUFBRSxDQUFDLFNBQVMsR0FtRXhEO2tCQW5Fb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoQW5kU2hpZWxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGluc3RhbmNlOiBIZWFsdGhBbmRTaGllbGQ7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBocEJhcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzaGllbGRCYXI6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgaHBCYXJVSTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzaGllbGRCYXJVSTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgSHBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICB0aW1lcjogbnVtYmVyID0gMDtcbiAgb25Mb2FkKCkge1xuICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgc2V0U3RhdGVIUChjdXJyZW50OiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgdGhpcy50aW1lciA9IDM7XG4gICAgdmFyIHN0YXRlID0gY3VycmVudDtcbiAgICBzdGF0ZSAvPSBtYXg7XG4gICAgdmFyIGhwU3RyaW5nID0gTWF0aC5jZWlsKGN1cnJlbnQpICsgXCIgLyBcIiArIE1hdGguY2VpbChtYXgpO1xuICAgIGlmIChzdGF0ZSA8IDApIHN0YXRlID0gMDtcbiAgICB0aGlzLmhwQmFyLnNjYWxlWCA9IHN0YXRlO1xuICAgIHRoaXMuaHBCYXJVSS5zY2FsZVggPSBzdGF0ZTtcbiAgICB0aGlzLkhwTGFiZWwuc3RyaW5nID0gaHBTdHJpbmc7XG4gIH1cbiAgc2V0U3RhdGVTaGllbGQoY3VycmVudDogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgIHRoaXMudGltZXIgPSAzO1xuICAgIHZhciBzdGF0ZSA9IGN1cnJlbnQ7XG4gICAgc3RhdGUgLz0gbWF4O1xuICAgIGlmIChzdGF0ZSA8IDApIHN0YXRlID0gMDtcbiAgICB0aGlzLnNoaWVsZEJhci5zY2FsZVggPSBzdGF0ZTtcbiAgICB0aGlzLnNoaWVsZEJhclVJLnNjYWxlWCA9IHN0YXRlO1xuICB9XG4gIHNldFN0YXRlT25Mb2FkKFxuICAgIGN1cnJlbnRIcDogbnVtYmVyLFxuICAgIG1heEhwOiBudW1iZXIsXG4gICAgY3VycmVudFNoaWVsZDogbnVtYmVyLFxuICAgIG1heFNoaWVsZDogbnVtYmVyXG4gICkge1xuICAgIHZhciBzdGF0ZUhwID0gY3VycmVudEhwO1xuICAgIHN0YXRlSHAgLz0gbWF4SHA7XG4gICAgdmFyIGhwU3RyaW5nID0gTWF0aC5jZWlsKGN1cnJlbnRIcCkgKyBcIiAvIFwiICsgTWF0aC5jZWlsKG1heEhwKTtcbiAgICBpZiAoc3RhdGVIcCA8IDApIHN0YXRlSHAgPSAwO1xuICAgIHRoaXMuaHBCYXIuc2NhbGVYID0gc3RhdGVIcDtcbiAgICB0aGlzLmhwQmFyVUkuc2NhbGVYID0gc3RhdGVIcDtcbiAgICB0aGlzLkhwTGFiZWwuc3RyaW5nID0gaHBTdHJpbmc7XG4gICAgdmFyIFN0YXRlU2hpZWxkID0gY3VycmVudFNoaWVsZDtcbiAgICBTdGF0ZVNoaWVsZCAvPSBtYXhTaGllbGQ7XG4gICAgaWYgKFN0YXRlU2hpZWxkIDwgMCkgU3RhdGVTaGllbGQgPSAwO1xuICAgIHRoaXMuc2hpZWxkQmFyLnNjYWxlWCA9IFN0YXRlU2hpZWxkO1xuICAgIHRoaXMuc2hpZWxkQmFyVUkuc2NhbGVYID0gU3RhdGVTaGllbGQ7XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIGlmICh0aGlzLnRpbWVyIDw9IDApIHtcbiAgICAgIHRoaXMuaHBCYXIucGFyZW50Lm9wYWNpdHkgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhwQmFyLnBhcmVudC5vcGFjaXR5ID0gMjU1O1xuICAgIH1cbiAgfVxufVxuIl19