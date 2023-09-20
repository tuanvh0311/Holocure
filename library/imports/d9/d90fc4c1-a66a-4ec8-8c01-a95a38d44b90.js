"use strict";
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