// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MightyStone extends Item {
  static instance: MightyStone;
  @property(cc.Float)
  damageRate: number = 10;
  currentLevel = this.level;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    MightyStone.instance = this;
    this.itemOnLoad();
    this.description = "Gain 10% damage.";
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Gain 15% damage.";
          this.isEquiped = true;
          this.loadStats();
          GameController.instance.addEquipedItem(this);
          break;
        case 2:
          this.description = "Gain 20% damage.";
          this.updateStats(5);
          break;
        case 3:
          this.description = "Gain 25% damage.";
          this.updateStats(5);
          break;
        case 4:
          this.description = "Gain 30% damage.";
          this.updateStats(5);
          break;
        case 5:
          this.updateStats(5);
          break;
        default:
          break;
      }
    }
  }
  loadStats() {
    this.overallStats.increaseAttackRate(this.damageRate);
  }
  updateStats(additionDamageRate: number) {
    this.overallStats.increaseAttackRate(additionDamageRate);
  }

  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
  }
}
