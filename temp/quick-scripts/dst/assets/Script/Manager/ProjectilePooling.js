
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/ProjectilePooling.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxQcm9qZWN0aWxlUG9vbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXdDQztRQXRDQyxlQUFTLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLGVBQVMsR0FBZ0IsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsYUFBTyxHQUFnQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxrQkFBWSxHQUFnQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxlQUFTLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLG9CQUFjLEdBQXVCLElBQUksS0FBSyxFQUFlLENBQUM7O0lBaUNoRSxDQUFDOzBCQXhDb0IsaUJBQWlCO0lBUXBDLHdCQUF3QjtJQUN4Qix5Q0FBYSxHQUFiLFVBQWMsSUFBYTtRQUN6QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDRSxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFDRCxpQ0FBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLGtDQUFNLEdBQU4sVUFBTyxFQUFFLElBQUcsQ0FBQzs7SUF2Q00saUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F3Q3JDO0lBQUQsd0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzhDLEVBQUUsQ0FBQyxTQUFTLEdBd0MxRDtrQkF4Q29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdGlsZVBvb2xpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IFByb2plY3RpbGVQb29saW5nO1xuICBhcnJvd1Bvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gIG1vbGx5UG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgYXhlUG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgc2h1cmlrZW5Qb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICB0cmFpbFBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gIHByb2plY3RpbGVQb29sOiBBcnJheTxjYy5Ob2RlUG9vbD4gPSBuZXcgQXJyYXk8Y2MuTm9kZVBvb2w+KCk7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICBwdXRCYWNrVG9Qb29sKG5vZGU6IGNjLk5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBzd2l0Y2ggKG5vZGUubmFtZSkge1xuICAgICAgY2FzZSBcIkFycm93XCI6XG4gICAgICAgIHRoaXMuYXJyb3dQb29sLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTW9sbHlcIjpcbiAgICAgICAgdGhpcy5tb2xseVBvb2wucHV0KG5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBeGVcIjpcbiAgICAgICAgdGhpcy5heGVQb29sLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiU2h1cmlrZW5cIjpcbiAgICAgICAgdGhpcy5zaHVyaWtlblBvb2wucHV0KG5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJUcmFpbFwiOlxuICAgICAgICB0aGlzLnRyYWlsUG9vbC5wdXQobm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UgPSB0aGlzO1xuICAgIGxldCBpbml0Q291bnQgPSAxMDAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdENvdW50OyArK2kpIHtcbiAgICAgIGxldCB0cmFpbCA9IG5ldyBjYy5Ob2RlKFwiVHJhaWxcIik7XG4gICAgICB0aGlzLnRyYWlsUG9vbC5wdXQodHJhaWwpO1xuICAgIH1cbiAgfVxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7fVxufVxuIl19