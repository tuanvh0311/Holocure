// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class HealthAndShield extends cc.Component {
  static instance: HealthAndShield;
  @property(cc.Node)
  hpBar: cc.Node = null;
  @property(cc.Node)
  shieldBar: cc.Node = null;
  @property(cc.Node)
  hpBarUI: cc.Node = null;
  @property(cc.Node)
  shieldBarUI: cc.Node = null;
  @property(cc.Label)
  HpLabel: cc.Label = null;

  // LIFE-CYCLE CALLBACKS:
  timer: number = 0;
  onLoad() {
    HealthAndShield.instance = this;
  }

  start() {}

  setStateHP(current: number, max: number) {
    this.timer = 3;
    var state = current;
    state /= max;
    var hpString = Math.ceil(current) + " / " + Math.ceil(max);
    if (state < 0) state = 0;
    this.hpBar.scaleX = state;
    this.hpBarUI.scaleX = state;
    this.HpLabel.string = hpString;
  }
  setStateShield(current: number, max: number) {
    this.timer = 3;
    var state = current;
    state /= max;
    if (state < 0) state = 0;
    this.shieldBar.scaleX = state;
    this.shieldBarUI.scaleX = state;
  }
  setStateOnLoad(
    currentHp: number,
    maxHp: number,
    currentShield: number,
    maxShield: number
  ) {
    var stateHp = currentHp;
    stateHp /= maxHp;
    var hpString = Math.ceil(currentHp) + " / " + Math.ceil(maxHp);
    if (stateHp < 0) stateHp = 0;
    this.hpBar.scaleX = stateHp;
    this.hpBarUI.scaleX = stateHp;
    this.HpLabel.string = hpString;
    var StateShield = currentShield;
    StateShield /= maxShield;
    if (StateShield < 0) StateShield = 0;
    this.shieldBar.scaleX = StateShield;
    this.shieldBarUI.scaleX = StateShield;
  }

  update(dt) {
    this.timer -= dt;
    if (this.timer <= 0) {
      this.hpBar.parent.opacity = 0;
    } else {
      this.hpBar.parent.opacity = 255;
    }
  }
}
