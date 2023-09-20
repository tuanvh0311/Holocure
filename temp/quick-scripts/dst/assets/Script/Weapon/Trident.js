
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Trident.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0a27u68OxAsa5L6qIjpdoh', 'Trident');
// Script/Weapon/Trident.ts

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
var Movement_1 = require("../Controller/Movement");
var Utils_1 = require("../Controller/Utils");
var Melee_1 = require("./Melee");
var StartWeapon_1 = require("./StartWeapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Trident = /** @class */ (function (_super) {
    __extends(Trident, _super);
    function Trident() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftThrust = null;
        _this.rightThrust = null;
        _this.midThrust = null;
        _this.thrustSound = null;
        _this.statsRight = null;
        _this.statsLeft = null;
        _this.statsMiddle = null;
        _this.currentLevel = _this.level;
        return _this;
    }
    Trident.prototype.onLoad = function () {
        this.weaponOnLoad();
        this.statsRight = this.node.getChildByName("Right").getComponent(Melee_1.default);
        this.statsLeft = this.node.getChildByName("Left").getComponent(Melee_1.default);
        this.statsMiddle = this.node.getChildByName("Middle").getComponent(Melee_1.default);
        this.timer = this.attackSpeed;
        this.description = "Mid ranged stab attack in front.";
        this.unactiveLeftThrust();
        this.unactiveRightThrust();
        this.unactiveMiddleThrust();
    };
    Trident.prototype.updateSwordStats = function (bonusBaseDamage, damage, attackSpeed, weaponScale) {
        this.baseDamage += bonusBaseDamage;
        this.attackSpeedPercentage += attackSpeed;
        this.damagePercentage += damage;
        this.weaponScalePercentage += weaponScale;
        this.onStatChange();
    };
    Trident.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase damage by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Stab 1 extra time, forming a V shape.";
                    this.updateSwordStats(0, 20, 0, 0);
                    break;
                case 3:
                    this.description = "Reduce time between attacks by 15%";
                    break;
                case 4:
                    this.description = "Increase damage by 40%";
                    this.updateSwordStats(0, 0, 15, 0);
                    break;
                case 5:
                    this.description = "Increase attack area by 25%.";
                    this.updateSwordStats(0, 40, 0, 0);
                    break;
                case 6:
                    this.description = "Thrust 3 times, in a fork-like shape.";
                    this.updateSwordStats(0, 0, 0, 25);
                    break;
                case 7:
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    Trident.prototype.unactiveLeftThrust = function () {
        this.scheduleOnce(function () {
            this.leftThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.unactiveRightThrust = function () {
        this.scheduleOnce(function () {
            this.rightThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.unactiveMiddleThrust = function () {
        this.scheduleOnce(function () {
            this.midThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.perfromAttack = function () {
        if (this.timer < 0)
            this.node.angle =
                Math.atan2(Movement_1.default.instance.directionVector.y, Movement_1.default.instance.directionVector.x) *
                    (180 / Math.PI);
        if (this.level < 3) {
            this.attackMiddle();
        }
        if (this.level >= 7) {
            this.attackAllSide();
        }
        if (this.level >= 3) {
            this.attackV();
        }
    };
    Trident.prototype.attackRight = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightThrust.active = true;
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveRightThrust();
        }
    };
    Trident.prototype.attackMiddle = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.midThrust.active = true;
            this.statsMiddle.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.midThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveMiddleThrust();
        }
    };
    Trident.prototype.attackLeft = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.leftThrust.active = true;
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveLeftThrust();
        }
    };
    Trident.prototype.attackAllSide = function () {
        if (this.timer < 0) {
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsMiddle.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.timer = this.attackSpeed;
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.midThrust.active = true;
            this.midThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveLeftThrust();
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.rightThrust.active = true;
                this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveRightThrust();
            }, 0.15);
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.leftThrust.scaleX = this.statsRight.weaponScaleX;
                this.leftThrust.active = true;
                this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveLeftThrust();
            }, 0.3);
        }
    };
    Trident.prototype.attackV = function () {
        if (this.timer < 0) {
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightThrust.active = true;
            this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveRightThrust();
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.leftThrust.scaleX = this.statsRight.weaponScaleX;
                this.leftThrust.active = true;
                this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveLeftThrust();
            }, 0.15);
        }
    };
    Trident.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.perfromAttack();
    };
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "leftThrust", void 0);
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "rightThrust", void 0);
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "midThrust", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Trident.prototype, "thrustSound", void 0);
    Trident = __decorate([
        ccclass
    ], Trident);
    return Trident;
}(StartWeapon_1.default));
exports.default = Trident;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFRyaWRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELG1EQUE4QztBQUM5Qyw2Q0FBd0M7QUFDeEMsaUNBQTRCO0FBQzVCLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBVztJQUFoRDtRQUFBLHFFQXNPQztRQXBPQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxnQkFBVSxHQUFVLElBQUksQ0FBQztRQUN6QixlQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVUsSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQzs7SUF5TjVCLENBQUM7SUF2TkMsd0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFD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LENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFuT0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDVTtJQVJkLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FzTzNCO0lBQUQsY0FBQztDQXRPRCxBQXNPQyxDQXRPb0MscUJBQVcsR0FzTy9DO2tCQXRPb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBNb3ZlbWVudCBmcm9tIFwiLi4vQ29udHJvbGxlci9Nb3ZlbWVudFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgTWVsZWUgZnJvbSBcIi4vTWVsZWVcIjtcbmltcG9ydCBTdGFydFdlYXBvbiBmcm9tIFwiLi9TdGFydFdlYXBvblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpZGVudCBleHRlbmRzIFN0YXJ0V2VhcG9uIHtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxlZnRUaHJ1c3Q6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcmlnaHRUaHJ1c3Q6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbWlkVGhydXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgdGhydXN0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXI7XG4gIHN0YXRzUmlnaHQ6IE1lbGVlID0gbnVsbDtcbiAgc3RhdHNMZWZ0OiBNZWxlZSA9IG51bGw7XG4gIHN0YXRzTWlkZGxlOiBNZWxlZSA9IG51bGw7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMud2VhcG9uT25Mb2FkKCk7XG4gICAgdGhpcy5zdGF0c1JpZ2h0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUmlnaHRcIikuZ2V0Q29tcG9uZW50KE1lbGVlKTtcbiAgICB0aGlzLnN0YXRzTGVmdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxlZnRcIikuZ2V0Q29tcG9uZW50KE1lbGVlKTtcbiAgICB0aGlzLnN0YXRzTWlkZGxlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTWlkZGxlXCIpLmdldENvbXBvbmVudChNZWxlZSk7XG4gICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiTWlkIHJhbmdlZCBzdGFiIGF0dGFjayBpbiBmcm9udC5cIjtcbiAgICB0aGlzLnVuYWN0aXZlTGVmdFRocnVzdCgpO1xuICAgIHRoaXMudW5hY3RpdmVSaWdodFRocnVzdCgpO1xuICAgIHRoaXMudW5hY3RpdmVNaWRkbGVUaHJ1c3QoKTtcbiAgfVxuICB1cGRhdGVTd29yZFN0YXRzKFxuICAgIGJvbnVzQmFzZURhbWFnZTogbnVtYmVyLFxuICAgIGRhbWFnZTogbnVtYmVyLFxuICAgIGF0dGFja1NwZWVkOiBudW1iZXIsXG4gICAgd2VhcG9uU2NhbGU6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmJhc2VEYW1hZ2UgKz0gYm9udXNCYXNlRGFtYWdlO1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlICs9IGF0dGFja1NwZWVkO1xuICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSArPSBkYW1hZ2U7XG4gICAgdGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgKz0gd2VhcG9uU2NhbGU7XG4gICAgdGhpcy5vblN0YXRDaGFuZ2UoKTtcbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDIwJS5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZFdlYXBvbih0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlN0YWIgMSBleHRyYSB0aW1lLCBmb3JtaW5nIGEgViBzaGFwZS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3b3JkU3RhdHMoMCwgMjAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVkdWNlIHRpbWUgYmV0d2VlbiBhdHRhY2tzIGJ5IDE1JVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDQwJVwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3dvcmRTdGF0cygwLCAwLCAxNSwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBhdHRhY2sgYXJlYSBieSAyNSUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTd29yZFN0YXRzKDAsIDQwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlRocnVzdCAzIHRpbWVzLCBpbiBhIGZvcmstbGlrZSBzaGFwZS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3b3JkU3RhdHMoMCwgMCwgMCwgMjUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHVuYWN0aXZlTGVmdFRocnVzdCgpIHtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmxlZnRUaHJ1c3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC4zKTtcbiAgfVxuICB1bmFjdGl2ZVJpZ2h0VGhydXN0KCkge1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmlnaHRUaHJ1c3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC4zKTtcbiAgfVxuICB1bmFjdGl2ZU1pZGRsZVRocnVzdCgpIHtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm1pZFRocnVzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LCAwLjMpO1xuICB9XG4gIHBlcmZyb21BdHRhY2soKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKVxuICAgICAgdGhpcy5ub2RlLmFuZ2xlID1cbiAgICAgICAgTWF0aC5hdGFuMihcbiAgICAgICAgICBNb3ZlbWVudC5pbnN0YW5jZS5kaXJlY3Rpb25WZWN0b3IueSxcbiAgICAgICAgICBNb3ZlbWVudC5pbnN0YW5jZS5kaXJlY3Rpb25WZWN0b3IueFxuICAgICAgICApICpcbiAgICAgICAgKDE4MCAvIE1hdGguUEkpO1xuICAgIGlmICh0aGlzLmxldmVsIDwgMykge1xuICAgICAgdGhpcy5hdHRhY2tNaWRkbGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gNykge1xuICAgICAgdGhpcy5hdHRhY2tBbGxTaWRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxldmVsID49IDMpIHtcbiAgICAgIHRoaXMuYXR0YWNrVigpO1xuICAgIH1cbiAgfVxuICBhdHRhY2tSaWdodCgpIHtcbiAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5yaWdodFRocnVzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0c1JpZ2h0LnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5yaWdodFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZVJpZ2h0VGhydXN0KCk7XG4gICAgfVxuICB9XG4gIGF0dGFja01pZGRsZSgpIHtcbiAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5taWRUaHJ1c3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdHNNaWRkbGUuc2V0KFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLm1pZFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZU1pZGRsZVRocnVzdCgpO1xuICAgIH1cbiAgfVxuICBhdHRhY2tMZWZ0KCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy50aHJ1c3RTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgICB0aGlzLmxlZnRUaHJ1c3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdHNMZWZ0LnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5sZWZ0VGhydXN0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJUaHJ1c3RBbmltYXRpb25cIik7XG4gICAgICB0aGlzLnVuYWN0aXZlTGVmdFRocnVzdCgpO1xuICAgIH1cbiAgfVxuICBhdHRhY2tBbGxTaWRlKCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy5zdGF0c1JpZ2h0LnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0c0xlZnQuc2V0KFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXRzTWlkZGxlLnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuXG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMubWlkVGhydXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLm1pZFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZUxlZnRUaHJ1c3QoKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnRocnVzdFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMucmlnaHRUaHJ1c3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yaWdodFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgICB0aGlzLnVuYWN0aXZlUmlnaHRUaHJ1c3QoKTtcbiAgICAgIH0sIDAuMTUpO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgICAgdGhpcy5sZWZ0VGhydXN0LnNjYWxlWCA9IHRoaXMuc3RhdHNSaWdodC53ZWFwb25TY2FsZVg7XG4gICAgICAgIHRoaXMubGVmdFRocnVzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnRUaHJ1c3QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlRocnVzdEFuaW1hdGlvblwiKTtcbiAgICAgICAgdGhpcy51bmFjdGl2ZUxlZnRUaHJ1c3QoKTtcbiAgICAgIH0sIDAuMyk7XG4gICAgfVxuICB9XG4gIGF0dGFja1YoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLnN0YXRzUmlnaHQuc2V0KFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXRzTGVmdC5zZXQoXG4gICAgICAgIHRoaXMuYmFzZURhbWFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlLFxuICAgICAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZVxuICAgICAgKTtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5yaWdodFRocnVzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5yaWdodFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZVJpZ2h0VGhydXN0KCk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy50aHJ1c3RTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmxlZnRUaHJ1c3Quc2NhbGVYID0gdGhpcy5zdGF0c1JpZ2h0LndlYXBvblNjYWxlWDtcbiAgICAgICAgdGhpcy5sZWZ0VGhydXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGVmdFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgICB0aGlzLnVuYWN0aXZlTGVmdFRocnVzdCgpO1xuICAgICAgfSwgMC4xNSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICB0aGlzLnBlcmZyb21BdHRhY2soKTtcbiAgfVxufVxuIl19