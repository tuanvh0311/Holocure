// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import UIController from "../Controller/UIController";
import Utils from "../Controller/Utils";
import Weapon from "../Weapon/Weapon";
import PlayerController from "./PlayerController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OverallStats extends cc.Component {
  static instance: OverallStats;
  //   maxHpRate: number = 0;
  //   atkRate: number = 0;
  //   spdRate: number = 0;
  //   critChance: number = 0;
  //   pickupRangeRate: number = 0;
  //   resistRate: number = 0;
  nameList: Array<String> = new Array<String>();
  statList: Array<number> = new Array<number>();
  player: PlayerController;
  loadStats() {
    for (let i = 0; i < this.nameList.length; i++) {
      this.statList[i] = 0;
    }
  }
  loadFromCharacterData() {
    let data = PlayerController.instance.loadedData;
    this.increaseAttackRate(data.atk);
    this.increaseCritChance(data.crit);
  }
  pushToList() {
    this.nameList.push("Max HP Rate");
    this.nameList.push("Attack Rate");
    this.nameList.push("Speed Rate");
    this.nameList.push("Haste Rate");
    this.nameList.push("Weapon size Rate");
    this.nameList.push("Critical Chance");
    this.nameList.push("Critical Damage Rate");
    this.nameList.push("Pickup Range Rate");
    this.nameList.push("Resist Rate");
    this.nameList.push("Bonus Healing Rate");
    this.nameList.push("Bonus Exp Rate");
  }

  onStatsChange() {
    if (GameController.instance.isGameOver) return;
    PlayerController.instance.onStatChange();
    Weapon.instance.onStatChange();
    UIController.instance.updateStats();
  }
  increaseMaxHPRate(amount: number) {
    this.statList[0] += amount;
    this.onStatsChange();
  }
  increaseAttackRate(amount: number) {
    this.statList[1] += amount;
    this.onStatsChange();
  }
  increaseSpeedRate(amount: number) {
    this.statList[2] += amount;
    this.onStatsChange();
  }
  increaseHasteRate(amount: number) {
    this.statList[3] += amount;
    this.onStatsChange();
  }
  increaseWeaponSizeRate(amount: number) {
    this.statList[4] += amount;
    this.onStatsChange();
  }
  increaseCritChance(amount: number) {
    this.statList[5] += amount;
    this.onStatsChange();
  }
  increaseCritDamageRate(amount: number) {
    this.statList[6] += amount;
    this.onStatsChange();
  }
  increasePickupRangeRate(amount: number) {
    this.statList[7] += amount;
    this.onStatsChange();
  }
  increaseResistRate(amount: number) {
    this.statList[8] += amount;
    this.onStatsChange();
  }
  increaseBonusHealingRate(amount: number) {
    this.statList[9] += amount;
    this.onStatsChange();
  }
  increaseBonusExpRate(amount: number) {
    this.statList[10] += amount;
    this.onStatsChange();
  }

  getMaxHPRate() {
    return this.statList[0];
  }
  getAttackRate() {
    return this.statList[1];
  }
  getSpeedRate() {
    return this.statList[2];
  }
  getHasteRate() {
    return this.statList[3];
  }
  getWeaponSizeRate() {
    return this.statList[4];
  }
  getCritChance() {
    return this.statList[5];
  }
  getCritDamageRate() {
    return this.statList[6];
  }
  getPickupRangeRate() {
    return this.statList[7];
  }
  getResistRate() {
    return this.statList[8];
  }
  getBonusHealingRate() {
    return this.statList[9];
  }
  getBonusExpRate() {
    return this.statList[10];
  }
  onLoad() {
    OverallStats.instance = this;
    this.player = PlayerController.instance;
    this.pushToList();
    this.loadStats();
  }

  start() {
    this.loadFromCharacterData();
  }

  update(dt) {}
}
