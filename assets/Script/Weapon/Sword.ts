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
export default class Sword extends StartWeapon {
  static instance: Sword;
  @property(cc.Node)
  leftWhip: cc.Node = null;
  @property(cc.Node)
  rightWhip: cc.Node = null;
  @property(cc.AudioClip)
  slashSound: cc.AudioClip = null;
  timer: number;
  stats: Melee = null;
  statsLeft: Melee = null;
  currentLevel = this.level;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.weaponOnLoad();
    Sword.instance = this;
    this.stats = this.node.getChildByName("Right").getComponent(Melee);
    this.statsLeft = this.node.getChildByName("Left").getComponent(Melee);
    this.timer = this.attackSpeed;
    this.description = "Swings in a half circle arc in front.";
    this.unactiveLeftWhip();
    this.unactiveRightWhip();
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
          this.description = "Add one more attack to the back.";
          this.updateSwordStats(0, 20, 0, 0);
          break;
        case 3:
          this.description = "Increase damage by 30%.";
          break;
        case 4:
          this.description = "Reduce the time between attacks by 30%.";
          this.updateSwordStats(0, 30, 0, 0);
          break;
        case 5:
          this.description = "Increase attack area by 30%.";
          this.updateSwordStats(0, 0, 30, 0);
          break;
        case 6:
          this.description = "Increase damage by 40%.";
          this.updateSwordStats(0, 0, 0, 30);
          break;
        case 7:
          this.updateSwordStats(0, 40, 0, 0);
          break;
        default:
          break;
      }
    }
    return true;
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
  start() {}

  attackRight() {
    if (this.timer < 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.slashSound, false, 1);
      this.timer = this.attackSpeed;
      this.rightWhip.active = true;
      this.stats.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
      this.unactiveRightWhip();
    }
  }
  attackLeft() {
    if (this.timer < 0) {
      this.timer = this.attackSpeed;
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.slashSound, false, 1);
      this.leftWhip.active = true;
      this.statsLeft.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
      this.unactiveLeftWhip();
    }
  }
  attackBothSide() {
    if (this.timer < 0) {
      this.stats.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      this.statsLeft.set(
        this.baseDamage,
        this.resultDamagePercentage,
        this.resultWeaponScalePercentage
      );
      if (!Movement.instance.isFlip) {
        this.timer = this.attackSpeed;
        if (Utils.getLocal("Sound") == "true")
          cc.audioEngine.play(this.slashSound, false, 1);
        this.rightWhip.scaleY = this.stats.weaponScaleY * 1;
        this.rightWhip.active = true;
        this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");

        this.unactiveRightWhip();
        setTimeout(() => {
          if (Utils.getLocal("Sound") == "true")
            cc.audioEngine.play(this.slashSound, false, 1);
          this.leftWhip.scaleY = this.stats.weaponScaleY * -1;
          this.leftWhip.active = true;
          this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
          this.unactiveLeftWhip();
        }, 250);
      } else {
        this.timer = this.attackSpeed;
        if (Utils.getLocal("Sound") == "true")
          cc.audioEngine.play(this.slashSound, false, 1);
        this.leftWhip.scaleY = this.stats.weaponScaleY * -1;
        this.leftWhip.active = true;
        this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
        this.unactiveLeftWhip();
        setTimeout(() => {
          if (Utils.getLocal("Sound") == "true")
            cc.audioEngine.play(this.slashSound, false, 1);
          this.rightWhip.scaleY = this.stats.weaponScaleY * 1;
          this.rightWhip.active = true;
          this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
          this.unactiveRightWhip();
        }, 250);
      }
    }
  }

  unactiveLeftWhip() {
    this.scheduleOnce(function () {
      this.leftWhip.active = false;
    }, 0.3);
  }
  unactiveRightWhip() {
    this.scheduleOnce(function () {
      this.rightWhip.active = false;
    }, 0.3);
  }
  perfromAttack() {
    if (this.timer < 0) {
      this.node.angle =
        Math.atan2(
          Movement.instance.directionVector.y,
          Movement.instance.directionVector.x
        ) *
        (180 / Math.PI);
      if (Movement.instance.isFlip) {
        this.node.scaleX = -1;
      } else this.node.scaleX = 1;
    }

    if (this.level < 3) {
      if (!Movement.instance.isFlip) {
        this.attackRight();
      } else {
        this.attackLeft();
      }
    }
    if (this.level >= 3) {
      this.attackBothSide();
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
