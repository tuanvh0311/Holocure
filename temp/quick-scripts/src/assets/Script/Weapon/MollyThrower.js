"use strict";
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