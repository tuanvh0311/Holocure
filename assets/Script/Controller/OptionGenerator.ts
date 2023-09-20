// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import OverallStats from "../Player/OverallStats";
import PlayerController from "../Player/PlayerController";
import Weapon from "../Weapon/Weapon";
import GameController from "./GameController";
import SlotController from "./SlotController";

const { ccclass, property } = cc._decorator;

class Other {
  name: string;
  increaseAmount: number;
  description: string;
  displayIcon: cc.SpriteFrame;
  constructor(
    statName: string,
    increaseAmount: number,
    des: string,
    displayIcon: cc.SpriteFrame
  ) {
    this.name = statName;
    this.increaseAmount = increaseAmount;
    this.description = des;
    this.displayIcon = displayIcon;
  }
}
class Option {
  upgrade: any;
  type: string;
  constructor(upgrade: Array<any>, type: string) {
    this.upgrade = upgrade;
    this.type = type;
  }
}
@ccclass
export default class OptionGenerator extends cc.Component {
  static instance: OptionGenerator;
  @property(Array(cc.Node))
  upgrade: Array<cc.Node> = new Array<cc.Node>();
  @property(Array(cc.SpriteFrame))
  otherIconList: Array<cc.SpriteFrame> = new Array<cc.SpriteFrame>();
  otherList: Array<any> = new Array<any>();
  options: Option[] = [];
  list: Array<any> = new Array<any>();
  itemList: Array<any> = new Array<any>();
  weaponList: Array<any> = new Array<any>();
  equipedWeapon: Array<any> = new Array<any>();
  equipedItem: Array<any> = new Array<any>();
  currentType: string;
  positionList: Array<cc.Vec3> = new Array<cc.Vec3>();
  onLoad() {
    OptionGenerator.instance = this;
    this.otherList.push(
      new Other(
        "Max HP Up",
        10,
        "Increase max HP by 10%",
        this.otherIconList[0]
      )
    );
    this.otherList.push(
      new Other("ATK Up", 8, "Increase ATK by 8%", this.otherIconList[1])
    );
    this.otherList.push(
      new Other("SPD Up", 12, "Increase SPD by 12%", this.otherIconList[2])
    );
    this.otherList.push(
      new Other(
        "Crit Up",
        3,
        "Increase critical chance by 3%",
        this.otherIconList[3]
      )
    );
    this.otherList.push(
      new Other(
        "Pick Up Range",
        20,
        "Increase pick up range by 20%",
        this.otherIconList[4]
      )
    );
    this.otherList.push(
      new Other("Haste Up", 5, "Increase haste by 5%", this.otherIconList[5])
    );
    this.otherList.push(
      new Other("Coin", 250, "Gain 250 coins", this.otherIconList[6])
    );
    this.otherList.push(
      new Other("Burger", 20, "Heal 20% max HP", this.otherIconList[7])
    );
    this.list.push(this.itemList);
    this.list.push(this.weaponList);
    this.list.push(this.equipedItem);
    this.list.push(this.equipedWeapon);
  }
  onOptionSelect(index: any) {
    if (
      this.options[index].type == "weapon" ||
      this.options[index].type == "item"
    ) {
      this.options[index].upgrade.level += 1;
    }
    switch (this.options[index].type) {
      case "burger":
        PlayerController.instance.healByPercentage(
          this.options[index].upgrade.increaseAmount
        );
        break;
      case "coin":
        GameController.instance.gainCoin(
          this.options[index].upgrade.increaseAmount
        );
        break;
      case "statUp":
        let name = this.options[index].upgrade.name;
        let amount = this.options[index].upgrade.increaseAmount;
        if (name == "Max HP Up")
          OverallStats.instance.increaseMaxHPRate(amount);
        if (name == "ATK Up") OverallStats.instance.increaseAttackRate(amount);
        if (name == "SPD Up") OverallStats.instance.increaseSpeedRate(amount);
        if (name == "Crit Up") OverallStats.instance.increaseCritChance(amount);
        if (name == "Pick Up Range")
          OverallStats.instance.increasePickupRangeRate(amount);
        if (name == "Haste Up") OverallStats.instance.increaseHasteRate(amount);
        break;
      default:
        break;
    }

    SlotController.instance.updateSlot();
    GameController.instance.tuyetvong();
  }
  optionSelection(list: any[]) {
    const random1 = Math.floor(Math.random() * list.length);
    var option = list[random1];
    switch (this.currentType) {
      case "item":
        this.itemList.splice(random1, 1);
        break;
      case "weapon":
        this.weaponList.splice(random1, 1);
        break;
      case "equipedWeapon":
        this.equipedWeapon.splice(random1, 1);
        break;
      case "equipedItem":
        this.equipedItem.splice(random1, 1);
        break;
      default:
        break;
    }
    return option;
  }
  generateOptionList(optionType: string) {
    let options: any[] = [];
    const random = Math.random();
    if (optionType === "weapon") {
      if (GameController.instance.equipedWeapon.length >= 6) {
        options = this.equipedWeapon;
        this.currentType = "equipedWeapon";
      } else {
        if (random < 0.5) {
          options = this.equipedWeapon;
          this.currentType = "equipedWeapon";
          if (options.length == 0) {
            options = this.weaponList;
            this.currentType = "weapon";
          }
        } else {
          options = this.weaponList;
          this.currentType = "weapon";
          if (options.length == 0) {
            options = this.equipedWeapon;
            this.currentType = "equipedWeapon";
          }
        }
      }
    } else if (optionType === "item") {
      if (GameController.instance.equipedItem.length >= 6) {
        options = this.equipedItem;
        this.currentType = "equipedItem";
      } else {
        if (random < 0.5) {
          options = this.equipedItem;
          this.currentType = "equipedItem";
          if (options.length == 0) {
            options = this.itemList;
            this.currentType = "item";
          }
        } else {
          options = this.itemList;
          this.currentType = "item";
          if (options.length == 0) {
            options = this.equipedItem;
            this.currentType = "equipedItem";
          }
        }
      }
    } else if (optionType === "statUp") {
      options = this.otherList.filter(
        (item) => item.name != "Burger" && item.name != "Coin"
      );
    } else if (optionType === "burger") {
      options = this.otherList.filter((item) => item.name == "Burger");
    } else if (optionType === "coin") {
      options = this.otherList.filter((item) => item.name == "Coin");
    }
    return options;
  }
  generateOption1() {
    let optionType1: string = null;
    let optionList1;

    const random1 = Math.random();

    if (random1 < 9.5 / 20) {
      optionType1 = "weapon";
      optionList1 = this.generateOptionList(optionType1);
      if (optionList1.length == 0) {
        optionType1 = "item";
        optionList1 = this.generateOptionList(optionType1);
      }
      if (optionList1.length == 0) {
        optionType1 = "statUp";
        optionList1 = this.generateOptionList(optionType1);
      }
    } else if (random1 < 19 / 20) {
      optionType1 = "item";
      optionList1 = this.generateOptionList(optionType1);

      if (optionList1.length == 0) {
        optionType1 = "statUp";
        optionList1 = this.generateOptionList(optionType1);
      }
    } else {
      optionType1 = "statUp";
      optionList1 = this.generateOptionList(optionType1);
    }
    this.options.push(
      new Option(this.optionSelection(optionList1), optionType1)
    );
    /////////////////////////////////
    let optionType2: string = null;
    let optionList2;

    const random2 = Math.random();

    if (random2 < 9.5 / 20) {
      optionType2 = "weapon";
      optionList2 = this.generateOptionList(optionType2);
      if (optionList2.length == 0) {
        optionType2 = "item";
        optionList2 = this.generateOptionList(optionType2);
      }
      if (optionList2.length == 0) {
        optionType2 = "burger";
        optionList2 = this.generateOptionList(optionType2);
      }
    } else if (random2 < 19 / 20) {
      optionType2 = "item";
      optionList2 = this.generateOptionList(optionType2);

      if (optionList2.length == 0) {
        optionType2 = "burger";
        optionList2 = this.generateOptionList(optionType2);
      }
    } else {
      optionType2 = "burger";
      optionList2 = this.generateOptionList(optionType2);
    }
    this.options.push(
      new Option(this.optionSelection(optionList2), optionType2)
    );
    /////////////////////////
    let optionType3: string = null;
    let optionList3 = [];

    const random3 = Math.random();
    for (let i = 0; i < 5; i++) {
      if (random3 < 10 / 20) {
        optionType3 = "weapon";
        optionList3 = this.generateOptionList(optionType3);
      } else if (random3 < 20 / 20) {
        optionType3 = "item";
        optionList3 = this.generateOptionList(optionType3);
      }
      if (optionList3.length > 0) {
        break;
      }
    }
    if (optionList3.length == 0) {
      optionType3 = "coin";
      optionList3 = this.generateOptionList(optionType3);
    }
    this.options.push(
      new Option(this.optionSelection(optionList3), optionType3)
    );
  }
  generateOption2() {
    let optionType2: string = null;
    let optionList2;

    const random1 = Math.random();

    if (random1 < 9.5 / 20) {
      optionType2 = "weapon";
      optionList2 = this.generateOptionList(optionType2);
      if (optionList2.length == 0) {
        optionType2 = "item";
        optionList2 = this.generateOptionList(optionType2);
      }
      if (optionList2.length == 0) {
        optionType2 = "burger";
        optionList2 = this.generateOptionList(optionType2);
      }
    } else if (random1 < 19 / 20) {
      optionType2 = "item";
      optionList2 = this.generateOptionList(optionType2);

      if (optionList2.length == 0) {
        optionType2 = "burger";
        optionList2 = this.generateOptionList(optionType2);
      }
    } else {
      optionType2 = "burger";
      optionList2 = this.generateOptionList(optionType2);
    }
    this.options.push(
      new Option(this.optionSelection(optionList2), optionType2)
    );
  }
  generateOption3() {
    let optionType3: string = null;
    let optionList3 = [];

    const random3 = Math.random();
    for (let i = 0; i < 5; i++) {
      if (random3 < 10 / 20) {
        optionType3 = "weapon";
        optionList3 = this.generateOptionList(optionType3);
      } else if (random3 < 20 / 20) {
        optionType3 = "item";
        optionList3 = this.generateOptionList(optionType3);
      }
      if (optionList3.length > 0) {
        break;
      }
    }
    if (optionList3.length == 0) {
      optionType3 = "coin";
      optionList3 = this.generateOptionList(optionType3);
    }
    this.options.push(
      new Option(this.optionSelection(optionList3), optionType3)
    );
  }

  generateOptions() {
    this.weaponList.length = 0;
    this.itemList.length = 0;
    this.equipedItem.length = 0;
    this.equipedWeapon.length = 0;
    GameController.instance.weaponList.forEach((element) => {
      if (element.isEquiped == false && !element.isLockLevel)
        this.weaponList.push(element);
    });
    GameController.instance.itemList.forEach((element) => {
      if (element.isEquiped == false && !element.isLockLevel)
        this.itemList.push(element);
    });
    GameController.instance.equipedItem.forEach((element) => {
      if (element.isEquiped == true && !element.isLockLevel)
        this.equipedItem.push(element);
    });
    GameController.instance.equipedWeapon.forEach((element) => {
      if (element.isEquiped == true && !element.isLockLevel)
        this.equipedWeapon.push(element);
    });
    this.generateOption1();

    // this.generateOption2();

    // this.generateOption3();
    // console.log(this.options);
  }
  displayOptions() {
    for (let i = 0; i < this.upgrade.length; i++) {
      this.upgrade[i].x += 1000;
      cc.tween(this.upgrade[i])
        .to(0.1, {
          position: cc.v3(this.positionList[i]),
        })
        .start();
    }
    this.options.length = 0;
    this.generateOptions();
    for (let i = 0; i < this.upgrade.length; i++) {
      if (this.options[i] == undefined) continue;
      if (this.options[i].type == "weapon" || this.options[i].type == "item") {
        this.upgrade[i]
          .getChildByName("Upgrade Name")
          .getComponent(cc.Label).string = this.options[i].upgrade.name;
        if (this.options[i].upgrade.level > 0) {
          this.upgrade[i]
            .getChildByName("Upgrade Name")
            .getComponent(cc.Label).string =
            this.options[i].upgrade.name +
            " LV " +
            (this.options[i].upgrade.level + 1);
        }

        this.upgrade[i].getChildByName("New").active = false;
        if (this.options[i].upgrade.isEquiped == false) {
          this.upgrade[i].getChildByName("New").active = true;
        }
        this.upgrade[i]
          .getChildByName("Description")
          .getComponent(cc.RichText).string =
          this.options[i].upgrade.description;
        this.upgrade[i]
          .getChildByName("Upgrade")
          .getComponentInChildren(cc.Sprite).spriteFrame =
          this.options[i].upgrade.displayIcon;
      }
      if (
        this.options[i].type == "statUp" ||
        this.options[i].type == "coin" ||
        this.options[i].type == "burger"
      ) {
        this.upgrade[i]
          .getChildByName("Upgrade Name")
          .getComponent(cc.Label).string = this.options[i].upgrade.name;
        this.upgrade[i].getChildByName("New").active = false;
        this.upgrade[i]
          .getChildByName("Description")
          .getComponent(cc.RichText).string =
          this.options[i].upgrade.description;
        this.upgrade[i]
          .getChildByName("Upgrade")
          .getComponentInChildren(cc.Sprite).spriteFrame =
          this.options[i].upgrade.displayIcon;
      }
    }
  }

  start() {
    this.upgrade.forEach((element) => {
      this.positionList.push(element.position);
    });
  }

  update(dt) {}
}
