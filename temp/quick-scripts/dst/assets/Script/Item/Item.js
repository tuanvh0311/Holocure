
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75857hubXJPr5RQkanJ9FBc', 'Item');
// Script/Item/Item.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 0;
        _this.maxLevel = 5;
        _this.isEquiped = false;
        _this.isLockLevel = false;
        _this.description = null;
        _this.displayIcon = null;
        _this.dt = 0;
        return _this;
    }
    Item.prototype.onLevelMax = function () {
        if (this.level >= this.maxLevel) {
            this.isLockLevel = true;
        }
    };
    // onLoad () {}
    Item.prototype.itemOnLoad = function () {
        this.overallStats = OverallStats_1.default.instance;
        GameController_1.default.instance.addItem(this);
        this.name = this.node.name;
    };
    Item.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        this.level += 1;
        this.onLevelMax();
        console.log(this.level);
    };
    Item.prototype.start = function () { };
    Item.prototype.update = function (dt) { };
    __decorate([
        property(cc.Float)
    ], Item.prototype, "maxLevel", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Item.prototype, "displayIcon", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(cc.Component));
exports.default = Item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErQkM7UUE5QkMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLFFBQUUsR0FBVyxDQUFDLENBQUM7O0lBcUJqQixDQUFDO0lBbkJDLHlCQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDRCxlQUFlO0lBQ2YseUJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUM7UUFDMUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNELHdCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG9CQUFLLEdBQUwsY0FBUyxDQUFDO0lBQ1YscUJBQU0sR0FBTixVQUFPLEVBQUUsSUFBRyxDQUFDO0lBM0JiO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0U7SUFLckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDVTtJQVJoQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBK0J4QjtJQUFELFdBQUM7Q0EvQkQsQUErQkMsQ0EvQmlDLEVBQUUsQ0FBQyxTQUFTLEdBK0I3QztrQkEvQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgT3ZlcmFsbFN0YXRzIGZyb20gXCIuLi9QbGF5ZXIvT3ZlcmFsbFN0YXRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgbGV2ZWw6IG51bWJlciA9IDA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgbWF4TGV2ZWw6IG51bWJlciA9IDU7XG4gIGlzRXF1aXBlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0xvY2tMZXZlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBkaXNwbGF5SWNvbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICBvdmVyYWxsU3RhdHM6IE92ZXJhbGxTdGF0cztcbiAgZHQ6IG51bWJlciA9IDA7XG4gIG5hbWU6IHN0cmluZztcbiAgb25MZXZlbE1heCgpIHtcbiAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLm1heExldmVsKSB7XG4gICAgICB0aGlzLmlzTG9ja0xldmVsID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgLy8gb25Mb2FkICgpIHt9XG4gIGl0ZW1PbkxvYWQoKSB7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2U7XG4gICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkSXRlbSh0aGlzKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5sZXZlbCk7XG4gIH1cbiAgc3RhcnQoKSB7fVxuICB1cGRhdGUoZHQpIHt9XG59XG4iXX0=