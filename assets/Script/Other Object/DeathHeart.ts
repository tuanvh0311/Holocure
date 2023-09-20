// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class DeathHeart extends cc.Component {
  @property(cc.Vec2)
  vec2: cc.Vec2 = cc.v2(1, 0);
  angle: number;
  onLoad() {}

  start() {}

  update(dt) {
    this.angle = Math.sqrt(
      this.vec2.x * this.vec2.x - this.vec2.y * this.vec2.y
    );
    let atan2 = Math.atan2(this.vec2.y, this.vec2.x);
    let velocity = cc.v2(
      this.vec2.x * 300 * dt * this.angle,
      this.vec2.y * 300 * dt * -this.angle
    );
    if (velocity.x == 0 && velocity.y == 0) this.node.destroy();
    this.node.x += velocity.x;
    this.node.y += velocity.y;
  }
}
