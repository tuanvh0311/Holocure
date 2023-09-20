import PlayerController from "../Player/PlayerController";
import GameController from "./GameController";
import Utils from "./Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Movement extends cc.Component {
  static instance: Movement;
  @property(cc.Node)
  player: cc.Node = null;
  @property(cc.Node)
  directionArrow: cc.Node = null;

  touchAnchor: cc.Vec2;
  moveVec: cc.Vec2;
  directionVector: cc.Vec2;
  directionAngle: number = 0;
  isFlip = false;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Movement.instance = this;
    this.moveVec = cc.Vec2.ZERO;
    this.directionVector = cc.v2(100, 0);

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);

    this.node.on(
      cc.Node.EventType.TOUCH_CANCEL,
      this.onTouchCancel,
      this,
      true
    );
    // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this, true);
  }
  // onMouseMove(event) {
  //   var mousPos = event.getLocation();
  //   console.log(mousPos);
  // }
  onTouchStart(event) {

    this.touchAnchor = event.touch.getLocation();
  }
  onTouchMove(event) {
    if (Utils.isPause) return;
    PlayerController.instance.isMoving = true;
    this.moveVec = event.touch.getLocation();
    this.moveVec.x -= this.touchAnchor.x;
    this.moveVec.y -= this.touchAnchor.y;
    this.directionVector = this.moveVec.normalize();
  }
  onTouchEnd(event) {
    PlayerController.instance.isMoving = false;
    this.moveVec = cc.Vec2.ZERO;
  }
  onTouchCancel(event) {
    PlayerController.instance.isMoving = false;
    this.moveVec = cc.Vec2.ZERO;
  }

  start() {}
  movePlayer(dt: number) {
    if (this.moveVec.x < 0 && !this.isFlip) {
      cc.tween(this.player.getChildByName("Player")).flipX().start();
      this.isFlip = true;
    }
    if (this.moveVec.x > 0 && this.isFlip) {
      cc.tween(this.player.getChildByName("Player")).flipX().start();
      this.isFlip = false;
    }
    this.player.x +=
      this.moveVec.normalize().x * PlayerController.instance.speed * 175 * dt;
    this.player.y +=
      this.moveVec.normalize().y * PlayerController.instance.speed * 175 * dt;
    this.node.position = this.player.position;
  }
  moveDirectionArrow() {
    this.directionAngle =
      Math.atan2(this.directionVector.y, this.directionVector.x) *
      (180 / Math.PI);
    this.directionArrow.angle = this.directionAngle;
    this.directionArrow.position = cc.v3(
      this.directionVector.normalize().x * 100,
      this.directionVector.normalize().y * 100
    );
  }

  update(dt) {
    if (Utils.isPause) return;
    if (GameController.instance.isGameOver) return;
    this.movePlayer(dt);
    this.moveDirectionArrow();
  }
}
