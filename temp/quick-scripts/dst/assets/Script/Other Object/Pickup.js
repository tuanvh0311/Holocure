
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Pickup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee6b6BKEbdNroF3wYKtt+5y', 'Pickup');
// Script/Other Object/Pickup.ts

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
var Utils_1 = require("../Controller/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pickup = /** @class */ (function (_super) {
    __extends(Pickup, _super);
    function Pickup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPicking = false;
        _this.speed = 100;
        return _this;
    }
    Pickup.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 7) {
            this.isPicking = true;
        }
    };
    Pickup.prototype.onLoad = function () { };
    Pickup.prototype.set = function () {
        this.isPicking = false;
        this.speed = 100;
    };
    Pickup.prototype.moveToPlayer = function (dt) {
        var player = this.node.parent.getChildByName("PlayerBase");
        var deltaX = player.x - this.node.x;
        var deltaY = player.y - this.node.y;
        var normalizedDelta = cc.v2(deltaX, deltaY).normalize();
        this.node.x += normalizedDelta.x * this.speed * dt;
        this.node.y += normalizedDelta.y * this.speed * dt;
        this.speed += 20;
    };
    Pickup.prototype.start = function () { };
    Pickup.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        if (!this.isPicking)
            return;
        this.moveToPlayer(dt);
    };
    Pickup = __decorate([
        ccclass
    ], Pickup);
    return Pickup;
}(cc.Component));
exports.default = Pickup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXFBpY2t1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFnQ0M7UUEvQkMsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFLLEdBQVcsR0FBRyxDQUFDOztJQThCdEIsQ0FBQztJQTVCQyxpQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHVCQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1gsb0JBQUcsR0FBSDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFDRCw2QkFBWSxHQUFaLFVBQWEsRUFBVTtRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQUssR0FBTCxjQUFTLENBQUM7SUFFVix1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBL0JrQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBZ0MxQjtJQUFELGFBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ21DLEVBQUUsQ0FBQyxTQUFTLEdBZ0MvQztrQkFoQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBpc1BpY2tpbmcgPSBmYWxzZTtcbiAgc3BlZWQ6IG51bWJlciA9IDEwMDtcblxuICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDcpIHtcbiAgICAgIHRoaXMuaXNQaWNraW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7fVxuICBzZXQoKSB7XG4gICAgdGhpcy5pc1BpY2tpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNwZWVkID0gMTAwO1xuICB9XG4gIG1vdmVUb1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgdmFyIHBsYXllciA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJCYXNlXCIpO1xuICAgIHZhciBkZWx0YVggPSBwbGF5ZXIueCAtIHRoaXMubm9kZS54O1xuICAgIHZhciBkZWx0YVkgPSBwbGF5ZXIueSAtIHRoaXMubm9kZS55O1xuICAgIGxldCBub3JtYWxpemVkRGVsdGEgPSBjYy52MihkZWx0YVgsIGRlbHRhWSkubm9ybWFsaXplKCk7XG4gICAgdGhpcy5ub2RlLnggKz0gbm9ybWFsaXplZERlbHRhLnggKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy5ub2RlLnkgKz0gbm9ybWFsaXplZERlbHRhLnkgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy5zcGVlZCArPSAyMDtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc1BpY2tpbmcpIHJldHVybjtcbiAgICB0aGlzLm1vdmVUb1BsYXllcihkdCk7XG4gIH1cbn1cbiJdfQ==