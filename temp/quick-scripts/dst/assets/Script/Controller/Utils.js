
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9897yMpl9NvbK8XCL3SHQJ', 'Utils');
// Script/Controller/Utils.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utils = /** @class */ (function (_super) {
    __extends(Utils, _super);
    function Utils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Utils.worldSpaceToLocal = function (worldSpace, local) { };
    Utils.randomFloor = function (minInclusive, maxInclusive) {
        return (Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) +
            minInclusive);
    };
    Utils.random = function (minInclusive, maxInclusive) {
        return Math.random() * (maxInclusive - minInclusive) + minInclusive;
    };
    Utils.getLocal = function (itemName) {
        return cc.sys.localStorage.getItem("Holo" + itemName);
    };
    Utils.setLocal = function (itemName, value) {
        return cc.sys.localStorage.setItem("Holo" + itemName, value);
    };
    Utils.wait = function (duration) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, duration * 1000);
        });
    };
    Utils.setCharacter = function (name) {
        this.currentCharacter = name;
    };
    Utils.setCharacterLevel = function (level) {
        this.characterLevel = level;
    };
    Utils.getCharacterByName = function () {
        return this.currentCharacter;
    };
    Utils.getCharacterLevel = function () {
        return this.characterLevel;
    };
    Utils.currentCharacter = null;
    Utils.characterLevel = null;
    Utils.isPause = false;
    return Utils;
}(cc.Component));
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFtQyx5QkFBWTtJQUEvQzs7SUE2Q0EsQ0FBQztJQXpDZSx1QkFBaUIsR0FBL0IsVUFBZ0MsVUFBbUIsRUFBRSxLQUFXLElBQUcsQ0FBQztJQUV0RCxpQkFBVyxHQUF6QixVQUNFLFlBQW9CLEVBQ3BCLFlBQW9CO1FBRXBCLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0QsWUFBWSxDQUNiLENBQUM7SUFDSixDQUFDO0lBQ2EsWUFBTSxHQUFwQixVQUFxQixZQUFvQixFQUFFLFlBQW9CO1FBQzdELE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxHQUFHLFlBQVksQ0FBQztJQUN0RSxDQUFDO0lBRWEsY0FBUSxHQUF0QixVQUF1QixRQUFnQjtRQUNyQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVhLGNBQVEsR0FBdEIsVUFBdUIsUUFBZ0IsRUFBRSxLQUFVO1FBQ2pELE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNhLFVBQUksR0FBbEIsVUFBbUIsUUFBZ0I7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU87WUFDL0IsVUFBVSxDQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDYSxrQkFBWSxHQUExQixVQUEyQixJQUFZO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUNhLHVCQUFpQixHQUEvQixVQUFnQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDYSx3QkFBa0IsR0FBaEM7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ2EsdUJBQWlCLEdBQS9CO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUEzQ2Esc0JBQWdCLEdBQVcsSUFBSSxDQUFDO0lBQ2hDLG9CQUFjLEdBQVcsSUFBSSxDQUFDO0lBQzlCLGFBQU8sR0FBWSxLQUFLLENBQUM7SUEwQ3pDLFlBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q2tDLEVBQUUsQ0FBQyxTQUFTLEdBNkM5QztrQkE3Q29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHB1YmxpYyBzdGF0aWMgY3VycmVudENoYXJhY3RlcjogU3RyaW5nID0gbnVsbDtcbiAgcHVibGljIHN0YXRpYyBjaGFyYWN0ZXJMZXZlbDogbnVtYmVyID0gbnVsbDtcbiAgcHVibGljIHN0YXRpYyBpc1BhdXNlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzdGF0aWMgd29ybGRTcGFjZVRvTG9jYWwod29ybGRTcGFjZTogY2MuVmVjMiwgbG9jYWw6IE5vZGUpIHt9XG5cbiAgcHVibGljIHN0YXRpYyByYW5kb21GbG9vcihcbiAgICBtaW5JbmNsdXNpdmU6IG51bWJlcixcbiAgICBtYXhJbmNsdXNpdmU6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4SW5jbHVzaXZlIC0gbWluSW5jbHVzaXZlICsgMSkpICtcbiAgICAgIG1pbkluY2x1c2l2ZVxuICAgICk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyByYW5kb20obWluSW5jbHVzaXZlOiBudW1iZXIsIG1heEluY2x1c2l2ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXhJbmNsdXNpdmUgLSBtaW5JbmNsdXNpdmUpICsgbWluSW5jbHVzaXZlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRMb2NhbChpdGVtTmFtZTogU3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSG9sb1wiICsgaXRlbU5hbWUpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXRMb2NhbChpdGVtTmFtZTogU3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkhvbG9cIiArIGl0ZW1OYW1lLCB2YWx1ZSk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyB3YWl0KGR1cmF0aW9uOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCBkdXJhdGlvbiAqIDEwMDApO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgc2V0Q2hhcmFjdGVyKG5hbWU6IFN0cmluZykge1xuICAgIHRoaXMuY3VycmVudENoYXJhY3RlciA9IG5hbWU7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBzZXRDaGFyYWN0ZXJMZXZlbChsZXZlbDogbnVtYmVyKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXJMZXZlbCA9IGxldmVsO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q2hhcmFjdGVyQnlOYW1lKCk6IFN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENoYXJhY3RlcjtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGdldENoYXJhY3RlckxldmVsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyTGV2ZWw7XG4gIH1cbn1cbiJdfQ==