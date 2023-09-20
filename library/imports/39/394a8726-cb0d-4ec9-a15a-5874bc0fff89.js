"use strict";
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