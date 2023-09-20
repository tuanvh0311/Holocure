
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SlerpTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTbGVycFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFxREM7UUFyQkMsd0RBQXdEO1FBQ3hELGdCQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7UUFDakQsaUJBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3JELGVBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxvQ0FBb0M7UUFDckQsaUJBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyw0QkFBNEI7O0lBaUJqRCxDQUFDO0lBcERDLDRDQUE0QztJQUM1Qyx5QkFBSyxHQUFMLFVBQU0sVUFBVSxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQzlCLHdDQUF3QztRQUN4QyxTQUFTLGNBQWMsQ0FBQyxLQUFLO1lBQzNCLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM3QyxPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCxVQUFVLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLFdBQVcsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUMsZ0NBQWdDO1FBQ2hDLElBQU0sYUFBYSxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFL0Msd0NBQXdDO1FBQ3hDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksYUFBYSxHQUFHLENBQUMsRUFBRTtnQkFDckIsV0FBVyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLFdBQVcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM1QjtTQUNGO1FBRUQscUNBQXFDO1FBQ3JDLElBQU0sV0FBVyxHQUFHLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFaEUsNENBQTRDO1FBQzVDLE9BQU8sY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFRRCxxREFBcUQ7SUFDckQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbkM7UUFFRCxtQ0FBbUM7UUFDbkMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxFLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFwRGtCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxRDdCO0lBQUQsZ0JBQUM7Q0FyREQsQUFxREMsQ0FyRHNDLEVBQUUsQ0FBQyxTQUFTLEdBcURsRDtrQkFyRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xlcnBUZXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgLy8gSMOgbSB0w61uaCB0b8OhbiBTTEVSUCBnaeG7r2EgaGFpIGfDs2MgKHJhZGlhbilcbiAgc2xlcnAoc3RhcnRBbmdsZSwgdGFyZ2V0QW5nbGUsIHQpIHtcbiAgICAvLyBDaHV54buDbiDEkeG7lWkgZ8OzYyB24buBIGThuqFuZyBz4buRIMOibSB2w6AgZMawxqFuZ1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKSB7XG4gICAgICB3aGlsZSAoYW5nbGUgPiBNYXRoLlBJKSBhbmdsZSAtPSAyICogTWF0aC5QSTtcbiAgICAgIHdoaWxlIChhbmdsZSA8IC1NYXRoLlBJKSBhbmdsZSArPSAyICogTWF0aC5QSTtcbiAgICAgIHJldHVybiBhbmdsZTtcbiAgICB9XG5cbiAgICBzdGFydEFuZ2xlID0gbm9ybWFsaXplQW5nbGUoc3RhcnRBbmdsZSk7XG4gICAgdGFyZ2V0QW5nbGUgPSBub3JtYWxpemVBbmdsZSh0YXJnZXRBbmdsZSk7XG5cbiAgICAvLyBUw61uaCBraG/huqNuZyBjw6FjaCBnaeG7r2EgaGFpIGfDs2NcbiAgICBjb25zdCBhbmdsZURpc3RhbmNlID0gdGFyZ2V0QW5nbGUgLSBzdGFydEFuZ2xlO1xuXG4gICAgLy8gWOG7rSBsw70gdmnhu4djIMSRaSBuZ8aw4bujYyBjaGnhu4F1IGtpbSDEkeG7k25nIGjhu5NcbiAgICBpZiAoTWF0aC5hYnMoYW5nbGVEaXN0YW5jZSkgPiBNYXRoLlBJKSB7XG4gICAgICBpZiAoYW5nbGVEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgdGFyZ2V0QW5nbGUgLT0gMiAqIE1hdGguUEk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRBbmdsZSArPSAyICogTWF0aC5QSTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUw61uaCBnacOhIHRy4buLIGfDs2MgbeG7m2kgc+G7rSBk4bulbmcgU0xFUlBcbiAgICBjb25zdCByZXN1bHRBbmdsZSA9IHN0YXJ0QW5nbGUgKyB0ICogKHRhcmdldEFuZ2xlIC0gc3RhcnRBbmdsZSk7XG5cbiAgICAvLyBDaHV54buDbiDEkeG7lWkga+G6v3QgcXXhuqMgduG7gSBk4bqhbmcgc+G7kSDDom0gdsOgIGTGsMahbmdcbiAgICByZXR1cm4gbm9ybWFsaXplQW5nbGUocmVzdWx0QW5nbGUpO1xuICB9XG5cbiAgLy8gU+G7rSBk4bulbmcgaMOgbSBzbGVycCDEkeG7gyBs4bqleSBnw7NjIG3hu5tpIGThu7FhIHRyw6puIHRo4budaSBnaWFuIHRcbiAgc3RhcnRBbmdsZSA9IE1hdGguUEkgLyA0OyAvLyBHw7NjIGJhbiDEkeG6p3UgKHJhZGlhbilcbiAgdGFyZ2V0QW5nbGUgPSAoTWF0aC5QSSAqIDQpIC8gNDsgLy8gR8OzYyDEkcOtY2ggKHJhZGlhbilcbiAgdG90YWxUaW1lID0gMS4wOyAvLyBUaOG7nWkgZ2lhbiBob8OgbiB0aMOgbmggU0xFUlAgKGdpw6J5KVxuICBjdXJyZW50VGltZSA9IDAuMDsgLy8gVGjhu51pIGdpYW4gaGnhu4duIHThuqFpIChnacOieSlcblxuICAvLyBVcGRhdGUgxJHGsOG7o2MgZ+G7jWkgbeG7l2kga2h1bmcgaMOsbmggdHJvbmcgQ29jb3MgQ3JlYXRvclxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGR0O1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPj0gdGhpcy50b3RhbFRpbWUpIHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLnRvdGFsVGltZTtcbiAgICB9XG5cbiAgICAvLyBUw61uaCB0b8OhbiBnw7NjIG3hu5tpIGThu7FhIHRyw6puIFNMRVJQXG4gICAgY29uc3QgdCA9IHRoaXMuY3VycmVudFRpbWUgLyB0aGlzLnRvdGFsVGltZTtcbiAgICBjb25zdCBuZXdBbmdsZSA9IHRoaXMuc2xlcnAodGhpcy5zdGFydEFuZ2xlLCB0aGlzLnRhcmdldEFuZ2xlLCB0KTtcblxuICAgIC8vIMOBcCBk4bulbmcgZ8OzYyBt4bubaSB2w6BvIMSR4buRaSB0xrDhu6NuZyAodmQ6IG7hur91IMSR4buRaSB0xrDhu6NuZyBsw6AgU3ByaXRlKVxuICAgIHRoaXMubm9kZS5hbmdsZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhuZXdBbmdsZSk7XG4gIH1cbn1cbiJdfQ==