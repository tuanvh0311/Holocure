
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/MightyStone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e485nxwipCSoi4wBDgh39e', 'MightyStone');
// Script/Item/MightyStone.ts

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
var MightyStone = /** @class */ (function (_super) {
    __extends(MightyStone, _super);
    function MightyStone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damageRate = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    MightyStone_1 = MightyStone;
    // LIFE-CYCLE CALLBACKS:
    MightyStone.prototype.onLoad = function () {
        MightyStone_1.instance = this;
        this.itemOnLoad();
        this.description = "Gain 10% damage.";
    };
    MightyStone.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Gain 15% damage.";
                    this.isEquiped = true;
                    this.loadStats();
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Gain 20% damage.";
                    this.updateStats(5);
                    break;
                case 3:
                    this.description = "Gain 25% damage.";
                    this.updateStats(5);
                    break;
                case 4:
                    this.description = "Gain 30% damage.";
                    this.updateStats(5);
                    break;
                case 5:
                    this.updateStats(5);
                    break;
                default:
                    break;
            }
        }
    };
    MightyStone.prototype.loadStats = function () {
        this.overallStats.increaseAttackRate(this.damageRate);
    };
    MightyStone.prototype.updateStats = function (additionDamageRate) {
        this.overallStats.increaseAttackRate(additionDamageRate);
    };
    MightyStone.prototype.start = function () { };
    MightyStone.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var MightyStone_1;
    __decorate([
        property(cc.Float)
    ], MightyStone.prototype, "damageRate", void 0);
    MightyStone = MightyStone_1 = __decorate([
        ccclass
    ], MightyStone);
    return MightyStone;
}(Item_1.default));
exports.default = MightyStone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxNaWdodHlTdG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBSTtJQUE3QztRQUFBLHFFQTBEQztRQXZEQyxnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBc0Q1QixDQUFDO29CQTFEb0IsV0FBVztJQUs5Qix3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNFLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO0lBQ3hDLENBQUM7SUFDRCwrQkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO29CQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxpQ0FBVyxHQUFYLFVBQVksa0JBQTBCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsMkJBQUssR0FBTCxjQUFTLENBQUM7SUFFViw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLGVBQUssQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO0lBQzlCLENBQUM7O0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ0s7SUFITCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEQvQjtJQUFELGtCQUFDO0NBMURELEFBMERDLENBMUR3QyxjQUFJLEdBMEQ1QztrQkExRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pZ2h0eVN0b25lIGV4dGVuZHMgSXRlbSB7XG4gIHN0YXRpYyBpbnN0YW5jZTogTWlnaHR5U3RvbmU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgZGFtYWdlUmF0ZTogbnVtYmVyID0gMTA7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBNaWdodHlTdG9uZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5pdGVtT25Mb2FkKCk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiR2FpbiAxMCUgZGFtYWdlLlwiO1xuICB9XG4gIG9uTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2tMZXZlbCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMub25MZXZlbE1heCgpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJHYWluIDE1JSBkYW1hZ2UuXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJHYWluIDIwJSBkYW1hZ2UuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkdhaW4gMjUlIGRhbWFnZS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiR2FpbiAzMCUgZGFtYWdlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2FkU3RhdHMoKSB7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMuaW5jcmVhc2VBdHRhY2tSYXRlKHRoaXMuZGFtYWdlUmF0ZSk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoYWRkaXRpb25EYW1hZ2VSYXRlOiBudW1iZXIpIHtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5pbmNyZWFzZUF0dGFja1JhdGUoYWRkaXRpb25EYW1hZ2VSYXRlKTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLm9uTGV2ZWxVcCgpO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmlzRXF1aXBlZCkgcmV0dXJuO1xuICB9XG59XG4iXX0=