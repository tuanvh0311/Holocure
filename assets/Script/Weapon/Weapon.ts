// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import OverallStats from "../Player/OverallStats";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Weapon extends cc.Component {
  static instance: Weapon;
  @property(cc.Float)
  level: number = 0;
  @property(cc.Float)
  maxLevel: number = 7;
  isEquiped: boolean = false;
  @property(cc.Boolean)
  isResizeable: boolean = true;
  @property(cc.Float)
  baseDamage: number = 20;
  isLockLevel: boolean = false;
  description: string = null;
  @property(cc.Float)
  attackSpeed: number = 2;
  @property(cc.Float)
  minAS: number = 1;
  @property(cc.SpriteFrame)
  displayIcon: cc.SpriteFrame = null;
  baseAS: number;
  damagePercentage: number;
  attackSpeedPercentage: number;
  weaponScalePercentage: number;
  resultDamagePercentage: number;
  resultAttackSpeedPercentage: number;
  resultWeaponScalePercentage: number;
  overallStat: OverallStats;
  name: string;

  // onLoad () {}

  start() {}
  onLevelMax() {
    if (this.level >= this.maxLevel) {
      this.isLockLevel = true;
    }
  }

  weaponOnLoad() {
    Weapon.instance = this;
    GameController.instance.addWeapon(this);
    this.overallStat = OverallStats.instance;
    this.name = this.node.name;
    this.baseAS = this.attackSpeed;
    this.damagePercentage = 0;
    this.attackSpeedPercentage = 0;
    this.weaponScalePercentage = 0;
    this.resultDamagePercentage = 0;
    this.resultAttackSpeedPercentage = 0;
    this.resultWeaponScalePercentage = 0;
    this.onStatChange();
  }
  onStatChange() {
    this.resultDamagePercentage =
      this.damagePercentage + this.overallStat.getAttackRate();
    this.resultWeaponScalePercentage = this.weaponScalePercentage;
    if (this.isResizeable)
      this.resultWeaponScalePercentage =
        this.weaponScalePercentage + this.overallStat.getWeaponSizeRate();
    this.resultAttackSpeedPercentage =
      this.attackSpeedPercentage + this.overallStat.getHasteRate();
    this.attackSpeed =
      this.baseAS - (this.baseAS * this.resultAttackSpeedPercentage) / 100;
    if (this.attackSpeed < this.minAS) this.attackSpeed = this.minAS;
  }
}
