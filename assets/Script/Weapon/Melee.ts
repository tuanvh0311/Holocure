// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import EnemyController from "../Enemy/EnemyController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Melee extends cc.Component {
  static instance: Melee;
  @property(cc.Float)
  damage = 20;
  @property(cc.Float)
  weaponScaleX = 1;
  collider: cc.BoxCollider = null;
  @property(cc.Float)
  weaponScaleY = 1;
  baseDamange: number;
  baseScale: number;
  damagePercentage: number;

  weaponScalePercentage: number;
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 1) {
      other.node.getComponent(EnemyController).takeDamage(this.damage);
    }
  }
  set(
    BaseDamage: number,
    damagePercentage: number,
    weaponScalePercentage: number
  ) {
    this.damage = BaseDamage;
    this.damagePercentage = damagePercentage;
    this.weaponScalePercentage = weaponScalePercentage;
    this.updateStats();
  }
  updateStats() {
    this.damage =
      (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
    this.weaponScaleX =
      (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
    this.weaponScaleY =
      Math.abs((this.weaponScalePercentage / 100) * this.baseScale) +
      Math.abs(this.baseScale);
    this.node.scaleX = this.weaponScaleX;
    this.node.scaleY = this.weaponScaleY;
  }
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Melee.instance = this;
    this.node.zIndex = 2;
    this.collider = this.node.getComponent(cc.BoxCollider);
    this.baseDamange = this.damage;
    this.baseScale = this.weaponScaleX;
    this.damagePercentage = 0;
    this.weaponScalePercentage = 0;
  }

  start() {}

  // update (dt) {}
}
