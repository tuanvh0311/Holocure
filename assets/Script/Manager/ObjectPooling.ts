// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Coin from "../Other Object/Coin";
import Experience from "../Other Object/Experience";
import Food from "../Other Object/Food";
import Magnet from "../Other Object/Magnet";
import Pickup from "../Other Object/Pickup";

const { ccclass, property } = cc._decorator;

@ccclass
export default class objectPooling extends cc.Component {
  static instance: objectPooling;
  @property(Array(cc.Prefab))
  expPrefab: Array<cc.Prefab> = new Array<cc.Prefab>();
  @property(cc.Prefab)
  coinPrefab: cc.Prefab = null;
  @property(cc.Prefab)
  foodPrefab: cc.Prefab = null;
  @property(cc.Prefab)
  rainbowExpPrefab: cc.Prefab = null;
  @property(cc.Node)
  gameplay: cc.Node = null;
  expPool: Array<cc.NodePool> = new Array<cc.NodePool>();
  coinPool: cc.NodePool = new cc.NodePool();
  foodPool: cc.NodePool = new cc.NodePool();
  rainbowExpPool: cc.NodePool = new cc.NodePool();
  expList: Array<cc.Node> = new Array<cc.Node>();
  coinList: Array<cc.Node> = new Array<cc.Node>();
  magnetList: Array<cc.Node> = new Array<cc.Node>();
  onLoad() {
    objectPooling.instance = this;
    this.addToArrayPool();
    let initCount = 500;
    for (let j = 0; j < this.expPool.length; j++) {
      for (let i = 0; i < initCount; ++i) {
        let exp = cc.instantiate(this.expPrefab[j]);
        this.expPool[j].put(exp);
      }
    }
  }
  start() {}

  addToArrayPool() {
    for (let i = 0; i < this.expPrefab.length; i++) {
      var expType = new cc.NodePool();
      this.expPool.push(expType);
    }
  }
  generateExp(node: cc.Node, expGained: number) {
    let exp: cc.Node = null;
    let type: number = null;
    if (expGained > 0) type = 1;
    if (expGained > 10) type = 2;
    if (expGained > 19) type = 3;
    if (expGained > 49) type = 4;
    if (expGained > 99) type = 5;
    if (expGained > 200) type = 6;

    if (this.expPool[type - 1].size() > 0) {
      exp = this.expPool[type - 1].get();
    } else {
      exp = cc.instantiate(this.expPrefab[type - 1]);
    }
    exp.getComponent(Experience).set(expGained);
    exp.getComponent(Pickup).set();
    this.addToExpList(exp);
    exp.parent = this.gameplay;
    exp.position = node.position;
  }
  generateCoin(node: cc.Node, amount: number) {
    let coin: cc.Node = null;
    if (this.coinPool.size() > 0) {
      coin = this.coinPool.get();
    } else {
      coin = cc.instantiate(this.coinPrefab);
    }
    coin.getComponent(Coin).set(amount);
    coin.getComponent(Pickup).set();
    this.addToCoinList(coin);
    coin.parent = this.gameplay;
    coin.position = node.position;
  }
  generateFood(node: cc.Node) {
    let food: cc.Node = null;
    if (this.foodPool.size() > 0) {
      food = this.foodPool.get();
    } else {
      food = cc.instantiate(this.foodPrefab);
    }
    food.getComponent(Pickup).set();
    food.parent = this.gameplay;
    food.position = node.position;
  }
  generateMagnet(node: cc.Node) {
    let magnet: cc.Node = null;
    this.addToMagnetList(magnet);
    magnet = cc.instantiate(this.rainbowExpPrefab);
    magnet.getComponent(Pickup).set();
    magnet.parent = this.gameplay;
    magnet.position = node.position;
  }
  addToExpList(node: cc.Node) {
    this.expList.push(node);
  }
  addToCoinList(node: cc.Node) {
    this.coinList.push(node);
  }
  addToMagnetList(node: cc.Node) {
    this.magnetList.push(node);
  }
  putBackToPool(node: cc.Node) {
    if (!node) return;
    switch (node.name) {
      case "Exp1":
        this.expPool[0].put(node);
        break;
      case "Exp2":
        this.expPool[1].put(node);
        break;
      case "Exp3":
        this.expPool[2].put(node);
        break;
      case "Exp4":
        this.expPool[3].put(node);
        break;
      case "Exp5":
        this.expPool[4].put(node);
        break;
      case "Exp6":
        this.expPool[5].put(node);
        break;
      case "Coin":
        this.coinPool.put(node);
        break;
      case "Food":
        this.foodPool.put(node);
        break;
    }
  }
  removeFromList() {
    this.expList = this.expList.filter(
      (item) => item.getComponent(Experience).isLooted !== true
    );
    this.coinList = this.coinList.filter(
      (item) => item.getComponent(Coin).isLooted !== true
    );
  }
  onMagnetPickup() {
    this.expList.forEach((element) => {
      element.getComponent(Pickup).isPicking = true;
    });
    this.coinList.forEach((element) => {
      element.getComponent(Pickup).isPicking = true;
    });
    this.magnetList.forEach((element) => {
      if (element != null && element.active)
        element.getComponent(Pickup).isPicking = true;
    });
  }
  protected update(dt: number): void {
    this.removeFromList();
  }
}
