
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/BaneOfRegeneration.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71e5c8EZ9hGzqsKPVNjQ4gS', 'BaneOfRegeneration');
// Script/Item/BaneOfRegeneration.ts

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
var BaneOfRegeneration = /** @class */ (function (_super) {
    __extends(BaneOfRegeneration, _super);
    function BaneOfRegeneration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regenTick = 5;
        _this.timer = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    BaneOfRegeneration_1 = BaneOfRegeneration;
    // LIFE-CYCLE CALLBACKS:
    BaneOfRegeneration.prototype.onLoad = function () {
        BaneOfRegeneration_1.instance = this;
        this.description = "Recover health by 1 every 5 seconds.";
        this.itemOnLoad();
        GameController_1.default.instance.addItem(this);
    };
    BaneOfRegeneration.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Recover health by 1 every 4 seconds.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Recover health by 1 every 3 seconds.";
                    this.updateStats(4);
                    break;
                case 3:
                    this.description = "Recover health by 1 every 2 seconds.";
                    this.updateStats(3);
                    break;
                case 4:
                    this.description = "Recover health by 1 every second.";
                    this.updateStats(2);
                    break;
                case 5:
                    this.updateStats(1);
                    break;
                default:
                    break;
            }
        }
    };
    BaneOfRegeneration.prototype.regenPlayer = function () {
        if (this.timer < 0) {
            this.timer = this.regenTick;
            PlayerController_1.default.instance.regenHP(1);
        }
    };
    BaneOfRegeneration.prototype.updateStats = function (regenTick) {
        this.regenTick = regenTick;
    };
    BaneOfRegeneration.prototype.start = function () { };
    BaneOfRegeneration.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.regenPlayer();
    };
    var BaneOfRegeneration_1;
    __decorate([
        property(cc.Float)
    ], BaneOfRegeneration.prototype, "regenTick", void 0);
    BaneOfRegeneration = BaneOfRegeneration_1 = __decorate([
        ccclass
    ], BaneOfRegeneration);
    return BaneOfRegeneration;
}(Item_1.default));
exports.default = BaneOfRegeneration;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxCYW5lT2ZSZWdlbmVyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUN4QywrREFBMEQ7QUFDMUQsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFJO0lBQXBEO1FBQUEscUVBZ0VDO1FBN0RDLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBMkQ1QixDQUFDOzJCQWhFb0Isa0JBQWtCO0lBTXJDLHdCQUF3QjtJQUV4QixtQ0FBTSxHQUFOO1FBQ0Usb0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLHNDQUFzQyxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsc0NBQXNDLENBQUM7b0JBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0Qix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsc0NBQXNDLENBQUM7b0JBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsc0NBQXNDLENBQUM7b0JBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsbUNBQW1DLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsd0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVCLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBQ0Qsd0NBQVcsR0FBWCxVQUFZLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCxrQ0FBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLG1DQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O0lBNUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ0c7SUFISCxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQWdFdEM7SUFBRCx5QkFBQztDQWhFRCxBQWdFQyxDQWhFK0MsY0FBSSxHQWdFbkQ7a0JBaEVvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuLi9QbGF5ZXIvUGxheWVyQ29udHJvbGxlclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFuZU9mUmVnZW5lcmF0aW9uIGV4dGVuZHMgSXRlbSB7XG4gIHN0YXRpYyBpbnN0YW5jZTogQmFuZU9mUmVnZW5lcmF0aW9uO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHJlZ2VuVGljazogbnVtYmVyID0gNTtcbiAgdGltZXI6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBCYW5lT2ZSZWdlbmVyYXRpb24uaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlJlY292ZXIgaGVhbHRoIGJ5IDEgZXZlcnkgNSBzZWNvbmRzLlwiO1xuICAgIHRoaXMuaXRlbU9uTG9hZCgpO1xuICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmFkZEl0ZW0odGhpcyk7XG4gIH1cblxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVjb3ZlciBoZWFsdGggYnkgMSBldmVyeSA0IHNlY29uZHMuXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmFkZEVxdWlwZWRJdGVtKHRoaXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVjb3ZlciBoZWFsdGggYnkgMSBldmVyeSAzIHNlY29uZHMuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlJlY292ZXIgaGVhbHRoIGJ5IDEgZXZlcnkgMiBzZWNvbmRzLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJSZWNvdmVyIGhlYWx0aCBieSAxIGV2ZXJ5IHNlY29uZC5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVnZW5QbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5yZWdlblRpY2s7XG4gICAgICBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLnJlZ2VuSFAoMSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVN0YXRzKHJlZ2VuVGljazogbnVtYmVyKSB7XG4gICAgdGhpcy5yZWdlblRpY2sgPSByZWdlblRpY2s7XG4gIH1cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICB0aGlzLnJlZ2VuUGxheWVyKCk7XG4gIH1cbn1cbiJdfQ==