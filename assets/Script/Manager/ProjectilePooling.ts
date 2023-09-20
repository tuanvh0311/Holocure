// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ProjectilePooling extends cc.Component {
  static instance: ProjectilePooling;
  arrowPool: cc.NodePool = new cc.NodePool();
  mollyPool: cc.NodePool = new cc.NodePool();
  axePool: cc.NodePool = new cc.NodePool();
  shurikenPool: cc.NodePool = new cc.NodePool();
  trailPool: cc.NodePool = new cc.NodePool();
  projectilePool: Array<cc.NodePool> = new Array<cc.NodePool>();
  // LIFE-CYCLE CALLBACKS:
  putBackToPool(node: cc.Node) {
    if (!node) return;
    switch (node.name) {
      case "Arrow":
        this.arrowPool.put(node);
        break;
      case "Molly":
        this.mollyPool.put(node);
        break;
      case "Axe":
        this.axePool.put(node);
        break;
      case "Shuriken":
        this.shurikenPool.put(node);
        break;
      case "Trail":
        this.trailPool.put(node);
        break;
    }
  }
  onLoad() {
    ProjectilePooling.instance = this;
    let initCount = 1000;
    for (let i = 0; i < initCount; ++i) {
      let trail = new cc.Node("Trail");
      this.trailPool.put(trail);
    }
  }
  start() {}

  update(dt) {}
}
