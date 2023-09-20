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
export default class BloodyTear extends Item {
  static instance: BloodyTear;
  @property(cc.Float)
  healingAmount: number = 2;
  @property(cc.Float)
  healingChance: number = 30;
  @property(cc.Float)
  refreshTimer: number = 0.25;
  timer: number = 0.25;
  player: PlayerController;
  killCount: number = 0;
  currentLevel = this.level;
  onLoad() {
    BloodyTear.instance = this;
    this.itemOnLoad();
    this.player = PlayerController.instance;
    this.description =
      "When defeating a target, there is a 30% chance to life-steal 2 HP.";
  }

  start() {}
  updateStats(additionHealingAmount: number, additionHealingChange: number) {
    this.healingAmount += additionHealingAmount;
    this.healingChance += additionHealingChange;
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description =
            "When defeating a target, there is a 30% chance to life-steal 4 HP.";
          this.isEquiped = true;
          GameController.instance.addEquipedItem(this);
          break;
        case 2:
          this.description =
            "When defeating a target, there is a 30% chance to life-steal 6 HP.";
          this.updateStats(2, 0);
          break;
        case 3:
          this.updateStats(2, 0);
          break;
        default:
          break;
      }
    }
  }
  healPlayer(dt: number) {
    this.timer -= dt;
    if (this.timer < 0) {
      if (this.killCount != GameController.instance.killAmount) {
        this.timer = this.refreshTimer;
        this.killCount = GameController.instance.killAmount;
        var healChange = this.healingChance / 100;
        var random = Math.random();

        if (random < healChange) {
          this.player.heal(this.healingAmount);
        }
      }
    }
  }
  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.healPlayer(dt);
  }
}
