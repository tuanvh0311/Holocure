"use strict";
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