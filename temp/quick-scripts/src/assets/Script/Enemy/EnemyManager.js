"use strict";
cc._RF.push(module, 'fec23dgw3BLY4Mqz81ctXpY', 'EnemyManager');
// Script/Enemy/EnemyManager.ts

"use strict";
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
var EnemyController_1 = require("./EnemyController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyManager = /** @class */ (function (_super) {
    __extends(EnemyManager, _super);
    function EnemyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.gameplay = null;
        _this.player = null;
        _this.enemyPrefab = new Array();
        _this.spawnTimer = 2;
        _this.enemyPool = new Array();
        _this.batPool = null;
        _this.ghostPool = null;
        _this.povSize = null;
        _this.spawnArea = null;
        _this.spawnAreaMax = null;
        _this.timer = 3;
        _this.currentTime = 0;
        return _this;
    }
    EnemyManager_1 = EnemyManager;
    EnemyManager.prototype.onLoad = function () {
        EnemyManager_1.instance = this;
        this.loadPool();
        this.povSize = cc.v2(1000, 1000);
        this.timer = 5;
        this.spawnAmount = 5;
        this.spawnRadius = 200;
        this.spawnArea = cc.v2(this.povSize.x + this.spawnRadius, this.povSize.y + this.spawnRadius);
    };
    EnemyManager.prototype.loadPool = function () {
        for (var i = 0; i < this.enemyPrefab.length; i++) {
            var pool = new cc.NodePool();
            var initCount = 20;
            for (var j = 0; j < initCount; j++) {
                var enemy = cc.instantiate(this.enemyPrefab[i]);
                pool.put(enemy);
            }
            this.enemyPool.push(pool);
        }
    };
    EnemyManager.prototype.spawnEnemy = function (spawnAmount, speed, maxHp, scale, damage, expAmount, enemyIndex) {
        for (var i = 0; i < spawnAmount; i++) {
            var enemy = null;
            if (this.enemyPool[enemyIndex].size() > 0) {
                enemy = this.enemyPool[enemyIndex].get();
            }
            else {
                enemy = cc.instantiate(this.enemyPrefab[enemyIndex]);
            }
            enemy
                .getComponent(EnemyController_1.default)
                .setter(speed, maxHp, scale, damage, expAmount);
            enemy.parent = this.gameplay;
            enemy.position = this.generateRandomPosition();
        }
    };
    EnemyManager.prototype.spawnDefaultEnemy = function (spawnAmount, enemyIndex) {
        for (var i = 0; i < spawnAmount; i++) {
            var enemy = null;
            if (this.enemyPool[enemyIndex].size() > 0) {
                enemy = this.enemyPool[enemyIndex].get();
            }
            else {
                enemy = cc.instantiate(this.enemyPrefab[enemyIndex]);
            }
            enemy.getComponent(EnemyController_1.default).resetStat();
            enemy.parent = this.gameplay;
            enemy.position = this.generateRandomPosition();
        }
    };
    EnemyManager.prototype.endlessSpawn = function () {
        var hourTimer = Math.floor(GameController_1.default.instance.timer / 3600);
        var minuteTimer = Math.floor((GameController_1.default.instance.timer - 3600 * hourTimer) / 60);
        var a = minuteTimer <= 23 ? 37 * hourTimer : 37 * hourTimer + (minuteTimer - 23);
        var ATK = 15 + 2 * a;
        var SPD = 1 + 0.12 * a < 3 ? 1 + 0.12 * a : 3;
        var HP = 5000 + 5000 * 0.05 * a;
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 15);
        this.spawnEnemy(1, SPD, HP, 1.3, ATK, 25, 14);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 9);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 24);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 10);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 5);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 6);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 23);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 11);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 22);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 19);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 21);
    };
    EnemyManager.prototype.start = function () { };
    EnemyManager.prototype.generateRandomPosition = function () {
        var position = cc.Vec3.ZERO;
        position.x = this.player.x;
        position.y = this.player.y;
        var f = Utils_1.default.random(0, 1) > 0.5 ? -1 : 1;
        if (Utils_1.default.random(0, 1) > 0.5) {
            position.x += Utils_1.default.random(-this.spawnArea.x, this.spawnArea.x);
            position.y += this.spawnArea.y * f;
        }
        else {
            position.y += Utils_1.default.random(-this.spawnArea.y, this.spawnArea.y);
            position.x += this.spawnArea.x * f;
        }
        return position;
    };
    EnemyManager.prototype.putBackToPool = function (node) {
        if (!node)
            return;
        for (var i = 0; i < this.enemyPrefab.length; i++) {
            if (node.name == this.enemyPrefab[i].name) {
                this.enemyPool[i].put(node);
            }
        }
    };
    EnemyManager.prototype.update = function (dt) {
        this.currentTime = GameController_1.default.instance.timer;
        if (Utils_1.default.isPause)
            return;
        this.timer -= dt;
        if (this.timer < 0) {
            if (this.currentTime < 180 && this.currentTime > 0) {
                this.spawnDefaultEnemy(1, 0);
            }
            if (this.currentTime < 300 && this.currentTime > 30) {
                this.spawnDefaultEnemy(1, 1);
            }
            if (this.currentTime < 300 && this.currentTime > 180) {
                this.spawnDefaultEnemy(3, 2);
            }
            if (this.currentTime < 360 && this.currentTime > 240) {
                this.spawnDefaultEnemy(6, 3);
            }
            if (this.currentTime < 510 && this.currentTime > 300) {
                this.spawnDefaultEnemy(3, 4);
            }
            if (this.currentTime < 660 && this.currentTime > 300) {
                this.spawnDefaultEnemy(2, 5);
                this.spawnDefaultEnemy(2, 6);
            }
            if (this.currentTime < 510 && this.currentTime > 355) {
                this.spawnDefaultEnemy(3, 7);
            }
            if (this.currentTime < 660 && this.currentTime > 330) {
                this.spawnDefaultEnemy(3, 8);
            }
            if (this.currentTime < 660 && this.currentTime > 455) {
                this.spawnDefaultEnemy(3, 9);
            }
            if (this.currentTime < 660 && this.currentTime > 570) {
                this.spawnDefaultEnemy(6, 10);
            }
            if (this.currentTime < 840 && this.currentTime > 660) {
                this.spawnDefaultEnemy(12, 11);
            }
            if (this.currentTime < 840 && this.currentTime > 720) {
                this.spawnDefaultEnemy(2, 12);
                this.spawnDefaultEnemy(2, 13);
            }
            if (this.currentTime < 960 && this.currentTime > 840) {
                this.spawnDefaultEnemy(6, 14);
                this.spawnDefaultEnemy(6, 15);
            }
            if (this.currentTime < 1140 && this.currentTime > 945) {
                this.spawnDefaultEnemy(2, 16);
                this.spawnDefaultEnemy(2, 17);
                this.spawnDefaultEnemy(2, 18);
                this.spawnDefaultEnemy(2, 19);
                this.spawnDefaultEnemy(2, 20);
            }
            if (this.currentTime < 1140 && this.currentTime > 1080) {
                this.spawnDefaultEnemy(2, 21);
            }
            if (this.currentTime < 1140 && this.currentTime > 1200) {
                this.spawnDefaultEnemy(3, 22);
                this.spawnDefaultEnemy(3, 23);
            }
            if (this.currentTime < 1200 && this.currentTime > 1380) {
                this.spawnDefaultEnemy(6, 24);
            }
            if (this.currentTime > 1380) {
                this.spawnTimer = 5;
                this.endlessSpawn();
            }
            this.timer = this.spawnTimer;
        }
    };
    var EnemyManager_1;
    __decorate([
        property(cc.Canvas)
    ], EnemyManager.prototype, "canvas", void 0);
    __decorate([
        property(cc.Node)
    ], EnemyManager.prototype, "gameplay", void 0);
    __decorate([
        property(cc.Node)
    ], EnemyManager.prototype, "player", void 0);
    __decorate([
        property(Array(cc.Prefab))
    ], EnemyManager.prototype, "enemyPrefab", void 0);
    EnemyManager = EnemyManager_1 = __decorate([
        ccclass
    ], EnemyManager);
    return EnemyManager;
}(cc.Component));
exports.default = EnemyManager;

cc._RF.pop();