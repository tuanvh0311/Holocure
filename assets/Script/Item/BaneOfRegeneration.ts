// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import PlayerController from "../Player/PlayerController";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BaneOfRegeneration extends Item {
  static instance: BaneOfRegeneration;
  @property(cc.Float)
  regenTick: number = 5;
  timer: number = 0;
  currentLevel = this.level;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    BaneOfRegeneration.instance = this;
    this.description = "Recover health by 1 every 5 seconds.";
    this.itemOnLoad();
    GameController.instance.addItem(this);
  }

  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Recover health by 1 every 4 seconds.";
          this.isEquiped = true;
          GameController.instance.addEquipedItem(this);
          break;
        case 2:
          this.description = "Recover health by 1 every 3 seconds.";
          this.updateStats(4);
          break;
        case 3:
          this.description = "Recover health by 1 every 2 seconds.";
          this.updateStats(3);
          break;
        case 4:
          this.description = "Recover health by 1 every second.";
          this.updateStats(2);
          break;
        case 5:
          this.updateStats(1);
          break;
        default:
          break;
      }
    }
  }
  regenPlayer() {
    if (this.timer < 0) {
      this.timer = this.regenTick;
      PlayerController.instance.regenHP(1);
    }
  }
  updateStats(regenTick: number) {
    this.regenTick = regenTick;
  }
  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.timer -= dt;
    this.regenPlayer();
  }
}
