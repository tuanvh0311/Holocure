
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6b16W8rZdMKbG2uFBWxHd6', 'Food');
// Script/Other Object/Food.ts

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
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var PlayerController_1 = require("../Player/PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healAmount = 20;
        return _this;
        // update (dt) {}
    }
    Food.prototype.onLoad = function () {
        this.node.zIndex = 10001;
    };
    Food.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
            other.node
                .getComponent(PlayerController_1.default)
                .healByPercentage(this.healAmount);
            ObjectPooling_1.default.instance.putBackToPool(this.node);
        }
    };
    Food.prototype.start = function () { };
    __decorate([
        property(cc.Integer)
    ], Food.prototype, "healAmount", void 0);
    Food = __decorate([
        ccclass
    ], Food);
    return Food;
}(cc.Component));
exports.default = Food;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXEZvb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsMERBQXFEO0FBQ3JELCtEQUEwRDtBQUVwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW1CQztRQWpCQyxnQkFBVSxHQUFHLEVBQUUsQ0FBQzs7UUFnQmhCLGlCQUFpQjtJQUNuQixDQUFDO0lBaEJDLHFCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFpQixLQUFrQixFQUFFLElBQWlCO1FBQ3BELElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDbEIsS0FBSyxDQUFDLElBQUk7aUJBQ1AsWUFBWSxDQUFDLDBCQUFnQixDQUFDO2lCQUM5QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsdUJBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxvQkFBSyxHQUFMLGNBQVMsQ0FBQztJQWRWO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ0w7SUFGRyxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBbUJ4QjtJQUFELFdBQUM7Q0FuQkQsQUFtQkMsQ0FuQmlDLEVBQUUsQ0FBQyxTQUFTLEdBbUI3QztrQkFuQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IG9iamVjdFBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvT2JqZWN0UG9vbGluZ1wiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJDb250cm9sbGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIGhlYWxBbW91bnQgPSAyMDtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS56SW5kZXggPSAxMDAwMTtcbiAgfVxuXG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMCkge1xuICAgICAgb3RoZXIubm9kZVxuICAgICAgICAuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpXG4gICAgICAgIC5oZWFsQnlQZXJjZW50YWdlKHRoaXMuaGVhbEFtb3VudCk7XG4gICAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==