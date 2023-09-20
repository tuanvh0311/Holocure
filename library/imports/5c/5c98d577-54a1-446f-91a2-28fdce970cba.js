"use strict";
cc._RF.push(module, '5c98dV3VKFEb5GiKP3Olwy6', 'SlerpTest');
// Script/SlerpTest.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlerpTest = /** @class */ (function (_super) {
    __extends(SlerpTest, _super);
    function SlerpTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Sử dụng hàm slerp để lấy góc mới dựa trên thời gian t
        _this.startAngle = Math.PI / 4; // Góc ban đầu (radian)
        _this.targetAngle = (Math.PI * 4) / 4; // Góc đích (radian)
        _this.totalTime = 1.0; // Thời gian hoàn thành SLERP (giây)
        _this.currentTime = 0.0; // Thời gian hiện tại (giây)
        return _this;
    }
    // Hàm tính toán SLERP giữa hai góc (radian)
    SlerpTest.prototype.slerp = function (startAngle, targetAngle, t) {
        // Chuyển đổi góc về dạng số âm và dương
        function normalizeAngle(angle) {
            while (angle > Math.PI)
                angle -= 2 * Math.PI;
            while (angle < -Math.PI)
                angle += 2 * Math.PI;
            return angle;
        }
        startAngle = normalizeAngle(startAngle);
        targetAngle = normalizeAngle(targetAngle);
        // Tính khoảng cách giữa hai góc
        var angleDistance = targetAngle - startAngle;
        // Xử lý việc đi ngược chiều kim đồng hồ
        if (Math.abs(angleDistance) > Math.PI) {
            if (angleDistance > 0) {
                targetAngle -= 2 * Math.PI;
            }
            else {
                targetAngle += 2 * Math.PI;
            }
        }
        // Tính giá trị góc mới sử dụng SLERP
        var resultAngle = startAngle + t * (targetAngle - startAngle);
        // Chuyển đổi kết quả về dạng số âm và dương
        return normalizeAngle(resultAngle);
    };
    // Update được gọi mỗi khung hình trong Cocos Creator
    SlerpTest.prototype.update = function (dt) {
        this.currentTime += dt;
        if (this.currentTime >= this.totalTime) {
            this.currentTime = this.totalTime;
        }
        // Tính toán góc mới dựa trên SLERP
        var t = this.currentTime / this.totalTime;
        var newAngle = this.slerp(this.startAngle, this.targetAngle, t);
        // Áp dụng góc mới vào đối tượng (vd: nếu đối tượng là Sprite)
        this.node.angle = cc.misc.radiansToDegrees(newAngle);
    };
    SlerpTest = __decorate([
        ccclass
    ], SlerpTest);
    return SlerpTest;
}(cc.Component));
exports.default = SlerpTest;

cc._RF.pop();