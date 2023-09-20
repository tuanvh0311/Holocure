// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../Controller/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DestroyableObject extends cc.Component {
  @property(cc.Prefab)
  food: cc.Prefab = null;
  @property(cc.Float)
  foodDropChance = 20;

  takeDamage() {
    this.node.destroy();
  }
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 2) {
      this.takeDamage();
    }
  }
  protected onDestroy(): void {
    if (Utils.random(0, 100) < this.foodDropChance) {
      var food = cc.instantiate(this.food);

      food.position = this.node.position;
    }
  }

  start() {}

  update(dt) {}
}
