
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/EyePatch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1974n/pm1CzK9jxRhrk9G8', 'EyePatch');
// Script/Item/EyePatch.ts

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
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EyePatch = /** @class */ (function (_super) {
    __extends(EyePatch, _super);
    function EyePatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxCrit = 10;
        _this.critPerSec = 1;
        _this.buffIcon = null;
        _this.timer = 1;
        _this.currentStack = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    EyePatch_1 = EyePatch;
    EyePatch.prototype.onLoad = function () {
        EyePatch_1.instance = this;
        this.description =
            "Gain 1% crit buff every second up to 10%. If taking damage by a target, lose half the buff.";
        this.itemOnLoad();
    };
    EyePatch.prototype.start = function () { };
    EyePatch.prototype.gainStack = function () {
        if (this.timer < 0) {
            this.timer = this.critPerSec;
            if (this.currentStack < this.maxCrit) {
                var oldStack = this.currentStack;
                this.currentStack += 1;
                this.overallStats.increaseCritChance(this.currentStack - oldStack);
            }
        }
    };
    EyePatch.prototype.onTakeDamage = function () {
        if (!this.isEquiped)
            return;
        var oldStack = this.currentStack;
        this.currentStack = Math.floor(this.currentStack / 2);
        this.overallStats.increaseCritChance(this.currentStack - oldStack);
    };
    EyePatch.prototype.updateStats = function (maxCrit) {
        this.maxCrit += maxCrit;
    };
    EyePatch.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    GameController_1.default.instance.dynamicBuff.push(this);
                    UIController_1.default.instance.addNewBuff(this);
                    GameController_1.default.instance.addEquipedItem(this);
                    this.description =
                        "Gain 1% crit buff every second up to 15%. If taking damage by a target, lose half the buff.";
                    this.isEquiped = true;
                    break;
                case 2:
                    this.description =
                        "Gain 1% crit buff every second up to 20%. If taking damage by a target, lose half the buff.";
                    this.updateStats(5);
                    break;
                case 3:
                    this.updateStats(5);
                    break;
                default:
                    break;
            }
        }
    };
    EyePatch.prototype.getCounting = function () {
        return this.currentStack;
    };
    EyePatch.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.gainStack();
    };
    var EyePatch_1;
    __decorate([
        property(cc.Integer)
    ], EyePatch.prototype, "maxCrit", void 0);
    __decorate([
        property(cc.Integer)
    ], EyePatch.prototype, "critPerSec", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], EyePatch.prototype, "buffIcon", void 0);
    EyePatch = EyePatch_1 = __decorate([
        ccclass
    ], EyePatch);
    return EyePatch;
}(Item_1.default));
exports.default = EyePatch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxFeWVQYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELDZDQUF3QztBQUN4QywrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQUk7SUFBMUM7UUFBQSxxRUE0RUM7UUF6RUMsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUNoQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQzs7SUFrRTVCLENBQUM7aUJBNUVvQixRQUFRO0lBVzNCLHlCQUFNLEdBQU47UUFDRSxVQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVztZQUNkLDZGQUE2RixDQUFDO1FBQ2hHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQUssR0FBTCxjQUFTLENBQUM7SUFDViw0QkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDcEU7U0FDRjtJQUNILENBQUM7SUFDRCwrQkFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLE9BQWU7UUFDekIsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxDQUFDO29CQUNKLHdCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLHNCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVzt3QkFDZCw2RkFBNkYsQ0FBQztvQkFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXO3dCQUNkLDZGQUE2RixDQUFDO29CQUNoRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtTQUNGO0lBQ0gsQ0FBQztJQUNELDhCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O0lBeEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NkNBQ0E7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDRTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNPO0lBUGIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRFNUI7SUFBRCxlQUFDO0NBNUVELEFBNEVDLENBNUVxQyxjQUFJLEdBNEV6QztrQkE1RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVUlDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeWVQYXRjaCBleHRlbmRzIEl0ZW0ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEV5ZVBhdGNoO1xuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgbWF4Q3JpdDogbnVtYmVyID0gMTA7XG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBjcml0UGVyU2VjOiBudW1iZXIgPSAxO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGJ1ZmZJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXIgPSAxO1xuICBjdXJyZW50U3RhY2s6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIG9uTG9hZCgpIHtcbiAgICBFeWVQYXRjaC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICBcIkdhaW4gMSUgY3JpdCBidWZmIGV2ZXJ5IHNlY29uZCB1cCB0byAxMCUuIElmIHRha2luZyBkYW1hZ2UgYnkgYSB0YXJnZXQsIGxvc2UgaGFsZiB0aGUgYnVmZi5cIjtcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cbiAgZ2FpblN0YWNrKCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy50aW1lciA9IHRoaXMuY3JpdFBlclNlYztcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGFjayA8IHRoaXMubWF4Q3JpdCkge1xuICAgICAgICB2YXIgb2xkU3RhY2sgPSB0aGlzLmN1cnJlbnRTdGFjaztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhY2sgKz0gMTtcbiAgICAgICAgdGhpcy5vdmVyYWxsU3RhdHMuaW5jcmVhc2VDcml0Q2hhbmNlKHRoaXMuY3VycmVudFN0YWNrIC0gb2xkU3RhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvblRha2VEYW1hZ2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzRXF1aXBlZCkgcmV0dXJuO1xuICAgIHZhciBvbGRTdGFjayA9IHRoaXMuY3VycmVudFN0YWNrO1xuICAgIHRoaXMuY3VycmVudFN0YWNrID0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRTdGFjayAvIDIpO1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlQ3JpdENoYW5jZSh0aGlzLmN1cnJlbnRTdGFjayAtIG9sZFN0YWNrKTtcbiAgfVxuICB1cGRhdGVTdGF0cyhtYXhDcml0OiBudW1iZXIpIHtcbiAgICB0aGlzLm1heENyaXQgKz0gbWF4Q3JpdDtcbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZHluYW1pY0J1ZmYucHVzaCh0aGlzKTtcbiAgICAgICAgICBVSUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkTmV3QnVmZih0aGlzKTtcbiAgICAgICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5hZGRFcXVpcGVkSXRlbSh0aGlzKTtcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiR2FpbiAxJSBjcml0IGJ1ZmYgZXZlcnkgc2Vjb25kIHVwIHRvIDE1JS4gSWYgdGFraW5nIGRhbWFnZSBieSBhIHRhcmdldCwgbG9zZSBoYWxmIHRoZSBidWZmLlwiO1xuICAgICAgICAgIHRoaXMuaXNFcXVpcGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJHYWluIDElIGNyaXQgYnVmZiBldmVyeSBzZWNvbmQgdXAgdG8gMjAlLiBJZiB0YWtpbmcgZGFtYWdlIGJ5IGEgdGFyZ2V0LCBsb3NlIGhhbGYgdGhlIGJ1ZmYuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldENvdW50aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGFjaztcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICB0aGlzLmdhaW5TdGFjaygpO1xuICB9XG59XG4iXX0=