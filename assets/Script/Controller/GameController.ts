import BaneOfRegeneration from "../Item/BaneOfRegeneration";
import BloodyTear from "../Item/BloodyTear";
import Dumbbell from "../Item/Dumbbell";
import EyePatch from "../Item/EyePatch";
import GrowthPill from "../Item/GrowthPill";
import Item from "../Item/Item";
import AxeThrower from "../Weapon/AxeThrower";
import Bow from "../Weapon/Bow";
import MollyThrower from "../Weapon/MollyThrower";
import ShurikenThrower from "../Weapon/ShurikenThrower";
import Sword from "../Weapon/Sword";
import Weapon from "../Weapon/Weapon";
import SlotController from "./SlotController";
import UIController from "./UIController";
import Utils from "./Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {
  static instance: GameController;
  @property(cc.AudioClip)
  gameOverSound: cc.AudioClip = null;
  timer: number = 0;
  // LIFE-CYCLE CALLBACKS:
  killAmount: number = 0;
  coinAmount: number = 0;
  dynamicBuff: Array<any> = new Array<any>();
  itemList: Array<any> = new Array<any>();
  weaponList: Array<any> = new Array<any>();
  equipedWeapon: Array<any> = new Array<any>();
  equipedItem: Array<any> = new Array<any>();
  isGameOver: boolean = null;
  onLoad() {
    GameController.instance = this;
    Utils.isPause = false;

    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
  }
  gainKill() {
    this.killAmount++;
    UIController.instance.updateKillLabel(this.killAmount);
  }
  gainCoin(amount) {
    this.coinAmount += amount;
    UIController.instance.updateCoinLabel(this.coinAmount);
  }
  takeDamage() {
    for (let i = 0; i < this.dynamicBuff.length; i++) {
      this.dynamicBuff[i].onTakeDamage();
    }
  }
  addWeapon(weapon: Weapon) {
    this.weaponList.push(weapon);
  }
  addEquipedWeapon(weapon: Weapon) {
    this.equipedWeapon.push(weapon);
  }
  addItem(item: Item) {
    this.itemList.push(item);
  }
  addEquipedItem(item: Item) {
    this.equipedItem.push(item);
  }
  onLevelUp() {
    UIController.instance.onLevelUp();
  }

  start() {
    SlotController.instance.updateSlot();
  }
  tuyetvong() {
    for (let i = 0; i < this.weaponList.length; i++) {
      this.weaponList[i].onLevelUp();
    }
    for (let i = 0; i < this.itemList.length; i++) {
      this.itemList[i].onLevelUp();
    }
  }
  onGameOver() {
    this.isGameOver = true;
    this.equipedItem.forEach((element) => {
      element.isEquiped = false;
    });
    this.equipedWeapon.forEach((element) => {
      element.isEquiped = false;
    });

    this.scheduleOnce(function () {
      this.node.getComponent(cc.AudioSource).pause();
      UIController.instance.onGameOver();
      if (Utils.getLocal("Sound") == "true")
        cc.audioEngine.play(this.gameOverSound, false, 1);
    }, 3);
  }

  update(dt) {
    if (Utils.getLocal("Sound") == "true")
      this.node.getComponent(cc.AudioSource).resume();
    else this.node.getComponent(cc.AudioSource).pause();
    if (Utils.isPause) {
      return;
    }
    this.timer += dt;
  }
}
