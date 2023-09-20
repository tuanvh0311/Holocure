// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import Item from "../Item/Item";
import ProjectilePooling from "../Manager/ProjectilePooling";
import SpiralProjectile from "./SpiralProjectile";
import Weapon from "./Weapon";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AxeThrower extends Weapon {
  static instance: AxeThrower;
  @property(cc.Prefab)
  axe: cc.Prefab = null;
  @property(cc.Node)
  player: cc.Node = null;
  @property(cc.Node)
  parent: cc.Node = null;
  @property(cc.AudioClip)
  throwSound: cc.AudioClip = null;
  timer: number;
  durationPercentage: number;
  hitLimit: number = 10;
  currentLevel = this.level;

  onLoad() {
    AxeThrower.instance = this;
    this.weaponOnLoad();
    this.durationPercentage = 0;
    this.timer = 0;
    let initCount = 10;
    this.description = "Throw an axe that spirals outward from the player.";
    for (let i = 0; i < initCount; ++i) {
      let axe = cc.instantiate(this.axe);
      axe.parent = this.node.parent.parent;
      ProjectilePooling.instance.axePool.put(axe);
    }
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description =
            "Increase size of axe by 20%. Increase damage of axe by 20%.";
          this.isEquiped = true;
          GameController.instance.addEquipedWeapon(this);
          break;
        case 2:
          this.description = "Reduce delay between attacks by 20%.";
          this.updateStats(20, 0, 0, 0, 20, 0);
          break;
        case 3:
          this.description = "Increase damage by 33%";
          this.updateStats(0, 0, 0, 20, 0, 0);
          break;
        case 4:
          this.description = "Remove hit limit, and lasts 1 second longer.";
          this.updateStats(33, 0, 0, 0, 0, 0);
          break;
        case 5:
          this.description = "Increase attack size by 30%.";
          this.updateStats(0, 0, 99999999, 0, 0, 33.3);
          break;
        case 6:
          this.description = "Increase damage by 50%.";
          this.updateStats(0, 0, 0, 0, 30, 0);
          break;
        case 7:
          this.updateStats(50, 0, 0, 0, 0, 0);
          break;
        default:
          break;
      }
    }
  }
  spawnAxe() {
    let axe: cc.Node = null;
    if (ProjectilePooling.instance.axePool.size() > 0) {
      axe = ProjectilePooling.instance.axePool.get();
    } else {
      axe = cc.instantiate(this.axe);
    }

    axe.opacity = 0;
    cc.tween(axe).to(0.05, { opacity: 255 }).start();
    axe.parent = this.parent;

    axe
      .getComponent(SpiralProjectile)
      .setStats(
        this.resultDamagePercentage,
        this.baseDamage,
        this.resultWeaponScalePercentage,
        this.hitLimit,
        this.durationPercentage,
        this.player
      );
  }
  updateStats(
    damagePercentage: number,
    baseDamage: number,
    hitLimit: number,
    attackSpeedPercentage: number,
    weaponScalePercentage: number,
    durationPercentage: number
  ) {
    this.damagePercentage += damagePercentage;
    this.baseDamage += baseDamage;
    this.hitLimit += hitLimit;
    this.attackSpeedPercentage += attackSpeedPercentage;
    this.weaponScalePercentage += weaponScalePercentage;
    this.durationPercentage += durationPercentage;
    this.onStatChange();
  }
  throwAxe() {
    if (this.timer < 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.throwSound, false, 1);
      this.timer = this.attackSpeed;
      this.spawnAxe();
    }
  }

  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.timer -= dt;
    this.throwAxe();
  }
}
