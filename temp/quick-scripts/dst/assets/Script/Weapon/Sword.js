
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Sword.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1345bSW42tDqoSdTpptD0bR', 'Sword');
// Script/Weapon/Sword.ts

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
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftWhip = null;
        _this.rightWhip = null;
        _this.slashSound = null;
        _this.stats = null;
        _this.statsLeft = null;
        _this.currentLevel = _this.level;
        return _this;
    }
    Sword_1 = Sword;
    // LIFE-CYCLE CALLBACKS:
    Sword.prototype.onLoad = function () {
        this.weaponOnLoad();
        Sword_1.instance = this;
        this.stats = this.node.getChildByName("Right").getComponent(Melee_1.default);
        this.statsLeft = this.node.getChildByName("Left").getComponent(Melee_1.default);
        this.timer = this.attackSpeed;
        this.description = "Swings in a half circle arc in front.";
        this.unactiveLeftWhip();
        this.unactiveRightWhip();
    };
    Sword.prototype.onLevelUp = function () {
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
                    this.description = "Add one more attack to the back.";
                    this.updateSwordStats(0, 20, 0, 0);
                    break;
                case 3:
                    this.description = "Increase damage by 30%.";
                    break;
                case 4:
                    this.description = "Reduce the time between attacks by 30%.";
                    this.updateSwordStats(0, 30, 0, 0);
                    break;
                case 5:
                    this.description = "Increase attack area by 30%.";
                    this.updateSwordStats(0, 0, 30, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 40%.";
                    this.updateSwordStats(0, 0, 0, 30);
                    break;
                case 7:
                    this.updateSwordStats(0, 40, 0, 0);
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    Sword.prototype.updateSwordStats = function (bonusBaseDamage, damage, attackSpeed, weaponScale) {
        this.baseDamage += bonusBaseDamage;
        this.attackSpeedPercentage += attackSpeed;
        this.damagePercentage += damage;
        this.weaponScalePercentage += weaponScale;
        this.onStatChange();
    };
    Sword.prototype.start = function () { };
    Sword.prototype.attackRight = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.slashSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightWhip.active = true;
            this.stats.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
            this.unactiveRightWhip();
        }
    };
    Sword.prototype.attackLeft = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.slashSound, false, 1);
            this.leftWhip.active = true;
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
            this.unactiveLeftWhip();
        }
    };
    Sword.prototype.attackBothSide = function () {
        var _this = this;
        if (this.timer < 0) {
            this.stats.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            if (!Movement_1.default.instance.isFlip) {
                this.timer = this.attackSpeed;
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.slashSound, false, 1);
                this.rightWhip.scaleY = this.stats.weaponScaleY * 1;
                this.rightWhip.active = true;
                this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
                this.unactiveRightWhip();
                setTimeout(function () {
                    if (Utils_1.default.getLocal("Sound") == "true")
                        cc.audioEngine.play(_this.slashSound, false, 1);
                    _this.leftWhip.scaleY = _this.stats.weaponScaleY * -1;
                    _this.leftWhip.active = true;
                    _this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
                    _this.unactiveLeftWhip();
                }, 250);
            }
            else {
                this.timer = this.attackSpeed;
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.slashSound, false, 1);
                this.leftWhip.scaleY = this.stats.weaponScaleY * -1;
                this.leftWhip.active = true;
                this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
                this.unactiveLeftWhip();
                setTimeout(function () {
                    if (Utils_1.default.getLocal("Sound") == "true")
                        cc.audioEngine.play(_this.slashSound, false, 1);
                    _this.rightWhip.scaleY = _this.stats.weaponScaleY * 1;
                    _this.rightWhip.active = true;
                    _this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
                    _this.unactiveRightWhip();
                }, 250);
            }
        }
    };
    Sword.prototype.unactiveLeftWhip = function () {
        this.scheduleOnce(function () {
            this.leftWhip.active = false;
        }, 0.3);
    };
    Sword.prototype.unactiveRightWhip = function () {
        this.scheduleOnce(function () {
            this.rightWhip.active = false;
        }, 0.3);
    };
    Sword.prototype.perfromAttack = function () {
        if (this.timer < 0) {
            this.node.angle =
                Math.atan2(Movement_1.default.instance.directionVector.y, Movement_1.default.instance.directionVector.x) *
                    (180 / Math.PI);
            if (Movement_1.default.instance.isFlip) {
                this.node.scaleX = -1;
            }
            else
                this.node.scaleX = 1;
        }
        if (this.level < 3) {
            if (!Movement_1.default.instance.isFlip) {
                this.attackRight();
            }
            else {
                this.attackLeft();
            }
        }
        if (this.level >= 3) {
            this.attackBothSide();
        }
    };
    Sword.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.perfromAttack();
    };
    var Sword_1;
    __decorate([
        property(cc.Node)
    ], Sword.prototype, "leftWhip", void 0);
    __decorate([
        property(cc.Node)
    ], Sword.prototype, "rightWhip", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Sword.prototype, "slashSound", void 0);
    Sword = Sword_1 = __decorate([
        ccclass
    ], Sword);
    return Sword;
}(StartWeapon_1.default));
exports.default = Sword;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFN3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCxtREFBOEM7QUFDOUMsNkNBQXdDO0FBQ3hDLGlDQUE0QjtBQUM1Qiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVc7SUFBOUM7UUFBQSxxRUF3TUM7UUFyTUMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGVBQVMsR0FBVSxJQUFJLENBQUM7UUFDeEIsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQTZMNUIsQ0FBQztjQXhNb0IsS0FBSztJQVl4Qix3QkFBd0I7SUFFeEIsc0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDOUIs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QVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O0lBcE1EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNTO0lBUGIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXdNekI7SUFBRCxZQUFDO0NBeE1ELEFBd01DLENBeE1rQyxxQkFBVyxHQXdNN0M7a0JBeE1vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IE1vdmVtZW50IGZyb20gXCIuLi9Db250cm9sbGVyL01vdmVtZW50XCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBNZWxlZSBmcm9tIFwiLi9NZWxlZVwiO1xuaW1wb3J0IFN0YXJ0V2VhcG9uIGZyb20gXCIuL1N0YXJ0V2VhcG9uXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd29yZCBleHRlbmRzIFN0YXJ0V2VhcG9uIHtcbiAgc3RhdGljIGluc3RhbmNlOiBTd29yZDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxlZnRXaGlwOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHJpZ2h0V2hpcDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHNsYXNoU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXI7XG4gIHN0YXRzOiBNZWxlZSA9IG51bGw7XG4gIHN0YXRzTGVmdDogTWVsZWUgPSBudWxsO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy53ZWFwb25PbkxvYWQoKTtcbiAgICBTd29yZC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5zdGF0cyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0XCIpLmdldENvbXBvbmVudChNZWxlZSk7XG4gICAgdGhpcy5zdGF0c0xlZnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMZWZ0XCIpLmdldENvbXBvbmVudChNZWxlZSk7XG4gICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiU3dpbmdzIGluIGEgaGFsZiBjaXJjbGUgYXJjIGluIGZyb250LlwiO1xuICAgIHRoaXMudW5hY3RpdmVMZWZ0V2hpcCgpO1xuICAgIHRoaXMudW5hY3RpdmVSaWdodFdoaXAoKTtcbiAgfVxuXG4gIG9uTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2tMZXZlbCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMub25MZXZlbE1heCgpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBkYW1hZ2UgYnkgMjAlLlwiO1xuICAgICAgICAgIHRoaXMuaXNFcXVpcGVkID0gdHJ1ZTtcbiAgICAgICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5hZGRFcXVpcGVkV2VhcG9uKHRoaXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiQWRkIG9uZSBtb3JlIGF0dGFjayB0byB0aGUgYmFjay5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3b3JkU3RhdHMoMCwgMjAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDMwJS5cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlJlZHVjZSB0aGUgdGltZSBiZXR3ZWVuIGF0dGFja3MgYnkgMzAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3dvcmRTdGF0cygwLCAzMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBhdHRhY2sgYXJlYSBieSAzMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTd29yZFN0YXRzKDAsIDAsIDMwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSA0MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTd29yZFN0YXRzKDAsIDAsIDAsIDMwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIHRoaXMudXBkYXRlU3dvcmRTdGF0cygwLCA0MCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdXBkYXRlU3dvcmRTdGF0cyhcbiAgICBib251c0Jhc2VEYW1hZ2U6IG51bWJlcixcbiAgICBkYW1hZ2U6IG51bWJlcixcbiAgICBhdHRhY2tTcGVlZDogbnVtYmVyLFxuICAgIHdlYXBvblNjYWxlOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5iYXNlRGFtYWdlICs9IGJvbnVzQmFzZURhbWFnZTtcbiAgICB0aGlzLmF0dGFja1NwZWVkUGVyY2VudGFnZSArPSBhdHRhY2tTcGVlZDtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgKz0gZGFtYWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlICs9IHdlYXBvblNjYWxlO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gIH1cbiAgc3RhcnQoKSB7fVxuXG4gIGF0dGFja1JpZ2h0KCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zbGFzaFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICAgIHRoaXMucmlnaHRXaGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRzLnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5yaWdodFdoaXAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlNsYXNoQW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZVJpZ2h0V2hpcCgpO1xuICAgIH1cbiAgfVxuICBhdHRhY2tMZWZ0KCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNsYXNoU291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMubGVmdFdoaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdHNMZWZ0LnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5sZWZ0V2hpcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2xhc2hBbmltYXRpb25cIik7XG4gICAgICB0aGlzLnVuYWN0aXZlTGVmdFdoaXAoKTtcbiAgICB9XG4gIH1cbiAgYXR0YWNrQm90aFNpZGUoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLnN0YXRzLnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0c0xlZnQuc2V0KFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2VcbiAgICAgICk7XG4gICAgICBpZiAoIU1vdmVtZW50Lmluc3RhbmNlLmlzRmxpcCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNsYXNoU291bmQsIGZhbHNlLCAxKTtcbiAgICAgICAgdGhpcy5yaWdodFdoaXAuc2NhbGVZID0gdGhpcy5zdGF0cy53ZWFwb25TY2FsZVkgKiAxO1xuICAgICAgICB0aGlzLnJpZ2h0V2hpcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJpZ2h0V2hpcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2xhc2hBbmltYXRpb25cIik7XG5cbiAgICAgICAgdGhpcy51bmFjdGl2ZVJpZ2h0V2hpcCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zbGFzaFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICAgICAgdGhpcy5sZWZ0V2hpcC5zY2FsZVkgPSB0aGlzLnN0YXRzLndlYXBvblNjYWxlWSAqIC0xO1xuICAgICAgICAgIHRoaXMubGVmdFdoaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxlZnRXaGlwLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTbGFzaEFuaW1hdGlvblwiKTtcbiAgICAgICAgICB0aGlzLnVuYWN0aXZlTGVmdFdoaXAoKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc2xhc2hTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmxlZnRXaGlwLnNjYWxlWSA9IHRoaXMuc3RhdHMud2VhcG9uU2NhbGVZICogLTE7XG4gICAgICAgIHRoaXMubGVmdFdoaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWZ0V2hpcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2xhc2hBbmltYXRpb25cIik7XG4gICAgICAgIHRoaXMudW5hY3RpdmVMZWZ0V2hpcCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zbGFzaFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICAgICAgdGhpcy5yaWdodFdoaXAuc2NhbGVZID0gdGhpcy5zdGF0cy53ZWFwb25TY2FsZVkgKiAxO1xuICAgICAgICAgIHRoaXMucmlnaHRXaGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5yaWdodFdoaXAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlNsYXNoQW5pbWF0aW9uXCIpO1xuICAgICAgICAgIHRoaXMudW5hY3RpdmVSaWdodFdoaXAoKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bmFjdGl2ZUxlZnRXaGlwKCkge1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubGVmdFdoaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC4zKTtcbiAgfVxuICB1bmFjdGl2ZVJpZ2h0V2hpcCgpIHtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJpZ2h0V2hpcC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LCAwLjMpO1xuICB9XG4gIHBlcmZyb21BdHRhY2soKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLm5vZGUuYW5nbGUgPVxuICAgICAgICBNYXRoLmF0YW4yKFxuICAgICAgICAgIE1vdmVtZW50Lmluc3RhbmNlLmRpcmVjdGlvblZlY3Rvci55LFxuICAgICAgICAgIE1vdmVtZW50Lmluc3RhbmNlLmRpcmVjdGlvblZlY3Rvci54XG4gICAgICAgICkgKlxuICAgICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICBpZiAoTW92ZW1lbnQuaW5zdGFuY2UuaXNGbGlwKSB7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcbiAgICAgIH0gZWxzZSB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXZlbCA8IDMpIHtcbiAgICAgIGlmICghTW92ZW1lbnQuaW5zdGFuY2UuaXNGbGlwKSB7XG4gICAgICAgIHRoaXMuYXR0YWNrUmlnaHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXR0YWNrTGVmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5sZXZlbCA+PSAzKSB7XG4gICAgICB0aGlzLmF0dGFja0JvdGhTaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIHRoaXMucGVyZnJvbUF0dGFjaygpO1xuICB9XG59XG4iXX0=