// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import objectPooling from "../Manager/ObjectPooling";
import PlayerController from "../Player/PlayerController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Food extends cc.Component {
  @property(cc.Integer)
  healAmount = 20;
  onLoad() {
    this.node.zIndex = 10001;
  }

  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 0) {
      other.node
        .getComponent(PlayerController)
        .healByPercentage(this.healAmount);
      objectPooling.instance.putBackToPool(this.node);
    }
  }

  start() {}

  // update (dt) {}
}
