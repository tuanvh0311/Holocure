
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/SlotController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '145b7r+bNZJHoxfw9nmx9MA', 'SlotController');
// Script/Controller/SlotController.ts

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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlotController = /** @class */ (function (_super) {
    __extends(SlotController, _super);
    function SlotController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weaponSlotList = new Array();
        _this.itemSlotList = new Array();
        _this.nullSpriteFrame = null;
        _this.itemList = new Array();
        _this.weaponList = new Array();
        return _this;
    }
    SlotController_1 = SlotController;
    SlotController.prototype.onLoad = function () {
        SlotController_1.instance = this;
    };
    SlotController.prototype.updateSlot = function () {
        this.itemList = GameController_1.default.instance.equipedItem;
        this.weaponList = GameController_1.default.instance.equipedWeapon;
        // console.log(this.weaponList);
        for (var i = 0; i < this.weaponSlotList.length; i++) {
            if (this.weaponList[i] == undefined)
                break;
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
        for (var i = 0; i < this.itemSlotList.length; i++) {
            if (this.itemList[i] == undefined)
                break;
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
    };
    SlotController.prototype.start = function () { };
    SlotController.prototype.update = function (dt) {
        this.updateSlot();
    };
    var SlotController_1;
    __decorate([
        property(Array(cc.Node))
    ], SlotController.prototype, "weaponSlotList", void 0);
    __decorate([
        property(Array(cc.Node))
    ], SlotController.prototype, "itemSlotList", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SlotController.prototype, "nullSpriteFrame", void 0);
    SlotController = SlotController_1 = __decorate([
        ccclass
    ], SlotController);
    return SlotController;
}(cc.Component));
exports.default = SlotController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTbG90Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFzREM7UUFwREMsb0JBQWMsR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUV0RCxrQkFBWSxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDO1FBRXBELHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUN2QyxjQUFRLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUN4QyxnQkFBVSxHQUFlLElBQUksS0FBSyxFQUFPLENBQUM7O0lBOEM1QyxDQUFDO3VCQXREb0IsY0FBYztJQVVqQywrQkFBTSxHQUFOO1FBQ0UsZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDeEQsZ0NBQWdDO1FBRWhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztnQkFBRSxNQUFNO1lBQzNDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztxQkFDbkIsY0FBYyxDQUFDLFlBQVksQ0FBQztxQkFDNUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7O2dCQUV4RSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztxQkFDbkIsY0FBYyxDQUFDLFlBQVksQ0FBQztxQkFDNUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNoRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDbkIsY0FBYyxDQUFDLGtCQUFrQixDQUFDO2lCQUNsQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUNuRTtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztnQkFBRSxNQUFNO1lBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDakIsY0FBYyxDQUFDLFVBQVUsQ0FBQztxQkFDMUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7O2dCQUV0RSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDakIsY0FBYyxDQUFDLFVBQVUsQ0FBQztxQkFDMUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDakIsY0FBYyxDQUFDLGdCQUFnQixDQUFDO2lCQUNoQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFDRCw4QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O0lBbkREO1FBREMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7MERBQzZCO0lBRXREO1FBREMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0RBQzJCO0lBRXBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkRBQ2M7SUFOcEIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXNEbEM7SUFBRCxxQkFBQztDQXRERCxBQXNEQyxDQXREMkMsRUFBRSxDQUFDLFNBQVMsR0FzRHZEO2tCQXREb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KEFycmF5KGNjLk5vZGUpKVxuICB3ZWFwb25TbG90TGlzdDogQXJyYXk8Y2MuTm9kZT4gPSBuZXcgQXJyYXk8Y2MuTm9kZT4oKTtcbiAgQHByb3BlcnR5KEFycmF5KGNjLk5vZGUpKVxuICBpdGVtU2xvdExpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgbnVsbFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIGl0ZW1MaXN0OiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgd2VhcG9uTGlzdDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIHN0YXRpYyBpbnN0YW5jZTogU2xvdENvbnRyb2xsZXI7XG4gIG9uTG9hZCgpIHtcbiAgICBTbG90Q29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cbiAgdXBkYXRlU2xvdCgpIHtcbiAgICB0aGlzLml0ZW1MaXN0ID0gR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZXF1aXBlZEl0ZW07XG4gICAgdGhpcy53ZWFwb25MaXN0ID0gR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZXF1aXBlZFdlYXBvbjtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndlYXBvbkxpc3QpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlYXBvblNsb3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy53ZWFwb25MaXN0W2ldID09IHVuZGVmaW5lZCkgYnJlYWs7XG4gICAgICBpZiAodGhpcy53ZWFwb25MaXN0W2ldLmRpc3BsYXlJY29uKVxuICAgICAgICB0aGlzLndlYXBvblNsb3RMaXN0W2ldXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiV2VhcG9uSWNvblwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud2VhcG9uTGlzdFtpXS5kaXNwbGF5SWNvbjtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy53ZWFwb25TbG90TGlzdFtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIldlYXBvbkljb25cIilcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm51bGxTcHJpdGVGcmFtZTtcbiAgICAgIHRoaXMud2VhcG9uU2xvdExpc3RbaV1cbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiV2VhcG9uTGV2ZWxMYWJlbFwiKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIkxWIFwiICsgdGhpcy53ZWFwb25MaXN0W2ldLmxldmVsO1xuICAgICAgdGhpcy53ZWFwb25TbG90TGlzdFtpXS5nZXRDaGlsZEJ5TmFtZShcIldlYXBvbkljb25cIikub3BhY2l0eSA9IDI1NTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1TbG90TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaXRlbUxpc3RbaV0gPT0gdW5kZWZpbmVkKSBicmVhaztcbiAgICAgIGlmICh0aGlzLml0ZW1MaXN0W2ldLmRpc3BsYXlJY29uKVxuICAgICAgICB0aGlzLml0ZW1TbG90TGlzdFtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkl0ZW1JY29uXCIpXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtTGlzdFtpXS5kaXNwbGF5SWNvbjtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5pdGVtU2xvdExpc3RbaV1cbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJJdGVtSWNvblwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubnVsbFNwcml0ZUZyYW1lO1xuICAgICAgdGhpcy5pdGVtU2xvdExpc3RbaV1cbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiSXRlbUxldmVsTGFiZWxcIilcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJMViBcIiArIHRoaXMuaXRlbUxpc3RbaV0ubGV2ZWw7XG4gICAgICB0aGlzLml0ZW1TbG90TGlzdFtpXS5nZXRDaGlsZEJ5TmFtZShcIkl0ZW1JY29uXCIpLm9wYWNpdHkgPSAyNTU7XG4gICAgfVxuICB9XG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLnVwZGF0ZVNsb3QoKTtcbiAgfVxufVxuIl19