// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../Controller/Utils";
import ProjectilePooling from "../Manager/ProjectilePooling";
import Projectile from "../Weapon/Projectile";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpiralProjectile extends Projectile {
  @property(cc.Float)
  duration: number = 3;
  baseDuration: number = this.duration;
  durationPercentage: number = 0;
  currentTime: number = 0;
  @property(cc.Float)
  startRadius: number = 100;
  currentRadius: number = 100;
  @property(cc.Float)
  maxRadius: number = 400;
  angleDelta: number = 0;
  pivot: cc.Node = null;
  interval = 0.01;
  time = this.interval;
  previous: cc.Node = null;
  trailList: Array<cc.Node> = new Array<cc.Node>();
  start() {}
  onLoad(): void {
    this.node.zIndex = 10000;
    this.baseDamange = this.damage;
    this.baseScale = this.weaponScale;
    this.damagePercentage = 0;
    this.weaponScalePercentage = 0;
    this.currentRadius = this.startRadius;
  }
  updateStats() {
    this.damage =
      (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
    this.weaponScale =
      (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
    this.duration =
      this.baseDuration + (this.durationPercentage / 100) * this.baseDuration;
    this.node.scale = this.weaponScale;
  }

  setStats(
    damagePercentage: number,
    bonusDamage: number,
    weaponScalePercentage: number,
    hitLimit: number,
    durationPercentage: number,
    pivot: cc.Node
  ) {
    this.time = this.interval;
    this.angleDelta = 0;
    this.currentRadius = this.startRadius;
    this.currentTime = 0;
    this.baseDamange = bonusDamage;
    this.damagePercentage = damagePercentage;
    this.weaponScalePercentage = weaponScalePercentage;
    this.pivot = pivot;
    this.hitLimit = hitLimit;
    this.durationPercentage = durationPercentage;
    this.lock = false;
    this.updateStats();
  }

  putBackToPool() {
    if (this.hitLimit <= 0) {
      this.trailList.forEach((element) => {
        ProjectilePooling.instance.putBackToPool(element);
      });
      this.trailList.length = 0;
      ProjectilePooling.instance.putBackToPool(this.node);
    }
    if (this.currentTime >= this.duration) {
      this.trailList.forEach((element) => {
        ProjectilePooling.instance.putBackToPool(element);
      });
      this.trailList.length = 0;
      ProjectilePooling.instance.putBackToPool(this.node);
    }
  }
  spinAround(dt: number) {
    this.addTrail(dt);
    this.node.angle += dt * 1500;
    this.angleDelta -= dt * 4;
    this.currentRadius += dt * 90;
    if (this.currentRadius > this.maxRadius)
      this.currentRadius = this.maxRadius;
    this.node.x = this.pivot.x + this.currentRadius * Math.cos(this.angleDelta);
    this.node.y = this.pivot.y + this.currentRadius * Math.sin(this.angleDelta);
  }
  addTrail(dt) {
    if (this.time > 0) this.time -= dt;
    else {
      this.time = this.interval;
      let clone: cc.Node = null;
      clone = ProjectilePooling.instance.trailPool.get();

      if (clone == null) {
        clone = new cc.Node("Trail");
      }

      this.trailList.push(clone);
      clone.parent = this.node.parent;
      clone.scale = this.node.scale;
      clone.opacity = 200;
      clone.angle = this.node.angle;
      clone.zIndex = 9999;

      clone.position = cc.v3(this.node.x, this.node.y);
      if (clone.getComponent(cc.Sprite) != null)
        clone.getComponent(cc.Sprite).spriteFrame = this.node.getComponent(
          cc.Sprite
        ).spriteFrame;
      else
        clone.addComponent(cc.Sprite).spriteFrame = this.node.getComponent(
          cc.Sprite
        ).spriteFrame;
      clone.setContentSize(this.node.getContentSize());
      cc.tween(clone).to(0.08, { opacity: 0 }).start();
    }
  }
  update(dt) {
    if (Utils.isPause) {
      return;
    }
    this.currentTime += dt;
    this.spinAround(dt);
    this.putBackToPool();
  }
}
