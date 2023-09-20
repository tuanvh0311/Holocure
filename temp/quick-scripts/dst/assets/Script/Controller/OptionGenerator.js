
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/OptionGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd90fcTBpmpOyIwBqVo41EuQ', 'OptionGenerator');
// Script/Controller/OptionGenerator.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var PlayerController_1 = require("../Player/PlayerController");
var GameController_1 = require("./GameController");
var SlotController_1 = require("./SlotController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Other = /** @class */ (function () {
    function Other(statName, increaseAmount, des, displayIcon) {
        this.name = statName;
        this.increaseAmount = increaseAmount;
        this.description = des;
        this.displayIcon = displayIcon;
    }
    return Other;
}());
var Option = /** @class */ (function () {
    function Option(upgrade, type) {
        this.upgrade = upgrade;
        this.type = type;
    }
    return Option;
}());
var OptionGenerator = /** @class */ (function (_super) {
    __extends(OptionGenerator, _super);
    function OptionGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.upgrade = new Array();
        _this.otherIconList = new Array();
        _this.otherList = new Array();
        _this.options = [];
        _this.list = new Array();
        _this.itemList = new Array();
        _this.weaponList = new Array();
        _this.equipedWeapon = new Array();
        _this.equipedItem = new Array();
        _this.positionList = new Array();
        return _this;
    }
    OptionGenerator_1 = OptionGenerator;
    OptionGenerator.prototype.onLoad = function () {
        OptionGenerator_1.instance = this;
        this.otherList.push(new Other("Max HP Up", 10, "Increase max HP by 10%", this.otherIconList[0]));
        this.otherList.push(new Other("ATK Up", 8, "Increase ATK by 8%", this.otherIconList[1]));
        this.otherList.push(new Other("SPD Up", 12, "Increase SPD by 12%", this.otherIconList[2]));
        this.otherList.push(new Other("Crit Up", 3, "Increase critical chance by 3%", this.otherIconList[3]));
        this.otherList.push(new Other("Pick Up Range", 20, "Increase pick up range by 20%", this.otherIconList[4]));
        this.otherList.push(new Other("Haste Up", 5, "Increase haste by 5%", this.otherIconList[5]));
        this.otherList.push(new Other("Coin", 250, "Gain 250 coins", this.otherIconList[6]));
        this.otherList.push(new Other("Burger", 20, "Heal 20% max HP", this.otherIconList[7]));
        this.list.push(this.itemList);
        this.list.push(this.weaponList);
        this.list.push(this.equipedItem);
        this.list.push(this.equipedWeapon);
    };
    OptionGenerator.prototype.onOptionSelect = function (index) {
        if (this.options[index].type == "weapon" ||
            this.options[index].type == "item") {
            this.options[index].upgrade.level += 1;
        }
        switch (this.options[index].type) {
            case "burger":
                PlayerController_1.default.instance.healByPercentage(this.options[index].upgrade.increaseAmount);
                break;
            case "coin":
                GameController_1.default.instance.gainCoin(this.options[index].upgrade.increaseAmount);
                break;
            case "statUp":
                var name = this.options[index].upgrade.name;
                var amount = this.options[index].upgrade.increaseAmount;
                if (name == "Max HP Up")
                    OverallStats_1.default.instance.increaseMaxHPRate(amount);
                if (name == "ATK Up")
                    OverallStats_1.default.instance.increaseAttackRate(amount);
                if (name == "SPD Up")
                    OverallStats_1.default.instance.increaseSpeedRate(amount);
                if (name == "Crit Up")
                    OverallStats_1.default.instance.increaseCritChance(amount);
                if (name == "Pick Up Range")
                    OverallStats_1.default.instance.increasePickupRangeRate(amount);
                if (name == "Haste Up")
                    OverallStats_1.default.instance.increaseHasteRate(amount);
                break;
            default:
                break;
        }
        SlotController_1.default.instance.updateSlot();
        GameController_1.default.instance.tuyetvong();
    };
    OptionGenerator.prototype.optionSelection = function (list) {
        var random1 = Math.floor(Math.random() * list.length);
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
    };
    OptionGenerator.prototype.generateOptionList = function (optionType) {
        var options = [];
        var random = Math.random();
        if (optionType === "weapon") {
            if (GameController_1.default.instance.equipedWeapon.length >= 6) {
                options = this.equipedWeapon;
                this.currentType = "equipedWeapon";
            }
            else {
                if (random < 0.5) {
                    options = this.equipedWeapon;
                    this.currentType = "equipedWeapon";
                    if (options.length == 0) {
                        options = this.weaponList;
                        this.currentType = "weapon";
                    }
                }
                else {
                    options = this.weaponList;
                    this.currentType = "weapon";
                    if (options.length == 0) {
                        options = this.equipedWeapon;
                        this.currentType = "equipedWeapon";
                    }
                }
            }
        }
        else if (optionType === "item") {
            if (GameController_1.default.instance.equipedItem.length >= 6) {
                options = this.equipedItem;
                this.currentType = "equipedItem";
            }
            else {
                if (random < 0.5) {
                    options = this.equipedItem;
                    this.currentType = "equipedItem";
                    if (options.length == 0) {
                        options = this.itemList;
                        this.currentType = "item";
                    }
                }
                else {
                    options = this.itemList;
                    this.currentType = "item";
                    if (options.length == 0) {
                        options = this.equipedItem;
                        this.currentType = "equipedItem";
                    }
                }
            }
        }
        else if (optionType === "statUp") {
            options = this.otherList.filter(function (item) { return item.name != "Burger" && item.name != "Coin"; });
        }
        else if (optionType === "burger") {
            options = this.otherList.filter(function (item) { return item.name == "Burger"; });
        }
        else if (optionType === "coin") {
            options = this.otherList.filter(function (item) { return item.name == "Coin"; });
        }
        return options;
    };
    OptionGenerator.prototype.generateOption1 = function () {
        var optionType1 = null;
        var optionList1;
        var random1 = Math.random();
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
        }
        else if (random1 < 19 / 20) {
            optionType1 = "item";
            optionList1 = this.generateOptionList(optionType1);
            if (optionList1.length == 0) {
                optionType1 = "statUp";
                optionList1 = this.generateOptionList(optionType1);
            }
        }
        else {
            optionType1 = "statUp";
            optionList1 = this.generateOptionList(optionType1);
        }
        this.options.push(new Option(this.optionSelection(optionList1), optionType1));
        /////////////////////////////////
        var optionType2 = null;
        var optionList2;
        var random2 = Math.random();
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
        }
        else if (random2 < 19 / 20) {
            optionType2 = "item";
            optionList2 = this.generateOptionList(optionType2);
            if (optionList2.length == 0) {
                optionType2 = "burger";
                optionList2 = this.generateOptionList(optionType2);
            }
        }
        else {
            optionType2 = "burger";
            optionList2 = this.generateOptionList(optionType2);
        }
        this.options.push(new Option(this.optionSelection(optionList2), optionType2));
        /////////////////////////
        var optionType3 = null;
        var optionList3 = [];
        var random3 = Math.random();
        for (var i = 0; i < 5; i++) {
            if (random3 < 10 / 20) {
                optionType3 = "weapon";
                optionList3 = this.generateOptionList(optionType3);
            }
            else if (random3 < 20 / 20) {
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
        this.options.push(new Option(this.optionSelection(optionList3), optionType3));
    };
    OptionGenerator.prototype.generateOption2 = function () {
        var optionType2 = null;
        var optionList2;
        var random1 = Math.random();
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
        }
        else if (random1 < 19 / 20) {
            optionType2 = "item";
            optionList2 = this.generateOptionList(optionType2);
            if (optionList2.length == 0) {
                optionType2 = "burger";
                optionList2 = this.generateOptionList(optionType2);
            }
        }
        else {
            optionType2 = "burger";
            optionList2 = this.generateOptionList(optionType2);
        }
        this.options.push(new Option(this.optionSelection(optionList2), optionType2));
    };
    OptionGenerator.prototype.generateOption3 = function () {
        var optionType3 = null;
        var optionList3 = [];
        var random3 = Math.random();
        for (var i = 0; i < 5; i++) {
            if (random3 < 10 / 20) {
                optionType3 = "weapon";
                optionList3 = this.generateOptionList(optionType3);
            }
            else if (random3 < 20 / 20) {
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
        this.options.push(new Option(this.optionSelection(optionList3), optionType3));
    };
    OptionGenerator.prototype.generateOptions = function () {
        var _this = this;
        this.weaponList.length = 0;
        this.itemList.length = 0;
        this.equipedItem.length = 0;
        this.equipedWeapon.length = 0;
        GameController_1.default.instance.weaponList.forEach(function (element) {
            if (element.isEquiped == false && !element.isLockLevel)
                _this.weaponList.push(element);
        });
        GameController_1.default.instance.itemList.forEach(function (element) {
            if (element.isEquiped == false && !element.isLockLevel)
                _this.itemList.push(element);
        });
        GameController_1.default.instance.equipedItem.forEach(function (element) {
            if (element.isEquiped == true && !element.isLockLevel)
                _this.equipedItem.push(element);
        });
        GameController_1.default.instance.equipedWeapon.forEach(function (element) {
            if (element.isEquiped == true && !element.isLockLevel)
                _this.equipedWeapon.push(element);
        });
        this.generateOption1();
        // this.generateOption2();
        // this.generateOption3();
        // console.log(this.options);
    };
    OptionGenerator.prototype.displayOptions = function () {
        for (var i = 0; i < this.upgrade.length; i++) {
            this.upgrade[i].x += 1000;
            cc.tween(this.upgrade[i])
                .to(0.1, {
                position: cc.v3(this.positionList[i]),
            })
                .start();
        }
        this.options.length = 0;
        this.generateOptions();
        for (var i = 0; i < this.upgrade.length; i++) {
            if (this.options[i] == undefined)
                continue;
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
            if (this.options[i].type == "statUp" ||
                this.options[i].type == "coin" ||
                this.options[i].type == "burger") {
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
    };
    OptionGenerator.prototype.start = function () {
        var _this = this;
        this.upgrade.forEach(function (element) {
            _this.positionList.push(element.position);
        });
    };
    OptionGenerator.prototype.update = function (dt) { };
    var OptionGenerator_1;
    __decorate([
        property(Array(cc.Node))
    ], OptionGenerator.prototype, "upgrade", void 0);
    __decorate([
        property(Array(cc.SpriteFrame))
    ], OptionGenerator.prototype, "otherIconList", void 0);
    OptionGenerator = OptionGenerator_1 = __decorate([
        ccclass
    ], OptionGenerator);
    return OptionGenerator;
}(cc.Component));
exports.default = OptionGenerator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxPcHRpb25HZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUUxRCxtREFBOEM7QUFDOUMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBS0UsZUFDRSxRQUFnQixFQUNoQixjQUFzQixFQUN0QixHQUFXLEVBQ1gsV0FBMkI7UUFFM0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUNILFlBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBQ0Q7SUFHRSxnQkFBWSxPQUFtQixFQUFFLElBQVk7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQUVEO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBa2FDO1FBL1pDLGFBQU8sR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUUvQyxtQkFBYSxHQUEwQixJQUFJLEtBQUssRUFBa0IsQ0FBQztRQUNuRSxlQUFTLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUN6QyxhQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFVBQUksR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQ3BDLGNBQVEsR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQ3hDLGdCQUFVLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUMxQyxtQkFBYSxHQUFlLElBQUksS0FBSyxFQUFPLENBQUM7UUFDN0MsaUJBQVcsR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBRTNDLGtCQUFZLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7O0lBb1p0RCxDQUFDO3dCQWxhb0IsZUFBZTtJQWVsQyxnQ0FBTSxHQUFOO1FBQ0UsaUJBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixJQUFJLEtBQUssQ0FDUCxXQUFXLEVBQ1gsRUFBRSxFQUNGLHdCQUF3QixFQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUN0QixDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3BFLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3RFLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsSUFBSSxLQUFLLENBQ1AsU0FBUyxFQUNULENBQUMsRUFDRCxnQ0FBZ0MsRUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FDdEIsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLElBQUksS0FBSyxDQUNQLGVBQWUsRUFDZixFQUFFLEVBQ0YsK0JBQStCLEVBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3RCLENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDeEUsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDaEUsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbEUsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsd0NBQWMsR0FBZCxVQUFlLEtBQVU7UUFDdkIsSUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxRQUFRO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFDbEM7WUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNoQyxLQUFLLFFBQVE7Z0JBQ1gsMEJBQWdCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQzNDLENBQUM7Z0JBQ0YsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FDM0MsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDNUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUN4RCxJQUFJLElBQUksSUFBSSxXQUFXO29CQUNyQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxJQUFJLElBQUksUUFBUTtvQkFBRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxJQUFJLElBQUksUUFBUTtvQkFBRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxJQUFJLElBQUksU0FBUztvQkFBRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxJQUFJLElBQUksZUFBZTtvQkFDekIsc0JBQVksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hELElBQUksSUFBSSxJQUFJLFVBQVU7b0JBQUUsc0JBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hFLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFFRCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBQ0QseUNBQWUsR0FBZixVQUFnQixJQUFXO1FBQ3pCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNO1lBQ1IsS0FBSyxlQUFlO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07WUFDUixLQUFLLGFBQWE7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCw0Q0FBa0IsR0FBbEIsVUFBbUIsVUFBa0I7UUFDbkMsSUFBSSxPQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDckQsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDaEIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO29CQUNuQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO3dCQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7cUJBQzdCO2lCQUNGO3FCQUFNO29CQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztvQkFDNUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO3FCQUNwQztpQkFDRjthQUNGO1NBQ0Y7YUFBTSxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7WUFDaEMsSUFBSSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkQsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDaEIsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO29CQUNqQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO3dCQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7cUJBQzNCO2lCQUNGO3FCQUFNO29CQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztvQkFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO3FCQUNsQztpQkFDRjthQUNGO1NBQ0Y7YUFBTSxJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUM3QixVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUE1QyxDQUE0QyxDQUN2RCxDQUFDO1NBQ0g7YUFBTSxJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQXJCLENBQXFCLENBQUMsQ0FBQztTQUNsRTthQUFNLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNELHlDQUFlLEdBQWY7UUFDRSxJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUM7UUFDL0IsSUFBSSxXQUFXLENBQUM7UUFFaEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTlCLElBQUksT0FBTyxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUU7WUFDdEIsV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25ELElBQUksV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEQ7WUFDRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMzQixXQUFXLEdBQUcsUUFBUSxDQUFDO2dCQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0Y7YUFBTSxJQUFJLE9BQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFDckIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVuRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMzQixXQUFXLEdBQUcsUUFBUSxDQUFDO2dCQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0Y7YUFBTTtZQUNMLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNmLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQzNELENBQUM7UUFDRixpQ0FBaUM7UUFDakMsSUFBSSxXQUFXLEdBQVcsSUFBSSxDQUFDO1FBQy9CLElBQUksV0FBVyxDQUFDO1FBRWhCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU5QixJQUFJLE9BQU8sR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFO1lBQ3RCLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMzQixXQUFXLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDM0IsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwRDtTQUNGO2FBQU0sSUFBSSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM1QixXQUFXLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFbkQsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDM0IsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwRDtTQUNGO2FBQU07WUFDTCxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDZixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUMzRCxDQUFDO1FBQ0YseUJBQXlCO1FBQ3pCLElBQUksV0FBVyxHQUFXLElBQUksQ0FBQztRQUMvQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDckIsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwRDtpQkFBTSxJQUFJLE9BQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUM1QixXQUFXLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDMUIsTUFBTTthQUNQO1NBQ0Y7UUFDRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzNCLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFDckIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNmLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDO0lBQ0QseUNBQWUsR0FBZjtRQUNFLElBQUksV0FBVyxHQUFXLElBQUksQ0FBQztRQUMvQixJQUFJLFdBQVcsQ0FBQztRQUVoQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFOUIsSUFBSSxPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtZQUN0QixXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkQsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDM0IsV0FBVyxHQUFHLE1BQU0sQ0FBQztnQkFDckIsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwRDtZQUNELElBQUksV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEQ7U0FDRjthQUFNLElBQUksT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDNUIsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRW5ELElBQUksV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEQ7U0FDRjthQUFNO1lBQ0wsV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FDM0QsQ0FBQztJQUNKLENBQUM7SUFDRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxXQUFXLEdBQVcsSUFBSSxDQUFDO1FBQy9CLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUVyQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNyQixXQUFXLEdBQUcsUUFBUSxDQUFDO2dCQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNLElBQUksT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQzVCLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEQ7WUFDRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixNQUFNO2FBQ1A7U0FDRjtRQUNELElBQUksV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDM0IsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FDM0QsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQUEsaUJBMkJDO1FBMUJDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM5Qix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNqRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7Z0JBQ3BELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDL0MsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO2dCQUNwRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILHdCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ2xELElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNwRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7Z0JBQ25ELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLDBCQUEwQjtRQUUxQiwwQkFBMEI7UUFDMUIsNkJBQTZCO0lBQy9CLENBQUM7SUFDRCx3Q0FBYyxHQUFkO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RCLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QyxDQUFDO2lCQUNELEtBQUssRUFBRSxDQUFDO1NBQ1o7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztnQkFBRSxTQUFTO1lBQzNDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtnQkFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ1osY0FBYyxDQUFDLGNBQWMsQ0FBQztxQkFDOUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUNaLGNBQWMsQ0FBQyxjQUFjLENBQUM7eUJBQzlCLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTt3QkFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSTs0QkFDNUIsTUFBTTs0QkFDTixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdkM7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDckQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO29CQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNyRDtnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFDWixjQUFjLENBQUMsYUFBYSxDQUFDO3FCQUM3QixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU07b0JBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ1osY0FBYyxDQUFDLFNBQVMsQ0FBQztxQkFDekIsc0JBQXNCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVc7b0JBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUN2QztZQUNELElBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTTtnQkFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxFQUNoQztnQkFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFDWixjQUFjLENBQUMsY0FBYyxDQUFDO3FCQUM5QixZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUNaLGNBQWMsQ0FBQyxhQUFhLENBQUM7cUJBQzdCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTTtvQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFDWixjQUFjLENBQUMsU0FBUyxDQUFDO3FCQUN6QixzQkFBc0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVztvQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sRUFBRSxJQUFHLENBQUM7O0lBOVpiO1FBREMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0RBQ3NCO0lBRS9DO1FBREMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7MERBQ21DO0lBTGhELGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FrYW5DO0lBQUQsc0JBQUM7Q0FsYUQsQUFrYUMsQ0FsYTRDLEVBQUUsQ0FBQyxTQUFTLEdBa2F4RDtrQkFsYW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IE92ZXJhbGxTdGF0cyBmcm9tIFwiLi4vUGxheWVyL092ZXJhbGxTdGF0c1wiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuLi9XZWFwb24vV2VhcG9uXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBTbG90Q29udHJvbGxlciBmcm9tIFwiLi9TbG90Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jbGFzcyBPdGhlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaW5jcmVhc2VBbW91bnQ6IG51bWJlcjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZGlzcGxheUljb246IGNjLlNwcml0ZUZyYW1lO1xuICBjb25zdHJ1Y3RvcihcbiAgICBzdGF0TmFtZTogc3RyaW5nLFxuICAgIGluY3JlYXNlQW1vdW50OiBudW1iZXIsXG4gICAgZGVzOiBzdHJpbmcsXG4gICAgZGlzcGxheUljb246IGNjLlNwcml0ZUZyYW1lXG4gICkge1xuICAgIHRoaXMubmFtZSA9IHN0YXROYW1lO1xuICAgIHRoaXMuaW5jcmVhc2VBbW91bnQgPSBpbmNyZWFzZUFtb3VudDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzO1xuICAgIHRoaXMuZGlzcGxheUljb24gPSBkaXNwbGF5SWNvbjtcbiAgfVxufVxuY2xhc3MgT3B0aW9uIHtcbiAgdXBncmFkZTogYW55O1xuICB0eXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHVwZ3JhZGU6IEFycmF5PGFueT4sIHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMudXBncmFkZSA9IHVwZ3JhZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkdlbmVyYXRvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogT3B0aW9uR2VuZXJhdG9yO1xuICBAcHJvcGVydHkoQXJyYXkoY2MuTm9kZSkpXG4gIHVwZ3JhZGU6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIEBwcm9wZXJ0eShBcnJheShjYy5TcHJpdGVGcmFtZSkpXG4gIG90aGVySWNvbkxpc3Q6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiA9IG5ldyBBcnJheTxjYy5TcHJpdGVGcmFtZT4oKTtcbiAgb3RoZXJMaXN0OiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgb3B0aW9uczogT3B0aW9uW10gPSBbXTtcbiAgbGlzdDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIGl0ZW1MaXN0OiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgd2VhcG9uTGlzdDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIGVxdWlwZWRXZWFwb246IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICBlcXVpcGVkSXRlbTogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIGN1cnJlbnRUeXBlOiBzdHJpbmc7XG4gIHBvc2l0aW9uTGlzdDogQXJyYXk8Y2MuVmVjMz4gPSBuZXcgQXJyYXk8Y2MuVmVjMz4oKTtcbiAgb25Mb2FkKCkge1xuICAgIE9wdGlvbkdlbmVyYXRvci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5vdGhlckxpc3QucHVzaChcbiAgICAgIG5ldyBPdGhlcihcbiAgICAgICAgXCJNYXggSFAgVXBcIixcbiAgICAgICAgMTAsXG4gICAgICAgIFwiSW5jcmVhc2UgbWF4IEhQIGJ5IDEwJVwiLFxuICAgICAgICB0aGlzLm90aGVySWNvbkxpc3RbMF1cbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXCJBVEsgVXBcIiwgOCwgXCJJbmNyZWFzZSBBVEsgYnkgOCVcIiwgdGhpcy5vdGhlckljb25MaXN0WzFdKVxuICAgICk7XG4gICAgdGhpcy5vdGhlckxpc3QucHVzaChcbiAgICAgIG5ldyBPdGhlcihcIlNQRCBVcFwiLCAxMiwgXCJJbmNyZWFzZSBTUEQgYnkgMTIlXCIsIHRoaXMub3RoZXJJY29uTGlzdFsyXSlcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXG4gICAgICAgIFwiQ3JpdCBVcFwiLFxuICAgICAgICAzLFxuICAgICAgICBcIkluY3JlYXNlIGNyaXRpY2FsIGNoYW5jZSBieSAzJVwiLFxuICAgICAgICB0aGlzLm90aGVySWNvbkxpc3RbM11cbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXG4gICAgICAgIFwiUGljayBVcCBSYW5nZVwiLFxuICAgICAgICAyMCxcbiAgICAgICAgXCJJbmNyZWFzZSBwaWNrIHVwIHJhbmdlIGJ5IDIwJVwiLFxuICAgICAgICB0aGlzLm90aGVySWNvbkxpc3RbNF1cbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXCJIYXN0ZSBVcFwiLCA1LCBcIkluY3JlYXNlIGhhc3RlIGJ5IDUlXCIsIHRoaXMub3RoZXJJY29uTGlzdFs1XSlcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXCJDb2luXCIsIDI1MCwgXCJHYWluIDI1MCBjb2luc1wiLCB0aGlzLm90aGVySWNvbkxpc3RbNl0pXG4gICAgKTtcbiAgICB0aGlzLm90aGVyTGlzdC5wdXNoKFxuICAgICAgbmV3IE90aGVyKFwiQnVyZ2VyXCIsIDIwLCBcIkhlYWwgMjAlIG1heCBIUFwiLCB0aGlzLm90aGVySWNvbkxpc3RbN10pXG4gICAgKTtcbiAgICB0aGlzLmxpc3QucHVzaCh0aGlzLml0ZW1MaXN0KTtcbiAgICB0aGlzLmxpc3QucHVzaCh0aGlzLndlYXBvbkxpc3QpO1xuICAgIHRoaXMubGlzdC5wdXNoKHRoaXMuZXF1aXBlZEl0ZW0pO1xuICAgIHRoaXMubGlzdC5wdXNoKHRoaXMuZXF1aXBlZFdlYXBvbik7XG4gIH1cbiAgb25PcHRpb25TZWxlY3QoaW5kZXg6IGFueSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9uc1tpbmRleF0udHlwZSA9PSBcIndlYXBvblwiIHx8XG4gICAgICB0aGlzLm9wdGlvbnNbaW5kZXhdLnR5cGUgPT0gXCJpdGVtXCJcbiAgICApIHtcbiAgICAgIHRoaXMub3B0aW9uc1tpbmRleF0udXBncmFkZS5sZXZlbCArPSAxO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9uc1tpbmRleF0udHlwZSkge1xuICAgICAgY2FzZSBcImJ1cmdlclwiOlxuICAgICAgICBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLmhlYWxCeVBlcmNlbnRhZ2UoXG4gICAgICAgICAgdGhpcy5vcHRpb25zW2luZGV4XS51cGdyYWRlLmluY3JlYXNlQW1vdW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvaW5cIjpcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZ2FpbkNvaW4oXG4gICAgICAgICAgdGhpcy5vcHRpb25zW2luZGV4XS51cGdyYWRlLmluY3JlYXNlQW1vdW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0YXRVcFwiOlxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMub3B0aW9uc1tpbmRleF0udXBncmFkZS5uYW1lO1xuICAgICAgICBsZXQgYW1vdW50ID0gdGhpcy5vcHRpb25zW2luZGV4XS51cGdyYWRlLmluY3JlYXNlQW1vdW50O1xuICAgICAgICBpZiAobmFtZSA9PSBcIk1heCBIUCBVcFwiKVxuICAgICAgICAgIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5pbmNyZWFzZU1heEhQUmF0ZShhbW91bnQpO1xuICAgICAgICBpZiAobmFtZSA9PSBcIkFUSyBVcFwiKSBPdmVyYWxsU3RhdHMuaW5zdGFuY2UuaW5jcmVhc2VBdHRhY2tSYXRlKGFtb3VudCk7XG4gICAgICAgIGlmIChuYW1lID09IFwiU1BEIFVwXCIpIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5pbmNyZWFzZVNwZWVkUmF0ZShhbW91bnQpO1xuICAgICAgICBpZiAobmFtZSA9PSBcIkNyaXQgVXBcIikgT3ZlcmFsbFN0YXRzLmluc3RhbmNlLmluY3JlYXNlQ3JpdENoYW5jZShhbW91bnQpO1xuICAgICAgICBpZiAobmFtZSA9PSBcIlBpY2sgVXAgUmFuZ2VcIilcbiAgICAgICAgICBPdmVyYWxsU3RhdHMuaW5zdGFuY2UuaW5jcmVhc2VQaWNrdXBSYW5nZVJhdGUoYW1vdW50KTtcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJIYXN0ZSBVcFwiKSBPdmVyYWxsU3RhdHMuaW5zdGFuY2UuaW5jcmVhc2VIYXN0ZVJhdGUoYW1vdW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBTbG90Q29udHJvbGxlci5pbnN0YW5jZS51cGRhdGVTbG90KCk7XG4gICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UudHV5ZXR2b25nKCk7XG4gIH1cbiAgb3B0aW9uU2VsZWN0aW9uKGxpc3Q6IGFueVtdKSB7XG4gICAgY29uc3QgcmFuZG9tMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpc3QubGVuZ3RoKTtcbiAgICB2YXIgb3B0aW9uID0gbGlzdFtyYW5kb20xXTtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFR5cGUpIHtcbiAgICAgIGNhc2UgXCJpdGVtXCI6XG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc3BsaWNlKHJhbmRvbTEsIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ3ZWFwb25cIjpcbiAgICAgICAgdGhpcy53ZWFwb25MaXN0LnNwbGljZShyYW5kb20xLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZXF1aXBlZFdlYXBvblwiOlxuICAgICAgICB0aGlzLmVxdWlwZWRXZWFwb24uc3BsaWNlKHJhbmRvbTEsIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlcXVpcGVkSXRlbVwiOlxuICAgICAgICB0aGlzLmVxdWlwZWRJdGVtLnNwbGljZShyYW5kb20xLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuICBnZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTogc3RyaW5nKSB7XG4gICAgbGV0IG9wdGlvbnM6IGFueVtdID0gW107XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAob3B0aW9uVHlwZSA9PT0gXCJ3ZWFwb25cIikge1xuICAgICAgaWYgKEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmVxdWlwZWRXZWFwb24ubGVuZ3RoID49IDYpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuZXF1aXBlZFdlYXBvbjtcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwiZXF1aXBlZFdlYXBvblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJhbmRvbSA8IDAuNSkge1xuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRXZWFwb247XG4gICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwiZXF1aXBlZFdlYXBvblwiO1xuICAgICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy53ZWFwb25MaXN0O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwid2VhcG9uXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLndlYXBvbkxpc3Q7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwid2VhcG9uXCI7XG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRXZWFwb247XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gXCJlcXVpcGVkV2VhcG9uXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcIml0ZW1cIikge1xuICAgICAgaWYgKEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmVxdWlwZWRJdGVtLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRJdGVtO1xuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gXCJlcXVpcGVkSXRlbVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJhbmRvbSA8IDAuNSkge1xuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRJdGVtO1xuICAgICAgICAgIHRoaXMuY3VycmVudFR5cGUgPSBcImVxdWlwZWRJdGVtXCI7XG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLml0ZW1MaXN0O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwiaXRlbVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5pdGVtTGlzdDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gXCJpdGVtXCI7XG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRJdGVtO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwiZXF1aXBlZEl0ZW1cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvblR5cGUgPT09IFwic3RhdFVwXCIpIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm90aGVyTGlzdC5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgIT0gXCJCdXJnZXJcIiAmJiBpdGVtLm5hbWUgIT0gXCJDb2luXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcImJ1cmdlclwiKSB7XG4gICAgICBvcHRpb25zID0gdGhpcy5vdGhlckxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUgPT0gXCJCdXJnZXJcIik7XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcImNvaW5cIikge1xuICAgICAgb3B0aW9ucyA9IHRoaXMub3RoZXJMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lID09IFwiQ29pblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbiAgZ2VuZXJhdGVPcHRpb24xKCkge1xuICAgIGxldCBvcHRpb25UeXBlMTogc3RyaW5nID0gbnVsbDtcbiAgICBsZXQgb3B0aW9uTGlzdDE7XG5cbiAgICBjb25zdCByYW5kb20xID0gTWF0aC5yYW5kb20oKTtcblxuICAgIGlmIChyYW5kb20xIDwgOS41IC8gMjApIHtcbiAgICAgIG9wdGlvblR5cGUxID0gXCJ3ZWFwb25cIjtcbiAgICAgIG9wdGlvbkxpc3QxID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTEpO1xuICAgICAgaWYgKG9wdGlvbkxpc3QxLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIG9wdGlvblR5cGUxID0gXCJpdGVtXCI7XG4gICAgICAgIG9wdGlvbkxpc3QxID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTEpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbkxpc3QxLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIG9wdGlvblR5cGUxID0gXCJzdGF0VXBcIjtcbiAgICAgICAgb3B0aW9uTGlzdDEgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyYW5kb20xIDwgMTkgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTEgPSBcIml0ZW1cIjtcbiAgICAgIG9wdGlvbkxpc3QxID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTEpO1xuXG4gICAgICBpZiAob3B0aW9uTGlzdDEubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTEgPSBcInN0YXRVcFwiO1xuICAgICAgICBvcHRpb25MaXN0MSA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uVHlwZTEgPSBcInN0YXRVcFwiO1xuICAgICAgb3B0aW9uTGlzdDEgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMSk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5wdXNoKFxuICAgICAgbmV3IE9wdGlvbih0aGlzLm9wdGlvblNlbGVjdGlvbihvcHRpb25MaXN0MSksIG9wdGlvblR5cGUxKVxuICAgICk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IG9wdGlvblR5cGUyOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBvcHRpb25MaXN0MjtcblxuICAgIGNvbnN0IHJhbmRvbTIgPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgaWYgKHJhbmRvbTIgPCA5LjUgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTIgPSBcIndlYXBvblwiO1xuICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG4gICAgICBpZiAob3B0aW9uTGlzdDIubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTIgPSBcIml0ZW1cIjtcbiAgICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uTGlzdDIubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTIgPSBcImJ1cmdlclwiO1xuICAgICAgICBvcHRpb25MaXN0MiA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhbmRvbTIgPCAxOSAvIDIwKSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiaXRlbVwiO1xuICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG5cbiAgICAgIGlmIChvcHRpb25MaXN0Mi5sZW5ndGggPT0gMCkge1xuICAgICAgICBvcHRpb25UeXBlMiA9IFwiYnVyZ2VyXCI7XG4gICAgICAgIG9wdGlvbkxpc3QyID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiYnVyZ2VyXCI7XG4gICAgICBvcHRpb25MaXN0MiA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUyKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnB1c2goXG4gICAgICBuZXcgT3B0aW9uKHRoaXMub3B0aW9uU2VsZWN0aW9uKG9wdGlvbkxpc3QyKSwgb3B0aW9uVHlwZTIpXG4gICAgKTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IG9wdGlvblR5cGUzOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBvcHRpb25MaXN0MyA9IFtdO1xuXG4gICAgY29uc3QgcmFuZG9tMyA9IE1hdGgucmFuZG9tKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGlmIChyYW5kb20zIDwgMTAgLyAyMCkge1xuICAgICAgICBvcHRpb25UeXBlMyA9IFwid2VhcG9uXCI7XG4gICAgICAgIG9wdGlvbkxpc3QzID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTMpO1xuICAgICAgfSBlbHNlIGlmIChyYW5kb20zIDwgMjAgLyAyMCkge1xuICAgICAgICBvcHRpb25UeXBlMyA9IFwiaXRlbVwiO1xuICAgICAgICBvcHRpb25MaXN0MyA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUzKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25MaXN0My5sZW5ndGggPiAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9uTGlzdDMubGVuZ3RoID09IDApIHtcbiAgICAgIG9wdGlvblR5cGUzID0gXCJjb2luXCI7XG4gICAgICBvcHRpb25MaXN0MyA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUzKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnB1c2goXG4gICAgICBuZXcgT3B0aW9uKHRoaXMub3B0aW9uU2VsZWN0aW9uKG9wdGlvbkxpc3QzKSwgb3B0aW9uVHlwZTMpXG4gICAgKTtcbiAgfVxuICBnZW5lcmF0ZU9wdGlvbjIoKSB7XG4gICAgbGV0IG9wdGlvblR5cGUyOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBvcHRpb25MaXN0MjtcblxuICAgIGNvbnN0IHJhbmRvbTEgPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgaWYgKHJhbmRvbTEgPCA5LjUgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTIgPSBcIndlYXBvblwiO1xuICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG4gICAgICBpZiAob3B0aW9uTGlzdDIubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTIgPSBcIml0ZW1cIjtcbiAgICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uTGlzdDIubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTIgPSBcImJ1cmdlclwiO1xuICAgICAgICBvcHRpb25MaXN0MiA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhbmRvbTEgPCAxOSAvIDIwKSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiaXRlbVwiO1xuICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG5cbiAgICAgIGlmIChvcHRpb25MaXN0Mi5sZW5ndGggPT0gMCkge1xuICAgICAgICBvcHRpb25UeXBlMiA9IFwiYnVyZ2VyXCI7XG4gICAgICAgIG9wdGlvbkxpc3QyID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiYnVyZ2VyXCI7XG4gICAgICBvcHRpb25MaXN0MiA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUyKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnB1c2goXG4gICAgICBuZXcgT3B0aW9uKHRoaXMub3B0aW9uU2VsZWN0aW9uKG9wdGlvbkxpc3QyKSwgb3B0aW9uVHlwZTIpXG4gICAgKTtcbiAgfVxuICBnZW5lcmF0ZU9wdGlvbjMoKSB7XG4gICAgbGV0IG9wdGlvblR5cGUzOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBvcHRpb25MaXN0MyA9IFtdO1xuXG4gICAgY29uc3QgcmFuZG9tMyA9IE1hdGgucmFuZG9tKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGlmIChyYW5kb20zIDwgMTAgLyAyMCkge1xuICAgICAgICBvcHRpb25UeXBlMyA9IFwid2VhcG9uXCI7XG4gICAgICAgIG9wdGlvbkxpc3QzID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTMpO1xuICAgICAgfSBlbHNlIGlmIChyYW5kb20zIDwgMjAgLyAyMCkge1xuICAgICAgICBvcHRpb25UeXBlMyA9IFwiaXRlbVwiO1xuICAgICAgICBvcHRpb25MaXN0MyA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUzKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25MaXN0My5sZW5ndGggPiAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9uTGlzdDMubGVuZ3RoID09IDApIHtcbiAgICAgIG9wdGlvblR5cGUzID0gXCJjb2luXCI7XG4gICAgICBvcHRpb25MaXN0MyA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUzKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnB1c2goXG4gICAgICBuZXcgT3B0aW9uKHRoaXMub3B0aW9uU2VsZWN0aW9uKG9wdGlvbkxpc3QzKSwgb3B0aW9uVHlwZTMpXG4gICAgKTtcbiAgfVxuXG4gIGdlbmVyYXRlT3B0aW9ucygpIHtcbiAgICB0aGlzLndlYXBvbkxpc3QubGVuZ3RoID0gMDtcbiAgICB0aGlzLml0ZW1MaXN0Lmxlbmd0aCA9IDA7XG4gICAgdGhpcy5lcXVpcGVkSXRlbS5sZW5ndGggPSAwO1xuICAgIHRoaXMuZXF1aXBlZFdlYXBvbi5sZW5ndGggPSAwO1xuICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLndlYXBvbkxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaXNFcXVpcGVkID09IGZhbHNlICYmICFlbGVtZW50LmlzTG9ja0xldmVsKVxuICAgICAgICB0aGlzLndlYXBvbkxpc3QucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5pdGVtTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5pc0VxdWlwZWQgPT0gZmFsc2UgJiYgIWVsZW1lbnQuaXNMb2NrTGV2ZWwpXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5lcXVpcGVkSXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5pc0VxdWlwZWQgPT0gdHJ1ZSAmJiAhZWxlbWVudC5pc0xvY2tMZXZlbClcbiAgICAgICAgdGhpcy5lcXVpcGVkSXRlbS5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmVxdWlwZWRXZWFwb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaXNFcXVpcGVkID09IHRydWUgJiYgIWVsZW1lbnQuaXNMb2NrTGV2ZWwpXG4gICAgICAgIHRoaXMuZXF1aXBlZFdlYXBvbi5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb24xKCk7XG5cbiAgICAvLyB0aGlzLmdlbmVyYXRlT3B0aW9uMigpO1xuXG4gICAgLy8gdGhpcy5nZW5lcmF0ZU9wdGlvbjMoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMpO1xuICB9XG4gIGRpc3BsYXlPcHRpb25zKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGdyYWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnVwZ3JhZGVbaV0ueCArPSAxMDAwO1xuICAgICAgY2MudHdlZW4odGhpcy51cGdyYWRlW2ldKVxuICAgICAgICAudG8oMC4xLCB7XG4gICAgICAgICAgcG9zaXRpb246IGNjLnYzKHRoaXMucG9zaXRpb25MaXN0W2ldKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5sZW5ndGggPSAwO1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVwZ3JhZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0gPT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0udHlwZSA9PSBcIndlYXBvblwiIHx8IHRoaXMub3B0aW9uc1tpXS50eXBlID09IFwiaXRlbVwiKSB7XG4gICAgICAgIHRoaXMudXBncmFkZVtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlVwZ3JhZGUgTmFtZVwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMub3B0aW9uc1tpXS51cGdyYWRlLm5hbWU7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0udXBncmFkZS5sZXZlbCA+IDApIHtcbiAgICAgICAgICB0aGlzLnVwZ3JhZGVbaV1cbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlVwZ3JhZGUgTmFtZVwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tpXS51cGdyYWRlLm5hbWUgK1xuICAgICAgICAgICAgXCIgTFYgXCIgK1xuICAgICAgICAgICAgKHRoaXMub3B0aW9uc1tpXS51cGdyYWRlLmxldmVsICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZ3JhZGVbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJOZXdcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0udXBncmFkZS5pc0VxdWlwZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnVwZ3JhZGVbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJOZXdcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZ3JhZGVbaV1cbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjcmlwdGlvblwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9XG4gICAgICAgICAgdGhpcy5vcHRpb25zW2ldLnVwZ3JhZGUuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudXBncmFkZVtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlVwZ3JhZGVcIilcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0udXBncmFkZS5kaXNwbGF5SWNvbjtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5vcHRpb25zW2ldLnR5cGUgPT0gXCJzdGF0VXBcIiB8fFxuICAgICAgICB0aGlzLm9wdGlvbnNbaV0udHlwZSA9PSBcImNvaW5cIiB8fFxuICAgICAgICB0aGlzLm9wdGlvbnNbaV0udHlwZSA9PSBcImJ1cmdlclwiXG4gICAgICApIHtcbiAgICAgICAgdGhpcy51cGdyYWRlW2ldXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVXBncmFkZSBOYW1lXCIpXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5vcHRpb25zW2ldLnVwZ3JhZGUubmFtZTtcbiAgICAgICAgdGhpcy51cGdyYWRlW2ldLmdldENoaWxkQnlOYW1lKFwiTmV3XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZ3JhZGVbaV1cbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjcmlwdGlvblwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9XG4gICAgICAgICAgdGhpcy5vcHRpb25zW2ldLnVwZ3JhZGUuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudXBncmFkZVtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlVwZ3JhZGVcIilcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0udXBncmFkZS5kaXNwbGF5SWNvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnVwZ3JhZGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5wb3NpdGlvbkxpc3QucHVzaChlbGVtZW50LnBvc2l0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge31cbn1cbiJdfQ==