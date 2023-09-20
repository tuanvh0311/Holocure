const { ccclass, property } = cc._decorator;

export default class Utils extends cc.Component {
  public static currentCharacter: String = null;
  public static characterLevel: number = null;
  public static isPause: boolean = false;
  public static worldSpaceToLocal(worldSpace: cc.Vec2, local: Node) {}

  public static randomFloor(
    minInclusive: number,
    maxInclusive: number
  ): number {
    return (
      Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) +
      minInclusive
    );
  }
  public static random(minInclusive: number, maxInclusive: number): number {
    return Math.random() * (maxInclusive - minInclusive) + minInclusive;
  }

  public static getLocal(itemName: String): any {
    return cc.sys.localStorage.getItem("Holo" + itemName);
  }

  public static setLocal(itemName: String, value: any): void {
    return cc.sys.localStorage.setItem("Holo" + itemName, value);
  }
  public static wait(duration: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration * 1000);
    });
  }
  public static setCharacter(name: String) {
    this.currentCharacter = name;
  }
  public static setCharacterLevel(level: number) {
    this.characterLevel = level;
  }
  public static getCharacterByName(): String {
    return this.currentCharacter;
  }
  public static getCharacterLevel(): number {
    return this.characterLevel;
  }
}
