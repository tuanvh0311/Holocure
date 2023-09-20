// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class WorldScrolling extends cc.Component {
  static instance: WorldScrolling;
  @property(cc.Node)
  player: cc.Node = null;

  @property(cc.Integer)
  tileSize = 3849;

  @property(cc.Node)
  terrainTiles: cc.Node[] = [];

  playerTilePos: cc.Vec2;
  currentplayerTilePos: cc.Vec2;
  scrollDistance = this.tileSize * 3;
  changeDistance: number;
  onLoad() {
    WorldScrolling.instance = this;

    this.tileSize = this.tileSize / 2;
    this.changeDistance = this.tileSize * 3;
  }

  start() {}

  update(dt) {
    for (let i = 0; i < this.terrainTiles.length; i++) {
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
  }
}
