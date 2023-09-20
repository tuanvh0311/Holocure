"use strict";
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