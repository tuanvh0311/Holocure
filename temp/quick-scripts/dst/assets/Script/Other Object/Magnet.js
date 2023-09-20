
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Magnet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f76c04uEK9BHq4nUwnmWWvw', 'Magnet');
// Script/Other Object/Magnet.ts

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
var Utils_1 = require("../Controller/Utils");
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Magnet = /** @class */ (function (_super) {
    __extends(Magnet, _super);
    function Magnet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getExpSound = null;
        return _this;
    }
    Magnet.prototype.onLoad = function () {
        this.node.zIndex = 10002;
        ObjectPooling_1.default.instance.addToMagnetList(this.node);
    };
    Magnet.prototype.start = function () { };
    Magnet.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.getExpSound, false, 1);
            this.node.destroy();
            ObjectPooling_1.default.instance.onMagnetPickup();
        }
    };
    Magnet.prototype.update = function (dt) { };
    __decorate([
        property(cc.AudioClip)
    ], Magnet.prototype, "getExpSound", void 0);
    Magnet = __decorate([
        ccclass
    ], Magnet);
    return Magnet;
}(cc.Component));
exports.default = Magnet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXE1hZ25ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFDeEMsMERBQXFEO0FBRy9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBa0JDO1FBaEJDLGlCQUFXLEdBQWlCLElBQUksQ0FBQzs7SUFnQm5DLENBQUM7SUFmQyx1QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHVCQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHNCQUFLLEdBQUwsY0FBUyxDQUFDO0lBQ1YsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTTtnQkFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQix1QkFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFDRCx1QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFHLENBQUM7SUFmYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNVO0lBRmQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtCMUI7SUFBRCxhQUFDO0NBbEJELEFBa0JDLENBbEJtQyxFQUFFLENBQUMsU0FBUyxHQWtCL0M7a0JBbEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IG9iamVjdFBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvT2JqZWN0UG9vbGluZ1wiO1xuaW1wb3J0IFBpY2t1cCBmcm9tIFwiLi9QaWNrdXBcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hZ25ldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGdldEV4cFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDEwMDAyO1xuICAgIG9iamVjdFBvb2xpbmcuaW5zdGFuY2UuYWRkVG9NYWduZXRMaXN0KHRoaXMubm9kZSk7XG4gIH1cblxuICBzdGFydCgpIHt9XG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMCkge1xuICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nZXRFeHBTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgIG9iamVjdFBvb2xpbmcuaW5zdGFuY2Uub25NYWduZXRQaWNrdXAoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKGR0KSB7fVxufVxuIl19