// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import objectPooling from "../Manager/ObjectPooling";

import OverallStats from "../Player/OverallStats";
import PlayerController from "../Player/PlayerController";
import EnemyManager from "./EnemyManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyController extends cc.Component {
  @property(cc.Float)
  speed = 0.5;
  @property(cc.Float)
  maxHp = 20;
  @property(cc.Float)
  scale = 1;
  currentHp = 20;
  @property(cc.Float)
  damage = 2;
  @property(cc.Integer)
  expDropAmount: number = 8;
  @property(cc.AudioClip)
  hitSound: cc.AudioClip = null;
  damageTick: number = 0;
  distance: number;
  isFlip: boolean;
  player: cc.Node = null;
  moveVec: cc.Vec2;
  deltaX: number;
  isKilled: boolean;
  gainKilled: boolean = false;
  isInRange = false;
  deltaTime: number;
  takeDamageTick: number;
  onLoad() {
    this.isFlip = false;
    this.isInRange = false;
    this.player = this.node.parent.getChildByName("PlayerBase");
    this.node.zIndex = 30000;
    this.moveVec = cc.Vec2.ZERO;
    this.currentHp = this.maxHp;
    this.deltaX = 0;
  }
  setter(
    speed: number,
    maxHp: number,
    scale: number,
    damage: number,
    expDropAmount: number
  ) {
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
  }
  resetStat() {
    this.currentHp = this.maxHp;
    this.getComponent(cc.Collider).enabled = true;
    this.node.opacity = 255;
    this.isKilled = false;
    this.gainKilled = false;
    this.isInRange = false;
  }
  takeDamage(damage: number) {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.hitSound, false, 0.5);
    var crit = OverallStats.instance.getCritChance() / 100;
    if (Math.random() <= crit) {
      damage =
        (damage * (OverallStats.instance.getCritDamageRate() + 150)) / 100;
    }
    this.currentHp -= damage;
    this.node.getChildByName("OnHitFrame").active = true;
    this.scheduleOnce(function () {
      this.node.getChildByName("OnHitFrame").active = false;
    }, 0.025);
  }
  takeDamageWithTick(damage: number, tickRate: number) {
    if (this.takeDamageTick > 0) return;
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.hitSound, false, 0.5);
    this.takeDamageTick = tickRate;
    var crit = OverallStats.instance.getCritChance() / 100;
    if (Math.random() <= crit) {
      damage =
        (damage * (OverallStats.instance.getCritDamageRate() + 150)) / 100;
    }
    this.currentHp -= damage;
    this.node.getChildByName("OnHitFrame").active = true;
    this.scheduleOnce(function () {
      this.node.getChildByName("OnHitFrame").active = false;
    }, 0.025);
  }

  onCollisionStay(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 0 && this.damageTick < 0) {
      this.damageTick = 0.5;
      PlayerController.instance.takeDamage(this.damage);
    }
  }

  start() {}
  moveToPlayer(dt: number) {
    if (this.currentHp > 0) {
      var deltaX = this.player.x - this.node.x;
      var deltaY = this.player.y - this.node.y;
      let normalizedDelta = cc.v2(deltaX, deltaY).normalize();
      let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (length > 2) {
        if (normalizedDelta.x > 0) {
          this.isFlip = false;
          this.node.scaleX = this.scale;
        } else {
          this.isFlip = true;
          this.node.scaleX = -this.scale;
        }
      }

      this.node.x += normalizedDelta.x * this.speed * 175 * dt;
      this.node.y += normalizedDelta.y * this.speed * 175 * dt;
    }
  }
  dropExp() {
    objectPooling.instance.generateExp(this.node, this.expDropAmount);
  }
  dropFood() {
    objectPooling.instance.generateFood(this.node);
  }
  dropCoin() {
    let countAmount = Utils.randomFloor(10, 50);
    objectPooling.instance.generateCoin(this.node, countAmount);
  }
  dropRainbowExp() {
    objectPooling.instance.generateMagnet(this.node);
  }
  calculateDistance() {
    var distanceX =
      (this.player.x - this.node.x) * (this.player.x - this.node.x);
    var distanceY =
      (this.player.y - this.node.y) * (this.player.y - this.node.y);
    this.distance = Math.sqrt(distanceX + distanceY);
  }
  onEnemyKill(dt) {
    if (this.currentHp <= 0) {
      this.isKilled = true;
      if (this.isFlip) {
        this.node.x += 150 * dt;
        this.node.opacity -= 500 * dt;
      } else {
        this.node.x -= 150 * dt;
        this.node.opacity -= 500 * dt;
      }
      if (this.isKilled && !this.gainKilled) {
        GameController.instance.gainKill();
        let random = Math.random();
        if (random < 1 / 2000) {
          this.dropRainbowExp();
        } else if (random < 1 / 200) {
          this.dropFood();
        } else if (random < 1 / 90) {
          this.dropCoin();
        } else this.dropExp();
        this.gainKilled = true;
        this.node.getComponent(cc.PolygonCollider).enabled = false;
        setTimeout(() => {
          EnemyManager.instance.putBackToPool(this.node);
        }, 300);
      }
    }
  }

  update(dt) {
    if (Utils.isPause) {
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
  }
}
