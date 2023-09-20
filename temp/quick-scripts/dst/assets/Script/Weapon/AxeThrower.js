
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/AxeThrower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e79aVG3qNNep+5RXQzL/d+', 'AxeThrower');
// Script/Weapon/AxeThrower.ts

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
var SpiralProjectile_1 = require("./SpiralProjectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AxeThrower = /** @class */ (function (_super) {
    __extends(AxeThrower, _super);
    function AxeThrower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.axe = null;
        _this.player = null;
        _this.parent = null;
        _this.throwSound = null;
        _this.hitLimit = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    AxeThrower_1 = AxeThrower;
    AxeThrower.prototype.onLoad = function () {
        AxeThrower_1.instance = this;
        this.weaponOnLoad();
        this.durationPercentage = 0;
        this.timer = 0;
        var initCount = 10;
        this.description = "Throw an axe that spirals outward from the player.";
        for (var i = 0; i < initCount; ++i) {
            var axe = cc.instantiate(this.axe);
            axe.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.axePool.put(axe);
        }
    };
    AxeThrower.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "Increase size of axe by 20%. Increase damage of axe by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Reduce delay between attacks by 20%.";
                    this.updateStats(20, 0, 0, 0, 20, 0);
                    break;
                case 3:
                    this.description = "Increase damage by 33%";
                    this.updateStats(0, 0, 0, 20, 0, 0);
                    break;
                case 4:
                    this.description = "Remove hit limit, and lasts 1 second longer.";
                    this.updateStats(33, 0, 0, 0, 0, 0);
                    break;
                case 5:
                    this.description = "Increase attack size by 30%.";
                    this.updateStats(0, 0, 99999999, 0, 0, 33.3);
                    break;
                case 6:
                    this.description = "Increase damage by 50%.";
                    this.updateStats(0, 0, 0, 0, 30, 0);
                    break;
                case 7:
                    this.updateStats(50, 0, 0, 0, 0, 0);
                    break;
                default:
                    break;
            }
        }
    };
    AxeThrower.prototype.spawnAxe = function () {
        var axe = null;
        if (ProjectilePooling_1.default.instance.axePool.size() > 0) {
            axe = ProjectilePooling_1.default.instance.axePool.get();
        }
        else {
            axe = cc.instantiate(this.axe);
        }
        axe.opacity = 0;
        cc.tween(axe).to(0.05, { opacity: 255 }).start();
        axe.parent = this.parent;
        axe
            .getComponent(SpiralProjectile_1.default)
            .setStats(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.hitLimit, this.durationPercentage, this.player);
    };
    AxeThrower.prototype.updateStats = function (damagePercentage, baseDamage, hitLimit, attackSpeedPercentage, weaponScalePercentage, durationPercentage) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.hitLimit += hitLimit;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.durationPercentage += durationPercentage;
        this.onStatChange();
    };
    AxeThrower.prototype.throwAxe = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.throwSound, false, 1);
            this.timer = this.attackSpeed;
            this.spawnAxe();
        }
    };
    AxeThrower.prototype.start = function () { };
    AxeThrower.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.throwAxe();
    };
    var AxeThrower_1;
    __decorate([
        property(cc.Prefab)
    ], AxeThrower.prototype, "axe", void 0);
    __decorate([
        property(cc.Node)
    ], AxeThrower.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], AxeThrower.prototype, "parent", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AxeThrower.prototype, "throwSound", void 0);
    AxeThrower = AxeThrower_1 = __decorate([
        ccclass
    ], AxeThrower);
    return AxeThrower;
}(Weapon_1.default));
exports.default = AxeThrower;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXEF4ZVRocm93ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUV4QyxrRUFBNkQ7QUFDN0QsdURBQWtEO0FBQ2xELG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBTTtJQUE5QztRQUFBLHFFQTZIQztRQTFIQyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBZ0g1QixDQUFDO21CQTdIb0IsVUFBVTtJQWU3QiwyQkFBTSxHQUFOO1FBQ0UsWUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxvREFBb0QsQ0FBQztRQUN4RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENB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QUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELDBCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7SUF6SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDUztJQVRiLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2SDlCO0lBQUQsaUJBQUM7Q0E3SEQsQUE2SEMsQ0E3SHVDLGdCQUFNLEdBNkg3QztrQkE3SG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9JdGVtL0l0ZW1cIjtcbmltcG9ydCBQcm9qZWN0aWxlUG9vbGluZyBmcm9tIFwiLi4vTWFuYWdlci9Qcm9qZWN0aWxlUG9vbGluZ1wiO1xuaW1wb3J0IFNwaXJhbFByb2plY3RpbGUgZnJvbSBcIi4vU3BpcmFsUHJvamVjdGlsZVwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi9XZWFwb25cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4ZVRocm93ZXIgZXh0ZW5kcyBXZWFwb24ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEF4ZVRocm93ZXI7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGF4ZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICB0aHJvd1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICB0aW1lcjogbnVtYmVyO1xuICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgaGl0TGltaXQ6IG51bWJlciA9IDEwO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuXG4gIG9uTG9hZCgpIHtcbiAgICBBeGVUaHJvd2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLndlYXBvbk9uTG9hZCgpO1xuICAgIHRoaXMuZHVyYXRpb25QZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICBsZXQgaW5pdENvdW50ID0gMTA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiVGhyb3cgYW4gYXhlIHRoYXQgc3BpcmFscyBvdXR3YXJkIGZyb20gdGhlIHBsYXllci5cIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRDb3VudDsgKytpKSB7XG4gICAgICBsZXQgYXhlID0gY2MuaW5zdGFudGlhdGUodGhpcy5heGUpO1xuICAgICAgYXhlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UuYXhlUG9vbC5wdXQoYXhlKTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZSBzaXplIG9mIGF4ZSBieSAyMCUuIEluY3JlYXNlIGRhbWFnZSBvZiBheGUgYnkgMjAlLlwiO1xuICAgICAgICAgIHRoaXMuaXNFcXVpcGVkID0gdHJ1ZTtcbiAgICAgICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5hZGRFcXVpcGVkV2VhcG9uKHRoaXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVkdWNlIGRlbGF5IGJldHdlZW4gYXR0YWNrcyBieSAyMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygyMCwgMCwgMCwgMCwgMjAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDMzJVwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMCwgMCwgMCwgMjAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVtb3ZlIGhpdCBsaW1pdCwgYW5kIGxhc3RzIDEgc2Vjb25kIGxvbmdlci5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDMzLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGF0dGFjayBzaXplIGJ5IDMwJS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDAsIDAsIDk5OTk5OTk5LCAwLCAwLCAzMy4zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSA1MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAwLCAwLCAzMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3Bhd25BeGUoKSB7XG4gICAgbGV0IGF4ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgaWYgKFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLmF4ZVBvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgYXhlID0gUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UuYXhlUG9vbC5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXhlID0gY2MuaW5zdGFudGlhdGUodGhpcy5heGUpO1xuICAgIH1cblxuICAgIGF4ZS5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2VlbihheGUpLnRvKDAuMDUsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgYXhlLnBhcmVudCA9IHRoaXMucGFyZW50O1xuXG4gICAgYXhlXG4gICAgICAuZ2V0Q29tcG9uZW50KFNwaXJhbFByb2plY3RpbGUpXG4gICAgICAuc2V0U3RhdHMoXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5oaXRMaW1pdCxcbiAgICAgICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucGxheWVyXG4gICAgICApO1xuICB9XG4gIHVwZGF0ZVN0YXRzKFxuICAgIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBiYXNlRGFtYWdlOiBudW1iZXIsXG4gICAgaGl0TGltaXQ6IG51bWJlcixcbiAgICBhdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgKz0gZGFtYWdlUGVyY2VudGFnZTtcbiAgICB0aGlzLmJhc2VEYW1hZ2UgKz0gYmFzZURhbWFnZTtcbiAgICB0aGlzLmhpdExpbWl0ICs9IGhpdExpbWl0O1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlICs9IGF0dGFja1NwZWVkUGVyY2VudGFnZTtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSArPSB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U7XG4gICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UgKz0gZHVyYXRpb25QZXJjZW50YWdlO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gIH1cbiAgdGhyb3dBeGUoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnRocm93U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5zcGF3bkF4ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLm9uTGV2ZWxVcCgpO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmlzRXF1aXBlZCkgcmV0dXJuO1xuICAgIHRoaXMudGltZXIgLT0gZHQ7XG4gICAgdGhpcy50aHJvd0F4ZSgpO1xuICB9XG59XG4iXX0=