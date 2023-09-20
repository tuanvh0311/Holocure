"use strict";
cc._RF.push(module, '67d3e0TzONHGZRKEdQvuuLc', 'EnemyDetector');
// Script/Player/EnemyDetector.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyDetector = /** @class */ (function (_super) {
    __extends(EnemyDetector, _super);
    function EnemyDetector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.closestDistance = 100000;
        _this.closestEnemy = null;
        _this.enemyList = new Array();
        _this.distanceList = new Array();
        return _this;
    }
    EnemyDetector_1 = EnemyDetector;
    EnemyDetector.prototype.onLoad = function () {
        EnemyDetector_1.instance = this;
    };
    EnemyDetector.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).isInRange = true;
            this.enemyList.push(other.node);
            //   if (this.closestDistance >= distance) {
            //     this.closestDistance = distance;
            //     this.closestEnemy = other.node;
            //     this.angle =
            //       Math.atan2(
            //         this.closestEnemy.y - this.node.parent.y,
            //         this.closestEnemy.x - this.node.parent.x
            //       ) *
            //       (180 / Math.PI);
            //   }
        }
    };
    EnemyDetector.prototype.onCollisionExit = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).isInRange = false;
        }
    };
    EnemyDetector.prototype.start = function () { };
    EnemyDetector.prototype.removeFromList = function () {
        this.enemyList = this.enemyList
            .filter(function (item) { return item.getComponent(EnemyController_1.default).currentHp > 0; })
            .filter(function (item) { return item.getComponent(EnemyController_1.default).isInRange == true; });
    };
    EnemyDetector.prototype.sortList = function () {
        this.enemyList = this.enemyList.sort(function (a, b) {
            return a.getComponent(EnemyController_1.default).distance -
                b.getComponent(EnemyController_1.default).distance;
        });
    };
    EnemyDetector.prototype.update = function (dt) {
        this.removeFromList();
        this.sortList();
        // if (this.closestEnemy == null) {
        //   this.angle = Movement.instance.directionAngle;
        //   this.closestDistance = 1000000;
        //   return;
        // }
        // if (this.closestEnemy.getComponent(EnemyController).currentHp <= 0) {
        //   this.closestEnemy = null;
        // }
    };
    var EnemyDetector_1;
    EnemyDetector = EnemyDetector_1 = __decorate([
        ccclass
    ], EnemyDetector);
    return EnemyDetector;
}(cc.Component));
exports.default = EnemyDetector;

cc._RF.pop();