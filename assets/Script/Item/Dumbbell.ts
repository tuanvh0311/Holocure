// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import HealthAndShield from "../Player/HealthAndShield";
import PlayerController from "../Player/PlayerController";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Dumbbell extends Item {
  static instance: Dumbbell;
  @property(cc.Float)
  hpRate: number = 10;
  currentLevel = this.level;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.itemOnLoad();
    Dumbbell.instance = this;
    this.description = "Increase max HP by 10%.";
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Increase max HP by 20%.";
          this.isEquiped = true;
          GameController.instance.addEquipedItem(this);
          this.loadStats();
          break;
        case 2:
          this.description = "Increase max HP by 30%.";
          this.updateStats(10);
          break;
        case 3:
          this.description = "Increase max HP by 40%.";
          this.updateStats(10);
          break;
        case 4:
          this.description = "Increase max HP by 50%.";
          this.updateStats(10);
          break;
        case 5:
          this.updateStats(10);
          break;
        default:
          break;
      }
    }
  }
  loadStats() {
    this.overallStats.increaseMaxHPRate(this.hpRate);
    HealthAndShield.instance.setStateHP(
      PlayerController.instance.currentHp,
      PlayerController.instance.maxHp
    );
  }
  updateStats(additionHpRate: number) {
    this.overallStats.increaseMaxHPRate(additionHpRate);
    this.hpRate += additionHpRate;
    HealthAndShield.instance.setStateHP(
      PlayerController.instance.currentHp,
      PlayerController.instance.maxHp
    );
  }

  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
  }
}
