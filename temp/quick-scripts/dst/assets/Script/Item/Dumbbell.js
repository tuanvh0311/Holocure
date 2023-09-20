
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/Dumbbell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df1d1uxaA5KSLgkH7jmHlKq', 'Dumbbell');
// Script/Item/Dumbbell.ts

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
var HealthAndShield_1 = require("../Player/HealthAndShield");
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Dumbbell = /** @class */ (function (_super) {
    __extends(Dumbbell, _super);
    function Dumbbell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hpRate = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    Dumbbell_1 = Dumbbell;
    // LIFE-CYCLE CALLBACKS:
    Dumbbell.prototype.onLoad = function () {
        this.itemOnLoad();
        Dumbbell_1.instance = this;
        this.description = "Increase max HP by 10%.";
    };
    Dumbbell.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase max HP by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    this.loadStats();
                    break;
                case 2:
                    this.description = "Increase max HP by 30%.";
                    this.updateStats(10);
                    break;
                case 3:
                    this.description = "Increase max HP by 40%.";
                    this.updateStats(10);
                    break;
                case 4:
                    this.description = "Increase max HP by 50%.";
                    this.updateStats(10);
                    break;
                case 5:
                    this.updateStats(10);
                    break;
                default:
                    break;
            }
        }
    };
    Dumbbell.prototype.loadStats = function () {
        this.overallStats.increaseMaxHPRate(this.hpRate);
        HealthAndShield_1.default.instance.setStateHP(PlayerController_1.default.instance.currentHp, PlayerController_1.default.instance.maxHp);
    };
    Dumbbell.prototype.updateStats = function (additionHpRate) {
        this.overallStats.increaseMaxHPRate(additionHpRate);
        this.hpRate += additionHpRate;
        HealthAndShield_1.default.instance.setStateHP(PlayerController_1.default.instance.currentHp, PlayerController_1.default.instance.maxHp);
    };
    Dumbbell.prototype.start = function () { };
    Dumbbell.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var Dumbbell_1;
    __decorate([
        property(cc.Float)
    ], Dumbbell.prototype, "hpRate", void 0);
    Dumbbell = Dumbbell_1 = __decorate([
        ccclass
    ], Dumbbell);
    return Dumbbell;
}(Item_1.default));
exports.default = Dumbbell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxEdW1iYmVsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLDZEQUF3RDtBQUN4RCwrREFBMEQ7QUFDMUQsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFJO0lBQTFDO1FBQUEscUVBbUVDO1FBaEVDLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQStENUIsQ0FBQztpQkFuRW9CLFFBQVE7SUFLM0Isd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsVUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNsQixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLHdCQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtTQUNGO0lBQ0gsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQ2pDLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQ25DLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ2hDLENBQUM7SUFDSixDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLGNBQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sSUFBSSxjQUFjLENBQUM7UUFDOUIseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUNqQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUNuQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVELHdCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztJQUM5QixDQUFDOztJQS9ERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNDO0lBSEQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1FNUI7SUFBRCxlQUFDO0NBbkVELEFBbUVDLENBbkVxQyxjQUFJLEdBbUV6QztrQkFuRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBIZWFsdGhBbmRTaGllbGQgZnJvbSBcIi4uL1BsYXllci9IZWFsdGhBbmRTaGllbGRcIjtcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuLi9QbGF5ZXIvUGxheWVyQ29udHJvbGxlclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVtYmJlbGwgZXh0ZW5kcyBJdGVtIHtcbiAgc3RhdGljIGluc3RhbmNlOiBEdW1iYmVsbDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBocFJhdGU6IG51bWJlciA9IDEwO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5pdGVtT25Mb2FkKCk7XG4gICAgRHVtYmJlbGwuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIG1heCBIUCBieSAxMCUuXCI7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIG1heCBIUCBieSAyMCUuXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmFkZEVxdWlwZWRJdGVtKHRoaXMpO1xuICAgICAgICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBtYXggSFAgYnkgMzAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMTApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgbWF4IEhQIGJ5IDQwJS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDEwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIG1heCBIUCBieSA1MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygxMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDEwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9hZFN0YXRzKCkge1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlTWF4SFBSYXRlKHRoaXMuaHBSYXRlKTtcbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVIUChcbiAgICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuY3VycmVudEhwLFxuICAgICAgUGxheWVyQ29udHJvbGxlci5pbnN0YW5jZS5tYXhIcFxuICAgICk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoYWRkaXRpb25IcFJhdGU6IG51bWJlcikge1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlTWF4SFBSYXRlKGFkZGl0aW9uSHBSYXRlKTtcbiAgICB0aGlzLmhwUmF0ZSArPSBhZGRpdGlvbkhwUmF0ZTtcbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVIUChcbiAgICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuY3VycmVudEhwLFxuICAgICAgUGxheWVyQ29udHJvbGxlci5pbnN0YW5jZS5tYXhIcFxuICAgICk7XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgfVxufVxuIl19