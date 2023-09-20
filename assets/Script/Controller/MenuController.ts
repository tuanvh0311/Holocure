// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Utils from "./Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuController extends cc.Component {
  static instance: MenuController;
  @property(cc.JsonAsset)
  dataPlayer: cc.JsonAsset = null;
  @property(cc.Node)
  character: cc.Node = null;
  @property(Array(cc.Prefab))
  characterList: Array<cc.Prefab> = Array<cc.Prefab>();
  @property(cc.Label)
  displayName: cc.Label = null;
  @property(Array(cc.SpriteFrame))
  weaponIconList: Array<cc.SpriteFrame> = Array<cc.SpriteFrame>();
  @property(cc.Label)
  hpAmount: cc.Label = null;
  @property(cc.Label)
  atkAmount: cc.Label = null;
  @property(cc.Label)
  spdAmount: cc.Label = null;
  @property(cc.Label)
  crtAmount: cc.Label = null;
  @property(cc.Sprite)
  weaponIcon: cc.Sprite = null;
  @property(cc.Label)
  weaponName: cc.Label = null;
  @property(cc.RichText)
  description: cc.RichText = null;
  @property(cc.AudioClip)
  backgroundMusic: cc.AudioClip = null;
  @property(cc.AudioClip)
  charSelectSound: cc.AudioClip = null;
  @property(cc.AudioClip)
  buttonSound: cc.AudioClip = null;
  characters;
  level;
  currentIndex: number = 0;
  onLoad() {
    Utils.setLocal("Sound", true);
    if (Utils.getLocal("Sound") == "true")
      this.node.getComponent(cc.AudioSource).resume();
    else this.node.getComponent(cc.AudioSource).pause();
    MenuController.instance = this;
    if (Utils.getLocal("Sound") == null) Utils.setLocal("Sound", true);
    this.characters = this.dataPlayer.json.character;
    cc.director.preloadScene("Gamescene");
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
    this.loadData(this.currentIndex);
  }
  onPlayButtonClick() {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.buttonSound, false, 1);
    cc.director.loadScene("Gamescene");
  }
  onNextCharacterClick() {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.charSelectSound, false, 1);
    this.currentIndex++;
    let index = Math.abs(this.currentIndex) % this.characters.length;
    this.loadData(Math.abs(index));
  }
  onPreCharacterClick() {
    if (Utils.getLocal("Sound") == "true")
      cc.audioEngine.play(this.charSelectSound, false, 1);
    this.currentIndex--;
    let index = Math.abs(this.currentIndex) % this.characters.length;
    this.loadData(Math.abs(index));
  }
  loadData(index: number) {
    let characterData = this.characters[index];
    Utils.setCharacter(characterData.name);
    if (Utils.getLocal(characterData.name + "LV") == null) {
      Utils.setLocal(characterData.name + "LV", 1);
    }
    this.level = Utils.getLocal(characterData.name + "LV");
    Utils.setCharacterLevel(this.level);
    this.character.removeAllChildren();
    this.character.addChild(cc.instantiate(this.characterList[index]));
    this.displayName.string = characterData.name;
    this.hpAmount.string = characterData.stats[this.level - 1].health;
    this.atkAmount.string = "1." + characterData.stats[this.level - 1].atk;
    this.spdAmount.string = characterData.stats[this.level - 1].speed;
    this.crtAmount.string = characterData.stats[this.level - 1].crit + "%";
    this.weaponIcon.spriteFrame = this.weaponIconList[index];
    this.weaponName.string = characterData.weapon;
    this.description.string = characterData.weaponDes;
  }
  start() {}

  update(dt) {
    if (Utils.getLocal("Sound") == "true")
      this.node.getComponent(cc.AudioSource).resume();
    else this.node.getComponent(cc.AudioSource).pause();
  }
}
