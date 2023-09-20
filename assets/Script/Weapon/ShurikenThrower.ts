// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import Item from "../Item/Item";
import ProjectilePooling from "../Manager/ProjectilePooling";
import OrbitProjectile from "./OrbitProjectile";
import Weapon from "./Weapon";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShurikenThrower extends Weapon {
  static instance: ShurikenThrower;
  @property(cc.Prefab)
  shuriken: cc.Prefab = null;
  @property(cc.Node)
  player: cc.Node = null;
  @property(cc.Node)
  parent: cc.Node = null;
  timer: number;
  durationPercentage: number;
  hitLimit: number = 5;
  baseHitLimit: number = this.hitLimit;
  spawnAmount: number = 3;
  shurikenList: Array<cc.Node> = new Array<cc.Node>();
  currentLevel = this.level;
  onLoad() {
    ShurikenThrower.instance = this;
    this.durationPercentage = 0;
    this.weaponOnLoad();
    this.timer = 0;
    let initCount = 10;
    this.description = "Repels targets with orbiting shurikens.";
    for (let i = 0; i < initCount; ++i) {
      let shuriken = cc.instantiate(this.shuriken);
      shuriken.parent = this.node.parent.parent;
      ProjectilePooling.instance.shurikenPool.put(shuriken);
    }
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Add 1 additional shuriken.";
          this.isEquiped = true;
          GameController.instance.addEquipedWeapon(this);
          break;
        case 2:
          this.description =
            "Increase damage by 30% and increase duration by 1 second.";

          this.spawnAmount += 1;
          break;
        case 3:
          this.description = "Add 1 additional shuriken.";
          this.updateStats(30, 0, 0, 0, 0, 50);
          break;
        case 4:
          this.description = "Increase Damage by 40%.";
          this.spawnAmount += 1;
          break;
        case 5:
          this.description = "Add 1 additional shuriken.";
          this.updateStats(40, 0, 0, 0, 0, 0);
          break;
        case 6:
          this.description = "Increase damage by 40%.";
          this.spawnAmount += 1;
          break;
        case 7:
          this.updateStats(40, 0, 0, 0, 0, 0);
          break;
        default:
          break;
      }
    }
  }
  spawnShuriken(angleDelta: number) {
    let shuriken: cc.Node = null;
    if (ProjectilePooling.instance.shurikenPool.size() > 0) {
      shuriken = ProjectilePooling.instance.shurikenPool.get();
    } else {
      shuriken = cc.instantiate(this.shuriken);
    }

    shuriken.opacity = 0;
    cc.tween(shuriken).to(0.05, { opacity: 255 }).start();
    shuriken.parent = this.parent;

    shuriken
      .getComponent(OrbitProjectile)
      .setStats(
        this.resultDamagePercentage,
        this.baseDamage,
        this.resultWeaponScalePercentage,
        this.durationPercentage,
        this.player,
        angleDelta
      );
    this.shurikenList.push(shuriken);
  }
  updateStats(
    damagePercentage: number,
    baseDamage: number,
    hitLimit: number,
    attackSpeedPercentage: number,
    weaponScalePercentage: number,
    durationPercentage: number
  ) {
    this.damagePercentage += damagePercentage;
    this.baseDamage += baseDamage;
    this.hitLimit += hitLimit;
    this.attackSpeedPercentage += attackSpeedPercentage;
    this.weaponScalePercentage += weaponScalePercentage;
    this.durationPercentage += durationPercentage;
    this.onStatChange();
  }
  throwShuriken() {
    if (this.timer < 0) {
      this.timer = this.attackSpeed;
      this.hitLimit = this.baseHitLimit * this.spawnAmount;
      for (let i = 0; i < this.spawnAmount; i++) {
        var angleDelta = (360 / this.spawnAmount) * i * (Math.PI / 180);
        this.spawnShuriken(angleDelta);
      }
    }
    this.shurikenList = this.shurikenList.filter(
      (item) => item.getComponent(OrbitProjectile).isInPool !== true
    );
  }
  onNoHitLimit() {
    if (this.hitLimit <= 0) {
      this.shurikenList.forEach((element) => {
        element.getComponent(OrbitProjectile).forceToPutBack();
      });
    }
  }

  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.timer -= dt;
    this.throwShuriken();
    this.onNoHitLimit();
  }
}
