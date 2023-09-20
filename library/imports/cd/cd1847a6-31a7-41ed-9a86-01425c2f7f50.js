"use strict";
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