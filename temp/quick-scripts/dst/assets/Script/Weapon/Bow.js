
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Bow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '394a8cmyw1OyaFaWHS8D/+J', 'Bow');
// Script/Weapon/Bow.ts

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
var EnemyDetector_1 = require("../Player/EnemyDetector");
var Projectile_1 = require("./Projectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bow = /** @class */ (function (_super) {
    __extends(Bow, _super);
    function Bow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrow = null;
        _this.player = null;
        _this.parent = null;
        _this.shootSound = null;
        _this.hitLimit = 1;
        _this.currentLevel = _this.level;
        return _this;
    }
    Bow_1 = Bow;
    Bow.prototype.onLoad = function () {
        this.weaponOnLoad();
        Bow_1.instance = this;
        this.baseAS = this.attackSpeed;
        this.timer = 0;
        var initCount = 9;
        this.description = "Fires rapid tears at random targets.";
        for (var i = 0; i < initCount; ++i) {
            var arrow = cc.instantiate(this.arrow);
            arrow.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.arrowPool.put(arrow);
        }
    };
    Bow.prototype.start = function () { };
    Bow.prototype.spawnArrow = function (target) {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.shootSound, false, 1);
        var arrow = null;
        if (ProjectilePooling_1.default.instance.arrowPool.size() > 0) {
            arrow = ProjectilePooling_1.default.instance.arrowPool.get();
        }
        else {
            arrow = cc.instantiate(this.arrow);
        }
        arrow.opacity = 0;
        cc.tween(arrow).to(0.05, { opacity: 255 }).start();
        arrow.parent = this.parent;
        arrow
            .getComponent(Projectile_1.default)
            .set(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.hitLimit, target, this.player.position);
    };
    Bow.prototype.shootArrowAtEnemy = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            var target1 = EnemyDetector_1.default.instance.enemyList[0];
            this.spawnArrow(target1);
        }
    };
    Bow.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increare damage by 20%";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Reduce time between attacks by 20%";
                    this.updateStats(20, 0, 0, 0, 0);
                    break;
                case 3:
                    this.description = "Reduce time between attacks by 20%";
                    this.updateStats(0, 0, 20, 0, 0);
                    break;
                case 4:
                    this.description = "Increare damage by 30%";
                    this.updateStats(0, 0, 20, 0, 0);
                    break;
                case 5:
                    this.description = "Reduce time between attacks by 20%";
                    this.updateStats(30, 0, 0, 0, 0);
                    break;
                case 6:
                    this.description = "Increare damage by 30%";
                    this.updateStats(0, 0, 20, 0, 0);
                    break;
                case 7:
                    this.updateStats(30, 0, 0, 0, 0);
                    break;
                default:
                    break;
            }
        }
    };
    Bow.prototype.updateStats = function (damagePercentage, baseDamage, attackSpeedPercentage, weaponScalePercentage, hitLimitBonus) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.hitLimit += hitLimitBonus;
        this.onStatChange();
    };
    Bow.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.shootArrowAtEnemy();
    };
    var Bow_1;
    __decorate([
        property(cc.Prefab)
    ], Bow.prototype, "arrow", void 0);
    __decorate([
        property(cc.Node)
    ], Bow.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], Bow.prototype, "parent", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bow.prototype, "shootSound", void 0);
    Bow = Bow_1 = __decorate([
        ccclass
    ], Bow);
    return Bow;
}(Weapon_1.default));
exports.default = Bow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXEJvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLGtFQUE2RDtBQUM3RCx5REFBb0Q7QUFDcEQsMkNBQXNDO0FBQ3RDLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpQyx1QkFBTTtJQUF2QztRQUFBLHFFQXdIQztRQXJIQyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBNEc1QixDQUFDO1lBeEhvQixHQUFHO0lBYXRCLG9CQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsS0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsc0NBQXNDLENBQUM7UUFDMUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNsQyxJQUFJLEtBQUssR0FBRyxFQUFF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LHFCQUFxQixDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsb0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOztJQXBIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJDQUNTO0lBVGIsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXdIdkI7SUFBRCxVQUFDO0NBeEhELEFBd0hDLENBeEhnQyxnQkFBTSxHQXdIdEM7a0JBeEhvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcbmltcG9ydCBFbmVteURldGVjdG9yIGZyb20gXCIuLi9QbGF5ZXIvRW5lbXlEZXRlY3RvclwiO1xuaW1wb3J0IFByb2plY3RpbGUgZnJvbSBcIi4vUHJvamVjdGlsZVwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi9XZWFwb25cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdyBleHRlbmRzIFdlYXBvbiB7XG4gIHN0YXRpYyBpbnN0YW5jZTogQm93O1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBhcnJvdzogY2MuUHJlZmFiID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBzaG9vdFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICB0aW1lcjogbnVtYmVyO1xuICBoaXRMaW1pdDogbnVtYmVyID0gMTtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMud2VhcG9uT25Mb2FkKCk7XG4gICAgQm93Lmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmJhc2VBUyA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgbGV0IGluaXRDb3VudCA9IDk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiRmlyZXMgcmFwaWQgdGVhcnMgYXQgcmFuZG9tIHRhcmdldHMuXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0Q291bnQ7ICsraSkge1xuICAgICAgbGV0IGFycm93ID0gY2MuaW5zdGFudGlhdGUodGhpcy5hcnJvdyk7XG4gICAgICBhcnJvdy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLmFycm93UG9vbC5wdXQoYXJyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge31cbiAgc3Bhd25BcnJvdyh0YXJnZXQ6IGNjLk5vZGUpIHtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zaG9vdFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgbGV0IGFycm93OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpZiAoUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UuYXJyb3dQb29sLnNpemUoKSA+IDApIHtcbiAgICAgIGFycm93ID0gUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UuYXJyb3dQb29sLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJvdyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXJyb3cpO1xuICAgIH1cbiAgICBhcnJvdy5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2VlbihhcnJvdykudG8oMC4wNSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcbiAgICBhcnJvdy5wYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICBhcnJvd1xuICAgICAgLmdldENvbXBvbmVudChQcm9qZWN0aWxlKVxuICAgICAgLnNldChcbiAgICAgICAgdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlLFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlLFxuICAgICAgICB0aGlzLmhpdExpbWl0LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uXG4gICAgICApO1xuICB9XG4gIHNob290QXJyb3dBdEVuZW15KCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgICB2YXIgdGFyZ2V0MSA9IEVuZW15RGV0ZWN0b3IuaW5zdGFuY2UuZW5lbXlMaXN0WzBdO1xuXG4gICAgICB0aGlzLnNwYXduQXJyb3codGFyZ2V0MSk7XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2tMZXZlbCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMub25MZXZlbE1heCgpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFyZSBkYW1hZ2UgYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmFkZEVxdWlwZWRXZWFwb24odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJSZWR1Y2UgdGltZSBiZXR3ZWVuIGF0dGFja3MgYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygyMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJSZWR1Y2UgdGltZSBiZXR3ZWVuIGF0dGFja3MgYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAyMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFyZSBkYW1hZ2UgYnkgMzAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAyMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJSZWR1Y2UgdGltZSBiZXR3ZWVuIGF0dGFja3MgYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygzMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFyZSBkYW1hZ2UgYnkgMzAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAyMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDMwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlU3RhdHMoXG4gICAgZGFtYWdlUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIGJhc2VEYW1hZ2U6IG51bWJlcixcbiAgICBhdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBoaXRMaW1pdEJvbnVzOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlICs9IGRhbWFnZVBlcmNlbnRhZ2U7XG4gICAgdGhpcy5iYXNlRGFtYWdlICs9IGJhc2VEYW1hZ2U7XG4gICAgdGhpcy5hdHRhY2tTcGVlZFBlcmNlbnRhZ2UgKz0gYXR0YWNrU3BlZWRQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlICs9IHdlYXBvblNjYWxlUGVyY2VudGFnZTtcbiAgICB0aGlzLmhpdExpbWl0ICs9IGhpdExpbWl0Qm9udXM7XG4gICAgdGhpcy5vblN0YXRDaGFuZ2UoKTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICB0aGlzLnNob290QXJyb3dBdEVuZW15KCk7XG4gIH1cbn1cbiJdfQ==