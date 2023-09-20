// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Node)
  Player: cc.Node = null;
  @property(cc.Node)
  UI: cc.Node = null;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  update(dt) {
    this.node.setPosition(this.Player.position);
    this.UI.setPosition(this.Player.position);
  }
}
