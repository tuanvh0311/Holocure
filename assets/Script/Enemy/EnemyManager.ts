import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import EnemyController from "./EnemyController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyManager extends cc.Component {
  static instance: EnemyManager;
  @property(cc.Canvas)
  canvas: cc.Canvas = null;
  @property(cc.Node)
  gameplay: cc.Node = null;
  @property(cc.Node)
  player: cc.Node = null;
  @property(Array(cc.Prefab))
  enemyPrefab: Array<cc.Prefab> = new Array<cc.Prefab>();
  spawnTimer: number = 2;
  enemyPool: Array<cc.NodePool> = new Array<cc.NodePool>();
  batPool: cc.NodePool = null;
  ghostPool: cc.NodePool = null;
  povSize: cc.Vec2 = null;
  spawnArea: cc.Vec2 = null;
  spawnAreaMax: cc.Vec2 = null;
  spawnRadius: number;
  spawnAmount: number;
  timer: number = 3;
  currentTime: number = 0;

  onLoad() {
    EnemyManager.instance = this;

    this.loadPool();
    this.povSize = cc.v2(1000, 1000);
    this.timer = 5;
    this.spawnAmount = 5;
    this.spawnRadius = 200;
    this.spawnArea = cc.v2(
      this.povSize.x + this.spawnRadius,
      this.povSize.y + this.spawnRadius
    );
  }
  loadPool() {
    for (let i = 0; i < this.enemyPrefab.length; i++) {
      var pool = new cc.NodePool();
      let initCount = 20;
      for (let j = 0; j < initCount; j++) {
        var enemy = cc.instantiate(this.enemyPrefab[i]);
        pool.put(enemy);
      }
      this.enemyPool.push(pool);
    }
  }
  spawnEnemy(
    spawnAmount: number,
    speed: number,
    maxHp: number,
    scale: number,
    damage: number,
    expAmount: number,
    enemyIndex: number
  ) {
    for (let i = 0; i < spawnAmount; i++) {
      let enemy: cc.Node = null;
      if (this.enemyPool[enemyIndex].size() > 0) {
        enemy = this.enemyPool[enemyIndex].get();
      } else {
        enemy = cc.instantiate(this.enemyPrefab[enemyIndex]);
      }
      enemy
        .getComponent(EnemyController)
        .setter(speed, maxHp, scale, damage, expAmount);
      enemy.parent = this.gameplay;
      enemy.position = this.generateRandomPosition();
    }
  }
  spawnDefaultEnemy(spawnAmount: number, enemyIndex: number) {
    for (let i = 0; i < spawnAmount; i++) {
      let enemy: cc.Node = null;
      if (this.enemyPool[enemyIndex].size() > 0) {
        enemy = this.enemyPool[enemyIndex].get();
      } else {
        enemy = cc.instantiate(this.enemyPrefab[enemyIndex]);
      }
      enemy.getComponent(EnemyController).resetStat();

      enemy.parent = this.gameplay;
      enemy.position = this.generateRandomPosition();
    }
  }
  endlessSpawn() {
    let hourTimer = Math.floor(GameController.instance.timer / 3600);
    let minuteTimer = Math.floor(
      (GameController.instance.timer - 3600 * hourTimer) / 60
    );
    let a =
      minuteTimer <= 23 ? 37 * hourTimer : 37 * hourTimer + (minuteTimer - 23);
    let ATK = 15 + 2 * a;
    let SPD = 1 + 0.12 * a < 3 ? 1 + 0.12 * a : 3;
    let HP = 5000 + 5000 * 0.05 * a;

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
  }
  start() {}
  generateRandomPosition() {
    var position = cc.Vec3.ZERO;
    position.x = this.player.x;
    position.y = this.player.y;
    var f = Utils.random(0, 1) > 0.5 ? -1 : 1;
    if (Utils.random(0, 1) > 0.5) {
      position.x += Utils.random(-this.spawnArea.x, this.spawnArea.x);
      position.y += this.spawnArea.y * f;
    } else {
      position.y += Utils.random(-this.spawnArea.y, this.spawnArea.y);
      position.x += this.spawnArea.x * f;
    }
    return position;
  }
  putBackToPool(node: cc.Node) {
    if (!node) return;
    for (let i = 0; i < this.enemyPrefab.length; i++) {
      if (node.name == this.enemyPrefab[i].name) {
        this.enemyPool[i].put(node);
      }
    }
  }
  update(dt) {
    this.currentTime = GameController.instance.timer;
    if (Utils.isPause) return;
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
  }
}
