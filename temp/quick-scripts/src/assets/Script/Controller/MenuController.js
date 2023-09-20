"use strict";
cc._RF.push(module, '4fdb8FA7KlGu4Lj3S+YX40a', 'MenuController');
// Script/Controller/MenuController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuController = /** @class */ (function (_super) {
    __extends(MenuController, _super);
    function MenuController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataPlayer = null;
        _this.character = null;
        _this.characterList = Array();
        _this.displayName = null;
        _this.weaponIconList = Array();
        _this.hpAmount = null;
        _this.atkAmount = null;
        _this.spdAmount = null;
        _this.crtAmount = null;
        _this.weaponIcon = null;
        _this.weaponName = null;
        _this.description = null;
        _this.backgroundMusic = null;
        _this.charSelectSound = null;
        _this.buttonSound = null;
        _this.currentIndex = 0;
        return _this;
    }
    MenuController_1 = MenuController;
    MenuController.prototype.onLoad = function () {
        Utils_1.default.setLocal("Sound", true);
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.AudioSource).resume();
        else
            this.node.getComponent(cc.AudioSource).pause();
        MenuController_1.instance = this;
        if (Utils_1.default.getLocal("Sound") == null)
            Utils_1.default.setLocal("Sound", true);
        this.characters = this.dataPlayer.json.character;
        cc.director.preloadScene("Gamescene");
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.loadData(this.currentIndex);
    };
    MenuController.prototype.onPlayButtonClick = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        cc.director.loadScene("Gamescene");
    };
    MenuController.prototype.onNextCharacterClick = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.charSelectSound, false, 1);
        this.currentIndex++;
        var index = Math.abs(this.currentIndex) % this.characters.length;
        this.loadData(Math.abs(index));
    };
    MenuController.prototype.onPreCharacterClick = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.charSelectSound, false, 1);
        this.currentIndex--;
        var index = Math.abs(this.currentIndex) % this.characters.length;
        this.loadData(Math.abs(index));
    };
    MenuController.prototype.loadData = function (index) {
        var characterData = this.characters[index];
        Utils_1.default.setCharacter(characterData.name);
        if (Utils_1.default.getLocal(characterData.name + "LV") == null) {
            Utils_1.default.setLocal(characterData.name + "LV", 1);
        }
        this.level = Utils_1.default.getLocal(characterData.name + "LV");
        Utils_1.default.setCharacterLevel(this.level);
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
    };
    MenuController.prototype.start = function () { };
    MenuController.prototype.update = function (dt) {
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.AudioSource).resume();
        else
            this.node.getComponent(cc.AudioSource).pause();
    };
    var MenuController_1;
    __decorate([
        property(cc.JsonAsset)
    ], MenuController.prototype, "dataPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], MenuController.prototype, "character", void 0);
    __decorate([
        property(Array(cc.Prefab))
    ], MenuController.prototype, "characterList", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "displayName", void 0);
    __decorate([
        property(Array(cc.SpriteFrame))
    ], MenuController.prototype, "weaponIconList", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "hpAmount", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "atkAmount", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "spdAmount", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "crtAmount", void 0);
    __decorate([
        property(cc.Sprite)
    ], MenuController.prototype, "weaponIcon", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "weaponName", void 0);
    __decorate([
        property(cc.RichText)
    ], MenuController.prototype, "description", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MenuController.prototype, "backgroundMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MenuController.prototype, "charSelectSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MenuController.prototype, "buttonSound", void 0);
    MenuController = MenuController_1 = __decorate([
        ccclass
    ], MenuController);
    return MenuController;
}(cc.Component));
exports.default = MenuController;

cc._RF.pop();