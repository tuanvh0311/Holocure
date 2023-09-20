// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Item from "../Item/Item";
import Sword from "../Weapon/Sword";

const { ccclass, property } = cc._decorator;
class Option {
  optionType: string;
  weight: number;

  constructor(optionType: string, weight: number) {
    this.optionType = optionType;
    this.weight = weight;
  }
}
class Player {
  unpickedSkills: number;
  allSkillsFullyLeveled: boolean;
  unpickedWeapons: number;
  unpickedItems: number;
  weaponEquipped: boolean;
  itemEquipped: boolean;

  constructor() {
    // Initialize player's attributes, such as unpicked skills, weapons, and items, equipped weapon/item status, etc.
    this.unpickedSkills = 3; // Assuming the player has 3 unpicked skills initially.
    this.allSkillsFullyLeveled = false;
    this.unpickedWeapons = 5; // Assuming the player has 5 unpicked weapons initially.
    this.unpickedItems = 7; // Assuming the player has 7 unpicked items initially.
    this.weaponEquipped = true; // Assuming the player has a weapon equipped initially.
    this.itemEquipped = true; // Assuming the player has an item equipped initially.
  }

  // Function to check if the player can be offered a skill option
  canOfferSkill(): boolean {
    return this.unpickedSkills > 0 && !this.allSkillsFullyLeveled;
  }

  // Function to check if the player can be offered a weapon option
  canOfferWeapon(): boolean {
    return this.unpickedWeapons > 0 && !this.weaponEquipped;
  }

  // Function to check if the player can be offered an item option
  canOfferItem(): boolean {
    return this.unpickedItems > 0 && !this.itemEquipped;
  }
}
@ccclass
export default class NewClass extends cc.Component {
  // Function to randomly select an option from the given list
  selectRandomOption(list: Option[]): Option {
    const totalWeight = list.reduce((sum, option) => sum + option.weight, 0);
    let randomWeight = Math.floor(Math.random() * totalWeight);

    for (const option of list) {
      randomWeight -= option.weight;
      if (randomWeight < 0) {
        return option;
      }
    }

    // In case something went wrong, return the last option in the list
    return list[list.length - 1];
  }

  // Function to generate a list of options for a specific option type
  generateOptionList(optionType: string): Option[] {
    // Assuming different options for each option type with varying weights.
    // Replace these with your actual options and weights.
    let options: Option[] = [];
    if (optionType === "skill") {
      options.push(new Option("SkillOption1", 1));
      options.push(new Option("SkillOption2", 1));
      options.push(new Option("SkillOption3", 1));
    } else if (optionType === "weapon") {
      options.push(new Option("WeaponOption1", 2));
      options.push(new Option("WeaponOption2", 3));
      options.push(new Option("WeaponOption3", 1));
    } else if (optionType === "item") {
      options.push(new Option("ItemOption1", 2));
      options.push(new Option("ItemOption2", 2));
      options.push(new Option("ItemOption3", 4));
    } else if (optionType === "StatUp") {
      options.push(new Option("StatUpOption", 1));
    }

    return options;
  }

  // Function to simulate option selection for each option slot
  selectOptions(player: Player): Option[] {
    let options: Option[] = [];

    // Option 1
    let optionType1: string;
    const random1 = Math.random();
    if (random1 < 7 / 20) {
      optionType1 = "skill";
    } else if (random1 < 14 / 20) {
      optionType1 = "weapon";
    } else if (random1 < 19 / 20) {
      optionType1 = "item";
    } else {
      optionType1 = "StatUp";
    }

    let optionList1 = this.generateOptionList(optionType1);

    if (!player.canOfferSkill()) {
      optionList1 = optionList1.filter(
        (option) => option.optionType !== "skill"
      );
      if (!player.canOfferWeapon()) {
        optionList1 = optionList1.filter(
          (option) => option.optionType !== "weapon"
        );
        if (!player.canOfferItem()) {
          optionList1 = optionList1.filter(
            (option) => option.optionType !== "item"
          );
        }
      }
    }

    options.push(this.selectRandomOption(optionList1));
    // Option 2
    let optionType2: string;
    const random2 = Math.random();
    if (random2 < 7 / 20) {
      optionType2 = "skill";
    } else if (random2 < 14 / 20) {
      optionType2 = "weapon";
    } else if (random2 < 19 / 20) {
      optionType2 = "item";
    } else {
      optionType2 = "StatUp";
    }

    let optionList2 = this.generateOptionList(optionType2);

    if (!player.canOfferSkill()) {
      optionList2 = optionList2.filter(
        (option) => option.optionType !== "skill"
      );
      if (!player.canOfferWeapon()) {
        optionList2 = optionList2.filter(
          (option) => option.optionType !== "weapon"
        );
        if (!player.canOfferItem()) {
          optionList2 = optionList2.filter(
            (option) => option.optionType !== "item"
          );
        }
      }
    }

    options.push(this.selectRandomOption(optionList2));

    // Option 3
    let optionType3: string;
    const random3 = Math.random();
    if (random3 < 0.5) {
      optionType3 = "weapon";
    } else {
      optionType3 = "item";
    }

    let optionList3 = this.generateOptionList(optionType3);

    if (!player.canOfferWeapon()) {
      optionList3 = optionList3.filter(
        (option) => option.optionType !== "weapon"
      );
      if (!player.canOfferItem()) {
        optionList3 = optionList3.filter(
          (option) => option.optionType !== "item"
        );
        if (!player.canOfferSkill()) {
          optionList3 = optionList3.filter(
            (option) => option.optionType === "skill"
          );
        }
      }
    }

    // Try up to 5 times to get an option from the list if skill option is not available.
    let maxTries = 5;
    while (maxTries > 0) {
      const selectedOption = this.selectRandomOption(optionList3);
      if (selectedOption.optionType === "skill") {
        options.push(selectedOption);
        break;
      }
      maxTries--;
    }

    // If the previous check fails, add the food option to the options list.
    if (maxTries === 0) {
      options.push(new Option("FoodOption", 1));
    }

    // Option 4
    let optionType4: string;
    const random4 = Math.random();
    if (random4 < 0.5) {
      optionType4 = "weapon";
    } else {
      optionType4 = "item";
    }

    let optionList4 = this.generateOptionList(optionType4);

    if (!player.canOfferWeapon() && !player.canOfferItem()) {
      options.push(new Option("HoloCoinOption", 1));
    } else {
      // Try up to 5 times to get an option from the list if the first type is not available.
      maxTries = 5;
      while (maxTries > 0) {
        const selectedOption = this.selectRandomOption(optionList4);
        if (
          (selectedOption.optionType === "weapon" && player.canOfferWeapon()) ||
          (selectedOption.optionType === "item" && player.canOfferItem())
        ) {
          options.push(selectedOption);
          break;
        }
        maxTries--;
      }

      // If the previous check fails, add the HoloCoin option to the options list.
      if (maxTries === 0) {
        options.push(new Option("HoloCoinOption", 1));
      }
    }

    return options;
  }

  // Usage example

  // LIFE-CYCLE CALLBACKS:
  @property(cc.Node)
  sword: cc.Node = null;
  onLoad() {
    const player = new Player();
    const selectedOptions = this.selectOptions(player);
    selectedOptions.forEach((element) => {
      console.log(element.optionType, element.weight);
    });
  }

  update(dt) {}
}
