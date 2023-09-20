
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/Shield.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49abaKzDtZMdbL2TbK6fWVb', 'Shield');
// Script/Item/Shield.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var OverallStats_1 = require("../Player/OverallStats");
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseShield = 15;
        _this.baseResist = 5;
        _this.refreshTimer = 15;
        _this.timer = _this.refreshTimer;
        _this.currentLevel = _this.level;
        return _this;
    }
    Shield_1 = Shield;
    Shield.prototype.onLoad = function () {
        Shield_1.instance = this;
        GameController_1.default.instance.dynamicBuff.push(this);
        this.itemOnLoad();
        this.description =
            "Gain a shield that absorbs up to 15 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 5%.";
    };
    Shield.prototype.refreshShield = function (dt) {
        if (this.player.currentShield < this.player.maxShield) {
            this.timer -= dt;
            if (this.timer < 0) {
                this.timer = this.refreshTimer;
                this.player.gainShield(this.baseShield);
            }
        }
        else {
            this.timer = this.refreshTimer;
        }
    };
    Shield.prototype.onTakeDamage = function () {
        this.timer = 15;
    };
    Shield.prototype.updateStats = function (shieldAmount, resistAmount) {
        this.baseShield += shieldAmount;
        OverallStats_1.default.instance.increaseResistRate(resistAmount);
        this.addShieldToPlayer(shieldAmount);
    };
    Shield.prototype.loadStats = function () {
        OverallStats_1.default.instance.increaseResistRate(this.baseResist);
        this.addShieldToPlayer(this.baseShield);
    };
    Shield.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.loadStats();
                    this.description =
                        "Gain a shield that absorbs up to 20 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 10%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description =
                        "Gain a shield that absorbs up to 25 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 15%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description =
                        "Gain a shield that absorbs up to 30 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 20%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description =
                        "Gain a shield that absorbs up to 35 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 25%.";
                    this.updateStats(5, 5);
                    break;
                case 5:
                    this.updateStats(5, 5);
                    break;
                default:
                    break;
            }
        }
    };
    Shield.prototype.addShieldToPlayer = function (shield) {
        this.player.gainMaxShield(shield);
    };
    Shield.prototype.start = function () {
        this.player = PlayerController_1.default.instance;
    };
    Shield.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.refreshShield(dt);
    };
    var Shield_1;
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "baseShield", void 0);
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "baseResist", void 0);
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "refreshTimer", void 0);
    Shield = Shield_1 = __decorate([
        ccclass
    ], Shield);
    return Shield;
}(Item_1.default));
exports.default = Shield;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxTaGllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBSTtJQUF4QztRQUFBLHFFQTJGQztRQXhGQyxnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixXQUFLLEdBQVcsS0FBSSxDQUFDLFlBQVksQ0FBQztRQUVsQyxrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBaUY1QixDQUFDO2VBM0ZvQixNQUFNO0lBV3pCLHVCQUFNLEdBQU47UUFDRSxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2Qix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVztZQUNkLHVIQUF1SCxDQUFDO0lBQzVILENBQUM7SUFDRCw4QkFBYSxHQUFiLFVBQWMsRUFBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3JELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FB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ekIsQ0FBQzs7SUF2RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ087SUFQUCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMkYxQjtJQUFELGFBQUM7Q0EzRkQsQUEyRkMsQ0EzRm1DLGNBQUksR0EyRnZDO2tCQTNGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IE92ZXJhbGxTdGF0cyBmcm9tIFwiLi4vUGxheWVyL092ZXJhbGxTdGF0c1wiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGllbGQgZXh0ZW5kcyBJdGVtIHtcbiAgc3RhdGljIGluc3RhbmNlOiBTaGllbGQ7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgYmFzZVNoaWVsZDogbnVtYmVyID0gMTU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgYmFzZVJlc2lzdDogbnVtYmVyID0gNTtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICByZWZyZXNoVGltZXI6IG51bWJlciA9IDE1O1xuICB0aW1lcjogbnVtYmVyID0gdGhpcy5yZWZyZXNoVGltZXI7XG4gIHBsYXllcjogUGxheWVyQ29udHJvbGxlcjtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgb25Mb2FkKCkge1xuICAgIFNoaWVsZC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZHluYW1pY0J1ZmYucHVzaCh0aGlzKTtcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgIFwiR2FpbiBhIHNoaWVsZCB0aGF0IGFic29yYnMgdXAgdG8gMTUgZGFtYWdlLiBFdmVyeSAxNSBzZWNvbmRzLCB0aGlzIHNoaWVsZCByZWZyZXNoZXMuIEFsc28gcmVkdWNlcyBkYW1hZ2UgdGFrZW4gYnkgNSUuXCI7XG4gIH1cbiAgcmVmcmVzaFNoaWVsZChkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMucGxheWVyLmN1cnJlbnRTaGllbGQgPCB0aGlzLnBsYXllci5tYXhTaGllbGQpIHtcbiAgICAgIHRoaXMudGltZXIgLT0gZHQ7XG4gICAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHRoaXMucmVmcmVzaFRpbWVyO1xuICAgICAgICB0aGlzLnBsYXllci5nYWluU2hpZWxkKHRoaXMuYmFzZVNoaWVsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLnJlZnJlc2hUaW1lcjtcbiAgICB9XG4gIH1cbiAgb25UYWtlRGFtYWdlKCkge1xuICAgIHRoaXMudGltZXIgPSAxNTtcbiAgfVxuICB1cGRhdGVTdGF0cyhzaGllbGRBbW91bnQ6IG51bWJlciwgcmVzaXN0QW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmJhc2VTaGllbGQgKz0gc2hpZWxkQW1vdW50O1xuICAgIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5pbmNyZWFzZVJlc2lzdFJhdGUocmVzaXN0QW1vdW50KTtcbiAgICB0aGlzLmFkZFNoaWVsZFRvUGxheWVyKHNoaWVsZEFtb3VudCk7XG4gIH1cbiAgbG9hZFN0YXRzKCkge1xuICAgIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5pbmNyZWFzZVJlc2lzdFJhdGUodGhpcy5iYXNlUmVzaXN0KTtcbiAgICB0aGlzLmFkZFNoaWVsZFRvUGxheWVyKHRoaXMuYmFzZVNoaWVsZCk7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICAgICAgICBcIkdhaW4gYSBzaGllbGQgdGhhdCBhYnNvcmJzIHVwIHRvIDIwIGRhbWFnZS4gRXZlcnkgMTUgc2Vjb25kcywgdGhpcyBzaGllbGQgcmVmcmVzaGVzLiBBbHNvIHJlZHVjZXMgZGFtYWdlIHRha2VuIGJ5IDEwJS5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiR2FpbiBhIHNoaWVsZCB0aGF0IGFic29yYnMgdXAgdG8gMjUgZGFtYWdlLiBFdmVyeSAxNSBzZWNvbmRzLCB0aGlzIHNoaWVsZCByZWZyZXNoZXMuIEFsc28gcmVkdWNlcyBkYW1hZ2UgdGFrZW4gYnkgMTUlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiR2FpbiBhIHNoaWVsZCB0aGF0IGFic29yYnMgdXAgdG8gMzAgZGFtYWdlLiBFdmVyeSAxNSBzZWNvbmRzLCB0aGlzIHNoaWVsZCByZWZyZXNoZXMuIEFsc28gcmVkdWNlcyBkYW1hZ2UgdGFrZW4gYnkgMjAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiR2FpbiBhIHNoaWVsZCB0aGF0IGFic29yYnMgdXAgdG8gMzUgZGFtYWdlLiBFdmVyeSAxNSBzZWNvbmRzLCB0aGlzIHNoaWVsZCByZWZyZXNoZXMuIEFsc28gcmVkdWNlcyBkYW1hZ2UgdGFrZW4gYnkgMjUlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUsIDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFNoaWVsZFRvUGxheWVyKHNoaWVsZDogbnVtYmVyKSB7XG4gICAgdGhpcy5wbGF5ZXIuZ2Fpbk1heFNoaWVsZChzaGllbGQpO1xuICB9XG4gIHN0YXJ0KCkge1xuICAgIHRoaXMucGxheWVyID0gUGxheWVyQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy5yZWZyZXNoU2hpZWxkKGR0KTtcbiAgfVxufVxuIl19