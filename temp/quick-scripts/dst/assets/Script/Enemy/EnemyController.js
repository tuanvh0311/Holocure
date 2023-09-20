
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFDeEMsMERBQXFEO0FBRXJELHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBeUxDO1FBdkxDLFdBQUssR0FBRyxHQUFHLENBQUM7UUFFWixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFFZixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFHdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUl2QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQW1LcEIsQ0FBQztJQWhLQyxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFD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O2tCQXpMb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IG9iamVjdFBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvT2JqZWN0UG9vbGluZ1wiO1xuXG5pbXBvcnQgT3ZlcmFsbFN0YXRzIGZyb20gXCIuLi9QbGF5ZXIvT3ZlcmFsbFN0YXRzXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi4vUGxheWVyL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBFbmVteU1hbmFnZXIgZnJvbSBcIi4vRW5lbXlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHNwZWVkID0gMC41O1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1heEhwID0gMjA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgc2NhbGUgPSAxO1xuICBjdXJyZW50SHAgPSAyMDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBkYW1hZ2UgPSAyO1xuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgZXhwRHJvcEFtb3VudDogbnVtYmVyID0gODtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgaGl0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGRhbWFnZVRpY2s6IG51bWJlciA9IDA7XG4gIGRpc3RhbmNlOiBudW1iZXI7XG4gIGlzRmxpcDogYm9vbGVhbjtcbiAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgbW92ZVZlYzogY2MuVmVjMjtcbiAgZGVsdGFYOiBudW1iZXI7XG4gIGlzS2lsbGVkOiBib29sZWFuO1xuICBnYWluS2lsbGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGlzSW5SYW5nZSA9IGZhbHNlO1xuICBkZWx0YVRpbWU6IG51bWJlcjtcbiAgdGFrZURhbWFnZVRpY2s6IG51bWJlcjtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuaXNGbGlwID0gZmFsc2U7XG4gICAgdGhpcy5pc0luUmFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnBsYXllciA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJCYXNlXCIpO1xuICAgIHRoaXMubm9kZS56SW5kZXggPSAzMDAwMDtcbiAgICB0aGlzLm1vdmVWZWMgPSBjYy5WZWMyLlpFUk87XG4gICAgdGhpcy5jdXJyZW50SHAgPSB0aGlzLm1heEhwO1xuICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgfVxuICBzZXR0ZXIoXG4gICAgc3BlZWQ6IG51bWJlcixcbiAgICBtYXhIcDogbnVtYmVyLFxuICAgIHNjYWxlOiBudW1iZXIsXG4gICAgZGFtYWdlOiBudW1iZXIsXG4gICAgZXhwRHJvcEFtb3VudDogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLm1heEhwID0gbWF4SHA7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgIHRoaXMuY3VycmVudEhwID0gbWF4SHA7XG4gICAgdGhpcy5leHBEcm9wQW1vdW50ID0gZXhwRHJvcEFtb3VudDtcbiAgICB0aGlzLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy5pc0tpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FpbktpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNJblJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlLnNjYWxlID0gc2NhbGU7XG4gIH1cbiAgcmVzZXRTdGF0KCkge1xuICAgIHRoaXMuY3VycmVudEhwID0gdGhpcy5tYXhIcDtcbiAgICB0aGlzLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy5pc0tpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FpbktpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNJblJhbmdlID0gZmFsc2U7XG4gIH1cbiAgdGFrZURhbWFnZShkYW1hZ2U6IG51bWJlcikge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmhpdFNvdW5kLCBmYWxzZSwgMC41KTtcbiAgICB2YXIgY3JpdCA9IE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5nZXRDcml0Q2hhbmNlKCkgLyAxMDA7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPD0gY3JpdCkge1xuICAgICAgZGFtYWdlID1cbiAgICAgICAgKGRhbWFnZSAqIChPdmVyYWxsU3RhdHMuaW5zdGFuY2UuZ2V0Q3JpdERhbWFnZVJhdGUoKSArIDE1MCkpIC8gMTAwO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRIcCAtPSBkYW1hZ2U7XG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT25IaXRGcmFtZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9uSGl0RnJhbWVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC4wMjUpO1xuICB9XG4gIHRha2VEYW1hZ2VXaXRoVGljayhkYW1hZ2U6IG51bWJlciwgdGlja1JhdGU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRha2VEYW1hZ2VUaWNrID4gMCkgcmV0dXJuO1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmhpdFNvdW5kLCBmYWxzZSwgMC41KTtcbiAgICB0aGlzLnRha2VEYW1hZ2VUaWNrID0gdGlja1JhdGU7XG4gICAgdmFyIGNyaXQgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2UuZ2V0Q3JpdENoYW5jZSgpIC8gMTAwO1xuICAgIGlmIChNYXRoLnJhbmRvbSgpIDw9IGNyaXQpIHtcbiAgICAgIGRhbWFnZSA9XG4gICAgICAgIChkYW1hZ2UgKiAoT3ZlcmFsbFN0YXRzLmluc3RhbmNlLmdldENyaXREYW1hZ2VSYXRlKCkgKyAxNTApKSAvIDEwMDtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SHAgLT0gZGFtYWdlO1xuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9uSGl0RnJhbWVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPbkhpdEZyYW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sIDAuMDI1KTtcbiAgfVxuXG4gIG9uQ29sbGlzaW9uU3RheShvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgaWYgKG90aGVyLnRhZyA9PSAwICYmIHRoaXMuZGFtYWdlVGljayA8IDApIHtcbiAgICAgIHRoaXMuZGFtYWdlVGljayA9IDAuNTtcbiAgICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UudGFrZURhbWFnZSh0aGlzLmRhbWFnZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7fVxuICBtb3ZlVG9QbGF5ZXIoZHQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmN1cnJlbnRIcCA+IDApIHtcbiAgICAgIHZhciBkZWx0YVggPSB0aGlzLnBsYXllci54IC0gdGhpcy5ub2RlLng7XG4gICAgICB2YXIgZGVsdGFZID0gdGhpcy5wbGF5ZXIueSAtIHRoaXMubm9kZS55O1xuICAgICAgbGV0IG5vcm1hbGl6ZWREZWx0YSA9IGNjLnYyKGRlbHRhWCwgZGVsdGFZKS5ub3JtYWxpemUoKTtcbiAgICAgIGxldCBsZW5ndGggPSBNYXRoLnNxcnQoZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZKTtcbiAgICAgIGlmIChsZW5ndGggPiAyKSB7XG4gICAgICAgIGlmIChub3JtYWxpemVkRGVsdGEueCA+IDApIHtcbiAgICAgICAgICB0aGlzLmlzRmxpcCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLnNjYWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNGbGlwID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLXRoaXMuc2NhbGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5ub2RlLnggKz0gbm9ybWFsaXplZERlbHRhLnggKiB0aGlzLnNwZWVkICogMTc1ICogZHQ7XG4gICAgICB0aGlzLm5vZGUueSArPSBub3JtYWxpemVkRGVsdGEueSAqIHRoaXMuc3BlZWQgKiAxNzUgKiBkdDtcbiAgICB9XG4gIH1cbiAgZHJvcEV4cCgpIHtcbiAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLmdlbmVyYXRlRXhwKHRoaXMubm9kZSwgdGhpcy5leHBEcm9wQW1vdW50KTtcbiAgfVxuICBkcm9wRm9vZCgpIHtcbiAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLmdlbmVyYXRlRm9vZCh0aGlzLm5vZGUpO1xuICB9XG4gIGRyb3BDb2luKCkge1xuICAgIGxldCBjb3VudEFtb3VudCA9IFV0aWxzLnJhbmRvbUZsb29yKDEwLCA1MCk7XG4gICAgb2JqZWN0UG9vbGluZy5pbnN0YW5jZS5nZW5lcmF0ZUNvaW4odGhpcy5ub2RlLCBjb3VudEFtb3VudCk7XG4gIH1cbiAgZHJvcFJhaW5ib3dFeHAoKSB7XG4gICAgb2JqZWN0UG9vbGluZy5pbnN0YW5jZS5nZW5lcmF0ZU1hZ25ldCh0aGlzLm5vZGUpO1xuICB9XG4gIGNhbGN1bGF0ZURpc3RhbmNlKCkge1xuICAgIHZhciBkaXN0YW5jZVggPVxuICAgICAgKHRoaXMucGxheWVyLnggLSB0aGlzLm5vZGUueCkgKiAodGhpcy5wbGF5ZXIueCAtIHRoaXMubm9kZS54KTtcbiAgICB2YXIgZGlzdGFuY2VZID1cbiAgICAgICh0aGlzLnBsYXllci55IC0gdGhpcy5ub2RlLnkpICogKHRoaXMucGxheWVyLnkgLSB0aGlzLm5vZGUueSk7XG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVggKyBkaXN0YW5jZVkpO1xuICB9XG4gIG9uRW5lbXlLaWxsKGR0KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEhwIDw9IDApIHtcbiAgICAgIHRoaXMuaXNLaWxsZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuaXNGbGlwKSB7XG4gICAgICAgIHRoaXMubm9kZS54ICs9IDE1MCAqIGR0O1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSAtPSA1MDAgKiBkdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm9kZS54IC09IDE1MCAqIGR0O1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSAtPSA1MDAgKiBkdDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzS2lsbGVkICYmICF0aGlzLmdhaW5LaWxsZWQpIHtcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZ2FpbktpbGwoKTtcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGlmIChyYW5kb20gPCAxIC8gMjAwMCkge1xuICAgICAgICAgIHRoaXMuZHJvcFJhaW5ib3dFeHAoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyYW5kb20gPCAxIC8gMjAwKSB7XG4gICAgICAgICAgdGhpcy5kcm9wRm9vZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbSA8IDEgLyA5MCkge1xuICAgICAgICAgIHRoaXMuZHJvcENvaW4oKTtcbiAgICAgICAgfSBlbHNlIHRoaXMuZHJvcEV4cCgpO1xuICAgICAgICB0aGlzLmdhaW5LaWxsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBFbmVteU1hbmFnZXIuaW5zdGFuY2UucHV0QmFja1RvUG9vbCh0aGlzLm5vZGUpO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGF1c2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnJlc3VtZSgpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRIcCA+IDApIHtcbiAgICAgIHRoaXMuaXNLaWxsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5kYW1hZ2VUaWNrIC09IGR0O1xuICAgIHRoaXMudGFrZURhbWFnZVRpY2sgLT0gZHQ7XG4gICAgdGhpcy5tb3ZlVG9QbGF5ZXIoZHQpO1xuICAgIHRoaXMub25FbmVteUtpbGwoZHQpO1xuICAgIHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTtcbiAgfVxufVxuIl19