// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import ProjectilePooling from "../Manager/ProjectilePooling";
import EnemyDetector from "../Player/EnemyDetector";
import Projectile from "./Projectile";
import Weapon from "./Weapon";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bow extends Weapon {
  static instance: Bow;
  @property(cc.Prefab)
  arrow: cc.Prefab = null;
  @property(cc.Node)
  player: cc.Node = null;
  @property(cc.Node)
  parent: cc.Node = null;
  @property(cc.AudioClip)
  shootSound: cc.AudioClip = null;
  timer: number;
  hitLimit: number = 1;
  currentLevel = this.level;
  onLoad() {
    this.weaponOnLoad();
    Bow.instance = this;
    this.baseAS = this.attackSpeed;
    this.timer = 0;
    let initCount = 9;
    this.description = "Fires rapid tears at random targets.";
    for (let i = 0; i < initCount; ++i) {
      let arrow = cc.instantiate(this.arrow);
      arrow.parent = this.node.parent.parent;
      ProjectilePooling.instance.arrowPool.put(arrow);
    }
  }

  start() {}
  spawnArrow(target: cc.Node) {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.shootSound, false, 1);
    let arrow: cc.Node = null;
    if (ProjectilePooling.instance.arrowPool.size() > 0) {
      arrow = ProjectilePooling.instance.arrowPool.get();
    } else {
      arrow = cc.instantiate(this.arrow);
    }
    arrow.opacity = 0;
    cc.tween(arrow).to(0.05, { opacity: 255 }).start();
    arrow.parent = this.parent;
    arrow
      .getComponent(Projectile)
      .set(
        this.resultDamagePercentage,
        this.baseDamage,
        this.resultWeaponScalePercentage,
        this.hitLimit,
        target,
        this.player.position
      );
  }
  shootArrowAtEnemy() {
    if (this.timer < 0) {
      this.timer = this.attackSpeed;
      var target1 = EnemyDetector.instance.enemyList[0];

      this.spawnArrow(target1);
    }
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Increare damage by 20%";
          this.isEquiped = true;
          GameController.instance.addEquipedWeapon(this);
          break;
        case 2:
          this.description = "Reduce time between attacks by 20%";
          this.updateStats(20, 0, 0, 0, 0);
          break;
        case 3:
          this.description = "Reduce time between attacks by 20%";
          this.updateStats(0, 0, 20, 0, 0);
          break;
        case 4:
          this.description = "Increare damage by 30%";
          this.updateStats(0, 0, 20, 0, 0);
          break;
        case 5:
          this.description = "Reduce time between attacks by 20%";
          this.updateStats(30, 0, 0, 0, 0);
          break;
        case 6:
          this.description = "Increare damage by 30%";
          this.updateStats(0, 0, 20, 0, 0);
          break;
        case 7:
          this.updateStats(30, 0, 0, 0, 0);
          break;
        default:
          break;
      }
    }
  }
  updateStats(
    damagePercentage: number,
    baseDamage: number,
    attackSpeedPercentage: number,
    weaponScalePercentage: number,
    hitLimitBonus: number
  ) {
    this.damagePercentage += damagePercentage;
    this.baseDamage += baseDamage;
    this.attackSpeedPercentage += attackSpeedPercentage;
    this.weaponScalePercentage += weaponScalePercentage;
    this.hitLimit += hitLimitBonus;
    this.onStatChange();
  }

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.timer -= dt;
    this.shootArrowAtEnemy();
  }
}
