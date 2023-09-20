// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../Controller/Utils";
import objectPooling from "../Manager/ObjectPooling";
import Pickup from "./Pickup";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Magnet extends cc.Component {
  @property(cc.AudioClip)
  getExpSound: cc.AudioClip = null;
  onLoad() {
    this.node.zIndex = 10002;
    objectPooling.instance.addToMagnetList(this.node);
  }

  start() {}
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 0) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.getExpSound, false, 1);
      this.node.destroy();
      objectPooling.instance.onMagnetPickup();
    }
  }
  update(dt) {}
}
