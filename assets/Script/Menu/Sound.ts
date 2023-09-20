// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../Controller/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Sound extends cc.Component {
  static instance: Sound;
  @property(cc.SpriteFrame)
  audible: cc.SpriteFrame = null;
  @property(cc.SpriteFrame)
  mute: cc.SpriteFrame = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Sound.instance = this;
  }

  start() {}

  update(dt) {
    if (Utils.getLocal("Sound") == "true")
      this.node.getComponent(cc.Sprite).spriteFrame = this.audible;
    else this.node.getComponent(cc.Sprite).spriteFrame = this.mute;
  }
}
