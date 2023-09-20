// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import EnemyController from "../Enemy/EnemyController";
import Weapon from "./Weapon";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpiderCooking extends Weapon {
  // LIFE-CYCLE CALLBACKS:

  currentLevel = this.level;

  onLoad() {
    this.weaponOnLoad();
    this.description =
      "Create an area of miasma around, dealing slow damage to enemies inside.";
    this.node.zIndex = 1;
    this.node.getComponent(cc.Sprite).enabled = false;
    this.node.getComponent(cc.CircleCollider).enabled = false;
  }
  onCollisionStay(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 1) {
      let damage =
        this.baseDamage + (this.baseDamage * this.resultDamagePercentage) / 100;
      other.node
        .getComponent(EnemyController)
        .takeDamageWithTick(damage, this.attackSpeed);
    }
  }
  updateStats(
    damagePercentage: number,
    attackSpeedPercentage: number,
    weaponScalePercentage: number
  ) {
    this.damagePercentage += damagePercentage;
    this.attackSpeedPercentage += attackSpeedPercentage;
    this.node.scale += weaponScalePercentage / 100;
    this.onStatChange();
    // this.node.scale = this.resultWeaponScalePercentage;
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Increase area by 15%.";
          this.isEquiped = true;
          this.node.getComponent(cc.Sprite).enabled = true;
          this.node.getComponent(cc.CircleCollider).enabled = true;
          GameController.instance.addEquipedWeapon(this);
          break;
        case 2:
          this.description = "Increase damage by 30%.";
          this.updateStats(0, 0, 15);
          break;
        case 3:
          this.description = "Increase area by 25%.";
          this.updateStats(30, 0, 0);
          break;
        case 4:
          this.description = "Increase frequency of hits by 20%.";
          this.updateStats(0, 0, 25);
          break;
        case 5:
          this.description = "Increase damage by 30%.";
          this.updateStats(0, 20, 0);
          break;
        case 6:
          this.description = "Increase damage by 30%.";
          this.updateStats(0, 30, 0);
          break;
        case 7:
          this.updateStats(0, 30, 0);
          break;
        default:
          break;
      }
    }
    return true;
  }
  start() {}

  update(dt) {
    this.onLevelUp();
    if (!this.isEquiped) return;
    if (Utils.isPause) {
      this.node.getComponent(cc.Animation).pause();
      return;
    }
    this.node.getComponent(cc.Animation).resume();
  }
}
