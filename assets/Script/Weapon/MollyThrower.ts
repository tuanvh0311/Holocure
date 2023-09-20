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
import ThrowableProjectile from "./ThrowableProjectile";
import Weapon from "./Weapon";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MollyThrower extends Weapon {
  static instance: MollyThrower;
  @property(cc.Prefab)
  molly: cc.Prefab = null;
  @property(cc.Node)
  player: cc.Node = null;
  @property(cc.Node)
  parent: cc.Node = null;
  @property(cc.AudioClip)
  throwSound: cc.AudioClip = null;
  timer: number;
  durationPercentage: number;
  currentLevel = this.level;

  onLoad() {
    MollyThrower.instance = this;
    this.weaponOnLoad();
    this.durationPercentage = 0;
    this.timer = 0;
    let initCount = 10;
    this.description = "Throw a fire ball";
    for (let i = 0; i < initCount; ++i) {
      let molly = cc.instantiate(this.molly);
      molly.parent = this.node.parent.parent;
      ProjectilePooling.instance.mollyPool.put(molly);
    }
  }
  throwMolly() {
    if (this.timer < 0) {
      this.timer = this.attackSpeed;
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.throwSound, false, 1);
      if (this.level < 3) {
        this.spawnMolly(
          cc.v3(
            Utils.random(this.player.x - 500, this.player.x + 500),
            Utils.random(this.player.y - 500, this.player.y + 500)
          )
        );
        return;
      }
      if (this.level >= 7) {
        for (let i = 0; i < 3; i++) {
          this.spawnMolly(
            cc.v3(
              Utils.random(this.player.x - 500, this.player.x + 500),
              Utils.random(this.player.y - 500, this.player.y + 500)
            )
          );
        }
        return;
      }
      if (this.level >= 3) {
        for (let i = 0; i < 2; i++) {
          this.spawnMolly(
            cc.v3(
              Utils.random(this.player.x - 500, this.player.x + 500),
              Utils.random(
                this.player.parent.y - 500,
                this.player.parent.y + 500
              )
            )
          );
        }
        return;
      }
    }
  }
  spawnMolly(target: cc.Vec3) {
    let molly: cc.Node = null;
    if (ProjectilePooling.instance.mollyPool.size() > 0) {
      molly = ProjectilePooling.instance.mollyPool.get();
    } else {
      molly = cc.instantiate(this.molly);
    }

    molly.opacity = 0;
    cc.tween(molly).to(0.05, { opacity: 255 }).start();
    molly.parent = this.parent;

    molly
      .getComponent(ThrowableProjectile)
      .set(
        this.resultDamagePercentage,
        this.baseDamage,
        this.resultWeaponScalePercentage,
        this.durationPercentage,
        target,
        this.player.position
      );
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Increase damage by 30%";
          this.isEquiped = true;
          GameController.instance.addEquipedWeapon(this);
          break;
        case 2:
          this.description = "Add one more fire ball";
          this.updateStats(30, 0, 0, 0, 0);
          break;
        case 3:
          this.description = "Reduce time between attacks by 20%";

          break;
        case 4:
          this.description = "Increase damage by 30%";
          this.updateStats(0, 0, 20, 0, 0);
          break;
        case 5:
          this.description = "Increase radius by 30%, duration by 20%";
          this.updateStats(30, 0, 0, 0, 0);
          break;
        case 6:
          this.description = "Add one more fire ball, increase radius by 30%";
          this.updateStats(0, 0, 0, 30, 20);
          break;
        case 7:
          this.updateStats(0, 0, 0, 30, 0);
          break;
        default:
          break;
      }
    }
  }
  updateStats(
    damagePercentage: number,
    baseDamage: number,
    attackSpeedPercentage: number,
    weaponScalePercentage: number,
    durationPercentage: number
  ) {
    this.damagePercentage += damagePercentage;
    this.baseDamage += baseDamage;
    this.attackSpeedPercentage += attackSpeedPercentage;
    this.weaponScalePercentage += weaponScalePercentage;
    this.durationPercentage += durationPercentage;
    this.onStatChange();
  }
  start() {}

  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.timer -= dt;
    this.throwMolly();
  }
}
