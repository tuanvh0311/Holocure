// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Movement from "../Controller/Movement";
import EnemyController from "../Enemy/EnemyController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyDetector extends cc.Component {
  static instance: EnemyDetector;
  // LIFE-CYCLE CALLBACKS:
  closestDistance: number = 100000;
  closestEnemy: cc.Node = null;

  enemyList: Array<cc.Node> = new Array<cc.Node>();
  distanceList: Array<number> = new Array<number>();
  onLoad() {
    EnemyDetector.instance = this;
  }
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 1) {
      other.node.getComponent(EnemyController).isInRange = true;
      this.enemyList.push(other.node);
      //   if (this.closestDistance >= distance) {
      //     this.closestDistance = distance;
      //     this.closestEnemy = other.node;
      //     this.angle =
      //       Math.atan2(
      //         this.closestEnemy.y - this.node.parent.y,
      //         this.closestEnemy.x - this.node.parent.x
      //       ) *
      //       (180 / Math.PI);
      //   }
    }
  }
  onCollisionExit(other: cc.Collider, self: cc.Collider) {
    if (other.tag == 1) {
      other.node.getComponent(EnemyController).isInRange = false;
    }
  }
  start() {}
  removeFromList() {
    this.enemyList = this.enemyList
      .filter((item) => item.getComponent(EnemyController).currentHp > 0)
      .filter((item) => item.getComponent(EnemyController).isInRange == true);
  }

  sortList() {
    this.enemyList = this.enemyList.sort(
      (a, b) =>
        a.getComponent(EnemyController).distance -
        b.getComponent(EnemyController).distance
    );
  }
  update(dt) {
    this.removeFromList();
    this.sortList();

    // if (this.closestEnemy == null) {
    //   this.angle = Movement.instance.directionAngle;
    //   this.closestDistance = 1000000;
    //   return;
    // }
    // if (this.closestEnemy.getComponent(EnemyController).currentHp <= 0) {
    //   this.closestEnemy = null;
    // }
  }
}
