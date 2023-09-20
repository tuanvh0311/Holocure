"use strict";
cc._RF.push(module, '99f7bFx1jZMiri/1AV9RwiL', 'ProjectilePooling');
// Script/Manager/ProjectilePooling.ts

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
var ProjectilePooling = /** @class */ (function (_super) {
    __extends(ProjectilePooling, _super);
    function ProjectilePooling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrowPool = new cc.NodePool();
        _this.mollyPool = new cc.NodePool();
        _this.axePool = new cc.NodePool();
        _this.shurikenPool = new cc.NodePool();
        _this.trailPool = new cc.NodePool();
        _this.projectilePool = new Array();
        return _this;
    }
    ProjectilePooling_1 = ProjectilePooling;
    // LIFE-CYCLE CALLBACKS:
    ProjectilePooling.prototype.putBackToPool = function (node) {
        if (!node)
            return;
        switch (node.name) {
            case "Arrow":
                this.arrowPool.put(node);
                break;
            case "Molly":
                this.mollyPool.put(node);
                break;
            case "Axe":
                this.axePool.put(node);
                break;
            case "Shuriken":
                this.shurikenPool.put(node);
                break;
            case "Trail":
                this.trailPool.put(node);
                break;
        }
    };
    ProjectilePooling.prototype.onLoad = function () {
        ProjectilePooling_1.instance = this;
        var initCount = 1000;
        for (var i = 0; i < initCount; ++i) {
            var trail = new cc.Node("Trail");
            this.trailPool.put(trail);
        }
    };
    ProjectilePooling.prototype.start = function () { };
    ProjectilePooling.prototype.update = function (dt) { };
    var ProjectilePooling_1;
    ProjectilePooling = ProjectilePooling_1 = __decorate([
        ccclass
    ], ProjectilePooling);
    return ProjectilePooling;
}(cc.Component));
exports.default = ProjectilePooling;

cc._RF.pop();