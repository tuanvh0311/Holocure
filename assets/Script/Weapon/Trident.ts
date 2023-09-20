// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Movement from "../Controller/Movement";
import Utils from "../Controller/Utils";
import Melee from "./Melee";
import StartWeapon from "./StartWeapon";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Trident extends StartWeapon {
  @property(cc.Node)
  leftThrust: cc.Node = null;
  @property(cc.Node)
  rightThrust: cc.Node = null;
  @property(cc.Node)
  midThrust: cc.Node = null;
  @property(cc.AudioClip)
  thrustSound: cc.AudioClip = null;
  timer: number;
  statsRight: Melee = null;
  statsLeft: Melee = null;
  statsMiddle: Melee = null;
  currentLevel = this.level;

  onLoad() {
    this.weaponOnLoad();
    this.statsRight = this.node.getChildByName("Right").getComponent(Melee);
    this.statsLeft = this.node.getChildByName("Left").getComponent(Melee);
    this.statsMiddle = this.node.getChildByName("Middle").getComponent(Melee);
    this.timer = this.attackSpeed;
    this.description = "Mid ranged stab attack in front.";
    this.unactiveLeftThrust();
    this.unactiveRightThrust();
    this.unactiveMiddleThrust();
  }
  updateSwordStats(
    bonusBaseDamage: number,
    damage: number,
    attackSpeed: number,
    weaponScale: number
  ) {
    this.baseDamage += bonusBaseDamage;
    this.attackSpeedPercentage += attackSpeed;
    this.damagePercentage += damage;
    this.weaponScalePercentage += weaponScale;
    this.onStatChange();
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    if (this.currentLevel < this.level) {
      this.onLevelMax();
      this.currentLevel = this.level;
      switch (this.level) {
        case 1:
          this.description = "Increase damage by 20%.";
          this.isEquiped = true;
          GameController.instance.addEquipedWeapon(this);
          break;
        case 2:
          this.description = "Stab 1 extra time, forming a V shape.";
          this.updateSwordStats(0, 20, 0, 0);
          break;
        case 3:
          this.description = "Reduce time between attacks by 15%";
          break;
        case 4:
          this.description = "Increase damage by 40%";
          this.updateSwordStats(0, 0, 15, 0);
          break;
        case 5:
          this.description = "Increase attack area by 25%.";
          this.updateSwordStats(0, 40, 0, 0);
          break;
        case 6:
          this.description = "Thrust 3 times, in a fork-like shape.";
          this.updateSwordStats(0, 0, 0, 25);
          break;
        case 7:
          break;
        default:
          break;
      }
    }
    return true;
  }
  unactiveLeftThrust() {
    this.scheduleOnce(function () {
      this.leftThrust.active = false;
    }, 0.3);
  }
  unactiveRightThrust() {
    this.scheduleOnce(function () {
      this.rightThrust.active = false;
    }, 0.3);
  }
  unactiveMiddleThrust() {
    this.scheduleOnce(function () {
      this.midThrust.active = false;
    }, 0.3);
  }
  perfromAttack() {
    if (this.timer < 0)
      this.node.angle =
        Math.atan2(
          Movement.instance.directionVector.y,
          Movement.instance.directionVector.x
        ) *
        (180 / Math.PI);
    if (this.level < 3) {
      this.attackMiddle();
    }
    if (this.level >= 7) {
      this.attackAllSide();
    }
    if (this.level >= 3) {
      this.attackV();
    }
  }
  attackRight() {
    if (this.timer < 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.thrustSound, false, 1);
      this.timer = this.attackSpeed;
      this.rightThrust.active = true;
      this.statsRight.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
      this.unactiveRightThrust();
    }
  }
  attackMiddle() {
    if (this.timer < 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.thrustSound, false, 1);
      this.timer = this.attackSpeed;
      this.midThrust.active = true;
      this.statsMiddle.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.midThrust.getComponent(cc.Animation).play("ThrustAnimation");
      this.unactiveMiddleThrust();
    }
  }
  attackLeft() {
    if (this.timer < 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.thrustSound, false, 1);
      this.timer = this.attackSpeed;
      this.leftThrust.active = true;
      this.statsLeft.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
      this.unactiveLeftThrust();
    }
  }
  attackAllSide() {
    if (this.timer < 0) {
      this.statsRight.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.statsLeft.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.statsMiddle.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );

      this.timer = this.attackSpeed;
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.thrustSound, false, 1);
      this.midThrust.active = true;
      this.midThrust.getComponent(cc.Animation).play("ThrustAnimation");
      this.unactiveLeftThrust();
      this.scheduleOnce(function () {
        if (Utils.getLocal("Sound") == "true")
          cc.audioEngine.play(this.thrustSound, false, 1);
        this.rightThrust.active = true;
        this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
        this.unactiveRightThrust();
      }, 0.15);
      this.scheduleOnce(function () {
        if (Utils.getLocal("Sound") == "true")
          cc.audioEngine.play(this.thrustSound, false, 1);
        this.leftThrust.scaleX = this.statsRight.weaponScaleX;
        this.leftThrust.active = true;
        this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
        this.unactiveLeftThrust();
      }, 0.3);
    }
  }
  attackV() {
    if (this.timer < 0) {
      this.statsRight.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.statsLeft.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.thrustSound, false, 1);
      this.timer = this.attackSpeed;
      this.rightThrust.active = true;
      this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
      this.unactiveRightThrust();
      this.scheduleOnce(function () {
        if (Utils.getLocal("Sound") == "true")
          cc.audioEngine.play(this.thrustSound, false, 1);
        this.leftThrust.scaleX = this.statsRight.weaponScaleX;
        this.leftThrust.active = true;
        this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
        this.unactiveLeftThrust();
      }, 0.15);
    }
  }
  update(dt) {
    this.onLevelUp();
    if (Utils.isPause) return;
    if (!this.isEquiped) return;
    this.timer -= dt;
    this.perfromAttack();
  }
}
