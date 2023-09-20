
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/OptionTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxPcHRpb25UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBSUUsZ0JBQVksVUFBa0IsRUFBRSxNQUFjO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFDRDtJQVFFO1FBQ0UsaUhBQWlIO1FBQ2pILElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsdURBQXVEO1FBQ2hGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyx3REFBd0Q7UUFDbEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxzREFBc0Q7UUFDOUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyx1REFBdUQ7UUFDbkYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxzREFBc0Q7SUFDbEYsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSw4QkFBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNoRSxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLCtCQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FB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QUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzdCLE1BQU07aUJBQ1A7Z0JBQ0QsUUFBUSxFQUFFLENBQUM7YUFDWjtZQUVELDRFQUE0RTtZQUM1RSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQztTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU9ELHlCQUFNLEdBQU47UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzVCLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFHLENBQUM7SUFUYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBbE1ILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0TTVCO0lBQUQsZUFBQztDQTVNRCxBQTRNQyxDQTVNcUMsRUFBRSxDQUFDLFNBQVMsR0E0TWpEO2tCQTVNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vSXRlbS9JdGVtXCI7XG5pbXBvcnQgU3dvcmQgZnJvbSBcIi4uL1dlYXBvbi9Td29yZFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuY2xhc3MgT3B0aW9uIHtcbiAgb3B0aW9uVHlwZTogc3RyaW5nO1xuICB3ZWlnaHQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25UeXBlOiBzdHJpbmcsIHdlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5vcHRpb25UeXBlID0gb3B0aW9uVHlwZTtcbiAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgfVxufVxuY2xhc3MgUGxheWVyIHtcbiAgdW5waWNrZWRTa2lsbHM6IG51bWJlcjtcbiAgYWxsU2tpbGxzRnVsbHlMZXZlbGVkOiBib29sZWFuO1xuICB1bnBpY2tlZFdlYXBvbnM6IG51bWJlcjtcbiAgdW5waWNrZWRJdGVtczogbnVtYmVyO1xuICB3ZWFwb25FcXVpcHBlZDogYm9vbGVhbjtcbiAgaXRlbUVxdWlwcGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEluaXRpYWxpemUgcGxheWVyJ3MgYXR0cmlidXRlcywgc3VjaCBhcyB1bnBpY2tlZCBza2lsbHMsIHdlYXBvbnMsIGFuZCBpdGVtcywgZXF1aXBwZWQgd2VhcG9uL2l0ZW0gc3RhdHVzLCBldGMuXG4gICAgdGhpcy51bnBpY2tlZFNraWxscyA9IDM7IC8vIEFzc3VtaW5nIHRoZSBwbGF5ZXIgaGFzIDMgdW5waWNrZWQgc2tpbGxzIGluaXRpYWxseS5cbiAgICB0aGlzLmFsbFNraWxsc0Z1bGx5TGV2ZWxlZCA9IGZhbHNlO1xuICAgIHRoaXMudW5waWNrZWRXZWFwb25zID0gNTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciBoYXMgNSB1bnBpY2tlZCB3ZWFwb25zIGluaXRpYWxseS5cbiAgICB0aGlzLnVucGlja2VkSXRlbXMgPSA3OyAvLyBBc3N1bWluZyB0aGUgcGxheWVyIGhhcyA3IHVucGlja2VkIGl0ZW1zIGluaXRpYWxseS5cbiAgICB0aGlzLndlYXBvbkVxdWlwcGVkID0gdHJ1ZTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciBoYXMgYSB3ZWFwb24gZXF1aXBwZWQgaW5pdGlhbGx5LlxuICAgIHRoaXMuaXRlbUVxdWlwcGVkID0gdHJ1ZTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciBoYXMgYW4gaXRlbSBlcXVpcHBlZCBpbml0aWFsbHkuXG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgcGxheWVyIGNhbiBiZSBvZmZlcmVkIGEgc2tpbGwgb3B0aW9uXG4gIGNhbk9mZmVyU2tpbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudW5waWNrZWRTa2lsbHMgPiAwICYmICF0aGlzLmFsbFNraWxsc0Z1bGx5TGV2ZWxlZDtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBwbGF5ZXIgY2FuIGJlIG9mZmVyZWQgYSB3ZWFwb24gb3B0aW9uXG4gIGNhbk9mZmVyV2VhcG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnVucGlja2VkV2VhcG9ucyA+IDAgJiYgIXRoaXMud2VhcG9uRXF1aXBwZWQ7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgcGxheWVyIGNhbiBiZSBvZmZlcmVkIGFuIGl0ZW0gb3B0aW9uXG4gIGNhbk9mZmVySXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51bnBpY2tlZEl0ZW1zID4gMCAmJiAhdGhpcy5pdGVtRXF1aXBwZWQ7XG4gIH1cbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIC8vIEZ1bmN0aW9uIHRvIHJhbmRvbWx5IHNlbGVjdCBhbiBvcHRpb24gZnJvbSB0aGUgZ2l2ZW4gbGlzdFxuICBzZWxlY3RSYW5kb21PcHRpb24obGlzdDogT3B0aW9uW10pOiBPcHRpb24ge1xuICAgIGNvbnN0IHRvdGFsV2VpZ2h0ID0gbGlzdC5yZWR1Y2UoKHN1bSwgb3B0aW9uKSA9PiBzdW0gKyBvcHRpb24ud2VpZ2h0LCAwKTtcbiAgICBsZXQgcmFuZG9tV2VpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdG90YWxXZWlnaHQpO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgbGlzdCkge1xuICAgICAgcmFuZG9tV2VpZ2h0IC09IG9wdGlvbi53ZWlnaHQ7XG4gICAgICBpZiAocmFuZG9tV2VpZ2h0IDwgMCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEluIGNhc2Ugc29tZXRoaW5nIHdlbnQgd3JvbmcsIHJldHVybiB0aGUgbGFzdCBvcHRpb24gaW4gdGhlIGxpc3RcbiAgICByZXR1cm4gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gZ2VuZXJhdGUgYSBsaXN0IG9mIG9wdGlvbnMgZm9yIGEgc3BlY2lmaWMgb3B0aW9uIHR5cGVcbiAgZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGU6IHN0cmluZyk6IE9wdGlvbltdIHtcbiAgICAvLyBBc3N1bWluZyBkaWZmZXJlbnQgb3B0aW9ucyBmb3IgZWFjaCBvcHRpb24gdHlwZSB3aXRoIHZhcnlpbmcgd2VpZ2h0cy5cbiAgICAvLyBSZXBsYWNlIHRoZXNlIHdpdGggeW91ciBhY3R1YWwgb3B0aW9ucyBhbmQgd2VpZ2h0cy5cbiAgICBsZXQgb3B0aW9uczogT3B0aW9uW10gPSBbXTtcbiAgICBpZiAob3B0aW9uVHlwZSA9PT0gXCJza2lsbFwiKSB7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIlNraWxsT3B0aW9uMVwiLCAxKSk7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIlNraWxsT3B0aW9uMlwiLCAxKSk7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIlNraWxsT3B0aW9uM1wiLCAxKSk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcIndlYXBvblwiKSB7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIldlYXBvbk9wdGlvbjFcIiwgMikpO1xuICAgICAgb3B0aW9ucy5wdXNoKG5ldyBPcHRpb24oXCJXZWFwb25PcHRpb24yXCIsIDMpKTtcbiAgICAgIG9wdGlvbnMucHVzaChuZXcgT3B0aW9uKFwiV2VhcG9uT3B0aW9uM1wiLCAxKSk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcIml0ZW1cIikge1xuICAgICAgb3B0aW9ucy5wdXNoKG5ldyBPcHRpb24oXCJJdGVtT3B0aW9uMVwiLCAyKSk7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIkl0ZW1PcHRpb24yXCIsIDIpKTtcbiAgICAgIG9wdGlvbnMucHVzaChuZXcgT3B0aW9uKFwiSXRlbU9wdGlvbjNcIiwgNCkpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uVHlwZSA9PT0gXCJTdGF0VXBcIikge1xuICAgICAgb3B0aW9ucy5wdXNoKG5ldyBPcHRpb24oXCJTdGF0VXBPcHRpb25cIiwgMSkpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gc2ltdWxhdGUgb3B0aW9uIHNlbGVjdGlvbiBmb3IgZWFjaCBvcHRpb24gc2xvdFxuICBzZWxlY3RPcHRpb25zKHBsYXllcjogUGxheWVyKTogT3B0aW9uW10ge1xuICAgIGxldCBvcHRpb25zOiBPcHRpb25bXSA9IFtdO1xuXG4gICAgLy8gT3B0aW9uIDFcbiAgICBsZXQgb3B0aW9uVHlwZTE6IHN0cmluZztcbiAgICBjb25zdCByYW5kb20xID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAocmFuZG9tMSA8IDcgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTEgPSBcInNraWxsXCI7XG4gICAgfSBlbHNlIGlmIChyYW5kb20xIDwgMTQgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTEgPSBcIndlYXBvblwiO1xuICAgIH0gZWxzZSBpZiAocmFuZG9tMSA8IDE5IC8gMjApIHtcbiAgICAgIG9wdGlvblR5cGUxID0gXCJpdGVtXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvblR5cGUxID0gXCJTdGF0VXBcIjtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9uTGlzdDEgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMSk7XG5cbiAgICBpZiAoIXBsYXllci5jYW5PZmZlclNraWxsKCkpIHtcbiAgICAgIG9wdGlvbkxpc3QxID0gb3B0aW9uTGlzdDEuZmlsdGVyKFxuICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ub3B0aW9uVHlwZSAhPT0gXCJza2lsbFwiXG4gICAgICApO1xuICAgICAgaWYgKCFwbGF5ZXIuY2FuT2ZmZXJXZWFwb24oKSkge1xuICAgICAgICBvcHRpb25MaXN0MSA9IG9wdGlvbkxpc3QxLmZpbHRlcihcbiAgICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ub3B0aW9uVHlwZSAhPT0gXCJ3ZWFwb25cIlxuICAgICAgICApO1xuICAgICAgICBpZiAoIXBsYXllci5jYW5PZmZlckl0ZW0oKSkge1xuICAgICAgICAgIG9wdGlvbkxpc3QxID0gb3B0aW9uTGlzdDEuZmlsdGVyKFxuICAgICAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLm9wdGlvblR5cGUgIT09IFwiaXRlbVwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnMucHVzaCh0aGlzLnNlbGVjdFJhbmRvbU9wdGlvbihvcHRpb25MaXN0MSkpO1xuICAgIC8vIE9wdGlvbiAyXG4gICAgbGV0IG9wdGlvblR5cGUyOiBzdHJpbmc7XG4gICAgY29uc3QgcmFuZG9tMiA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHJhbmRvbTIgPCA3IC8gMjApIHtcbiAgICAgIG9wdGlvblR5cGUyID0gXCJza2lsbFwiO1xuICAgIH0gZWxzZSBpZiAocmFuZG9tMiA8IDE0IC8gMjApIHtcbiAgICAgIG9wdGlvblR5cGUyID0gXCJ3ZWFwb25cIjtcbiAgICB9IGVsc2UgaWYgKHJhbmRvbTIgPCAxOSAvIDIwKSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiaXRlbVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiU3RhdFVwXCI7XG4gICAgfVxuXG4gICAgbGV0IG9wdGlvbkxpc3QyID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTIpO1xuXG4gICAgaWYgKCFwbGF5ZXIuY2FuT2ZmZXJTa2lsbCgpKSB7XG4gICAgICBvcHRpb25MaXN0MiA9IG9wdGlvbkxpc3QyLmZpbHRlcihcbiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLm9wdGlvblR5cGUgIT09IFwic2tpbGxcIlxuICAgICAgKTtcbiAgICAgIGlmICghcGxheWVyLmNhbk9mZmVyV2VhcG9uKCkpIHtcbiAgICAgICAgb3B0aW9uTGlzdDIgPSBvcHRpb25MaXN0Mi5maWx0ZXIoXG4gICAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLm9wdGlvblR5cGUgIT09IFwid2VhcG9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuY2FuT2ZmZXJJdGVtKCkpIHtcbiAgICAgICAgICBvcHRpb25MaXN0MiA9IG9wdGlvbkxpc3QyLmZpbHRlcihcbiAgICAgICAgICAgIChvcHRpb24pID0+IG9wdGlvbi5vcHRpb25UeXBlICE9PSBcIml0ZW1cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zLnB1c2godGhpcy5zZWxlY3RSYW5kb21PcHRpb24ob3B0aW9uTGlzdDIpKTtcblxuICAgIC8vIE9wdGlvbiAzXG4gICAgbGV0IG9wdGlvblR5cGUzOiBzdHJpbmc7XG4gICAgY29uc3QgcmFuZG9tMyA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHJhbmRvbTMgPCAwLjUpIHtcbiAgICAgIG9wdGlvblR5cGUzID0gXCJ3ZWFwb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uVHlwZTMgPSBcIml0ZW1cIjtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9uTGlzdDMgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMyk7XG5cbiAgICBpZiAoIXBsYXllci5jYW5PZmZlcldlYXBvbigpKSB7XG4gICAgICBvcHRpb25MaXN0MyA9IG9wdGlvbkxpc3QzLmZpbHRlcihcbiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLm9wdGlvblR5cGUgIT09IFwid2VhcG9uXCJcbiAgICAgICk7XG4gICAgICBpZiAoIXBsYXllci5jYW5PZmZlckl0ZW0oKSkge1xuICAgICAgICBvcHRpb25MaXN0MyA9IG9wdGlvbkxpc3QzLmZpbHRlcihcbiAgICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ub3B0aW9uVHlwZSAhPT0gXCJpdGVtXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuY2FuT2ZmZXJTa2lsbCgpKSB7XG4gICAgICAgICAgb3B0aW9uTGlzdDMgPSBvcHRpb25MaXN0My5maWx0ZXIoXG4gICAgICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ub3B0aW9uVHlwZSA9PT0gXCJza2lsbFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRyeSB1cCB0byA1IHRpbWVzIHRvIGdldCBhbiBvcHRpb24gZnJvbSB0aGUgbGlzdCBpZiBza2lsbCBvcHRpb24gaXMgbm90IGF2YWlsYWJsZS5cbiAgICBsZXQgbWF4VHJpZXMgPSA1O1xuICAgIHdoaWxlIChtYXhUcmllcyA+IDApIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5zZWxlY3RSYW5kb21PcHRpb24ob3B0aW9uTGlzdDMpO1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLm9wdGlvblR5cGUgPT09IFwic2tpbGxcIikge1xuICAgICAgICBvcHRpb25zLnB1c2goc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG1heFRyaWVzLS07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHByZXZpb3VzIGNoZWNrIGZhaWxzLCBhZGQgdGhlIGZvb2Qgb3B0aW9uIHRvIHRoZSBvcHRpb25zIGxpc3QuXG4gICAgaWYgKG1heFRyaWVzID09PSAwKSB7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIkZvb2RPcHRpb25cIiwgMSkpO1xuICAgIH1cblxuICAgIC8vIE9wdGlvbiA0XG4gICAgbGV0IG9wdGlvblR5cGU0OiBzdHJpbmc7XG4gICAgY29uc3QgcmFuZG9tNCA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHJhbmRvbTQgPCAwLjUpIHtcbiAgICAgIG9wdGlvblR5cGU0ID0gXCJ3ZWFwb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uVHlwZTQgPSBcIml0ZW1cIjtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9uTGlzdDQgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlNCk7XG5cbiAgICBpZiAoIXBsYXllci5jYW5PZmZlcldlYXBvbigpICYmICFwbGF5ZXIuY2FuT2ZmZXJJdGVtKCkpIHtcbiAgICAgIG9wdGlvbnMucHVzaChuZXcgT3B0aW9uKFwiSG9sb0NvaW5PcHRpb25cIiwgMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcnkgdXAgdG8gNSB0aW1lcyB0byBnZXQgYW4gb3B0aW9uIGZyb20gdGhlIGxpc3QgaWYgdGhlIGZpcnN0IHR5cGUgaXMgbm90IGF2YWlsYWJsZS5cbiAgICAgIG1heFRyaWVzID0gNTtcbiAgICAgIHdoaWxlIChtYXhUcmllcyA+IDApIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdFJhbmRvbU9wdGlvbihvcHRpb25MaXN0NCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoc2VsZWN0ZWRPcHRpb24ub3B0aW9uVHlwZSA9PT0gXCJ3ZWFwb25cIiAmJiBwbGF5ZXIuY2FuT2ZmZXJXZWFwb24oKSkgfHxcbiAgICAgICAgICAoc2VsZWN0ZWRPcHRpb24ub3B0aW9uVHlwZSA9PT0gXCJpdGVtXCIgJiYgcGxheWVyLmNhbk9mZmVySXRlbSgpKVxuICAgICAgICApIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2goc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG1heFRyaWVzLS07XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGVjayBmYWlscywgYWRkIHRoZSBIb2xvQ29pbiBvcHRpb24gdG8gdGhlIG9wdGlvbnMgbGlzdC5cbiAgICAgIGlmIChtYXhUcmllcyA9PT0gMCkge1xuICAgICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIkhvbG9Db2luT3B0aW9uXCIsIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8vIFVzYWdlIGV4YW1wbGVcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHN3b3JkOiBjYy5Ob2RlID0gbnVsbDtcbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdE9wdGlvbnMocGxheWVyKTtcbiAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudC5vcHRpb25UeXBlLCBlbGVtZW50LndlaWdodCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoZHQpIHt9XG59XG4iXX0=