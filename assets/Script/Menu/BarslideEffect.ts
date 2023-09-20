// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuEffect extends cc.Component {
  startPoint: cc.Vec2 = cc.v2(800, -215);
  endPoint: cc.Vec2 = cc.v2(-800, -215);
  onLoad() {}

  start() {}

  update(dt) {
    this.node.x -= dt * 100;
    if (this.node.x <= this.endPoint.x) this.node.x = this.startPoint.x;
  }
}
