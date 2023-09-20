// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import UIController from "../Controller/UIController";
import Utils from "../Controller/Utils";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EyePatch extends Item {
  static instance: EyePatch;
  @property(cc.Integer)
  maxCrit: number = 10;
  @property(cc.Integer)
  critPerSec: number = 1;
  @property(cc.SpriteFrame)
  buffIcon: cc.SpriteFrame = null;
  timer: number = 1;
  currentStack: number = 0;
  currentLevel = this.level;
  onLoad() {
    EyePatch.instance = this;
    this.description =
      "Gain 1% crit buff every second up to 10%. If taking damage by a target, lose half the buff.";
    this.itemOnLoad();
  }

  start() {}
  gainStack() {
    if (this.timer < 0) {
      this.timer = this.critPerSec;
      if (this.currentStack < this.maxCrit) {
        var oldStack = this.currentStack;
        this.currentStack += 1;
        this.overallStats.increaseCritChance(this.currentStack - oldStack);
      }
    }
  }
  onTakeDamage() {
    if (!this.isEquiped) return;
    var oldStack = this.currentStack;
    this.currentStack = Math.floor(this.currentStack / 2);
    this.overallStats.increaseCritChance(this.currentStack - oldStack);
  }
  updateStats(maxCrit: number) {
    this.maxCrit += maxCrit;
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          GameController.instance.dynamicBuff.push(this);
          UIController.instance.addNewBuff(this);
          GameController.instance.addEquipedItem(this);
          this.description =
            "Gain 1% crit buff every second up to 15%. If taking damage by a target, lose half the buff.";
          this.isEquiped = true;
          break;
        case 2:
          this.description =
            "Gain 1% crit buff every second up to 20%. If taking damage by a target, lose half the buff.";
          this.updateStats(5);
          break;
        case 3:
          this.updateStats(5);
          break;
        default:
          break;
      }
    }
  }
  getCounting() {
    return this.currentStack;
  }

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.timer -= dt;
    this.gainStack();
  }
}
