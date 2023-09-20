
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/KnightyMilk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa112anKcxAa4uQvZAEV8vv', 'KnightyMilk');
// Script/Item/KnightyMilk.ts

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
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var KnightyMilk = /** @class */ (function (_super) {
    __extends(KnightyMilk, _super);
    function KnightyMilk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sizeIncreaseRate = 10;
        _this.pickUpRangeIncreaseRate = 30;
        _this.currentLevel = _this.level;
        return _this;
        // update (dt) {}
    }
    KnightyMilk_1 = KnightyMilk;
    KnightyMilk.prototype.onLoad = function () {
        KnightyMilk_1.instance = this;
        this.description =
            "Increases attack size of weapons by 5%. Also increase Pick Up Range by 30%.";
        this.itemOnLoad();
        this.itemOnLoad();
    };
    KnightyMilk.prototype.start = function () { };
    var KnightyMilk_1;
    __decorate([
        property(cc.Float)
    ], KnightyMilk.prototype, "sizeIncreaseRate", void 0);
    __decorate([
        property(cc.Float)
    ], KnightyMilk.prototype, "pickUpRangeIncreaseRate", void 0);
    KnightyMilk = KnightyMilk_1 = __decorate([
        ccclass
    ], KnightyMilk);
    return KnightyMilk;
}(Item_1.default));
exports.default = KnightyMilk;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxLbmlnaHR5TWlsay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQUk7SUFBN0M7UUFBQSxxRUFtQkM7UUFoQkMsc0JBQWdCLEdBQVcsRUFBRSxDQUFDO1FBRTlCLDZCQUF1QixHQUFXLEVBQUUsQ0FBQztRQUNyQyxrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O1FBWTFCLGlCQUFpQjtJQUNuQixDQUFDO29CQW5Cb0IsV0FBVztJQVE5Qiw0QkFBTSxHQUFOO1FBQ0UsYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVc7WUFDZCw2RUFBNkUsQ0FBQztRQUNoRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCwyQkFBSyxHQUFMLGNBQVMsQ0FBQzs7SUFiVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0VBQ2tCO0lBTGxCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtQi9CO0lBQUQsa0JBQUM7Q0FuQkQsQUFtQkMsQ0FuQndDLGNBQUksR0FtQjVDO2tCQW5Cb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHR5TWlsayBleHRlbmRzIEl0ZW0ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEtuaWdodHlNaWxrO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHNpemVJbmNyZWFzZVJhdGU6IG51bWJlciA9IDEwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHBpY2tVcFJhbmdlSW5jcmVhc2VSYXRlOiBudW1iZXIgPSAzMDtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcblxuICBvbkxvYWQoKSB7XG4gICAgS25pZ2h0eU1pbGsuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgXCJJbmNyZWFzZXMgYXR0YWNrIHNpemUgb2Ygd2VhcG9ucyBieSA1JS4gQWxzbyBpbmNyZWFzZSBQaWNrIFVwIFJhbmdlIGJ5IDMwJS5cIjtcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19