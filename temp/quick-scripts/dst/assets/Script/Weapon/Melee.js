
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Melee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb6baJQKUhCko4rHk90SUfS', 'Melee');
// Script/Weapon/Melee.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Melee = /** @class */ (function (_super) {
    __extends(Melee, _super);
    function Melee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = 20;
        _this.weaponScaleX = 1;
        _this.collider = null;
        _this.weaponScaleY = 1;
        return _this;
        // update (dt) {}
    }
    Melee_1 = Melee;
    Melee.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).takeDamage(this.damage);
        }
    };
    Melee.prototype.set = function (BaseDamage, damagePercentage, weaponScalePercentage) {
        this.damage = BaseDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.updateStats();
    };
    Melee.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScaleX =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.weaponScaleY =
            Math.abs((this.weaponScalePercentage / 100) * this.baseScale) +
                Math.abs(this.baseScale);
        this.node.scaleX = this.weaponScaleX;
        this.node.scaleY = this.weaponScaleY;
    };
    // LIFE-CYCLE CALLBACKS:
    Melee.prototype.onLoad = function () {
        Melee_1.instance = this;
        this.node.zIndex = 2;
        this.collider = this.node.getComponent(cc.BoxCollider);
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScaleX;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
    };
    Melee.prototype.start = function () { };
    var Melee_1;
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "damage", void 0);
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "weaponScaleX", void 0);
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "weaponScaleY", void 0);
    Melee = Melee_1 = __decorate([
        ccclass
    ], Melee);
    return Melee;
}(cc.Component));
exports.default = Melee;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXE1lbGVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDREQUF1RDtBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXVEQztRQXBEQyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBRyxDQUFDLENBQUM7O1FBOENqQixpQkFBaUI7SUFDbkIsQ0FBQztjQXZEb0IsS0FBSztJQWN4QixnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUNELG1CQUFHLEdBQUgsVUFDRSxVQUFrQixFQUNsQixnQkFBd0IsRUFDeEIscUJBQTZCO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU07WUFDVCxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEUsSUFBSSxDQUFDLFlBQVk7WUFDZixDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVk7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsd0JBQXdCO0lBRXhCLHNCQUFNLEdBQU47UUFDRSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFLLEdBQUwsY0FBUyxDQUFDOztJQWpEVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNQO0lBRVo7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDRjtJQUdqQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNGO0lBUkUsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXVEekI7SUFBRCxZQUFDO0NBdkRELEFBdURDLENBdkRrQyxFQUFFLENBQUMsU0FBUyxHQXVEOUM7a0JBdkRvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBFbmVteUNvbnRyb2xsZXIgZnJvbSBcIi4uL0VuZW15L0VuZW15Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVsZWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IE1lbGVlO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGRhbWFnZSA9IDIwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHdlYXBvblNjYWxlWCA9IDE7XG4gIGNvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgd2VhcG9uU2NhbGVZID0gMTtcbiAgYmFzZURhbWFuZ2U6IG51bWJlcjtcbiAgYmFzZVNjYWxlOiBudW1iZXI7XG4gIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcjtcblxuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XG4gICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xuICAgIH1cbiAgfVxuICBzZXQoXG4gICAgQmFzZURhbWFnZTogbnVtYmVyLFxuICAgIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmRhbWFnZSA9IEJhc2VEYW1hZ2U7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlID0gZGFtYWdlUGVyY2VudGFnZTtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSA9IHdlYXBvblNjYWxlUGVyY2VudGFnZTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRzKCk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoKSB7XG4gICAgdGhpcy5kYW1hZ2UgPVxuICAgICAgKHRoaXMuZGFtYWdlUGVyY2VudGFnZSAvIDEwMCkgKiB0aGlzLmJhc2VEYW1hbmdlICsgdGhpcy5iYXNlRGFtYW5nZTtcbiAgICB0aGlzLndlYXBvblNjYWxlWCA9XG4gICAgICAodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUgKyB0aGlzLmJhc2VTY2FsZTtcbiAgICB0aGlzLndlYXBvblNjYWxlWSA9XG4gICAgICBNYXRoLmFicygodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUpICtcbiAgICAgIE1hdGguYWJzKHRoaXMuYmFzZVNjYWxlKTtcbiAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy53ZWFwb25TY2FsZVg7XG4gICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMud2VhcG9uU2NhbGVZO1xuICB9XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBNZWxlZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDI7XG4gICAgdGhpcy5jb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgIHRoaXMuYmFzZURhbWFuZ2UgPSB0aGlzLmRhbWFnZTtcbiAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMud2VhcG9uU2NhbGVYO1xuICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgPSAwO1xuICB9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=