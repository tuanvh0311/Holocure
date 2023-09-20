"use strict";
cc._RF.push(module, '9b005LVzC1K0qBYhpqip+/e', 'EnemyController');
// Script/Enemy/EnemyController.ts

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
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var OverallStats_1 = require("../Player/OverallStats");
var PlayerController_1 = require("../Player/PlayerController");
var EnemyManager_1 = require("./EnemyManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyController = /** @class */ (function (_super) {
    __extends(EnemyController, _super);
    function EnemyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0.5;
        _this.maxHp = 20;
        _this.scale = 1;
        _this.currentHp = 20;
        _this.damage = 2;
        _this.expDropAmount = 8;
        _this.hitSound = null;
        _this.damageTick = 0;
        _this.player = null;
        _this.gainKilled = false;
        _this.isInRange = false;
        return _this;
    }
    EnemyController.prototype.onLoad = function () {
        this.isFlip = false;
        this.isInRange = false;
        this.player = this.node.parent.getChildByName("PlayerBase");
        this.node.zIndex = 30000;
        this.moveVec = cc.Vec2.ZERO;
        this.currentHp = this.maxHp;
        this.deltaX = 0;
    };
    EnemyController.prototype.setter = function (speed, maxHp, scale, damage, expDropAmount) {
        this.speed = speed;
        this.maxHp = maxHp;
        this.scale = scale;
        this.damage = damage;
        this.currentHp = maxHp;
        this.expDropAmount = expDropAmount;
        this.getComponent(cc.Collider).enabled = true;
        this.node.opacity = 255;
        this.isKilled = false;
        this.gainKilled = false;
        this.isInRange = false;
        this.node.scale = scale;
    };
    EnemyController.prototype.resetStat = function () {
        this.currentHp = this.maxHp;
        this.getComponent(cc.Collider).enabled = true;
        this.node.opacity = 255;
        this.isKilled = false;
        this.gainKilled = false;
        this.isInRange = false;
    };
    EnemyController.prototype.takeDamage = function (damage) {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.hitSound, false, 0.5);
        var crit = OverallStats_1.default.instance.getCritChance() / 100;
        if (Math.random() <= crit) {
            damage =
                (damage * (OverallStats_1.default.instance.getCritDamageRate() + 150)) / 100;
        }
        this.currentHp -= damage;
        this.node.getChildByName("OnHitFrame").active = true;
        this.scheduleOnce(function () {
            this.node.getChildByName("OnHitFrame").active = false;
        }, 0.025);
    };
    EnemyController.prototype.takeDamageWithTick = function (damage, tickRate) {
        if (this.takeDamageTick > 0)
            return;
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.hitSound, false, 0.5);
        this.takeDamageTick = tickRate;
        var crit = OverallStats_1.default.instance.getCritChance() / 100;
        if (Math.random() <= crit) {
            damage =
                (damage * (OverallStats_1.default.instance.getCritDamageRate() + 150)) / 100;
        }
        this.currentHp -= damage;
        this.node.getChildByName("OnHitFrame").active = true;
        this.scheduleOnce(function () {
            this.node.getChildByName("OnHitFrame").active = false;
        }, 0.025);
    };
    EnemyController.prototype.onCollisionStay = function (other, self) {
        if (other.tag == 0 && this.damageTick < 0) {
            this.damageTick = 0.5;
            PlayerController_1.default.instance.takeDamage(this.damage);
        }
    };
    EnemyController.prototype.start = function () { };
    EnemyController.prototype.moveToPlayer = function (dt) {
        if (this.currentHp > 0) {
            var deltaX = this.player.x - this.node.x;
            var deltaY = this.player.y - this.node.y;
            var normalizedDelta = cc.v2(deltaX, deltaY).normalize();
            var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (length > 2) {
                if (normalizedDelta.x > 0) {
                    this.isFlip = false;
                    this.node.scaleX = this.scale;
                }
                else {
                    this.isFlip = true;
                    this.node.scaleX = -this.scale;
                }
            }
            this.node.x += normalizedDelta.x * this.speed * 175 * dt;
            this.node.y += normalizedDelta.y * this.speed * 175 * dt;
        }
    };
    EnemyController.prototype.dropExp = function () {
        ObjectPooling_1.default.instance.generateExp(this.node, this.expDropAmount);
    };
    EnemyController.prototype.dropFood = function () {
        ObjectPooling_1.default.instance.generateFood(this.node);
    };
    EnemyController.prototype.dropCoin = function () {
        var countAmount = Utils_1.default.randomFloor(10, 50);
        ObjectPooling_1.default.instance.generateCoin(this.node, countAmount);
    };
    EnemyController.prototype.dropRainbowExp = function () {
        ObjectPooling_1.default.instance.generateMagnet(this.node);
    };
    EnemyController.prototype.calculateDistance = function () {
        var distanceX = (this.player.x - this.node.x) * (this.player.x - this.node.x);
        var distanceY = (this.player.y - this.node.y) * (this.player.y - this.node.y);
        this.distance = Math.sqrt(distanceX + distanceY);
    };
    EnemyController.prototype.onEnemyKill = function (dt) {
        var _this = this;
        if (this.currentHp <= 0) {
            this.isKilled = true;
            if (this.isFlip) {
                this.node.x += 150 * dt;
                this.node.opacity -= 500 * dt;
            }
            else {
                this.node.x -= 150 * dt;
                this.node.opacity -= 500 * dt;
            }
            if (this.isKilled && !this.gainKilled) {
                GameController_1.default.instance.gainKill();
                var random = Math.random();
                if (random < 1 / 2000) {
                    this.dropRainbowExp();
                }
                else if (random < 1 / 200) {
                    this.dropFood();
                }
                else if (random < 1 / 90) {
                    this.dropCoin();
                }
                else
                    this.dropExp();
                this.gainKilled = true;
                this.node.getComponent(cc.PolygonCollider).enabled = false;
                setTimeout(function () {
                    EnemyManager_1.default.instance.putBackToPool(_this.node);
                }, 300);
            }
        }
    };
    EnemyController.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            this.node.getComponent(cc.Animation).pause();
            return;
        }
        this.node.getComponent(cc.Animation).resume();
        if (this.currentHp > 0) {
            this.isKilled = false;
        }
        this.damageTick -= dt;
        this.takeDamageTick -= dt;
        this.moveToPlayer(dt);
        this.onEnemyKill(dt);
        this.calculateDistance();
    };
    __decorate([
        property(cc.Float)
    ], EnemyController.prototype, "speed", void 0);
    __decorate([
        property(cc.Float)
    ], EnemyController.prototype, "maxHp", void 0);
    __decorate([
        property(cc.Float)
    ], EnemyController.prototype, "scale", void 0);
    __decorate([
        property(cc.Float)
    ], EnemyController.prototype, "damage", void 0);
    __decorate([
        property(cc.Integer)
    ], EnemyController.prototype, "expDropAmount", void 0);
    __decorate([
        property(cc.AudioClip)
    ], EnemyController.prototype, "hitSound", void 0);
    EnemyController = __decorate([
        ccclass
    ], EnemyController);
    return EnemyController;
}(cc.Component));
exports.default = EnemyController;

cc._RF.pop();