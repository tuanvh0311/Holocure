// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Sound from "../Menu/Sound";
import OverallStats from "../Player/OverallStats";
import PlayerController from "../Player/PlayerController";
import GameController from "./GameController";
import OptionGenerator from "./OptionGenerator";
import SlotController from "./SlotController";
import Utils from "./Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIController extends cc.Component {
  static instance: UIController;
  @property(cc.Label)
  killLabel: cc.Label = null;
  @property(cc.Label)
  coinLabel: cc.Label = null;
  @property(cc.Node)
  expBar: cc.Node = null;
  @property(cc.Node)
  screenCover: cc.Node = null;
  @property(cc.Node)
  buffParent: cc.Node = null;
  @property(cc.Prefab)
  buffNodePrefab: cc.Prefab = null;
  @property(cc.Label)
  levelLabel: cc.Label = null;
  @property(cc.Label)
  secondLabel: cc.Label = null;
  @property(cc.Label)
  minusLabel: cc.Label = null;
  @property(cc.Node)
  statsPanel: cc.Node = null;
  @property(cc.Node)
  pauseMenu: cc.Node = null;
  @property(cc.Node)
  upgradePanel: cc.Node = null;
  @property(cc.Label)
  displayName: cc.Label = null;
  @property(cc.Label)
  levelUpLabel: cc.Label = null;
  @property(cc.Label)
  hpAmount: cc.Label = null;
  @property(cc.Label)
  atkAmount: cc.Label = null;
  @property(cc.Label)
  spdAmount: cc.Label = null;
  @property(cc.Label)
  crtAmount: cc.Label = null;
  @property(cc.Label)
  pickupAmount: cc.Label = null;
  @property(cc.Label)
  hasteAmount: cc.Label = null;
  @property(cc.Node)
  portrait: cc.Node = null;
  @property(Array(cc.SpriteFrame))
  portraitList: Array<cc.SpriteFrame> = new Array<cc.SpriteFrame>();
  @property(cc.Node)
  gameOverLabel: cc.Node = null;
  @property(cc.Node)
  retryButton: cc.Node = null;
  @property(cc.Node)
  mainMenuButton: cc.Node = null;
  @property(cc.Label)
  gainedHolocoins: cc.Label = null;
  @property(cc.AudioClip)
  buttonSound: cc.AudioClip = null;
  dynamicBuff: Array<any> = new Array<any>();
  buffNodeList: Array<cc.Node> = new Array<cc.Node>();
  gameController: GameController;
  overallStats: OverallStats;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    UIController.instance = this;
    this.gameController = GameController.instance;
  }
  onClickPauseButton() {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.buttonSound, false, 1);
    if (this.gameController.isGameOver) return;
    Utils.isPause = true;
    this.statsPanel.active = true;
    this.pauseMenu.active = true;
  }
  onResumeButton() {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.buttonSound, false, 1);
    if (this.gameController.isGameOver) return;
    Utils.isPause = false;
    this.statsPanel.active = false;
    this.pauseMenu.active = false;
  }
  onReturnButton() {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.buttonSound, false, 1);
    Utils.isPause = false;
    cc.director.loadScene("Main Menu");
  }
  onUpgradeButtonClick(event, customEventData) {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.buttonSound, false, 1);
    Utils.isPause = false;
    this.statsPanel.active = false;
    this.upgradePanel.active = false;
    this.levelUpLabel.node.active = false;
    OptionGenerator.instance.onOptionSelect(customEventData);
    SlotController.instance.updateSlot();
  }
  start() {}
  updateKillLabel(amount: number) {
    this.killLabel.string = amount.toString();
  }
  updateCoinLabel(amount: number) {
    this.coinLabel.string = amount.toString();
  }
  updateExp(levelLabel: string, expRequired: number, expCurrent: number) {
    this.levelLabel.string = levelLabel;
    this.expBar.getComponent(cc.Sprite).fillRange = expCurrent / expRequired;
  }

  addNewBuff(buff: any) {
    this.dynamicBuff.push(buff);
    var buffNode = cc.instantiate(this.buffNodePrefab);
    buffNode.parent = this.buffParent;
    buffNode.x = this.buffNodeList.length * 70;
    buffNode.getComponent(cc.Sprite).spriteFrame = buff.buffIcon;
    buffNode.getChildByName("Stack number").getComponent(cc.Label).string =
      buff.getCounting();
    this.buffNodeList.push(buffNode);
  }
  setPortrait(index: number) {
    this.portrait.getComponent(cc.Sprite).spriteFrame =
      this.portraitList[index];
    this.displayName.string = Utils.getCharacterByName().toString();
  }
  updateBuff() {
    for (let i = 0; i < this.buffNodeList.length; i++) {
      this.buffNodeList[i]
        .getChildByName("Stack number")
        .getComponent(cc.Label).string = this.dynamicBuff[i].getCounting();
    }
  }
  onLevelUp() {
    OptionGenerator.instance.displayOptions();
    Utils.isPause = true;
    this.screenCover.active = true;
    this.levelUpLabel.node.active = true;
    this.statsPanel.active = true;
    this.upgradePanel.active = true;
  }
  updateTimer() {
    let timer = this.gameController.timer;
    var minus = Math.floor(timer / 60);
    var second = Math.floor(timer - minus * 60);
    this.minusLabel.string = (minus < 10 ? "0" : "") + minus;
    this.secondLabel.string = (second < 10 ? "0" : "") + second;

    // if (minus < 10) this.minusLabel.string = "0" + minus;
    // else this.minusLabel.string = minus.toString();

    // if (second < 10) this.secondLabel.string = "0" + second;
    // else this.secondLabel.string = second.toString();
  }
  updateStats() {
    this.overallStats = OverallStats.instance;
    this.hpAmount.string =
      Math.ceil(PlayerController.instance.currentHp) +
      " / " +
      Math.ceil(PlayerController.instance.maxHp);
    this.atkAmount.string = this.overallStats.getAttackRate().toString() + "%";
    this.spdAmount.string = this.overallStats.getSpeedRate().toString() + "%";
    this.crtAmount.string = this.overallStats.getCritChance().toString() + "%";
    this.pickupAmount.string =
      this.overallStats.getPickupRangeRate().toString() + "%";
    this.hasteAmount.string = this.overallStats.getHasteRate().toString() + "%";
  }
  onGameOver() {
    Utils.isPause = true;
    cc.tween(this.gameOverLabel)
      .to(3, { position: cc.v3(0, 200) })
      .start();
    this.scheduleOnce(function () {
      this.mainMenuButton.active = true;
      this.retryButton.active = true;
      this.gainedHolocoins.node.active = true;
      this.gainedHolocoins.string =
        "Holocoins Gained: " + this.coinLabel.string;
    }, 3);
  }

  onRetryButtonClick() {
    cc.director.loadScene("Gamescene");
  }
  onMainMenuButtonClick() {
    cc.director.loadScene("Main Menu");
  }
  update(dt) {
    if (Utils.isPause) {
      this.screenCover.active = true;
      return;
    }
    this.screenCover.active = false;
    this.updateTimer();
    this.updateBuff();
    // this.updateStats();
  }
}
