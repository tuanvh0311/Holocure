// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Movement from "../Controller/Movement";
import Utils from "../Controller/Utils";
import EnemyController from "../Enemy/EnemyController";
import ProjectilePooling from "../Manager/ProjectilePooling";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Projectile extends cc.Component {
  @property(cc.Float)
  damage = 20;
  @property(cc.Float)
  weaponScale = 1;
  @property(cc.Float)
  travelSpeed = 400;
  @property(cc.Float)
  hitLimit = 1;
  @property(cc.Boolean)
  isShootingAtTarget = true;
  baseDamange: number;
  baseScale: number;
  damagePercentage: number;
  weaponScalePercentage: number;
  directionVector: cc.Vec2;
  angle: number;
  lock: boolean = false;
  target: cc.Node = null;
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 1) {
      other.node.getComponent(EnemyController).takeDamage(this.damage);
      this.hitLimit -= 1;
    }
  }
  putBackToPool() {
    var player = this.node.parent.getChildByName("PlayerBase");
    var distanceX = (player.x - this.node.x) * (player.x - this.node.x);
    var distanceY = (player.y - this.node.y) * (player.y - this.node.y);
    var distance = Math.sqrt(distanceX + distanceY);
    if (this.hitLimit <= 0) {
      ProjectilePooling.instance.putBackToPool(this.node);
    }
    if (distance > 1200) {
      ProjectilePooling.instance.putBackToPool(this.node);
    }
  }
  moveToTarget(target: cc.Node, dt: number) {
    if (this.isShootingAtTarget) {
      this.target = target;
    }
    if (target == null && !this.lock) {
      this.directionVector = Movement.instance.directionVector.normalize();
      this.directionVector = cc.v2(
        this.directionVector.x + Utils.random(-0.1, 0.1),
        this.directionVector.y + Utils.random(-0.1, 0.1)
      );

      this.node.angle =
        Math.atan2(this.directionVector.y, this.directionVector.x) *
        (180 / Math.PI);
      this.lock = true;
    }
    if (target != null && !this.lock) {
      this.lock = true;

      var deltaX = this.target.x - this.node.x;
      var deltaY = this.target.y - this.node.y;
      this.directionVector = cc.v2(deltaX, deltaY).normalize();
      this.node.angle =
        Math.atan2(this.directionVector.y, this.directionVector.x) *
        (180 / Math.PI);
    }
    this.node.x += this.directionVector.normalize().x * this.travelSpeed * dt;
    this.node.y += this.directionVector.normalize().y * this.travelSpeed * dt;
  }

  updateStats() {
    this.damage =
      (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
    this.weaponScale =
      (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
    this.node.scale = this.weaponScale;
  }
  set(
    damagePercentage: number,
    bonusDamage: number,
    weaponScalePercentage: number,
    hitLimit: number,
    target: cc.Node,
    position: cc.Vec3
  ) {
    this.baseDamange = bonusDamage;
    this.damagePercentage = damagePercentage;
    this.weaponScalePercentage = weaponScalePercentage;
    this.target = target;
    this.node.position = position;
    this.hitLimit = hitLimit;
    this.lock = false;
    this.updateStats();
  }
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.zIndex = 10001;
    this.baseDamange = this.damage;
    this.baseScale = this.weaponScale;
    this.damagePercentage = 0;
    this.weaponScalePercentage = 0;
  }

  start() {}

  update(dt) {
    if (Utils.isPause) {
      return;
    }
    this.moveToTarget(this.target, dt);
    this.putBackToPool();
  }
}
