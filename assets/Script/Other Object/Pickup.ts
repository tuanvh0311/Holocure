// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../Controller/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Pickup extends cc.Component {
  isPicking = false;
  speed: number = 100;

  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 7) {
      this.isPicking = true;
    }
  }

  onLoad() {}
  set() {
    this.isPicking = false;
    this.speed = 100;
  }
  moveToPlayer(dt: number) {
    var player = this.node.parent.getChildByName("PlayerBase");
    var deltaX = player.x - this.node.x;
    var deltaY = player.y - this.node.y;
    let normalizedDelta = cc.v2(deltaX, deltaY).normalize();
    this.node.x += normalizedDelta.x * this.speed * dt;
    this.node.y += normalizedDelta.y * this.speed * dt;
    this.speed += 20;
  }

  start() {}

  update(dt) {
    if (Utils.isPause) return;
    if (!this.isPicking) return;
    this.moveToPlayer(dt);
  }
}
