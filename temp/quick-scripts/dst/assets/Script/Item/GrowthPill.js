
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/GrowthPill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98842CKG2xN2YADg0szZ0rz', 'GrowthPill');
// Script/Item/GrowthPill.ts

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
var Utils_1 = require("../Controller/Utils");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GrowthPill = /** @class */ (function (_super) {
    __extends(GrowthPill, _super);
    function GrowthPill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sizeIncreaseRate = 10;
        _this.pickUpRangeIncreaseRate = 30;
        _this.currentLevel = _this.level;
        return _this;
    }
    GrowthPill_1 = GrowthPill;
    // LIFE-CYCLE CALLBACKS:
    GrowthPill.prototype.onLoad = function () {
        GrowthPill_1.instance = this;
        this.description =
            "Increases attack size of weapons by 5%. Also increase Pick Up Range by 30%.";
        this.itemOnLoad();
    };
    GrowthPill.prototype.loadStats = function () {
        this.overallStats.statList[4] += this.sizeIncreaseRate;
        this.overallStats.statList[7] += this.pickUpRangeIncreaseRate;
        this.overallStats.onStatsChange();
    };
    GrowthPill.prototype.updateStats = function (additionSizeAmount, additionPickupRangeAmount) {
        this.sizeIncreaseRate += additionSizeAmount;
        this.pickUpRangeIncreaseRate += additionPickupRangeAmount;
        this.overallStats.statList[4] += additionSizeAmount;
        this.overallStats.statList[7] += additionPickupRangeAmount;
        this.overallStats.onStatsChange();
    };
    GrowthPill.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "Increases attack size of weapons by 10%. Also increase Pick Up Range by 35%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    this.loadStats();
                    break;
                case 2:
                    this.description =
                        "Increases attack size of weapons by 15%. Also increase Pick Up Range by 40%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description =
                        "Increases attack size of weapons by 20%. Also increase Pick Up Range by 45%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description =
                        "Increases attack size of weapons by 25%. Also increase Pick Up Range by 50%.";
                    this.updateStats(5, 5);
                    break;
                case 5:
                    this.updateStats(5, 5);
                    break;
                default:
                    break;
            }
        }
    };
    GrowthPill.prototype.start = function () { };
    GrowthPill.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var GrowthPill_1;
    __decorate([
        property(cc.Float)
    ], GrowthPill.prototype, "sizeIncreaseRate", void 0);
    __decorate([
        property(cc.Float)
    ], GrowthPill.prototype, "pickUpRangeIncreaseRate", void 0);
    GrowthPill = GrowthPill_1 = __decorate([
        ccclass
    ], GrowthPill);
    return GrowthPill;
}(Item_1.default));
exports.default = GrowthPill;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxHcm93dGhQaWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFHeEMsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFJO0lBQTVDO1FBQUEscUVBd0VDO1FBckVDLHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUU5Qiw2QkFBdUIsR0FBVyxFQUFFLENBQUM7UUFDckMsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQWtFNUIsQ0FBQzttQkF4RW9CLFVBQVU7SUFPN0Isd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFDRSxZQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVztZQUNkLDZFQUE2RSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsZ0NBQVcsR0FBWCxVQUFZLGtCQUEwQixFQUFFLHlCQUFpQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLElBQUksa0JBQWtCLENBQUM7UUFDNUMsSUFBSSxDQUFDLHVCQUF1QixJQUFJLHlCQUF5QixDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNELDhCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXO3dCQUNkLDhFQUE4RSxDQUFDO29CQUNqRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsd0JBQWMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXO3dCQUNkLDhFQUE4RSxDQUFDO29CQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVc7d0JBQ2QsOEVBQThFLENBQUM7b0JBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVzt3QkFDZCw4RUFBOEUsQ0FBQztvQkFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtTQUNGO0lBQ0gsQ0FBQztJQUVELDBCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztJQUM5QixDQUFDOztJQXBFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2tCO0lBTGxCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3RTlCO0lBQUQsaUJBQUM7Q0F4RUQsQUF3RUMsQ0F4RXVDLGNBQUksR0F3RTNDO2tCQXhFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IE92ZXJhbGxTdGF0cyBmcm9tIFwiLi4vUGxheWVyL092ZXJhbGxTdGF0c1wiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi4vV2VhcG9uL1dlYXBvblwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jvd3RoUGlsbCBleHRlbmRzIEl0ZW0ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEdyb3d0aFBpbGw7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgc2l6ZUluY3JlYXNlUmF0ZTogbnVtYmVyID0gMTA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgcGlja1VwUmFuZ2VJbmNyZWFzZVJhdGU6IG51bWJlciA9IDMwO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgR3Jvd3RoUGlsbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICBcIkluY3JlYXNlcyBhdHRhY2sgc2l6ZSBvZiB3ZWFwb25zIGJ5IDUlLiBBbHNvIGluY3JlYXNlIFBpY2sgVXAgUmFuZ2UgYnkgMzAlLlwiO1xuICAgIHRoaXMuaXRlbU9uTG9hZCgpO1xuICB9XG4gIGxvYWRTdGF0cygpIHtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5zdGF0TGlzdFs0XSArPSB0aGlzLnNpemVJbmNyZWFzZVJhdGU7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMuc3RhdExpc3RbN10gKz0gdGhpcy5waWNrVXBSYW5nZUluY3JlYXNlUmF0ZTtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5vblN0YXRzQ2hhbmdlKCk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoYWRkaXRpb25TaXplQW1vdW50OiBudW1iZXIsIGFkZGl0aW9uUGlja3VwUmFuZ2VBbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc2l6ZUluY3JlYXNlUmF0ZSArPSBhZGRpdGlvblNpemVBbW91bnQ7XG4gICAgdGhpcy5waWNrVXBSYW5nZUluY3JlYXNlUmF0ZSArPSBhZGRpdGlvblBpY2t1cFJhbmdlQW1vdW50O1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLnN0YXRMaXN0WzRdICs9IGFkZGl0aW9uU2l6ZUFtb3VudDtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5zdGF0TGlzdFs3XSArPSBhZGRpdGlvblBpY2t1cFJhbmdlQW1vdW50O1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICAgICAgICBcIkluY3JlYXNlcyBhdHRhY2sgc2l6ZSBvZiB3ZWFwb25zIGJ5IDEwJS4gQWxzbyBpbmNyZWFzZSBQaWNrIFVwIFJhbmdlIGJ5IDM1JS5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgdGhpcy5sb2FkU3RhdHMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZXMgYXR0YWNrIHNpemUgb2Ygd2VhcG9ucyBieSAxNSUuIEFsc28gaW5jcmVhc2UgUGljayBVcCBSYW5nZSBieSA0MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZXMgYXR0YWNrIHNpemUgb2Ygd2VhcG9ucyBieSAyMCUuIEFsc28gaW5jcmVhc2UgUGljayBVcCBSYW5nZSBieSA0NSUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZXMgYXR0YWNrIHNpemUgb2Ygd2VhcG9ucyBieSAyNSUuIEFsc28gaW5jcmVhc2UgUGljayBVcCBSYW5nZSBieSA1MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgfVxufVxuIl19