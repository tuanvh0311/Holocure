
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/DestroyableObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbc57hCFpRHALPri/eMuEs/', 'DestroyableObject');
// Script/Other Object/DestroyableObject.ts

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
var DestroyableObject = /** @class */ (function (_super) {
    __extends(DestroyableObject, _super);
    function DestroyableObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.food = null;
        _this.foodDropChance = 20;
        return _this;
    }
    DestroyableObject.prototype.takeDamage = function () {
        this.node.destroy();
    };
    DestroyableObject.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 2) {
            this.takeDamage();
        }
    };
    DestroyableObject.prototype.onDestroy = function () {
        if (Utils_1.default.random(0, 100) < this.foodDropChance) {
            var food = cc.instantiate(this.food);
            food.position = this.node.position;
        }
    };
    DestroyableObject.prototype.start = function () { };
    DestroyableObject.prototype.update = function (dt) { };
    __decorate([
        property(cc.Prefab)
    ], DestroyableObject.prototype, "food", void 0);
    __decorate([
        property(cc.Float)
    ], DestroyableObject.prototype, "foodDropChance", void 0);
    DestroyableObject = __decorate([
        ccclass
    ], DestroyableObject);
    return DestroyableObject;
}(cc.Component));
exports.default = DestroyableObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXERlc3Ryb3lhYmxlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXlCQztRQXZCQyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLG9CQUFjLEdBQUcsRUFBRSxDQUFDOztJQXFCdEIsQ0FBQztJQW5CQyxzQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsNENBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBQ1MscUNBQVMsR0FBbkI7UUFDRSxJQUFJLGVBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDOUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxpQ0FBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLGtDQUFNLEdBQU4sVUFBTyxFQUFFLElBQUcsQ0FBQztJQXRCYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkRBQ0M7SUFKRCxpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXlCckM7SUFBRCx3QkFBQztDQXpCRCxBQXlCQyxDQXpCOEMsRUFBRSxDQUFDLFNBQVMsR0F5QjFEO2tCQXpCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzdHJveWFibGVPYmplY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBmb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGZvb2REcm9wQ2hhbmNlID0gMjA7XG5cbiAgdGFrZURhbWFnZSgpIHtcbiAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICB9XG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMikge1xuICAgICAgdGhpcy50YWtlRGFtYWdlKCk7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKFV0aWxzLnJhbmRvbSgwLCAxMDApIDwgdGhpcy5mb29kRHJvcENoYW5jZSkge1xuICAgICAgdmFyIGZvb2QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZvb2QpO1xuXG4gICAgICBmb29kLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHt9XG59XG4iXX0=