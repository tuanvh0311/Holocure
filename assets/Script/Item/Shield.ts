// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import OverallStats from "../Player/OverallStats";
import PlayerController from "../Player/PlayerController";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Shield extends Item {
  static instance: Shield;
  @property(cc.Float)
  baseShield: number = 15;
  @property(cc.Float)
  baseResist: number = 5;
  @property(cc.Float)
  refreshTimer: number = 15;
  timer: number = this.refreshTimer;
  player: PlayerController;
  currentLevel = this.level;
  onLoad() {
    Shield.instance = this;
    GameController.instance.dynamicBuff.push(this);
    this.itemOnLoad();
    this.description =
      "Gain a shield that absorbs up to 15 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 5%.";
  }
  refreshShield(dt: number) {
    if (this.player.currentShield < this.player.maxShield) {
      this.timer -= dt;
      if (this.timer < 0) {
        this.timer = this.refreshTimer;
        this.player.gainShield(this.baseShield);
      }
    } else {
      this.timer = this.refreshTimer;
    }
  }
  onTakeDamage() {
    this.timer = 15;
  }
  updateStats(shieldAmount: number, resistAmount: number) {
    this.baseShield += shieldAmount;
    OverallStats.instance.increaseResistRate(resistAmount);
    this.addShieldToPlayer(shieldAmount);
  }
  loadStats() {
    OverallStats.instance.increaseResistRate(this.baseResist);
    this.addShieldToPlayer(this.baseShield);
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.loadStats();
          this.description =
            "Gain a shield that absorbs up to 20 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 10%.";
          this.isEquiped = true;
          GameController.instance.addEquipedItem(this);
          break;
        case 2:
          this.description =
            "Gain a shield that absorbs up to 25 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 15%.";
          this.updateStats(5, 5);
          break;
        case 3:
          this.description =
            "Gain a shield that absorbs up to 30 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 20%.";
          this.updateStats(5, 5);
          break;
        case 4:
          this.description =
            "Gain a shield that absorbs up to 35 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 25%.";
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

  addShieldToPlayer(shield: number) {
    this.player.gainMaxShield(shield);
  }
  start() {
    this.player = PlayerController.instance;
  }

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.refreshShield(dt);
  }
}
