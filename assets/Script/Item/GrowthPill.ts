// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import OverallStats from "../Player/OverallStats";
import Weapon from "../Weapon/Weapon";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GrowthPill extends Item {
  static instance: GrowthPill;
  @property(cc.Float)
  sizeIncreaseRate: number = 10;
  @property(cc.Float)
  pickUpRangeIncreaseRate: number = 30;
  currentLevel = this.level;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    GrowthPill.instance = this;
    this.description =
      "Increases attack size of weapons by 5%. Also increase Pick Up Range by 30%.";
    this.itemOnLoad();
  }
  loadStats() {
    this.overallStats.statList[4] += this.sizeIncreaseRate;
    this.overallStats.statList[7] += this.pickUpRangeIncreaseRate;
    this.overallStats.onStatsChange();
  }
  updateStats(additionSizeAmount: number, additionPickupRangeAmount: number) {
    this.sizeIncreaseRate += additionSizeAmount;
    this.pickUpRangeIncreaseRate += additionPickupRangeAmount;
    this.overallStats.statList[4] += additionSizeAmount;
    this.overallStats.statList[7] += additionPickupRangeAmount;
    this.overallStats.onStatsChange();
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description =
            "Increases attack size of weapons by 10%. Also increase Pick Up Range by 35%.";
          this.isEquiped = true;
          GameController.instance.addEquipedItem(this);
          this.loadStats();
          break;
        case 2:
          this.description =
            "Increases attack size of weapons by 15%. Also increase Pick Up Range by 40%.";
          this.updateStats(5, 5);
          break;
        case 3:
          this.description =
            "Increases attack size of weapons by 20%. Also increase Pick Up Range by 45%.";
          this.updateStats(5, 5);
          break;
        case 4:
          this.description =
            "Increases attack size of weapons by 25%. Also increase Pick Up Range by 50%.";
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

  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
  }
}
