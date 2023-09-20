
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/ObjectPooling.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb9e3iCZnBH3INAnHdGRZQw', 'ObjectPooling');
// Script/Manager/ObjectPooling.ts

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
var Coin_1 = require("../Other Object/Coin");
var Experience_1 = require("../Other Object/Experience");
var Pickup_1 = require("../Other Object/Pickup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var objectPooling = /** @class */ (function (_super) {
    __extends(objectPooling, _super);
    function objectPooling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expPrefab = new Array();
        _this.coinPrefab = null;
        _this.foodPrefab = null;
        _this.rainbowExpPrefab = null;
        _this.gameplay = null;
        _this.expPool = new Array();
        _this.coinPool = new cc.NodePool();
        _this.foodPool = new cc.NodePool();
        _this.rainbowExpPool = new cc.NodePool();
        _this.expList = new Array();
        _this.coinList = new Array();
        _this.magnetList = new Array();
        return _this;
    }
    objectPooling_1 = objectPooling;
    objectPooling.prototype.onLoad = function () {
        objectPooling_1.instance = this;
        this.addToArrayPool();
        var initCount = 500;
        for (var j = 0; j < this.expPool.length; j++) {
            for (var i = 0; i < initCount; ++i) {
                var exp = cc.instantiate(this.expPrefab[j]);
                this.expPool[j].put(exp);
            }
        }
    };
    objectPooling.prototype.start = function () { };
    objectPooling.prototype.addToArrayPool = function () {
        for (var i = 0; i < this.expPrefab.length; i++) {
            var expType = new cc.NodePool();
            this.expPool.push(expType);
        }
    };
    objectPooling.prototype.generateExp = function (node, expGained) {
        var exp = null;
        var type = null;
        if (expGained > 0)
            type = 1;
        if (expGained > 10)
            type = 2;
        if (expGained > 19)
            type = 3;
        if (expGained > 49)
            type = 4;
        if (expGained > 99)
            type = 5;
        if (expGained > 200)
            type = 6;
        if (this.expPool[type - 1].size() > 0) {
            exp = this.expPool[type - 1].get();
        }
        else {
            exp = cc.instantiate(this.expPrefab[type - 1]);
        }
        exp.getComponent(Experience_1.default).set(expGained);
        exp.getComponent(Pickup_1.default).set();
        this.addToExpList(exp);
        exp.parent = this.gameplay;
        exp.position = node.position;
    };
    objectPooling.prototype.generateCoin = function (node, amount) {
        var coin = null;
        if (this.coinPool.size() > 0) {
            coin = this.coinPool.get();
        }
        else {
            coin = cc.instantiate(this.coinPrefab);
        }
        coin.getComponent(Coin_1.default).set(amount);
        coin.getComponent(Pickup_1.default).set();
        this.addToCoinList(coin);
        coin.parent = this.gameplay;
        coin.position = node.position;
    };
    objectPooling.prototype.generateFood = function (node) {
        var food = null;
        if (this.foodPool.size() > 0) {
            food = this.foodPool.get();
        }
        else {
            food = cc.instantiate(this.foodPrefab);
        }
        food.getComponent(Pickup_1.default).set();
        food.parent = this.gameplay;
        food.position = node.position;
    };
    objectPooling.prototype.generateMagnet = function (node) {
        var magnet = null;
        this.addToMagnetList(magnet);
        magnet = cc.instantiate(this.rainbowExpPrefab);
        magnet.getComponent(Pickup_1.default).set();
        magnet.parent = this.gameplay;
        magnet.position = node.position;
    };
    objectPooling.prototype.addToExpList = function (node) {
        this.expList.push(node);
    };
    objectPooling.prototype.addToCoinList = function (node) {
        this.coinList.push(node);
    };
    objectPooling.prototype.addToMagnetList = function (node) {
        this.magnetList.push(node);
    };
    objectPooling.prototype.putBackToPool = function (node) {
        if (!node)
            return;
        switch (node.name) {
            case "Exp1":
                this.expPool[0].put(node);
                break;
            case "Exp2":
                this.expPool[1].put(node);
                break;
            case "Exp3":
                this.expPool[2].put(node);
                break;
            case "Exp4":
                this.expPool[3].put(node);
                break;
            case "Exp5":
                this.expPool[4].put(node);
                break;
            case "Exp6":
                this.expPool[5].put(node);
                break;
            case "Coin":
                this.coinPool.put(node);
                break;
            case "Food":
                this.foodPool.put(node);
                break;
        }
    };
    objectPooling.prototype.removeFromList = function () {
        this.expList = this.expList.filter(function (item) { return item.getComponent(Experience_1.default).isLooted !== true; });
        this.coinList = this.coinList.filter(function (item) { return item.getComponent(Coin_1.default).isLooted !== true; });
    };
    objectPooling.prototype.onMagnetPickup = function () {
        this.expList.forEach(function (element) {
            element.getComponent(Pickup_1.default).isPicking = true;
        });
        this.coinList.forEach(function (element) {
            element.getComponent(Pickup_1.default).isPicking = true;
        });
        this.magnetList.forEach(function (element) {
            if (element != null && element.active)
                element.getComponent(Pickup_1.default).isPicking = true;
        });
    };
    objectPooling.prototype.update = function (dt) {
        this.removeFromList();
    };
    var objectPooling_1;
    __decorate([
        property(Array(cc.Prefab))
    ], objectPooling.prototype, "expPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], objectPooling.prototype, "coinPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], objectPooling.prototype, "foodPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], objectPooling.prototype, "rainbowExpPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], objectPooling.prototype, "gameplay", void 0);
    objectPooling = objectPooling_1 = __decorate([
        ccclass
    ], objectPooling);
    return objectPooling;
}(cc.Component));
exports.default = objectPooling;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxPYmplY3RQb29saW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUN4Qyx5REFBb0Q7QUFHcEQsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBd0pDO1FBckpDLGVBQVMsR0FBcUIsSUFBSSxLQUFLLEVBQWEsQ0FBQztRQUVyRCxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQXVCLElBQUksS0FBSyxFQUFlLENBQUM7UUFDdkQsY0FBUSxHQUFnQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxjQUFRLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLG9CQUFjLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELGFBQU8sR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUMvQyxjQUFRLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7UUFDaEQsZ0JBQVUsR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQzs7SUFzSXBELENBQUM7c0JBeEpvQixhQUFhO0lBbUJoQyw4QkFBTSxHQUFOO1FBQ0UsZUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RC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TztZQUM5QixJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU07Z0JBQ25DLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ1MsOEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7SUFwSkQ7UUFEQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvREFDMEI7SUFFckQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkRBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQVhOLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F3SmpDO0lBQUQsb0JBQUM7Q0F4SkQsQUF3SkMsQ0F4SjBDLEVBQUUsQ0FBQyxTQUFTLEdBd0p0RDtrQkF4Sm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvaW4gZnJvbSBcIi4uL090aGVyIE9iamVjdC9Db2luXCI7XG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi4vT3RoZXIgT2JqZWN0L0V4cGVyaWVuY2VcIjtcbmltcG9ydCBGb29kIGZyb20gXCIuLi9PdGhlciBPYmplY3QvRm9vZFwiO1xuaW1wb3J0IE1hZ25ldCBmcm9tIFwiLi4vT3RoZXIgT2JqZWN0L01hZ25ldFwiO1xuaW1wb3J0IFBpY2t1cCBmcm9tIFwiLi4vT3RoZXIgT2JqZWN0L1BpY2t1cFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb2JqZWN0UG9vbGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogb2JqZWN0UG9vbGluZztcbiAgQHByb3BlcnR5KEFycmF5KGNjLlByZWZhYikpXG4gIGV4cFByZWZhYjogQXJyYXk8Y2MuUHJlZmFiPiA9IG5ldyBBcnJheTxjYy5QcmVmYWI+KCk7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGNvaW5QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGZvb2RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHJhaW5ib3dFeHBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lcGxheTogY2MuTm9kZSA9IG51bGw7XG4gIGV4cFBvb2w6IEFycmF5PGNjLk5vZGVQb29sPiA9IG5ldyBBcnJheTxjYy5Ob2RlUG9vbD4oKTtcbiAgY29pblBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gIGZvb2RQb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICByYWluYm93RXhwUG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgZXhwTGlzdDogQXJyYXk8Y2MuTm9kZT4gPSBuZXcgQXJyYXk8Y2MuTm9kZT4oKTtcbiAgY29pbkxpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIG1hZ25ldExpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIG9uTG9hZCgpIHtcbiAgICBvYmplY3RQb29saW5nLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmFkZFRvQXJyYXlQb29sKCk7XG4gICAgbGV0IGluaXRDb3VudCA9IDUwMDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZXhwUG9vbC5sZW5ndGg7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0Q291bnQ7ICsraSkge1xuICAgICAgICBsZXQgZXhwID0gY2MuaW5zdGFudGlhdGUodGhpcy5leHBQcmVmYWJbal0pO1xuICAgICAgICB0aGlzLmV4cFBvb2xbal0ucHV0KGV4cCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXJ0KCkge31cblxuICBhZGRUb0FycmF5UG9vbCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXhwUHJlZmFiLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXhwVHlwZSA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgdGhpcy5leHBQb29sLnB1c2goZXhwVHlwZSk7XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlRXhwKG5vZGU6IGNjLk5vZGUsIGV4cEdhaW5lZDogbnVtYmVyKSB7XG4gICAgbGV0IGV4cDogY2MuTm9kZSA9IG51bGw7XG4gICAgbGV0IHR5cGU6IG51bWJlciA9IG51bGw7XG4gICAgaWYgKGV4cEdhaW5lZCA+IDApIHR5cGUgPSAxO1xuICAgIGlmIChleHBHYWluZWQgPiAxMCkgdHlwZSA9IDI7XG4gICAgaWYgKGV4cEdhaW5lZCA+IDE5KSB0eXBlID0gMztcbiAgICBpZiAoZXhwR2FpbmVkID4gNDkpIHR5cGUgPSA0O1xuICAgIGlmIChleHBHYWluZWQgPiA5OSkgdHlwZSA9IDU7XG4gICAgaWYgKGV4cEdhaW5lZCA+IDIwMCkgdHlwZSA9IDY7XG5cbiAgICBpZiAodGhpcy5leHBQb29sW3R5cGUgLSAxXS5zaXplKCkgPiAwKSB7XG4gICAgICBleHAgPSB0aGlzLmV4cFBvb2xbdHlwZSAtIDFdLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV4cFByZWZhYlt0eXBlIC0gMV0pO1xuICAgIH1cbiAgICBleHAuZ2V0Q29tcG9uZW50KEV4cGVyaWVuY2UpLnNldChleHBHYWluZWQpO1xuICAgIGV4cC5nZXRDb21wb25lbnQoUGlja3VwKS5zZXQoKTtcbiAgICB0aGlzLmFkZFRvRXhwTGlzdChleHApO1xuICAgIGV4cC5wYXJlbnQgPSB0aGlzLmdhbWVwbGF5O1xuICAgIGV4cC5wb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gIH1cbiAgZ2VuZXJhdGVDb2luKG5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XG4gICAgbGV0IGNvaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIGlmICh0aGlzLmNvaW5Qb29sLnNpemUoKSA+IDApIHtcbiAgICAgIGNvaW4gPSB0aGlzLmNvaW5Qb29sLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb2luUHJlZmFiKTtcbiAgICB9XG4gICAgY29pbi5nZXRDb21wb25lbnQoQ29pbikuc2V0KGFtb3VudCk7XG4gICAgY29pbi5nZXRDb21wb25lbnQoUGlja3VwKS5zZXQoKTtcbiAgICB0aGlzLmFkZFRvQ29pbkxpc3QoY29pbik7XG4gICAgY29pbi5wYXJlbnQgPSB0aGlzLmdhbWVwbGF5O1xuICAgIGNvaW4ucG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICB9XG4gIGdlbmVyYXRlRm9vZChub2RlOiBjYy5Ob2RlKSB7XG4gICAgbGV0IGZvb2Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIGlmICh0aGlzLmZvb2RQb29sLnNpemUoKSA+IDApIHtcbiAgICAgIGZvb2QgPSB0aGlzLmZvb2RQb29sLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5mb29kUHJlZmFiKTtcbiAgICB9XG4gICAgZm9vZC5nZXRDb21wb25lbnQoUGlja3VwKS5zZXQoKTtcbiAgICBmb29kLnBhcmVudCA9IHRoaXMuZ2FtZXBsYXk7XG4gICAgZm9vZC5wb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gIH1cbiAgZ2VuZXJhdGVNYWduZXQobm9kZTogY2MuTm9kZSkge1xuICAgIGxldCBtYWduZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIHRoaXMuYWRkVG9NYWduZXRMaXN0KG1hZ25ldCk7XG4gICAgbWFnbmV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yYWluYm93RXhwUHJlZmFiKTtcbiAgICBtYWduZXQuZ2V0Q29tcG9uZW50KFBpY2t1cCkuc2V0KCk7XG4gICAgbWFnbmV0LnBhcmVudCA9IHRoaXMuZ2FtZXBsYXk7XG4gICAgbWFnbmV0LnBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbjtcbiAgfVxuICBhZGRUb0V4cExpc3Qobm9kZTogY2MuTm9kZSkge1xuICAgIHRoaXMuZXhwTGlzdC5wdXNoKG5vZGUpO1xuICB9XG4gIGFkZFRvQ29pbkxpc3Qobm9kZTogY2MuTm9kZSkge1xuICAgIHRoaXMuY29pbkxpc3QucHVzaChub2RlKTtcbiAgfVxuICBhZGRUb01hZ25ldExpc3Qobm9kZTogY2MuTm9kZSkge1xuICAgIHRoaXMubWFnbmV0TGlzdC5wdXNoKG5vZGUpO1xuICB9XG4gIHB1dEJhY2tUb1Bvb2wobm9kZTogY2MuTm9kZSkge1xuICAgIGlmICghbm9kZSkgcmV0dXJuO1xuICAgIHN3aXRjaCAobm9kZS5uYW1lKSB7XG4gICAgICBjYXNlIFwiRXhwMVwiOlxuICAgICAgICB0aGlzLmV4cFBvb2xbMF0ucHV0KG5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFeHAyXCI6XG4gICAgICAgIHRoaXMuZXhwUG9vbFsxXS5wdXQobm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkV4cDNcIjpcbiAgICAgICAgdGhpcy5leHBQb29sWzJdLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRXhwNFwiOlxuICAgICAgICB0aGlzLmV4cFBvb2xbM10ucHV0KG5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFeHA1XCI6XG4gICAgICAgIHRoaXMuZXhwUG9vbFs0XS5wdXQobm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkV4cDZcIjpcbiAgICAgICAgdGhpcy5leHBQb29sWzVdLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQ29pblwiOlxuICAgICAgICB0aGlzLmNvaW5Qb29sLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRm9vZFwiOlxuICAgICAgICB0aGlzLmZvb2RQb29sLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJlbW92ZUZyb21MaXN0KCkge1xuICAgIHRoaXMuZXhwTGlzdCA9IHRoaXMuZXhwTGlzdC5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5nZXRDb21wb25lbnQoRXhwZXJpZW5jZSkuaXNMb290ZWQgIT09IHRydWVcbiAgICApO1xuICAgIHRoaXMuY29pbkxpc3QgPSB0aGlzLmNvaW5MaXN0LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLmdldENvbXBvbmVudChDb2luKS5pc0xvb3RlZCAhPT0gdHJ1ZVxuICAgICk7XG4gIH1cbiAgb25NYWduZXRQaWNrdXAoKSB7XG4gICAgdGhpcy5leHBMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KFBpY2t1cCkuaXNQaWNraW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmNvaW5MaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KFBpY2t1cCkuaXNQaWNraW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLm1hZ25ldExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCAmJiBlbGVtZW50LmFjdGl2ZSlcbiAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoUGlja3VwKS5pc1BpY2tpbmcgPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlRnJvbUxpc3QoKTtcbiAgfVxufVxuIl19