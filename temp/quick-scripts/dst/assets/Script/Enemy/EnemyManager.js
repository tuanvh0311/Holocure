
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFDeEMscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBME1DO1FBdk1DLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGlCQUFXLEdBQXFCLElBQUksS0FBSyxFQUFhLENBQUM7UUFDdkQsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBUyxHQUF1QixJQUFJLEtBQUssRUFBZSxDQUFDO1FBQ3pELGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBQzlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQXNMMUIsQ0FBQztxQkExTW9CLFlBQVk7SUFzQi9CLDZCQUFNLEdBQU47UUFDRSxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FB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QUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFDRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDMUIsQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FDeEQsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUNILFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0UsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FB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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi9FbmVteUNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogRW5lbXlNYW5hZ2VyO1xuICBAcHJvcGVydHkoY2MuQ2FudmFzKVxuICBjYW52YXM6IGNjLkNhbnZhcyA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lcGxheTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoQXJyYXkoY2MuUHJlZmFiKSlcbiAgZW5lbXlQcmVmYWI6IEFycmF5PGNjLlByZWZhYj4gPSBuZXcgQXJyYXk8Y2MuUHJlZmFiPigpO1xuICBzcGF3blRpbWVyOiBudW1iZXIgPSAyO1xuICBlbmVteVBvb2w6IEFycmF5PGNjLk5vZGVQb29sPiA9IG5ldyBBcnJheTxjYy5Ob2RlUG9vbD4oKTtcbiAgYmF0UG9vbDogY2MuTm9kZVBvb2wgPSBudWxsO1xuICBnaG9zdFBvb2w6IGNjLk5vZGVQb29sID0gbnVsbDtcbiAgcG92U2l6ZTogY2MuVmVjMiA9IG51bGw7XG4gIHNwYXduQXJlYTogY2MuVmVjMiA9IG51bGw7XG4gIHNwYXduQXJlYU1heDogY2MuVmVjMiA9IG51bGw7XG4gIHNwYXduUmFkaXVzOiBudW1iZXI7XG4gIHNwYXduQW1vdW50OiBudW1iZXI7XG4gIHRpbWVyOiBudW1iZXIgPSAzO1xuICBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcblxuICBvbkxvYWQoKSB7XG4gICAgRW5lbXlNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcblxuICAgIHRoaXMubG9hZFBvb2woKTtcbiAgICB0aGlzLnBvdlNpemUgPSBjYy52MigxMDAwLCAxMDAwKTtcbiAgICB0aGlzLnRpbWVyID0gNTtcbiAgICB0aGlzLnNwYXduQW1vdW50ID0gNTtcbiAgICB0aGlzLnNwYXduUmFkaXVzID0gMjAwO1xuICAgIHRoaXMuc3Bhd25BcmVhID0gY2MudjIoXG4gICAgICB0aGlzLnBvdlNpemUueCArIHRoaXMuc3Bhd25SYWRpdXMsXG4gICAgICB0aGlzLnBvdlNpemUueSArIHRoaXMuc3Bhd25SYWRpdXNcbiAgICApO1xuICB9XG4gIGxvYWRQb29sKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteVByZWZhYi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgIGxldCBpbml0Q291bnQgPSAyMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW5pdENvdW50OyBqKyspIHtcbiAgICAgICAgdmFyIGVuZW15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteVByZWZhYltpXSk7XG4gICAgICAgIHBvb2wucHV0KGVuZW15KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5lbXlQb29sLnB1c2gocG9vbCk7XG4gICAgfVxuICB9XG4gIHNwYXduRW5lbXkoXG4gICAgc3Bhd25BbW91bnQ6IG51bWJlcixcbiAgICBzcGVlZDogbnVtYmVyLFxuICAgIG1heEhwOiBudW1iZXIsXG4gICAgc2NhbGU6IG51bWJlcixcbiAgICBkYW1hZ2U6IG51bWJlcixcbiAgICBleHBBbW91bnQ6IG51bWJlcixcbiAgICBlbmVteUluZGV4OiBudW1iZXJcbiAgKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGF3bkFtb3VudDsgaSsrKSB7XG4gICAgICBsZXQgZW5lbXk6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuZW5lbXlQb29sW2VuZW15SW5kZXhdLnNpemUoKSA+IDApIHtcbiAgICAgICAgZW5lbXkgPSB0aGlzLmVuZW15UG9vbFtlbmVteUluZGV4XS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZW15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteVByZWZhYltlbmVteUluZGV4XSk7XG4gICAgICB9XG4gICAgICBlbmVteVxuICAgICAgICAuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcilcbiAgICAgICAgLnNldHRlcihzcGVlZCwgbWF4SHAsIHNjYWxlLCBkYW1hZ2UsIGV4cEFtb3VudCk7XG4gICAgICBlbmVteS5wYXJlbnQgPSB0aGlzLmdhbWVwbGF5O1xuICAgICAgZW5lbXkucG9zaXRpb24gPSB0aGlzLmdlbmVyYXRlUmFuZG9tUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cbiAgc3Bhd25EZWZhdWx0RW5lbXkoc3Bhd25BbW91bnQ6IG51bWJlciwgZW5lbXlJbmRleDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGF3bkFtb3VudDsgaSsrKSB7XG4gICAgICBsZXQgZW5lbXk6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuZW5lbXlQb29sW2VuZW15SW5kZXhdLnNpemUoKSA+IDApIHtcbiAgICAgICAgZW5lbXkgPSB0aGlzLmVuZW15UG9vbFtlbmVteUluZGV4XS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZW15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteVByZWZhYltlbmVteUluZGV4XSk7XG4gICAgICB9XG4gICAgICBlbmVteS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5yZXNldFN0YXQoKTtcblxuICAgICAgZW5lbXkucGFyZW50ID0gdGhpcy5nYW1lcGxheTtcbiAgICAgIGVuZW15LnBvc2l0aW9uID0gdGhpcy5nZW5lcmF0ZVJhbmRvbVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG4gIGVuZGxlc3NTcGF3bigpIHtcbiAgICBsZXQgaG91clRpbWVyID0gTWF0aC5mbG9vcihHYW1lQ29udHJvbGxlci5pbnN0YW5jZS50aW1lciAvIDM2MDApO1xuICAgIGxldCBtaW51dGVUaW1lciA9IE1hdGguZmxvb3IoXG4gICAgICAoR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UudGltZXIgLSAzNjAwICogaG91clRpbWVyKSAvIDYwXG4gICAgKTtcbiAgICBsZXQgYSA9XG4gICAgICBtaW51dGVUaW1lciA8PSAyMyA/IDM3ICogaG91clRpbWVyIDogMzcgKiBob3VyVGltZXIgKyAobWludXRlVGltZXIgLSAyMyk7XG4gICAgbGV0IEFUSyA9IDE1ICsgMiAqIGE7XG4gICAgbGV0IFNQRCA9IDEgKyAwLjEyICogYSA8IDMgPyAxICsgMC4xMiAqIGEgOiAzO1xuICAgIGxldCBIUCA9IDUwMDAgKyA1MDAwICogMC4wNSAqIGE7XG5cbiAgICB0aGlzLnNwYXduRW5lbXkoMSwgU1BELCBIUCwgMS41LCBBVEssIDI1LCAxNSk7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuMywgQVRLLCAyNSwgMTQpO1xuICAgIHRoaXMuc3Bhd25FbmVteSgxLCBTUEQsIEhQLCAxLjUsIEFUSywgMjUsIDkpO1xuICAgIHRoaXMuc3Bhd25FbmVteSgxLCBTUEQsIEhQLCAxLjUsIEFUSywgMjUsIDI0KTtcbiAgICB0aGlzLnNwYXduRW5lbXkoMSwgU1BELCBIUCwgMS41LCBBVEssIDI1LCAxMCk7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuNSwgQVRLLCAyNSwgNSk7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuNSwgQVRLLCAyNSwgNik7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuNSwgQVRLLCAyNSwgMjMpO1xuICAgIHRoaXMuc3Bhd25FbmVteSgxLCBTUEQsIEhQLCAxLjUsIEFUSywgMjUsIDExKTtcbiAgICB0aGlzLnNwYXduRW5lbXkoMSwgU1BELCBIUCwgMS41LCBBVEssIDI1LCAyMik7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuNSwgQVRLLCAyNSwgMTkpO1xuICAgIHRoaXMuc3Bhd25FbmVteSgxLCBTUEQsIEhQLCAxLjUsIEFUSywgMjUsIDIxKTtcbiAgfVxuICBzdGFydCgpIHt9XG4gIGdlbmVyYXRlUmFuZG9tUG9zaXRpb24oKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY2MuVmVjMy5aRVJPO1xuICAgIHBvc2l0aW9uLnggPSB0aGlzLnBsYXllci54O1xuICAgIHBvc2l0aW9uLnkgPSB0aGlzLnBsYXllci55O1xuICAgIHZhciBmID0gVXRpbHMucmFuZG9tKDAsIDEpID4gMC41ID8gLTEgOiAxO1xuICAgIGlmIChVdGlscy5yYW5kb20oMCwgMSkgPiAwLjUpIHtcbiAgICAgIHBvc2l0aW9uLnggKz0gVXRpbHMucmFuZG9tKC10aGlzLnNwYXduQXJlYS54LCB0aGlzLnNwYXduQXJlYS54KTtcbiAgICAgIHBvc2l0aW9uLnkgKz0gdGhpcy5zcGF3bkFyZWEueSAqIGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uLnkgKz0gVXRpbHMucmFuZG9tKC10aGlzLnNwYXduQXJlYS55LCB0aGlzLnNwYXduQXJlYS55KTtcbiAgICAgIHBvc2l0aW9uLnggKz0gdGhpcy5zcGF3bkFyZWEueCAqIGY7XG4gICAgfVxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuICBwdXRCYWNrVG9Qb29sKG5vZGU6IGNjLk5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlQcmVmYWIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChub2RlLm5hbWUgPT0gdGhpcy5lbmVteVByZWZhYltpXS5uYW1lKSB7XG4gICAgICAgIHRoaXMuZW5lbXlQb29sW2ldLnB1dChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IEdhbWVDb250cm9sbGVyLmluc3RhbmNlLnRpbWVyO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMTgwICYmIHRoaXMuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMSwgMCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDMwMCAmJiB0aGlzLmN1cnJlbnRUaW1lID4gMzApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgxLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMzAwICYmIHRoaXMuY3VycmVudFRpbWUgPiAxODApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCAyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMzYwICYmIHRoaXMuY3VycmVudFRpbWUgPiAyNDApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSg2LCAzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNTEwICYmIHRoaXMuY3VycmVudFRpbWUgPiAzMDApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCA0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNjYwICYmIHRoaXMuY3VycmVudFRpbWUgPiAzMDApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCA1KTtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCA2KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNTEwICYmIHRoaXMuY3VycmVudFRpbWUgPiAzNTUpIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCA3KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNjYwICYmIHRoaXMuY3VycmVudFRpbWUgPiAzMzApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCA4KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNjYwICYmIHRoaXMuY3VycmVudFRpbWUgPiA0NTUpIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCA5KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNjYwICYmIHRoaXMuY3VycmVudFRpbWUgPiA1NzApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSg2LCAxMCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDg0MCAmJiB0aGlzLmN1cnJlbnRUaW1lID4gNjYwKSB7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMTIsIDExKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgODQwICYmIHRoaXMuY3VycmVudFRpbWUgPiA3MjApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCAxMik7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMiwgMTMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPCA5NjAgJiYgdGhpcy5jdXJyZW50VGltZSA+IDg0MCkge1xuICAgICAgICB0aGlzLnNwYXduRGVmYXVsdEVuZW15KDYsIDE0KTtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSg2LCAxNSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDExNDAgJiYgdGhpcy5jdXJyZW50VGltZSA+IDk0NSkge1xuICAgICAgICB0aGlzLnNwYXduRGVmYXVsdEVuZW15KDIsIDE2KTtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCAxNyk7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMiwgMTgpO1xuICAgICAgICB0aGlzLnNwYXduRGVmYXVsdEVuZW15KDIsIDE5KTtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCAyMCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDExNDAgJiYgdGhpcy5jdXJyZW50VGltZSA+IDEwODApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCAyMSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDExNDAgJiYgdGhpcy5jdXJyZW50VGltZSA+IDEyMDApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCAyMik7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMywgMjMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPCAxMjAwICYmIHRoaXMuY3VycmVudFRpbWUgPiAxMzgwKSB7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoNiwgMjQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiAxMzgwKSB7XG4gICAgICAgIHRoaXMuc3Bhd25UaW1lciA9IDU7XG4gICAgICAgIHRoaXMuZW5kbGVzc1NwYXduKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLnNwYXduVGltZXI7XG4gICAgfVxuICB9XG59XG4iXX0=