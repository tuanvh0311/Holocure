
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/WorldScrolling.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aaa0ZNALtGtJ2LEPuLk3xj', 'WorldScrolling');
// Script/Controller/WorldScrolling.ts

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
var WorldScrolling = /** @class */ (function (_super) {
    __extends(WorldScrolling, _super);
    function WorldScrolling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.tileSize = 3849;
        _this.terrainTiles = [];
        _this.scrollDistance = _this.tileSize * 3;
        return _this;
    }
    WorldScrolling_1 = WorldScrolling;
    WorldScrolling.prototype.onLoad = function () {
        WorldScrolling_1.instance = this;
        this.tileSize = this.tileSize / 2;
        this.changeDistance = this.tileSize * 3;
    };
    WorldScrolling.prototype.start = function () { };
    WorldScrolling.prototype.update = function (dt) {
        for (var i = 0; i < this.terrainTiles.length; i++) {
            var distanceX = this.player.x - this.terrainTiles[i].x;
            var distanceY = this.player.y - this.terrainTiles[i].y;
            if (distanceX >= this.changeDistance)
                this.terrainTiles[i].x += this.scrollDistance;
            if (distanceX <= -this.changeDistance)
                this.terrainTiles[i].x -= this.scrollDistance;
            if (distanceY >= this.changeDistance)
                this.terrainTiles[i].y += this.scrollDistance;
            if (distanceY <= -this.changeDistance)
                this.terrainTiles[i].y -= this.scrollDistance;
        }
    };
    var WorldScrolling_1;
    __decorate([
        property(cc.Node)
    ], WorldScrolling.prototype, "player", void 0);
    __decorate([
        property(cc.Integer)
    ], WorldScrolling.prototype, "tileSize", void 0);
    __decorate([
        property(cc.Node)
    ], WorldScrolling.prototype, "terrainTiles", void 0);
    WorldScrolling = WorldScrolling_1 = __decorate([
        ccclass
    ], WorldScrolling);
    return WorldScrolling;
}(cc.Component));
exports.default = WorldScrolling;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxXb3JsZFNjcm9sbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXVDQztRQXBDQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFHaEIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFJN0Isb0JBQWMsR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7SUEwQnJDLENBQUM7dUJBdkNvQixjQUFjO0lBZWpDLCtCQUFNLEdBQU47UUFDRSxnQkFBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZELElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2hELElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDaEQsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWM7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDaEQsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYztnQkFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUNqRDtJQUNILENBQUM7O0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztvREFDTDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNXO0lBVFYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXVDbEM7SUFBRCxxQkFBQztDQXZDRCxBQXVDQyxDQXZDMkMsRUFBRSxDQUFDLFNBQVMsR0F1Q3ZEO2tCQXZDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRTY3JvbGxpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IFdvcmxkU2Nyb2xsaW5nO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgdGlsZVNpemUgPSAzODQ5O1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0ZXJyYWluVGlsZXM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gIHBsYXllclRpbGVQb3M6IGNjLlZlYzI7XG4gIGN1cnJlbnRwbGF5ZXJUaWxlUG9zOiBjYy5WZWMyO1xuICBzY3JvbGxEaXN0YW5jZSA9IHRoaXMudGlsZVNpemUgKiAzO1xuICBjaGFuZ2VEaXN0YW5jZTogbnVtYmVyO1xuICBvbkxvYWQoKSB7XG4gICAgV29ybGRTY3JvbGxpbmcuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgdGhpcy50aWxlU2l6ZSA9IHRoaXMudGlsZVNpemUgLyAyO1xuICAgIHRoaXMuY2hhbmdlRGlzdGFuY2UgPSB0aGlzLnRpbGVTaXplICogMztcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVycmFpblRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGlzdGFuY2VYID0gdGhpcy5wbGF5ZXIueCAtIHRoaXMudGVycmFpblRpbGVzW2ldLng7XG4gICAgICB2YXIgZGlzdGFuY2VZID0gdGhpcy5wbGF5ZXIueSAtIHRoaXMudGVycmFpblRpbGVzW2ldLnk7XG5cbiAgICAgIGlmIChkaXN0YW5jZVggPj0gdGhpcy5jaGFuZ2VEaXN0YW5jZSlcbiAgICAgICAgdGhpcy50ZXJyYWluVGlsZXNbaV0ueCArPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgICAgaWYgKGRpc3RhbmNlWCA8PSAtdGhpcy5jaGFuZ2VEaXN0YW5jZSlcbiAgICAgICAgdGhpcy50ZXJyYWluVGlsZXNbaV0ueCAtPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgICAgaWYgKGRpc3RhbmNlWSA+PSB0aGlzLmNoYW5nZURpc3RhbmNlKVxuICAgICAgICB0aGlzLnRlcnJhaW5UaWxlc1tpXS55ICs9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgICBpZiAoZGlzdGFuY2VZIDw9IC10aGlzLmNoYW5nZURpc3RhbmNlKVxuICAgICAgICB0aGlzLnRlcnJhaW5UaWxlc1tpXS55IC09IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgfVxuICB9XG59XG4iXX0=