
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/MollyThrower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c49acuxz2lHy6ekcEsihHgg', 'MollyThrower');
// Script/Weapon/MollyThrower.ts

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
var ThrowableProjectile_1 = require("./ThrowableProjectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MollyThrower = /** @class */ (function (_super) {
    __extends(MollyThrower, _super);
    function MollyThrower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.molly = null;
        _this.player = null;
        _this.parent = null;
        _this.throwSound = null;
        _this.currentLevel = _this.level;
        return _this;
    }
    MollyThrower_1 = MollyThrower;
    MollyThrower.prototype.onLoad = function () {
        MollyThrower_1.instance = this;
        this.weaponOnLoad();
        this.durationPercentage = 0;
        this.timer = 0;
        var initCount = 10;
        this.description = "Throw a fire ball";
        for (var i = 0; i < initCount; ++i) {
            var molly = cc.instantiate(this.molly);
            molly.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.mollyPool.put(molly);
        }
    };
    MollyThrower.prototype.throwMolly = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.throwSound, false, 1);
            if (this.level < 3) {
                this.spawnMolly(cc.v3(Utils_1.default.random(this.player.x - 500, this.player.x + 500), Utils_1.default.random(this.player.y - 500, this.player.y + 500)));
                return;
            }
            if (this.level >= 7) {
                for (var i = 0; i < 3; i++) {
                    this.spawnMolly(cc.v3(Utils_1.default.random(this.player.x - 500, this.player.x + 500), Utils_1.default.random(this.player.y - 500, this.player.y + 500)));
                }
                return;
            }
            if (this.level >= 3) {
                for (var i = 0; i < 2; i++) {
                    this.spawnMolly(cc.v3(Utils_1.default.random(this.player.x - 500, this.player.x + 500), Utils_1.default.random(this.player.parent.y - 500, this.player.parent.y + 500)));
                }
                return;
            }
        }
    };
    MollyThrower.prototype.spawnMolly = function (target) {
        var molly = null;
        if (ProjectilePooling_1.default.instance.mollyPool.size() > 0) {
            molly = ProjectilePooling_1.default.instance.mollyPool.get();
        }
        else {
            molly = cc.instantiate(this.molly);
        }
        molly.opacity = 0;
        cc.tween(molly).to(0.05, { opacity: 255 }).start();
        molly.parent = this.parent;
        molly
            .getComponent(ThrowableProjectile_1.default)
            .set(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.durationPercentage, target, this.player.position);
    };
    MollyThrower.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase damage by 30%";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Add one more fire ball";
                    this.updateStats(30, 0, 0, 0, 0);
                    break;
                case 3:
                    this.description = "Reduce time between attacks by 20%";
                    break;
                case 4:
                    this.description = "Increase damage by 30%";
                    this.updateStats(0, 0, 20, 0, 0);
                    break;
                case 5:
                    this.description = "Increase radius by 30%, duration by 20%";
                    this.updateStats(30, 0, 0, 0, 0);
                    break;
                case 6:
                    this.description = "Add one more fire ball, increase radius by 30%";
                    this.updateStats(0, 0, 0, 30, 20);
                    break;
                case 7:
                    this.updateStats(0, 0, 0, 30, 0);
                    break;
                default:
                    break;
            }
        }
    };
    MollyThrower.prototype.updateStats = function (damagePercentage, baseDamage, attackSpeedPercentage, weaponScalePercentage, durationPercentage) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.durationPercentage += durationPercentage;
        this.onStatChange();
    };
    MollyThrower.prototype.start = function () { };
    MollyThrower.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.throwMolly();
    };
    var MollyThrower_1;
    __decorate([
        property(cc.Prefab)
    ], MollyThrower.prototype, "molly", void 0);
    __decorate([
        property(cc.Node)
    ], MollyThrower.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], MollyThrower.prototype, "parent", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MollyThrower.prototype, "throwSound", void 0);
    MollyThrower = MollyThrower_1 = __decorate([
        ccclass
    ], MollyThrower);
    return MollyThrower;
}(Weapon_1.default));
exports.default = MollyThrower;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXE1vbGx5VGhyb3dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBRXhDLGtFQUE2RDtBQUM3RCw2REFBd0Q7QUFDeEQsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBeUpDO1FBdEpDLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBNkk1QixDQUFDO3FCQXpKb0IsWUFBWTtJQWMvQiw2QkFBTSxHQUFOO1FBQ0UsY0FBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxD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QUFJLHFCQUFxQixDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELDRCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsNkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7SUFySkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDUztJQVRiLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F5SmhDO0lBQUQsbUJBQUM7Q0F6SkQsQUF5SkMsQ0F6SnlDLGdCQUFNLEdBeUovQztrQkF6Sm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9JdGVtL0l0ZW1cIjtcbmltcG9ydCBQcm9qZWN0aWxlUG9vbGluZyBmcm9tIFwiLi4vTWFuYWdlci9Qcm9qZWN0aWxlUG9vbGluZ1wiO1xuaW1wb3J0IFRocm93YWJsZVByb2plY3RpbGUgZnJvbSBcIi4vVGhyb3dhYmxlUHJvamVjdGlsZVwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi9XZWFwb25cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbGx5VGhyb3dlciBleHRlbmRzIFdlYXBvbiB7XG4gIHN0YXRpYyBpbnN0YW5jZTogTW9sbHlUaHJvd2VyO1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBtb2xseTogY2MuUHJlZmFiID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICB0aHJvd1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICB0aW1lcjogbnVtYmVyO1xuICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcblxuICBvbkxvYWQoKSB7XG4gICAgTW9sbHlUaHJvd2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLndlYXBvbk9uTG9hZCgpO1xuICAgIHRoaXMuZHVyYXRpb25QZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICBsZXQgaW5pdENvdW50ID0gMTA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiVGhyb3cgYSBmaXJlIGJhbGxcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRDb3VudDsgKytpKSB7XG4gICAgICBsZXQgbW9sbHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1vbGx5KTtcbiAgICAgIG1vbGx5LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UubW9sbHlQb29sLnB1dChtb2xseSk7XG4gICAgfVxuICB9XG4gIHRocm93TW9sbHkoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhyb3dTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPCAzKSB7XG4gICAgICAgIHRoaXMuc3Bhd25Nb2xseShcbiAgICAgICAgICBjYy52MyhcbiAgICAgICAgICAgIFV0aWxzLnJhbmRvbSh0aGlzLnBsYXllci54IC0gNTAwLCB0aGlzLnBsYXllci54ICsgNTAwKSxcbiAgICAgICAgICAgIFV0aWxzLnJhbmRvbSh0aGlzLnBsYXllci55IC0gNTAwLCB0aGlzLnBsYXllci55ICsgNTAwKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gNykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgIHRoaXMuc3Bhd25Nb2xseShcbiAgICAgICAgICAgIGNjLnYzKFxuICAgICAgICAgICAgICBVdGlscy5yYW5kb20odGhpcy5wbGF5ZXIueCAtIDUwMCwgdGhpcy5wbGF5ZXIueCArIDUwMCksXG4gICAgICAgICAgICAgIFV0aWxzLnJhbmRvbSh0aGlzLnBsYXllci55IC0gNTAwLCB0aGlzLnBsYXllci55ICsgNTAwKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gMykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgIHRoaXMuc3Bhd25Nb2xseShcbiAgICAgICAgICAgIGNjLnYzKFxuICAgICAgICAgICAgICBVdGlscy5yYW5kb20odGhpcy5wbGF5ZXIueCAtIDUwMCwgdGhpcy5wbGF5ZXIueCArIDUwMCksXG4gICAgICAgICAgICAgIFV0aWxzLnJhbmRvbShcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXJlbnQueSAtIDUwMCxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXJlbnQueSArIDUwMFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNwYXduTW9sbHkodGFyZ2V0OiBjYy5WZWMzKSB7XG4gICAgbGV0IG1vbGx5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpZiAoUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UubW9sbHlQb29sLnNpemUoKSA+IDApIHtcbiAgICAgIG1vbGx5ID0gUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UubW9sbHlQb29sLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2xseSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubW9sbHkpO1xuICAgIH1cblxuICAgIG1vbGx5Lm9wYWNpdHkgPSAwO1xuICAgIGNjLnR3ZWVuKG1vbGx5KS50bygwLjA1LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xuICAgIG1vbGx5LnBhcmVudCA9IHRoaXMucGFyZW50O1xuXG4gICAgbW9sbHlcbiAgICAgIC5nZXRDb21wb25lbnQoVGhyb3dhYmxlUHJvamVjdGlsZSlcbiAgICAgIC5zZXQoXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb25cbiAgICAgICk7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSAzMCVcIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZFdlYXBvbih0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkFkZCBvbmUgbW9yZSBmaXJlIGJhbGxcIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDMwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlJlZHVjZSB0aW1lIGJldHdlZW4gYXR0YWNrcyBieSAyMCVcIjtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDMwJVwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMCwgMCwgMjAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgcmFkaXVzIGJ5IDMwJSwgZHVyYXRpb24gYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygzMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJBZGQgb25lIG1vcmUgZmlyZSBiYWxsLCBpbmNyZWFzZSByYWRpdXMgYnkgMzAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAwLCAzMCwgMjApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAwLCAzMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZVN0YXRzKFxuICAgIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBiYXNlRGFtYWdlOiBudW1iZXIsXG4gICAgYXR0YWNrU3BlZWRQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgd2VhcG9uU2NhbGVQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgZHVyYXRpb25QZXJjZW50YWdlOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlICs9IGRhbWFnZVBlcmNlbnRhZ2U7XG4gICAgdGhpcy5iYXNlRGFtYWdlICs9IGJhc2VEYW1hZ2U7XG4gICAgdGhpcy5hdHRhY2tTcGVlZFBlcmNlbnRhZ2UgKz0gYXR0YWNrU3BlZWRQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlICs9IHdlYXBvblNjYWxlUGVyY2VudGFnZTtcbiAgICB0aGlzLmR1cmF0aW9uUGVyY2VudGFnZSArPSBkdXJhdGlvblBlcmNlbnRhZ2U7XG4gICAgdGhpcy5vblN0YXRDaGFuZ2UoKTtcbiAgfVxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIHRoaXMudGhyb3dNb2xseSgpO1xuICB9XG59XG4iXX0=