
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/StartWeapon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a9f1I2Cy5NwJGDgc1OLGjr', 'StartWeapon');
// Script/Weapon/StartWeapon.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartWeapon = /** @class */ (function (_super) {
    __extends(StartWeapon, _super);
    function StartWeapon() {
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
    StartWeapon_1 = StartWeapon;
    // onLoad () {}
    StartWeapon.prototype.start = function () { };
    StartWeapon.prototype.onLevelMax = function () {
        if (this.level >= this.maxLevel) {
            this.isLockLevel = true;
        }
    };
    StartWeapon.prototype.weaponOnLoad = function () {
        StartWeapon_1.instance = this;
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
    StartWeapon.prototype.onStatChange = function () {
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
    var StartWeapon_1;
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "level", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "maxLevel", void 0);
    __decorate([
        property(cc.Boolean)
    ], StartWeapon.prototype, "isResizeable", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "baseDamage", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "attackSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "minAS", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StartWeapon.prototype, "displayIcon", void 0);
    StartWeapon = StartWeapon_1 = __decorate([
        ccclass
    ], StartWeapon);
    return StartWeapon;
}(cc.Component));
exports.default = StartWeapon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFN0YXJ0V2VhcG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3RGLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWdFQztRQTdEQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7SUE4Q3JDLENBQUM7b0JBaEVvQixXQUFXO0lBNkI5QixlQUFlO0lBRWYsMkJBQUssR0FBTCxjQUFTLENBQUM7SUFDVixnQ0FBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNFLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxrQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQjtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQzlELElBQUksSUFBSSxDQUFDLFlBQVk7WUFDbkIsSUFBSSxDQUFDLDJCQUEyQjtnQkFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsMkJBQTJCO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxXQUFXO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuRSxDQUFDOztJQTVERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNEO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0U7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztxREFDUTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNLO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDRDtJQUVsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNVO0lBbEJoQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZ0UvQjtJQUFELGtCQUFDO0NBaEVELEFBZ0VDLENBaEV3QyxFQUFFLENBQUMsU0FBUyxHQWdFcEQ7a0JBaEVvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IE92ZXJhbGxTdGF0cyBmcm9tIFwiLi4vUGxheWVyL092ZXJhbGxTdGF0c1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRXZWFwb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IFN0YXJ0V2VhcG9uO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGxldmVsOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1heExldmVsOiBudW1iZXIgPSA3O1xuICBpc0VxdWlwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gIGlzUmVzaXplYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgYmFzZURhbWFnZTogbnVtYmVyID0gMjA7XG4gIGlzTG9ja0xldmVsOiBib29sZWFuID0gZmFsc2U7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGF0dGFja1NwZWVkOiBudW1iZXIgPSAyO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1pbkFTOiBudW1iZXIgPSAxO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGRpc3BsYXlJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIGJhc2VBUzogbnVtYmVyO1xuICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXI7XG4gIGF0dGFja1NwZWVkUGVyY2VudGFnZTogbnVtYmVyO1xuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmVzdWx0RGFtYWdlUGVyY2VudGFnZTogbnVtYmVyO1xuICByZXN1bHRBdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlOiBudW1iZXI7XG4gIG92ZXJhbGxTdGF0OiBPdmVyYWxsU3RhdHM7XG4gIG5hbWU6IHN0cmluZztcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHt9XG4gIG9uTGV2ZWxNYXgoKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5tYXhMZXZlbCkge1xuICAgICAgdGhpcy5pc0xvY2tMZXZlbCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgd2VhcG9uT25Mb2FkKCkge1xuICAgIFN0YXJ0V2VhcG9uLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLm92ZXJhbGxTdGF0ID0gT3ZlcmFsbFN0YXRzLmluc3RhbmNlO1xuICAgIHRoaXMubmFtZSA9IHRoaXMubm9kZS5uYW1lO1xuICAgIHRoaXMuYmFzZUFTID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnJlc3VsdEF0dGFja1NwZWVkUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gIH1cbiAgb25TdGF0Q2hhbmdlKCkge1xuICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSA9XG4gICAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgKyB0aGlzLm92ZXJhbGxTdGF0LmdldEF0dGFja1JhdGUoKTtcbiAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSA9IHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlO1xuICAgIGlmICh0aGlzLmlzUmVzaXplYWJsZSlcbiAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlID1cbiAgICAgICAgdGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgKyB0aGlzLm92ZXJhbGxTdGF0LmdldFdlYXBvblNpemVSYXRlKCk7XG4gICAgdGhpcy5yZXN1bHRBdHRhY2tTcGVlZFBlcmNlbnRhZ2UgPVxuICAgICAgdGhpcy5hdHRhY2tTcGVlZFBlcmNlbnRhZ2UgKyB0aGlzLm92ZXJhbGxTdGF0LmdldEhhc3RlUmF0ZSgpO1xuICAgIHRoaXMuYXR0YWNrU3BlZWQgPVxuICAgICAgdGhpcy5iYXNlQVMgLSAodGhpcy5iYXNlQVMgKiB0aGlzLnJlc3VsdEF0dGFja1NwZWVkUGVyY2VudGFnZSkgLyAxMDA7XG4gICAgaWYgKHRoaXMuYXR0YWNrU3BlZWQgPCB0aGlzLm1pbkFTKSB0aGlzLmF0dGFja1NwZWVkID0gdGhpcy5taW5BUztcbiAgfVxufVxuIl19