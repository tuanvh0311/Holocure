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
export default class HastePotion extends Item {
  static instance: HastePotion;
  @property(cc.Float)
  hasteRate: number = 5;
  @property(cc.Float)
  speedRate: number = 30;
  currentLevel = this.level;
  onLoad() {
    this.itemOnLoad();
    HastePotion.instance = this;
    this.description = "Increase Haste by 5% and SPD by 30%.";
  }
  loadStats() {
    this.overallStats.increaseHasteRate(this.hasteRate);
    this.overallStats.increaseSpeedRate(this.speedRate);
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Increase Haste by 10% and SPD by 35%.";
          this.isEquiped = true;
          this.loadStats();
          GameController.instance.addEquipedItem(this);
          break;
        case 2:
          this.description = "Increase Haste by 15% and SPD by 40%.";
          this.updateStats(5, 5);
          break;
        case 3:
          this.description = "Increase Haste by 20% and SPD by 45%.";
          this.updateStats(5, 5);
          break;
        case 4:
          this.description = "Increase Haste by 25% and SPD by 50%.";
          this.updateStats(5, 5);
          break;
        case 5:
          this.updateStats(5, 5);
          break;
        default:
          break;
      }
    }
  }
  updateStats(additionHasteAmount: number, additionSpeedAmount: number) {
    this.overallStats.increaseHasteRate(additionHasteAmount);
    this.overallStats.increaseSpeedRate(additionSpeedAmount);
  }

  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
  }
}
