// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../Controller/Utils";
import Sound from "./Sound";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Button extends cc.Component {
  @property(cc.SpriteFrame)
  normalSpr: cc.SpriteFrame = null;
  @property(cc.SpriteFrame)
  hoverSpr: cc.SpriteFrame = null;
  @property(cc.Node)
  other: cc.Node = null;
  @property(cc.Boolean)
  isFaded: boolean = false;
  @property(cc.AudioClip)
  buttonSound: cc.AudioClip = null;
  @property(cc.Boolean)
  changeOnHover: boolean = true;
  onLoad() {
    this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onTouchStart, this, true);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onTouchEnd, this, true);
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
  }
  onTouchStart(event) {
    if (!this.changeOnHover) return;
    this.node.getChildByName("Label").color = new cc.Color(0, 0, 0);
    this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame =
      this.hoverSpr;
    this.node.getChildByName("Background").opacity = 255;
    if (this.other) this.other.color = new cc.Color(0, 0, 0);
  }
  onSoundButtonCLick() {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.buttonSound, false, 1);
    if (Utils.getLocal("Sound") == "true") {
      Utils.setLocal("Sound", false);
    } else {
      Utils.setLocal("Sound", true);
    }
  }
  onTouchEnd(event) {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.buttonSound, false, 1);
    if (!this.changeOnHover) return;
    this.node.getChildByName("Label").color = new cc.Color(255, 255, 255);
    this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame =
      this.normalSpr;
    if (this.isFaded) {
      this.node.getChildByName("Background").opacity = 150;
    }
    if (this.other) this.other.color = new cc.Color(255, 255, 255);
  }
  start() {}

  update(dt) {}
}
