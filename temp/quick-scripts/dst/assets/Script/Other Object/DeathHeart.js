
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/DeathHeart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6b87JGRk9Pf5DBIitGJ8Hm', 'DeathHeart');
// Script/Other Object/DeathHeart.ts

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
var DeathHeart = /** @class */ (function (_super) {
    __extends(DeathHeart, _super);
    function DeathHeart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vec2 = cc.v2(1, 0);
        return _this;
    }
    DeathHeart.prototype.onLoad = function () { };
    DeathHeart.prototype.start = function () { };
    DeathHeart.prototype.update = function (dt) {
        this.angle = Math.sqrt(this.vec2.x * this.vec2.x - this.vec2.y * this.vec2.y);
        var atan2 = Math.atan2(this.vec2.y, this.vec2.x);
        var velocity = cc.v2(this.vec2.x * 300 * dt * this.angle, this.vec2.y * 300 * dt * -this.angle);
        if (velocity.x == 0 && velocity.y == 0)
            this.node.destroy();
        this.node.x += velocity.x;
        this.node.y += velocity.y;
    };
    __decorate([
        property(cc.Vec2)
    ], DeathHeart.prototype, "vec2", void 0);
    DeathHeart = __decorate([
        ccclass
    ], DeathHeart);
    return DeathHeart;
}(cc.Component));
exports.default = DeathHeart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXERlYXRoSGVhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFxQkM7UUFuQkMsVUFBSSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztJQW1COUIsQ0FBQztJQWpCQywyQkFBTSxHQUFOLGNBQVUsQ0FBQztJQUVYLDBCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN0RCxDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQ3JDLENBQUM7UUFDRixJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDVTtJQUZULFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FxQjlCO0lBQUQsaUJBQUM7Q0FyQkQsQUFxQkMsQ0FyQnVDLEVBQUUsQ0FBQyxTQUFTLEdBcUJuRDtrQkFyQm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYXRoSGVhcnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuVmVjMilcbiAgdmVjMjogY2MuVmVjMiA9IGNjLnYyKDEsIDApO1xuICBhbmdsZTogbnVtYmVyO1xuICBvbkxvYWQoKSB7fVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5zcXJ0KFxuICAgICAgdGhpcy52ZWMyLnggKiB0aGlzLnZlYzIueCAtIHRoaXMudmVjMi55ICogdGhpcy52ZWMyLnlcbiAgICApO1xuICAgIGxldCBhdGFuMiA9IE1hdGguYXRhbjIodGhpcy52ZWMyLnksIHRoaXMudmVjMi54KTtcbiAgICBsZXQgdmVsb2NpdHkgPSBjYy52MihcbiAgICAgIHRoaXMudmVjMi54ICogMzAwICogZHQgKiB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy52ZWMyLnkgKiAzMDAgKiBkdCAqIC10aGlzLmFuZ2xlXG4gICAgKTtcbiAgICBpZiAodmVsb2NpdHkueCA9PSAwICYmIHZlbG9jaXR5LnkgPT0gMCkgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB0aGlzLm5vZGUueCArPSB2ZWxvY2l0eS54O1xuICAgIHRoaXMubm9kZS55ICs9IHZlbG9jaXR5Lnk7XG4gIH1cbn1cbiJdfQ==