
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/EnemyDetector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXEVuZW15RGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEYsNERBQXVEO0FBRWpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMkRDO1FBekRDLHdCQUF3QjtRQUN4QixxQkFBZSxHQUFXLE1BQU0sQ0FBQztRQUNqQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7UUFDakQsa0JBQVksR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQzs7SUFvRHBELENBQUM7c0JBM0RvQixhQUFhO0lBUWhDLDhCQUFNLEdBQU47UUFDRSxlQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsNENBQTRDO1lBQzVDLHVDQUF1QztZQUN2QyxzQ0FBc0M7WUFDdEMsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvREFBb0Q7WUFDcEQsbURBQW1EO1lBQ25ELFlBQVk7WUFDWix5QkFBeUI7WUFDekIsTUFBTTtTQUNQO0lBQ0gsQ0FBQztJQUNELHVDQUFlLEdBQWYsVUFBZ0IsS0FBa0IsRUFBRSxJQUFpQjtRQUNuRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUNELDZCQUFLLEdBQUwsY0FBUyxDQUFDO0lBQ1Ysc0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7YUFDNUIsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQzthQUNsRSxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFwRCxDQUFvRCxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNsQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ0gsT0FBQSxDQUFDLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxRQUFRO2dCQUN4QyxDQUFDLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxRQUFRO1FBRHhDLENBQ3dDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBQ0QsOEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLG1DQUFtQztRQUNuQyxtREFBbUQ7UUFDbkQsb0NBQW9DO1FBQ3BDLFlBQVk7UUFDWixJQUFJO1FBQ0osd0VBQXdFO1FBQ3hFLDhCQUE4QjtRQUM5QixJQUFJO0lBQ04sQ0FBQzs7SUExRGtCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EyRGpDO0lBQUQsb0JBQUM7Q0EzREQsQUEyREMsQ0EzRDBDLEVBQUUsQ0FBQyxTQUFTLEdBMkR0RDtrQkEzRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IE1vdmVtZW50IGZyb20gXCIuLi9Db250cm9sbGVyL01vdmVtZW50XCI7XG5pbXBvcnQgRW5lbXlDb250cm9sbGVyIGZyb20gXCIuLi9FbmVteS9FbmVteUNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15RGV0ZWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IEVuZW15RGV0ZWN0b3I7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICBjbG9zZXN0RGlzdGFuY2U6IG51bWJlciA9IDEwMDAwMDtcbiAgY2xvc2VzdEVuZW15OiBjYy5Ob2RlID0gbnVsbDtcblxuICBlbmVteUxpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIGRpc3RhbmNlTGlzdDogQXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gIG9uTG9hZCgpIHtcbiAgICBFbmVteURldGVjdG9yLmluc3RhbmNlID0gdGhpcztcbiAgfVxuICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuaXNJblJhbmdlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW5lbXlMaXN0LnB1c2gob3RoZXIubm9kZSk7XG4gICAgICAvLyAgIGlmICh0aGlzLmNsb3Nlc3REaXN0YW5jZSA+PSBkaXN0YW5jZSkge1xuICAgICAgLy8gICAgIHRoaXMuY2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAvLyAgICAgdGhpcy5jbG9zZXN0RW5lbXkgPSBvdGhlci5ub2RlO1xuICAgICAgLy8gICAgIHRoaXMuYW5nbGUgPVxuICAgICAgLy8gICAgICAgTWF0aC5hdGFuMihcbiAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZXN0RW5lbXkueSAtIHRoaXMubm9kZS5wYXJlbnQueSxcbiAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZXN0RW5lbXkueCAtIHRoaXMubm9kZS5wYXJlbnQueFxuICAgICAgLy8gICAgICAgKSAqXG4gICAgICAvLyAgICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAvLyAgIH1cbiAgICB9XG4gIH1cbiAgb25Db2xsaXNpb25FeGl0KG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuaXNJblJhbmdlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YXJ0KCkge31cbiAgcmVtb3ZlRnJvbUxpc3QoKSB7XG4gICAgdGhpcy5lbmVteUxpc3QgPSB0aGlzLmVuZW15TGlzdFxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5jdXJyZW50SHAgPiAwKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5pc0luUmFuZ2UgPT0gdHJ1ZSk7XG4gIH1cblxuICBzb3J0TGlzdCgpIHtcbiAgICB0aGlzLmVuZW15TGlzdCA9IHRoaXMuZW5lbXlMaXN0LnNvcnQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgYS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5kaXN0YW5jZSAtXG4gICAgICAgIGIuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuZGlzdGFuY2VcbiAgICApO1xuICB9XG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMucmVtb3ZlRnJvbUxpc3QoKTtcbiAgICB0aGlzLnNvcnRMaXN0KCk7XG5cbiAgICAvLyBpZiAodGhpcy5jbG9zZXN0RW5lbXkgPT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5hbmdsZSA9IE1vdmVtZW50Lmluc3RhbmNlLmRpcmVjdGlvbkFuZ2xlO1xuICAgIC8vICAgdGhpcy5jbG9zZXN0RGlzdGFuY2UgPSAxMDAwMDAwO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5jbG9zZXN0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuY3VycmVudEhwIDw9IDApIHtcbiAgICAvLyAgIHRoaXMuY2xvc2VzdEVuZW15ID0gbnVsbDtcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==