
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Coin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6456cNTILNO74xFxkRLqkyK', 'Coin');
// Script/Other Object/Coin.ts

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
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.amount = 10;
        _this.getCoinSound = null;
        _this.isLooted = false;
        return _this;
    }
    Coin.prototype.onLoad = function () {
        this.node.zIndex = 10001;
        ObjectPooling_1.default.instance.addToCoinList(this.node);
    };
    Coin.prototype.set = function (amount) {
        this.amount = amount;
        this.isLooted = false;
    };
    Coin.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.getCoinSound, false, 1);
            GameController_1.default.instance.gainCoin(this.amount);
            this.isLooted = true;
            ObjectPooling_1.default.instance.putBackToPool(this.node);
        }
    };
    __decorate([
        property(cc.Integer)
    ], Coin.prototype, "amount", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Coin.prototype, "getCoinSound", void 0);
    Coin = __decorate([
        ccclass
    ], Coin);
    return Coin;
}(cc.Component));
exports.default = Coin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXENvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUN4QywwREFBcUQ7QUFFL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1QkM7UUFyQkMsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxjQUFRLEdBQVksS0FBSyxDQUFDOztJQWtCNUIsQ0FBQztJQWpCQyxxQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHVCQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELGtCQUFHLEdBQUgsVUFBSSxNQUFjO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCwrQkFBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksZUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO2dCQUNuQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLHVCQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0NBQ1Q7SUFFWjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNXO0lBSmYsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXVCeEI7SUFBRCxXQUFDO0NBdkJELEFBdUJDLENBdkJpQyxFQUFFLENBQUMsU0FBUyxHQXVCN0M7a0JBdkJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgb2JqZWN0UG9vbGluZyBmcm9tIFwiLi4vTWFuYWdlci9PYmplY3RQb29saW5nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIGFtb3VudCA9IDEwO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBnZXRDb2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGlzTG9vdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDE7XG4gICAgb2JqZWN0UG9vbGluZy5pbnN0YW5jZS5hZGRUb0NvaW5MaXN0KHRoaXMubm9kZSk7XG4gIH1cbiAgc2V0KGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgdGhpcy5pc0xvb3RlZCA9IGZhbHNlO1xuICB9XG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMCkge1xuICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nZXRDb2luU291bmQsIGZhbHNlLCAxKTtcbiAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmdhaW5Db2luKHRoaXMuYW1vdW50KTtcbiAgICAgIHRoaXMuaXNMb290ZWQgPSB0cnVlO1xuICAgICAgb2JqZWN0UG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKHRoaXMubm9kZSk7XG4gICAgfVxuICB9XG59XG4iXX0=