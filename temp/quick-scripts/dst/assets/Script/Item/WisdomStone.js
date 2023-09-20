
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/WisdomStone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0874crcm+ZPvKqsI4mxBc56', 'WisdomStone');
// Script/Item/WisdomStone.ts

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
var WisdomStone = /** @class */ (function (_super) {
    __extends(WisdomStone, _super);
    function WisdomStone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expBonusRate = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    WisdomStone_1 = WisdomStone;
    // LIFE-CYCLE CALLBACKS:
    WisdomStone.prototype.onLoad = function () {
        WisdomStone_1.instance = this;
        this.itemOnLoad();
        this.description = "Increase EXP gain by 10%.";
    };
    WisdomStone.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase EXP gain by 15%.";
                    this.isEquiped = true;
                    this.loadStats();
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Increase EXP gain by 20%.";
                    this.updateStats(5);
                    break;
                case 3:
                    this.description = "Increase EXP gain by 25%.";
                    this.updateStats(5);
                    break;
                case 4:
                    this.description = "Increase EXP gain by 30%.";
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
    WisdomStone.prototype.loadStats = function () {
        this.overallStats.increaseBonusExpRate(this.expBonusRate);
    };
    WisdomStone.prototype.updateStats = function (additionExpAmount) {
        this.overallStats.increaseBonusExpRate(additionExpAmount);
    };
    WisdomStone.prototype.start = function () { };
    WisdomStone.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var WisdomStone_1;
    __decorate([
        property(cc.Float)
    ], WisdomStone.prototype, "expBonusRate", void 0);
    WisdomStone = WisdomStone_1 = __decorate([
        ccclass
    ], WisdomStone);
    return WisdomStone;
}(Item_1.default));
exports.default = WisdomStone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxXaXNkb21TdG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBSTtJQUE3QztRQUFBLHFFQTBEQztRQXZEQyxrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBc0Q1QixDQUFDO29CQTFEb0IsV0FBVztJQUs5Qix3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNFLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDO0lBQ2pELENBQUM7SUFDRCwrQkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDO29CQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLENBQUM7b0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLENBQUM7b0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLENBQUM7b0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxpQ0FBVyxHQUFYLFVBQVksaUJBQXlCO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsMkJBQUssR0FBTCxjQUFTLENBQUM7SUFFViw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLGVBQUssQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO0lBQzlCLENBQUM7O0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ087SUFIUCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEQvQjtJQUFELGtCQUFDO0NBMURELEFBMERDLENBMUR3QyxjQUFJLEdBMEQ1QztrQkExRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpc2RvbVN0b25lIGV4dGVuZHMgSXRlbSB7XG4gIHN0YXRpYyBpbnN0YW5jZTogV2lzZG9tU3RvbmU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgZXhwQm9udXNSYXRlOiBudW1iZXIgPSAxMDtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIFdpc2RvbVN0b25lLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBFWFAgZ2FpbiBieSAxMCUuXCI7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIEVYUCBnYWluIGJ5IDE1JS5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5sb2FkU3RhdHMoKTtcbiAgICAgICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5hZGRFcXVpcGVkSXRlbSh0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIEVYUCBnYWluIGJ5IDIwJS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgRVhQIGdhaW4gYnkgMjUlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBFWFAgZ2FpbiBieSAzMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvYWRTdGF0cygpIHtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5pbmNyZWFzZUJvbnVzRXhwUmF0ZSh0aGlzLmV4cEJvbnVzUmF0ZSk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoYWRkaXRpb25FeHBBbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlQm9udXNFeHBSYXRlKGFkZGl0aW9uRXhwQW1vdW50KTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLm9uTGV2ZWxVcCgpO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmlzRXF1aXBlZCkgcmV0dXJuO1xuICB9XG59XG4iXX0=