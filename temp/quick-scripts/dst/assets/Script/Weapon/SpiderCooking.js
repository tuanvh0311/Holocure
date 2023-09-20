
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/SpiderCooking.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49d17zdk5dLOIo96OSB+zhp', 'SpiderCooking');
// Script/Weapon/SpiderCooking.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpiderCooking = /** @class */ (function (_super) {
    __extends(SpiderCooking, _super);
    function SpiderCooking() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentLevel = _this.level;
        return _this;
    }
    SpiderCooking.prototype.onLoad = function () {
        this.weaponOnLoad();
        this.description =
            "Create an area of miasma around, dealing slow damage to enemies inside.";
        this.node.zIndex = 1;
        this.node.getComponent(cc.Sprite).enabled = false;
        this.node.getComponent(cc.CircleCollider).enabled = false;
    };
    SpiderCooking.prototype.onCollisionStay = function (other, self) {
        if (other.tag == 1) {
            var damage = this.baseDamage + (this.baseDamage * this.resultDamagePercentage) / 100;
            other.node
                .getComponent(EnemyController_1.default)
                .takeDamageWithTick(damage, this.attackSpeed);
        }
    };
    SpiderCooking.prototype.updateStats = function (damagePercentage, attackSpeedPercentage, weaponScalePercentage) {
        this.damagePercentage += damagePercentage;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.node.scale += weaponScalePercentage / 100;
        this.onStatChange();
        // this.node.scale = this.resultWeaponScalePercentage;
    };
    SpiderCooking.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase area by 15%.";
                    this.isEquiped = true;
                    this.node.getComponent(cc.Sprite).enabled = true;
                    this.node.getComponent(cc.CircleCollider).enabled = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 0, 15);
                    break;
                case 3:
                    this.description = "Increase area by 25%.";
                    this.updateStats(30, 0, 0);
                    break;
                case 4:
                    this.description = "Increase frequency of hits by 20%.";
                    this.updateStats(0, 0, 25);
                    break;
                case 5:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 20, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 30, 0);
                    break;
                case 7:
                    this.updateStats(0, 30, 0);
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    SpiderCooking.prototype.start = function () { };
    SpiderCooking.prototype.update = function (dt) {
        this.onLevelUp();
        if (!this.isEquiped)
            return;
        if (Utils_1.default.isPause) {
            this.node.getComponent(cc.Animation).pause();
            return;
        }
        this.node.getComponent(cc.Animation).resume();
    };
    SpiderCooking = __decorate([
        ccclass
    ], SpiderCooking);
    return SpiderCooking;
}(Weapon_1.default));
exports.default = SpiderCooking;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFNwaWRlckNvb2tpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUN4Qyw0REFBdUQ7QUFDdkQsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFNO0lBQWpEO1FBQ0Usd0JBQXdCO1FBRDFCLHFFQXNGQztRQW5GQyxrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBbUY1QixDQUFDO0lBakZDLDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVc7WUFDZCx5RUFBeUUsQ0FBQztRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUNELHVDQUFlLEdBQWYsVUFBZ0IsS0FBa0IsRUFBRSxJQUFpQjtRQUNuRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksTUFBTSxHQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFH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QUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQXJGa0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXNGakM7SUFBRCxvQkFBQztDQXRGRCxBQXNGQyxDQXRGMEMsZ0JBQU0sR0FzRmhEO2tCQXRGb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi4vRW5lbXkvRW5lbXlDb250cm9sbGVyXCI7XG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuL1dlYXBvblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpZGVyQ29va2luZyBleHRlbmRzIFdlYXBvbiB7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMud2VhcG9uT25Mb2FkKCk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICBcIkNyZWF0ZSBhbiBhcmVhIG9mIG1pYXNtYSBhcm91bmQsIGRlYWxpbmcgc2xvdyBkYW1hZ2UgdG8gZW5lbWllcyBpbnNpZGUuXCI7XG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDE7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gIH1cbiAgb25Db2xsaXNpb25TdGF5KG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgIGxldCBkYW1hZ2UgPVxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UgKyAodGhpcy5iYXNlRGFtYWdlICogdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlKSAvIDEwMDtcbiAgICAgIG90aGVyLm5vZGVcbiAgICAgICAgLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpXG4gICAgICAgIC50YWtlRGFtYWdlV2l0aFRpY2soZGFtYWdlLCB0aGlzLmF0dGFja1NwZWVkKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlU3RhdHMoXG4gICAgZGFtYWdlUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIGF0dGFja1NwZWVkUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIHdlYXBvblNjYWxlUGVyY2VudGFnZTogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSArPSBkYW1hZ2VQZXJjZW50YWdlO1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlICs9IGF0dGFja1NwZWVkUGVyY2VudGFnZTtcbiAgICB0aGlzLm5vZGUuc2NhbGUgKz0gd2VhcG9uU2NhbGVQZXJjZW50YWdlIC8gMTAwO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gICAgLy8gdGhpcy5ub2RlLnNjYWxlID0gdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2U7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGFyZWEgYnkgMTUlLlwiO1xuICAgICAgICAgIHRoaXMuaXNFcXVpcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZFdlYXBvbih0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSAzMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAxNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBhcmVhIGJ5IDI1JS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDMwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGZyZXF1ZW5jeSBvZiBoaXRzIGJ5IDIwJS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDAsIDAsIDI1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSAzMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAyMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBkYW1hZ2UgYnkgMzAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMCwgMzAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAzMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLm9uTGV2ZWxVcCgpO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkge1xuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBhdXNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5yZXN1bWUoKTtcbiAgfVxufVxuIl19