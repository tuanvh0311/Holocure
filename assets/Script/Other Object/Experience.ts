// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../Controller/Utils";
import Level from "../Manager/Level";
import objectPooling from "../Manager/ObjectPooling";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Experience extends cc.Component {
  @property(cc.Float)
  exp: number = 10;
  @property(cc.AudioClip)
  getExpSound: cc.AudioClip = null;
  isLooted: boolean = false;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.zIndex = 10000;
    objectPooling.instance.addToExpList(this.node);
  }
  set(exp: number) {
    this.exp = exp;
    this.isLooted = false;
  }
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.getExpSound, false, 1);
      Level.instance.addExperience(this.exp);
      this.isLooted = true;
      objectPooling.instance.putBackToPool(this.node);
    }
  }
  start() {}

  // update (dt) {}
}
