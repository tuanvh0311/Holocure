
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5413AXpftMwoBmVDgpSUYq', 'GameController');
// Script/Controller/GameController.ts

"use strict";
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
var SlotController_1 = require("./SlotController");
var UIController_1 = require("./UIController");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameOverSound = null;
        _this.timer = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.killAmount = 0;
        _this.coinAmount = 0;
        _this.dynamicBuff = new Array();
        _this.itemList = new Array();
        _this.weaponList = new Array();
        _this.equipedWeapon = new Array();
        _this.equipedItem = new Array();
        _this.isGameOver = null;
        return _this;
    }
    GameController_1 = GameController;
    GameController.prototype.onLoad = function () {
        GameController_1.instance = this;
        Utils_1.default.isPause = false;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
    };
    GameController.prototype.gainKill = function () {
        this.killAmount++;
        UIController_1.default.instance.updateKillLabel(this.killAmount);
    };
    GameController.prototype.gainCoin = function (amount) {
        this.coinAmount += amount;
        UIController_1.default.instance.updateCoinLabel(this.coinAmount);
    };
    GameController.prototype.takeDamage = function () {
        for (var i = 0; i < this.dynamicBuff.length; i++) {
            this.dynamicBuff[i].onTakeDamage();
        }
    };
    GameController.prototype.addWeapon = function (weapon) {
        this.weaponList.push(weapon);
    };
    GameController.prototype.addEquipedWeapon = function (weapon) {
        this.equipedWeapon.push(weapon);
    };
    GameController.prototype.addItem = function (item) {
        this.itemList.push(item);
    };
    GameController.prototype.addEquipedItem = function (item) {
        this.equipedItem.push(item);
    };
    GameController.prototype.onLevelUp = function () {
        UIController_1.default.instance.onLevelUp();
    };
    GameController.prototype.start = function () {
        SlotController_1.default.instance.updateSlot();
    };
    GameController.prototype.tuyetvong = function () {
        for (var i = 0; i < this.weaponList.length; i++) {
            this.weaponList[i].onLevelUp();
        }
        for (var i = 0; i < this.itemList.length; i++) {
            this.itemList[i].onLevelUp();
        }
    };
    GameController.prototype.onGameOver = function () {
        this.isGameOver = true;
        this.equipedItem.forEach(function (element) {
            element.isEquiped = false;
        });
        this.equipedWeapon.forEach(function (element) {
            element.isEquiped = false;
        });
        this.scheduleOnce(function () {
            this.node.getComponent(cc.AudioSource).pause();
            UIController_1.default.instance.onGameOver();
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.gameOverSound, false, 1);
        }, 3);
    };
    GameController.prototype.update = function (dt) {
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.AudioSource).resume();
        else
            this.node.getComponent(cc.AudioSource).pause();
        if (Utils_1.default.isPause) {
            return;
        }
        this.timer += dt;
    };
    var GameController_1;
    __decorate([
        property(cc.AudioClip)
    ], GameController.prototype, "gameOverSound", void 0);
    GameController = GameController_1 = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXVGQztRQXBGQyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQix3QkFBd0I7UUFDeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQzNDLGNBQVEsR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQ3hDLGdCQUFVLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUMxQyxtQkFBYSxHQUFlLElBQUksS0FBSyxFQUFPLENBQUM7UUFDN0MsaUJBQVcsR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQzNDLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQTBFN0IsQ0FBQzt1QkF2Rm9CLGNBQWM7SUFjakMsK0JBQU0sR0FBTjtRQUNFLGdCQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMvQixlQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUV0QixFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxpQ0FBUSxHQUFSLFVBQVMsTUFBTTtRQUNiLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDO1FBQzFCLHNCQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELG1DQUFVLEdBQVY7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwQztJQUNILENBQUM7SUFDRCxrQ0FBUyxHQUFULFVBQVUsTUFBYztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QseUNBQWdCLEdBQWhCLFVBQWlCLE1BQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELGdDQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsSUFBVTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsa0NBQVMsR0FBVDtRQUNFLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0Usd0JBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNoQztRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUNELG1DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDL0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDakMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuQyxJQUFJLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTTtnQkFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxlQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU07WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7O0lBbkZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7eURBQ1k7SUFIaEIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXVGbEM7SUFBRCxxQkFBQztDQXZGRCxBQXVGQyxDQXZGMkMsRUFBRSxDQUFDLFNBQVMsR0F1RnZEO2tCQXZGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYW5lT2ZSZWdlbmVyYXRpb24gZnJvbSBcIi4uL0l0ZW0vQmFuZU9mUmVnZW5lcmF0aW9uXCI7XG5pbXBvcnQgQmxvb2R5VGVhciBmcm9tIFwiLi4vSXRlbS9CbG9vZHlUZWFyXCI7XG5pbXBvcnQgRHVtYmJlbGwgZnJvbSBcIi4uL0l0ZW0vRHVtYmJlbGxcIjtcbmltcG9ydCBFeWVQYXRjaCBmcm9tIFwiLi4vSXRlbS9FeWVQYXRjaFwiO1xuaW1wb3J0IEdyb3d0aFBpbGwgZnJvbSBcIi4uL0l0ZW0vR3Jvd3RoUGlsbFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL0l0ZW0vSXRlbVwiO1xuaW1wb3J0IEF4ZVRocm93ZXIgZnJvbSBcIi4uL1dlYXBvbi9BeGVUaHJvd2VyXCI7XG5pbXBvcnQgQm93IGZyb20gXCIuLi9XZWFwb24vQm93XCI7XG5pbXBvcnQgTW9sbHlUaHJvd2VyIGZyb20gXCIuLi9XZWFwb24vTW9sbHlUaHJvd2VyXCI7XG5pbXBvcnQgU2h1cmlrZW5UaHJvd2VyIGZyb20gXCIuLi9XZWFwb24vU2h1cmlrZW5UaHJvd2VyXCI7XG5pbXBvcnQgU3dvcmQgZnJvbSBcIi4uL1dlYXBvbi9Td29yZFwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi4vV2VhcG9uL1dlYXBvblwiO1xuaW1wb3J0IFNsb3RDb250cm9sbGVyIGZyb20gXCIuL1Nsb3RDb250cm9sbGVyXCI7XG5pbXBvcnQgVUlDb250cm9sbGVyIGZyb20gXCIuL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogR2FtZUNvbnRyb2xsZXI7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGdhbWVPdmVyU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXIgPSAwO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAga2lsbEFtb3VudDogbnVtYmVyID0gMDtcbiAgY29pbkFtb3VudDogbnVtYmVyID0gMDtcbiAgZHluYW1pY0J1ZmY6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICBpdGVtTGlzdDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIHdlYXBvbkxpc3Q6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICBlcXVpcGVkV2VhcG9uOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgZXF1aXBlZEl0ZW06IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICBpc0dhbWVPdmVyOiBib29sZWFuID0gbnVsbDtcbiAgb25Mb2FkKCkge1xuICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcbiAgICBVdGlscy5pc1BhdXNlID0gZmFsc2U7XG5cbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgfVxuICBnYWluS2lsbCgpIHtcbiAgICB0aGlzLmtpbGxBbW91bnQrKztcbiAgICBVSUNvbnRyb2xsZXIuaW5zdGFuY2UudXBkYXRlS2lsbExhYmVsKHRoaXMua2lsbEFtb3VudCk7XG4gIH1cbiAgZ2FpbkNvaW4oYW1vdW50KSB7XG4gICAgdGhpcy5jb2luQW1vdW50ICs9IGFtb3VudDtcbiAgICBVSUNvbnRyb2xsZXIuaW5zdGFuY2UudXBkYXRlQ29pbkxhYmVsKHRoaXMuY29pbkFtb3VudCk7XG4gIH1cbiAgdGFrZURhbWFnZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHluYW1pY0J1ZmYubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZHluYW1pY0J1ZmZbaV0ub25UYWtlRGFtYWdlKCk7XG4gICAgfVxuICB9XG4gIGFkZFdlYXBvbih3ZWFwb246IFdlYXBvbikge1xuICAgIHRoaXMud2VhcG9uTGlzdC5wdXNoKHdlYXBvbik7XG4gIH1cbiAgYWRkRXF1aXBlZFdlYXBvbih3ZWFwb246IFdlYXBvbikge1xuICAgIHRoaXMuZXF1aXBlZFdlYXBvbi5wdXNoKHdlYXBvbik7XG4gIH1cbiAgYWRkSXRlbShpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy5pdGVtTGlzdC5wdXNoKGl0ZW0pO1xuICB9XG4gIGFkZEVxdWlwZWRJdGVtKGl0ZW06IEl0ZW0pIHtcbiAgICB0aGlzLmVxdWlwZWRJdGVtLnB1c2goaXRlbSk7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIFVJQ29udHJvbGxlci5pbnN0YW5jZS5vbkxldmVsVXAoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIFNsb3RDb250cm9sbGVyLmluc3RhbmNlLnVwZGF0ZVNsb3QoKTtcbiAgfVxuICB0dXlldHZvbmcoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlYXBvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMud2VhcG9uTGlzdFtpXS5vbkxldmVsVXAoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1MaXN0W2ldLm9uTGV2ZWxVcCgpO1xuICAgIH1cbiAgfVxuICBvbkdhbWVPdmVyKCkge1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgdGhpcy5lcXVpcGVkSXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmlzRXF1aXBlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuZXF1aXBlZFdlYXBvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmlzRXF1aXBlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGF1c2UoKTtcbiAgICAgIFVJQ29udHJvbGxlci5pbnN0YW5jZS5vbkdhbWVPdmVyKCk7XG4gICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVPdmVyU291bmQsIGZhbHNlLCAxKTtcbiAgICB9LCAzKTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucmVzdW1lKCk7XG4gICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wYXVzZSgpO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gIH1cbn1cbiJdfQ==