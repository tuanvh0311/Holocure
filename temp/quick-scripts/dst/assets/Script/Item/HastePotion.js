
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/HastePotion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e86behE45tB+ZFEjjLVrX8A', 'HastePotion');
// Script/Item/HastePotion.ts

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
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HastePotion = /** @class */ (function (_super) {
    __extends(HastePotion, _super);
    function HastePotion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasteRate = 5;
        _this.speedRate = 30;
        _this.currentLevel = _this.level;
        return _this;
    }
    HastePotion_1 = HastePotion;
    HastePotion.prototype.onLoad = function () {
        this.itemOnLoad();
        HastePotion_1.instance = this;
        this.description = "Increase Haste by 5% and SPD by 30%.";
    };
    HastePotion.prototype.loadStats = function () {
        this.overallStats.increaseHasteRate(this.hasteRate);
        this.overallStats.increaseSpeedRate(this.speedRate);
    };
    HastePotion.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase Haste by 10% and SPD by 35%.";
                    this.isEquiped = true;
                    this.loadStats();
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Increase Haste by 15% and SPD by 40%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description = "Increase Haste by 20% and SPD by 45%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description = "Increase Haste by 25% and SPD by 50%.";
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
    HastePotion.prototype.updateStats = function (additionHasteAmount, additionSpeedAmount) {
        this.overallStats.increaseHasteRate(additionHasteAmount);
        this.overallStats.increaseSpeedRate(additionSpeedAmount);
    };
    HastePotion.prototype.start = function () { };
    HastePotion.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var HastePotion_1;
    __decorate([
        property(cc.Float)
    ], HastePotion.prototype, "hasteRate", void 0);
    __decorate([
        property(cc.Float)
    ], HastePotion.prototype, "speedRate", void 0);
    HastePotion = HastePotion_1 = __decorate([
        ccclass
    ], HastePotion);
    return HastePotion;
}(Item_1.default));
exports.default = HastePotion;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxIYXN0ZVBvdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBSTtJQUE3QztRQUFBLHFFQTREQztRQXpEQyxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQXNENUIsQ0FBQztvQkE1RG9CLFdBQVc7SUFPOUIsNEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixhQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLHNDQUFzQyxDQUFDO0lBQzVELENBQUM7SUFDRCwrQkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELCtCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsdUNBQXVDLENBQUM7b0JBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLHdCQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyx1Q0FBdUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsdUNBQXVDLENBQUM7b0JBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLHVDQUF1QyxDQUFDO29CQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsaUNBQVcsR0FBWCxVQUFZLG1CQUEyQixFQUFFLG1CQUEyQjtRQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwyQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLDRCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87SUFDOUIsQ0FBQzs7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDRztJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNJO0lBTEosV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTREL0I7SUFBRCxrQkFBQztDQTVERCxBQTREQyxDQTVEd0MsY0FBSSxHQTRENUM7a0JBNURvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXN0ZVBvdGlvbiBleHRlbmRzIEl0ZW0ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEhhc3RlUG90aW9uO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGhhc3RlUmF0ZTogbnVtYmVyID0gNTtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBzcGVlZFJhdGU6IG51bWJlciA9IDMwO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5pdGVtT25Mb2FkKCk7XG4gICAgSGFzdGVQb3Rpb24uaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIEhhc3RlIGJ5IDUlIGFuZCBTUEQgYnkgMzAlLlwiO1xuICB9XG4gIGxvYWRTdGF0cygpIHtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5pbmNyZWFzZUhhc3RlUmF0ZSh0aGlzLmhhc3RlUmF0ZSk7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMuaW5jcmVhc2VTcGVlZFJhdGUodGhpcy5zcGVlZFJhdGUpO1xuICB9XG4gIG9uTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2tMZXZlbCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMub25MZXZlbE1heCgpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBIYXN0ZSBieSAxMCUgYW5kIFNQRCBieSAzNSUuXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBIYXN0ZSBieSAxNSUgYW5kIFNQRCBieSA0MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIEhhc3RlIGJ5IDIwJSBhbmQgU1BEIGJ5IDQ1JS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUsIDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgSGFzdGUgYnkgMjUlIGFuZCBTUEQgYnkgNTAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUsIDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVTdGF0cyhhZGRpdGlvbkhhc3RlQW1vdW50OiBudW1iZXIsIGFkZGl0aW9uU3BlZWRBbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlSGFzdGVSYXRlKGFkZGl0aW9uSGFzdGVBbW91bnQpO1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlU3BlZWRSYXRlKGFkZGl0aW9uU3BlZWRBbW91bnQpO1xuICB9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gIH1cbn1cbiJdfQ==