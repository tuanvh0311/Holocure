
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/BloodyTear.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19443nnzbdGfbWyTgARfsWa', 'BloodyTear');
// Script/Item/BloodyTear.ts

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
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BloodyTear = /** @class */ (function (_super) {
    __extends(BloodyTear, _super);
    function BloodyTear() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healingAmount = 2;
        _this.healingChance = 30;
        _this.refreshTimer = 0.25;
        _this.timer = 0.25;
        _this.killCount = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    BloodyTear_1 = BloodyTear;
    BloodyTear.prototype.onLoad = function () {
        BloodyTear_1.instance = this;
        this.itemOnLoad();
        this.player = PlayerController_1.default.instance;
        this.description =
            "When defeating a target, there is a 30% chance to life-steal 2 HP.";
    };
    BloodyTear.prototype.start = function () { };
    BloodyTear.prototype.updateStats = function (additionHealingAmount, additionHealingChange) {
        this.healingAmount += additionHealingAmount;
        this.healingChance += additionHealingChange;
    };
    BloodyTear.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "When defeating a target, there is a 30% chance to life-steal 4 HP.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description =
                        "When defeating a target, there is a 30% chance to life-steal 6 HP.";
                    this.updateStats(2, 0);
                    break;
                case 3:
                    this.updateStats(2, 0);
                    break;
                default:
                    break;
            }
        }
    };
    BloodyTear.prototype.healPlayer = function (dt) {
        this.timer -= dt;
        if (this.timer < 0) {
            if (this.killCount != GameController_1.default.instance.killAmount) {
                this.timer = this.refreshTimer;
                this.killCount = GameController_1.default.instance.killAmount;
                var healChange = this.healingChance / 100;
                var random = Math.random();
                if (random < healChange) {
                    this.player.heal(this.healingAmount);
                }
            }
        }
    };
    BloodyTear.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.healPlayer(dt);
    };
    var BloodyTear_1;
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "healingAmount", void 0);
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "healingChance", void 0);
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "refreshTimer", void 0);
    BloodyTear = BloodyTear_1 = __decorate([
        ccclass
    ], BloodyTear);
    return BloodyTear;
}(Item_1.default));
exports.default = BloodyTear;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxCbG9vZHlUZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFDeEMsK0RBQTBEO0FBQzFELCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBSTtJQUE1QztRQUFBLHFFQXVFQztRQXBFQyxtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUM1QixXQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXJCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQTRENUIsQ0FBQzttQkF2RW9CLFVBQVU7SUFZN0IsMkJBQU0sR0FBTjtRQUNFLFlBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLDBCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVztZQUNkLG9FQUFvRSxDQUFDO0lBQ3pFLENBQUM7SUFFRCwwQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUNWLGdDQUFXLEdBQVgsVUFBWSxxQkFBNkIsRUFBRSxxQkFBNkI7UUFDdEUsSUFBSSxDQUFDLGFBQWEsSUFBSSxxQkFBcUIsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxJQUFJLHFCQUFxQixDQUFDO0lBQzlDLENBQUM7SUFDRCw4QkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVzt3QkFDZCxvRUFBb0UsQ0FBQztvQkFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLHdCQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVc7d0JBQ2Qsb0VBQW9FLENBQUM7b0JBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFDRCwrQkFBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO2dCQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRTNCLElBQUksTUFBTSxHQUFHLFVBQVUsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN0QzthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7O0lBbkVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNTO0lBUFQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXVFOUI7SUFBRCxpQkFBQztDQXZFRCxBQXVFQyxDQXZFdUMsY0FBSSxHQXVFM0M7a0JBdkVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi4vUGxheWVyL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb29keVRlYXIgZXh0ZW5kcyBJdGVtIHtcbiAgc3RhdGljIGluc3RhbmNlOiBCbG9vZHlUZWFyO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGhlYWxpbmdBbW91bnQ6IG51bWJlciA9IDI7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgaGVhbGluZ0NoYW5jZTogbnVtYmVyID0gMzA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgcmVmcmVzaFRpbWVyOiBudW1iZXIgPSAwLjI1O1xuICB0aW1lcjogbnVtYmVyID0gMC4yNTtcbiAgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyO1xuICBraWxsQ291bnQ6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIG9uTG9hZCgpIHtcbiAgICBCbG9vZHlUZWFyLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgICB0aGlzLnBsYXllciA9IFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICBcIldoZW4gZGVmZWF0aW5nIGEgdGFyZ2V0LCB0aGVyZSBpcyBhIDMwJSBjaGFuY2UgdG8gbGlmZS1zdGVhbCAyIEhQLlwiO1xuICB9XG5cbiAgc3RhcnQoKSB7fVxuICB1cGRhdGVTdGF0cyhhZGRpdGlvbkhlYWxpbmdBbW91bnQ6IG51bWJlciwgYWRkaXRpb25IZWFsaW5nQ2hhbmdlOiBudW1iZXIpIHtcbiAgICB0aGlzLmhlYWxpbmdBbW91bnQgKz0gYWRkaXRpb25IZWFsaW5nQW1vdW50O1xuICAgIHRoaXMuaGVhbGluZ0NoYW5jZSArPSBhZGRpdGlvbkhlYWxpbmdDaGFuZ2U7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJXaGVuIGRlZmVhdGluZyBhIHRhcmdldCwgdGhlcmUgaXMgYSAzMCUgY2hhbmNlIHRvIGxpZmUtc3RlYWwgNCBIUC5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiV2hlbiBkZWZlYXRpbmcgYSB0YXJnZXQsIHRoZXJlIGlzIGEgMzAlIGNoYW5jZSB0byBsaWZlLXN0ZWFsIDYgSFAuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygyLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMiwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhlYWxQbGF5ZXIoZHQ6IG51bWJlcikge1xuICAgIHRoaXMudGltZXIgLT0gZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICBpZiAodGhpcy5raWxsQ291bnQgIT0gR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2Uua2lsbEFtb3VudCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5yZWZyZXNoVGltZXI7XG4gICAgICAgIHRoaXMua2lsbENvdW50ID0gR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2Uua2lsbEFtb3VudDtcbiAgICAgICAgdmFyIGhlYWxDaGFuZ2UgPSB0aGlzLmhlYWxpbmdDaGFuY2UgLyAxMDA7XG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgIGlmIChyYW5kb20gPCBoZWFsQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuaGVhbCh0aGlzLmhlYWxpbmdBbW91bnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy5oZWFsUGxheWVyKGR0KTtcbiAgfVxufVxuIl19