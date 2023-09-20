
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/ShurikenThrower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '805f4oXAZFOS7RmMDP7c/Kq', 'ShurikenThrower');
// Script/Weapon/ShurikenThrower.ts

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
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var OrbitProjectile_1 = require("./OrbitProjectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShurikenThrower = /** @class */ (function (_super) {
    __extends(ShurikenThrower, _super);
    function ShurikenThrower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shuriken = null;
        _this.player = null;
        _this.parent = null;
        _this.hitLimit = 5;
        _this.baseHitLimit = _this.hitLimit;
        _this.spawnAmount = 3;
        _this.shurikenList = new Array();
        _this.currentLevel = _this.level;
        return _this;
    }
    ShurikenThrower_1 = ShurikenThrower;
    ShurikenThrower.prototype.onLoad = function () {
        ShurikenThrower_1.instance = this;
        this.durationPercentage = 0;
        this.weaponOnLoad();
        this.timer = 0;
        var initCount = 10;
        this.description = "Repels targets with orbiting shurikens.";
        for (var i = 0; i < initCount; ++i) {
            var shuriken = cc.instantiate(this.shuriken);
            shuriken.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.shurikenPool.put(shuriken);
        }
    };
    ShurikenThrower.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Add 1 additional shuriken.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description =
                        "Increase damage by 30% and increase duration by 1 second.";
                    this.spawnAmount += 1;
                    break;
                case 3:
                    this.description = "Add 1 additional shuriken.";
                    this.updateStats(30, 0, 0, 0, 0, 50);
                    break;
                case 4:
                    this.description = "Increase Damage by 40%.";
                    this.spawnAmount += 1;
                    break;
                case 5:
                    this.description = "Add 1 additional shuriken.";
                    this.updateStats(40, 0, 0, 0, 0, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 40%.";
                    this.spawnAmount += 1;
                    break;
                case 7:
                    this.updateStats(40, 0, 0, 0, 0, 0);
                    break;
                default:
                    break;
            }
        }
    };
    ShurikenThrower.prototype.spawnShuriken = function (angleDelta) {
        var shuriken = null;
        if (ProjectilePooling_1.default.instance.shurikenPool.size() > 0) {
            shuriken = ProjectilePooling_1.default.instance.shurikenPool.get();
        }
        else {
            shuriken = cc.instantiate(this.shuriken);
        }
        shuriken.opacity = 0;
        cc.tween(shuriken).to(0.05, { opacity: 255 }).start();
        shuriken.parent = this.parent;
        shuriken
            .getComponent(OrbitProjectile_1.default)
            .setStats(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.durationPercentage, this.player, angleDelta);
        this.shurikenList.push(shuriken);
    };
    ShurikenThrower.prototype.updateStats = function (damagePercentage, baseDamage, hitLimit, attackSpeedPercentage, weaponScalePercentage, durationPercentage) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.hitLimit += hitLimit;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.durationPercentage += durationPercentage;
        this.onStatChange();
    };
    ShurikenThrower.prototype.throwShuriken = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            this.hitLimit = this.baseHitLimit * this.spawnAmount;
            for (var i = 0; i < this.spawnAmount; i++) {
                var angleDelta = (360 / this.spawnAmount) * i * (Math.PI / 180);
                this.spawnShuriken(angleDelta);
            }
        }
        this.shurikenList = this.shurikenList.filter(function (item) { return item.getComponent(OrbitProjectile_1.default).isInPool !== true; });
    };
    ShurikenThrower.prototype.onNoHitLimit = function () {
        if (this.hitLimit <= 0) {
            this.shurikenList.forEach(function (element) {
                element.getComponent(OrbitProjectile_1.default).forceToPutBack();
            });
        }
    };
    ShurikenThrower.prototype.start = function () { };
    ShurikenThrower.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.throwShuriken();
        this.onNoHitLimit();
    };
    var ShurikenThrower_1;
    __decorate([
        property(cc.Prefab)
    ], ShurikenThrower.prototype, "shuriken", void 0);
    __decorate([
        property(cc.Node)
    ], ShurikenThrower.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], ShurikenThrower.prototype, "parent", void 0);
    ShurikenThrower = ShurikenThrower_1 = __decorate([
        ccclass
    ], ShurikenThrower);
    return ShurikenThrower;
}(Weapon_1.default));
exports.default = ShurikenThrower;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFNodXJpa2VuVGhyb3dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBRXhDLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFDaEQsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFNO0lBQW5EO1FBQUEscUVBNElDO1FBeklDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsa0JBQVksR0FBVyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGtCQUFZLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7UUFDcEQsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQThINUIsQ0FBQzt3QkE1SW9CLGVBQWU7SUFlbEMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLHlDQUF5QyxDQUFDO1FBQzdELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FB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RXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0s7SUFQSixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNEluQztJQUFELHNCQUFDO0NBNUlELEFBNElDLENBNUk0QyxnQkFBTSxHQTRJbEQ7a0JBNUlvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vSXRlbS9JdGVtXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcbmltcG9ydCBPcmJpdFByb2plY3RpbGUgZnJvbSBcIi4vT3JiaXRQcm9qZWN0aWxlXCI7XG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuL1dlYXBvblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1cmlrZW5UaHJvd2VyIGV4dGVuZHMgV2VhcG9uIHtcbiAgc3RhdGljIGluc3RhbmNlOiBTaHVyaWtlblRocm93ZXI7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHNodXJpa2VuOiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBhcmVudDogY2MuTm9kZSA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXI7XG4gIGR1cmF0aW9uUGVyY2VudGFnZTogbnVtYmVyO1xuICBoaXRMaW1pdDogbnVtYmVyID0gNTtcbiAgYmFzZUhpdExpbWl0OiBudW1iZXIgPSB0aGlzLmhpdExpbWl0O1xuICBzcGF3bkFtb3VudDogbnVtYmVyID0gMztcbiAgc2h1cmlrZW5MaXN0OiBBcnJheTxjYy5Ob2RlPiA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICBvbkxvYWQoKSB7XG4gICAgU2h1cmlrZW5UaHJvd2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmR1cmF0aW9uUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy53ZWFwb25PbkxvYWQoKTtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICBsZXQgaW5pdENvdW50ID0gMTA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVwZWxzIHRhcmdldHMgd2l0aCBvcmJpdGluZyBzaHVyaWtlbnMuXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0Q291bnQ7ICsraSkge1xuICAgICAgbGV0IHNodXJpa2VuID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaHVyaWtlbik7XG4gICAgICBzaHVyaWtlbi5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnNodXJpa2VuUG9vbC5wdXQoc2h1cmlrZW4pO1xuICAgIH1cbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiQWRkIDEgYWRkaXRpb25hbCBzaHVyaWtlbi5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZFdlYXBvbih0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZSBkYW1hZ2UgYnkgMzAlIGFuZCBpbmNyZWFzZSBkdXJhdGlvbiBieSAxIHNlY29uZC5cIjtcblxuICAgICAgICAgIHRoaXMuc3Bhd25BbW91bnQgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkFkZCAxIGFkZGl0aW9uYWwgc2h1cmlrZW4uXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygzMCwgMCwgMCwgMCwgMCwgNTApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgRGFtYWdlIGJ5IDQwJS5cIjtcbiAgICAgICAgICB0aGlzLnNwYXduQW1vdW50ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJBZGQgMSBhZGRpdGlvbmFsIHNodXJpa2VuLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDQwJS5cIjtcbiAgICAgICAgICB0aGlzLnNwYXduQW1vdW50ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDQwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3Bhd25TaHVyaWtlbihhbmdsZURlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgc2h1cmlrZW46IGNjLk5vZGUgPSBudWxsO1xuICAgIGlmIChQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5zaHVyaWtlblBvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgc2h1cmlrZW4gPSBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5zaHVyaWtlblBvb2wuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNodXJpa2VuID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaHVyaWtlbik7XG4gICAgfVxuXG4gICAgc2h1cmlrZW4ub3BhY2l0eSA9IDA7XG4gICAgY2MudHdlZW4oc2h1cmlrZW4pLnRvKDAuMDUsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgc2h1cmlrZW4ucGFyZW50ID0gdGhpcy5wYXJlbnQ7XG5cbiAgICBzaHVyaWtlblxuICAgICAgLmdldENvbXBvbmVudChPcmJpdFByb2plY3RpbGUpXG4gICAgICAuc2V0U3RhdHMoXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucGxheWVyLFxuICAgICAgICBhbmdsZURlbHRhXG4gICAgICApO1xuICAgIHRoaXMuc2h1cmlrZW5MaXN0LnB1c2goc2h1cmlrZW4pO1xuICB9XG4gIHVwZGF0ZVN0YXRzKFxuICAgIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBiYXNlRGFtYWdlOiBudW1iZXIsXG4gICAgaGl0TGltaXQ6IG51bWJlcixcbiAgICBhdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgKz0gZGFtYWdlUGVyY2VudGFnZTtcbiAgICB0aGlzLmJhc2VEYW1hZ2UgKz0gYmFzZURhbWFnZTtcbiAgICB0aGlzLmhpdExpbWl0ICs9IGhpdExpbWl0O1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlICs9IGF0dGFja1NwZWVkUGVyY2VudGFnZTtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSArPSB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U7XG4gICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UgKz0gZHVyYXRpb25QZXJjZW50YWdlO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gIH1cbiAgdGhyb3dTaHVyaWtlbigpIHtcbiAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5oaXRMaW1pdCA9IHRoaXMuYmFzZUhpdExpbWl0ICogdGhpcy5zcGF3bkFtb3VudDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcGF3bkFtb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBhbmdsZURlbHRhID0gKDM2MCAvIHRoaXMuc3Bhd25BbW91bnQpICogaSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5zcGF3blNodXJpa2VuKGFuZ2xlRGVsdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNodXJpa2VuTGlzdCA9IHRoaXMuc2h1cmlrZW5MaXN0LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLmdldENvbXBvbmVudChPcmJpdFByb2plY3RpbGUpLmlzSW5Qb29sICE9PSB0cnVlXG4gICAgKTtcbiAgfVxuICBvbk5vSGl0TGltaXQoKSB7XG4gICAgaWYgKHRoaXMuaGl0TGltaXQgPD0gMCkge1xuICAgICAgdGhpcy5zaHVyaWtlbkxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmdldENvbXBvbmVudChPcmJpdFByb2plY3RpbGUpLmZvcmNlVG9QdXRCYWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIHRoaXMudGhyb3dTaHVyaWtlbigpO1xuICAgIHRoaXMub25Ob0hpdExpbWl0KCk7XG4gIH1cbn1cbiJdfQ==