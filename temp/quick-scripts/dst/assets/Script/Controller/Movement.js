
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Movement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd184emMadB7ZqGAUJcL39Q', 'Movement');
// Script/Controller/Movement.ts

"use strict";
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
var PlayerController_1 = require("../Player/PlayerController");
var GameController_1 = require("./GameController");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Movement = /** @class */ (function (_super) {
    __extends(Movement, _super);
    function Movement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.directionArrow = null;
        _this.directionAngle = 0;
        _this.isFlip = false;
        return _this;
    }
    Movement_1 = Movement;
    // LIFE-CYCLE CALLBACKS:
    Movement.prototype.onLoad = function () {
        Movement_1.instance = this;
        this.moveVec = cc.Vec2.ZERO;
        this.directionVector = cc.v2(100, 0);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, true);
        // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this, true);
    };
    // onMouseMove(event) {
    //   var mousPos = event.getLocation();
    //   console.log(mousPos);
    // }
    Movement.prototype.onTouchStart = function (event) {
        this.touchAnchor = event.touch.getLocation();
    };
    Movement.prototype.onTouchMove = function (event) {
        if (Utils_1.default.isPause)
            return;
        PlayerController_1.default.instance.isMoving = true;
        this.moveVec = event.touch.getLocation();
        this.moveVec.x -= this.touchAnchor.x;
        this.moveVec.y -= this.touchAnchor.y;
        this.directionVector = this.moveVec.normalize();
    };
    Movement.prototype.onTouchEnd = function (event) {
        PlayerController_1.default.instance.isMoving = false;
        this.moveVec = cc.Vec2.ZERO;
    };
    Movement.prototype.onTouchCancel = function (event) {
        PlayerController_1.default.instance.isMoving = false;
        this.moveVec = cc.Vec2.ZERO;
    };
    Movement.prototype.start = function () { };
    Movement.prototype.movePlayer = function (dt) {
        if (this.moveVec.x < 0 && !this.isFlip) {
            cc.tween(this.player.getChildByName("Player")).flipX().start();
            this.isFlip = true;
        }
        if (this.moveVec.x > 0 && this.isFlip) {
            cc.tween(this.player.getChildByName("Player")).flipX().start();
            this.isFlip = false;
        }
        this.player.x +=
            this.moveVec.normalize().x * PlayerController_1.default.instance.speed * 175 * dt;
        this.player.y +=
            this.moveVec.normalize().y * PlayerController_1.default.instance.speed * 175 * dt;
        this.node.position = this.player.position;
    };
    Movement.prototype.moveDirectionArrow = function () {
        this.directionAngle =
            Math.atan2(this.directionVector.y, this.directionVector.x) *
                (180 / Math.PI);
        this.directionArrow.angle = this.directionAngle;
        this.directionArrow.position = cc.v3(this.directionVector.normalize().x * 100, this.directionVector.normalize().y * 100);
    };
    Movement.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        if (GameController_1.default.instance.isGameOver)
            return;
        this.movePlayer(dt);
        this.moveDirectionArrow();
    };
    var Movement_1;
    __decorate([
        property(cc.Node)
    ], Movement.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], Movement.prototype, "directionArrow", void 0);
    Movement = Movement_1 = __decorate([
        ccclass
    ], Movement);
    return Movement;
}(cc.Component));
exports.default = Movement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNb3ZlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsbURBQThDO0FBQzlDLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlGQztRQXRGQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBSy9CLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBOEVqQixDQUFDO2lCQXpGb0IsUUFBUTtJQVkzQix3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNFLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFD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ckNvbnRyb2xsZXIgZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZW1lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IE1vdmVtZW50O1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGRpcmVjdGlvbkFycm93OiBjYy5Ob2RlID0gbnVsbDtcblxuICB0b3VjaEFuY2hvcjogY2MuVmVjMjtcbiAgbW92ZVZlYzogY2MuVmVjMjtcbiAgZGlyZWN0aW9uVmVjdG9yOiBjYy5WZWMyO1xuICBkaXJlY3Rpb25BbmdsZTogbnVtYmVyID0gMDtcbiAgaXNGbGlwID0gZmFsc2U7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBNb3ZlbWVudC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5tb3ZlVmVjID0gY2MuVmVjMi5aRVJPO1xuICAgIHRoaXMuZGlyZWN0aW9uVmVjdG9yID0gY2MudjIoMTAwLCAwKTtcblxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMsIHRydWUpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzLCB0cnVlKTtcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMsIHRydWUpO1xuXG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLFxuICAgICAgdGhpcy5vblRvdWNoQ2FuY2VsLFxuICAgICAgdGhpcyxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLCB0aGlzLm9uTW91c2VNb3ZlLCB0aGlzLCB0cnVlKTtcbiAgfVxuICAvLyBvbk1vdXNlTW92ZShldmVudCkge1xuICAvLyAgIHZhciBtb3VzUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgLy8gICBjb25zb2xlLmxvZyhtb3VzUG9zKTtcbiAgLy8gfVxuICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcblxuICAgIHRoaXMudG91Y2hBbmNob3IgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICB9XG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLmlzTW92aW5nID0gdHJ1ZTtcbiAgICB0aGlzLm1vdmVWZWMgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMubW92ZVZlYy54IC09IHRoaXMudG91Y2hBbmNob3IueDtcbiAgICB0aGlzLm1vdmVWZWMueSAtPSB0aGlzLnRvdWNoQW5jaG9yLnk7XG4gICAgdGhpcy5kaXJlY3Rpb25WZWN0b3IgPSB0aGlzLm1vdmVWZWMubm9ybWFsaXplKCk7XG4gIH1cbiAgb25Ub3VjaEVuZChldmVudCkge1xuICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVWZWMgPSBjYy5WZWMyLlpFUk87XG4gIH1cbiAgb25Ub3VjaENhbmNlbChldmVudCkge1xuICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVWZWMgPSBjYy5WZWMyLlpFUk87XG4gIH1cblxuICBzdGFydCgpIHt9XG4gIG1vdmVQbGF5ZXIoZHQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vdmVWZWMueCA8IDAgJiYgIXRoaXMuaXNGbGlwKSB7XG4gICAgICBjYy50d2Vlbih0aGlzLnBsYXllci5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKSkuZmxpcFgoKS5zdGFydCgpO1xuICAgICAgdGhpcy5pc0ZsaXAgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb3ZlVmVjLnggPiAwICYmIHRoaXMuaXNGbGlwKSB7XG4gICAgICBjYy50d2Vlbih0aGlzLnBsYXllci5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKSkuZmxpcFgoKS5zdGFydCgpO1xuICAgICAgdGhpcy5pc0ZsaXAgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5wbGF5ZXIueCArPVxuICAgICAgdGhpcy5tb3ZlVmVjLm5vcm1hbGl6ZSgpLnggKiBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLnNwZWVkICogMTc1ICogZHQ7XG4gICAgdGhpcy5wbGF5ZXIueSArPVxuICAgICAgdGhpcy5tb3ZlVmVjLm5vcm1hbGl6ZSgpLnkgKiBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLnNwZWVkICogMTc1ICogZHQ7XG4gICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5wbGF5ZXIucG9zaXRpb247XG4gIH1cbiAgbW92ZURpcmVjdGlvbkFycm93KCkge1xuICAgIHRoaXMuZGlyZWN0aW9uQW5nbGUgPVxuICAgICAgTWF0aC5hdGFuMih0aGlzLmRpcmVjdGlvblZlY3Rvci55LCB0aGlzLmRpcmVjdGlvblZlY3Rvci54KSAqXG4gICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgdGhpcy5kaXJlY3Rpb25BcnJvdy5hbmdsZSA9IHRoaXMuZGlyZWN0aW9uQW5nbGU7XG4gICAgdGhpcy5kaXJlY3Rpb25BcnJvdy5wb3NpdGlvbiA9IGNjLnYzKFxuICAgICAgdGhpcy5kaXJlY3Rpb25WZWN0b3Iubm9ybWFsaXplKCkueCAqIDEwMCxcbiAgICAgIHRoaXMuZGlyZWN0aW9uVmVjdG9yLm5vcm1hbGl6ZSgpLnkgKiAxMDBcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICAgIHRoaXMubW92ZVBsYXllcihkdCk7XG4gICAgdGhpcy5tb3ZlRGlyZWN0aW9uQXJyb3coKTtcbiAgfVxufVxuIl19