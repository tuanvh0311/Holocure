
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/OverallStats.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3e72yWqRJJTI7+/B39kZpf', 'OverallStats');
// Script/Player/OverallStats.ts

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
var Weapon_1 = require("../Weapon/Weapon");
var PlayerController_1 = require("./PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverallStats = /** @class */ (function (_super) {
    __extends(OverallStats, _super);
    function OverallStats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   maxHpRate: number = 0;
        //   atkRate: number = 0;
        //   spdRate: number = 0;
        //   critChance: number = 0;
        //   pickupRangeRate: number = 0;
        //   resistRate: number = 0;
        _this.nameList = new Array();
        _this.statList = new Array();
        return _this;
    }
    OverallStats_1 = OverallStats;
    OverallStats.prototype.loadStats = function () {
        for (var i = 0; i < this.nameList.length; i++) {
            this.statList[i] = 0;
        }
    };
    OverallStats.prototype.loadFromCharacterData = function () {
        var data = PlayerController_1.default.instance.loadedData;
        this.increaseAttackRate(data.atk);
        this.increaseCritChance(data.crit);
    };
    OverallStats.prototype.pushToList = function () {
        this.nameList.push("Max HP Rate");
        this.nameList.push("Attack Rate");
        this.nameList.push("Speed Rate");
        this.nameList.push("Haste Rate");
        this.nameList.push("Weapon size Rate");
        this.nameList.push("Critical Chance");
        this.nameList.push("Critical Damage Rate");
        this.nameList.push("Pickup Range Rate");
        this.nameList.push("Resist Rate");
        this.nameList.push("Bonus Healing Rate");
        this.nameList.push("Bonus Exp Rate");
    };
    OverallStats.prototype.onStatsChange = function () {
        if (GameController_1.default.instance.isGameOver)
            return;
        PlayerController_1.default.instance.onStatChange();
        Weapon_1.default.instance.onStatChange();
        UIController_1.default.instance.updateStats();
    };
    OverallStats.prototype.increaseMaxHPRate = function (amount) {
        this.statList[0] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseAttackRate = function (amount) {
        this.statList[1] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseSpeedRate = function (amount) {
        this.statList[2] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseHasteRate = function (amount) {
        this.statList[3] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseWeaponSizeRate = function (amount) {
        this.statList[4] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseCritChance = function (amount) {
        this.statList[5] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseCritDamageRate = function (amount) {
        this.statList[6] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increasePickupRangeRate = function (amount) {
        this.statList[7] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseResistRate = function (amount) {
        this.statList[8] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseBonusHealingRate = function (amount) {
        this.statList[9] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseBonusExpRate = function (amount) {
        this.statList[10] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.getMaxHPRate = function () {
        return this.statList[0];
    };
    OverallStats.prototype.getAttackRate = function () {
        return this.statList[1];
    };
    OverallStats.prototype.getSpeedRate = function () {
        return this.statList[2];
    };
    OverallStats.prototype.getHasteRate = function () {
        return this.statList[3];
    };
    OverallStats.prototype.getWeaponSizeRate = function () {
        return this.statList[4];
    };
    OverallStats.prototype.getCritChance = function () {
        return this.statList[5];
    };
    OverallStats.prototype.getCritDamageRate = function () {
        return this.statList[6];
    };
    OverallStats.prototype.getPickupRangeRate = function () {
        return this.statList[7];
    };
    OverallStats.prototype.getResistRate = function () {
        return this.statList[8];
    };
    OverallStats.prototype.getBonusHealingRate = function () {
        return this.statList[9];
    };
    OverallStats.prototype.getBonusExpRate = function () {
        return this.statList[10];
    };
    OverallStats.prototype.onLoad = function () {
        OverallStats_1.instance = this;
        this.player = PlayerController_1.default.instance;
        this.pushToList();
        this.loadStats();
    };
    OverallStats.prototype.start = function () {
        this.loadFromCharacterData();
    };
    OverallStats.prototype.update = function (dt) { };
    var OverallStats_1;
    OverallStats = OverallStats_1 = __decorate([
        ccclass
    ], OverallStats);
    return OverallStats;
}(cc.Component));
exports.default = OverallStats;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXE92ZXJhbGxTdGF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBRXRELDJDQUFzQztBQUN0Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtSUM7UUFqSUMsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGlDQUFpQztRQUNqQyw0QkFBNEI7UUFDNUIsY0FBUSxHQUFrQixJQUFJLEtBQUssRUFBVSxDQUFDO1FBQzlDLGNBQVEsR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQzs7SUEwSGhELENBQUM7cUJBbklvQixZQUFZO0lBVy9CLGdDQUFTLEdBQVQ7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ0QsNENBQXFCLEdBQXJCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsMEJBQWdCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJ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LENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMENBQW1CLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCw2QkFBTSxHQUFOO1FBQ0UsY0FBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRywwQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFHLENBQUM7O0lBbElNLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FtSWhDO0lBQUQsbUJBQUM7Q0FuSUQsQUFtSUMsQ0FuSXlDLEVBQUUsQ0FBQyxTQUFTLEdBbUlyRDtrQkFuSW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVUlDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuLi9XZWFwb24vV2VhcG9uXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyYWxsU3RhdHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IE92ZXJhbGxTdGF0cztcbiAgLy8gICBtYXhIcFJhdGU6IG51bWJlciA9IDA7XG4gIC8vICAgYXRrUmF0ZTogbnVtYmVyID0gMDtcbiAgLy8gICBzcGRSYXRlOiBudW1iZXIgPSAwO1xuICAvLyAgIGNyaXRDaGFuY2U6IG51bWJlciA9IDA7XG4gIC8vICAgcGlja3VwUmFuZ2VSYXRlOiBudW1iZXIgPSAwO1xuICAvLyAgIHJlc2lzdFJhdGU6IG51bWJlciA9IDA7XG4gIG5hbWVMaXN0OiBBcnJheTxTdHJpbmc+ID0gbmV3IEFycmF5PFN0cmluZz4oKTtcbiAgc3RhdExpc3Q6IEFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICBwbGF5ZXI6IFBsYXllckNvbnRyb2xsZXI7XG4gIGxvYWRTdGF0cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3RhdExpc3RbaV0gPSAwO1xuICAgIH1cbiAgfVxuICBsb2FkRnJvbUNoYXJhY3RlckRhdGEoKSB7XG4gICAgbGV0IGRhdGEgPSBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLmxvYWRlZERhdGE7XG4gICAgdGhpcy5pbmNyZWFzZUF0dGFja1JhdGUoZGF0YS5hdGspO1xuICAgIHRoaXMuaW5jcmVhc2VDcml0Q2hhbmNlKGRhdGEuY3JpdCk7XG4gIH1cbiAgcHVzaFRvTGlzdCgpIHtcbiAgICB0aGlzLm5hbWVMaXN0LnB1c2goXCJNYXggSFAgUmF0ZVwiKTtcbiAgICB0aGlzLm5hbWVMaXN0LnB1c2goXCJBdHRhY2sgUmF0ZVwiKTtcbiAgICB0aGlzLm5hbWVMaXN0LnB1c2goXCJTcGVlZCBSYXRlXCIpO1xuICAgIHRoaXMubmFtZUxpc3QucHVzaChcIkhhc3RlIFJhdGVcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiV2VhcG9uIHNpemUgUmF0ZVwiKTtcbiAgICB0aGlzLm5hbWVMaXN0LnB1c2goXCJDcml0aWNhbCBDaGFuY2VcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiQ3JpdGljYWwgRGFtYWdlIFJhdGVcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiUGlja3VwIFJhbmdlIFJhdGVcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiUmVzaXN0IFJhdGVcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiQm9udXMgSGVhbGluZyBSYXRlXCIpO1xuICAgIHRoaXMubmFtZUxpc3QucHVzaChcIkJvbnVzIEV4cCBSYXRlXCIpO1xuICB9XG5cbiAgb25TdGF0c0NoYW5nZSgpIHtcbiAgICBpZiAoR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2Uub25TdGF0Q2hhbmdlKCk7XG4gICAgV2VhcG9uLmluc3RhbmNlLm9uU3RhdENoYW5nZSgpO1xuICAgIFVJQ29udHJvbGxlci5pbnN0YW5jZS51cGRhdGVTdGF0cygpO1xuICB9XG4gIGluY3JlYXNlTWF4SFBSYXRlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0TGlzdFswXSArPSBhbW91bnQ7XG4gICAgdGhpcy5vblN0YXRzQ2hhbmdlKCk7XG4gIH1cbiAgaW5jcmVhc2VBdHRhY2tSYXRlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0TGlzdFsxXSArPSBhbW91bnQ7XG4gICAgdGhpcy5vblN0YXRzQ2hhbmdlKCk7XG4gIH1cbiAgaW5jcmVhc2VTcGVlZFJhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzJdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUhhc3RlUmF0ZShhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdExpc3RbM10gKz0gYW1vdW50O1xuICAgIHRoaXMub25TdGF0c0NoYW5nZSgpO1xuICB9XG4gIGluY3JlYXNlV2VhcG9uU2l6ZVJhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzRdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUNyaXRDaGFuY2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzVdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUNyaXREYW1hZ2VSYXRlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0TGlzdFs2XSArPSBhbW91bnQ7XG4gICAgdGhpcy5vblN0YXRzQ2hhbmdlKCk7XG4gIH1cbiAgaW5jcmVhc2VQaWNrdXBSYW5nZVJhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzddICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZVJlc2lzdFJhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzhdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUJvbnVzSGVhbGluZ1JhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzldICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUJvbnVzRXhwUmF0ZShhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdExpc3RbMTBdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuXG4gIGdldE1heEhQUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFswXTtcbiAgfVxuICBnZXRBdHRhY2tSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRMaXN0WzFdO1xuICB9XG4gIGdldFNwZWVkUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFsyXTtcbiAgfVxuICBnZXRIYXN0ZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdExpc3RbM107XG4gIH1cbiAgZ2V0V2VhcG9uU2l6ZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdExpc3RbNF07XG4gIH1cbiAgZ2V0Q3JpdENoYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFs1XTtcbiAgfVxuICBnZXRDcml0RGFtYWdlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFs2XTtcbiAgfVxuICBnZXRQaWNrdXBSYW5nZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdExpc3RbN107XG4gIH1cbiAgZ2V0UmVzaXN0UmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFs4XTtcbiAgfVxuICBnZXRCb251c0hlYWxpbmdSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRMaXN0WzldO1xuICB9XG4gIGdldEJvbnVzRXhwUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFsxMF07XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIE92ZXJhbGxTdGF0cy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5wbGF5ZXIgPSBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIHRoaXMucHVzaFRvTGlzdCgpO1xuICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmxvYWRGcm9tQ2hhcmFjdGVyRGF0YSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7fVxufVxuIl19