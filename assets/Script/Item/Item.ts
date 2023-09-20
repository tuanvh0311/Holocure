// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import OverallStats from "../Player/OverallStats";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Item extends cc.Component {
  level: number = 0;
  @property(cc.Float)
  maxLevel: number = 5;
  isEquiped: boolean = false;
  isLockLevel: boolean = false;
  description: string = null;
  @property(cc.SpriteFrame)
  displayIcon: cc.SpriteFrame = null;
  overallStats: OverallStats;
  dt: number = 0;
  name: string;
  onLevelMax() {
    if (this.level >= this.maxLevel) {
      this.isLockLevel = true;
    }
  }
  // onLoad () {}
  itemOnLoad() {
    this.overallStats = OverallStats.instance;
    GameController.instance.addItem(this);
    this.name = this.node.name;
  }
  onLevelUp() {
    if (this.isLockLevel) return;
    this.level += 1;
    this.onLevelMax();
    console.log(this.level);
  }
  start() {}
  update(dt) {}
}
