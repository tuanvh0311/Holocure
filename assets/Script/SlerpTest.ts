const { ccclass, property } = cc._decorator;

@ccclass
export default class SlerpTest extends cc.Component {
  // Hàm tính toán SLERP giữa hai góc (radian)
  slerp(startAngle, targetAngle, t) {
    // Chuyển đổi góc về dạng số âm và dương
    function normalizeAngle(angle) {
      while (angle > Math.PI) angle -= 2 * Math.PI;
      while (angle < -Math.PI) angle += 2 * Math.PI;
      return angle;
    }

    startAngle = normalizeAngle(startAngle);
    targetAngle = normalizeAngle(targetAngle);

    // Tính khoảng cách giữa hai góc
    const angleDistance = targetAngle - startAngle;

    // Xử lý việc đi ngược chiều kim đồng hồ
    if (Math.abs(angleDistance) > Math.PI) {
      if (angleDistance > 0) {
        targetAngle -= 2 * Math.PI;
      } else {
        targetAngle += 2 * Math.PI;
      }
    }

    // Tính giá trị góc mới sử dụng SLERP
    const resultAngle = startAngle + t * (targetAngle - startAngle);

    // Chuyển đổi kết quả về dạng số âm và dương
    return normalizeAngle(resultAngle);
  }

  // Sử dụng hàm slerp để lấy góc mới dựa trên thời gian t
  startAngle = Math.PI / 4; // Góc ban đầu (radian)
  targetAngle = (Math.PI * 4) / 4; // Góc đích (radian)
  totalTime = 1.0; // Thời gian hoàn thành SLERP (giây)
  currentTime = 0.0; // Thời gian hiện tại (giây)

  // Update được gọi mỗi khung hình trong Cocos Creator
  update(dt) {
    this.currentTime += dt;

    if (this.currentTime >= this.totalTime) {
      this.currentTime = this.totalTime;
    }

    // Tính toán góc mới dựa trên SLERP
    const t = this.currentTime / this.totalTime;
    const newAngle = this.slerp(this.startAngle, this.targetAngle, t);

    // Áp dụng góc mới vào đối tượng (vd: nếu đối tượng là Sprite)
    this.node.angle = cc.misc.radiansToDegrees(newAngle);
  }
}
