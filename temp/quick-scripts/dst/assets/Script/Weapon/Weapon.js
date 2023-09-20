
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Weapon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '114abOp/y5Ny4Oop+uvGgCq', 'Weapon');
// Script/Weapon/Weapon.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 0;
        _this.maxLevel = 7;
        _this.isEquiped = false;
        _this.isResizeable = true;
        _this.baseDamage = 20;
        _this.isLockLevel = false;
        _this.description = null;
        _this.attackSpeed = 2;
        _this.minAS = 1;
        _this.displayIcon = null;
        return _this;
    }
    Weapon_1 = Weapon;
    // onLoad () {}
    Weapon.prototype.start = function () { };
    Weapon.prototype.onLevelMax = function () {
        if (this.level >= this.maxLevel) {
            this.isLockLevel = true;
        }
    };
    Weapon.prototype.weaponOnLoad = function () {
        Weapon_1.instance = this;
        GameController_1.default.instance.addWeapon(this);
        this.overallStat = OverallStats_1.default.instance;
        this.name = this.node.name;
        this.baseAS = this.attackSpeed;
        this.damagePercentage = 0;
        this.attackSpeedPercentage = 0;
        this.weaponScalePercentage = 0;
        this.resultDamagePercentage = 0;
        this.resultAttackSpeedPercentage = 0;
        this.resultWeaponScalePercentage = 0;
        this.onStatChange();
    };
    Weapon.prototype.onStatChange = function () {
        this.resultDamagePercentage =
            this.damagePercentage + this.overallStat.getAttackRate();
        this.resultWeaponScalePercentage = this.weaponScalePercentage;
        if (this.isResizeable)
            this.resultWeaponScalePercentage =
                this.weaponScalePercentage + this.overallStat.getWeaponSizeRate();
        this.resultAttackSpeedPercentage =
            this.attackSpeedPercentage + this.overallStat.getHasteRate();
        this.attackSpeed =
            this.baseAS - (this.baseAS * this.resultAttackSpeedPercentage) / 100;
        if (this.attackSpeed < this.minAS)
            this.attackSpeed = this.minAS;
    };
    var Weapon_1;
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "level", void 0);
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "maxLevel", void 0);
    __decorate([
        property(cc.Boolean)
    ], Weapon.prototype, "isResizeable", void 0);
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "baseDamage", void 0);
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "attackSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "minAS", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Weapon.prototype, "displayIcon", void 0);
    Weapon = Weapon_1 = __decorate([
        ccclass
    ], Weapon);
    return Weapon;
}(cc.Component));
exports.default = Weapon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFdlYXBvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBaUVDO1FBOURDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQStDckMsQ0FBQztlQWpFb0IsTUFBTTtJQTZCekIsZUFBZTtJQUVmLHNCQUFLLEdBQUwsY0FBUyxDQUFDO0lBQ1YsMkJBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELDZCQUFZLEdBQVo7UUFDRSxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2Qix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELDZCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsc0JBQXNCO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDOUQsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUNuQixJQUFJLENBQUMsMkJBQTJCO2dCQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQywyQkFBMkI7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVc7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkUsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25FLENBQUM7O0lBN0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0Q7SUFFbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDRTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNRO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNEO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ1U7SUFsQmhCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FpRTFCO0lBQUQsYUFBQztDQWpFRCxBQWlFQyxDQWpFbUMsRUFBRSxDQUFDLFNBQVMsR0FpRS9DO2tCQWpFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBPdmVyYWxsU3RhdHMgZnJvbSBcIi4uL1BsYXllci9PdmVyYWxsU3RhdHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogV2VhcG9uO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGxldmVsOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1heExldmVsOiBudW1iZXIgPSA3O1xuICBpc0VxdWlwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gIGlzUmVzaXplYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgYmFzZURhbWFnZTogbnVtYmVyID0gMjA7XG4gIGlzTG9ja0xldmVsOiBib29sZWFuID0gZmFsc2U7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGF0dGFja1NwZWVkOiBudW1iZXIgPSAyO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1pbkFTOiBudW1iZXIgPSAxO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGRpc3BsYXlJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIGJhc2VBUzogbnVtYmVyO1xuICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXI7XG4gIGF0dGFja1NwZWVkUGVyY2VudGFnZTogbnVtYmVyO1xuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmVzdWx0RGFtYWdlUGVyY2VudGFnZTogbnVtYmVyO1xuICByZXN1bHRBdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlOiBudW1iZXI7XG4gIG92ZXJhbGxTdGF0OiBPdmVyYWxsU3RhdHM7XG4gIG5hbWU6IHN0cmluZztcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHt9XG4gIG9uTGV2ZWxNYXgoKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5tYXhMZXZlbCkge1xuICAgICAgdGhpcy5pc0xvY2tMZXZlbCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgd2VhcG9uT25Mb2FkKCkge1xuICAgIFdlYXBvbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkV2VhcG9uKHRoaXMpO1xuICAgIHRoaXMub3ZlcmFsbFN0YXQgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2U7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5ub2RlLm5hbWU7XG4gICAgdGhpcy5iYXNlQVMgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5hdHRhY2tTcGVlZFBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMucmVzdWx0QXR0YWNrU3BlZWRQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5vblN0YXRDaGFuZ2UoKTtcbiAgfVxuICBvblN0YXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlID1cbiAgICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSArIHRoaXMub3ZlcmFsbFN0YXQuZ2V0QXR0YWNrUmF0ZSgpO1xuICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlID0gdGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2U7XG4gICAgaWYgKHRoaXMuaXNSZXNpemVhYmxlKVxuICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2UgPVxuICAgICAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSArIHRoaXMub3ZlcmFsbFN0YXQuZ2V0V2VhcG9uU2l6ZVJhdGUoKTtcbiAgICB0aGlzLnJlc3VsdEF0dGFja1NwZWVkUGVyY2VudGFnZSA9XG4gICAgICB0aGlzLmF0dGFja1NwZWVkUGVyY2VudGFnZSArIHRoaXMub3ZlcmFsbFN0YXQuZ2V0SGFzdGVSYXRlKCk7XG4gICAgdGhpcy5hdHRhY2tTcGVlZCA9XG4gICAgICB0aGlzLmJhc2VBUyAtICh0aGlzLmJhc2VBUyAqIHRoaXMucmVzdWx0QXR0YWNrU3BlZWRQZXJjZW50YWdlKSAvIDEwMDtcbiAgICBpZiAodGhpcy5hdHRhY2tTcGVlZCA8IHRoaXMubWluQVMpIHRoaXMuYXR0YWNrU3BlZWQgPSB0aGlzLm1pbkFTO1xuICB9XG59XG4iXX0=