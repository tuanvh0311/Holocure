"use strict";
cc._RF.push(module, '49d17zdk5dLOIo96OSB+zhp', 'SpiderCooking');
// Script/Weapon/SpiderCooking.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpiderCooking = /** @class */ (function (_super) {
    __extends(SpiderCooking, _super);
    function SpiderCooking() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentLevel = _this.level;
        return _this;
    }
    SpiderCooking.prototype.onLoad = function () {
        this.weaponOnLoad();
        this.description =
            "Create an area of miasma around, dealing slow damage to enemies inside.";
        this.node.zIndex = 1;
        this.node.getComponent(cc.Sprite).enabled = false;
        this.node.getComponent(cc.CircleCollider).enabled = false;
    };
    SpiderCooking.prototype.onCollisionStay = function (other, self) {
        if (other.tag == 1) {
            var damage = this.baseDamage + (this.baseDamage * this.resultDamagePercentage) / 100;
            other.node
                .getComponent(EnemyController_1.default)
                .takeDamageWithTick(damage, this.attackSpeed);
        }
    };
    SpiderCooking.prototype.updateStats = function (damagePercentage, attackSpeedPercentage, weaponScalePercentage) {
        this.damagePercentage += damagePercentage;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.node.scale += weaponScalePercentage / 100;
        this.onStatChange();
        // this.node.scale = this.resultWeaponScalePercentage;
    };
    SpiderCooking.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase area by 15%.";
                    this.isEquiped = true;
                    this.node.getComponent(cc.Sprite).enabled = true;
                    this.node.getComponent(cc.CircleCollider).enabled = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 0, 15);
                    break;
                case 3:
                    this.description = "Increase area by 25%.";
                    this.updateStats(30, 0, 0);
                    break;
                case 4:
                    this.description = "Increase frequency of hits by 20%.";
                    this.updateStats(0, 0, 25);
                    break;
                case 5:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 20, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 30, 0);
                    break;
                case 7:
                    this.updateStats(0, 30, 0);
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    SpiderCooking.prototype.start = function () { };
    SpiderCooking.prototype.update = function (dt) {
        this.onLevelUp();
        if (!this.isEquiped)
            return;
        if (Utils_1.default.isPause) {
            this.node.getComponent(cc.Animation).pause();
            return;
        }
        this.node.getComponent(cc.Animation).resume();
    };
    SpiderCooking = __decorate([
        ccclass
    ], SpiderCooking);
    return SpiderCooking;
}(Weapon_1.default));
exports.default = SpiderCooking;

cc._RF.pop();