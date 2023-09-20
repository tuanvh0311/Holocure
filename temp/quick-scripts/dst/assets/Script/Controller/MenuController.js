
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/MenuController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNZW51Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE2RkM7UUExRkMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBcUIsS0FBSyxFQUFhLENBQUM7UUFFckQsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBMEIsS0FBSyxFQUFrQixDQUFDO1FBRWhFLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRWhDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUVyQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFFckMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBR2pDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDOztJQTJEM0IsQ0FBQzt1QkE3Rm9CLGNBQWM7SUFtQ2pDLCtCQUFNLEdBQU47UUFDRSxlQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FB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QUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7dURBQ1U7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyREFDYztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJEQUNjO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7dURBQ1U7SUEvQmQsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTZGbEM7SUFBRCxxQkFBQztDQTdGRCxBQTZGQyxDQTdGMkMsRUFBRSxDQUFDLFNBQVMsR0E2RnZEO2tCQTdGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGluc3RhbmNlOiBNZW51Q29udHJvbGxlcjtcbiAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcbiAgZGF0YVBsYXllcjogY2MuSnNvbkFzc2V0ID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShBcnJheShjYy5QcmVmYWIpKVxuICBjaGFyYWN0ZXJMaXN0OiBBcnJheTxjYy5QcmVmYWI+ID0gQXJyYXk8Y2MuUHJlZmFiPigpO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGRpc3BsYXlOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShBcnJheShjYy5TcHJpdGVGcmFtZSkpXG4gIHdlYXBvbkljb25MaXN0OiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBBcnJheTxjYy5TcHJpdGVGcmFtZT4oKTtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBocEFtb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGF0a0Ftb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHNwZEFtb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGNydEFtb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICB3ZWFwb25JY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHdlYXBvbk5hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxuICBkZXNjcmlwdGlvbjogY2MuUmljaFRleHQgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBiYWNrZ3JvdW5kTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGNoYXJTZWxlY3RTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgYnV0dG9uU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGNoYXJhY3RlcnM7XG4gIGxldmVsO1xuICBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XG4gIG9uTG9hZCgpIHtcbiAgICBVdGlscy5zZXRMb2NhbChcIlNvdW5kXCIsIHRydWUpO1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucmVzdW1lKCk7XG4gICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wYXVzZSgpO1xuICAgIE1lbnVDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBudWxsKSBVdGlscy5zZXRMb2NhbChcIlNvdW5kXCIsIHRydWUpO1xuICAgIHRoaXMuY2hhcmFjdGVycyA9IHRoaXMuZGF0YVBsYXllci5qc29uLmNoYXJhY3RlcjtcbiAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lc2NlbmVcIik7XG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5sb2FkRGF0YSh0aGlzLmN1cnJlbnRJbmRleCk7XG4gIH1cbiAgb25QbGF5QnV0dG9uQ2xpY2soKSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uU291bmQsIGZhbHNlLCAxKTtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lc2NlbmVcIik7XG4gIH1cbiAgb25OZXh0Q2hhcmFjdGVyQ2xpY2soKSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY2hhclNlbGVjdFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICBsZXQgaW5kZXggPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRJbmRleCkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIHRoaXMubG9hZERhdGEoTWF0aC5hYnMoaW5kZXgpKTtcbiAgfVxuICBvblByZUNoYXJhY3RlckNsaWNrKCkge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmNoYXJTZWxlY3RTb3VuZCwgZmFsc2UsIDEpO1xuICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgbGV0IGluZGV4ID0gTWF0aC5hYnModGhpcy5jdXJyZW50SW5kZXgpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICB0aGlzLmxvYWREYXRhKE1hdGguYWJzKGluZGV4KSk7XG4gIH1cbiAgbG9hZERhdGEoaW5kZXg6IG51bWJlcikge1xuICAgIGxldCBjaGFyYWN0ZXJEYXRhID0gdGhpcy5jaGFyYWN0ZXJzW2luZGV4XTtcbiAgICBVdGlscy5zZXRDaGFyYWN0ZXIoY2hhcmFjdGVyRGF0YS5uYW1lKTtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoY2hhcmFjdGVyRGF0YS5uYW1lICsgXCJMVlwiKSA9PSBudWxsKSB7XG4gICAgICBVdGlscy5zZXRMb2NhbChjaGFyYWN0ZXJEYXRhLm5hbWUgKyBcIkxWXCIsIDEpO1xuICAgIH1cbiAgICB0aGlzLmxldmVsID0gVXRpbHMuZ2V0TG9jYWwoY2hhcmFjdGVyRGF0YS5uYW1lICsgXCJMVlwiKTtcbiAgICBVdGlscy5zZXRDaGFyYWN0ZXJMZXZlbCh0aGlzLmxldmVsKTtcbiAgICB0aGlzLmNoYXJhY3Rlci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIHRoaXMuY2hhcmFjdGVyLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHRoaXMuY2hhcmFjdGVyTGlzdFtpbmRleF0pKTtcbiAgICB0aGlzLmRpc3BsYXlOYW1lLnN0cmluZyA9IGNoYXJhY3RlckRhdGEubmFtZTtcbiAgICB0aGlzLmhwQW1vdW50LnN0cmluZyA9IGNoYXJhY3RlckRhdGEuc3RhdHNbdGhpcy5sZXZlbCAtIDFdLmhlYWx0aDtcbiAgICB0aGlzLmF0a0Ftb3VudC5zdHJpbmcgPSBcIjEuXCIgKyBjaGFyYWN0ZXJEYXRhLnN0YXRzW3RoaXMubGV2ZWwgLSAxXS5hdGs7XG4gICAgdGhpcy5zcGRBbW91bnQuc3RyaW5nID0gY2hhcmFjdGVyRGF0YS5zdGF0c1t0aGlzLmxldmVsIC0gMV0uc3BlZWQ7XG4gICAgdGhpcy5jcnRBbW91bnQuc3RyaW5nID0gY2hhcmFjdGVyRGF0YS5zdGF0c1t0aGlzLmxldmVsIC0gMV0uY3JpdCArIFwiJVwiO1xuICAgIHRoaXMud2VhcG9uSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMud2VhcG9uSWNvbkxpc3RbaW5kZXhdO1xuICAgIHRoaXMud2VhcG9uTmFtZS5zdHJpbmcgPSBjaGFyYWN0ZXJEYXRhLndlYXBvbjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnN0cmluZyA9IGNoYXJhY3RlckRhdGEud2VhcG9uRGVzO1xuICB9XG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnJlc3VtZSgpO1xuICAgIGVsc2UgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGF1c2UoKTtcbiAgfVxufVxuIl19