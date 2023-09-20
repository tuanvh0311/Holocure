"use strict";
cc._RF.push(module, 'ee20bnrl8lEEbZEsYexUIDB', 'OptionTest');
// Script/Controller/OptionTest.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Option = /** @class */ (function () {
    function Option(optionType, weight) {
        this.optionType = optionType;
        this.weight = weight;
    }
    return Option;
}());
var Player = /** @class */ (function () {
    function Player() {
        // Initialize player's attributes, such as unpicked skills, weapons, and items, equipped weapon/item status, etc.
        this.unpickedSkills = 3; // Assuming the player has 3 unpicked skills initially.
        this.allSkillsFullyLeveled = false;
        this.unpickedWeapons = 5; // Assuming the player has 5 unpicked weapons initially.
        this.unpickedItems = 7; // Assuming the player has 7 unpicked items initially.
        this.weaponEquipped = true; // Assuming the player has a weapon equipped initially.
        this.itemEquipped = true; // Assuming the player has an item equipped initially.
    }
    // Function to check if the player can be offered a skill option
    Player.prototype.canOfferSkill = function () {
        return this.unpickedSkills > 0 && !this.allSkillsFullyLeveled;
    };
    // Function to check if the player can be offered a weapon option
    Player.prototype.canOfferWeapon = function () {
        return this.unpickedWeapons > 0 && !this.weaponEquipped;
    };
    // Function to check if the player can be offered an item option
    Player.prototype.canOfferItem = function () {
        return this.unpickedItems > 0 && !this.itemEquipped;
    };
    return Player;
}());
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Usage example
        // LIFE-CYCLE CALLBACKS:
        _this.sword = null;
        return _this;
    }
    // Function to randomly select an option from the given list
    NewClass.prototype.selectRandomOption = function (list) {
        var totalWeight = list.reduce(function (sum, option) { return sum + option.weight; }, 0);
        var randomWeight = Math.floor(Math.random() * totalWeight);
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var option = list_1[_i];
            randomWeight -= option.weight;
            if (randomWeight < 0) {
                return option;
            }
        }
        // In case something went wrong, return the last option in the list
        return list[list.length - 1];
    };
    // Function to generate a list of options for a specific option type
    NewClass.prototype.generateOptionList = function (optionType) {
        // Assuming different options for each option type with varying weights.
        // Replace these with your actual options and weights.
        var options = [];
        if (optionType === "skill") {
            options.push(new Option("SkillOption1", 1));
            options.push(new Option("SkillOption2", 1));
            options.push(new Option("SkillOption3", 1));
        }
        else if (optionType === "weapon") {
            options.push(new Option("WeaponOption1", 2));
            options.push(new Option("WeaponOption2", 3));
            options.push(new Option("WeaponOption3", 1));
        }
        else if (optionType === "item") {
            options.push(new Option("ItemOption1", 2));
            options.push(new Option("ItemOption2", 2));
            options.push(new Option("ItemOption3", 4));
        }
        else if (optionType === "StatUp") {
            options.push(new Option("StatUpOption", 1));
        }
        return options;
    };
    // Function to simulate option selection for each option slot
    NewClass.prototype.selectOptions = function (player) {
        var options = [];
        // Option 1
        var optionType1;
        var random1 = Math.random();
        if (random1 < 7 / 20) {
            optionType1 = "skill";
        }
        else if (random1 < 14 / 20) {
            optionType1 = "weapon";
        }
        else if (random1 < 19 / 20) {
            optionType1 = "item";
        }
        else {
            optionType1 = "StatUp";
        }
        var optionList1 = this.generateOptionList(optionType1);
        if (!player.canOfferSkill()) {
            optionList1 = optionList1.filter(function (option) { return option.optionType !== "skill"; });
            if (!player.canOfferWeapon()) {
                optionList1 = optionList1.filter(function (option) { return option.optionType !== "weapon"; });
                if (!player.canOfferItem()) {
                    optionList1 = optionList1.filter(function (option) { return option.optionType !== "item"; });
                }
            }
        }
        options.push(this.selectRandomOption(optionList1));
        // Option 2
        var optionType2;
        var random2 = Math.random();
        if (random2 < 7 / 20) {
            optionType2 = "skill";
        }
        else if (random2 < 14 / 20) {
            optionType2 = "weapon";
        }
        else if (random2 < 19 / 20) {
            optionType2 = "item";
        }
        else {
            optionType2 = "StatUp";
        }
        var optionList2 = this.generateOptionList(optionType2);
        if (!player.canOfferSkill()) {
            optionList2 = optionList2.filter(function (option) { return option.optionType !== "skill"; });
            if (!player.canOfferWeapon()) {
                optionList2 = optionList2.filter(function (option) { return option.optionType !== "weapon"; });
                if (!player.canOfferItem()) {
                    optionList2 = optionList2.filter(function (option) { return option.optionType !== "item"; });
                }
            }
        }
        options.push(this.selectRandomOption(optionList2));
        // Option 3
        var optionType3;
        var random3 = Math.random();
        if (random3 < 0.5) {
            optionType3 = "weapon";
        }
        else {
            optionType3 = "item";
        }
        var optionList3 = this.generateOptionList(optionType3);
        if (!player.canOfferWeapon()) {
            optionList3 = optionList3.filter(function (option) { return option.optionType !== "weapon"; });
            if (!player.canOfferItem()) {
                optionList3 = optionList3.filter(function (option) { return option.optionType !== "item"; });
                if (!player.canOfferSkill()) {
                    optionList3 = optionList3.filter(function (option) { return option.optionType === "skill"; });
                }
            }
        }
        // Try up to 5 times to get an option from the list if skill option is not available.
        var maxTries = 5;
        while (maxTries > 0) {
            var selectedOption = this.selectRandomOption(optionList3);
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
        var optionType4;
        var random4 = Math.random();
        if (random4 < 0.5) {
            optionType4 = "weapon";
        }
        else {
            optionType4 = "item";
        }
        var optionList4 = this.generateOptionList(optionType4);
        if (!player.canOfferWeapon() && !player.canOfferItem()) {
            options.push(new Option("HoloCoinOption", 1));
        }
        else {
            // Try up to 5 times to get an option from the list if the first type is not available.
            maxTries = 5;
            while (maxTries > 0) {
                var selectedOption = this.selectRandomOption(optionList4);
                if ((selectedOption.optionType === "weapon" && player.canOfferWeapon()) ||
                    (selectedOption.optionType === "item" && player.canOfferItem())) {
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
    };
    NewClass.prototype.onLoad = function () {
        var player = new Player();
        var selectedOptions = this.selectOptions(player);
        selectedOptions.forEach(function (element) {
            console.log(element.optionType, element.weight);
        });
    };
    NewClass.prototype.update = function (dt) { };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sword", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();