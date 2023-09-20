// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import Utils from "../Controller/Utils";
import objectPooling from "../Manager/ObjectPooling";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Coin extends cc.Component {
  @property(cc.Integer)
  amount = 10;
  @property(cc.AudioClip)
  getCoinSound: cc.AudioClip = null;
  isLooted: boolean = false;
  onLoad() {
    this.node.zIndex = 10001;
    objectPooling.instance.addToCoinList(this.node);
  }
  set(amount: number) {
    this.amount = amount;
    this.isLooted = false;
  }
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.getCoinSound, false, 1);
      GameController.instance.gainCoin(this.amount);
      this.isLooted = true;
      objectPooling.instance.putBackToPool(this.node);
    }
  }
}
