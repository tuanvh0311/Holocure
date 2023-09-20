// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../Controller/Utils";
import EnemyController from "../Enemy/EnemyController";
import ProjectilePooling from "../Manager/ProjectilePooling";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ThrowableProjectile extends cc.Component {
  velocity: cc.Vec2 = cc.Vec2.ZERO;
  @property(cc.SpriteFrame)
  sprite: cc.SpriteFrame = null;
  speed = 1000;
  @property(cc.Float)
  damage = 20;
  @property(cc.Float)
  weaponScale = 1;
  @property(cc.Float)
  duration = 3;
  @property(cc.AudioClip)
  lavaLand: cc.AudioClip = null;
  targetPos: cc.Vec3 = null;
  dt: number = 0;
  baseDamange: number;
  baseScale: number;
  baseDuration: number;
  damagePercentage: number;
  weaponScalePercentage: number;
  durationPercentage: number;
  directionVector: cc.Vec2;
  isLanded: boolean = false;
  timer = 100;
  interval = 0.01;
  time = this.interval;
  lock: boolean = false;
  curveY: number = 0;
  travelTime: number = 0;
  currentTime: number = 0;
  previous: cc.Node = null;
  trailList: Array<cc.Node> = new Array<cc.Node>();

  onCollisionStay(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 1) {
      other.node
        .getComponent(EnemyController)
        .takeDamageWithTick(this.damage, 0.5);
    }
  }
  set(
    damagePercentage: number,
    baseDamage: number,
    weaponScalePercentage: number,
    durationPercentage: number,
    target: cc.Vec3,
    position: cc.Vec3
  ) {
    this.baseDamange = baseDamage;
    this.damagePercentage = damagePercentage;
    this.weaponScalePercentage = weaponScalePercentage;
    this.durationPercentage = durationPercentage;
    this.targetPos = target;
    this.node.position = position;
    this.node.getComponent(cc.Animation).stop();
    this.node.getComponent(cc.Sprite).spriteFrame = this.sprite;
    this.isLanded = false;
    this.lock = false;
    this.timer = 100;
    this.currentTime = 0;
    this.node.getComponent(cc.CircleCollider).enabled = false;
    this.updateStats();
  }
  updateStats() {
    this.damage =
      (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
    this.weaponScale =
      (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
    this.duration =
      -(this.durationPercentage / 100) * this.baseDuration + this.baseDuration;
  }

  onLand() {
    if (
      (!this.isLanded && this.distanceToTarget() < 50) ||
      (!this.isLanded && this.currentTime > this.travelTime)
    ) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.lavaLand, false, 1);
      this.node.zIndex = 1;
      this.trailList.forEach((element) => {
        ProjectilePooling.instance.putBackToPool(element);
      });
      this.trailList.length = 0;
      this.node.getComponent(cc.Animation).play("MollySpread");
      this.node.scale = this.weaponScale / 2;
      cc.tween(this.node).to(0.42, { scale: this.weaponScale }).start();
      this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
      this.node.getComponent(cc.CircleCollider).enabled = true;
      this.isLanded = true;
    }
    if (
      this.isLanded &&
      !this.node.getComponent(cc.Animation).getAnimationState("MollySpread")
        .isPlaying &&
      !this.node.getComponent(cc.Animation).getAnimationState("MollyOnGround")
        .isPlaying
    ) {
      this.timer = this.duration;
      this.node.getComponent(cc.Animation).play("MollyOnGround");
    }
  }
  distanceToTarget() {
    var distanceX =
      (this.targetPos.x - this.node.x) * (this.targetPos.x - this.node.x);
    var distanceY =
      (this.targetPos.y - this.node.y) * (this.targetPos.y - this.node.y);
    var distance = Math.sqrt(distanceX + distanceY);
    return distance;
  }
  onLoad() {
    this.node.getComponent(cc.CircleCollider).enabled = false;
    this.node.scale = 0.3;
    this.node.zIndex = 10001;
    this.baseDamange = this.damage;
    this.baseDuration = this.duration;
    this.baseScale = this.weaponScale;
    this.damagePercentage = 0;
    this.weaponScalePercentage = 0;
    this.durationPercentage = 0;
  }
  start() {}
  lockTarget(dt: number) {
    if (this.isLanded) return;
    if (this.lock) return;
    this.lock = true;
    var deltaX = this.targetPos.x - this.node.x;
    var deltaY = this.targetPos.y - this.node.y;
    this.directionVector = cc.v2(deltaX, deltaY);
    this.travelTime = this.distanceToTarget() / this.speed;
    if (this.travelTime > 0.5) this.travelTime = 0.5;
    // this.node.x += this.directionVector.normalize().x * this.speed * dt;
    // this.node.y += this.directionVector.normalize().y * this.speed * dt;
    this.velocity = cc.v2(
      this.directionVector.normalize().x * this.speed,
      this.directionVector.normalize().y * this.speed + 150
    );
    this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(
      this.velocity.x,
      this.velocity.y
    );
  }
  moveNode(dt) {
    if (this.isLanded) return;
    this.node.scale = 0.3;
    this.addTrail(dt);
    this.curveY = dt * 1000;
    this.velocity.y -= this.curveY;
    this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(
      this.velocity.x * dt * 50,
      this.velocity.y * dt * 50
    );
    this.node.angle =
      Math.atan2(this.velocity.y, this.velocity.x) * (180 / Math.PI);
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
      this.node.getComponent(cc.Animation).pause();
      this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
      return;
    }
    this.node.getComponent(cc.Animation).resume();
    if (this.targetPos == null) return;
    this.timer -= dt;
    this.currentTime += dt;
    if (this.timer < 0) {
      ProjectilePooling.instance.putBackToPool(this.node);
    }

    this.moveNode(dt);
    this.lockTarget(dt);

    this.onLand();
  }
}
