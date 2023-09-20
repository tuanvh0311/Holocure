// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class KnightyMilk extends Item {
  static instance: KnightyMilk;
  @property(cc.Float)
  sizeIncreaseRate: number = 10;
  @property(cc.Float)
  pickUpRangeIncreaseRate: number = 30;
  currentLevel = this.level;

  onLoad() {
    KnightyMilk.instance = this;
    this.description =
      "Increases attack size of weapons by 5%. Also increase Pick Up Range by 30%.";
    this.itemOnLoad();
    this.itemOnLoad();
  }

  start() {}

  // update (dt) {}
}
