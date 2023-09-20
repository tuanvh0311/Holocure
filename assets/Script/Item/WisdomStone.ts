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
export default class WisdomStone extends Item {
  static instance: WisdomStone;
  @property(cc.Float)
  expBonusRate: number = 10;
  currentLevel = this.level;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    WisdomStone.instance = this;
    this.itemOnLoad();
    this.description = "Increase EXP gain by 10%.";
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Increase EXP gain by 15%.";
          this.isEquiped = true;
          this.loadStats();
          GameController.instance.addEquipedItem(this);
          break;
        case 2:
          this.description = "Increase EXP gain by 20%.";
          this.updateStats(5);
          break;
        case 3:
          this.description = "Increase EXP gain by 25%.";
          this.updateStats(5);
          break;
        case 4:
          this.description = "Increase EXP gain by 30%.";
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
    this.overallStats.increaseBonusExpRate(this.expBonusRate);
  }
  updateStats(additionExpAmount: number) {
    this.overallStats.increaseBonusExpRate(additionExpAmount);
  }

  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
  }
}
