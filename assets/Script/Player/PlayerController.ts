// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import UIController from "../Controller/UIController";
import Utils from "../Controller/Utils";
import EnemyController from "../Enemy/EnemyController";
import BaneOfRegeneration from "../Item/BaneOfRegeneration";
import DeathHeart from "../Other Object/DeathHeart";
import StartWeapon from "../Weapon/StartWeapon";
import Weapon from "../Weapon/Weapon";
import HealthAndShield from "./HealthAndShield";
import OverallStats from "./OverallStats";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
  static instance: PlayerController;
  @property(cc.JsonAsset)
  dataPlayer: cc.JsonAsset = null;
  @property(cc.Prefab)
  deathHeart: cc.Prefab = null;
  speed = 1;
  maxHp = 100;
  currentHp;
  maxShield = 0;
  currentShield: number;
  @property(cc.Float)
  iFrameDuration = 0.3;
  pickupRange = 100;
  resist = 0;
  @property(cc.Boolean)
  enableIframe: boolean = false;
  @property(cc.Boolean)
  isUnkilled: boolean = false;
  baseSpd: number;
  baseMaxHp: number;
  basePR: number;
  baseResist: number;
  isIFrame: boolean;
  iFrametimer: number;
  isMoving: boolean;
  anim: cc.Animation;
  animList;
  deltaTime: number;
  overallStat: OverallStats;
  loadedData;
  @property(Array(cc.Prefab))
  characterPrefab: Array<cc.Prefab> = Array<cc.Prefab>();
  @property(cc.AudioClip)
  hurtSound: cc.AudioClip = null;
  @property(cc.AudioClip)
  deadSound: cc.AudioClip = null;
  @property(cc.AudioClip)
  healSound: cc.AudioClip = null;
  startWeapon: string;
  onLoad() {
    PlayerController.instance = this;
    this.overallStat = OverallStats.instance;
    this.basePR = this.pickupRange;
    this.baseResist = this.resist;
    this.loadCharacter();
    this.node.parent.zIndex = 10000;
    this.isIFrame = false;
    this.isMoving = false;
    this.iFrametimer = 0;
  }
  loadCharacter() {
    let characterLevel = Utils.getCharacterLevel();
    for (let i = 0; i < this.characterPrefab.length; i++) {
      if (Utils.getCharacterByName() == this.characterPrefab[i].name) {
        let character = cc.instantiate(this.characterPrefab[i]);
        character.parent = this.node;
        UIController.instance.setPortrait(i);
        this.loadedData =
          this.dataPlayer.json.character[i].stats[characterLevel - 1];
        this.startWeapon = this.dataPlayer.json.character[i].weapon;
        this.baseMaxHp = this.loadedData.health;
        this.maxHp = this.baseMaxHp;
        this.currentHp = this.maxHp;
        this.baseSpd = this.loadedData.speed;

        // this.overallStat.increaseAttackRate(data.atk);
        // this.overallStat.increaseCritChance(data.crit);
      }
    }
    this.anim = this.getComponentInChildren(cc.Animation);
    this.animList = this.anim.getClips();
    this.anim.play(this.animList[0]);
    this.currentShield = this.maxShield;
    HealthAndShield.instance.setStateOnLoad(
      this.currentHp,
      this.maxHp,
      this.currentShield,
      this.maxShield
    );
    this.onStatChange();
    this.node.getComponent(cc.CircleCollider).radius = this.pickupRange;
  }
  start() {
    this.node.parent
      .getChildByName("StartWeapon")
      .getChildByName(this.startWeapon)
      .getComponent(StartWeapon).level++;
  }
  takeDamage(damage: number) {
    if (this.isIFrame) return;
    if (this.isUnkilled) return;
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.hurtSound, false, 1);
    damage -= (damage * this.resist) / 100;
    var damageLeft = this.currentShield - damage;
    this.currentShield -= damage;
    if (this.currentShield < 0) this.currentShield = 0;

    if (damageLeft < 0) {
      this.currentHp += damageLeft;
      HealthAndShield.instance.setStateHP(this.currentHp, this.maxHp);
      GameController.instance.takeDamage();
    }
    if (this.enableIframe) {
      this.isIFrame = true;
      this.iFrametimer = this.iFrameDuration;
    }
    HealthAndShield.instance.setStateShield(this.currentShield, this.maxShield);
    if (this.currentHp <= 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.deadSound, false, 1);
      this.currentHp = 0;
      HealthAndShield.instance.setStateHP(this.currentHp, this.maxHp);
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y += 0.25) {
          let deathHeart = cc.instantiate(this.deathHeart);
          deathHeart.position = this.node.position;
          deathHeart.parent = this.node.parent;
          deathHeart.getComponent(DeathHeart).vec2 = cc.v2(x, y);
        }
      }
      GameController.instance.onGameOver();
      this.node.destroy();
    }
  }
  onStatChange() {
    var oldMaxHP = this.maxHp;
    this.maxHp =
      (this.baseMaxHp * this.overallStat.getMaxHPRate()) / 100 + this.baseMaxHp;
    this.currentHp += this.maxHp - oldMaxHP;
    this.resist = this.overallStat.getResistRate() + this.baseResist;
    if (this.resist > 100) this.resist = 100;
    this.pickupRange =
      (this.basePR * this.overallStat.getPickupRangeRate()) / 100 + this.basePR;
    this.node.getComponent(cc.CircleCollider).radius = this.pickupRange;
    this.speed =
      (this.baseSpd * this.overallStat.getSpeedRate()) / 100 + this.baseSpd;
    HealthAndShield.instance.setStateOnLoad(
      this.currentHp,
      this.maxHp,
      this.currentShield,
      this.maxShield
    );
  }
  gainMaxShield(amount: number) {
    this.maxShield += amount;
    this.currentShield += amount;
    HealthAndShield.instance.setStateOnLoad(
      this.currentHp,
      this.maxHp,
      this.currentShield,
      this.maxShield
    );
  }
  gainShield(amount: number) {
    this.currentShield += amount;
    if (this.currentShield > this.maxShield)
      this.currentShield = this.maxShield;
    HealthAndShield.instance.setStateOnLoad(
      this.currentHp,
      this.maxHp,
      this.currentShield,
      this.maxShield
    );
  }
  heal(healAmount: number) {
    if (this.currentHp <= 0) return;
    if (this.currentHp == this.maxHp) return;
    this.currentHp +=
      healAmount + (healAmount / 100) * this.overallStat.getBonusHealingRate();
    if (this.currentHp > this.maxHp) {
      this.currentHp = this.maxHp;
    }
    HealthAndShield.instance.setStateHP(Math.ceil(this.currentHp), this.maxHp);
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.healSound, false, 1);
  }
  regenHP(healAmount: number) {
    if (this.currentHp <= 0) return;
    if (this.currentHp == this.maxHp) return;
    this.currentHp +=
      healAmount + (healAmount / 100) * this.overallStat.getBonusHealingRate();
    if (this.currentHp > this.maxHp) {
      this.currentHp = this.maxHp;
    }
    HealthAndShield.instance.setStateOnLoad(
      Math.ceil(this.currentHp),
      this.maxHp,
      this.currentShield,
      this.maxShield
    );
  }
  healByPercentage(healPercentage: number) {
    if (this.currentHp <= 0) return;
    if (this.currentHp == this.maxHp) return;
    this.currentHp +=
      (this.maxHp / 100) *
      (healPercentage +
        (healPercentage / 100) * this.overallStat.getBonusHealingRate());

    if (this.currentHp > this.maxHp) {
      this.currentHp = this.maxHp;
    }
    HealthAndShield.instance.setStateHP(Math.ceil(this.currentHp), this.maxHp);
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.healSound, false, 1);
  }
  runAnimation() {
    if (
      !this.anim.getAnimationState(this.animList[1].name).isPlaying &&
      this.isMoving == true
    ) {
      this.anim.play(this.animList[1].name);
    }
    if (
      this.isMoving == false &&
      !this.anim.getAnimationState(this.animList[0].name).isPlaying
    ) {
      this.anim.play(this.animList[0].name);
    }
  }

  update(dt) {
    if (Utils.isPause) {
      this.anim.pause();
      return;
    }
    this.anim.resume();
    this.deltaTime = dt;
    this.iFrametimer -= dt;
    if (this.iFrametimer < 0) {
      this.enableIframe = false;
      this.isIFrame = false;
    }
    this.runAnimation();
  }
}
