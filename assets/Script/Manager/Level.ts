// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameController from "../Controller/GameController";
import UIController from "../Controller/UIController";
import Utils from "../Controller/Utils";
import BaneOfRegeneration from "../Item/BaneOfRegeneration";
import BloodyTear from "../Item/BloodyTear";
import Dumbbell from "../Item/Dumbbell";
import EyePatch from "../Item/EyePatch";
import GrowthPill from "../Item/GrowthPill";
import HastePotion from "../Item/HastePotion";
import MightyStone from "../Item/MightyStone";
import Shield from "../Item/Shield";
import WisdomStone from "../Item/WisdomStone";
import OverallStats from "../Player/OverallStats";
import AxeThrower from "../Weapon/AxeThrower";
import Bow from "../Weapon/Bow";
import Melee from "../Weapon/Melee";
import MollyThrower from "../Weapon/MollyThrower";
import ShurikenThrower from "../Weapon/ShurikenThrower";
import Sword from "../Weapon/Sword";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level extends cc.Component {
  static instance: Level;

  @property(cc.Integer)
  level: number = 1;
  @property(cc.Float)
  experience: number = 0;
  expRequired: number = 0;
  @property(cc.AudioClip)
  levelUpSound: cc.AudioClip = null;
  addExperience(amount: number) {
    amount += (amount * OverallStats.instance.getBonusExpRate()) / 100;
    this.experience += amount;
  }
  calculateNextLevel() {
    const currentLevel = this.level;
    const nextLevel = currentLevel + 1;
    const element1 = Math.pow(4 * nextLevel, 2.1);
    const element2 = Math.pow(4 * currentLevel, 2.1);
    const roundedElement1 = Math.round(element1);
    const roundedElement2 = Math.round(element2);
    this.expRequired = roundedElement1 - roundedElement2;
  }
  // calculateNextLevelTest(current) {
  //   const currentLevel = current;
  //   const nextLevel = currentLevel + 1;
  //   const element1 = Math.pow(4 * nextLevel, 2.1);
  //   const element2 = Math.pow(4 * currentLevel, 2.1);
  //   const roundedElement1 = Math.round(element1);
  //   const roundedElement2 = Math.round(element2);
  //   var required = roundedElement1 - roundedElement2;
  //   console.log(required);
  // }
  checkLevelUp() {
    if (this.experience >= this.expRequired) {
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.levelUpSound, false, 1);
      var expLeft = this.experience - this.expRequired;
      this.level += 1;
      this.expRequired = this.expRequired * 1.2;
      this.experience = expLeft;
      this.calculateNextLevel();
      GameController.instance.onLevelUp();
    }
    var levelString = "LEVEL " + this.level;
    UIController.instance.updateExp(
      levelString,
      this.expRequired,
      this.experience
    );
  }
  onLoad() {
    Level.instance = this;
    this.calculateNextLevel();
  }

  start() {}

  update(dt) {
    if (Utils.isPause) return;
    this.checkLevelUp();
  }
}
