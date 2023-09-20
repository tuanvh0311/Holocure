// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SlotController extends cc.Component {
  @property(Array(cc.Node))
  weaponSlotList: Array<cc.Node> = new Array<cc.Node>();
  @property(Array(cc.Node))
  itemSlotList: Array<cc.Node> = new Array<cc.Node>();
  @property(cc.SpriteFrame)
  nullSpriteFrame: cc.SpriteFrame = null;
  itemList: Array<any> = new Array<any>();
  weaponList: Array<any> = new Array<any>();
  static instance: SlotController;
  onLoad() {
    SlotController.instance = this;
  }
  updateSlot() {
    this.itemList = GameController.instance.equipedItem;
    this.weaponList = GameController.instance.equipedWeapon;
    // console.log(this.weaponList);

    for (let i = 0; i < this.weaponSlotList.length; i++) {
      if (this.weaponList[i] == undefined) break;
      if (this.weaponList[i].displayIcon)
        this.weaponSlotList[i]
          .getChildByName("WeaponIcon")
          .getComponent(cc.Sprite).spriteFrame = this.weaponList[i].displayIcon;
      else
        this.weaponSlotList[i]
          .getChildByName("WeaponIcon")
          .getComponent(cc.Sprite).spriteFrame = this.nullSpriteFrame;
      this.weaponSlotList[i]
        .getChildByName("WeaponLevelLabel")
        .getComponent(cc.Label).string = "LV " + this.weaponList[i].level;
      this.weaponSlotList[i].getChildByName("WeaponIcon").opacity = 255;
    }
    for (let i = 0; i < this.itemSlotList.length; i++) {
      if (this.itemList[i] == undefined) break;
      if (this.itemList[i].displayIcon)
        this.itemSlotList[i]
          .getChildByName("ItemIcon")
          .getComponent(cc.Sprite).spriteFrame = this.itemList[i].displayIcon;
      else
        this.itemSlotList[i]
          .getChildByName("ItemIcon")
          .getComponent(cc.Sprite).spriteFrame = this.nullSpriteFrame;
      this.itemSlotList[i]
        .getChildByName("ItemLevelLabel")
        .getComponent(cc.Label).string = "LV " + this.itemList[i].level;
      this.itemSlotList[i].getChildByName("ItemIcon").opacity = 255;
    }
  }
  start() {}

  update(dt) {
    this.updateSlot();
  }
}
