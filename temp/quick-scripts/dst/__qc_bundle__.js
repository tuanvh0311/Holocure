
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/CameraController');
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/MenuController');
require('./assets/Script/Controller/Movement');
require('./assets/Script/Controller/OptionGenerator');
require('./assets/Script/Controller/OptionTest');
require('./assets/Script/Controller/SlotController');
require('./assets/Script/Controller/UIController');
require('./assets/Script/Controller/Utils');
require('./assets/Script/Controller/WorldScrolling');
require('./assets/Script/Enemy/EnemyController');
require('./assets/Script/Enemy/EnemyManager');
require('./assets/Script/Item/BaneOfRegeneration');
require('./assets/Script/Item/BloodyTear');
require('./assets/Script/Item/Dumbbell');
require('./assets/Script/Item/EyePatch');
require('./assets/Script/Item/GrowthPill');
require('./assets/Script/Item/HastePotion');
require('./assets/Script/Item/Item');
require('./assets/Script/Item/KnightyMilk');
require('./assets/Script/Item/MightyStone');
require('./assets/Script/Item/Shield');
require('./assets/Script/Item/WisdomStone');
require('./assets/Script/Manager/Level');
require('./assets/Script/Manager/ObjectPooling');
require('./assets/Script/Manager/ProjectilePooling');
require('./assets/Script/Menu/BarslideEffect');
require('./assets/Script/Menu/Button');
require('./assets/Script/Menu/Sound');
require('./assets/Script/Other Object/Coin');
require('./assets/Script/Other Object/DeathHeart');
require('./assets/Script/Other Object/DestroyableObject');
require('./assets/Script/Other Object/Experience');
require('./assets/Script/Other Object/Food');
require('./assets/Script/Other Object/Magnet');
require('./assets/Script/Other Object/Pickup');
require('./assets/Script/Player/EnemyDetector');
require('./assets/Script/Player/HealthAndShield');
require('./assets/Script/Player/OverallStats');
require('./assets/Script/Player/PlayerController');
require('./assets/Script/SlerpTest');
require('./assets/Script/TerrainTile');
require('./assets/Script/Weapon/AxeThrower');
require('./assets/Script/Weapon/Bow');
require('./assets/Script/Weapon/Melee');
require('./assets/Script/Weapon/MollyThrower');
require('./assets/Script/Weapon/OrbitProjectile');
require('./assets/Script/Weapon/Projectile');
require('./assets/Script/Weapon/ShurikenThrower');
require('./assets/Script/Weapon/SpiderCooking');
require('./assets/Script/Weapon/SpiralProjectile');
require('./assets/Script/Weapon/StartWeapon');
require('./assets/Script/Weapon/Sword');
require('./assets/Script/Weapon/ThrowableProjectile');
require('./assets/Script/Weapon/Trident');
require('./assets/Script/Weapon/Weapon');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Melee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb6baJQKUhCko4rHk90SUfS', 'Melee');
// Script/Weapon/Melee.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Melee = /** @class */ (function (_super) {
    __extends(Melee, _super);
    function Melee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = 20;
        _this.weaponScaleX = 1;
        _this.collider = null;
        _this.weaponScaleY = 1;
        return _this;
        // update (dt) {}
    }
    Melee_1 = Melee;
    Melee.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).takeDamage(this.damage);
        }
    };
    Melee.prototype.set = function (BaseDamage, damagePercentage, weaponScalePercentage) {
        this.damage = BaseDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.updateStats();
    };
    Melee.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScaleX =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.weaponScaleY =
            Math.abs((this.weaponScalePercentage / 100) * this.baseScale) +
                Math.abs(this.baseScale);
        this.node.scaleX = this.weaponScaleX;
        this.node.scaleY = this.weaponScaleY;
    };
    // LIFE-CYCLE CALLBACKS:
    Melee.prototype.onLoad = function () {
        Melee_1.instance = this;
        this.node.zIndex = 2;
        this.collider = this.node.getComponent(cc.BoxCollider);
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScaleX;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
    };
    Melee.prototype.start = function () { };
    var Melee_1;
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "damage", void 0);
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "weaponScaleX", void 0);
    __decorate([
        property(cc.Float)
    ], Melee.prototype, "weaponScaleY", void 0);
    Melee = Melee_1 = __decorate([
        ccclass
    ], Melee);
    return Melee;
}(cc.Component));
exports.default = Melee;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXE1lbGVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDREQUF1RDtBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXVEQztRQXBEQyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBRyxDQUFDLENBQUM7O1FBOENqQixpQkFBaUI7SUFDbkIsQ0FBQztjQXZEb0IsS0FBSztJQWN4QixnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUNELG1CQUFHLEdBQUgsVUFDRSxVQUFrQixFQUNsQixnQkFBd0IsRUFDeEIscUJBQTZCO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU07WUFDVCxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEUsSUFBSSxDQUFDLFlBQVk7WUFDZixDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVk7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsd0JBQXdCO0lBRXhCLHNCQUFNLEdBQU47UUFDRSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFLLEdBQUwsY0FBUyxDQUFDOztJQWpEVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNQO0lBRVo7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDRjtJQUdqQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNGO0lBUkUsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXVEekI7SUFBRCxZQUFDO0NBdkRELEFBdURDLENBdkRrQyxFQUFFLENBQUMsU0FBUyxHQXVEOUM7a0JBdkRvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBFbmVteUNvbnRyb2xsZXIgZnJvbSBcIi4uL0VuZW15L0VuZW15Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVsZWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IE1lbGVlO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGRhbWFnZSA9IDIwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHdlYXBvblNjYWxlWCA9IDE7XG4gIGNvbGxpZGVyOiBjYy5Cb3hDb2xsaWRlciA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgd2VhcG9uU2NhbGVZID0gMTtcbiAgYmFzZURhbWFuZ2U6IG51bWJlcjtcbiAgYmFzZVNjYWxlOiBudW1iZXI7XG4gIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcjtcblxuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XG4gICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xuICAgIH1cbiAgfVxuICBzZXQoXG4gICAgQmFzZURhbWFnZTogbnVtYmVyLFxuICAgIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmRhbWFnZSA9IEJhc2VEYW1hZ2U7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlID0gZGFtYWdlUGVyY2VudGFnZTtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSA9IHdlYXBvblNjYWxlUGVyY2VudGFnZTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRzKCk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoKSB7XG4gICAgdGhpcy5kYW1hZ2UgPVxuICAgICAgKHRoaXMuZGFtYWdlUGVyY2VudGFnZSAvIDEwMCkgKiB0aGlzLmJhc2VEYW1hbmdlICsgdGhpcy5iYXNlRGFtYW5nZTtcbiAgICB0aGlzLndlYXBvblNjYWxlWCA9XG4gICAgICAodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUgKyB0aGlzLmJhc2VTY2FsZTtcbiAgICB0aGlzLndlYXBvblNjYWxlWSA9XG4gICAgICBNYXRoLmFicygodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUpICtcbiAgICAgIE1hdGguYWJzKHRoaXMuYmFzZVNjYWxlKTtcbiAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy53ZWFwb25TY2FsZVg7XG4gICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMud2VhcG9uU2NhbGVZO1xuICB9XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBNZWxlZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDI7XG4gICAgdGhpcy5jb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgIHRoaXMuYmFzZURhbWFuZ2UgPSB0aGlzLmRhbWFnZTtcbiAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMud2VhcG9uU2NhbGVYO1xuICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgPSAwO1xuICB9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Bow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '394a8cmyw1OyaFaWHS8D/+J', 'Bow');
// Script/Weapon/Bow.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var EnemyDetector_1 = require("../Player/EnemyDetector");
var Projectile_1 = require("./Projectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bow = /** @class */ (function (_super) {
    __extends(Bow, _super);
    function Bow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrow = null;
        _this.player = null;
        _this.parent = null;
        _this.shootSound = null;
        _this.hitLimit = 1;
        _this.currentLevel = _this.level;
        return _this;
    }
    Bow_1 = Bow;
    Bow.prototype.onLoad = function () {
        this.weaponOnLoad();
        Bow_1.instance = this;
        this.baseAS = this.attackSpeed;
        this.timer = 0;
        var initCount = 9;
        this.description = "Fires rapid tears at random targets.";
        for (var i = 0; i < initCount; ++i) {
            var arrow = cc.instantiate(this.arrow);
            arrow.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.arrowPool.put(arrow);
        }
    };
    Bow.prototype.start = function () { };
    Bow.prototype.spawnArrow = function (target) {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.shootSound, false, 1);
        var arrow = null;
        if (ProjectilePooling_1.default.instance.arrowPool.size() > 0) {
            arrow = ProjectilePooling_1.default.instance.arrowPool.get();
        }
        else {
            arrow = cc.instantiate(this.arrow);
        }
        arrow.opacity = 0;
        cc.tween(arrow).to(0.05, { opacity: 255 }).start();
        arrow.parent = this.parent;
        arrow
            .getComponent(Projectile_1.default)
            .set(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.hitLimit, target, this.player.position);
    };
    Bow.prototype.shootArrowAtEnemy = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            var target1 = EnemyDetector_1.default.instance.enemyList[0];
            this.spawnArrow(target1);
        }
    };
    Bow.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increare damage by 20%";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Reduce time between attacks by 20%";
                    this.updateStats(20, 0, 0, 0, 0);
                    break;
                case 3:
                    this.description = "Reduce time between attacks by 20%";
                    this.updateStats(0, 0, 20, 0, 0);
                    break;
                case 4:
                    this.description = "Increare damage by 30%";
                    this.updateStats(0, 0, 20, 0, 0);
                    break;
                case 5:
                    this.description = "Reduce time between attacks by 20%";
                    this.updateStats(30, 0, 0, 0, 0);
                    break;
                case 6:
                    this.description = "Increare damage by 30%";
                    this.updateStats(0, 0, 20, 0, 0);
                    break;
                case 7:
                    this.updateStats(30, 0, 0, 0, 0);
                    break;
                default:
                    break;
            }
        }
    };
    Bow.prototype.updateStats = function (damagePercentage, baseDamage, attackSpeedPercentage, weaponScalePercentage, hitLimitBonus) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.hitLimit += hitLimitBonus;
        this.onStatChange();
    };
    Bow.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.shootArrowAtEnemy();
    };
    var Bow_1;
    __decorate([
        property(cc.Prefab)
    ], Bow.prototype, "arrow", void 0);
    __decorate([
        property(cc.Node)
    ], Bow.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], Bow.prototype, "parent", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bow.prototype, "shootSound", void 0);
    Bow = Bow_1 = __decorate([
        ccclass
    ], Bow);
    return Bow;
}(Weapon_1.default));
exports.default = Bow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXEJvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLGtFQUE2RDtBQUM3RCx5REFBb0Q7QUFDcEQsMkNBQXNDO0FBQ3RDLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpQyx1QkFBTTtJQUF2QztRQUFBLHFFQXdIQztRQXJIQyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBNEc1QixDQUFDO1lBeEhvQixHQUFHO0lBYXRCLG9CQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsS0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsc0NBQXNDLENBQUM7UUFDMUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNsQyxJQUFJLEtBQUssR0FBRyxFQUFF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LHFCQUFxQixDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsb0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOztJQXBIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJDQUNTO0lBVGIsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXdIdkI7SUFBRCxVQUFDO0NBeEhELEFBd0hDLENBeEhnQyxnQkFBTSxHQXdIdEM7a0JBeEhvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcbmltcG9ydCBFbmVteURldGVjdG9yIGZyb20gXCIuLi9QbGF5ZXIvRW5lbXlEZXRlY3RvclwiO1xuaW1wb3J0IFByb2plY3RpbGUgZnJvbSBcIi4vUHJvamVjdGlsZVwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi9XZWFwb25cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdyBleHRlbmRzIFdlYXBvbiB7XG4gIHN0YXRpYyBpbnN0YW5jZTogQm93O1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBhcnJvdzogY2MuUHJlZmFiID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBzaG9vdFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICB0aW1lcjogbnVtYmVyO1xuICBoaXRMaW1pdDogbnVtYmVyID0gMTtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMud2VhcG9uT25Mb2FkKCk7XG4gICAgQm93Lmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmJhc2VBUyA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgdGhpcy50aW1lciA9IDA7XG4gICAgbGV0IGluaXRDb3VudCA9IDk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiRmlyZXMgcmFwaWQgdGVhcnMgYXQgcmFuZG9tIHRhcmdldHMuXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0Q291bnQ7ICsraSkge1xuICAgICAgbGV0IGFycm93ID0gY2MuaW5zdGFudGlhdGUodGhpcy5hcnJvdyk7XG4gICAgICBhcnJvdy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLmFycm93UG9vbC5wdXQoYXJyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge31cbiAgc3Bhd25BcnJvdyh0YXJnZXQ6IGNjLk5vZGUpIHtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zaG9vdFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgbGV0IGFycm93OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpZiAoUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UuYXJyb3dQb29sLnNpemUoKSA+IDApIHtcbiAgICAgIGFycm93ID0gUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UuYXJyb3dQb29sLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJvdyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXJyb3cpO1xuICAgIH1cbiAgICBhcnJvdy5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2VlbihhcnJvdykudG8oMC4wNSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcbiAgICBhcnJvdy5wYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICBhcnJvd1xuICAgICAgLmdldENvbXBvbmVudChQcm9qZWN0aWxlKVxuICAgICAgLnNldChcbiAgICAgICAgdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlLFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlLFxuICAgICAgICB0aGlzLmhpdExpbWl0LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uXG4gICAgICApO1xuICB9XG4gIHNob290QXJyb3dBdEVuZW15KCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgICB2YXIgdGFyZ2V0MSA9IEVuZW15RGV0ZWN0b3IuaW5zdGFuY2UuZW5lbXlMaXN0WzBdO1xuXG4gICAgICB0aGlzLnNwYXduQXJyb3codGFyZ2V0MSk7XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2tMZXZlbCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMub25MZXZlbE1heCgpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFyZSBkYW1hZ2UgYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmFkZEVxdWlwZWRXZWFwb24odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJSZWR1Y2UgdGltZSBiZXR3ZWVuIGF0dGFja3MgYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygyMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJSZWR1Y2UgdGltZSBiZXR3ZWVuIGF0dGFja3MgYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAyMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFyZSBkYW1hZ2UgYnkgMzAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAyMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJSZWR1Y2UgdGltZSBiZXR3ZWVuIGF0dGFja3MgYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygzMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFyZSBkYW1hZ2UgYnkgMzAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAyMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDMwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlU3RhdHMoXG4gICAgZGFtYWdlUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIGJhc2VEYW1hZ2U6IG51bWJlcixcbiAgICBhdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBoaXRMaW1pdEJvbnVzOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlICs9IGRhbWFnZVBlcmNlbnRhZ2U7XG4gICAgdGhpcy5iYXNlRGFtYWdlICs9IGJhc2VEYW1hZ2U7XG4gICAgdGhpcy5hdHRhY2tTcGVlZFBlcmNlbnRhZ2UgKz0gYXR0YWNrU3BlZWRQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlICs9IHdlYXBvblNjYWxlUGVyY2VudGFnZTtcbiAgICB0aGlzLmhpdExpbWl0ICs9IGhpdExpbWl0Qm9udXM7XG4gICAgdGhpcy5vblN0YXRDaGFuZ2UoKTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICB0aGlzLnNob290QXJyb3dBdEVuZW15KCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/MollyThrower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c49acuxz2lHy6ekcEsihHgg', 'MollyThrower');
// Script/Weapon/MollyThrower.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var ThrowableProjectile_1 = require("./ThrowableProjectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MollyThrower = /** @class */ (function (_super) {
    __extends(MollyThrower, _super);
    function MollyThrower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.molly = null;
        _this.player = null;
        _this.parent = null;
        _this.throwSound = null;
        _this.currentLevel = _this.level;
        return _this;
    }
    MollyThrower_1 = MollyThrower;
    MollyThrower.prototype.onLoad = function () {
        MollyThrower_1.instance = this;
        this.weaponOnLoad();
        this.durationPercentage = 0;
        this.timer = 0;
        var initCount = 10;
        this.description = "Throw a fire ball";
        for (var i = 0; i < initCount; ++i) {
            var molly = cc.instantiate(this.molly);
            molly.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.mollyPool.put(molly);
        }
    };
    MollyThrower.prototype.throwMolly = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.throwSound, false, 1);
            if (this.level < 3) {
                this.spawnMolly(cc.v3(Utils_1.default.random(this.player.x - 500, this.player.x + 500), Utils_1.default.random(this.player.y - 500, this.player.y + 500)));
                return;
            }
            if (this.level >= 7) {
                for (var i = 0; i < 3; i++) {
                    this.spawnMolly(cc.v3(Utils_1.default.random(this.player.x - 500, this.player.x + 500), Utils_1.default.random(this.player.y - 500, this.player.y + 500)));
                }
                return;
            }
            if (this.level >= 3) {
                for (var i = 0; i < 2; i++) {
                    this.spawnMolly(cc.v3(Utils_1.default.random(this.player.x - 500, this.player.x + 500), Utils_1.default.random(this.player.parent.y - 500, this.player.parent.y + 500)));
                }
                return;
            }
        }
    };
    MollyThrower.prototype.spawnMolly = function (target) {
        var molly = null;
        if (ProjectilePooling_1.default.instance.mollyPool.size() > 0) {
            molly = ProjectilePooling_1.default.instance.mollyPool.get();
        }
        else {
            molly = cc.instantiate(this.molly);
        }
        molly.opacity = 0;
        cc.tween(molly).to(0.05, { opacity: 255 }).start();
        molly.parent = this.parent;
        molly
            .getComponent(ThrowableProjectile_1.default)
            .set(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.durationPercentage, target, this.player.position);
    };
    MollyThrower.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase damage by 30%";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Add one more fire ball";
                    this.updateStats(30, 0, 0, 0, 0);
                    break;
                case 3:
                    this.description = "Reduce time between attacks by 20%";
                    break;
                case 4:
                    this.description = "Increase damage by 30%";
                    this.updateStats(0, 0, 20, 0, 0);
                    break;
                case 5:
                    this.description = "Increase radius by 30%, duration by 20%";
                    this.updateStats(30, 0, 0, 0, 0);
                    break;
                case 6:
                    this.description = "Add one more fire ball, increase radius by 30%";
                    this.updateStats(0, 0, 0, 30, 20);
                    break;
                case 7:
                    this.updateStats(0, 0, 0, 30, 0);
                    break;
                default:
                    break;
            }
        }
    };
    MollyThrower.prototype.updateStats = function (damagePercentage, baseDamage, attackSpeedPercentage, weaponScalePercentage, durationPercentage) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.durationPercentage += durationPercentage;
        this.onStatChange();
    };
    MollyThrower.prototype.start = function () { };
    MollyThrower.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.throwMolly();
    };
    var MollyThrower_1;
    __decorate([
        property(cc.Prefab)
    ], MollyThrower.prototype, "molly", void 0);
    __decorate([
        property(cc.Node)
    ], MollyThrower.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], MollyThrower.prototype, "parent", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MollyThrower.prototype, "throwSound", void 0);
    MollyThrower = MollyThrower_1 = __decorate([
        ccclass
    ], MollyThrower);
    return MollyThrower;
}(Weapon_1.default));
exports.default = MollyThrower;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXE1vbGx5VGhyb3dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBRXhDLGtFQUE2RDtBQUM3RCw2REFBd0Q7QUFDeEQsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBeUpDO1FBdEpDLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBNkk1QixDQUFDO3FCQXpKb0IsWUFBWTtJQWMvQiw2QkFBTSxHQUFOO1FBQ0UsY0FBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxD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QUFJLHFCQUFxQixDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELDRCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsNkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7SUFySkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDUztJQVRiLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F5SmhDO0lBQUQsbUJBQUM7Q0F6SkQsQUF5SkMsQ0F6SnlDLGdCQUFNLEdBeUovQztrQkF6Sm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9JdGVtL0l0ZW1cIjtcbmltcG9ydCBQcm9qZWN0aWxlUG9vbGluZyBmcm9tIFwiLi4vTWFuYWdlci9Qcm9qZWN0aWxlUG9vbGluZ1wiO1xuaW1wb3J0IFRocm93YWJsZVByb2plY3RpbGUgZnJvbSBcIi4vVGhyb3dhYmxlUHJvamVjdGlsZVwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi9XZWFwb25cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbGx5VGhyb3dlciBleHRlbmRzIFdlYXBvbiB7XG4gIHN0YXRpYyBpbnN0YW5jZTogTW9sbHlUaHJvd2VyO1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBtb2xseTogY2MuUHJlZmFiID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICB0aHJvd1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICB0aW1lcjogbnVtYmVyO1xuICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcblxuICBvbkxvYWQoKSB7XG4gICAgTW9sbHlUaHJvd2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLndlYXBvbk9uTG9hZCgpO1xuICAgIHRoaXMuZHVyYXRpb25QZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICBsZXQgaW5pdENvdW50ID0gMTA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiVGhyb3cgYSBmaXJlIGJhbGxcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRDb3VudDsgKytpKSB7XG4gICAgICBsZXQgbW9sbHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1vbGx5KTtcbiAgICAgIG1vbGx5LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UubW9sbHlQb29sLnB1dChtb2xseSk7XG4gICAgfVxuICB9XG4gIHRocm93TW9sbHkoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhyb3dTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPCAzKSB7XG4gICAgICAgIHRoaXMuc3Bhd25Nb2xseShcbiAgICAgICAgICBjYy52MyhcbiAgICAgICAgICAgIFV0aWxzLnJhbmRvbSh0aGlzLnBsYXllci54IC0gNTAwLCB0aGlzLnBsYXllci54ICsgNTAwKSxcbiAgICAgICAgICAgIFV0aWxzLnJhbmRvbSh0aGlzLnBsYXllci55IC0gNTAwLCB0aGlzLnBsYXllci55ICsgNTAwKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gNykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgIHRoaXMuc3Bhd25Nb2xseShcbiAgICAgICAgICAgIGNjLnYzKFxuICAgICAgICAgICAgICBVdGlscy5yYW5kb20odGhpcy5wbGF5ZXIueCAtIDUwMCwgdGhpcy5wbGF5ZXIueCArIDUwMCksXG4gICAgICAgICAgICAgIFV0aWxzLnJhbmRvbSh0aGlzLnBsYXllci55IC0gNTAwLCB0aGlzLnBsYXllci55ICsgNTAwKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gMykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgIHRoaXMuc3Bhd25Nb2xseShcbiAgICAgICAgICAgIGNjLnYzKFxuICAgICAgICAgICAgICBVdGlscy5yYW5kb20odGhpcy5wbGF5ZXIueCAtIDUwMCwgdGhpcy5wbGF5ZXIueCArIDUwMCksXG4gICAgICAgICAgICAgIFV0aWxzLnJhbmRvbShcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXJlbnQueSAtIDUwMCxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXJlbnQueSArIDUwMFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNwYXduTW9sbHkodGFyZ2V0OiBjYy5WZWMzKSB7XG4gICAgbGV0IG1vbGx5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpZiAoUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UubW9sbHlQb29sLnNpemUoKSA+IDApIHtcbiAgICAgIG1vbGx5ID0gUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UubW9sbHlQb29sLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2xseSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubW9sbHkpO1xuICAgIH1cblxuICAgIG1vbGx5Lm9wYWNpdHkgPSAwO1xuICAgIGNjLnR3ZWVuKG1vbGx5KS50bygwLjA1LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xuICAgIG1vbGx5LnBhcmVudCA9IHRoaXMucGFyZW50O1xuXG4gICAgbW9sbHlcbiAgICAgIC5nZXRDb21wb25lbnQoVGhyb3dhYmxlUHJvamVjdGlsZSlcbiAgICAgIC5zZXQoXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb25cbiAgICAgICk7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSAzMCVcIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZFdlYXBvbih0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkFkZCBvbmUgbW9yZSBmaXJlIGJhbGxcIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDMwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlJlZHVjZSB0aW1lIGJldHdlZW4gYXR0YWNrcyBieSAyMCVcIjtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDMwJVwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMCwgMCwgMjAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgcmFkaXVzIGJ5IDMwJSwgZHVyYXRpb24gYnkgMjAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygzMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJBZGQgb25lIG1vcmUgZmlyZSBiYWxsLCBpbmNyZWFzZSByYWRpdXMgYnkgMzAlXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAwLCAzMCwgMjApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAwLCAzMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZVN0YXRzKFxuICAgIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBiYXNlRGFtYWdlOiBudW1iZXIsXG4gICAgYXR0YWNrU3BlZWRQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgd2VhcG9uU2NhbGVQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgZHVyYXRpb25QZXJjZW50YWdlOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlICs9IGRhbWFnZVBlcmNlbnRhZ2U7XG4gICAgdGhpcy5iYXNlRGFtYWdlICs9IGJhc2VEYW1hZ2U7XG4gICAgdGhpcy5hdHRhY2tTcGVlZFBlcmNlbnRhZ2UgKz0gYXR0YWNrU3BlZWRQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlICs9IHdlYXBvblNjYWxlUGVyY2VudGFnZTtcbiAgICB0aGlzLmR1cmF0aW9uUGVyY2VudGFnZSArPSBkdXJhdGlvblBlcmNlbnRhZ2U7XG4gICAgdGhpcy5vblN0YXRDaGFuZ2UoKTtcbiAgfVxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIHRoaXMudGhyb3dNb2xseSgpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/OrbitProjectile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7a1dmGKkBD14Hb0ld0GDsF', 'OrbitProjectile');
// Script/Weapon/OrbitProjectile.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var Projectile_1 = require("./Projectile");
var ShurikenThrower_1 = require("./ShurikenThrower");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrbitProjectile = /** @class */ (function (_super) {
    __extends(OrbitProjectile, _super);
    function OrbitProjectile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = 2;
        _this.baseDuration = _this.duration;
        _this.durationPercentage = 0;
        _this.currentTime = 0;
        _this.startRadius = 150;
        _this.currentRadius = 150;
        _this.maxRadius = 150;
        _this.angleDelta = 0;
        _this.isInPool = true;
        _this.pivot = null;
        _this.interval = 0.005;
        _this.time = _this.interval;
        _this.previous = 9999;
        _this.trailList = new Array();
        return _this;
    }
    OrbitProjectile.prototype.start = function () { };
    OrbitProjectile.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).takeDamage(this.damage);
            ShurikenThrower_1.default.instance.hitLimit -= 1;
        }
    };
    OrbitProjectile.prototype.onLoad = function () {
        this.node.zIndex = 10000;
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScale;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
        this.currentRadius = this.startRadius;
    };
    OrbitProjectile.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScale =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.duration =
            this.baseDuration + (this.durationPercentage / 100) * this.baseDuration;
        this.node.scale = this.weaponScale;
    };
    OrbitProjectile.prototype.setStats = function (damagePercentage, bonusDamage, weaponScalePercentage, durationPercentage, pivot, angleDelta) {
        this.isInPool = false;
        this.time = this.interval;
        this.angleDelta = angleDelta;
        this.currentRadius = this.startRadius;
        this.currentTime = 0;
        this.baseDamange = bonusDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.pivot = pivot;
        this.durationPercentage = durationPercentage;
        this.lock = false;
        this.updateStats();
    };
    OrbitProjectile.prototype.putBackToPool = function () {
        if (this.currentTime >= this.duration) {
            this.isInPool = true;
            this.trailList.forEach(function (element) {
                ProjectilePooling_1.default.instance.putBackToPool(element);
            });
            this.trailList.length = 0;
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
    };
    OrbitProjectile.prototype.forceToPutBack = function () {
        this.isInPool = true;
        this.trailList.forEach(function (element) {
            ProjectilePooling_1.default.instance.putBackToPool(element);
        });
        this.trailList.length = 0;
        ProjectilePooling_1.default.instance.putBackToPool(this.node);
    };
    OrbitProjectile.prototype.orbitAround = function (dt) {
        this.addTrail(dt);
        this.node.angle += dt * 1500;
        this.angleDelta -= dt * 2.5;
        if (this.currentRadius > this.maxRadius)
            this.currentRadius = this.maxRadius;
        this.node.x = this.pivot.x + this.currentRadius * Math.cos(this.angleDelta);
        this.node.y = this.pivot.y + this.currentRadius * Math.sin(this.angleDelta);
    };
    OrbitProjectile.prototype.addTrail = function (dt) {
        if (this.time > 0)
            this.time -= dt;
        else {
            this.time = this.interval;
            var clone = null;
            clone = ProjectilePooling_1.default.instance.trailPool.get();
            if (clone == null) {
                clone = new cc.Node("Trail");
            }
            this.trailList.push(clone);
            clone.parent = this.node.parent;
            clone.scale = this.node.scale;
            clone.opacity = 200;
            clone.angle = this.node.angle;
            clone.zIndex = 9999;
            clone.position = cc.v3(this.node.x, this.node.y);
            if (clone.getComponent(cc.Sprite) != null)
                clone.getComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
            else
                clone.addComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
            clone.setContentSize(this.node.getContentSize());
            cc.tween(clone).to(0.08, { opacity: 0 }).start();
        }
    };
    OrbitProjectile.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        this.currentTime += dt;
        this.orbitAround(dt);
        this.putBackToPool();
        // for (let i = 0; i < this.trailList.length; i++) {
        //   this.trailList[i].opacity -= dt * 100;
        // }
    };
    __decorate([
        property(cc.Float)
    ], OrbitProjectile.prototype, "duration", void 0);
    __decorate([
        property(cc.Float)
    ], OrbitProjectile.prototype, "startRadius", void 0);
    __decorate([
        property(cc.Float)
    ], OrbitProjectile.prototype, "maxRadius", void 0);
    __decorate([
        property(cc.Float)
    ], OrbitProjectile.prototype, "angleDelta", void 0);
    OrbitProjectile = __decorate([
        ccclass
    ], OrbitProjectile);
    return OrbitProjectile;
}(Projectile_1.default));
exports.default = OrbitProjectile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXE9yYml0UHJvamVjdGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFDeEMsNERBQXVEO0FBQ3ZELGtFQUE2RDtBQUM3RCwyQ0FBc0M7QUFDdEMscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFVO0lBQXZEO1FBQUEscUVBMElDO1FBeElDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsa0JBQVksR0FBVyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLHdCQUFrQixHQUFXLENBQUMsQ0FBQztRQUMvQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsZUFBUyxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDOztJQXdIbkQsQ0FBQztJQXZIQywrQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUNWLDBDQUFnQixHQUFoQixVQUFpQixLQUFrQixFQUFFLElBQWlCO1FBQ3BELElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7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QUFNLENBQ1YsQ0FBQyxXQUFXLENBQUM7WUFDaEIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBQ0QsZ0NBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLGVBQUssQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixvREFBb0Q7UUFDcEQsMkNBQTJDO1FBQzNDLElBQUk7SUFDTixDQUFDO0lBdklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0U7SUFLckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ0k7SUFaSixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBMEluQztJQUFELHNCQUFDO0NBMUlELEFBMElDLENBMUk0QyxvQkFBVSxHQTBJdEQ7a0JBMUlvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi4vRW5lbXkvRW5lbXlDb250cm9sbGVyXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcbmltcG9ydCBQcm9qZWN0aWxlIGZyb20gXCIuL1Byb2plY3RpbGVcIjtcbmltcG9ydCBTaHVyaWtlblRocm93ZXIgZnJvbSBcIi4vU2h1cmlrZW5UaHJvd2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmJpdFByb2plY3RpbGUgZXh0ZW5kcyBQcm9qZWN0aWxlIHtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBkdXJhdGlvbjogbnVtYmVyID0gMjtcbiAgYmFzZUR1cmF0aW9uOiBudW1iZXIgPSB0aGlzLmR1cmF0aW9uO1xuICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHN0YXJ0UmFkaXVzOiBudW1iZXIgPSAxNTA7XG4gIGN1cnJlbnRSYWRpdXM6IG51bWJlciA9IDE1MDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBtYXhSYWRpdXM6IG51bWJlciA9IDE1MDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBhbmdsZURlbHRhOiBudW1iZXIgPSAwO1xuICBpc0luUG9vbDogYm9vbGVhbiA9IHRydWU7XG4gIHBpdm90OiBjYy5Ob2RlID0gbnVsbDtcbiAgaW50ZXJ2YWwgPSAwLjAwNTtcbiAgdGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gIHByZXZpb3VzOiBudW1iZXIgPSA5OTk5O1xuICB0cmFpbExpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIHN0YXJ0KCkge31cbiAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XG4gICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xuICAgICAgU2h1cmlrZW5UaHJvd2VyLmluc3RhbmNlLmhpdExpbWl0IC09IDE7XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDA7XG4gICAgdGhpcy5iYXNlRGFtYW5nZSA9IHRoaXMuZGFtYWdlO1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy53ZWFwb25TY2FsZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLnN0YXJ0UmFkaXVzO1xuICB9XG4gIHVwZGF0ZVN0YXRzKCkge1xuICAgIHRoaXMuZGFtYWdlID1cbiAgICAgICh0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlRGFtYW5nZSArIHRoaXMuYmFzZURhbWFuZ2U7XG4gICAgdGhpcy53ZWFwb25TY2FsZSA9XG4gICAgICAodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUgKyB0aGlzLmJhc2VTY2FsZTtcbiAgICB0aGlzLmR1cmF0aW9uID1cbiAgICAgIHRoaXMuYmFzZUR1cmF0aW9uICsgKHRoaXMuZHVyYXRpb25QZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZUR1cmF0aW9uO1xuICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMud2VhcG9uU2NhbGU7XG4gIH1cblxuICBzZXRTdGF0cyhcbiAgICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgYm9udXNEYW1hZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBwaXZvdDogY2MuTm9kZSxcbiAgICBhbmdsZURlbHRhOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5pc0luUG9vbCA9IGZhbHNlO1xuICAgIHRoaXMudGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gICAgdGhpcy5hbmdsZURlbHRhID0gYW5nbGVEZWx0YTtcbiAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLnN0YXJ0UmFkaXVzO1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuYmFzZURhbWFuZ2UgPSBib251c0RhbWFnZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSBkYW1hZ2VQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gd2VhcG9uU2NhbGVQZXJjZW50YWdlO1xuICAgIHRoaXMucGl2b3QgPSBwaXZvdDtcblxuICAgIHRoaXMuZHVyYXRpb25QZXJjZW50YWdlID0gZHVyYXRpb25QZXJjZW50YWdlO1xuICAgIHRoaXMubG9jayA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlU3RhdHMoKTtcbiAgfVxuXG4gIHB1dEJhY2tUb1Bvb2woKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgdGhpcy5pc0luUG9vbCA9IHRydWU7XG4gICAgICB0aGlzLnRyYWlsTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2woZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudHJhaWxMaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKHRoaXMubm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VUb1B1dEJhY2soKSB7XG4gICAgdGhpcy5pc0luUG9vbCA9IHRydWU7XG4gICAgdGhpcy50cmFpbExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UucHV0QmFja1RvUG9vbChlbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLnRyYWlsTGlzdC5sZW5ndGggPSAwO1xuICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgfVxuXG4gIG9yYml0QXJvdW5kKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLmFkZFRyYWlsKGR0KTtcbiAgICB0aGlzLm5vZGUuYW5nbGUgKz0gZHQgKiAxNTAwO1xuICAgIHRoaXMuYW5nbGVEZWx0YSAtPSBkdCAqIDIuNTtcbiAgICBpZiAodGhpcy5jdXJyZW50UmFkaXVzID4gdGhpcy5tYXhSYWRpdXMpXG4gICAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLm1heFJhZGl1cztcbiAgICB0aGlzLm5vZGUueCA9IHRoaXMucGl2b3QueCArIHRoaXMuY3VycmVudFJhZGl1cyAqIE1hdGguY29zKHRoaXMuYW5nbGVEZWx0YSk7XG4gICAgdGhpcy5ub2RlLnkgPSB0aGlzLnBpdm90LnkgKyB0aGlzLmN1cnJlbnRSYWRpdXMgKiBNYXRoLnNpbih0aGlzLmFuZ2xlRGVsdGEpO1xuICB9XG5cbiAgYWRkVHJhaWwoZHQpIHtcbiAgICBpZiAodGhpcy50aW1lID4gMCkgdGhpcy50aW1lIC09IGR0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy50aW1lID0gdGhpcy5pbnRlcnZhbDtcbiAgICAgIGxldCBjbG9uZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICBjbG9uZSA9IFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnRyYWlsUG9vbC5nZXQoKTtcblxuICAgICAgaWYgKGNsb25lID09IG51bGwpIHtcbiAgICAgICAgY2xvbmUgPSBuZXcgY2MuTm9kZShcIlRyYWlsXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyYWlsTGlzdC5wdXNoKGNsb25lKTtcbiAgICAgIGNsb25lLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICBjbG9uZS5zY2FsZSA9IHRoaXMubm9kZS5zY2FsZTtcbiAgICAgIGNsb25lLm9wYWNpdHkgPSAyMDA7XG4gICAgICBjbG9uZS5hbmdsZSA9IHRoaXMubm9kZS5hbmdsZTtcbiAgICAgIGNsb25lLnpJbmRleCA9IDk5OTk7XG5cbiAgICAgIGNsb25lLnBvc2l0aW9uID0gY2MudjModGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcbiAgICAgIGlmIChjbG9uZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSAhPSBudWxsKVxuICAgICAgICBjbG9uZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgY2MuU3ByaXRlXG4gICAgICAgICkuc3ByaXRlRnJhbWU7XG4gICAgICBlbHNlXG4gICAgICAgIGNsb25lLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcbiAgICAgICAgICBjYy5TcHJpdGVcbiAgICAgICAgKS5zcHJpdGVGcmFtZTtcbiAgICAgIGNsb25lLnNldENvbnRlbnRTaXplKHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpKTtcbiAgICAgIGNjLnR3ZWVuKGNsb25lKS50bygwLjA4LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGR0O1xuICAgIHRoaXMub3JiaXRBcm91bmQoZHQpO1xuICAgIHRoaXMucHV0QmFja1RvUG9vbCgpO1xuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYWlsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgdGhpcy50cmFpbExpc3RbaV0ub3BhY2l0eSAtPSBkdCAqIDEwMDtcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Projectile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '937f2AD/1NMJKL35/8weEe2', 'Projectile');
// Script/Weapon/Projectile.ts

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
var Movement_1 = require("../Controller/Movement");
var Utils_1 = require("../Controller/Utils");
var EnemyController_1 = require("../Enemy/EnemyController");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Projectile = /** @class */ (function (_super) {
    __extends(Projectile, _super);
    function Projectile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = 20;
        _this.weaponScale = 1;
        _this.travelSpeed = 400;
        _this.hitLimit = 1;
        _this.isShootingAtTarget = true;
        _this.lock = false;
        _this.target = null;
        return _this;
    }
    Projectile.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).takeDamage(this.damage);
            this.hitLimit -= 1;
        }
    };
    Projectile.prototype.putBackToPool = function () {
        var player = this.node.parent.getChildByName("PlayerBase");
        var distanceX = (player.x - this.node.x) * (player.x - this.node.x);
        var distanceY = (player.y - this.node.y) * (player.y - this.node.y);
        var distance = Math.sqrt(distanceX + distanceY);
        if (this.hitLimit <= 0) {
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
        if (distance > 1200) {
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
    };
    Projectile.prototype.moveToTarget = function (target, dt) {
        if (this.isShootingAtTarget) {
            this.target = target;
        }
        if (target == null && !this.lock) {
            this.directionVector = Movement_1.default.instance.directionVector.normalize();
            this.directionVector = cc.v2(this.directionVector.x + Utils_1.default.random(-0.1, 0.1), this.directionVector.y + Utils_1.default.random(-0.1, 0.1));
            this.node.angle =
                Math.atan2(this.directionVector.y, this.directionVector.x) *
                    (180 / Math.PI);
            this.lock = true;
        }
        if (target != null && !this.lock) {
            this.lock = true;
            var deltaX = this.target.x - this.node.x;
            var deltaY = this.target.y - this.node.y;
            this.directionVector = cc.v2(deltaX, deltaY).normalize();
            this.node.angle =
                Math.atan2(this.directionVector.y, this.directionVector.x) *
                    (180 / Math.PI);
        }
        this.node.x += this.directionVector.normalize().x * this.travelSpeed * dt;
        this.node.y += this.directionVector.normalize().y * this.travelSpeed * dt;
    };
    Projectile.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScale =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.node.scale = this.weaponScale;
    };
    Projectile.prototype.set = function (damagePercentage, bonusDamage, weaponScalePercentage, hitLimit, target, position) {
        this.baseDamange = bonusDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.target = target;
        this.node.position = position;
        this.hitLimit = hitLimit;
        this.lock = false;
        this.updateStats();
    };
    // LIFE-CYCLE CALLBACKS:
    Projectile.prototype.onLoad = function () {
        this.node.zIndex = 10001;
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScale;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
    };
    Projectile.prototype.start = function () { };
    Projectile.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            return;
        }
        this.moveToTarget(this.target, dt);
        this.putBackToPool();
    };
    __decorate([
        property(cc.Float)
    ], Projectile.prototype, "damage", void 0);
    __decorate([
        property(cc.Float)
    ], Projectile.prototype, "weaponScale", void 0);
    __decorate([
        property(cc.Float)
    ], Projectile.prototype, "travelSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], Projectile.prototype, "hitLimit", void 0);
    __decorate([
        property(cc.Boolean)
    ], Projectile.prototype, "isShootingAtTarget", void 0);
    Projectile = __decorate([
        ccclass
    ], Projectile);
    return Projectile;
}(cc.Component));
exports.default = Projectile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFByb2plY3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsbURBQThDO0FBQzlDLDZDQUF3QztBQUN4Qyw0REFBdUQ7QUFDdkQsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBOEdDO1FBNUdDLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVoQixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUVsQixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsd0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBTzFCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsWUFBTSxHQUFZLElBQUksQ0FBQzs7SUE0RnpCLENBQUM7SUEzRkMscUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFDRCxrQ0FBYSxHQUFiO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksU0FBUyxHQUFHLENBQUMsTUFBTSxD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QUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwwQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLDJCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQTNHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNQO0lBRVo7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDSDtJQUVoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNEO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ047SUFFYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzBEQUNLO0lBVlAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThHOUI7SUFBRCxpQkFBQztDQTlHRCxBQThHQyxDQTlHdUMsRUFBRSxDQUFDLFNBQVMsR0E4R25EO2tCQTlHb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTW92ZW1lbnQgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTW92ZW1lbnRcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi4vRW5lbXkvRW5lbXlDb250cm9sbGVyXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RpbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGRhbWFnZSA9IDIwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHdlYXBvblNjYWxlID0gMTtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICB0cmF2ZWxTcGVlZCA9IDQwMDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBoaXRMaW1pdCA9IDE7XG4gIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICBpc1Nob290aW5nQXRUYXJnZXQgPSB0cnVlO1xuICBiYXNlRGFtYW5nZTogbnVtYmVyO1xuICBiYXNlU2NhbGU6IG51bWJlcjtcbiAgZGFtYWdlUGVyY2VudGFnZTogbnVtYmVyO1xuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgZGlyZWN0aW9uVmVjdG9yOiBjYy5WZWMyO1xuICBhbmdsZTogbnVtYmVyO1xuICBsb2NrOiBib29sZWFuID0gZmFsc2U7XG4gIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xuICAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS50YWtlRGFtYWdlKHRoaXMuZGFtYWdlKTtcbiAgICAgIHRoaXMuaGl0TGltaXQgLT0gMTtcbiAgICB9XG4gIH1cbiAgcHV0QmFja1RvUG9vbCgpIHtcbiAgICB2YXIgcGxheWVyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllckJhc2VcIik7XG4gICAgdmFyIGRpc3RhbmNlWCA9IChwbGF5ZXIueCAtIHRoaXMubm9kZS54KSAqIChwbGF5ZXIueCAtIHRoaXMubm9kZS54KTtcbiAgICB2YXIgZGlzdGFuY2VZID0gKHBsYXllci55IC0gdGhpcy5ub2RlLnkpICogKHBsYXllci55IC0gdGhpcy5ub2RlLnkpO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVggKyBkaXN0YW5jZVkpO1xuICAgIGlmICh0aGlzLmhpdExpbWl0IDw9IDApIHtcbiAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgICB9XG4gICAgaWYgKGRpc3RhbmNlID4gMTIwMCkge1xuICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UucHV0QmFja1RvUG9vbCh0aGlzLm5vZGUpO1xuICAgIH1cbiAgfVxuICBtb3ZlVG9UYXJnZXQodGFyZ2V0OiBjYy5Ob2RlLCBkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZ0F0VGFyZ2V0KSB7XG4gICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG4gICAgaWYgKHRhcmdldCA9PSBudWxsICYmICF0aGlzLmxvY2spIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uVmVjdG9yID0gTW92ZW1lbnQuaW5zdGFuY2UuZGlyZWN0aW9uVmVjdG9yLm5vcm1hbGl6ZSgpO1xuICAgICAgdGhpcy5kaXJlY3Rpb25WZWN0b3IgPSBjYy52MihcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25WZWN0b3IueCArIFV0aWxzLnJhbmRvbSgtMC4xLCAwLjEpLFxuICAgICAgICB0aGlzLmRpcmVjdGlvblZlY3Rvci55ICsgVXRpbHMucmFuZG9tKC0wLjEsIDAuMSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMubm9kZS5hbmdsZSA9XG4gICAgICAgIE1hdGguYXRhbjIodGhpcy5kaXJlY3Rpb25WZWN0b3IueSwgdGhpcy5kaXJlY3Rpb25WZWN0b3IueCkgKlxuICAgICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICB0aGlzLmxvY2sgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ICE9IG51bGwgJiYgIXRoaXMubG9jaykge1xuICAgICAgdGhpcy5sb2NrID0gdHJ1ZTtcblxuICAgICAgdmFyIGRlbHRhWCA9IHRoaXMudGFyZ2V0LnggLSB0aGlzLm5vZGUueDtcbiAgICAgIHZhciBkZWx0YVkgPSB0aGlzLnRhcmdldC55IC0gdGhpcy5ub2RlLnk7XG4gICAgICB0aGlzLmRpcmVjdGlvblZlY3RvciA9IGNjLnYyKGRlbHRhWCwgZGVsdGFZKS5ub3JtYWxpemUoKTtcbiAgICAgIHRoaXMubm9kZS5hbmdsZSA9XG4gICAgICAgIE1hdGguYXRhbjIodGhpcy5kaXJlY3Rpb25WZWN0b3IueSwgdGhpcy5kaXJlY3Rpb25WZWN0b3IueCkgKlxuICAgICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgfVxuICAgIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyZWN0aW9uVmVjdG9yLm5vcm1hbGl6ZSgpLnggKiB0aGlzLnRyYXZlbFNwZWVkICogZHQ7XG4gICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5kaXJlY3Rpb25WZWN0b3Iubm9ybWFsaXplKCkueSAqIHRoaXMudHJhdmVsU3BlZWQgKiBkdDtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRzKCkge1xuICAgIHRoaXMuZGFtYWdlID1cbiAgICAgICh0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlRGFtYW5nZSArIHRoaXMuYmFzZURhbWFuZ2U7XG4gICAgdGhpcy53ZWFwb25TY2FsZSA9XG4gICAgICAodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUgKyB0aGlzLmJhc2VTY2FsZTtcbiAgICB0aGlzLm5vZGUuc2NhbGUgPSB0aGlzLndlYXBvblNjYWxlO1xuICB9XG4gIHNldChcbiAgICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgYm9udXNEYW1hZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBoaXRMaW1pdDogbnVtYmVyLFxuICAgIHRhcmdldDogY2MuTm9kZSxcbiAgICBwb3NpdGlvbjogY2MuVmVjM1xuICApIHtcbiAgICB0aGlzLmJhc2VEYW1hbmdlID0gYm9udXNEYW1hZ2U7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlID0gZGFtYWdlUGVyY2VudGFnZTtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSA9IHdlYXBvblNjYWxlUGVyY2VudGFnZTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmhpdExpbWl0ID0gaGl0TGltaXQ7XG4gICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVTdGF0cygpO1xuICB9XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDE7XG4gICAgdGhpcy5iYXNlRGFtYW5nZSA9IHRoaXMuZGFtYWdlO1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy53ZWFwb25TY2FsZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gMDtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1vdmVUb1RhcmdldCh0aGlzLnRhcmdldCwgZHQpO1xuICAgIHRoaXMucHV0QmFja1RvUG9vbCgpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/SpiderCooking.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49d17zdk5dLOIo96OSB+zhp', 'SpiderCooking');
// Script/Weapon/SpiderCooking.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var EnemyController_1 = require("../Enemy/EnemyController");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpiderCooking = /** @class */ (function (_super) {
    __extends(SpiderCooking, _super);
    function SpiderCooking() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentLevel = _this.level;
        return _this;
    }
    SpiderCooking.prototype.onLoad = function () {
        this.weaponOnLoad();
        this.description =
            "Create an area of miasma around, dealing slow damage to enemies inside.";
        this.node.zIndex = 1;
        this.node.getComponent(cc.Sprite).enabled = false;
        this.node.getComponent(cc.CircleCollider).enabled = false;
    };
    SpiderCooking.prototype.onCollisionStay = function (other, self) {
        if (other.tag == 1) {
            var damage = this.baseDamage + (this.baseDamage * this.resultDamagePercentage) / 100;
            other.node
                .getComponent(EnemyController_1.default)
                .takeDamageWithTick(damage, this.attackSpeed);
        }
    };
    SpiderCooking.prototype.updateStats = function (damagePercentage, attackSpeedPercentage, weaponScalePercentage) {
        this.damagePercentage += damagePercentage;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.node.scale += weaponScalePercentage / 100;
        this.onStatChange();
        // this.node.scale = this.resultWeaponScalePercentage;
    };
    SpiderCooking.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase area by 15%.";
                    this.isEquiped = true;
                    this.node.getComponent(cc.Sprite).enabled = true;
                    this.node.getComponent(cc.CircleCollider).enabled = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 0, 15);
                    break;
                case 3:
                    this.description = "Increase area by 25%.";
                    this.updateStats(30, 0, 0);
                    break;
                case 4:
                    this.description = "Increase frequency of hits by 20%.";
                    this.updateStats(0, 0, 25);
                    break;
                case 5:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 20, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 30%.";
                    this.updateStats(0, 30, 0);
                    break;
                case 7:
                    this.updateStats(0, 30, 0);
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    SpiderCooking.prototype.start = function () { };
    SpiderCooking.prototype.update = function (dt) {
        this.onLevelUp();
        if (!this.isEquiped)
            return;
        if (Utils_1.default.isPause) {
            this.node.getComponent(cc.Animation).pause();
            return;
        }
        this.node.getComponent(cc.Animation).resume();
    };
    SpiderCooking = __decorate([
        ccclass
    ], SpiderCooking);
    return SpiderCooking;
}(Weapon_1.default));
exports.default = SpiderCooking;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFNwaWRlckNvb2tpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUN4Qyw0REFBdUQ7QUFDdkQsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFNO0lBQWpEO1FBQ0Usd0JBQXdCO1FBRDFCLHFFQXNGQztRQW5GQyxrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBbUY1QixDQUFDO0lBakZDLDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVc7WUFDZCx5RUFBeUUsQ0FBQztRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUNELHVDQUFlLEdBQWYsVUFBZ0IsS0FBa0IsRUFBRSxJQUFpQjtRQUNuRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksTUFBTSxHQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFH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QUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQXJGa0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXNGakM7SUFBRCxvQkFBQztDQXRGRCxBQXNGQyxDQXRGMEMsZ0JBQU0sR0FzRmhEO2tCQXRGb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi4vRW5lbXkvRW5lbXlDb250cm9sbGVyXCI7XG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuL1dlYXBvblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpZGVyQ29va2luZyBleHRlbmRzIFdlYXBvbiB7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMud2VhcG9uT25Mb2FkKCk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICBcIkNyZWF0ZSBhbiBhcmVhIG9mIG1pYXNtYSBhcm91bmQsIGRlYWxpbmcgc2xvdyBkYW1hZ2UgdG8gZW5lbWllcyBpbnNpZGUuXCI7XG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDE7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gIH1cbiAgb25Db2xsaXNpb25TdGF5KG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgIGxldCBkYW1hZ2UgPVxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UgKyAodGhpcy5iYXNlRGFtYWdlICogdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlKSAvIDEwMDtcbiAgICAgIG90aGVyLm5vZGVcbiAgICAgICAgLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpXG4gICAgICAgIC50YWtlRGFtYWdlV2l0aFRpY2soZGFtYWdlLCB0aGlzLmF0dGFja1NwZWVkKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlU3RhdHMoXG4gICAgZGFtYWdlUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIGF0dGFja1NwZWVkUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIHdlYXBvblNjYWxlUGVyY2VudGFnZTogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSArPSBkYW1hZ2VQZXJjZW50YWdlO1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlICs9IGF0dGFja1NwZWVkUGVyY2VudGFnZTtcbiAgICB0aGlzLm5vZGUuc2NhbGUgKz0gd2VhcG9uU2NhbGVQZXJjZW50YWdlIC8gMTAwO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gICAgLy8gdGhpcy5ub2RlLnNjYWxlID0gdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2U7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGFyZWEgYnkgMTUlLlwiO1xuICAgICAgICAgIHRoaXMuaXNFcXVpcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZFdlYXBvbih0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSAzMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAxNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBhcmVhIGJ5IDI1JS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDMwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGZyZXF1ZW5jeSBvZiBoaXRzIGJ5IDIwJS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDAsIDAsIDI1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSAzMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAyMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBkYW1hZ2UgYnkgMzAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMCwgMzAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAzMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLm9uTGV2ZWxVcCgpO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkge1xuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBhdXNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5yZXN1bWUoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/ShurikenThrower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '805f4oXAZFOS7RmMDP7c/Kq', 'ShurikenThrower');
// Script/Weapon/ShurikenThrower.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var OrbitProjectile_1 = require("./OrbitProjectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShurikenThrower = /** @class */ (function (_super) {
    __extends(ShurikenThrower, _super);
    function ShurikenThrower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shuriken = null;
        _this.player = null;
        _this.parent = null;
        _this.hitLimit = 5;
        _this.baseHitLimit = _this.hitLimit;
        _this.spawnAmount = 3;
        _this.shurikenList = new Array();
        _this.currentLevel = _this.level;
        return _this;
    }
    ShurikenThrower_1 = ShurikenThrower;
    ShurikenThrower.prototype.onLoad = function () {
        ShurikenThrower_1.instance = this;
        this.durationPercentage = 0;
        this.weaponOnLoad();
        this.timer = 0;
        var initCount = 10;
        this.description = "Repels targets with orbiting shurikens.";
        for (var i = 0; i < initCount; ++i) {
            var shuriken = cc.instantiate(this.shuriken);
            shuriken.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.shurikenPool.put(shuriken);
        }
    };
    ShurikenThrower.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Add 1 additional shuriken.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description =
                        "Increase damage by 30% and increase duration by 1 second.";
                    this.spawnAmount += 1;
                    break;
                case 3:
                    this.description = "Add 1 additional shuriken.";
                    this.updateStats(30, 0, 0, 0, 0, 50);
                    break;
                case 4:
                    this.description = "Increase Damage by 40%.";
                    this.spawnAmount += 1;
                    break;
                case 5:
                    this.description = "Add 1 additional shuriken.";
                    this.updateStats(40, 0, 0, 0, 0, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 40%.";
                    this.spawnAmount += 1;
                    break;
                case 7:
                    this.updateStats(40, 0, 0, 0, 0, 0);
                    break;
                default:
                    break;
            }
        }
    };
    ShurikenThrower.prototype.spawnShuriken = function (angleDelta) {
        var shuriken = null;
        if (ProjectilePooling_1.default.instance.shurikenPool.size() > 0) {
            shuriken = ProjectilePooling_1.default.instance.shurikenPool.get();
        }
        else {
            shuriken = cc.instantiate(this.shuriken);
        }
        shuriken.opacity = 0;
        cc.tween(shuriken).to(0.05, { opacity: 255 }).start();
        shuriken.parent = this.parent;
        shuriken
            .getComponent(OrbitProjectile_1.default)
            .setStats(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.durationPercentage, this.player, angleDelta);
        this.shurikenList.push(shuriken);
    };
    ShurikenThrower.prototype.updateStats = function (damagePercentage, baseDamage, hitLimit, attackSpeedPercentage, weaponScalePercentage, durationPercentage) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.hitLimit += hitLimit;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.durationPercentage += durationPercentage;
        this.onStatChange();
    };
    ShurikenThrower.prototype.throwShuriken = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            this.hitLimit = this.baseHitLimit * this.spawnAmount;
            for (var i = 0; i < this.spawnAmount; i++) {
                var angleDelta = (360 / this.spawnAmount) * i * (Math.PI / 180);
                this.spawnShuriken(angleDelta);
            }
        }
        this.shurikenList = this.shurikenList.filter(function (item) { return item.getComponent(OrbitProjectile_1.default).isInPool !== true; });
    };
    ShurikenThrower.prototype.onNoHitLimit = function () {
        if (this.hitLimit <= 0) {
            this.shurikenList.forEach(function (element) {
                element.getComponent(OrbitProjectile_1.default).forceToPutBack();
            });
        }
    };
    ShurikenThrower.prototype.start = function () { };
    ShurikenThrower.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.throwShuriken();
        this.onNoHitLimit();
    };
    var ShurikenThrower_1;
    __decorate([
        property(cc.Prefab)
    ], ShurikenThrower.prototype, "shuriken", void 0);
    __decorate([
        property(cc.Node)
    ], ShurikenThrower.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], ShurikenThrower.prototype, "parent", void 0);
    ShurikenThrower = ShurikenThrower_1 = __decorate([
        ccclass
    ], ShurikenThrower);
    return ShurikenThrower;
}(Weapon_1.default));
exports.default = ShurikenThrower;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFNodXJpa2VuVGhyb3dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBRXhDLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFDaEQsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFNO0lBQW5EO1FBQUEscUVBNElDO1FBeklDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsa0JBQVksR0FBVyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGtCQUFZLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7UUFDcEQsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQThINUIsQ0FBQzt3QkE1SW9CLGVBQWU7SUFlbEMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLHlDQUF5QyxDQUFDO1FBQzdELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FB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RXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0s7SUFQSixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNEluQztJQUFELHNCQUFDO0NBNUlELEFBNElDLENBNUk0QyxnQkFBTSxHQTRJbEQ7a0JBNUlvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vSXRlbS9JdGVtXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcbmltcG9ydCBPcmJpdFByb2plY3RpbGUgZnJvbSBcIi4vT3JiaXRQcm9qZWN0aWxlXCI7XG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuL1dlYXBvblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1cmlrZW5UaHJvd2VyIGV4dGVuZHMgV2VhcG9uIHtcbiAgc3RhdGljIGluc3RhbmNlOiBTaHVyaWtlblRocm93ZXI7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHNodXJpa2VuOiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBhcmVudDogY2MuTm9kZSA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXI7XG4gIGR1cmF0aW9uUGVyY2VudGFnZTogbnVtYmVyO1xuICBoaXRMaW1pdDogbnVtYmVyID0gNTtcbiAgYmFzZUhpdExpbWl0OiBudW1iZXIgPSB0aGlzLmhpdExpbWl0O1xuICBzcGF3bkFtb3VudDogbnVtYmVyID0gMztcbiAgc2h1cmlrZW5MaXN0OiBBcnJheTxjYy5Ob2RlPiA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICBvbkxvYWQoKSB7XG4gICAgU2h1cmlrZW5UaHJvd2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmR1cmF0aW9uUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy53ZWFwb25PbkxvYWQoKTtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICBsZXQgaW5pdENvdW50ID0gMTA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVwZWxzIHRhcmdldHMgd2l0aCBvcmJpdGluZyBzaHVyaWtlbnMuXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0Q291bnQ7ICsraSkge1xuICAgICAgbGV0IHNodXJpa2VuID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaHVyaWtlbik7XG4gICAgICBzaHVyaWtlbi5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnNodXJpa2VuUG9vbC5wdXQoc2h1cmlrZW4pO1xuICAgIH1cbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiQWRkIDEgYWRkaXRpb25hbCBzaHVyaWtlbi5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZFdlYXBvbih0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZSBkYW1hZ2UgYnkgMzAlIGFuZCBpbmNyZWFzZSBkdXJhdGlvbiBieSAxIHNlY29uZC5cIjtcblxuICAgICAgICAgIHRoaXMuc3Bhd25BbW91bnQgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkFkZCAxIGFkZGl0aW9uYWwgc2h1cmlrZW4uXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygzMCwgMCwgMCwgMCwgMCwgNTApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgRGFtYWdlIGJ5IDQwJS5cIjtcbiAgICAgICAgICB0aGlzLnNwYXduQW1vdW50ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJBZGQgMSBhZGRpdGlvbmFsIHNodXJpa2VuLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDQwJS5cIjtcbiAgICAgICAgICB0aGlzLnNwYXduQW1vdW50ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDQwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3Bhd25TaHVyaWtlbihhbmdsZURlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgc2h1cmlrZW46IGNjLk5vZGUgPSBudWxsO1xuICAgIGlmIChQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5zaHVyaWtlblBvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgc2h1cmlrZW4gPSBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5zaHVyaWtlblBvb2wuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNodXJpa2VuID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaHVyaWtlbik7XG4gICAgfVxuXG4gICAgc2h1cmlrZW4ub3BhY2l0eSA9IDA7XG4gICAgY2MudHdlZW4oc2h1cmlrZW4pLnRvKDAuMDUsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgc2h1cmlrZW4ucGFyZW50ID0gdGhpcy5wYXJlbnQ7XG5cbiAgICBzaHVyaWtlblxuICAgICAgLmdldENvbXBvbmVudChPcmJpdFByb2plY3RpbGUpXG4gICAgICAuc2V0U3RhdHMoXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucGxheWVyLFxuICAgICAgICBhbmdsZURlbHRhXG4gICAgICApO1xuICAgIHRoaXMuc2h1cmlrZW5MaXN0LnB1c2goc2h1cmlrZW4pO1xuICB9XG4gIHVwZGF0ZVN0YXRzKFxuICAgIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBiYXNlRGFtYWdlOiBudW1iZXIsXG4gICAgaGl0TGltaXQ6IG51bWJlcixcbiAgICBhdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgKz0gZGFtYWdlUGVyY2VudGFnZTtcbiAgICB0aGlzLmJhc2VEYW1hZ2UgKz0gYmFzZURhbWFnZTtcbiAgICB0aGlzLmhpdExpbWl0ICs9IGhpdExpbWl0O1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlICs9IGF0dGFja1NwZWVkUGVyY2VudGFnZTtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSArPSB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U7XG4gICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UgKz0gZHVyYXRpb25QZXJjZW50YWdlO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gIH1cbiAgdGhyb3dTaHVyaWtlbigpIHtcbiAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5oaXRMaW1pdCA9IHRoaXMuYmFzZUhpdExpbWl0ICogdGhpcy5zcGF3bkFtb3VudDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcGF3bkFtb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBhbmdsZURlbHRhID0gKDM2MCAvIHRoaXMuc3Bhd25BbW91bnQpICogaSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5zcGF3blNodXJpa2VuKGFuZ2xlRGVsdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNodXJpa2VuTGlzdCA9IHRoaXMuc2h1cmlrZW5MaXN0LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLmdldENvbXBvbmVudChPcmJpdFByb2plY3RpbGUpLmlzSW5Qb29sICE9PSB0cnVlXG4gICAgKTtcbiAgfVxuICBvbk5vSGl0TGltaXQoKSB7XG4gICAgaWYgKHRoaXMuaGl0TGltaXQgPD0gMCkge1xuICAgICAgdGhpcy5zaHVyaWtlbkxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmdldENvbXBvbmVudChPcmJpdFByb2plY3RpbGUpLmZvcmNlVG9QdXRCYWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIHRoaXMudGhyb3dTaHVyaWtlbigpO1xuICAgIHRoaXMub25Ob0hpdExpbWl0KCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/SpiralProjectile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1912f9dqKhLZJdO/kDnBkla', 'SpiralProjectile');
// Script/Weapon/SpiralProjectile.ts

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
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var Projectile_1 = require("../Weapon/Projectile");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpiralProjectile = /** @class */ (function (_super) {
    __extends(SpiralProjectile, _super);
    function SpiralProjectile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = 3;
        _this.baseDuration = _this.duration;
        _this.durationPercentage = 0;
        _this.currentTime = 0;
        _this.startRadius = 100;
        _this.currentRadius = 100;
        _this.maxRadius = 400;
        _this.angleDelta = 0;
        _this.pivot = null;
        _this.interval = 0.01;
        _this.time = _this.interval;
        _this.previous = null;
        _this.trailList = new Array();
        return _this;
    }
    SpiralProjectile.prototype.start = function () { };
    SpiralProjectile.prototype.onLoad = function () {
        this.node.zIndex = 10000;
        this.baseDamange = this.damage;
        this.baseScale = this.weaponScale;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
        this.currentRadius = this.startRadius;
    };
    SpiralProjectile.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScale =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.duration =
            this.baseDuration + (this.durationPercentage / 100) * this.baseDuration;
        this.node.scale = this.weaponScale;
    };
    SpiralProjectile.prototype.setStats = function (damagePercentage, bonusDamage, weaponScalePercentage, hitLimit, durationPercentage, pivot) {
        this.time = this.interval;
        this.angleDelta = 0;
        this.currentRadius = this.startRadius;
        this.currentTime = 0;
        this.baseDamange = bonusDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.pivot = pivot;
        this.hitLimit = hitLimit;
        this.durationPercentage = durationPercentage;
        this.lock = false;
        this.updateStats();
    };
    SpiralProjectile.prototype.putBackToPool = function () {
        if (this.hitLimit <= 0) {
            this.trailList.forEach(function (element) {
                ProjectilePooling_1.default.instance.putBackToPool(element);
            });
            this.trailList.length = 0;
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
        if (this.currentTime >= this.duration) {
            this.trailList.forEach(function (element) {
                ProjectilePooling_1.default.instance.putBackToPool(element);
            });
            this.trailList.length = 0;
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
    };
    SpiralProjectile.prototype.spinAround = function (dt) {
        this.addTrail(dt);
        this.node.angle += dt * 1500;
        this.angleDelta -= dt * 4;
        this.currentRadius += dt * 90;
        if (this.currentRadius > this.maxRadius)
            this.currentRadius = this.maxRadius;
        this.node.x = this.pivot.x + this.currentRadius * Math.cos(this.angleDelta);
        this.node.y = this.pivot.y + this.currentRadius * Math.sin(this.angleDelta);
    };
    SpiralProjectile.prototype.addTrail = function (dt) {
        if (this.time > 0)
            this.time -= dt;
        else {
            this.time = this.interval;
            var clone = null;
            clone = ProjectilePooling_1.default.instance.trailPool.get();
            if (clone == null) {
                clone = new cc.Node("Trail");
            }
            this.trailList.push(clone);
            clone.parent = this.node.parent;
            clone.scale = this.node.scale;
            clone.opacity = 200;
            clone.angle = this.node.angle;
            clone.zIndex = 9999;
            clone.position = cc.v3(this.node.x, this.node.y);
            if (clone.getComponent(cc.Sprite) != null)
                clone.getComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
            else
                clone.addComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
            clone.setContentSize(this.node.getContentSize());
            cc.tween(clone).to(0.08, { opacity: 0 }).start();
        }
    };
    SpiralProjectile.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            return;
        }
        this.currentTime += dt;
        this.spinAround(dt);
        this.putBackToPool();
    };
    __decorate([
        property(cc.Float)
    ], SpiralProjectile.prototype, "duration", void 0);
    __decorate([
        property(cc.Float)
    ], SpiralProjectile.prototype, "startRadius", void 0);
    __decorate([
        property(cc.Float)
    ], SpiralProjectile.prototype, "maxRadius", void 0);
    SpiralProjectile = __decorate([
        ccclass
    ], SpiralProjectile);
    return SpiralProjectile;
}(Projectile_1.default));
exports.default = SpiralProjectile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFNwaXJhbFByb2plY3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBQ3hDLGtFQUE2RDtBQUM3RCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVU7SUFBeEQ7UUFBQSxxRUEySEM7UUF6SEMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFXLEtBQUksQ0FBQyxRQUFRLENBQUM7UUFDckMsd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDOztJQTJHbkQsQ0FBQztJQTFHQyxnQ0FBSyxHQUFMLGNBQVMsQ0FBQztJQUNWLGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcs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O1FBQ0QsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNFO0lBS3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDSztJQVZMLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMkhwQztJQUFELHVCQUFDO0NBM0hELEFBMkhDLENBM0g2QyxvQkFBVSxHQTJIdkQ7a0JBM0hvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgUHJvamVjdGlsZVBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvUHJvamVjdGlsZVBvb2xpbmdcIjtcbmltcG9ydCBQcm9qZWN0aWxlIGZyb20gXCIuLi9XZWFwb24vUHJvamVjdGlsZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpcmFsUHJvamVjdGlsZSBleHRlbmRzIFByb2plY3RpbGUge1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGR1cmF0aW9uOiBudW1iZXIgPSAzO1xuICBiYXNlRHVyYXRpb246IG51bWJlciA9IHRoaXMuZHVyYXRpb247XG4gIGR1cmF0aW9uUGVyY2VudGFnZTogbnVtYmVyID0gMDtcbiAgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgc3RhcnRSYWRpdXM6IG51bWJlciA9IDEwMDtcbiAgY3VycmVudFJhZGl1czogbnVtYmVyID0gMTAwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1heFJhZGl1czogbnVtYmVyID0gNDAwO1xuICBhbmdsZURlbHRhOiBudW1iZXIgPSAwO1xuICBwaXZvdDogY2MuTm9kZSA9IG51bGw7XG4gIGludGVydmFsID0gMC4wMTtcbiAgdGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gIHByZXZpb3VzOiBjYy5Ob2RlID0gbnVsbDtcbiAgdHJhaWxMaXN0OiBBcnJheTxjYy5Ob2RlPiA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICBzdGFydCgpIHt9XG4gIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDA7XG4gICAgdGhpcy5iYXNlRGFtYW5nZSA9IHRoaXMuZGFtYWdlO1xuICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy53ZWFwb25TY2FsZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLnN0YXJ0UmFkaXVzO1xuICB9XG4gIHVwZGF0ZVN0YXRzKCkge1xuICAgIHRoaXMuZGFtYWdlID1cbiAgICAgICh0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlRGFtYW5nZSArIHRoaXMuYmFzZURhbWFuZ2U7XG4gICAgdGhpcy53ZWFwb25TY2FsZSA9XG4gICAgICAodGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5iYXNlU2NhbGUgKyB0aGlzLmJhc2VTY2FsZTtcbiAgICB0aGlzLmR1cmF0aW9uID1cbiAgICAgIHRoaXMuYmFzZUR1cmF0aW9uICsgKHRoaXMuZHVyYXRpb25QZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZUR1cmF0aW9uO1xuICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMud2VhcG9uU2NhbGU7XG4gIH1cblxuICBzZXRTdGF0cyhcbiAgICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgYm9udXNEYW1hZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBoaXRMaW1pdDogbnVtYmVyLFxuICAgIGR1cmF0aW9uUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIHBpdm90OiBjYy5Ob2RlXG4gICkge1xuICAgIHRoaXMudGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gICAgdGhpcy5hbmdsZURlbHRhID0gMDtcbiAgICB0aGlzLmN1cnJlbnRSYWRpdXMgPSB0aGlzLnN0YXJ0UmFkaXVzO1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuYmFzZURhbWFuZ2UgPSBib251c0RhbWFnZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSBkYW1hZ2VQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gd2VhcG9uU2NhbGVQZXJjZW50YWdlO1xuICAgIHRoaXMucGl2b3QgPSBwaXZvdDtcbiAgICB0aGlzLmhpdExpbWl0ID0gaGl0TGltaXQ7XG4gICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UgPSBkdXJhdGlvblBlcmNlbnRhZ2U7XG4gICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVTdGF0cygpO1xuICB9XG5cbiAgcHV0QmFja1RvUG9vbCgpIHtcbiAgICBpZiAodGhpcy5oaXRMaW1pdCA8PSAwKSB7XG4gICAgICB0aGlzLnRyYWlsTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2woZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudHJhaWxMaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKHRoaXMubm9kZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID49IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgIHRoaXMudHJhaWxMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UucHV0QmFja1RvUG9vbChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50cmFpbExpc3QubGVuZ3RoID0gMDtcbiAgICAgIFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgICB9XG4gIH1cbiAgc3BpbkFyb3VuZChkdDogbnVtYmVyKSB7XG4gICAgdGhpcy5hZGRUcmFpbChkdCk7XG4gICAgdGhpcy5ub2RlLmFuZ2xlICs9IGR0ICogMTUwMDtcbiAgICB0aGlzLmFuZ2xlRGVsdGEgLT0gZHQgKiA0O1xuICAgIHRoaXMuY3VycmVudFJhZGl1cyArPSBkdCAqIDkwO1xuICAgIGlmICh0aGlzLmN1cnJlbnRSYWRpdXMgPiB0aGlzLm1heFJhZGl1cylcbiAgICAgIHRoaXMuY3VycmVudFJhZGl1cyA9IHRoaXMubWF4UmFkaXVzO1xuICAgIHRoaXMubm9kZS54ID0gdGhpcy5waXZvdC54ICsgdGhpcy5jdXJyZW50UmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZURlbHRhKTtcbiAgICB0aGlzLm5vZGUueSA9IHRoaXMucGl2b3QueSArIHRoaXMuY3VycmVudFJhZGl1cyAqIE1hdGguc2luKHRoaXMuYW5nbGVEZWx0YSk7XG4gIH1cbiAgYWRkVHJhaWwoZHQpIHtcbiAgICBpZiAodGhpcy50aW1lID4gMCkgdGhpcy50aW1lIC09IGR0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy50aW1lID0gdGhpcy5pbnRlcnZhbDtcbiAgICAgIGxldCBjbG9uZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICBjbG9uZSA9IFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLnRyYWlsUG9vbC5nZXQoKTtcblxuICAgICAgaWYgKGNsb25lID09IG51bGwpIHtcbiAgICAgICAgY2xvbmUgPSBuZXcgY2MuTm9kZShcIlRyYWlsXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyYWlsTGlzdC5wdXNoKGNsb25lKTtcbiAgICAgIGNsb25lLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICBjbG9uZS5zY2FsZSA9IHRoaXMubm9kZS5zY2FsZTtcbiAgICAgIGNsb25lLm9wYWNpdHkgPSAyMDA7XG4gICAgICBjbG9uZS5hbmdsZSA9IHRoaXMubm9kZS5hbmdsZTtcbiAgICAgIGNsb25lLnpJbmRleCA9IDk5OTk7XG5cbiAgICAgIGNsb25lLnBvc2l0aW9uID0gY2MudjModGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcbiAgICAgIGlmIChjbG9uZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSAhPSBudWxsKVxuICAgICAgICBjbG9uZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgY2MuU3ByaXRlXG4gICAgICAgICkuc3ByaXRlRnJhbWU7XG4gICAgICBlbHNlXG4gICAgICAgIGNsb25lLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcbiAgICAgICAgICBjYy5TcHJpdGVcbiAgICAgICAgKS5zcHJpdGVGcmFtZTtcbiAgICAgIGNsb25lLnNldENvbnRlbnRTaXplKHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpKTtcbiAgICAgIGNjLnR3ZWVuKGNsb25lKS50bygwLjA4LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50VGltZSArPSBkdDtcbiAgICB0aGlzLnNwaW5Bcm91bmQoZHQpO1xuICAgIHRoaXMucHV0QmFja1RvUG9vbCgpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Sword.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1345bSW42tDqoSdTpptD0bR', 'Sword');
// Script/Weapon/Sword.ts

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
var GameController_1 = require("../Controller/GameController");
var Movement_1 = require("../Controller/Movement");
var Utils_1 = require("../Controller/Utils");
var Melee_1 = require("./Melee");
var StartWeapon_1 = require("./StartWeapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftWhip = null;
        _this.rightWhip = null;
        _this.slashSound = null;
        _this.stats = null;
        _this.statsLeft = null;
        _this.currentLevel = _this.level;
        return _this;
    }
    Sword_1 = Sword;
    // LIFE-CYCLE CALLBACKS:
    Sword.prototype.onLoad = function () {
        this.weaponOnLoad();
        Sword_1.instance = this;
        this.stats = this.node.getChildByName("Right").getComponent(Melee_1.default);
        this.statsLeft = this.node.getChildByName("Left").getComponent(Melee_1.default);
        this.timer = this.attackSpeed;
        this.description = "Swings in a half circle arc in front.";
        this.unactiveLeftWhip();
        this.unactiveRightWhip();
    };
    Sword.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase damage by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Add one more attack to the back.";
                    this.updateSwordStats(0, 20, 0, 0);
                    break;
                case 3:
                    this.description = "Increase damage by 30%.";
                    break;
                case 4:
                    this.description = "Reduce the time between attacks by 30%.";
                    this.updateSwordStats(0, 30, 0, 0);
                    break;
                case 5:
                    this.description = "Increase attack area by 30%.";
                    this.updateSwordStats(0, 0, 30, 0);
                    break;
                case 6:
                    this.description = "Increase damage by 40%.";
                    this.updateSwordStats(0, 0, 0, 30);
                    break;
                case 7:
                    this.updateSwordStats(0, 40, 0, 0);
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    Sword.prototype.updateSwordStats = function (bonusBaseDamage, damage, attackSpeed, weaponScale) {
        this.baseDamage += bonusBaseDamage;
        this.attackSpeedPercentage += attackSpeed;
        this.damagePercentage += damage;
        this.weaponScalePercentage += weaponScale;
        this.onStatChange();
    };
    Sword.prototype.start = function () { };
    Sword.prototype.attackRight = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.slashSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightWhip.active = true;
            this.stats.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
            this.unactiveRightWhip();
        }
    };
    Sword.prototype.attackLeft = function () {
        if (this.timer < 0) {
            this.timer = this.attackSpeed;
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.slashSound, false, 1);
            this.leftWhip.active = true;
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
            this.unactiveLeftWhip();
        }
    };
    Sword.prototype.attackBothSide = function () {
        var _this = this;
        if (this.timer < 0) {
            this.stats.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            if (!Movement_1.default.instance.isFlip) {
                this.timer = this.attackSpeed;
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.slashSound, false, 1);
                this.rightWhip.scaleY = this.stats.weaponScaleY * 1;
                this.rightWhip.active = true;
                this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
                this.unactiveRightWhip();
                setTimeout(function () {
                    if (Utils_1.default.getLocal("Sound") == "true")
                        cc.audioEngine.play(_this.slashSound, false, 1);
                    _this.leftWhip.scaleY = _this.stats.weaponScaleY * -1;
                    _this.leftWhip.active = true;
                    _this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
                    _this.unactiveLeftWhip();
                }, 250);
            }
            else {
                this.timer = this.attackSpeed;
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.slashSound, false, 1);
                this.leftWhip.scaleY = this.stats.weaponScaleY * -1;
                this.leftWhip.active = true;
                this.leftWhip.getComponent(cc.Animation).play("SlashAnimation");
                this.unactiveLeftWhip();
                setTimeout(function () {
                    if (Utils_1.default.getLocal("Sound") == "true")
                        cc.audioEngine.play(_this.slashSound, false, 1);
                    _this.rightWhip.scaleY = _this.stats.weaponScaleY * 1;
                    _this.rightWhip.active = true;
                    _this.rightWhip.getComponent(cc.Animation).play("SlashAnimation");
                    _this.unactiveRightWhip();
                }, 250);
            }
        }
    };
    Sword.prototype.unactiveLeftWhip = function () {
        this.scheduleOnce(function () {
            this.leftWhip.active = false;
        }, 0.3);
    };
    Sword.prototype.unactiveRightWhip = function () {
        this.scheduleOnce(function () {
            this.rightWhip.active = false;
        }, 0.3);
    };
    Sword.prototype.perfromAttack = function () {
        if (this.timer < 0) {
            this.node.angle =
                Math.atan2(Movement_1.default.instance.directionVector.y, Movement_1.default.instance.directionVector.x) *
                    (180 / Math.PI);
            if (Movement_1.default.instance.isFlip) {
                this.node.scaleX = -1;
            }
            else
                this.node.scaleX = 1;
        }
        if (this.level < 3) {
            if (!Movement_1.default.instance.isFlip) {
                this.attackRight();
            }
            else {
                this.attackLeft();
            }
        }
        if (this.level >= 3) {
            this.attackBothSide();
        }
    };
    Sword.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.perfromAttack();
    };
    var Sword_1;
    __decorate([
        property(cc.Node)
    ], Sword.prototype, "leftWhip", void 0);
    __decorate([
        property(cc.Node)
    ], Sword.prototype, "rightWhip", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Sword.prototype, "slashSound", void 0);
    Sword = Sword_1 = __decorate([
        ccclass
    ], Sword);
    return Sword;
}(StartWeapon_1.default));
exports.default = Sword;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFN3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCxtREFBOEM7QUFDOUMsNkNBQXdDO0FBQ3hDLGlDQUE0QjtBQUM1Qiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVc7SUFBOUM7UUFBQSxxRUF3TUM7UUFyTUMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGVBQVMsR0FBVSxJQUFJLENBQUM7UUFDeEIsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQTZMNUIsQ0FBQztjQXhNb0IsS0FBSztJQVl4Qix3QkFBd0I7SUFFeEIsc0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDOUIs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QVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O0lBcE1EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNTO0lBUGIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXdNekI7SUFBRCxZQUFDO0NBeE1ELEFBd01DLENBeE1rQyxxQkFBVyxHQXdNN0M7a0JBeE1vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IE1vdmVtZW50IGZyb20gXCIuLi9Db250cm9sbGVyL01vdmVtZW50XCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBNZWxlZSBmcm9tIFwiLi9NZWxlZVwiO1xuaW1wb3J0IFN0YXJ0V2VhcG9uIGZyb20gXCIuL1N0YXJ0V2VhcG9uXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd29yZCBleHRlbmRzIFN0YXJ0V2VhcG9uIHtcbiAgc3RhdGljIGluc3RhbmNlOiBTd29yZDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxlZnRXaGlwOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHJpZ2h0V2hpcDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHNsYXNoU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXI7XG4gIHN0YXRzOiBNZWxlZSA9IG51bGw7XG4gIHN0YXRzTGVmdDogTWVsZWUgPSBudWxsO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy53ZWFwb25PbkxvYWQoKTtcbiAgICBTd29yZC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5zdGF0cyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0XCIpLmdldENvbXBvbmVudChNZWxlZSk7XG4gICAgdGhpcy5zdGF0c0xlZnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMZWZ0XCIpLmdldENvbXBvbmVudChNZWxlZSk7XG4gICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiU3dpbmdzIGluIGEgaGFsZiBjaXJjbGUgYXJjIGluIGZyb250LlwiO1xuICAgIHRoaXMudW5hY3RpdmVMZWZ0V2hpcCgpO1xuICAgIHRoaXMudW5hY3RpdmVSaWdodFdoaXAoKTtcbiAgfVxuXG4gIG9uTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2tMZXZlbCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMub25MZXZlbE1heCgpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBkYW1hZ2UgYnkgMjAlLlwiO1xuICAgICAgICAgIHRoaXMuaXNFcXVpcGVkID0gdHJ1ZTtcbiAgICAgICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5hZGRFcXVpcGVkV2VhcG9uKHRoaXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiQWRkIG9uZSBtb3JlIGF0dGFjayB0byB0aGUgYmFjay5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3b3JkU3RhdHMoMCwgMjAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDMwJS5cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlJlZHVjZSB0aGUgdGltZSBiZXR3ZWVuIGF0dGFja3MgYnkgMzAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3dvcmRTdGF0cygwLCAzMCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBhdHRhY2sgYXJlYSBieSAzMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTd29yZFN0YXRzKDAsIDAsIDMwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSA0MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTd29yZFN0YXRzKDAsIDAsIDAsIDMwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIHRoaXMudXBkYXRlU3dvcmRTdGF0cygwLCA0MCwgMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdXBkYXRlU3dvcmRTdGF0cyhcbiAgICBib251c0Jhc2VEYW1hZ2U6IG51bWJlcixcbiAgICBkYW1hZ2U6IG51bWJlcixcbiAgICBhdHRhY2tTcGVlZDogbnVtYmVyLFxuICAgIHdlYXBvblNjYWxlOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5iYXNlRGFtYWdlICs9IGJvbnVzQmFzZURhbWFnZTtcbiAgICB0aGlzLmF0dGFja1NwZWVkUGVyY2VudGFnZSArPSBhdHRhY2tTcGVlZDtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgKz0gZGFtYWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlICs9IHdlYXBvblNjYWxlO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gIH1cbiAgc3RhcnQoKSB7fVxuXG4gIGF0dGFja1JpZ2h0KCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zbGFzaFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICAgIHRoaXMucmlnaHRXaGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRzLnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5yaWdodFdoaXAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlNsYXNoQW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZVJpZ2h0V2hpcCgpO1xuICAgIH1cbiAgfVxuICBhdHRhY2tMZWZ0KCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNsYXNoU291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMubGVmdFdoaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdHNMZWZ0LnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5sZWZ0V2hpcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2xhc2hBbmltYXRpb25cIik7XG4gICAgICB0aGlzLnVuYWN0aXZlTGVmdFdoaXAoKTtcbiAgICB9XG4gIH1cbiAgYXR0YWNrQm90aFNpZGUoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLnN0YXRzLnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0c0xlZnQuc2V0KFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2VcbiAgICAgICk7XG4gICAgICBpZiAoIU1vdmVtZW50Lmluc3RhbmNlLmlzRmxpcCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNsYXNoU291bmQsIGZhbHNlLCAxKTtcbiAgICAgICAgdGhpcy5yaWdodFdoaXAuc2NhbGVZID0gdGhpcy5zdGF0cy53ZWFwb25TY2FsZVkgKiAxO1xuICAgICAgICB0aGlzLnJpZ2h0V2hpcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJpZ2h0V2hpcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2xhc2hBbmltYXRpb25cIik7XG5cbiAgICAgICAgdGhpcy51bmFjdGl2ZVJpZ2h0V2hpcCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zbGFzaFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICAgICAgdGhpcy5sZWZ0V2hpcC5zY2FsZVkgPSB0aGlzLnN0YXRzLndlYXBvblNjYWxlWSAqIC0xO1xuICAgICAgICAgIHRoaXMubGVmdFdoaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxlZnRXaGlwLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTbGFzaEFuaW1hdGlvblwiKTtcbiAgICAgICAgICB0aGlzLnVuYWN0aXZlTGVmdFdoaXAoKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc2xhc2hTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmxlZnRXaGlwLnNjYWxlWSA9IHRoaXMuc3RhdHMud2VhcG9uU2NhbGVZICogLTE7XG4gICAgICAgIHRoaXMubGVmdFdoaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWZ0V2hpcC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU2xhc2hBbmltYXRpb25cIik7XG4gICAgICAgIHRoaXMudW5hY3RpdmVMZWZ0V2hpcCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zbGFzaFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICAgICAgdGhpcy5yaWdodFdoaXAuc2NhbGVZID0gdGhpcy5zdGF0cy53ZWFwb25TY2FsZVkgKiAxO1xuICAgICAgICAgIHRoaXMucmlnaHRXaGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5yaWdodFdoaXAuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlNsYXNoQW5pbWF0aW9uXCIpO1xuICAgICAgICAgIHRoaXMudW5hY3RpdmVSaWdodFdoaXAoKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bmFjdGl2ZUxlZnRXaGlwKCkge1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubGVmdFdoaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC4zKTtcbiAgfVxuICB1bmFjdGl2ZVJpZ2h0V2hpcCgpIHtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJpZ2h0V2hpcC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LCAwLjMpO1xuICB9XG4gIHBlcmZyb21BdHRhY2soKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLm5vZGUuYW5nbGUgPVxuICAgICAgICBNYXRoLmF0YW4yKFxuICAgICAgICAgIE1vdmVtZW50Lmluc3RhbmNlLmRpcmVjdGlvblZlY3Rvci55LFxuICAgICAgICAgIE1vdmVtZW50Lmluc3RhbmNlLmRpcmVjdGlvblZlY3Rvci54XG4gICAgICAgICkgKlxuICAgICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICBpZiAoTW92ZW1lbnQuaW5zdGFuY2UuaXNGbGlwKSB7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcbiAgICAgIH0gZWxzZSB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXZlbCA8IDMpIHtcbiAgICAgIGlmICghTW92ZW1lbnQuaW5zdGFuY2UuaXNGbGlwKSB7XG4gICAgICAgIHRoaXMuYXR0YWNrUmlnaHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXR0YWNrTGVmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5sZXZlbCA+PSAzKSB7XG4gICAgICB0aGlzLmF0dGFja0JvdGhTaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIHRoaXMucGVyZnJvbUF0dGFjaygpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/StartWeapon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a9f1I2Cy5NwJGDgc1OLGjr', 'StartWeapon');
// Script/Weapon/StartWeapon.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartWeapon = /** @class */ (function (_super) {
    __extends(StartWeapon, _super);
    function StartWeapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 0;
        _this.maxLevel = 7;
        _this.isEquiped = false;
        _this.isResizeable = true;
        _this.baseDamage = 20;
        _this.isLockLevel = false;
        _this.description = null;
        _this.attackSpeed = 2;
        _this.minAS = 1;
        _this.displayIcon = null;
        return _this;
    }
    StartWeapon_1 = StartWeapon;
    // onLoad () {}
    StartWeapon.prototype.start = function () { };
    StartWeapon.prototype.onLevelMax = function () {
        if (this.level >= this.maxLevel) {
            this.isLockLevel = true;
        }
    };
    StartWeapon.prototype.weaponOnLoad = function () {
        StartWeapon_1.instance = this;
        this.overallStat = OverallStats_1.default.instance;
        this.name = this.node.name;
        this.baseAS = this.attackSpeed;
        this.damagePercentage = 0;
        this.attackSpeedPercentage = 0;
        this.weaponScalePercentage = 0;
        this.resultDamagePercentage = 0;
        this.resultAttackSpeedPercentage = 0;
        this.resultWeaponScalePercentage = 0;
        this.onStatChange();
    };
    StartWeapon.prototype.onStatChange = function () {
        this.resultDamagePercentage =
            this.damagePercentage + this.overallStat.getAttackRate();
        this.resultWeaponScalePercentage = this.weaponScalePercentage;
        if (this.isResizeable)
            this.resultWeaponScalePercentage =
                this.weaponScalePercentage + this.overallStat.getWeaponSizeRate();
        this.resultAttackSpeedPercentage =
            this.attackSpeedPercentage + this.overallStat.getHasteRate();
        this.attackSpeed =
            this.baseAS - (this.baseAS * this.resultAttackSpeedPercentage) / 100;
        if (this.attackSpeed < this.minAS)
            this.attackSpeed = this.minAS;
    };
    var StartWeapon_1;
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "level", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "maxLevel", void 0);
    __decorate([
        property(cc.Boolean)
    ], StartWeapon.prototype, "isResizeable", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "baseDamage", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "attackSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], StartWeapon.prototype, "minAS", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StartWeapon.prototype, "displayIcon", void 0);
    StartWeapon = StartWeapon_1 = __decorate([
        ccclass
    ], StartWeapon);
    return StartWeapon;
}(cc.Component));
exports.default = StartWeapon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFN0YXJ0V2VhcG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3RGLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWdFQztRQTdEQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7SUE4Q3JDLENBQUM7b0JBaEVvQixXQUFXO0lBNkI5QixlQUFlO0lBRWYsMkJBQUssR0FBTCxjQUFTLENBQUM7SUFDVixnQ0FBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNFLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxrQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQjtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQzlELElBQUksSUFBSSxDQUFDLFlBQVk7WUFDbkIsSUFBSSxDQUFDLDJCQUEyQjtnQkFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsMkJBQTJCO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxXQUFXO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuRSxDQUFDOztJQTVERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNEO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0U7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztxREFDUTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNLO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDRDtJQUVsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNVO0lBbEJoQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZ0UvQjtJQUFELGtCQUFDO0NBaEVELEFBZ0VDLENBaEV3QyxFQUFFLENBQUMsU0FBUyxHQWdFcEQ7a0JBaEVvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IE92ZXJhbGxTdGF0cyBmcm9tIFwiLi4vUGxheWVyL092ZXJhbGxTdGF0c1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRXZWFwb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IFN0YXJ0V2VhcG9uO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGxldmVsOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1heExldmVsOiBudW1iZXIgPSA3O1xuICBpc0VxdWlwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gIGlzUmVzaXplYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgYmFzZURhbWFnZTogbnVtYmVyID0gMjA7XG4gIGlzTG9ja0xldmVsOiBib29sZWFuID0gZmFsc2U7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGF0dGFja1NwZWVkOiBudW1iZXIgPSAyO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1pbkFTOiBudW1iZXIgPSAxO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGRpc3BsYXlJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIGJhc2VBUzogbnVtYmVyO1xuICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXI7XG4gIGF0dGFja1NwZWVkUGVyY2VudGFnZTogbnVtYmVyO1xuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmVzdWx0RGFtYWdlUGVyY2VudGFnZTogbnVtYmVyO1xuICByZXN1bHRBdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlOiBudW1iZXI7XG4gIG92ZXJhbGxTdGF0OiBPdmVyYWxsU3RhdHM7XG4gIG5hbWU6IHN0cmluZztcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHt9XG4gIG9uTGV2ZWxNYXgoKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5tYXhMZXZlbCkge1xuICAgICAgdGhpcy5pc0xvY2tMZXZlbCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgd2VhcG9uT25Mb2FkKCkge1xuICAgIFN0YXJ0V2VhcG9uLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLm92ZXJhbGxTdGF0ID0gT3ZlcmFsbFN0YXRzLmluc3RhbmNlO1xuICAgIHRoaXMubmFtZSA9IHRoaXMubm9kZS5uYW1lO1xuICAgIHRoaXMuYmFzZUFTID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnJlc3VsdEF0dGFja1NwZWVkUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gIH1cbiAgb25TdGF0Q2hhbmdlKCkge1xuICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSA9XG4gICAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgKyB0aGlzLm92ZXJhbGxTdGF0LmdldEF0dGFja1JhdGUoKTtcbiAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSA9IHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlO1xuICAgIGlmICh0aGlzLmlzUmVzaXplYWJsZSlcbiAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlID1cbiAgICAgICAgdGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgKyB0aGlzLm92ZXJhbGxTdGF0LmdldFdlYXBvblNpemVSYXRlKCk7XG4gICAgdGhpcy5yZXN1bHRBdHRhY2tTcGVlZFBlcmNlbnRhZ2UgPVxuICAgICAgdGhpcy5hdHRhY2tTcGVlZFBlcmNlbnRhZ2UgKyB0aGlzLm92ZXJhbGxTdGF0LmdldEhhc3RlUmF0ZSgpO1xuICAgIHRoaXMuYXR0YWNrU3BlZWQgPVxuICAgICAgdGhpcy5iYXNlQVMgLSAodGhpcy5iYXNlQVMgKiB0aGlzLnJlc3VsdEF0dGFja1NwZWVkUGVyY2VudGFnZSkgLyAxMDA7XG4gICAgaWYgKHRoaXMuYXR0YWNrU3BlZWQgPCB0aGlzLm1pbkFTKSB0aGlzLmF0dGFja1NwZWVkID0gdGhpcy5taW5BUztcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/ThrowableProjectile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3cf38Ri2VGc6DPWJLQub4W', 'ThrowableProjectile');
// Script/Weapon/ThrowableProjectile.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThrowableProjectile = /** @class */ (function (_super) {
    __extends(ThrowableProjectile, _super);
    function ThrowableProjectile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.velocity = cc.Vec2.ZERO;
        _this.sprite = null;
        _this.speed = 1000;
        _this.damage = 20;
        _this.weaponScale = 1;
        _this.duration = 3;
        _this.lavaLand = null;
        _this.targetPos = null;
        _this.dt = 0;
        _this.isLanded = false;
        _this.timer = 100;
        _this.interval = 0.01;
        _this.time = _this.interval;
        _this.lock = false;
        _this.curveY = 0;
        _this.travelTime = 0;
        _this.currentTime = 0;
        _this.previous = null;
        _this.trailList = new Array();
        return _this;
    }
    ThrowableProjectile.prototype.onCollisionStay = function (other, self) {
        if (other.tag == 1) {
            other.node
                .getComponent(EnemyController_1.default)
                .takeDamageWithTick(this.damage, 0.5);
        }
    };
    ThrowableProjectile.prototype.set = function (damagePercentage, baseDamage, weaponScalePercentage, durationPercentage, target, position) {
        this.baseDamange = baseDamage;
        this.damagePercentage = damagePercentage;
        this.weaponScalePercentage = weaponScalePercentage;
        this.durationPercentage = durationPercentage;
        this.targetPos = target;
        this.node.position = position;
        this.node.getComponent(cc.Animation).stop();
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite;
        this.isLanded = false;
        this.lock = false;
        this.timer = 100;
        this.currentTime = 0;
        this.node.getComponent(cc.CircleCollider).enabled = false;
        this.updateStats();
    };
    ThrowableProjectile.prototype.updateStats = function () {
        this.damage =
            (this.damagePercentage / 100) * this.baseDamange + this.baseDamange;
        this.weaponScale =
            (this.weaponScalePercentage / 100) * this.baseScale + this.baseScale;
        this.duration =
            -(this.durationPercentage / 100) * this.baseDuration + this.baseDuration;
    };
    ThrowableProjectile.prototype.onLand = function () {
        if ((!this.isLanded && this.distanceToTarget() < 50) ||
            (!this.isLanded && this.currentTime > this.travelTime)) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.lavaLand, false, 1);
            this.node.zIndex = 1;
            this.trailList.forEach(function (element) {
                ProjectilePooling_1.default.instance.putBackToPool(element);
            });
            this.trailList.length = 0;
            this.node.getComponent(cc.Animation).play("MollySpread");
            this.node.scale = this.weaponScale / 2;
            cc.tween(this.node).to(0.42, { scale: this.weaponScale }).start();
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            this.node.getComponent(cc.CircleCollider).enabled = true;
            this.isLanded = true;
        }
        if (this.isLanded &&
            !this.node.getComponent(cc.Animation).getAnimationState("MollySpread")
                .isPlaying &&
            !this.node.getComponent(cc.Animation).getAnimationState("MollyOnGround")
                .isPlaying) {
            this.timer = this.duration;
            this.node.getComponent(cc.Animation).play("MollyOnGround");
        }
    };
    ThrowableProjectile.prototype.distanceToTarget = function () {
        var distanceX = (this.targetPos.x - this.node.x) * (this.targetPos.x - this.node.x);
        var distanceY = (this.targetPos.y - this.node.y) * (this.targetPos.y - this.node.y);
        var distance = Math.sqrt(distanceX + distanceY);
        return distance;
    };
    ThrowableProjectile.prototype.onLoad = function () {
        this.node.getComponent(cc.CircleCollider).enabled = false;
        this.node.scale = 0.3;
        this.node.zIndex = 10001;
        this.baseDamange = this.damage;
        this.baseDuration = this.duration;
        this.baseScale = this.weaponScale;
        this.damagePercentage = 0;
        this.weaponScalePercentage = 0;
        this.durationPercentage = 0;
    };
    ThrowableProjectile.prototype.start = function () { };
    ThrowableProjectile.prototype.lockTarget = function (dt) {
        if (this.isLanded)
            return;
        if (this.lock)
            return;
        this.lock = true;
        var deltaX = this.targetPos.x - this.node.x;
        var deltaY = this.targetPos.y - this.node.y;
        this.directionVector = cc.v2(deltaX, deltaY);
        this.travelTime = this.distanceToTarget() / this.speed;
        if (this.travelTime > 0.5)
            this.travelTime = 0.5;
        // this.node.x += this.directionVector.normalize().x * this.speed * dt;
        // this.node.y += this.directionVector.normalize().y * this.speed * dt;
        this.velocity = cc.v2(this.directionVector.normalize().x * this.speed, this.directionVector.normalize().y * this.speed + 150);
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.velocity.x, this.velocity.y);
    };
    ThrowableProjectile.prototype.moveNode = function (dt) {
        if (this.isLanded)
            return;
        this.node.scale = 0.3;
        this.addTrail(dt);
        this.curveY = dt * 1000;
        this.velocity.y -= this.curveY;
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.velocity.x * dt * 50, this.velocity.y * dt * 50);
        this.node.angle =
            Math.atan2(this.velocity.y, this.velocity.x) * (180 / Math.PI);
    };
    ThrowableProjectile.prototype.addTrail = function (dt) {
        if (this.time > 0)
            this.time -= dt;
        else {
            this.time = this.interval;
            var clone = null;
            clone = ProjectilePooling_1.default.instance.trailPool.get();
            if (clone == null) {
                clone = new cc.Node("Trail");
            }
            this.trailList.push(clone);
            clone.parent = this.node.parent;
            clone.scale = this.node.scale;
            clone.opacity = 200;
            clone.angle = this.node.angle;
            clone.zIndex = 9999;
            clone.position = cc.v3(this.node.x, this.node.y);
            if (clone.getComponent(cc.Sprite) != null)
                clone.getComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
            else
                clone.addComponent(cc.Sprite).spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
            clone.setContentSize(this.node.getContentSize());
            cc.tween(clone).to(0.08, { opacity: 0 }).start();
        }
    };
    ThrowableProjectile.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            this.node.getComponent(cc.Animation).pause();
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            return;
        }
        this.node.getComponent(cc.Animation).resume();
        if (this.targetPos == null)
            return;
        this.timer -= dt;
        this.currentTime += dt;
        if (this.timer < 0) {
            ProjectilePooling_1.default.instance.putBackToPool(this.node);
        }
        this.moveNode(dt);
        this.lockTarget(dt);
        this.onLand();
    };
    __decorate([
        property(cc.SpriteFrame)
    ], ThrowableProjectile.prototype, "sprite", void 0);
    __decorate([
        property(cc.Float)
    ], ThrowableProjectile.prototype, "damage", void 0);
    __decorate([
        property(cc.Float)
    ], ThrowableProjectile.prototype, "weaponScale", void 0);
    __decorate([
        property(cc.Float)
    ], ThrowableProjectile.prototype, "duration", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ThrowableProjectile.prototype, "lavaLand", void 0);
    ThrowableProjectile = __decorate([
        ccclass
    ], ThrowableProjectile);
    return ThrowableProjectile;
}(cc.Component));
exports.default = ThrowableProjectile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFRocm93YWJsZVByb2plY3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBQ3hDLDREQUF1RDtBQUN2RCxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUE4TUM7UUE3TUMsY0FBUSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRWpDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBQzlCLFdBQUssR0FBRyxJQUFJLENBQUM7UUFFYixZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsUUFBRSxHQUFXLENBQUMsQ0FBQztRQVFmLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBSSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDOztJQStLbkQsQ0FB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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNIO0lBRWhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ047SUFFYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3lEQUNPO0lBWlgsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0E4TXZDO0lBQUQsMEJBQUM7Q0E5TUQsQUE4TUMsQ0E5TWdELEVBQUUsQ0FBQyxTQUFTLEdBOE01RDtrQkE5TW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBFbmVteUNvbnRyb2xsZXIgZnJvbSBcIi4uL0VuZW15L0VuZW15Q29udHJvbGxlclwiO1xuaW1wb3J0IFByb2plY3RpbGVQb29saW5nIGZyb20gXCIuLi9NYW5hZ2VyL1Byb2plY3RpbGVQb29saW5nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJvd2FibGVQcm9qZWN0aWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgdmVsb2NpdHk6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgc3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIHNwZWVkID0gMTAwMDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBkYW1hZ2UgPSAyMDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICB3ZWFwb25TY2FsZSA9IDE7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgZHVyYXRpb24gPSAzO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBsYXZhTGFuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgdGFyZ2V0UG9zOiBjYy5WZWMzID0gbnVsbDtcbiAgZHQ6IG51bWJlciA9IDA7XG4gIGJhc2VEYW1hbmdlOiBudW1iZXI7XG4gIGJhc2VTY2FsZTogbnVtYmVyO1xuICBiYXNlRHVyYXRpb246IG51bWJlcjtcbiAgZGFtYWdlUGVyY2VudGFnZTogbnVtYmVyO1xuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgZHVyYXRpb25QZXJjZW50YWdlOiBudW1iZXI7XG4gIGRpcmVjdGlvblZlY3RvcjogY2MuVmVjMjtcbiAgaXNMYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGltZXIgPSAxMDA7XG4gIGludGVydmFsID0gMC4wMTtcbiAgdGltZSA9IHRoaXMuaW50ZXJ2YWw7XG4gIGxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY3VydmVZOiBudW1iZXIgPSAwO1xuICB0cmF2ZWxUaW1lOiBudW1iZXIgPSAwO1xuICBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcbiAgcHJldmlvdXM6IGNjLk5vZGUgPSBudWxsO1xuICB0cmFpbExpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgb25Db2xsaXNpb25TdGF5KG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgIG90aGVyLm5vZGVcbiAgICAgICAgLmdldENvbXBvbmVudChFbmVteUNvbnRyb2xsZXIpXG4gICAgICAgIC50YWtlRGFtYWdlV2l0aFRpY2sodGhpcy5kYW1hZ2UsIDAuNSk7XG4gICAgfVxuICB9XG4gIHNldChcbiAgICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgYmFzZURhbWFnZTogbnVtYmVyLFxuICAgIHdlYXBvblNjYWxlUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIGR1cmF0aW9uUGVyY2VudGFnZTogbnVtYmVyLFxuICAgIHRhcmdldDogY2MuVmVjMyxcbiAgICBwb3NpdGlvbjogY2MuVmVjM1xuICApIHtcbiAgICB0aGlzLmJhc2VEYW1hbmdlID0gYmFzZURhbWFnZTtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgPSBkYW1hZ2VQZXJjZW50YWdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gd2VhcG9uU2NhbGVQZXJjZW50YWdlO1xuICAgIHRoaXMuZHVyYXRpb25QZXJjZW50YWdlID0gZHVyYXRpb25QZXJjZW50YWdlO1xuICAgIHRoaXMudGFyZ2V0UG9zID0gdGFyZ2V0O1xuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU7XG4gICAgdGhpcy5pc0xhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMubG9jayA9IGZhbHNlO1xuICAgIHRoaXMudGltZXIgPSAxMDA7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlU3RhdHMoKTtcbiAgfVxuICB1cGRhdGVTdGF0cygpIHtcbiAgICB0aGlzLmRhbWFnZSA9XG4gICAgICAodGhpcy5kYW1hZ2VQZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZURhbWFuZ2UgKyB0aGlzLmJhc2VEYW1hbmdlO1xuICAgIHRoaXMud2VhcG9uU2NhbGUgPVxuICAgICAgKHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZVNjYWxlICsgdGhpcy5iYXNlU2NhbGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9XG4gICAgICAtKHRoaXMuZHVyYXRpb25QZXJjZW50YWdlIC8gMTAwKSAqIHRoaXMuYmFzZUR1cmF0aW9uICsgdGhpcy5iYXNlRHVyYXRpb247XG4gIH1cblxuICBvbkxhbmQoKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzTGFuZGVkICYmIHRoaXMuZGlzdGFuY2VUb1RhcmdldCgpIDwgNTApIHx8XG4gICAgICAoIXRoaXMuaXNMYW5kZWQgJiYgdGhpcy5jdXJyZW50VGltZSA+IHRoaXMudHJhdmVsVGltZSlcbiAgICApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubGF2YUxhbmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxO1xuICAgICAgdGhpcy50cmFpbExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRyYWlsTGlzdC5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJNb2xseVNwcmVhZFwiKTtcbiAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMud2VhcG9uU2NhbGUgLyAyO1xuICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjQyLCB7IHNjYWxlOiB0aGlzLndlYXBvblNjYWxlIH0pLnN0YXJ0KCk7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pc0xhbmRlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuaXNMYW5kZWQgJiZcbiAgICAgICF0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuZ2V0QW5pbWF0aW9uU3RhdGUoXCJNb2xseVNwcmVhZFwiKVxuICAgICAgICAuaXNQbGF5aW5nICYmXG4gICAgICAhdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLmdldEFuaW1hdGlvblN0YXRlKFwiTW9sbHlPbkdyb3VuZFwiKVxuICAgICAgICAuaXNQbGF5aW5nXG4gICAgKSB7XG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiTW9sbHlPbkdyb3VuZFwiKTtcbiAgICB9XG4gIH1cbiAgZGlzdGFuY2VUb1RhcmdldCgpIHtcbiAgICB2YXIgZGlzdGFuY2VYID1cbiAgICAgICh0aGlzLnRhcmdldFBvcy54IC0gdGhpcy5ub2RlLngpICogKHRoaXMudGFyZ2V0UG9zLnggLSB0aGlzLm5vZGUueCk7XG4gICAgdmFyIGRpc3RhbmNlWSA9XG4gICAgICAodGhpcy50YXJnZXRQb3MueSAtIHRoaXMubm9kZS55KSAqICh0aGlzLnRhcmdldFBvcy55IC0gdGhpcy5ub2RlLnkpO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVggKyBkaXN0YW5jZVkpO1xuICAgIHJldHVybiBkaXN0YW5jZTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuMztcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDE7XG4gICAgdGhpcy5iYXNlRGFtYW5nZSA9IHRoaXMuZGFtYWdlO1xuICAgIHRoaXMuYmFzZUR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMud2VhcG9uU2NhbGU7XG4gICAgdGhpcy5kYW1hZ2VQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UgPSAwO1xuICB9XG4gIHN0YXJ0KCkge31cbiAgbG9ja1RhcmdldChkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNMYW5kZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5sb2NrKSByZXR1cm47XG4gICAgdGhpcy5sb2NrID0gdHJ1ZTtcbiAgICB2YXIgZGVsdGFYID0gdGhpcy50YXJnZXRQb3MueCAtIHRoaXMubm9kZS54O1xuICAgIHZhciBkZWx0YVkgPSB0aGlzLnRhcmdldFBvcy55IC0gdGhpcy5ub2RlLnk7XG4gICAgdGhpcy5kaXJlY3Rpb25WZWN0b3IgPSBjYy52MihkZWx0YVgsIGRlbHRhWSk7XG4gICAgdGhpcy50cmF2ZWxUaW1lID0gdGhpcy5kaXN0YW5jZVRvVGFyZ2V0KCkgLyB0aGlzLnNwZWVkO1xuICAgIGlmICh0aGlzLnRyYXZlbFRpbWUgPiAwLjUpIHRoaXMudHJhdmVsVGltZSA9IDAuNTtcbiAgICAvLyB0aGlzLm5vZGUueCArPSB0aGlzLmRpcmVjdGlvblZlY3Rvci5ub3JtYWxpemUoKS54ICogdGhpcy5zcGVlZCAqIGR0O1xuICAgIC8vIHRoaXMubm9kZS55ICs9IHRoaXMuZGlyZWN0aW9uVmVjdG9yLm5vcm1hbGl6ZSgpLnkgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGNjLnYyKFxuICAgICAgdGhpcy5kaXJlY3Rpb25WZWN0b3Iubm9ybWFsaXplKCkueCAqIHRoaXMuc3BlZWQsXG4gICAgICB0aGlzLmRpcmVjdGlvblZlY3Rvci5ub3JtYWxpemUoKS55ICogdGhpcy5zcGVlZCArIDE1MFxuICAgICk7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoXG4gICAgICB0aGlzLnZlbG9jaXR5LngsXG4gICAgICB0aGlzLnZlbG9jaXR5LnlcbiAgICApO1xuICB9XG4gIG1vdmVOb2RlKGR0KSB7XG4gICAgaWYgKHRoaXMuaXNMYW5kZWQpIHJldHVybjtcbiAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjM7XG4gICAgdGhpcy5hZGRUcmFpbChkdCk7XG4gICAgdGhpcy5jdXJ2ZVkgPSBkdCAqIDEwMDA7XG4gICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuY3VydmVZO1xuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKFxuICAgICAgdGhpcy52ZWxvY2l0eS54ICogZHQgKiA1MCxcbiAgICAgIHRoaXMudmVsb2NpdHkueSAqIGR0ICogNTBcbiAgICApO1xuICAgIHRoaXMubm9kZS5hbmdsZSA9XG4gICAgICBNYXRoLmF0YW4yKHRoaXMudmVsb2NpdHkueSwgdGhpcy52ZWxvY2l0eS54KSAqICgxODAgLyBNYXRoLlBJKTtcbiAgfVxuICBhZGRUcmFpbChkdCkge1xuICAgIGlmICh0aGlzLnRpbWUgPiAwKSB0aGlzLnRpbWUgLT0gZHQ7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRpbWUgPSB0aGlzLmludGVydmFsO1xuICAgICAgbGV0IGNsb25lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgIGNsb25lID0gUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UudHJhaWxQb29sLmdldCgpO1xuXG4gICAgICBpZiAoY2xvbmUgPT0gbnVsbCkge1xuICAgICAgICBjbG9uZSA9IG5ldyBjYy5Ob2RlKFwiVHJhaWxcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhaWxMaXN0LnB1c2goY2xvbmUpO1xuICAgICAgY2xvbmUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgIGNsb25lLnNjYWxlID0gdGhpcy5ub2RlLnNjYWxlO1xuICAgICAgY2xvbmUub3BhY2l0eSA9IDIwMDtcbiAgICAgIGNsb25lLmFuZ2xlID0gdGhpcy5ub2RlLmFuZ2xlO1xuICAgICAgY2xvbmUuekluZGV4ID0gOTk5OTtcblxuICAgICAgY2xvbmUucG9zaXRpb24gPSBjYy52Myh0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgaWYgKGNsb25lLmdldENvbXBvbmVudChjYy5TcHJpdGUpICE9IG51bGwpXG4gICAgICAgIGNsb25lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcbiAgICAgICAgICBjYy5TcHJpdGVcbiAgICAgICAgKS5zcHJpdGVGcmFtZTtcbiAgICAgIGVsc2VcbiAgICAgICAgY2xvbmUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgIGNjLlNwcml0ZVxuICAgICAgICApLnNwcml0ZUZyYW1lO1xuICAgICAgY2xvbmUuc2V0Q29udGVudFNpemUodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkpO1xuICAgICAgY2MudHdlZW4oY2xvbmUpLnRvKDAuMDgsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGF1c2UoKTtcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucmVzdW1lKCk7XG4gICAgaWYgKHRoaXMudGFyZ2V0UG9zID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICBQcm9qZWN0aWxlUG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlTm9kZShkdCk7XG4gICAgdGhpcy5sb2NrVGFyZ2V0KGR0KTtcblxuICAgIHRoaXMub25MYW5kKCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Trident.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0a27u68OxAsa5L6qIjpdoh', 'Trident');
// Script/Weapon/Trident.ts

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
var GameController_1 = require("../Controller/GameController");
var Movement_1 = require("../Controller/Movement");
var Utils_1 = require("../Controller/Utils");
var Melee_1 = require("./Melee");
var StartWeapon_1 = require("./StartWeapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Trident = /** @class */ (function (_super) {
    __extends(Trident, _super);
    function Trident() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftThrust = null;
        _this.rightThrust = null;
        _this.midThrust = null;
        _this.thrustSound = null;
        _this.statsRight = null;
        _this.statsLeft = null;
        _this.statsMiddle = null;
        _this.currentLevel = _this.level;
        return _this;
    }
    Trident.prototype.onLoad = function () {
        this.weaponOnLoad();
        this.statsRight = this.node.getChildByName("Right").getComponent(Melee_1.default);
        this.statsLeft = this.node.getChildByName("Left").getComponent(Melee_1.default);
        this.statsMiddle = this.node.getChildByName("Middle").getComponent(Melee_1.default);
        this.timer = this.attackSpeed;
        this.description = "Mid ranged stab attack in front.";
        this.unactiveLeftThrust();
        this.unactiveRightThrust();
        this.unactiveMiddleThrust();
    };
    Trident.prototype.updateSwordStats = function (bonusBaseDamage, damage, attackSpeed, weaponScale) {
        this.baseDamage += bonusBaseDamage;
        this.attackSpeedPercentage += attackSpeed;
        this.damagePercentage += damage;
        this.weaponScalePercentage += weaponScale;
        this.onStatChange();
    };
    Trident.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase damage by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Stab 1 extra time, forming a V shape.";
                    this.updateSwordStats(0, 20, 0, 0);
                    break;
                case 3:
                    this.description = "Reduce time between attacks by 15%";
                    break;
                case 4:
                    this.description = "Increase damage by 40%";
                    this.updateSwordStats(0, 0, 15, 0);
                    break;
                case 5:
                    this.description = "Increase attack area by 25%.";
                    this.updateSwordStats(0, 40, 0, 0);
                    break;
                case 6:
                    this.description = "Thrust 3 times, in a fork-like shape.";
                    this.updateSwordStats(0, 0, 0, 25);
                    break;
                case 7:
                    break;
                default:
                    break;
            }
        }
        return true;
    };
    Trident.prototype.unactiveLeftThrust = function () {
        this.scheduleOnce(function () {
            this.leftThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.unactiveRightThrust = function () {
        this.scheduleOnce(function () {
            this.rightThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.unactiveMiddleThrust = function () {
        this.scheduleOnce(function () {
            this.midThrust.active = false;
        }, 0.3);
    };
    Trident.prototype.perfromAttack = function () {
        if (this.timer < 0)
            this.node.angle =
                Math.atan2(Movement_1.default.instance.directionVector.y, Movement_1.default.instance.directionVector.x) *
                    (180 / Math.PI);
        if (this.level < 3) {
            this.attackMiddle();
        }
        if (this.level >= 7) {
            this.attackAllSide();
        }
        if (this.level >= 3) {
            this.attackV();
        }
    };
    Trident.prototype.attackRight = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightThrust.active = true;
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveRightThrust();
        }
    };
    Trident.prototype.attackMiddle = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.midThrust.active = true;
            this.statsMiddle.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.midThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveMiddleThrust();
        }
    };
    Trident.prototype.attackLeft = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.leftThrust.active = true;
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveLeftThrust();
        }
    };
    Trident.prototype.attackAllSide = function () {
        if (this.timer < 0) {
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsMiddle.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.timer = this.attackSpeed;
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.midThrust.active = true;
            this.midThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveLeftThrust();
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.rightThrust.active = true;
                this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveRightThrust();
            }, 0.15);
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.leftThrust.scaleX = this.statsRight.weaponScaleX;
                this.leftThrust.active = true;
                this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveLeftThrust();
            }, 0.3);
        }
    };
    Trident.prototype.attackV = function () {
        if (this.timer < 0) {
            this.statsRight.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            this.statsLeft.set(this.baseDamage, this.resultDamagePercentage, this.resultWeaponScalePercentage);
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.thrustSound, false, 1);
            this.timer = this.attackSpeed;
            this.rightThrust.active = true;
            this.rightThrust.getComponent(cc.Animation).play("ThrustAnimation");
            this.unactiveRightThrust();
            this.scheduleOnce(function () {
                if (Utils_1.default.getLocal("Sound") == "true")
                    cc.audioEngine.play(this.thrustSound, false, 1);
                this.leftThrust.scaleX = this.statsRight.weaponScaleX;
                this.leftThrust.active = true;
                this.leftThrust.getComponent(cc.Animation).play("ThrustAnimation");
                this.unactiveLeftThrust();
            }, 0.15);
        }
    };
    Trident.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.perfromAttack();
    };
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "leftThrust", void 0);
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "rightThrust", void 0);
    __decorate([
        property(cc.Node)
    ], Trident.prototype, "midThrust", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Trident.prototype, "thrustSound", void 0);
    Trident = __decorate([
        ccclass
    ], Trident);
    return Trident;
}(StartWeapon_1.default));
exports.default = Trident;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFRyaWRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELG1EQUE4QztBQUM5Qyw2Q0FBd0M7QUFDeEMsaUNBQTRCO0FBQzVCLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBVztJQUFoRDtRQUFBLHFFQXNPQztRQXBPQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxnQkFBVSxHQUFVLElBQUksQ0FBQztRQUN6QixlQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVUsSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQzs7SUF5TjVCLENBQUM7SUF2TkMsd0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFD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LENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFuT0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDVTtJQVJkLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FzTzNCO0lBQUQsY0FBQztDQXRPRCxBQXNPQyxDQXRPb0MscUJBQVcsR0FzTy9DO2tCQXRPb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBNb3ZlbWVudCBmcm9tIFwiLi4vQ29udHJvbGxlci9Nb3ZlbWVudFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgTWVsZWUgZnJvbSBcIi4vTWVsZWVcIjtcbmltcG9ydCBTdGFydFdlYXBvbiBmcm9tIFwiLi9TdGFydFdlYXBvblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpZGVudCBleHRlbmRzIFN0YXJ0V2VhcG9uIHtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxlZnRUaHJ1c3Q6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcmlnaHRUaHJ1c3Q6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbWlkVGhydXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgdGhydXN0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXI7XG4gIHN0YXRzUmlnaHQ6IE1lbGVlID0gbnVsbDtcbiAgc3RhdHNMZWZ0OiBNZWxlZSA9IG51bGw7XG4gIHN0YXRzTWlkZGxlOiBNZWxlZSA9IG51bGw7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMud2VhcG9uT25Mb2FkKCk7XG4gICAgdGhpcy5zdGF0c1JpZ2h0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUmlnaHRcIikuZ2V0Q29tcG9uZW50KE1lbGVlKTtcbiAgICB0aGlzLnN0YXRzTGVmdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxlZnRcIikuZ2V0Q29tcG9uZW50KE1lbGVlKTtcbiAgICB0aGlzLnN0YXRzTWlkZGxlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTWlkZGxlXCIpLmdldENvbXBvbmVudChNZWxlZSk7XG4gICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiTWlkIHJhbmdlZCBzdGFiIGF0dGFjayBpbiBmcm9udC5cIjtcbiAgICB0aGlzLnVuYWN0aXZlTGVmdFRocnVzdCgpO1xuICAgIHRoaXMudW5hY3RpdmVSaWdodFRocnVzdCgpO1xuICAgIHRoaXMudW5hY3RpdmVNaWRkbGVUaHJ1c3QoKTtcbiAgfVxuICB1cGRhdGVTd29yZFN0YXRzKFxuICAgIGJvbnVzQmFzZURhbWFnZTogbnVtYmVyLFxuICAgIGRhbWFnZTogbnVtYmVyLFxuICAgIGF0dGFja1NwZWVkOiBudW1iZXIsXG4gICAgd2VhcG9uU2NhbGU6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmJhc2VEYW1hZ2UgKz0gYm9udXNCYXNlRGFtYWdlO1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlICs9IGF0dGFja1NwZWVkO1xuICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSArPSBkYW1hZ2U7XG4gICAgdGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2UgKz0gd2VhcG9uU2NhbGU7XG4gICAgdGhpcy5vblN0YXRDaGFuZ2UoKTtcbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDIwJS5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZFdlYXBvbih0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlN0YWIgMSBleHRyYSB0aW1lLCBmb3JtaW5nIGEgViBzaGFwZS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3b3JkU3RhdHMoMCwgMjAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVkdWNlIHRpbWUgYmV0d2VlbiBhdHRhY2tzIGJ5IDE1JVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDQwJVwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3dvcmRTdGF0cygwLCAwLCAxNSwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBhdHRhY2sgYXJlYSBieSAyNSUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTd29yZFN0YXRzKDAsIDQwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlRocnVzdCAzIHRpbWVzLCBpbiBhIGZvcmstbGlrZSBzaGFwZS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN3b3JkU3RhdHMoMCwgMCwgMCwgMjUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHVuYWN0aXZlTGVmdFRocnVzdCgpIHtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmxlZnRUaHJ1c3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC4zKTtcbiAgfVxuICB1bmFjdGl2ZVJpZ2h0VGhydXN0KCkge1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmlnaHRUaHJ1c3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC4zKTtcbiAgfVxuICB1bmFjdGl2ZU1pZGRsZVRocnVzdCgpIHtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm1pZFRocnVzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LCAwLjMpO1xuICB9XG4gIHBlcmZyb21BdHRhY2soKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKVxuICAgICAgdGhpcy5ub2RlLmFuZ2xlID1cbiAgICAgICAgTWF0aC5hdGFuMihcbiAgICAgICAgICBNb3ZlbWVudC5pbnN0YW5jZS5kaXJlY3Rpb25WZWN0b3IueSxcbiAgICAgICAgICBNb3ZlbWVudC5pbnN0YW5jZS5kaXJlY3Rpb25WZWN0b3IueFxuICAgICAgICApICpcbiAgICAgICAgKDE4MCAvIE1hdGguUEkpO1xuICAgIGlmICh0aGlzLmxldmVsIDwgMykge1xuICAgICAgdGhpcy5hdHRhY2tNaWRkbGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gNykge1xuICAgICAgdGhpcy5hdHRhY2tBbGxTaWRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxldmVsID49IDMpIHtcbiAgICAgIHRoaXMuYXR0YWNrVigpO1xuICAgIH1cbiAgfVxuICBhdHRhY2tSaWdodCgpIHtcbiAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5yaWdodFRocnVzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0c1JpZ2h0LnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5yaWdodFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZVJpZ2h0VGhydXN0KCk7XG4gICAgfVxuICB9XG4gIGF0dGFja01pZGRsZSgpIHtcbiAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5taWRUaHJ1c3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdHNNaWRkbGUuc2V0KFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLm1pZFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZU1pZGRsZVRocnVzdCgpO1xuICAgIH1cbiAgfVxuICBhdHRhY2tMZWZ0KCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy50aHJ1c3RTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgdGhpcy50aW1lciA9IHRoaXMuYXR0YWNrU3BlZWQ7XG4gICAgICB0aGlzLmxlZnRUaHJ1c3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdHNMZWZ0LnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5sZWZ0VGhydXN0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJUaHJ1c3RBbmltYXRpb25cIik7XG4gICAgICB0aGlzLnVuYWN0aXZlTGVmdFRocnVzdCgpO1xuICAgIH1cbiAgfVxuICBhdHRhY2tBbGxTaWRlKCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy5zdGF0c1JpZ2h0LnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0c0xlZnQuc2V0KFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXRzTWlkZGxlLnNldChcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlXG4gICAgICApO1xuXG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5hdHRhY2tTcGVlZDtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMubWlkVGhydXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLm1pZFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZUxlZnRUaHJ1c3QoKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnRocnVzdFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMucmlnaHRUaHJ1c3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yaWdodFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgICB0aGlzLnVuYWN0aXZlUmlnaHRUaHJ1c3QoKTtcbiAgICAgIH0sIDAuMTUpO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgICAgdGhpcy5sZWZ0VGhydXN0LnNjYWxlWCA9IHRoaXMuc3RhdHNSaWdodC53ZWFwb25TY2FsZVg7XG4gICAgICAgIHRoaXMubGVmdFRocnVzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnRUaHJ1c3QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlRocnVzdEFuaW1hdGlvblwiKTtcbiAgICAgICAgdGhpcy51bmFjdGl2ZUxlZnRUaHJ1c3QoKTtcbiAgICAgIH0sIDAuMyk7XG4gICAgfVxuICB9XG4gIGF0dGFja1YoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLnN0YXRzUmlnaHQuc2V0KFxuICAgICAgICB0aGlzLmJhc2VEYW1hZ2UsXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXRzTGVmdC5zZXQoXG4gICAgICAgIHRoaXMuYmFzZURhbWFnZSxcbiAgICAgICAgdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlLFxuICAgICAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZVxuICAgICAgKTtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudGhydXN0U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5yaWdodFRocnVzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5yaWdodFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgdGhpcy51bmFjdGl2ZVJpZ2h0VGhydXN0KCk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy50aHJ1c3RTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmxlZnRUaHJ1c3Quc2NhbGVYID0gdGhpcy5zdGF0c1JpZ2h0LndlYXBvblNjYWxlWDtcbiAgICAgICAgdGhpcy5sZWZ0VGhydXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGVmdFRocnVzdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVGhydXN0QW5pbWF0aW9uXCIpO1xuICAgICAgICB0aGlzLnVuYWN0aXZlTGVmdFRocnVzdCgpO1xuICAgICAgfSwgMC4xNSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICB0aGlzLnBlcmZyb21BdHRhY2soKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/Weapon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '114abOp/y5Ny4Oop+uvGgCq', 'Weapon');
// Script/Weapon/Weapon.ts

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
var GameController_1 = require("../Controller/GameController");
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 0;
        _this.maxLevel = 7;
        _this.isEquiped = false;
        _this.isResizeable = true;
        _this.baseDamage = 20;
        _this.isLockLevel = false;
        _this.description = null;
        _this.attackSpeed = 2;
        _this.minAS = 1;
        _this.displayIcon = null;
        return _this;
    }
    Weapon_1 = Weapon;
    // onLoad () {}
    Weapon.prototype.start = function () { };
    Weapon.prototype.onLevelMax = function () {
        if (this.level >= this.maxLevel) {
            this.isLockLevel = true;
        }
    };
    Weapon.prototype.weaponOnLoad = function () {
        Weapon_1.instance = this;
        GameController_1.default.instance.addWeapon(this);
        this.overallStat = OverallStats_1.default.instance;
        this.name = this.node.name;
        this.baseAS = this.attackSpeed;
        this.damagePercentage = 0;
        this.attackSpeedPercentage = 0;
        this.weaponScalePercentage = 0;
        this.resultDamagePercentage = 0;
        this.resultAttackSpeedPercentage = 0;
        this.resultWeaponScalePercentage = 0;
        this.onStatChange();
    };
    Weapon.prototype.onStatChange = function () {
        this.resultDamagePercentage =
            this.damagePercentage + this.overallStat.getAttackRate();
        this.resultWeaponScalePercentage = this.weaponScalePercentage;
        if (this.isResizeable)
            this.resultWeaponScalePercentage =
                this.weaponScalePercentage + this.overallStat.getWeaponSizeRate();
        this.resultAttackSpeedPercentage =
            this.attackSpeedPercentage + this.overallStat.getHasteRate();
        this.attackSpeed =
            this.baseAS - (this.baseAS * this.resultAttackSpeedPercentage) / 100;
        if (this.attackSpeed < this.minAS)
            this.attackSpeed = this.minAS;
    };
    var Weapon_1;
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "level", void 0);
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "maxLevel", void 0);
    __decorate([
        property(cc.Boolean)
    ], Weapon.prototype, "isResizeable", void 0);
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "baseDamage", void 0);
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "attackSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], Weapon.prototype, "minAS", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Weapon.prototype, "displayIcon", void 0);
    Weapon = Weapon_1 = __decorate([
        ccclass
    ], Weapon);
    return Weapon;
}(cc.Component));
exports.default = Weapon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXFdlYXBvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBaUVDO1FBOURDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQStDckMsQ0FBQztlQWpFb0IsTUFBTTtJQTZCekIsZUFBZTtJQUVmLHNCQUFLLEdBQUwsY0FBUyxDQUFDO0lBQ1YsMkJBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELDZCQUFZLEdBQVo7UUFDRSxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2Qix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELDZCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsc0JBQXNCO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDOUQsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUNuQixJQUFJLENBQUMsMkJBQTJCO2dCQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQywyQkFBMkI7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVc7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkUsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25FLENBQUM7O0lBN0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0Q7SUFFbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDRTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNRO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNEO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ1U7SUFsQmhCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FpRTFCO0lBQUQsYUFBQztDQWpFRCxBQWlFQyxDQWpFbUMsRUFBRSxDQUFDLFNBQVMsR0FpRS9DO2tCQWpFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBPdmVyYWxsU3RhdHMgZnJvbSBcIi4uL1BsYXllci9PdmVyYWxsU3RhdHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogV2VhcG9uO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGxldmVsOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1heExldmVsOiBudW1iZXIgPSA3O1xuICBpc0VxdWlwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gIGlzUmVzaXplYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgYmFzZURhbWFnZTogbnVtYmVyID0gMjA7XG4gIGlzTG9ja0xldmVsOiBib29sZWFuID0gZmFsc2U7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGF0dGFja1NwZWVkOiBudW1iZXIgPSAyO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1pbkFTOiBudW1iZXIgPSAxO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGRpc3BsYXlJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIGJhc2VBUzogbnVtYmVyO1xuICBkYW1hZ2VQZXJjZW50YWdlOiBudW1iZXI7XG4gIGF0dGFja1NwZWVkUGVyY2VudGFnZTogbnVtYmVyO1xuICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmVzdWx0RGFtYWdlUGVyY2VudGFnZTogbnVtYmVyO1xuICByZXN1bHRBdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlOiBudW1iZXI7XG4gIG92ZXJhbGxTdGF0OiBPdmVyYWxsU3RhdHM7XG4gIG5hbWU6IHN0cmluZztcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHt9XG4gIG9uTGV2ZWxNYXgoKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5tYXhMZXZlbCkge1xuICAgICAgdGhpcy5pc0xvY2tMZXZlbCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgd2VhcG9uT25Mb2FkKCkge1xuICAgIFdlYXBvbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkV2VhcG9uKHRoaXMpO1xuICAgIHRoaXMub3ZlcmFsbFN0YXQgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2U7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5ub2RlLm5hbWU7XG4gICAgdGhpcy5iYXNlQVMgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5hdHRhY2tTcGVlZFBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMud2VhcG9uU2NhbGVQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnJlc3VsdERhbWFnZVBlcmNlbnRhZ2UgPSAwO1xuICAgIHRoaXMucmVzdWx0QXR0YWNrU3BlZWRQZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSA9IDA7XG4gICAgdGhpcy5vblN0YXRDaGFuZ2UoKTtcbiAgfVxuICBvblN0YXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5yZXN1bHREYW1hZ2VQZXJjZW50YWdlID1cbiAgICAgIHRoaXMuZGFtYWdlUGVyY2VudGFnZSArIHRoaXMub3ZlcmFsbFN0YXQuZ2V0QXR0YWNrUmF0ZSgpO1xuICAgIHRoaXMucmVzdWx0V2VhcG9uU2NhbGVQZXJjZW50YWdlID0gdGhpcy53ZWFwb25TY2FsZVBlcmNlbnRhZ2U7XG4gICAgaWYgKHRoaXMuaXNSZXNpemVhYmxlKVxuICAgICAgdGhpcy5yZXN1bHRXZWFwb25TY2FsZVBlcmNlbnRhZ2UgPVxuICAgICAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSArIHRoaXMub3ZlcmFsbFN0YXQuZ2V0V2VhcG9uU2l6ZVJhdGUoKTtcbiAgICB0aGlzLnJlc3VsdEF0dGFja1NwZWVkUGVyY2VudGFnZSA9XG4gICAgICB0aGlzLmF0dGFja1NwZWVkUGVyY2VudGFnZSArIHRoaXMub3ZlcmFsbFN0YXQuZ2V0SGFzdGVSYXRlKCk7XG4gICAgdGhpcy5hdHRhY2tTcGVlZCA9XG4gICAgICB0aGlzLmJhc2VBUyAtICh0aGlzLmJhc2VBUyAqIHRoaXMucmVzdWx0QXR0YWNrU3BlZWRQZXJjZW50YWdlKSAvIDEwMDtcbiAgICBpZiAodGhpcy5hdHRhY2tTcGVlZCA8IHRoaXMubWluQVMpIHRoaXMuYXR0YWNrU3BlZWQgPSB0aGlzLm1pbkFTO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TerrainTile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ca5aR9BG1Dho0xvn2ra92f', 'TerrainTile');
// Script/TerrainTile.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tilePosition = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () { };
    NewClass.prototype.start = function () { };
    __decorate([
        property(cc.Vec2)
    ], NewClass.prototype, "tilePosition", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUZXJyYWluVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQVdDO1FBVEMsa0JBQVksR0FBWSxJQUFJLENBQUM7O1FBUTdCLGlCQUFpQjtJQUNuQixDQUFDO0lBUEMsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU4sY0FBVSxDQUFDO0lBRVgsd0JBQUssR0FBTCxjQUFTLENBQUM7SUFOVjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBRlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVc1QjtJQUFELGVBQUM7Q0FYRCxBQVdDLENBWHFDLEVBQUUsQ0FBQyxTQUFTLEdBV2pEO2tCQVhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5WZWMyKVxuICB0aWxlUG9zaXRpb246IGNjLlZlYzIgPSBudWxsO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHt9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Weapon/AxeThrower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e79aVG3qNNep+5RXQzL/d+', 'AxeThrower');
// Script/Weapon/AxeThrower.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var ProjectilePooling_1 = require("../Manager/ProjectilePooling");
var SpiralProjectile_1 = require("./SpiralProjectile");
var Weapon_1 = require("./Weapon");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AxeThrower = /** @class */ (function (_super) {
    __extends(AxeThrower, _super);
    function AxeThrower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.axe = null;
        _this.player = null;
        _this.parent = null;
        _this.throwSound = null;
        _this.hitLimit = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    AxeThrower_1 = AxeThrower;
    AxeThrower.prototype.onLoad = function () {
        AxeThrower_1.instance = this;
        this.weaponOnLoad();
        this.durationPercentage = 0;
        this.timer = 0;
        var initCount = 10;
        this.description = "Throw an axe that spirals outward from the player.";
        for (var i = 0; i < initCount; ++i) {
            var axe = cc.instantiate(this.axe);
            axe.parent = this.node.parent.parent;
            ProjectilePooling_1.default.instance.axePool.put(axe);
        }
    };
    AxeThrower.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "Increase size of axe by 20%. Increase damage of axe by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedWeapon(this);
                    break;
                case 2:
                    this.description = "Reduce delay between attacks by 20%.";
                    this.updateStats(20, 0, 0, 0, 20, 0);
                    break;
                case 3:
                    this.description = "Increase damage by 33%";
                    this.updateStats(0, 0, 0, 20, 0, 0);
                    break;
                case 4:
                    this.description = "Remove hit limit, and lasts 1 second longer.";
                    this.updateStats(33, 0, 0, 0, 0, 0);
                    break;
                case 5:
                    this.description = "Increase attack size by 30%.";
                    this.updateStats(0, 0, 99999999, 0, 0, 33.3);
                    break;
                case 6:
                    this.description = "Increase damage by 50%.";
                    this.updateStats(0, 0, 0, 0, 30, 0);
                    break;
                case 7:
                    this.updateStats(50, 0, 0, 0, 0, 0);
                    break;
                default:
                    break;
            }
        }
    };
    AxeThrower.prototype.spawnAxe = function () {
        var axe = null;
        if (ProjectilePooling_1.default.instance.axePool.size() > 0) {
            axe = ProjectilePooling_1.default.instance.axePool.get();
        }
        else {
            axe = cc.instantiate(this.axe);
        }
        axe.opacity = 0;
        cc.tween(axe).to(0.05, { opacity: 255 }).start();
        axe.parent = this.parent;
        axe
            .getComponent(SpiralProjectile_1.default)
            .setStats(this.resultDamagePercentage, this.baseDamage, this.resultWeaponScalePercentage, this.hitLimit, this.durationPercentage, this.player);
    };
    AxeThrower.prototype.updateStats = function (damagePercentage, baseDamage, hitLimit, attackSpeedPercentage, weaponScalePercentage, durationPercentage) {
        this.damagePercentage += damagePercentage;
        this.baseDamage += baseDamage;
        this.hitLimit += hitLimit;
        this.attackSpeedPercentage += attackSpeedPercentage;
        this.weaponScalePercentage += weaponScalePercentage;
        this.durationPercentage += durationPercentage;
        this.onStatChange();
    };
    AxeThrower.prototype.throwAxe = function () {
        if (this.timer < 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.throwSound, false, 1);
            this.timer = this.attackSpeed;
            this.spawnAxe();
        }
    };
    AxeThrower.prototype.start = function () { };
    AxeThrower.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.throwAxe();
    };
    var AxeThrower_1;
    __decorate([
        property(cc.Prefab)
    ], AxeThrower.prototype, "axe", void 0);
    __decorate([
        property(cc.Node)
    ], AxeThrower.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], AxeThrower.prototype, "parent", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AxeThrower.prototype, "throwSound", void 0);
    AxeThrower = AxeThrower_1 = __decorate([
        ccclass
    ], AxeThrower);
    return AxeThrower;
}(Weapon_1.default));
exports.default = AxeThrower;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25cXEF4ZVRocm93ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUV4QyxrRUFBNkQ7QUFDN0QsdURBQWtEO0FBQ2xELG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBTTtJQUE5QztRQUFBLHFFQTZIQztRQTFIQyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBZ0g1QixDQUFDO21CQTdIb0IsVUFBVTtJQWU3QiwyQkFBTSxHQUFOO1FBQ0UsWUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxvREFBb0QsQ0FBQztRQUN4RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENB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QUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELDBCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7SUF6SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDUztJQVRiLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2SDlCO0lBQUQsaUJBQUM7Q0E3SEQsQUE2SEMsQ0E3SHVDLGdCQUFNLEdBNkg3QztrQkE3SG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9JdGVtL0l0ZW1cIjtcbmltcG9ydCBQcm9qZWN0aWxlUG9vbGluZyBmcm9tIFwiLi4vTWFuYWdlci9Qcm9qZWN0aWxlUG9vbGluZ1wiO1xuaW1wb3J0IFNwaXJhbFByb2plY3RpbGUgZnJvbSBcIi4vU3BpcmFsUHJvamVjdGlsZVwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi9XZWFwb25cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4ZVRocm93ZXIgZXh0ZW5kcyBXZWFwb24ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEF4ZVRocm93ZXI7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGF4ZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICB0aHJvd1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICB0aW1lcjogbnVtYmVyO1xuICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgaGl0TGltaXQ6IG51bWJlciA9IDEwO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuXG4gIG9uTG9hZCgpIHtcbiAgICBBeGVUaHJvd2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLndlYXBvbk9uTG9hZCgpO1xuICAgIHRoaXMuZHVyYXRpb25QZXJjZW50YWdlID0gMDtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICBsZXQgaW5pdENvdW50ID0gMTA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiVGhyb3cgYW4gYXhlIHRoYXQgc3BpcmFscyBvdXR3YXJkIGZyb20gdGhlIHBsYXllci5cIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRDb3VudDsgKytpKSB7XG4gICAgICBsZXQgYXhlID0gY2MuaW5zdGFudGlhdGUodGhpcy5heGUpO1xuICAgICAgYXhlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UuYXhlUG9vbC5wdXQoYXhlKTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZSBzaXplIG9mIGF4ZSBieSAyMCUuIEluY3JlYXNlIGRhbWFnZSBvZiBheGUgYnkgMjAlLlwiO1xuICAgICAgICAgIHRoaXMuaXNFcXVpcGVkID0gdHJ1ZTtcbiAgICAgICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5hZGRFcXVpcGVkV2VhcG9uKHRoaXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVkdWNlIGRlbGF5IGJldHdlZW4gYXR0YWNrcyBieSAyMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygyMCwgMCwgMCwgMCwgMjAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgZGFtYWdlIGJ5IDMzJVwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMCwgMCwgMCwgMjAsIDAsIDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVtb3ZlIGhpdCBsaW1pdCwgYW5kIGxhc3RzIDEgc2Vjb25kIGxvbmdlci5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDMzLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGF0dGFjayBzaXplIGJ5IDMwJS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDAsIDAsIDk5OTk5OTk5LCAwLCAwLCAzMy4zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIGRhbWFnZSBieSA1MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygwLCAwLCAwLCAwLCAzMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3Bhd25BeGUoKSB7XG4gICAgbGV0IGF4ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgaWYgKFByb2plY3RpbGVQb29saW5nLmluc3RhbmNlLmF4ZVBvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgYXhlID0gUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UuYXhlUG9vbC5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXhlID0gY2MuaW5zdGFudGlhdGUodGhpcy5heGUpO1xuICAgIH1cblxuICAgIGF4ZS5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2VlbihheGUpLnRvKDAuMDUsIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgYXhlLnBhcmVudCA9IHRoaXMucGFyZW50O1xuXG4gICAgYXhlXG4gICAgICAuZ2V0Q29tcG9uZW50KFNwaXJhbFByb2plY3RpbGUpXG4gICAgICAuc2V0U3RhdHMoXG4gICAgICAgIHRoaXMucmVzdWx0RGFtYWdlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5iYXNlRGFtYWdlLFxuICAgICAgICB0aGlzLnJlc3VsdFdlYXBvblNjYWxlUGVyY2VudGFnZSxcbiAgICAgICAgdGhpcy5oaXRMaW1pdCxcbiAgICAgICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UsXG4gICAgICAgIHRoaXMucGxheWVyXG4gICAgICApO1xuICB9XG4gIHVwZGF0ZVN0YXRzKFxuICAgIGRhbWFnZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBiYXNlRGFtYWdlOiBudW1iZXIsXG4gICAgaGl0TGltaXQ6IG51bWJlcixcbiAgICBhdHRhY2tTcGVlZFBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICBkdXJhdGlvblBlcmNlbnRhZ2U6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmRhbWFnZVBlcmNlbnRhZ2UgKz0gZGFtYWdlUGVyY2VudGFnZTtcbiAgICB0aGlzLmJhc2VEYW1hZ2UgKz0gYmFzZURhbWFnZTtcbiAgICB0aGlzLmhpdExpbWl0ICs9IGhpdExpbWl0O1xuICAgIHRoaXMuYXR0YWNrU3BlZWRQZXJjZW50YWdlICs9IGF0dGFja1NwZWVkUGVyY2VudGFnZTtcbiAgICB0aGlzLndlYXBvblNjYWxlUGVyY2VudGFnZSArPSB3ZWFwb25TY2FsZVBlcmNlbnRhZ2U7XG4gICAgdGhpcy5kdXJhdGlvblBlcmNlbnRhZ2UgKz0gZHVyYXRpb25QZXJjZW50YWdlO1xuICAgIHRoaXMub25TdGF0Q2hhbmdlKCk7XG4gIH1cbiAgdGhyb3dBeGUoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnRocm93U291bmQsIGZhbHNlLCAxKTtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLmF0dGFja1NwZWVkO1xuICAgICAgdGhpcy5zcGF3bkF4ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLm9uTGV2ZWxVcCgpO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmlzRXF1aXBlZCkgcmV0dXJuO1xuICAgIHRoaXMudGltZXIgLT0gZHQ7XG4gICAgdGhpcy50aHJvd0F4ZSgpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5413AXpftMwoBmVDgpSUYq', 'GameController');
// Script/Controller/GameController.ts

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
var SlotController_1 = require("./SlotController");
var UIController_1 = require("./UIController");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameOverSound = null;
        _this.timer = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.killAmount = 0;
        _this.coinAmount = 0;
        _this.dynamicBuff = new Array();
        _this.itemList = new Array();
        _this.weaponList = new Array();
        _this.equipedWeapon = new Array();
        _this.equipedItem = new Array();
        _this.isGameOver = null;
        return _this;
    }
    GameController_1 = GameController;
    GameController.prototype.onLoad = function () {
        GameController_1.instance = this;
        Utils_1.default.isPause = false;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
    };
    GameController.prototype.gainKill = function () {
        this.killAmount++;
        UIController_1.default.instance.updateKillLabel(this.killAmount);
    };
    GameController.prototype.gainCoin = function (amount) {
        this.coinAmount += amount;
        UIController_1.default.instance.updateCoinLabel(this.coinAmount);
    };
    GameController.prototype.takeDamage = function () {
        for (var i = 0; i < this.dynamicBuff.length; i++) {
            this.dynamicBuff[i].onTakeDamage();
        }
    };
    GameController.prototype.addWeapon = function (weapon) {
        this.weaponList.push(weapon);
    };
    GameController.prototype.addEquipedWeapon = function (weapon) {
        this.equipedWeapon.push(weapon);
    };
    GameController.prototype.addItem = function (item) {
        this.itemList.push(item);
    };
    GameController.prototype.addEquipedItem = function (item) {
        this.equipedItem.push(item);
    };
    GameController.prototype.onLevelUp = function () {
        UIController_1.default.instance.onLevelUp();
    };
    GameController.prototype.start = function () {
        SlotController_1.default.instance.updateSlot();
    };
    GameController.prototype.tuyetvong = function () {
        for (var i = 0; i < this.weaponList.length; i++) {
            this.weaponList[i].onLevelUp();
        }
        for (var i = 0; i < this.itemList.length; i++) {
            this.itemList[i].onLevelUp();
        }
    };
    GameController.prototype.onGameOver = function () {
        this.isGameOver = true;
        this.equipedItem.forEach(function (element) {
            element.isEquiped = false;
        });
        this.equipedWeapon.forEach(function (element) {
            element.isEquiped = false;
        });
        this.scheduleOnce(function () {
            this.node.getComponent(cc.AudioSource).pause();
            UIController_1.default.instance.onGameOver();
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.gameOverSound, false, 1);
        }, 3);
    };
    GameController.prototype.update = function (dt) {
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.AudioSource).resume();
        else
            this.node.getComponent(cc.AudioSource).pause();
        if (Utils_1.default.isPause) {
            return;
        }
        this.timer += dt;
    };
    var GameController_1;
    __decorate([
        property(cc.AudioClip)
    ], GameController.prototype, "gameOverSound", void 0);
    GameController = GameController_1 = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXVGQztRQXBGQyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQix3QkFBd0I7UUFDeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQzNDLGNBQVEsR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQ3hDLGdCQUFVLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUMxQyxtQkFBYSxHQUFlLElBQUksS0FBSyxFQUFPLENBQUM7UUFDN0MsaUJBQVcsR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQzNDLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQTBFN0IsQ0FBQzt1QkF2Rm9CLGNBQWM7SUFjakMsK0JBQU0sR0FBTjtRQUNFLGdCQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMvQixlQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUV0QixFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUs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VUFBTyxFQUFFO1FBQ1AsSUFBSSxlQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU07WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsSUFBSSxlQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7O0lBbkZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7eURBQ1k7SUFIaEIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXVGbEM7SUFBRCxxQkFBQztDQXZGRCxBQXVGQyxDQXZGMkMsRUFBRSxDQUFDLFNBQVMsR0F1RnZEO2tCQXZGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYW5lT2ZSZWdlbmVyYXRpb24gZnJvbSBcIi4uL0l0ZW0vQmFuZU9mUmVnZW5lcmF0aW9uXCI7XG5pbXBvcnQgQmxvb2R5VGVhciBmcm9tIFwiLi4vSXRlbS9CbG9vZHlUZWFyXCI7XG5pbXBvcnQgRHVtYmJlbGwgZnJvbSBcIi4uL0l0ZW0vRHVtYmJlbGxcIjtcbmltcG9ydCBFeWVQYXRjaCBmcm9tIFwiLi4vSXRlbS9FeWVQYXRjaFwiO1xuaW1wb3J0IEdyb3d0aFBpbGwgZnJvbSBcIi4uL0l0ZW0vR3Jvd3RoUGlsbFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL0l0ZW0vSXRlbVwiO1xuaW1wb3J0IEF4ZVRocm93ZXIgZnJvbSBcIi4uL1dlYXBvbi9BeGVUaHJvd2VyXCI7XG5pbXBvcnQgQm93IGZyb20gXCIuLi9XZWFwb24vQm93XCI7XG5pbXBvcnQgTW9sbHlUaHJvd2VyIGZyb20gXCIuLi9XZWFwb24vTW9sbHlUaHJvd2VyXCI7XG5pbXBvcnQgU2h1cmlrZW5UaHJvd2VyIGZyb20gXCIuLi9XZWFwb24vU2h1cmlrZW5UaHJvd2VyXCI7XG5pbXBvcnQgU3dvcmQgZnJvbSBcIi4uL1dlYXBvbi9Td29yZFwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi4vV2VhcG9uL1dlYXBvblwiO1xuaW1wb3J0IFNsb3RDb250cm9sbGVyIGZyb20gXCIuL1Nsb3RDb250cm9sbGVyXCI7XG5pbXBvcnQgVUlDb250cm9sbGVyIGZyb20gXCIuL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogR2FtZUNvbnRyb2xsZXI7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGdhbWVPdmVyU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXIgPSAwO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAga2lsbEFtb3VudDogbnVtYmVyID0gMDtcbiAgY29pbkFtb3VudDogbnVtYmVyID0gMDtcbiAgZHluYW1pY0J1ZmY6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICBpdGVtTGlzdDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIHdlYXBvbkxpc3Q6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICBlcXVpcGVkV2VhcG9uOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgZXF1aXBlZEl0ZW06IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICBpc0dhbWVPdmVyOiBib29sZWFuID0gbnVsbDtcbiAgb25Mb2FkKCkge1xuICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcbiAgICBVdGlscy5pc1BhdXNlID0gZmFsc2U7XG5cbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgfVxuICBnYWluS2lsbCgpIHtcbiAgICB0aGlzLmtpbGxBbW91bnQrKztcbiAgICBVSUNvbnRyb2xsZXIuaW5zdGFuY2UudXBkYXRlS2lsbExhYmVsKHRoaXMua2lsbEFtb3VudCk7XG4gIH1cbiAgZ2FpbkNvaW4oYW1vdW50KSB7XG4gICAgdGhpcy5jb2luQW1vdW50ICs9IGFtb3VudDtcbiAgICBVSUNvbnRyb2xsZXIuaW5zdGFuY2UudXBkYXRlQ29pbkxhYmVsKHRoaXMuY29pbkFtb3VudCk7XG4gIH1cbiAgdGFrZURhbWFnZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHluYW1pY0J1ZmYubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZHluYW1pY0J1ZmZbaV0ub25UYWtlRGFtYWdlKCk7XG4gICAgfVxuICB9XG4gIGFkZFdlYXBvbih3ZWFwb246IFdlYXBvbikge1xuICAgIHRoaXMud2VhcG9uTGlzdC5wdXNoKHdlYXBvbik7XG4gIH1cbiAgYWRkRXF1aXBlZFdlYXBvbih3ZWFwb246IFdlYXBvbikge1xuICAgIHRoaXMuZXF1aXBlZFdlYXBvbi5wdXNoKHdlYXBvbik7XG4gIH1cbiAgYWRkSXRlbShpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy5pdGVtTGlzdC5wdXNoKGl0ZW0pO1xuICB9XG4gIGFkZEVxdWlwZWRJdGVtKGl0ZW06IEl0ZW0pIHtcbiAgICB0aGlzLmVxdWlwZWRJdGVtLnB1c2goaXRlbSk7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIFVJQ29udHJvbGxlci5pbnN0YW5jZS5vbkxldmVsVXAoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIFNsb3RDb250cm9sbGVyLmluc3RhbmNlLnVwZGF0ZVNsb3QoKTtcbiAgfVxuICB0dXlldHZvbmcoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlYXBvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMud2VhcG9uTGlzdFtpXS5vbkxldmVsVXAoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1MaXN0W2ldLm9uTGV2ZWxVcCgpO1xuICAgIH1cbiAgfVxuICBvbkdhbWVPdmVyKCkge1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgdGhpcy5lcXVpcGVkSXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmlzRXF1aXBlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuZXF1aXBlZFdlYXBvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmlzRXF1aXBlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGF1c2UoKTtcbiAgICAgIFVJQ29udHJvbGxlci5pbnN0YW5jZS5vbkdhbWVPdmVyKCk7XG4gICAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVPdmVyU291bmQsIGZhbHNlLCAxKTtcbiAgICB9LCAzKTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucmVzdW1lKCk7XG4gICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wYXVzZSgpO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/BloodyTear.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19443nnzbdGfbWyTgARfsWa', 'BloodyTear');
// Script/Item/BloodyTear.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BloodyTear = /** @class */ (function (_super) {
    __extends(BloodyTear, _super);
    function BloodyTear() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healingAmount = 2;
        _this.healingChance = 30;
        _this.refreshTimer = 0.25;
        _this.timer = 0.25;
        _this.killCount = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    BloodyTear_1 = BloodyTear;
    BloodyTear.prototype.onLoad = function () {
        BloodyTear_1.instance = this;
        this.itemOnLoad();
        this.player = PlayerController_1.default.instance;
        this.description =
            "When defeating a target, there is a 30% chance to life-steal 2 HP.";
    };
    BloodyTear.prototype.start = function () { };
    BloodyTear.prototype.updateStats = function (additionHealingAmount, additionHealingChange) {
        this.healingAmount += additionHealingAmount;
        this.healingChance += additionHealingChange;
    };
    BloodyTear.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "When defeating a target, there is a 30% chance to life-steal 4 HP.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description =
                        "When defeating a target, there is a 30% chance to life-steal 6 HP.";
                    this.updateStats(2, 0);
                    break;
                case 3:
                    this.updateStats(2, 0);
                    break;
                default:
                    break;
            }
        }
    };
    BloodyTear.prototype.healPlayer = function (dt) {
        this.timer -= dt;
        if (this.timer < 0) {
            if (this.killCount != GameController_1.default.instance.killAmount) {
                this.timer = this.refreshTimer;
                this.killCount = GameController_1.default.instance.killAmount;
                var healChange = this.healingChance / 100;
                var random = Math.random();
                if (random < healChange) {
                    this.player.heal(this.healingAmount);
                }
            }
        }
    };
    BloodyTear.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.healPlayer(dt);
    };
    var BloodyTear_1;
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "healingAmount", void 0);
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "healingChance", void 0);
    __decorate([
        property(cc.Float)
    ], BloodyTear.prototype, "refreshTimer", void 0);
    BloodyTear = BloodyTear_1 = __decorate([
        ccclass
    ], BloodyTear);
    return BloodyTear;
}(Item_1.default));
exports.default = BloodyTear;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxCbG9vZHlUZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFDeEMsK0RBQTBEO0FBQzFELCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBSTtJQUE1QztRQUFBLHFFQXVFQztRQXBFQyxtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUM1QixXQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXJCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQTRENUIsQ0FBQzttQkF2RW9CLFVBQVU7SUFZN0IsMkJBQU0sR0FBTjtRQUNFLFlBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLDBCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVztZQUNkLG9FQUFvRSxDQUFDO0lBQ3pFLENBQUM7SUFFRCwwQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUNWLGdDQUFXLEdBQVgsVUFBWSxxQkFBNkIsRUFBRSxxQkFBNkI7UUFDdEUsSUFBSSxDQUFDLGFBQWEsSUFBSSxxQkFBcUIsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxJQUFJLHFCQUFxQixDQUFDO0lBQzlDLENBQUM7SUFDRCw4QkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVzt3QkFDZCxvRUFBb0UsQ0FBQztvQkFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLHdCQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVc7d0JBQ2Qsb0VBQW9FLENBQUM7b0JBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFDRCwrQkFBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO2dCQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRTNCLElBQUksTUFBTSxHQUFHLFVBQVUsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN0QzthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7O0lBbkVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNTO0lBUFQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXVFOUI7SUFBRCxpQkFBQztDQXZFRCxBQXVFQyxDQXZFdUMsY0FBSSxHQXVFM0M7a0JBdkVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi4vUGxheWVyL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb29keVRlYXIgZXh0ZW5kcyBJdGVtIHtcbiAgc3RhdGljIGluc3RhbmNlOiBCbG9vZHlUZWFyO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGhlYWxpbmdBbW91bnQ6IG51bWJlciA9IDI7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgaGVhbGluZ0NoYW5jZTogbnVtYmVyID0gMzA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgcmVmcmVzaFRpbWVyOiBudW1iZXIgPSAwLjI1O1xuICB0aW1lcjogbnVtYmVyID0gMC4yNTtcbiAgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyO1xuICBraWxsQ291bnQ6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIG9uTG9hZCgpIHtcbiAgICBCbG9vZHlUZWFyLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgICB0aGlzLnBsYXllciA9IFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICBcIldoZW4gZGVmZWF0aW5nIGEgdGFyZ2V0LCB0aGVyZSBpcyBhIDMwJSBjaGFuY2UgdG8gbGlmZS1zdGVhbCAyIEhQLlwiO1xuICB9XG5cbiAgc3RhcnQoKSB7fVxuICB1cGRhdGVTdGF0cyhhZGRpdGlvbkhlYWxpbmdBbW91bnQ6IG51bWJlciwgYWRkaXRpb25IZWFsaW5nQ2hhbmdlOiBudW1iZXIpIHtcbiAgICB0aGlzLmhlYWxpbmdBbW91bnQgKz0gYWRkaXRpb25IZWFsaW5nQW1vdW50O1xuICAgIHRoaXMuaGVhbGluZ0NoYW5jZSArPSBhZGRpdGlvbkhlYWxpbmdDaGFuZ2U7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJXaGVuIGRlZmVhdGluZyBhIHRhcmdldCwgdGhlcmUgaXMgYSAzMCUgY2hhbmNlIHRvIGxpZmUtc3RlYWwgNCBIUC5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiV2hlbiBkZWZlYXRpbmcgYSB0YXJnZXQsIHRoZXJlIGlzIGEgMzAlIGNoYW5jZSB0byBsaWZlLXN0ZWFsIDYgSFAuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygyLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMiwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhlYWxQbGF5ZXIoZHQ6IG51bWJlcikge1xuICAgIHRoaXMudGltZXIgLT0gZHQ7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICBpZiAodGhpcy5raWxsQ291bnQgIT0gR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2Uua2lsbEFtb3VudCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5yZWZyZXNoVGltZXI7XG4gICAgICAgIHRoaXMua2lsbENvdW50ID0gR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2Uua2lsbEFtb3VudDtcbiAgICAgICAgdmFyIGhlYWxDaGFuZ2UgPSB0aGlzLmhlYWxpbmdDaGFuY2UgLyAxMDA7XG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgIGlmIChyYW5kb20gPCBoZWFsQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuaGVhbCh0aGlzLmhlYWxpbmdBbW91bnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy5oZWFsUGxheWVyKGR0KTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b005LVzC1K0qBYhpqip+/e', 'EnemyController');
// Script/Enemy/EnemyController.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var OverallStats_1 = require("../Player/OverallStats");
var PlayerController_1 = require("../Player/PlayerController");
var EnemyManager_1 = require("./EnemyManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyController = /** @class */ (function (_super) {
    __extends(EnemyController, _super);
    function EnemyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0.5;
        _this.maxHp = 20;
        _this.scale = 1;
        _this.currentHp = 20;
        _this.damage = 2;
        _this.expDropAmount = 8;
        _this.hitSound = null;
        _this.damageTick = 0;
        _this.player = null;
        _this.gainKilled = false;
        _this.isInRange = false;
        return _this;
    }
    EnemyController.prototype.onLoad = function () {
        this.isFlip = false;
        this.isInRange = false;
        this.player = this.node.parent.getChildByName("PlayerBase");
        this.node.zIndex = 30000;
        this.moveVec = cc.Vec2.ZERO;
        this.currentHp = this.maxHp;
        this.deltaX = 0;
    };
    EnemyController.prototype.setter = function (speed, maxHp, scale, damage, expDropAmount) {
        this.speed = speed;
        this.maxHp = maxHp;
        this.scale = scale;
        this.damage = damage;
        this.currentHp = maxHp;
        this.expDropAmount = expDropAmount;
        this.getComponent(cc.Collider).enabled = true;
        this.node.opacity = 255;
        this.isKilled = false;
        this.gainKilled = false;
        this.isInRange = false;
        this.node.scale = scale;
    };
    EnemyController.prototype.resetStat = function () {
        this.currentHp = this.maxHp;
        this.getComponent(cc.Collider).enabled = true;
        this.node.opacity = 255;
        this.isKilled = false;
        this.gainKilled = false;
        this.isInRange = false;
    };
    EnemyController.prototype.takeDamage = function (damage) {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.hitSound, false, 0.5);
        var crit = OverallStats_1.default.instance.getCritChance() / 100;
        if (Math.random() <= crit) {
            damage =
                (damage * (OverallStats_1.default.instance.getCritDamageRate() + 150)) / 100;
        }
        this.currentHp -= damage;
        this.node.getChildByName("OnHitFrame").active = true;
        this.scheduleOnce(function () {
            this.node.getChildByName("OnHitFrame").active = false;
        }, 0.025);
    };
    EnemyController.prototype.takeDamageWithTick = function (damage, tickRate) {
        if (this.takeDamageTick > 0)
            return;
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.hitSound, false, 0.5);
        this.takeDamageTick = tickRate;
        var crit = OverallStats_1.default.instance.getCritChance() / 100;
        if (Math.random() <= crit) {
            damage =
                (damage * (OverallStats_1.default.instance.getCritDamageRate() + 150)) / 100;
        }
        this.currentHp -= damage;
        this.node.getChildByName("OnHitFrame").active = true;
        this.scheduleOnce(function () {
            this.node.getChildByName("OnHitFrame").active = false;
        }, 0.025);
    };
    EnemyController.prototype.onCollisionStay = function (other, self) {
        if (other.tag == 0 && this.damageTick < 0) {
            this.damageTick = 0.5;
            PlayerController_1.default.instance.takeDamage(this.damage);
        }
    };
    EnemyController.prototype.start = function () { };
    EnemyController.prototype.moveToPlayer = function (dt) {
        if (this.currentHp > 0) {
            var deltaX = this.player.x - this.node.x;
            var deltaY = this.player.y - this.node.y;
            var normalizedDelta = cc.v2(deltaX, deltaY).normalize();
            var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (length > 2) {
                if (normalizedDelta.x > 0) {
                    this.isFlip = false;
                    this.node.scaleX = this.scale;
                }
                else {
                    this.isFlip = true;
                    this.node.scaleX = -this.scale;
                }
            }
            this.node.x += normalizedDelta.x * this.speed * 175 * dt;
            this.node.y += normalizedDelta.y * this.speed * 175 * dt;
        }
    };
    EnemyController.prototype.dropExp = function () {
        ObjectPooling_1.default.instance.generateExp(this.node, this.expDropAmount);
    };
    EnemyController.prototype.dropFood = function () {
        ObjectPooling_1.default.instance.generateFood(this.node);
    };
    EnemyController.prototype.dropCoin = function () {
        var countAmount = Utils_1.default.randomFloor(10, 50);
        ObjectPooling_1.default.instance.generateCoin(this.node, countAmount);
    };
    EnemyController.prototype.dropRainbowExp = function () {
        ObjectPooling_1.default.instance.generateMagnet(this.node);
    };
    EnemyController.prototype.calculateDistance = function () {
        var distanceX = (this.player.x - this.node.x) * (this.player.x - this.node.x);
        var distanceY = (this.player.y - this.node.y) * (this.player.y - this.node.y);
        this.distance = Math.sqrt(distanceX + distanceY);
    };
    EnemyController.prototype.onEnemyKill = function (dt) {
        var _this = this;
        if (this.currentHp <= 0) {
            this.isKilled = true;
            if (this.isFlip) {
                this.node.x += 150 * dt;
                this.node.opacity -= 500 * dt;
            }
            else {
                this.node.x -= 150 * dt;
                this.node.opacity -= 500 * dt;
            }
            if (this.isKilled && !this.gainKilled) {
                GameController_1.default.instance.gainKill();
                var random = Math.random();
                if (random < 1 / 2000) {
                    this.dropRainbowExp();
                }
                else if (random < 1 / 200) {
                    this.dropFood();
                }
                else if (random < 1 / 90) {
                    this.dropCoin();
                }
                else
                    this.dropExp();
                this.gainKilled = true;
                this.node.getComponent(cc.PolygonCollider).enabled = false;
                setTimeout(function () {
                    EnemyManager_1.default.instance.putBackToPool(_this.node);
                }, 300);
            }
        }
    };
    EnemyController.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            this.node.getComponent(cc.Animation).pause();
            return;
        }
        this.node.getComponent(cc.Animation).resume();
        if (this.currentHp > 0) {
            this.isKilled = false;
        }
        this.damageTick -= dt;
        this.takeDamageTick -= dt;
        this.moveToPlayer(dt);
        this.onEnemyKill(dt);
        this.calculateDistance();
    };
    __decorate([
        property(cc.Float)
    ], EnemyController.prototype, "speed", void 0);
    __decorate([
        property(cc.Float)
    ], EnemyController.prototype, "maxHp", void 0);
    __decorate([
        property(cc.Float)
    ], EnemyController.prototype, "scale", void 0);
    __decorate([
        property(cc.Float)
    ], EnemyController.prototype, "damage", void 0);
    __decorate([
        property(cc.Integer)
    ], EnemyController.prototype, "expDropAmount", void 0);
    __decorate([
        property(cc.AudioClip)
    ], EnemyController.prototype, "hitSound", void 0);
    EnemyController = __decorate([
        ccclass
    ], EnemyController);
    return EnemyController;
}(cc.Component));
exports.default = EnemyController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFDeEMsMERBQXFEO0FBRXJELHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBeUxDO1FBdkxDLFdBQUssR0FBRyxHQUFHLENBQUM7UUFFWixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFFZixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFHdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUl2QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQW1LcEIsQ0FBQztJQWhLQyxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFD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O2tCQXpMb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IG9iamVjdFBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvT2JqZWN0UG9vbGluZ1wiO1xuXG5pbXBvcnQgT3ZlcmFsbFN0YXRzIGZyb20gXCIuLi9QbGF5ZXIvT3ZlcmFsbFN0YXRzXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi4vUGxheWVyL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBFbmVteU1hbmFnZXIgZnJvbSBcIi4vRW5lbXlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHNwZWVkID0gMC41O1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIG1heEhwID0gMjA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgc2NhbGUgPSAxO1xuICBjdXJyZW50SHAgPSAyMDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBkYW1hZ2UgPSAyO1xuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgZXhwRHJvcEFtb3VudDogbnVtYmVyID0gODtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgaGl0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGRhbWFnZVRpY2s6IG51bWJlciA9IDA7XG4gIGRpc3RhbmNlOiBudW1iZXI7XG4gIGlzRmxpcDogYm9vbGVhbjtcbiAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgbW92ZVZlYzogY2MuVmVjMjtcbiAgZGVsdGFYOiBudW1iZXI7XG4gIGlzS2lsbGVkOiBib29sZWFuO1xuICBnYWluS2lsbGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGlzSW5SYW5nZSA9IGZhbHNlO1xuICBkZWx0YVRpbWU6IG51bWJlcjtcbiAgdGFrZURhbWFnZVRpY2s6IG51bWJlcjtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuaXNGbGlwID0gZmFsc2U7XG4gICAgdGhpcy5pc0luUmFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnBsYXllciA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJCYXNlXCIpO1xuICAgIHRoaXMubm9kZS56SW5kZXggPSAzMDAwMDtcbiAgICB0aGlzLm1vdmVWZWMgPSBjYy5WZWMyLlpFUk87XG4gICAgdGhpcy5jdXJyZW50SHAgPSB0aGlzLm1heEhwO1xuICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgfVxuICBzZXR0ZXIoXG4gICAgc3BlZWQ6IG51bWJlcixcbiAgICBtYXhIcDogbnVtYmVyLFxuICAgIHNjYWxlOiBudW1iZXIsXG4gICAgZGFtYWdlOiBudW1iZXIsXG4gICAgZXhwRHJvcEFtb3VudDogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLm1heEhwID0gbWF4SHA7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgIHRoaXMuY3VycmVudEhwID0gbWF4SHA7XG4gICAgdGhpcy5leHBEcm9wQW1vdW50ID0gZXhwRHJvcEFtb3VudDtcbiAgICB0aGlzLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy5pc0tpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FpbktpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNJblJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlLnNjYWxlID0gc2NhbGU7XG4gIH1cbiAgcmVzZXRTdGF0KCkge1xuICAgIHRoaXMuY3VycmVudEhwID0gdGhpcy5tYXhIcDtcbiAgICB0aGlzLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy5pc0tpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FpbktpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNJblJhbmdlID0gZmFsc2U7XG4gIH1cbiAgdGFrZURhbWFnZShkYW1hZ2U6IG51bWJlcikge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmhpdFNvdW5kLCBmYWxzZSwgMC41KTtcbiAgICB2YXIgY3JpdCA9IE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5nZXRDcml0Q2hhbmNlKCkgLyAxMDA7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPD0gY3JpdCkge1xuICAgICAgZGFtYWdlID1cbiAgICAgICAgKGRhbWFnZSAqIChPdmVyYWxsU3RhdHMuaW5zdGFuY2UuZ2V0Q3JpdERhbWFnZVJhdGUoKSArIDE1MCkpIC8gMTAwO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRIcCAtPSBkYW1hZ2U7XG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT25IaXRGcmFtZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9uSGl0RnJhbWVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfSwgMC4wMjUpO1xuICB9XG4gIHRha2VEYW1hZ2VXaXRoVGljayhkYW1hZ2U6IG51bWJlciwgdGlja1JhdGU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRha2VEYW1hZ2VUaWNrID4gMCkgcmV0dXJuO1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmhpdFNvdW5kLCBmYWxzZSwgMC41KTtcbiAgICB0aGlzLnRha2VEYW1hZ2VUaWNrID0gdGlja1JhdGU7XG4gICAgdmFyIGNyaXQgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2UuZ2V0Q3JpdENoYW5jZSgpIC8gMTAwO1xuICAgIGlmIChNYXRoLnJhbmRvbSgpIDw9IGNyaXQpIHtcbiAgICAgIGRhbWFnZSA9XG4gICAgICAgIChkYW1hZ2UgKiAoT3ZlcmFsbFN0YXRzLmluc3RhbmNlLmdldENyaXREYW1hZ2VSYXRlKCkgKyAxNTApKSAvIDEwMDtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SHAgLT0gZGFtYWdlO1xuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9uSGl0RnJhbWVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPbkhpdEZyYW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sIDAuMDI1KTtcbiAgfVxuXG4gIG9uQ29sbGlzaW9uU3RheShvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgaWYgKG90aGVyLnRhZyA9PSAwICYmIHRoaXMuZGFtYWdlVGljayA8IDApIHtcbiAgICAgIHRoaXMuZGFtYWdlVGljayA9IDAuNTtcbiAgICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UudGFrZURhbWFnZSh0aGlzLmRhbWFnZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7fVxuICBtb3ZlVG9QbGF5ZXIoZHQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmN1cnJlbnRIcCA+IDApIHtcbiAgICAgIHZhciBkZWx0YVggPSB0aGlzLnBsYXllci54IC0gdGhpcy5ub2RlLng7XG4gICAgICB2YXIgZGVsdGFZID0gdGhpcy5wbGF5ZXIueSAtIHRoaXMubm9kZS55O1xuICAgICAgbGV0IG5vcm1hbGl6ZWREZWx0YSA9IGNjLnYyKGRlbHRhWCwgZGVsdGFZKS5ub3JtYWxpemUoKTtcbiAgICAgIGxldCBsZW5ndGggPSBNYXRoLnNxcnQoZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZKTtcbiAgICAgIGlmIChsZW5ndGggPiAyKSB7XG4gICAgICAgIGlmIChub3JtYWxpemVkRGVsdGEueCA+IDApIHtcbiAgICAgICAgICB0aGlzLmlzRmxpcCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLnNjYWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNGbGlwID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLXRoaXMuc2NhbGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5ub2RlLnggKz0gbm9ybWFsaXplZERlbHRhLnggKiB0aGlzLnNwZWVkICogMTc1ICogZHQ7XG4gICAgICB0aGlzLm5vZGUueSArPSBub3JtYWxpemVkRGVsdGEueSAqIHRoaXMuc3BlZWQgKiAxNzUgKiBkdDtcbiAgICB9XG4gIH1cbiAgZHJvcEV4cCgpIHtcbiAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLmdlbmVyYXRlRXhwKHRoaXMubm9kZSwgdGhpcy5leHBEcm9wQW1vdW50KTtcbiAgfVxuICBkcm9wRm9vZCgpIHtcbiAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLmdlbmVyYXRlRm9vZCh0aGlzLm5vZGUpO1xuICB9XG4gIGRyb3BDb2luKCkge1xuICAgIGxldCBjb3VudEFtb3VudCA9IFV0aWxzLnJhbmRvbUZsb29yKDEwLCA1MCk7XG4gICAgb2JqZWN0UG9vbGluZy5pbnN0YW5jZS5nZW5lcmF0ZUNvaW4odGhpcy5ub2RlLCBjb3VudEFtb3VudCk7XG4gIH1cbiAgZHJvcFJhaW5ib3dFeHAoKSB7XG4gICAgb2JqZWN0UG9vbGluZy5pbnN0YW5jZS5nZW5lcmF0ZU1hZ25ldCh0aGlzLm5vZGUpO1xuICB9XG4gIGNhbGN1bGF0ZURpc3RhbmNlKCkge1xuICAgIHZhciBkaXN0YW5jZVggPVxuICAgICAgKHRoaXMucGxheWVyLnggLSB0aGlzLm5vZGUueCkgKiAodGhpcy5wbGF5ZXIueCAtIHRoaXMubm9kZS54KTtcbiAgICB2YXIgZGlzdGFuY2VZID1cbiAgICAgICh0aGlzLnBsYXllci55IC0gdGhpcy5ub2RlLnkpICogKHRoaXMucGxheWVyLnkgLSB0aGlzLm5vZGUueSk7XG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZVggKyBkaXN0YW5jZVkpO1xuICB9XG4gIG9uRW5lbXlLaWxsKGR0KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEhwIDw9IDApIHtcbiAgICAgIHRoaXMuaXNLaWxsZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuaXNGbGlwKSB7XG4gICAgICAgIHRoaXMubm9kZS54ICs9IDE1MCAqIGR0O1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSAtPSA1MDAgKiBkdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm9kZS54IC09IDE1MCAqIGR0O1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSAtPSA1MDAgKiBkdDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzS2lsbGVkICYmICF0aGlzLmdhaW5LaWxsZWQpIHtcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZ2FpbktpbGwoKTtcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGlmIChyYW5kb20gPCAxIC8gMjAwMCkge1xuICAgICAgICAgIHRoaXMuZHJvcFJhaW5ib3dFeHAoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyYW5kb20gPCAxIC8gMjAwKSB7XG4gICAgICAgICAgdGhpcy5kcm9wRm9vZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbSA8IDEgLyA5MCkge1xuICAgICAgICAgIHRoaXMuZHJvcENvaW4oKTtcbiAgICAgICAgfSBlbHNlIHRoaXMuZHJvcEV4cCgpO1xuICAgICAgICB0aGlzLmdhaW5LaWxsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBFbmVteU1hbmFnZXIuaW5zdGFuY2UucHV0QmFja1RvUG9vbCh0aGlzLm5vZGUpO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGF1c2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnJlc3VtZSgpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRIcCA+IDApIHtcbiAgICAgIHRoaXMuaXNLaWxsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5kYW1hZ2VUaWNrIC09IGR0O1xuICAgIHRoaXMudGFrZURhbWFnZVRpY2sgLT0gZHQ7XG4gICAgdGhpcy5tb3ZlVG9QbGF5ZXIoZHQpO1xuICAgIHRoaXMub25FbmVteUtpbGwoZHQpO1xuICAgIHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/Level.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f6acBY9sFIl74hB06mNTGQ', 'Level');
// Script/Manager/Level.ts

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
var GameController_1 = require("../Controller/GameController");
var UIController_1 = require("../Controller/UIController");
var Utils_1 = require("../Controller/Utils");
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 1;
        _this.experience = 0;
        _this.expRequired = 0;
        _this.levelUpSound = null;
        return _this;
    }
    Level_1 = Level;
    Level.prototype.addExperience = function (amount) {
        amount += (amount * OverallStats_1.default.instance.getBonusExpRate()) / 100;
        this.experience += amount;
    };
    Level.prototype.calculateNextLevel = function () {
        var currentLevel = this.level;
        var nextLevel = currentLevel + 1;
        var element1 = Math.pow(4 * nextLevel, 2.1);
        var element2 = Math.pow(4 * currentLevel, 2.1);
        var roundedElement1 = Math.round(element1);
        var roundedElement2 = Math.round(element2);
        this.expRequired = roundedElement1 - roundedElement2;
    };
    // calculateNextLevelTest(current) {
    //   const currentLevel = current;
    //   const nextLevel = currentLevel + 1;
    //   const element1 = Math.pow(4 * nextLevel, 2.1);
    //   const element2 = Math.pow(4 * currentLevel, 2.1);
    //   const roundedElement1 = Math.round(element1);
    //   const roundedElement2 = Math.round(element2);
    //   var required = roundedElement1 - roundedElement2;
    //   console.log(required);
    // }
    Level.prototype.checkLevelUp = function () {
        if (this.experience >= this.expRequired) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.levelUpSound, false, 1);
            var expLeft = this.experience - this.expRequired;
            this.level += 1;
            this.expRequired = this.expRequired * 1.2;
            this.experience = expLeft;
            this.calculateNextLevel();
            GameController_1.default.instance.onLevelUp();
        }
        var levelString = "LEVEL " + this.level;
        UIController_1.default.instance.updateExp(levelString, this.expRequired, this.experience);
    };
    Level.prototype.onLoad = function () {
        Level_1.instance = this;
        this.calculateNextLevel();
    };
    Level.prototype.start = function () { };
    Level.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        this.checkLevelUp();
    };
    var Level_1;
    __decorate([
        property(cc.Integer)
    ], Level.prototype, "level", void 0);
    __decorate([
        property(cc.Float)
    ], Level.prototype, "experience", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Level.prototype, "levelUpSound", void 0);
    Level = Level_1 = __decorate([
        ccclass
    ], Level);
    return Level;
}(cc.Component));
exports.default = Level;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxMZXZlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELDZDQUF3QztBQVV4Qyx1REFBa0Q7QUFRNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE4REM7UUExREMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBcURwQyxDQUFDO2NBOURvQixLQUFLO0lBVXhCLDZCQUFhLEdBQWIsVUFBYyxNQUFjO1FBQzFCLE1BQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBQ0Qsa0NBQWtCLEdBQWxCO1FBQ0UsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFNLFNBQVMsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsbURBQW1EO0lBQ25ELHNEQUFzRDtJQUN0RCxrREFBa0Q7SUFDbEQsa0RBQWtEO0lBQ2xELHNEQUFzRDtJQUN0RCwyQkFBMkI7SUFDM0IsSUFBSTtJQUNKLDRCQUFZLEdBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTTtnQkFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2pELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsd0JBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDckM7UUFDRCxJQUFJLFdBQVcsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzdCLFdBQVcsRUFDWCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUNELHNCQUFNLEdBQU47UUFDRSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQscUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOztJQXpERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dDQUNIO0lBRWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDVztJQVRmLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0E4RHpCO0lBQUQsWUFBQztDQTlERCxBQThEQyxDQTlEa0MsRUFBRSxDQUFDLFNBQVMsR0E4RDlDO2tCQTlEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVSUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVUlDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBCYW5lT2ZSZWdlbmVyYXRpb24gZnJvbSBcIi4uL0l0ZW0vQmFuZU9mUmVnZW5lcmF0aW9uXCI7XG5pbXBvcnQgQmxvb2R5VGVhciBmcm9tIFwiLi4vSXRlbS9CbG9vZHlUZWFyXCI7XG5pbXBvcnQgRHVtYmJlbGwgZnJvbSBcIi4uL0l0ZW0vRHVtYmJlbGxcIjtcbmltcG9ydCBFeWVQYXRjaCBmcm9tIFwiLi4vSXRlbS9FeWVQYXRjaFwiO1xuaW1wb3J0IEdyb3d0aFBpbGwgZnJvbSBcIi4uL0l0ZW0vR3Jvd3RoUGlsbFwiO1xuaW1wb3J0IEhhc3RlUG90aW9uIGZyb20gXCIuLi9JdGVtL0hhc3RlUG90aW9uXCI7XG5pbXBvcnQgTWlnaHR5U3RvbmUgZnJvbSBcIi4uL0l0ZW0vTWlnaHR5U3RvbmVcIjtcbmltcG9ydCBTaGllbGQgZnJvbSBcIi4uL0l0ZW0vU2hpZWxkXCI7XG5pbXBvcnQgV2lzZG9tU3RvbmUgZnJvbSBcIi4uL0l0ZW0vV2lzZG9tU3RvbmVcIjtcbmltcG9ydCBPdmVyYWxsU3RhdHMgZnJvbSBcIi4uL1BsYXllci9PdmVyYWxsU3RhdHNcIjtcbmltcG9ydCBBeGVUaHJvd2VyIGZyb20gXCIuLi9XZWFwb24vQXhlVGhyb3dlclwiO1xuaW1wb3J0IEJvdyBmcm9tIFwiLi4vV2VhcG9uL0Jvd1wiO1xuaW1wb3J0IE1lbGVlIGZyb20gXCIuLi9XZWFwb24vTWVsZWVcIjtcbmltcG9ydCBNb2xseVRocm93ZXIgZnJvbSBcIi4uL1dlYXBvbi9Nb2xseVRocm93ZXJcIjtcbmltcG9ydCBTaHVyaWtlblRocm93ZXIgZnJvbSBcIi4uL1dlYXBvbi9TaHVyaWtlblRocm93ZXJcIjtcbmltcG9ydCBTd29yZCBmcm9tIFwiLi4vV2VhcG9uL1N3b3JkXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogTGV2ZWw7XG5cbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIGxldmVsOiBudW1iZXIgPSAxO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGV4cGVyaWVuY2U6IG51bWJlciA9IDA7XG4gIGV4cFJlcXVpcmVkOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBsZXZlbFVwU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGFkZEV4cGVyaWVuY2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICBhbW91bnQgKz0gKGFtb3VudCAqIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5nZXRCb251c0V4cFJhdGUoKSkgLyAxMDA7XG4gICAgdGhpcy5leHBlcmllbmNlICs9IGFtb3VudDtcbiAgfVxuICBjYWxjdWxhdGVOZXh0TGV2ZWwoKSB7XG4gICAgY29uc3QgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICBjb25zdCBuZXh0TGV2ZWwgPSBjdXJyZW50TGV2ZWwgKyAxO1xuICAgIGNvbnN0IGVsZW1lbnQxID0gTWF0aC5wb3coNCAqIG5leHRMZXZlbCwgMi4xKTtcbiAgICBjb25zdCBlbGVtZW50MiA9IE1hdGgucG93KDQgKiBjdXJyZW50TGV2ZWwsIDIuMSk7XG4gICAgY29uc3Qgcm91bmRlZEVsZW1lbnQxID0gTWF0aC5yb3VuZChlbGVtZW50MSk7XG4gICAgY29uc3Qgcm91bmRlZEVsZW1lbnQyID0gTWF0aC5yb3VuZChlbGVtZW50Mik7XG4gICAgdGhpcy5leHBSZXF1aXJlZCA9IHJvdW5kZWRFbGVtZW50MSAtIHJvdW5kZWRFbGVtZW50MjtcbiAgfVxuICAvLyBjYWxjdWxhdGVOZXh0TGV2ZWxUZXN0KGN1cnJlbnQpIHtcbiAgLy8gICBjb25zdCBjdXJyZW50TGV2ZWwgPSBjdXJyZW50O1xuICAvLyAgIGNvbnN0IG5leHRMZXZlbCA9IGN1cnJlbnRMZXZlbCArIDE7XG4gIC8vICAgY29uc3QgZWxlbWVudDEgPSBNYXRoLnBvdyg0ICogbmV4dExldmVsLCAyLjEpO1xuICAvLyAgIGNvbnN0IGVsZW1lbnQyID0gTWF0aC5wb3coNCAqIGN1cnJlbnRMZXZlbCwgMi4xKTtcbiAgLy8gICBjb25zdCByb3VuZGVkRWxlbWVudDEgPSBNYXRoLnJvdW5kKGVsZW1lbnQxKTtcbiAgLy8gICBjb25zdCByb3VuZGVkRWxlbWVudDIgPSBNYXRoLnJvdW5kKGVsZW1lbnQyKTtcbiAgLy8gICB2YXIgcmVxdWlyZWQgPSByb3VuZGVkRWxlbWVudDEgLSByb3VuZGVkRWxlbWVudDI7XG4gIC8vICAgY29uc29sZS5sb2cocmVxdWlyZWQpO1xuICAvLyB9XG4gIGNoZWNrTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5leHBlcmllbmNlID49IHRoaXMuZXhwUmVxdWlyZWQpIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubGV2ZWxVcFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICB2YXIgZXhwTGVmdCA9IHRoaXMuZXhwZXJpZW5jZSAtIHRoaXMuZXhwUmVxdWlyZWQ7XG4gICAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgICB0aGlzLmV4cFJlcXVpcmVkID0gdGhpcy5leHBSZXF1aXJlZCAqIDEuMjtcbiAgICAgIHRoaXMuZXhwZXJpZW5jZSA9IGV4cExlZnQ7XG4gICAgICB0aGlzLmNhbGN1bGF0ZU5leHRMZXZlbCgpO1xuICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2Uub25MZXZlbFVwKCk7XG4gICAgfVxuICAgIHZhciBsZXZlbFN0cmluZyA9IFwiTEVWRUwgXCIgKyB0aGlzLmxldmVsO1xuICAgIFVJQ29udHJvbGxlci5pbnN0YW5jZS51cGRhdGVFeHAoXG4gICAgICBsZXZlbFN0cmluZyxcbiAgICAgIHRoaXMuZXhwUmVxdWlyZWQsXG4gICAgICB0aGlzLmV4cGVyaWVuY2VcbiAgICApO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBMZXZlbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5jYWxjdWxhdGVOZXh0TGV2ZWwoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIHRoaXMuY2hlY2tMZXZlbFVwKCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu/Button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaf99P7GNlGm5wNAwn6/BdW', 'Button');
// Script/Menu/Button.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalSpr = null;
        _this.hoverSpr = null;
        _this.other = null;
        _this.isFaded = false;
        _this.buttonSound = null;
        _this.changeOnHover = true;
        return _this;
    }
    Button.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onTouchEnd, this, true);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
    };
    Button.prototype.onTouchStart = function (event) {
        if (!this.changeOnHover)
            return;
        this.node.getChildByName("Label").color = new cc.Color(0, 0, 0);
        this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame =
            this.hoverSpr;
        this.node.getChildByName("Background").opacity = 255;
        if (this.other)
            this.other.color = new cc.Color(0, 0, 0);
    };
    Button.prototype.onSoundButtonCLick = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        if (Utils_1.default.getLocal("Sound") == "true") {
            Utils_1.default.setLocal("Sound", false);
        }
        else {
            Utils_1.default.setLocal("Sound", true);
        }
    };
    Button.prototype.onTouchEnd = function (event) {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        if (!this.changeOnHover)
            return;
        this.node.getChildByName("Label").color = new cc.Color(255, 255, 255);
        this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame =
            this.normalSpr;
        if (this.isFaded) {
            this.node.getChildByName("Background").opacity = 150;
        }
        if (this.other)
            this.other.color = new cc.Color(255, 255, 255);
    };
    Button.prototype.start = function () { };
    Button.prototype.update = function (dt) { };
    __decorate([
        property(cc.SpriteFrame)
    ], Button.prototype, "normalSpr", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Button.prototype, "hoverSpr", void 0);
    __decorate([
        property(cc.Node)
    ], Button.prototype, "other", void 0);
    __decorate([
        property(cc.Boolean)
    ], Button.prototype, "isFaded", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Button.prototype, "buttonSound", void 0);
    __decorate([
        property(cc.Boolean)
    ], Button.prototype, "changeOnHover", void 0);
    Button = __decorate([
        ccclass
    ], Button);
    return Button;
}(cc.Component));
exports.default = Button;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51XFxCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBR2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBbURDO1FBakRDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBdUNoQyxDQUFDO0lBdENDLHVCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FB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LElBQUksQ0FBQzt5Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJDQUNJO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDUztJQVpYLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FtRDFCO0lBQUQsYUFBQztDQW5ERCxBQW1EQyxDQW5EbUMsRUFBRSxDQUFDLFNBQVMsR0FtRC9DO2tCQW5Eb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9Tb3VuZFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBub3JtYWxTcHI6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBob3ZlclNwcjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgb3RoZXI6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgaXNGYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBidXR0b25Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gIGNoYW5nZU9uSG92ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcywgdHJ1ZSk7XG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMsIHRydWUpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMsIHRydWUpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcywgdHJ1ZSk7XG4gIH1cbiAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNoYW5nZU9uSG92ZXIpIHJldHVybjtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgIHRoaXMuaG92ZXJTcHI7XG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5vcGFjaXR5ID0gMjU1O1xuICAgIGlmICh0aGlzLm90aGVyKSB0aGlzLm90aGVyLmNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xuICB9XG4gIG9uU291bmRCdXR0b25DTGljaygpIHtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25Tb3VuZCwgZmFsc2UsIDEpO1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKSB7XG4gICAgICBVdGlscy5zZXRMb2NhbChcIlNvdW5kXCIsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVXRpbHMuc2V0TG9jYWwoXCJTb3VuZFwiLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgb25Ub3VjaEVuZChldmVudCkge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJ1dHRvblNvdW5kLCBmYWxzZSwgMSk7XG4gICAgaWYgKCF0aGlzLmNoYW5nZU9uSG92ZXIpIHJldHVybjtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgIHRoaXMubm9ybWFsU3ByO1xuICAgIGlmICh0aGlzLmlzRmFkZWQpIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikub3BhY2l0eSA9IDE1MDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3RoZXIpIHRoaXMub3RoZXIuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/DeathHeart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6b87JGRk9Pf5DBIitGJ8Hm', 'DeathHeart');
// Script/Other Object/DeathHeart.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DeathHeart = /** @class */ (function (_super) {
    __extends(DeathHeart, _super);
    function DeathHeart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vec2 = cc.v2(1, 0);
        return _this;
    }
    DeathHeart.prototype.onLoad = function () { };
    DeathHeart.prototype.start = function () { };
    DeathHeart.prototype.update = function (dt) {
        this.angle = Math.sqrt(this.vec2.x * this.vec2.x - this.vec2.y * this.vec2.y);
        var atan2 = Math.atan2(this.vec2.y, this.vec2.x);
        var velocity = cc.v2(this.vec2.x * 300 * dt * this.angle, this.vec2.y * 300 * dt * -this.angle);
        if (velocity.x == 0 && velocity.y == 0)
            this.node.destroy();
        this.node.x += velocity.x;
        this.node.y += velocity.y;
    };
    __decorate([
        property(cc.Vec2)
    ], DeathHeart.prototype, "vec2", void 0);
    DeathHeart = __decorate([
        ccclass
    ], DeathHeart);
    return DeathHeart;
}(cc.Component));
exports.default = DeathHeart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXERlYXRoSGVhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFxQkM7UUFuQkMsVUFBSSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztJQW1COUIsQ0FBQztJQWpCQywyQkFBTSxHQUFOLGNBQVUsQ0FBQztJQUVYLDBCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN0RCxDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQ3JDLENBQUM7UUFDRixJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDVTtJQUZULFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FxQjlCO0lBQUQsaUJBQUM7Q0FyQkQsQUFxQkMsQ0FyQnVDLEVBQUUsQ0FBQyxTQUFTLEdBcUJuRDtrQkFyQm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYXRoSGVhcnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuVmVjMilcbiAgdmVjMjogY2MuVmVjMiA9IGNjLnYyKDEsIDApO1xuICBhbmdsZTogbnVtYmVyO1xuICBvbkxvYWQoKSB7fVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5zcXJ0KFxuICAgICAgdGhpcy52ZWMyLnggKiB0aGlzLnZlYzIueCAtIHRoaXMudmVjMi55ICogdGhpcy52ZWMyLnlcbiAgICApO1xuICAgIGxldCBhdGFuMiA9IE1hdGguYXRhbjIodGhpcy52ZWMyLnksIHRoaXMudmVjMi54KTtcbiAgICBsZXQgdmVsb2NpdHkgPSBjYy52MihcbiAgICAgIHRoaXMudmVjMi54ICogMzAwICogZHQgKiB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy52ZWMyLnkgKiAzMDAgKiBkdCAqIC10aGlzLmFuZ2xlXG4gICAgKTtcbiAgICBpZiAodmVsb2NpdHkueCA9PSAwICYmIHZlbG9jaXR5LnkgPT0gMCkgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB0aGlzLm5vZGUueCArPSB2ZWxvY2l0eS54O1xuICAgIHRoaXMubm9kZS55ICs9IHZlbG9jaXR5Lnk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/HealthAndShield.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1789cmurvRDqren9TBbR0oc', 'HealthAndShield');
// Script/Player/HealthAndShield.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HealthAndShield = /** @class */ (function (_super) {
    __extends(HealthAndShield, _super);
    function HealthAndShield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hpBar = null;
        _this.shieldBar = null;
        _this.hpBarUI = null;
        _this.shieldBarUI = null;
        _this.HpLabel = null;
        // LIFE-CYCLE CALLBACKS:
        _this.timer = 0;
        return _this;
    }
    HealthAndShield_1 = HealthAndShield;
    HealthAndShield.prototype.onLoad = function () {
        HealthAndShield_1.instance = this;
    };
    HealthAndShield.prototype.start = function () { };
    HealthAndShield.prototype.setStateHP = function (current, max) {
        this.timer = 3;
        var state = current;
        state /= max;
        var hpString = Math.ceil(current) + " / " + Math.ceil(max);
        if (state < 0)
            state = 0;
        this.hpBar.scaleX = state;
        this.hpBarUI.scaleX = state;
        this.HpLabel.string = hpString;
    };
    HealthAndShield.prototype.setStateShield = function (current, max) {
        this.timer = 3;
        var state = current;
        state /= max;
        if (state < 0)
            state = 0;
        this.shieldBar.scaleX = state;
        this.shieldBarUI.scaleX = state;
    };
    HealthAndShield.prototype.setStateOnLoad = function (currentHp, maxHp, currentShield, maxShield) {
        var stateHp = currentHp;
        stateHp /= maxHp;
        var hpString = Math.ceil(currentHp) + " / " + Math.ceil(maxHp);
        if (stateHp < 0)
            stateHp = 0;
        this.hpBar.scaleX = stateHp;
        this.hpBarUI.scaleX = stateHp;
        this.HpLabel.string = hpString;
        var StateShield = currentShield;
        StateShield /= maxShield;
        if (StateShield < 0)
            StateShield = 0;
        this.shieldBar.scaleX = StateShield;
        this.shieldBarUI.scaleX = StateShield;
    };
    HealthAndShield.prototype.update = function (dt) {
        this.timer -= dt;
        if (this.timer <= 0) {
            this.hpBar.parent.opacity = 0;
        }
        else {
            this.hpBar.parent.opacity = 255;
        }
    };
    var HealthAndShield_1;
    __decorate([
        property(cc.Node)
    ], HealthAndShield.prototype, "hpBar", void 0);
    __decorate([
        property(cc.Node)
    ], HealthAndShield.prototype, "shieldBar", void 0);
    __decorate([
        property(cc.Node)
    ], HealthAndShield.prototype, "hpBarUI", void 0);
    __decorate([
        property(cc.Node)
    ], HealthAndShield.prototype, "shieldBarUI", void 0);
    __decorate([
        property(cc.Label)
    ], HealthAndShield.prototype, "HpLabel", void 0);
    HealthAndShield = HealthAndShield_1 = __decorate([
        ccclass
    ], HealthAndShield);
    return HealthAndShield;
}(cc.Component));
exports.default = HealthAndShield;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXEhlYWx0aEFuZFNoaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW1FQztRQWhFQyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLHdCQUF3QjtRQUN4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQXFEcEIsQ0FBQzt3QkFuRW9CLGVBQWU7SUFlbEMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQUssR0FBTCxjQUFTLENBQUM7SUFFVixvQ0FBVSxHQUFWLFVBQVcsT0FBZSxFQUFFLEdBQVc7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDcEIsS0FBSyxJQUFJLEdBQUcsQ0FBQztRQUNiLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUNELHdDQUFjLEdBQWQsVUFBZSxPQUFlLEVBQUUsR0FBVztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNwQixLQUFLLElBQUksR0FBRyxDQUFDO1FBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsd0NBQWMsR0FBZCxVQUNFLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixhQUFxQixFQUNyQixTQUFpQjtRQUVqQixJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDeEIsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUNqQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLENBQUM7WUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQy9CLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNoQyxXQUFXLElBQUksU0FBUyxDQUFDO1FBQ3pCLElBQUksV0FBVyxHQUFHLENBQUM7WUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7SUFDeEMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7SUEvREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNNO0lBWE4sZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW1FbkM7SUFBRCxzQkFBQztDQW5FRCxBQW1FQyxDQW5FNEMsRUFBRSxDQUFDLFNBQVMsR0FtRXhEO2tCQW5Fb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoQW5kU2hpZWxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGluc3RhbmNlOiBIZWFsdGhBbmRTaGllbGQ7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBocEJhcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzaGllbGRCYXI6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgaHBCYXJVSTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzaGllbGRCYXJVSTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgSHBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICB0aW1lcjogbnVtYmVyID0gMDtcbiAgb25Mb2FkKCkge1xuICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgc2V0U3RhdGVIUChjdXJyZW50OiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgdGhpcy50aW1lciA9IDM7XG4gICAgdmFyIHN0YXRlID0gY3VycmVudDtcbiAgICBzdGF0ZSAvPSBtYXg7XG4gICAgdmFyIGhwU3RyaW5nID0gTWF0aC5jZWlsKGN1cnJlbnQpICsgXCIgLyBcIiArIE1hdGguY2VpbChtYXgpO1xuICAgIGlmIChzdGF0ZSA8IDApIHN0YXRlID0gMDtcbiAgICB0aGlzLmhwQmFyLnNjYWxlWCA9IHN0YXRlO1xuICAgIHRoaXMuaHBCYXJVSS5zY2FsZVggPSBzdGF0ZTtcbiAgICB0aGlzLkhwTGFiZWwuc3RyaW5nID0gaHBTdHJpbmc7XG4gIH1cbiAgc2V0U3RhdGVTaGllbGQoY3VycmVudDogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgIHRoaXMudGltZXIgPSAzO1xuICAgIHZhciBzdGF0ZSA9IGN1cnJlbnQ7XG4gICAgc3RhdGUgLz0gbWF4O1xuICAgIGlmIChzdGF0ZSA8IDApIHN0YXRlID0gMDtcbiAgICB0aGlzLnNoaWVsZEJhci5zY2FsZVggPSBzdGF0ZTtcbiAgICB0aGlzLnNoaWVsZEJhclVJLnNjYWxlWCA9IHN0YXRlO1xuICB9XG4gIHNldFN0YXRlT25Mb2FkKFxuICAgIGN1cnJlbnRIcDogbnVtYmVyLFxuICAgIG1heEhwOiBudW1iZXIsXG4gICAgY3VycmVudFNoaWVsZDogbnVtYmVyLFxuICAgIG1heFNoaWVsZDogbnVtYmVyXG4gICkge1xuICAgIHZhciBzdGF0ZUhwID0gY3VycmVudEhwO1xuICAgIHN0YXRlSHAgLz0gbWF4SHA7XG4gICAgdmFyIGhwU3RyaW5nID0gTWF0aC5jZWlsKGN1cnJlbnRIcCkgKyBcIiAvIFwiICsgTWF0aC5jZWlsKG1heEhwKTtcbiAgICBpZiAoc3RhdGVIcCA8IDApIHN0YXRlSHAgPSAwO1xuICAgIHRoaXMuaHBCYXIuc2NhbGVYID0gc3RhdGVIcDtcbiAgICB0aGlzLmhwQmFyVUkuc2NhbGVYID0gc3RhdGVIcDtcbiAgICB0aGlzLkhwTGFiZWwuc3RyaW5nID0gaHBTdHJpbmc7XG4gICAgdmFyIFN0YXRlU2hpZWxkID0gY3VycmVudFNoaWVsZDtcbiAgICBTdGF0ZVNoaWVsZCAvPSBtYXhTaGllbGQ7XG4gICAgaWYgKFN0YXRlU2hpZWxkIDwgMCkgU3RhdGVTaGllbGQgPSAwO1xuICAgIHRoaXMuc2hpZWxkQmFyLnNjYWxlWCA9IFN0YXRlU2hpZWxkO1xuICAgIHRoaXMuc2hpZWxkQmFyVUkuc2NhbGVYID0gU3RhdGVTaGllbGQ7XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIGlmICh0aGlzLnRpbWVyIDw9IDApIHtcbiAgICAgIHRoaXMuaHBCYXIucGFyZW50Lm9wYWNpdHkgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhwQmFyLnBhcmVudC5vcGFjaXR5ID0gMjU1O1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Movement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd184emMadB7ZqGAUJcL39Q', 'Movement');
// Script/Controller/Movement.ts

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
var PlayerController_1 = require("../Player/PlayerController");
var GameController_1 = require("./GameController");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Movement = /** @class */ (function (_super) {
    __extends(Movement, _super);
    function Movement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.directionArrow = null;
        _this.directionAngle = 0;
        _this.isFlip = false;
        return _this;
    }
    Movement_1 = Movement;
    // LIFE-CYCLE CALLBACKS:
    Movement.prototype.onLoad = function () {
        Movement_1.instance = this;
        this.moveVec = cc.Vec2.ZERO;
        this.directionVector = cc.v2(100, 0);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, true);
        // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this, true);
    };
    // onMouseMove(event) {
    //   var mousPos = event.getLocation();
    //   console.log(mousPos);
    // }
    Movement.prototype.onTouchStart = function (event) {
        this.touchAnchor = event.touch.getLocation();
    };
    Movement.prototype.onTouchMove = function (event) {
        if (Utils_1.default.isPause)
            return;
        PlayerController_1.default.instance.isMoving = true;
        this.moveVec = event.touch.getLocation();
        this.moveVec.x -= this.touchAnchor.x;
        this.moveVec.y -= this.touchAnchor.y;
        this.directionVector = this.moveVec.normalize();
    };
    Movement.prototype.onTouchEnd = function (event) {
        PlayerController_1.default.instance.isMoving = false;
        this.moveVec = cc.Vec2.ZERO;
    };
    Movement.prototype.onTouchCancel = function (event) {
        PlayerController_1.default.instance.isMoving = false;
        this.moveVec = cc.Vec2.ZERO;
    };
    Movement.prototype.start = function () { };
    Movement.prototype.movePlayer = function (dt) {
        if (this.moveVec.x < 0 && !this.isFlip) {
            cc.tween(this.player.getChildByName("Player")).flipX().start();
            this.isFlip = true;
        }
        if (this.moveVec.x > 0 && this.isFlip) {
            cc.tween(this.player.getChildByName("Player")).flipX().start();
            this.isFlip = false;
        }
        this.player.x +=
            this.moveVec.normalize().x * PlayerController_1.default.instance.speed * 175 * dt;
        this.player.y +=
            this.moveVec.normalize().y * PlayerController_1.default.instance.speed * 175 * dt;
        this.node.position = this.player.position;
    };
    Movement.prototype.moveDirectionArrow = function () {
        this.directionAngle =
            Math.atan2(this.directionVector.y, this.directionVector.x) *
                (180 / Math.PI);
        this.directionArrow.angle = this.directionAngle;
        this.directionArrow.position = cc.v3(this.directionVector.normalize().x * 100, this.directionVector.normalize().y * 100);
    };
    Movement.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        if (GameController_1.default.instance.isGameOver)
            return;
        this.movePlayer(dt);
        this.moveDirectionArrow();
    };
    var Movement_1;
    __decorate([
        property(cc.Node)
    ], Movement.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], Movement.prototype, "directionArrow", void 0);
    Movement = Movement_1 = __decorate([
        ccclass
    ], Movement);
    return Movement;
}(cc.Component));
exports.default = Movement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNb3ZlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsbURBQThDO0FBQzlDLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlGQztRQXRGQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBSy9CLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBOEVqQixDQUFDO2lCQXpGb0IsUUFBUTtJQVkzQix3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNFLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFD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ckNvbnRyb2xsZXIgZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZW1lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IE1vdmVtZW50O1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGRpcmVjdGlvbkFycm93OiBjYy5Ob2RlID0gbnVsbDtcblxuICB0b3VjaEFuY2hvcjogY2MuVmVjMjtcbiAgbW92ZVZlYzogY2MuVmVjMjtcbiAgZGlyZWN0aW9uVmVjdG9yOiBjYy5WZWMyO1xuICBkaXJlY3Rpb25BbmdsZTogbnVtYmVyID0gMDtcbiAgaXNGbGlwID0gZmFsc2U7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBNb3ZlbWVudC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5tb3ZlVmVjID0gY2MuVmVjMi5aRVJPO1xuICAgIHRoaXMuZGlyZWN0aW9uVmVjdG9yID0gY2MudjIoMTAwLCAwKTtcblxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMsIHRydWUpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzLCB0cnVlKTtcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMsIHRydWUpO1xuXG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLFxuICAgICAgdGhpcy5vblRvdWNoQ2FuY2VsLFxuICAgICAgdGhpcyxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLCB0aGlzLm9uTW91c2VNb3ZlLCB0aGlzLCB0cnVlKTtcbiAgfVxuICAvLyBvbk1vdXNlTW92ZShldmVudCkge1xuICAvLyAgIHZhciBtb3VzUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgLy8gICBjb25zb2xlLmxvZyhtb3VzUG9zKTtcbiAgLy8gfVxuICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcblxuICAgIHRoaXMudG91Y2hBbmNob3IgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICB9XG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLmlzTW92aW5nID0gdHJ1ZTtcbiAgICB0aGlzLm1vdmVWZWMgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMubW92ZVZlYy54IC09IHRoaXMudG91Y2hBbmNob3IueDtcbiAgICB0aGlzLm1vdmVWZWMueSAtPSB0aGlzLnRvdWNoQW5jaG9yLnk7XG4gICAgdGhpcy5kaXJlY3Rpb25WZWN0b3IgPSB0aGlzLm1vdmVWZWMubm9ybWFsaXplKCk7XG4gIH1cbiAgb25Ub3VjaEVuZChldmVudCkge1xuICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVWZWMgPSBjYy5WZWMyLlpFUk87XG4gIH1cbiAgb25Ub3VjaENhbmNlbChldmVudCkge1xuICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVWZWMgPSBjYy5WZWMyLlpFUk87XG4gIH1cblxuICBzdGFydCgpIHt9XG4gIG1vdmVQbGF5ZXIoZHQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vdmVWZWMueCA8IDAgJiYgIXRoaXMuaXNGbGlwKSB7XG4gICAgICBjYy50d2Vlbih0aGlzLnBsYXllci5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKSkuZmxpcFgoKS5zdGFydCgpO1xuICAgICAgdGhpcy5pc0ZsaXAgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb3ZlVmVjLnggPiAwICYmIHRoaXMuaXNGbGlwKSB7XG4gICAgICBjYy50d2Vlbih0aGlzLnBsYXllci5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKSkuZmxpcFgoKS5zdGFydCgpO1xuICAgICAgdGhpcy5pc0ZsaXAgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5wbGF5ZXIueCArPVxuICAgICAgdGhpcy5tb3ZlVmVjLm5vcm1hbGl6ZSgpLnggKiBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLnNwZWVkICogMTc1ICogZHQ7XG4gICAgdGhpcy5wbGF5ZXIueSArPVxuICAgICAgdGhpcy5tb3ZlVmVjLm5vcm1hbGl6ZSgpLnkgKiBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLnNwZWVkICogMTc1ICogZHQ7XG4gICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5wbGF5ZXIucG9zaXRpb247XG4gIH1cbiAgbW92ZURpcmVjdGlvbkFycm93KCkge1xuICAgIHRoaXMuZGlyZWN0aW9uQW5nbGUgPVxuICAgICAgTWF0aC5hdGFuMih0aGlzLmRpcmVjdGlvblZlY3Rvci55LCB0aGlzLmRpcmVjdGlvblZlY3Rvci54KSAqXG4gICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgdGhpcy5kaXJlY3Rpb25BcnJvdy5hbmdsZSA9IHRoaXMuZGlyZWN0aW9uQW5nbGU7XG4gICAgdGhpcy5kaXJlY3Rpb25BcnJvdy5wb3NpdGlvbiA9IGNjLnYzKFxuICAgICAgdGhpcy5kaXJlY3Rpb25WZWN0b3Iubm9ybWFsaXplKCkueCAqIDEwMCxcbiAgICAgIHRoaXMuZGlyZWN0aW9uVmVjdG9yLm5vcm1hbGl6ZSgpLnkgKiAxMDBcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICAgIHRoaXMubW92ZVBsYXllcihkdCk7XG4gICAgdGhpcy5tb3ZlRGlyZWN0aW9uQXJyb3coKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/OptionTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee20bnrl8lEEbZEsYexUIDB', 'OptionTest');
// Script/Controller/OptionTest.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Option = /** @class */ (function () {
    function Option(optionType, weight) {
        this.optionType = optionType;
        this.weight = weight;
    }
    return Option;
}());
var Player = /** @class */ (function () {
    function Player() {
        // Initialize player's attributes, such as unpicked skills, weapons, and items, equipped weapon/item status, etc.
        this.unpickedSkills = 3; // Assuming the player has 3 unpicked skills initially.
        this.allSkillsFullyLeveled = false;
        this.unpickedWeapons = 5; // Assuming the player has 5 unpicked weapons initially.
        this.unpickedItems = 7; // Assuming the player has 7 unpicked items initially.
        this.weaponEquipped = true; // Assuming the player has a weapon equipped initially.
        this.itemEquipped = true; // Assuming the player has an item equipped initially.
    }
    // Function to check if the player can be offered a skill option
    Player.prototype.canOfferSkill = function () {
        return this.unpickedSkills > 0 && !this.allSkillsFullyLeveled;
    };
    // Function to check if the player can be offered a weapon option
    Player.prototype.canOfferWeapon = function () {
        return this.unpickedWeapons > 0 && !this.weaponEquipped;
    };
    // Function to check if the player can be offered an item option
    Player.prototype.canOfferItem = function () {
        return this.unpickedItems > 0 && !this.itemEquipped;
    };
    return Player;
}());
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Usage example
        // LIFE-CYCLE CALLBACKS:
        _this.sword = null;
        return _this;
    }
    // Function to randomly select an option from the given list
    NewClass.prototype.selectRandomOption = function (list) {
        var totalWeight = list.reduce(function (sum, option) { return sum + option.weight; }, 0);
        var randomWeight = Math.floor(Math.random() * totalWeight);
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var option = list_1[_i];
            randomWeight -= option.weight;
            if (randomWeight < 0) {
                return option;
            }
        }
        // In case something went wrong, return the last option in the list
        return list[list.length - 1];
    };
    // Function to generate a list of options for a specific option type
    NewClass.prototype.generateOptionList = function (optionType) {
        // Assuming different options for each option type with varying weights.
        // Replace these with your actual options and weights.
        var options = [];
        if (optionType === "skill") {
            options.push(new Option("SkillOption1", 1));
            options.push(new Option("SkillOption2", 1));
            options.push(new Option("SkillOption3", 1));
        }
        else if (optionType === "weapon") {
            options.push(new Option("WeaponOption1", 2));
            options.push(new Option("WeaponOption2", 3));
            options.push(new Option("WeaponOption3", 1));
        }
        else if (optionType === "item") {
            options.push(new Option("ItemOption1", 2));
            options.push(new Option("ItemOption2", 2));
            options.push(new Option("ItemOption3", 4));
        }
        else if (optionType === "StatUp") {
            options.push(new Option("StatUpOption", 1));
        }
        return options;
    };
    // Function to simulate option selection for each option slot
    NewClass.prototype.selectOptions = function (player) {
        var options = [];
        // Option 1
        var optionType1;
        var random1 = Math.random();
        if (random1 < 7 / 20) {
            optionType1 = "skill";
        }
        else if (random1 < 14 / 20) {
            optionType1 = "weapon";
        }
        else if (random1 < 19 / 20) {
            optionType1 = "item";
        }
        else {
            optionType1 = "StatUp";
        }
        var optionList1 = this.generateOptionList(optionType1);
        if (!player.canOfferSkill()) {
            optionList1 = optionList1.filter(function (option) { return option.optionType !== "skill"; });
            if (!player.canOfferWeapon()) {
                optionList1 = optionList1.filter(function (option) { return option.optionType !== "weapon"; });
                if (!player.canOfferItem()) {
                    optionList1 = optionList1.filter(function (option) { return option.optionType !== "item"; });
                }
            }
        }
        options.push(this.selectRandomOption(optionList1));
        // Option 2
        var optionType2;
        var random2 = Math.random();
        if (random2 < 7 / 20) {
            optionType2 = "skill";
        }
        else if (random2 < 14 / 20) {
            optionType2 = "weapon";
        }
        else if (random2 < 19 / 20) {
            optionType2 = "item";
        }
        else {
            optionType2 = "StatUp";
        }
        var optionList2 = this.generateOptionList(optionType2);
        if (!player.canOfferSkill()) {
            optionList2 = optionList2.filter(function (option) { return option.optionType !== "skill"; });
            if (!player.canOfferWeapon()) {
                optionList2 = optionList2.filter(function (option) { return option.optionType !== "weapon"; });
                if (!player.canOfferItem()) {
                    optionList2 = optionList2.filter(function (option) { return option.optionType !== "item"; });
                }
            }
        }
        options.push(this.selectRandomOption(optionList2));
        // Option 3
        var optionType3;
        var random3 = Math.random();
        if (random3 < 0.5) {
            optionType3 = "weapon";
        }
        else {
            optionType3 = "item";
        }
        var optionList3 = this.generateOptionList(optionType3);
        if (!player.canOfferWeapon()) {
            optionList3 = optionList3.filter(function (option) { return option.optionType !== "weapon"; });
            if (!player.canOfferItem()) {
                optionList3 = optionList3.filter(function (option) { return option.optionType !== "item"; });
                if (!player.canOfferSkill()) {
                    optionList3 = optionList3.filter(function (option) { return option.optionType === "skill"; });
                }
            }
        }
        // Try up to 5 times to get an option from the list if skill option is not available.
        var maxTries = 5;
        while (maxTries > 0) {
            var selectedOption = this.selectRandomOption(optionList3);
            if (selectedOption.optionType === "skill") {
                options.push(selectedOption);
                break;
            }
            maxTries--;
        }
        // If the previous check fails, add the food option to the options list.
        if (maxTries === 0) {
            options.push(new Option("FoodOption", 1));
        }
        // Option 4
        var optionType4;
        var random4 = Math.random();
        if (random4 < 0.5) {
            optionType4 = "weapon";
        }
        else {
            optionType4 = "item";
        }
        var optionList4 = this.generateOptionList(optionType4);
        if (!player.canOfferWeapon() && !player.canOfferItem()) {
            options.push(new Option("HoloCoinOption", 1));
        }
        else {
            // Try up to 5 times to get an option from the list if the first type is not available.
            maxTries = 5;
            while (maxTries > 0) {
                var selectedOption = this.selectRandomOption(optionList4);
                if ((selectedOption.optionType === "weapon" && player.canOfferWeapon()) ||
                    (selectedOption.optionType === "item" && player.canOfferItem())) {
                    options.push(selectedOption);
                    break;
                }
                maxTries--;
            }
            // If the previous check fails, add the HoloCoin option to the options list.
            if (maxTries === 0) {
                options.push(new Option("HoloCoinOption", 1));
            }
        }
        return options;
    };
    NewClass.prototype.onLoad = function () {
        var player = new Player();
        var selectedOptions = this.selectOptions(player);
        selectedOptions.forEach(function (element) {
            console.log(element.optionType, element.weight);
        });
    };
    NewClass.prototype.update = function (dt) { };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sword", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxPcHRpb25UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBSUUsZ0JBQVksVUFBa0IsRUFBRSxNQUFjO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFDRDtJQVFFO1FBQ0UsaUhBQWlIO1FBQ2pILElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsdURBQXVEO1FBQ2hGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyx3REFBd0Q7UUFDbEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxzREFBc0Q7UUFDOUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyx1REFBdUQ7UUFDbkYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxzREFBc0Q7SUFDbEYsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSw4QkFBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNoRSxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLCtCQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FB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QUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzdCLE1BQU07aUJBQ1A7Z0JBQ0QsUUFBUSxFQUFFLENBQUM7YUFDWjtZQUVELDRFQUE0RTtZQUM1RSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQztTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU9ELHlCQUFNLEdBQU47UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzVCLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFHLENBQUM7SUFUYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBbE1ILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0TTVCO0lBQUQsZUFBQztDQTVNRCxBQTRNQyxDQTVNcUMsRUFBRSxDQUFDLFNBQVMsR0E0TWpEO2tCQTVNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vSXRlbS9JdGVtXCI7XG5pbXBvcnQgU3dvcmQgZnJvbSBcIi4uL1dlYXBvbi9Td29yZFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuY2xhc3MgT3B0aW9uIHtcbiAgb3B0aW9uVHlwZTogc3RyaW5nO1xuICB3ZWlnaHQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25UeXBlOiBzdHJpbmcsIHdlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5vcHRpb25UeXBlID0gb3B0aW9uVHlwZTtcbiAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgfVxufVxuY2xhc3MgUGxheWVyIHtcbiAgdW5waWNrZWRTa2lsbHM6IG51bWJlcjtcbiAgYWxsU2tpbGxzRnVsbHlMZXZlbGVkOiBib29sZWFuO1xuICB1bnBpY2tlZFdlYXBvbnM6IG51bWJlcjtcbiAgdW5waWNrZWRJdGVtczogbnVtYmVyO1xuICB3ZWFwb25FcXVpcHBlZDogYm9vbGVhbjtcbiAgaXRlbUVxdWlwcGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEluaXRpYWxpemUgcGxheWVyJ3MgYXR0cmlidXRlcywgc3VjaCBhcyB1bnBpY2tlZCBza2lsbHMsIHdlYXBvbnMsIGFuZCBpdGVtcywgZXF1aXBwZWQgd2VhcG9uL2l0ZW0gc3RhdHVzLCBldGMuXG4gICAgdGhpcy51bnBpY2tlZFNraWxscyA9IDM7IC8vIEFzc3VtaW5nIHRoZSBwbGF5ZXIgaGFzIDMgdW5waWNrZWQgc2tpbGxzIGluaXRpYWxseS5cbiAgICB0aGlzLmFsbFNraWxsc0Z1bGx5TGV2ZWxlZCA9IGZhbHNlO1xuICAgIHRoaXMudW5waWNrZWRXZWFwb25zID0gNTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciBoYXMgNSB1bnBpY2tlZCB3ZWFwb25zIGluaXRpYWxseS5cbiAgICB0aGlzLnVucGlja2VkSXRlbXMgPSA3OyAvLyBBc3N1bWluZyB0aGUgcGxheWVyIGhhcyA3IHVucGlja2VkIGl0ZW1zIGluaXRpYWxseS5cbiAgICB0aGlzLndlYXBvbkVxdWlwcGVkID0gdHJ1ZTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciBoYXMgYSB3ZWFwb24gZXF1aXBwZWQgaW5pdGlhbGx5LlxuICAgIHRoaXMuaXRlbUVxdWlwcGVkID0gdHJ1ZTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciBoYXMgYW4gaXRlbSBlcXVpcHBlZCBpbml0aWFsbHkuXG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgcGxheWVyIGNhbiBiZSBvZmZlcmVkIGEgc2tpbGwgb3B0aW9uXG4gIGNhbk9mZmVyU2tpbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudW5waWNrZWRTa2lsbHMgPiAwICYmICF0aGlzLmFsbFNraWxsc0Z1bGx5TGV2ZWxlZDtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBwbGF5ZXIgY2FuIGJlIG9mZmVyZWQgYSB3ZWFwb24gb3B0aW9uXG4gIGNhbk9mZmVyV2VhcG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnVucGlja2VkV2VhcG9ucyA+IDAgJiYgIXRoaXMud2VhcG9uRXF1aXBwZWQ7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgcGxheWVyIGNhbiBiZSBvZmZlcmVkIGFuIGl0ZW0gb3B0aW9uXG4gIGNhbk9mZmVySXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51bnBpY2tlZEl0ZW1zID4gMCAmJiAhdGhpcy5pdGVtRXF1aXBwZWQ7XG4gIH1cbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIC8vIEZ1bmN0aW9uIHRvIHJhbmRvbWx5IHNlbGVjdCBhbiBvcHRpb24gZnJvbSB0aGUgZ2l2ZW4gbGlzdFxuICBzZWxlY3RSYW5kb21PcHRpb24obGlzdDogT3B0aW9uW10pOiBPcHRpb24ge1xuICAgIGNvbnN0IHRvdGFsV2VpZ2h0ID0gbGlzdC5yZWR1Y2UoKHN1bSwgb3B0aW9uKSA9PiBzdW0gKyBvcHRpb24ud2VpZ2h0LCAwKTtcbiAgICBsZXQgcmFuZG9tV2VpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdG90YWxXZWlnaHQpO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgbGlzdCkge1xuICAgICAgcmFuZG9tV2VpZ2h0IC09IG9wdGlvbi53ZWlnaHQ7XG4gICAgICBpZiAocmFuZG9tV2VpZ2h0IDwgMCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEluIGNhc2Ugc29tZXRoaW5nIHdlbnQgd3JvbmcsIHJldHVybiB0aGUgbGFzdCBvcHRpb24gaW4gdGhlIGxpc3RcbiAgICByZXR1cm4gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gZ2VuZXJhdGUgYSBsaXN0IG9mIG9wdGlvbnMgZm9yIGEgc3BlY2lmaWMgb3B0aW9uIHR5cGVcbiAgZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGU6IHN0cmluZyk6IE9wdGlvbltdIHtcbiAgICAvLyBBc3N1bWluZyBkaWZmZXJlbnQgb3B0aW9ucyBmb3IgZWFjaCBvcHRpb24gdHlwZSB3aXRoIHZhcnlpbmcgd2VpZ2h0cy5cbiAgICAvLyBSZXBsYWNlIHRoZXNlIHdpdGggeW91ciBhY3R1YWwgb3B0aW9ucyBhbmQgd2VpZ2h0cy5cbiAgICBsZXQgb3B0aW9uczogT3B0aW9uW10gPSBbXTtcbiAgICBpZiAob3B0aW9uVHlwZSA9PT0gXCJza2lsbFwiKSB7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIlNraWxsT3B0aW9uMVwiLCAxKSk7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIlNraWxsT3B0aW9uMlwiLCAxKSk7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIlNraWxsT3B0aW9uM1wiLCAxKSk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcIndlYXBvblwiKSB7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIldlYXBvbk9wdGlvbjFcIiwgMikpO1xuICAgICAgb3B0aW9ucy5wdXNoKG5ldyBPcHRpb24oXCJXZWFwb25PcHRpb24yXCIsIDMpKTtcbiAgICAgIG9wdGlvbnMucHVzaChuZXcgT3B0aW9uKFwiV2VhcG9uT3B0aW9uM1wiLCAxKSk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcIml0ZW1cIikge1xuICAgICAgb3B0aW9ucy5wdXNoKG5ldyBPcHRpb24oXCJJdGVtT3B0aW9uMVwiLCAyKSk7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIkl0ZW1PcHRpb24yXCIsIDIpKTtcbiAgICAgIG9wdGlvbnMucHVzaChuZXcgT3B0aW9uKFwiSXRlbU9wdGlvbjNcIiwgNCkpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uVHlwZSA9PT0gXCJTdGF0VXBcIikge1xuICAgICAgb3B0aW9ucy5wdXNoKG5ldyBPcHRpb24oXCJTdGF0VXBPcHRpb25cIiwgMSkpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gc2ltdWxhdGUgb3B0aW9uIHNlbGVjdGlvbiBmb3IgZWFjaCBvcHRpb24gc2xvdFxuICBzZWxlY3RPcHRpb25zKHBsYXllcjogUGxheWVyKTogT3B0aW9uW10ge1xuICAgIGxldCBvcHRpb25zOiBPcHRpb25bXSA9IFtdO1xuXG4gICAgLy8gT3B0aW9uIDFcbiAgICBsZXQgb3B0aW9uVHlwZTE6IHN0cmluZztcbiAgICBjb25zdCByYW5kb20xID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAocmFuZG9tMSA8IDcgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTEgPSBcInNraWxsXCI7XG4gICAgfSBlbHNlIGlmIChyYW5kb20xIDwgMTQgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTEgPSBcIndlYXBvblwiO1xuICAgIH0gZWxzZSBpZiAocmFuZG9tMSA8IDE5IC8gMjApIHtcbiAgICAgIG9wdGlvblR5cGUxID0gXCJpdGVtXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvblR5cGUxID0gXCJTdGF0VXBcIjtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9uTGlzdDEgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMSk7XG5cbiAgICBpZiAoIXBsYXllci5jYW5PZmZlclNraWxsKCkpIHtcbiAgICAgIG9wdGlvbkxpc3QxID0gb3B0aW9uTGlzdDEuZmlsdGVyKFxuICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ub3B0aW9uVHlwZSAhPT0gXCJza2lsbFwiXG4gICAgICApO1xuICAgICAgaWYgKCFwbGF5ZXIuY2FuT2ZmZXJXZWFwb24oKSkge1xuICAgICAgICBvcHRpb25MaXN0MSA9IG9wdGlvbkxpc3QxLmZpbHRlcihcbiAgICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ub3B0aW9uVHlwZSAhPT0gXCJ3ZWFwb25cIlxuICAgICAgICApO1xuICAgICAgICBpZiAoIXBsYXllci5jYW5PZmZlckl0ZW0oKSkge1xuICAgICAgICAgIG9wdGlvbkxpc3QxID0gb3B0aW9uTGlzdDEuZmlsdGVyKFxuICAgICAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLm9wdGlvblR5cGUgIT09IFwiaXRlbVwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnMucHVzaCh0aGlzLnNlbGVjdFJhbmRvbU9wdGlvbihvcHRpb25MaXN0MSkpO1xuICAgIC8vIE9wdGlvbiAyXG4gICAgbGV0IG9wdGlvblR5cGUyOiBzdHJpbmc7XG4gICAgY29uc3QgcmFuZG9tMiA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHJhbmRvbTIgPCA3IC8gMjApIHtcbiAgICAgIG9wdGlvblR5cGUyID0gXCJza2lsbFwiO1xuICAgIH0gZWxzZSBpZiAocmFuZG9tMiA8IDE0IC8gMjApIHtcbiAgICAgIG9wdGlvblR5cGUyID0gXCJ3ZWFwb25cIjtcbiAgICB9IGVsc2UgaWYgKHJhbmRvbTIgPCAxOSAvIDIwKSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiaXRlbVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiU3RhdFVwXCI7XG4gICAgfVxuXG4gICAgbGV0IG9wdGlvbkxpc3QyID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTIpO1xuXG4gICAgaWYgKCFwbGF5ZXIuY2FuT2ZmZXJTa2lsbCgpKSB7XG4gICAgICBvcHRpb25MaXN0MiA9IG9wdGlvbkxpc3QyLmZpbHRlcihcbiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLm9wdGlvblR5cGUgIT09IFwic2tpbGxcIlxuICAgICAgKTtcbiAgICAgIGlmICghcGxheWVyLmNhbk9mZmVyV2VhcG9uKCkpIHtcbiAgICAgICAgb3B0aW9uTGlzdDIgPSBvcHRpb25MaXN0Mi5maWx0ZXIoXG4gICAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLm9wdGlvblR5cGUgIT09IFwid2VhcG9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuY2FuT2ZmZXJJdGVtKCkpIHtcbiAgICAgICAgICBvcHRpb25MaXN0MiA9IG9wdGlvbkxpc3QyLmZpbHRlcihcbiAgICAgICAgICAgIChvcHRpb24pID0+IG9wdGlvbi5vcHRpb25UeXBlICE9PSBcIml0ZW1cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zLnB1c2godGhpcy5zZWxlY3RSYW5kb21PcHRpb24ob3B0aW9uTGlzdDIpKTtcblxuICAgIC8vIE9wdGlvbiAzXG4gICAgbGV0IG9wdGlvblR5cGUzOiBzdHJpbmc7XG4gICAgY29uc3QgcmFuZG9tMyA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHJhbmRvbTMgPCAwLjUpIHtcbiAgICAgIG9wdGlvblR5cGUzID0gXCJ3ZWFwb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uVHlwZTMgPSBcIml0ZW1cIjtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9uTGlzdDMgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMyk7XG5cbiAgICBpZiAoIXBsYXllci5jYW5PZmZlcldlYXBvbigpKSB7XG4gICAgICBvcHRpb25MaXN0MyA9IG9wdGlvbkxpc3QzLmZpbHRlcihcbiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLm9wdGlvblR5cGUgIT09IFwid2VhcG9uXCJcbiAgICAgICk7XG4gICAgICBpZiAoIXBsYXllci5jYW5PZmZlckl0ZW0oKSkge1xuICAgICAgICBvcHRpb25MaXN0MyA9IG9wdGlvbkxpc3QzLmZpbHRlcihcbiAgICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ub3B0aW9uVHlwZSAhPT0gXCJpdGVtXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuY2FuT2ZmZXJTa2lsbCgpKSB7XG4gICAgICAgICAgb3B0aW9uTGlzdDMgPSBvcHRpb25MaXN0My5maWx0ZXIoXG4gICAgICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ub3B0aW9uVHlwZSA9PT0gXCJza2lsbFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRyeSB1cCB0byA1IHRpbWVzIHRvIGdldCBhbiBvcHRpb24gZnJvbSB0aGUgbGlzdCBpZiBza2lsbCBvcHRpb24gaXMgbm90IGF2YWlsYWJsZS5cbiAgICBsZXQgbWF4VHJpZXMgPSA1O1xuICAgIHdoaWxlIChtYXhUcmllcyA+IDApIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5zZWxlY3RSYW5kb21PcHRpb24ob3B0aW9uTGlzdDMpO1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLm9wdGlvblR5cGUgPT09IFwic2tpbGxcIikge1xuICAgICAgICBvcHRpb25zLnB1c2goc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG1heFRyaWVzLS07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHByZXZpb3VzIGNoZWNrIGZhaWxzLCBhZGQgdGhlIGZvb2Qgb3B0aW9uIHRvIHRoZSBvcHRpb25zIGxpc3QuXG4gICAgaWYgKG1heFRyaWVzID09PSAwKSB7XG4gICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIkZvb2RPcHRpb25cIiwgMSkpO1xuICAgIH1cblxuICAgIC8vIE9wdGlvbiA0XG4gICAgbGV0IG9wdGlvblR5cGU0OiBzdHJpbmc7XG4gICAgY29uc3QgcmFuZG9tNCA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHJhbmRvbTQgPCAwLjUpIHtcbiAgICAgIG9wdGlvblR5cGU0ID0gXCJ3ZWFwb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uVHlwZTQgPSBcIml0ZW1cIjtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9uTGlzdDQgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlNCk7XG5cbiAgICBpZiAoIXBsYXllci5jYW5PZmZlcldlYXBvbigpICYmICFwbGF5ZXIuY2FuT2ZmZXJJdGVtKCkpIHtcbiAgICAgIG9wdGlvbnMucHVzaChuZXcgT3B0aW9uKFwiSG9sb0NvaW5PcHRpb25cIiwgMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcnkgdXAgdG8gNSB0aW1lcyB0byBnZXQgYW4gb3B0aW9uIGZyb20gdGhlIGxpc3QgaWYgdGhlIGZpcnN0IHR5cGUgaXMgbm90IGF2YWlsYWJsZS5cbiAgICAgIG1heFRyaWVzID0gNTtcbiAgICAgIHdoaWxlIChtYXhUcmllcyA+IDApIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdFJhbmRvbU9wdGlvbihvcHRpb25MaXN0NCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoc2VsZWN0ZWRPcHRpb24ub3B0aW9uVHlwZSA9PT0gXCJ3ZWFwb25cIiAmJiBwbGF5ZXIuY2FuT2ZmZXJXZWFwb24oKSkgfHxcbiAgICAgICAgICAoc2VsZWN0ZWRPcHRpb24ub3B0aW9uVHlwZSA9PT0gXCJpdGVtXCIgJiYgcGxheWVyLmNhbk9mZmVySXRlbSgpKVxuICAgICAgICApIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2goc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG1heFRyaWVzLS07XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGVjayBmYWlscywgYWRkIHRoZSBIb2xvQ29pbiBvcHRpb24gdG8gdGhlIG9wdGlvbnMgbGlzdC5cbiAgICAgIGlmIChtYXhUcmllcyA9PT0gMCkge1xuICAgICAgICBvcHRpb25zLnB1c2gobmV3IE9wdGlvbihcIkhvbG9Db2luT3B0aW9uXCIsIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8vIFVzYWdlIGV4YW1wbGVcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHN3b3JkOiBjYy5Ob2RlID0gbnVsbDtcbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdE9wdGlvbnMocGxheWVyKTtcbiAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudC5vcHRpb25UeXBlLCBlbGVtZW50LndlaWdodCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/MenuController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fdb8FA7KlGu4Lj3S+YX40a', 'MenuController');
// Script/Controller/MenuController.ts

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
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuController = /** @class */ (function (_super) {
    __extends(MenuController, _super);
    function MenuController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataPlayer = null;
        _this.character = null;
        _this.characterList = Array();
        _this.displayName = null;
        _this.weaponIconList = Array();
        _this.hpAmount = null;
        _this.atkAmount = null;
        _this.spdAmount = null;
        _this.crtAmount = null;
        _this.weaponIcon = null;
        _this.weaponName = null;
        _this.description = null;
        _this.backgroundMusic = null;
        _this.charSelectSound = null;
        _this.buttonSound = null;
        _this.currentIndex = 0;
        return _this;
    }
    MenuController_1 = MenuController;
    MenuController.prototype.onLoad = function () {
        Utils_1.default.setLocal("Sound", true);
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.AudioSource).resume();
        else
            this.node.getComponent(cc.AudioSource).pause();
        MenuController_1.instance = this;
        if (Utils_1.default.getLocal("Sound") == null)
            Utils_1.default.setLocal("Sound", true);
        this.characters = this.dataPlayer.json.character;
        cc.director.preloadScene("Gamescene");
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.loadData(this.currentIndex);
    };
    MenuController.prototype.onPlayButtonClick = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        cc.director.loadScene("Gamescene");
    };
    MenuController.prototype.onNextCharacterClick = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.charSelectSound, false, 1);
        this.currentIndex++;
        var index = Math.abs(this.currentIndex) % this.characters.length;
        this.loadData(Math.abs(index));
    };
    MenuController.prototype.onPreCharacterClick = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.charSelectSound, false, 1);
        this.currentIndex--;
        var index = Math.abs(this.currentIndex) % this.characters.length;
        this.loadData(Math.abs(index));
    };
    MenuController.prototype.loadData = function (index) {
        var characterData = this.characters[index];
        Utils_1.default.setCharacter(characterData.name);
        if (Utils_1.default.getLocal(characterData.name + "LV") == null) {
            Utils_1.default.setLocal(characterData.name + "LV", 1);
        }
        this.level = Utils_1.default.getLocal(characterData.name + "LV");
        Utils_1.default.setCharacterLevel(this.level);
        this.character.removeAllChildren();
        this.character.addChild(cc.instantiate(this.characterList[index]));
        this.displayName.string = characterData.name;
        this.hpAmount.string = characterData.stats[this.level - 1].health;
        this.atkAmount.string = "1." + characterData.stats[this.level - 1].atk;
        this.spdAmount.string = characterData.stats[this.level - 1].speed;
        this.crtAmount.string = characterData.stats[this.level - 1].crit + "%";
        this.weaponIcon.spriteFrame = this.weaponIconList[index];
        this.weaponName.string = characterData.weapon;
        this.description.string = characterData.weaponDes;
    };
    MenuController.prototype.start = function () { };
    MenuController.prototype.update = function (dt) {
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.AudioSource).resume();
        else
            this.node.getComponent(cc.AudioSource).pause();
    };
    var MenuController_1;
    __decorate([
        property(cc.JsonAsset)
    ], MenuController.prototype, "dataPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], MenuController.prototype, "character", void 0);
    __decorate([
        property(Array(cc.Prefab))
    ], MenuController.prototype, "characterList", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "displayName", void 0);
    __decorate([
        property(Array(cc.SpriteFrame))
    ], MenuController.prototype, "weaponIconList", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "hpAmount", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "atkAmount", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "spdAmount", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "crtAmount", void 0);
    __decorate([
        property(cc.Sprite)
    ], MenuController.prototype, "weaponIcon", void 0);
    __decorate([
        property(cc.Label)
    ], MenuController.prototype, "weaponName", void 0);
    __decorate([
        property(cc.RichText)
    ], MenuController.prototype, "description", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MenuController.prototype, "backgroundMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MenuController.prototype, "charSelectSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MenuController.prototype, "buttonSound", void 0);
    MenuController = MenuController_1 = __decorate([
        ccclass
    ], MenuController);
    return MenuController;
}(cc.Component));
exports.default = MenuController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNZW51Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE2RkM7UUExRkMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBcUIsS0FBSyxFQUFhLENBQUM7UUFFckQsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBMEIsS0FBSyxFQUFrQixDQUFDO1FBRWhFLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRWhDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUVyQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFFckMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBR2pDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDOztJQTJEM0IsQ0FBQzt1QkE3Rm9CLGNBQWM7SUFtQ2pDLCtCQUFNLEdBQU47UUFDRSxlQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FB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QUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7dURBQ1U7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyREFDYztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJEQUNjO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7dURBQ1U7SUEvQmQsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTZGbEM7SUFBRCxxQkFBQztDQTdGRCxBQTZGQyxDQTdGMkMsRUFBRSxDQUFDLFNBQVMsR0E2RnZEO2tCQTdGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGluc3RhbmNlOiBNZW51Q29udHJvbGxlcjtcbiAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcbiAgZGF0YVBsYXllcjogY2MuSnNvbkFzc2V0ID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShBcnJheShjYy5QcmVmYWIpKVxuICBjaGFyYWN0ZXJMaXN0OiBBcnJheTxjYy5QcmVmYWI+ID0gQXJyYXk8Y2MuUHJlZmFiPigpO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGRpc3BsYXlOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShBcnJheShjYy5TcHJpdGVGcmFtZSkpXG4gIHdlYXBvbkljb25MaXN0OiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBBcnJheTxjYy5TcHJpdGVGcmFtZT4oKTtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBocEFtb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGF0a0Ftb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHNwZEFtb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGNydEFtb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICB3ZWFwb25JY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHdlYXBvbk5hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxuICBkZXNjcmlwdGlvbjogY2MuUmljaFRleHQgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBiYWNrZ3JvdW5kTXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGNoYXJTZWxlY3RTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgYnV0dG9uU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGNoYXJhY3RlcnM7XG4gIGxldmVsO1xuICBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XG4gIG9uTG9hZCgpIHtcbiAgICBVdGlscy5zZXRMb2NhbChcIlNvdW5kXCIsIHRydWUpO1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucmVzdW1lKCk7XG4gICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wYXVzZSgpO1xuICAgIE1lbnVDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBudWxsKSBVdGlscy5zZXRMb2NhbChcIlNvdW5kXCIsIHRydWUpO1xuICAgIHRoaXMuY2hhcmFjdGVycyA9IHRoaXMuZGF0YVBsYXllci5qc29uLmNoYXJhY3RlcjtcbiAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lc2NlbmVcIik7XG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5sb2FkRGF0YSh0aGlzLmN1cnJlbnRJbmRleCk7XG4gIH1cbiAgb25QbGF5QnV0dG9uQ2xpY2soKSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uU291bmQsIGZhbHNlLCAxKTtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lc2NlbmVcIik7XG4gIH1cbiAgb25OZXh0Q2hhcmFjdGVyQ2xpY2soKSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY2hhclNlbGVjdFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICBsZXQgaW5kZXggPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRJbmRleCkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIHRoaXMubG9hZERhdGEoTWF0aC5hYnMoaW5kZXgpKTtcbiAgfVxuICBvblByZUNoYXJhY3RlckNsaWNrKCkge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmNoYXJTZWxlY3RTb3VuZCwgZmFsc2UsIDEpO1xuICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgbGV0IGluZGV4ID0gTWF0aC5hYnModGhpcy5jdXJyZW50SW5kZXgpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICB0aGlzLmxvYWREYXRhKE1hdGguYWJzKGluZGV4KSk7XG4gIH1cbiAgbG9hZERhdGEoaW5kZXg6IG51bWJlcikge1xuICAgIGxldCBjaGFyYWN0ZXJEYXRhID0gdGhpcy5jaGFyYWN0ZXJzW2luZGV4XTtcbiAgICBVdGlscy5zZXRDaGFyYWN0ZXIoY2hhcmFjdGVyRGF0YS5uYW1lKTtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoY2hhcmFjdGVyRGF0YS5uYW1lICsgXCJMVlwiKSA9PSBudWxsKSB7XG4gICAgICBVdGlscy5zZXRMb2NhbChjaGFyYWN0ZXJEYXRhLm5hbWUgKyBcIkxWXCIsIDEpO1xuICAgIH1cbiAgICB0aGlzLmxldmVsID0gVXRpbHMuZ2V0TG9jYWwoY2hhcmFjdGVyRGF0YS5uYW1lICsgXCJMVlwiKTtcbiAgICBVdGlscy5zZXRDaGFyYWN0ZXJMZXZlbCh0aGlzLmxldmVsKTtcbiAgICB0aGlzLmNoYXJhY3Rlci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIHRoaXMuY2hhcmFjdGVyLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHRoaXMuY2hhcmFjdGVyTGlzdFtpbmRleF0pKTtcbiAgICB0aGlzLmRpc3BsYXlOYW1lLnN0cmluZyA9IGNoYXJhY3RlckRhdGEubmFtZTtcbiAgICB0aGlzLmhwQW1vdW50LnN0cmluZyA9IGNoYXJhY3RlckRhdGEuc3RhdHNbdGhpcy5sZXZlbCAtIDFdLmhlYWx0aDtcbiAgICB0aGlzLmF0a0Ftb3VudC5zdHJpbmcgPSBcIjEuXCIgKyBjaGFyYWN0ZXJEYXRhLnN0YXRzW3RoaXMubGV2ZWwgLSAxXS5hdGs7XG4gICAgdGhpcy5zcGRBbW91bnQuc3RyaW5nID0gY2hhcmFjdGVyRGF0YS5zdGF0c1t0aGlzLmxldmVsIC0gMV0uc3BlZWQ7XG4gICAgdGhpcy5jcnRBbW91bnQuc3RyaW5nID0gY2hhcmFjdGVyRGF0YS5zdGF0c1t0aGlzLmxldmVsIC0gMV0uY3JpdCArIFwiJVwiO1xuICAgIHRoaXMud2VhcG9uSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMud2VhcG9uSWNvbkxpc3RbaW5kZXhdO1xuICAgIHRoaXMud2VhcG9uTmFtZS5zdHJpbmcgPSBjaGFyYWN0ZXJEYXRhLndlYXBvbjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnN0cmluZyA9IGNoYXJhY3RlckRhdGEud2VhcG9uRGVzO1xuICB9XG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnJlc3VtZSgpO1xuICAgIGVsc2UgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGF1c2UoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/SlotController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '145b7r+bNZJHoxfw9nmx9MA', 'SlotController');
// Script/Controller/SlotController.ts

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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlotController = /** @class */ (function (_super) {
    __extends(SlotController, _super);
    function SlotController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weaponSlotList = new Array();
        _this.itemSlotList = new Array();
        _this.nullSpriteFrame = null;
        _this.itemList = new Array();
        _this.weaponList = new Array();
        return _this;
    }
    SlotController_1 = SlotController;
    SlotController.prototype.onLoad = function () {
        SlotController_1.instance = this;
    };
    SlotController.prototype.updateSlot = function () {
        this.itemList = GameController_1.default.instance.equipedItem;
        this.weaponList = GameController_1.default.instance.equipedWeapon;
        // console.log(this.weaponList);
        for (var i = 0; i < this.weaponSlotList.length; i++) {
            if (this.weaponList[i] == undefined)
                break;
            if (this.weaponList[i].displayIcon)
                this.weaponSlotList[i]
                    .getChildByName("WeaponIcon")
                    .getComponent(cc.Sprite).spriteFrame = this.weaponList[i].displayIcon;
            else
                this.weaponSlotList[i]
                    .getChildByName("WeaponIcon")
                    .getComponent(cc.Sprite).spriteFrame = this.nullSpriteFrame;
            this.weaponSlotList[i]
                .getChildByName("WeaponLevelLabel")
                .getComponent(cc.Label).string = "LV " + this.weaponList[i].level;
            this.weaponSlotList[i].getChildByName("WeaponIcon").opacity = 255;
        }
        for (var i = 0; i < this.itemSlotList.length; i++) {
            if (this.itemList[i] == undefined)
                break;
            if (this.itemList[i].displayIcon)
                this.itemSlotList[i]
                    .getChildByName("ItemIcon")
                    .getComponent(cc.Sprite).spriteFrame = this.itemList[i].displayIcon;
            else
                this.itemSlotList[i]
                    .getChildByName("ItemIcon")
                    .getComponent(cc.Sprite).spriteFrame = this.nullSpriteFrame;
            this.itemSlotList[i]
                .getChildByName("ItemLevelLabel")
                .getComponent(cc.Label).string = "LV " + this.itemList[i].level;
            this.itemSlotList[i].getChildByName("ItemIcon").opacity = 255;
        }
    };
    SlotController.prototype.start = function () { };
    SlotController.prototype.update = function (dt) {
        this.updateSlot();
    };
    var SlotController_1;
    __decorate([
        property(Array(cc.Node))
    ], SlotController.prototype, "weaponSlotList", void 0);
    __decorate([
        property(Array(cc.Node))
    ], SlotController.prototype, "itemSlotList", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SlotController.prototype, "nullSpriteFrame", void 0);
    SlotController = SlotController_1 = __decorate([
        ccclass
    ], SlotController);
    return SlotController;
}(cc.Component));
exports.default = SlotController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTbG90Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFzREM7UUFwREMsb0JBQWMsR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUV0RCxrQkFBWSxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDO1FBRXBELHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUN2QyxjQUFRLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUN4QyxnQkFBVSxHQUFlLElBQUksS0FBSyxFQUFPLENBQUM7O0lBOEM1QyxDQUFDO3VCQXREb0IsY0FBYztJQVVqQywrQkFBTSxHQUFOO1FBQ0UsZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDeEQsZ0NBQWdDO1FBRWhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztnQkFBRSxNQUFNO1lBQzNDLElBQUks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YXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KEFycmF5KGNjLk5vZGUpKVxuICB3ZWFwb25TbG90TGlzdDogQXJyYXk8Y2MuTm9kZT4gPSBuZXcgQXJyYXk8Y2MuTm9kZT4oKTtcbiAgQHByb3BlcnR5KEFycmF5KGNjLk5vZGUpKVxuICBpdGVtU2xvdExpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgbnVsbFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIGl0ZW1MaXN0OiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgd2VhcG9uTGlzdDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIHN0YXRpYyBpbnN0YW5jZTogU2xvdENvbnRyb2xsZXI7XG4gIG9uTG9hZCgpIHtcbiAgICBTbG90Q29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cbiAgdXBkYXRlU2xvdCgpIHtcbiAgICB0aGlzLml0ZW1MaXN0ID0gR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZXF1aXBlZEl0ZW07XG4gICAgdGhpcy53ZWFwb25MaXN0ID0gR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZXF1aXBlZFdlYXBvbjtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndlYXBvbkxpc3QpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlYXBvblNsb3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy53ZWFwb25MaXN0W2ldID09IHVuZGVmaW5lZCkgYnJlYWs7XG4gICAgICBpZiAodGhpcy53ZWFwb25MaXN0W2ldLmRpc3BsYXlJY29uKVxuICAgICAgICB0aGlzLndlYXBvblNsb3RMaXN0W2ldXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiV2VhcG9uSWNvblwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud2VhcG9uTGlzdFtpXS5kaXNwbGF5SWNvbjtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy53ZWFwb25TbG90TGlzdFtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIldlYXBvbkljb25cIilcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm51bGxTcHJpdGVGcmFtZTtcbiAgICAgIHRoaXMud2VhcG9uU2xvdExpc3RbaV1cbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiV2VhcG9uTGV2ZWxMYWJlbFwiKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIkxWIFwiICsgdGhpcy53ZWFwb25MaXN0W2ldLmxldmVsO1xuICAgICAgdGhpcy53ZWFwb25TbG90TGlzdFtpXS5nZXRDaGlsZEJ5TmFtZShcIldlYXBvbkljb25cIikub3BhY2l0eSA9IDI1NTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1TbG90TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaXRlbUxpc3RbaV0gPT0gdW5kZWZpbmVkKSBicmVhaztcbiAgICAgIGlmICh0aGlzLml0ZW1MaXN0W2ldLmRpc3BsYXlJY29uKVxuICAgICAgICB0aGlzLml0ZW1TbG90TGlzdFtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkl0ZW1JY29uXCIpXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtTGlzdFtpXS5kaXNwbGF5SWNvbjtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5pdGVtU2xvdExpc3RbaV1cbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJJdGVtSWNvblwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubnVsbFNwcml0ZUZyYW1lO1xuICAgICAgdGhpcy5pdGVtU2xvdExpc3RbaV1cbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiSXRlbUxldmVsTGFiZWxcIilcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJMViBcIiArIHRoaXMuaXRlbUxpc3RbaV0ubGV2ZWw7XG4gICAgICB0aGlzLml0ZW1TbG90TGlzdFtpXS5nZXRDaGlsZEJ5TmFtZShcIkl0ZW1JY29uXCIpLm9wYWNpdHkgPSAyNTU7XG4gICAgfVxuICB9XG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLnVwZGF0ZVNsb3QoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/CameraController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f725fGxpxdIvrW5nqKPk49r', 'CameraController');
// Script/Controller/CameraController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Player = null;
        _this.UI = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        this.node.setPosition(this.Player.position);
        this.UI.setPosition(this.Player.position);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Player", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "UI", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxDYW1lcmFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0JDO1FBZEMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixRQUFFLEdBQVksSUFBSSxDQUFDOztJQVlyQixDQUFDO0lBVkMsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0M7SUFKQSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0I1QjtJQUFELGVBQUM7Q0FoQkQsQUFnQkMsQ0FoQnFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0JqRDtrQkFoQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIFBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBVSTogY2MuTm9kZSA9IG51bGw7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLlBsYXllci5wb3NpdGlvbik7XG4gICAgdGhpcy5VSS5zZXRQb3NpdGlvbih0aGlzLlBsYXllci5wb3NpdGlvbik7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/WorldScrolling.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aaa0ZNALtGtJ2LEPuLk3xj', 'WorldScrolling');
// Script/Controller/WorldScrolling.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WorldScrolling = /** @class */ (function (_super) {
    __extends(WorldScrolling, _super);
    function WorldScrolling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.tileSize = 3849;
        _this.terrainTiles = [];
        _this.scrollDistance = _this.tileSize * 3;
        return _this;
    }
    WorldScrolling_1 = WorldScrolling;
    WorldScrolling.prototype.onLoad = function () {
        WorldScrolling_1.instance = this;
        this.tileSize = this.tileSize / 2;
        this.changeDistance = this.tileSize * 3;
    };
    WorldScrolling.prototype.start = function () { };
    WorldScrolling.prototype.update = function (dt) {
        for (var i = 0; i < this.terrainTiles.length; i++) {
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
    };
    var WorldScrolling_1;
    __decorate([
        property(cc.Node)
    ], WorldScrolling.prototype, "player", void 0);
    __decorate([
        property(cc.Integer)
    ], WorldScrolling.prototype, "tileSize", void 0);
    __decorate([
        property(cc.Node)
    ], WorldScrolling.prototype, "terrainTiles", void 0);
    WorldScrolling = WorldScrolling_1 = __decorate([
        ccclass
    ], WorldScrolling);
    return WorldScrolling;
}(cc.Component));
exports.default = WorldScrolling;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxXb3JsZFNjcm9sbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXVDQztRQXBDQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFHaEIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFJN0Isb0JBQWMsR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7SUEwQnJDLENBQUM7dUJBdkNvQixjQUFjO0lBZWpDLCtCQUFNLEdBQU47UUFDRSxnQkFBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZELElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2hELElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDaEQsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWM7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDaEQsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYztnQkFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUNqRDtJQUNILENBQUM7O0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztvREFDTDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNXO0lBVFYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXVDbEM7SUFBRCxxQkFBQztDQXZDRCxBQXVDQyxDQXZDMkMsRUFBRSxDQUFDLFNBQVMsR0F1Q3ZEO2tCQXZDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRTY3JvbGxpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IFdvcmxkU2Nyb2xsaW5nO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgdGlsZVNpemUgPSAzODQ5O1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0ZXJyYWluVGlsZXM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gIHBsYXllclRpbGVQb3M6IGNjLlZlYzI7XG4gIGN1cnJlbnRwbGF5ZXJUaWxlUG9zOiBjYy5WZWMyO1xuICBzY3JvbGxEaXN0YW5jZSA9IHRoaXMudGlsZVNpemUgKiAzO1xuICBjaGFuZ2VEaXN0YW5jZTogbnVtYmVyO1xuICBvbkxvYWQoKSB7XG4gICAgV29ybGRTY3JvbGxpbmcuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgdGhpcy50aWxlU2l6ZSA9IHRoaXMudGlsZVNpemUgLyAyO1xuICAgIHRoaXMuY2hhbmdlRGlzdGFuY2UgPSB0aGlzLnRpbGVTaXplICogMztcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVycmFpblRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGlzdGFuY2VYID0gdGhpcy5wbGF5ZXIueCAtIHRoaXMudGVycmFpblRpbGVzW2ldLng7XG4gICAgICB2YXIgZGlzdGFuY2VZID0gdGhpcy5wbGF5ZXIueSAtIHRoaXMudGVycmFpblRpbGVzW2ldLnk7XG5cbiAgICAgIGlmIChkaXN0YW5jZVggPj0gdGhpcy5jaGFuZ2VEaXN0YW5jZSlcbiAgICAgICAgdGhpcy50ZXJyYWluVGlsZXNbaV0ueCArPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgICAgaWYgKGRpc3RhbmNlWCA8PSAtdGhpcy5jaGFuZ2VEaXN0YW5jZSlcbiAgICAgICAgdGhpcy50ZXJyYWluVGlsZXNbaV0ueCAtPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgICAgaWYgKGRpc3RhbmNlWSA+PSB0aGlzLmNoYW5nZURpc3RhbmNlKVxuICAgICAgICB0aGlzLnRlcnJhaW5UaWxlc1tpXS55ICs9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgICBpZiAoZGlzdGFuY2VZIDw9IC10aGlzLmNoYW5nZURpc3RhbmNlKVxuICAgICAgICB0aGlzLnRlcnJhaW5UaWxlc1tpXS55IC09IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgfVxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/UIController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '236acwHreNOfYvV22pE9Sju', 'UIController');
// Script/Controller/UIController.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var PlayerController_1 = require("../Player/PlayerController");
var GameController_1 = require("./GameController");
var OptionGenerator_1 = require("./OptionGenerator");
var SlotController_1 = require("./SlotController");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIController = /** @class */ (function (_super) {
    __extends(UIController, _super);
    function UIController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.killLabel = null;
        _this.coinLabel = null;
        _this.expBar = null;
        _this.screenCover = null;
        _this.buffParent = null;
        _this.buffNodePrefab = null;
        _this.levelLabel = null;
        _this.secondLabel = null;
        _this.minusLabel = null;
        _this.statsPanel = null;
        _this.pauseMenu = null;
        _this.upgradePanel = null;
        _this.displayName = null;
        _this.levelUpLabel = null;
        _this.hpAmount = null;
        _this.atkAmount = null;
        _this.spdAmount = null;
        _this.crtAmount = null;
        _this.pickupAmount = null;
        _this.hasteAmount = null;
        _this.portrait = null;
        _this.portraitList = new Array();
        _this.gameOverLabel = null;
        _this.retryButton = null;
        _this.mainMenuButton = null;
        _this.gainedHolocoins = null;
        _this.buttonSound = null;
        _this.dynamicBuff = new Array();
        _this.buffNodeList = new Array();
        return _this;
    }
    UIController_1 = UIController;
    // LIFE-CYCLE CALLBACKS:
    UIController.prototype.onLoad = function () {
        UIController_1.instance = this;
        this.gameController = GameController_1.default.instance;
    };
    UIController.prototype.onClickPauseButton = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        if (this.gameController.isGameOver)
            return;
        Utils_1.default.isPause = true;
        this.statsPanel.active = true;
        this.pauseMenu.active = true;
    };
    UIController.prototype.onResumeButton = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        if (this.gameController.isGameOver)
            return;
        Utils_1.default.isPause = false;
        this.statsPanel.active = false;
        this.pauseMenu.active = false;
    };
    UIController.prototype.onReturnButton = function () {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        Utils_1.default.isPause = false;
        cc.director.loadScene("Main Menu");
    };
    UIController.prototype.onUpgradeButtonClick = function (event, customEventData) {
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.buttonSound, false, 1);
        Utils_1.default.isPause = false;
        this.statsPanel.active = false;
        this.upgradePanel.active = false;
        this.levelUpLabel.node.active = false;
        OptionGenerator_1.default.instance.onOptionSelect(customEventData);
        SlotController_1.default.instance.updateSlot();
    };
    UIController.prototype.start = function () { };
    UIController.prototype.updateKillLabel = function (amount) {
        this.killLabel.string = amount.toString();
    };
    UIController.prototype.updateCoinLabel = function (amount) {
        this.coinLabel.string = amount.toString();
    };
    UIController.prototype.updateExp = function (levelLabel, expRequired, expCurrent) {
        this.levelLabel.string = levelLabel;
        this.expBar.getComponent(cc.Sprite).fillRange = expCurrent / expRequired;
    };
    UIController.prototype.addNewBuff = function (buff) {
        this.dynamicBuff.push(buff);
        var buffNode = cc.instantiate(this.buffNodePrefab);
        buffNode.parent = this.buffParent;
        buffNode.x = this.buffNodeList.length * 70;
        buffNode.getComponent(cc.Sprite).spriteFrame = buff.buffIcon;
        buffNode.getChildByName("Stack number").getComponent(cc.Label).string =
            buff.getCounting();
        this.buffNodeList.push(buffNode);
    };
    UIController.prototype.setPortrait = function (index) {
        this.portrait.getComponent(cc.Sprite).spriteFrame =
            this.portraitList[index];
        this.displayName.string = Utils_1.default.getCharacterByName().toString();
    };
    UIController.prototype.updateBuff = function () {
        for (var i = 0; i < this.buffNodeList.length; i++) {
            this.buffNodeList[i]
                .getChildByName("Stack number")
                .getComponent(cc.Label).string = this.dynamicBuff[i].getCounting();
        }
    };
    UIController.prototype.onLevelUp = function () {
        OptionGenerator_1.default.instance.displayOptions();
        Utils_1.default.isPause = true;
        this.screenCover.active = true;
        this.levelUpLabel.node.active = true;
        this.statsPanel.active = true;
        this.upgradePanel.active = true;
    };
    UIController.prototype.updateTimer = function () {
        var timer = this.gameController.timer;
        var minus = Math.floor(timer / 60);
        var second = Math.floor(timer - minus * 60);
        this.minusLabel.string = (minus < 10 ? "0" : "") + minus;
        this.secondLabel.string = (second < 10 ? "0" : "") + second;
        // if (minus < 10) this.minusLabel.string = "0" + minus;
        // else this.minusLabel.string = minus.toString();
        // if (second < 10) this.secondLabel.string = "0" + second;
        // else this.secondLabel.string = second.toString();
    };
    UIController.prototype.updateStats = function () {
        this.overallStats = OverallStats_1.default.instance;
        this.hpAmount.string =
            Math.ceil(PlayerController_1.default.instance.currentHp) +
                " / " +
                Math.ceil(PlayerController_1.default.instance.maxHp);
        this.atkAmount.string = this.overallStats.getAttackRate().toString() + "%";
        this.spdAmount.string = this.overallStats.getSpeedRate().toString() + "%";
        this.crtAmount.string = this.overallStats.getCritChance().toString() + "%";
        this.pickupAmount.string =
            this.overallStats.getPickupRangeRate().toString() + "%";
        this.hasteAmount.string = this.overallStats.getHasteRate().toString() + "%";
    };
    UIController.prototype.onGameOver = function () {
        Utils_1.default.isPause = true;
        cc.tween(this.gameOverLabel)
            .to(3, { position: cc.v3(0, 200) })
            .start();
        this.scheduleOnce(function () {
            this.mainMenuButton.active = true;
            this.retryButton.active = true;
            this.gainedHolocoins.node.active = true;
            this.gainedHolocoins.string =
                "Holocoins Gained: " + this.coinLabel.string;
        }, 3);
    };
    UIController.prototype.onRetryButtonClick = function () {
        cc.director.loadScene("Gamescene");
    };
    UIController.prototype.onMainMenuButtonClick = function () {
        cc.director.loadScene("Main Menu");
    };
    UIController.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            this.screenCover.active = true;
            return;
        }
        this.screenCover.active = false;
        this.updateTimer();
        this.updateBuff();
        // this.updateStats();
    };
    var UIController_1;
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "killLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "coinLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "expBar", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "screenCover", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "buffParent", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "buffNodePrefab", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "secondLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "minusLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "statsPanel", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "pauseMenu", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "upgradePanel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "displayName", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "levelUpLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "hpAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "atkAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "spdAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "crtAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "pickupAmount", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "hasteAmount", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "portrait", void 0);
    __decorate([
        property(Array(cc.SpriteFrame))
    ], UIController.prototype, "portraitList", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "gameOverLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "retryButton", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "mainMenuButton", void 0);
    __decorate([
        property(cc.Label)
    ], UIController.prototype, "gainedHolocoins", void 0);
    __decorate([
        property(cc.AudioClip)
    ], UIController.prototype, "buttonSound", void 0);
    UIController = UIController_1 = __decorate([
        ccclass
    ], UIController);
    return UIController;
}(cc.Component));
exports.default = UIController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxVSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEYsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCxtREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFxTUM7UUFsTUMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlC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VTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztzREFDa0M7SUFFbEU7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNVO0lBdkRkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxTWhDO0lBQUQsbUJBQUM7Q0FyTUQsQUFxTUMsQ0FyTXlDLEVBQUUsQ0FBQyxTQUFTLEdBcU1yRDtrQkFyTW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9NZW51L1NvdW5kXCI7XG5pbXBvcnQgT3ZlcmFsbFN0YXRzIGZyb20gXCIuLi9QbGF5ZXIvT3ZlcmFsbFN0YXRzXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi4vUGxheWVyL1BsYXllckNvbnRyb2xsZXJcIjtcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IE9wdGlvbkdlbmVyYXRvciBmcm9tIFwiLi9PcHRpb25HZW5lcmF0b3JcIjtcbmltcG9ydCBTbG90Q29udHJvbGxlciBmcm9tIFwiLi9TbG90Q29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IFVJQ29udHJvbGxlcjtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBraWxsTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBjb2luTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGV4cEJhcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzY3JlZW5Db3ZlcjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBidWZmUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgYnVmZk5vZGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHNlY29uZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbWludXNMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgc3RhdHNQYW5lbDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwYXVzZU1lbnU6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgdXBncmFkZVBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBkaXNwbGF5TmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxldmVsVXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGhwQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYXRrQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3BkQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgY3J0QW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgcGlja3VwQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgaGFzdGVBbW91bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBvcnRyYWl0OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KEFycmF5KGNjLlNwcml0ZUZyYW1lKSlcbiAgcG9ydHJhaXRMaXN0OiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBuZXcgQXJyYXk8Y2MuU3ByaXRlRnJhbWU+KCk7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lT3ZlckxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHJldHJ5QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG1haW5NZW51QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBnYWluZWRIb2xvY29pbnM6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgYnV0dG9uU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGR5bmFtaWNCdWZmOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgYnVmZk5vZGVMaXN0OiBBcnJheTxjYy5Ob2RlPiA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIG92ZXJhbGxTdGF0czogT3ZlcmFsbFN0YXRzO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBVSUNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBHYW1lQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgfVxuICBvbkNsaWNrUGF1c2VCdXR0b24oKSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uU291bmQsIGZhbHNlLCAxKTtcbiAgICBpZiAodGhpcy5nYW1lQ29udHJvbGxlci5pc0dhbWVPdmVyKSByZXR1cm47XG4gICAgVXRpbHMuaXNQYXVzZSA9IHRydWU7XG4gICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5wYXVzZU1lbnUuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBvblJlc3VtZUJ1dHRvbigpIHtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5idXR0b25Tb3VuZCwgZmFsc2UsIDEpO1xuICAgIGlmICh0aGlzLmdhbWVDb250cm9sbGVyLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICBVdGlscy5pc1BhdXNlID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucGF1c2VNZW51LmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIG9uUmV0dXJuQnV0dG9uKCkge1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJ1dHRvblNvdW5kLCBmYWxzZSwgMSk7XG4gICAgVXRpbHMuaXNQYXVzZSA9IGZhbHNlO1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW4gTWVudVwiKTtcbiAgfVxuICBvblVwZ3JhZGVCdXR0b25DbGljayhldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uU291bmQsIGZhbHNlLCAxKTtcbiAgICBVdGlscy5pc1BhdXNlID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudXBncmFkZVBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubGV2ZWxVcExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgT3B0aW9uR2VuZXJhdG9yLmluc3RhbmNlLm9uT3B0aW9uU2VsZWN0KGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgU2xvdENvbnRyb2xsZXIuaW5zdGFuY2UudXBkYXRlU2xvdCgpO1xuICB9XG4gIHN0YXJ0KCkge31cbiAgdXBkYXRlS2lsbExhYmVsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5raWxsTGFiZWwuc3RyaW5nID0gYW1vdW50LnRvU3RyaW5nKCk7XG4gIH1cbiAgdXBkYXRlQ29pbkxhYmVsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5jb2luTGFiZWwuc3RyaW5nID0gYW1vdW50LnRvU3RyaW5nKCk7XG4gIH1cbiAgdXBkYXRlRXhwKGxldmVsTGFiZWw6IHN0cmluZywgZXhwUmVxdWlyZWQ6IG51bWJlciwgZXhwQ3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyA9IGxldmVsTGFiZWw7XG4gICAgdGhpcy5leHBCYXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gZXhwQ3VycmVudCAvIGV4cFJlcXVpcmVkO1xuICB9XG5cbiAgYWRkTmV3QnVmZihidWZmOiBhbnkpIHtcbiAgICB0aGlzLmR5bmFtaWNCdWZmLnB1c2goYnVmZik7XG4gICAgdmFyIGJ1ZmZOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWZmTm9kZVByZWZhYik7XG4gICAgYnVmZk5vZGUucGFyZW50ID0gdGhpcy5idWZmUGFyZW50O1xuICAgIGJ1ZmZOb2RlLnggPSB0aGlzLmJ1ZmZOb2RlTGlzdC5sZW5ndGggKiA3MDtcbiAgICBidWZmTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGJ1ZmYuYnVmZkljb247XG4gICAgYnVmZk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFjayBudW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgYnVmZi5nZXRDb3VudGluZygpO1xuICAgIHRoaXMuYnVmZk5vZGVMaXN0LnB1c2goYnVmZk5vZGUpO1xuICB9XG4gIHNldFBvcnRyYWl0KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnBvcnRyYWl0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgIHRoaXMucG9ydHJhaXRMaXN0W2luZGV4XTtcbiAgICB0aGlzLmRpc3BsYXlOYW1lLnN0cmluZyA9IFV0aWxzLmdldENoYXJhY3RlckJ5TmFtZSgpLnRvU3RyaW5nKCk7XG4gIH1cbiAgdXBkYXRlQnVmZigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnVmZk5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmJ1ZmZOb2RlTGlzdFtpXVxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFjayBudW1iZXJcIilcbiAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5keW5hbWljQnVmZltpXS5nZXRDb3VudGluZygpO1xuICAgIH1cbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgT3B0aW9uR2VuZXJhdG9yLmluc3RhbmNlLmRpc3BsYXlPcHRpb25zKCk7XG4gICAgVXRpbHMuaXNQYXVzZSA9IHRydWU7XG4gICAgdGhpcy5zY3JlZW5Db3Zlci5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubGV2ZWxVcExhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnVwZ3JhZGVQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIHVwZGF0ZVRpbWVyKCkge1xuICAgIGxldCB0aW1lciA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIudGltZXI7XG4gICAgdmFyIG1pbnVzID0gTWF0aC5mbG9vcih0aW1lciAvIDYwKTtcbiAgICB2YXIgc2Vjb25kID0gTWF0aC5mbG9vcih0aW1lciAtIG1pbnVzICogNjApO1xuICAgIHRoaXMubWludXNMYWJlbC5zdHJpbmcgPSAobWludXMgPCAxMCA/IFwiMFwiIDogXCJcIikgKyBtaW51cztcbiAgICB0aGlzLnNlY29uZExhYmVsLnN0cmluZyA9IChzZWNvbmQgPCAxMCA/IFwiMFwiIDogXCJcIikgKyBzZWNvbmQ7XG5cbiAgICAvLyBpZiAobWludXMgPCAxMCkgdGhpcy5taW51c0xhYmVsLnN0cmluZyA9IFwiMFwiICsgbWludXM7XG4gICAgLy8gZWxzZSB0aGlzLm1pbnVzTGFiZWwuc3RyaW5nID0gbWludXMudG9TdHJpbmcoKTtcblxuICAgIC8vIGlmIChzZWNvbmQgPCAxMCkgdGhpcy5zZWNvbmRMYWJlbC5zdHJpbmcgPSBcIjBcIiArIHNlY29uZDtcbiAgICAvLyBlbHNlIHRoaXMuc2Vjb25kTGFiZWwuc3RyaW5nID0gc2Vjb25kLnRvU3RyaW5nKCk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoKSB7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2U7XG4gICAgdGhpcy5ocEFtb3VudC5zdHJpbmcgPVxuICAgICAgTWF0aC5jZWlsKFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuY3VycmVudEhwKSArXG4gICAgICBcIiAvIFwiICtcbiAgICAgIE1hdGguY2VpbChQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLm1heEhwKTtcbiAgICB0aGlzLmF0a0Ftb3VudC5zdHJpbmcgPSB0aGlzLm92ZXJhbGxTdGF0cy5nZXRBdHRhY2tSYXRlKCkudG9TdHJpbmcoKSArIFwiJVwiO1xuICAgIHRoaXMuc3BkQW1vdW50LnN0cmluZyA9IHRoaXMub3ZlcmFsbFN0YXRzLmdldFNwZWVkUmF0ZSgpLnRvU3RyaW5nKCkgKyBcIiVcIjtcbiAgICB0aGlzLmNydEFtb3VudC5zdHJpbmcgPSB0aGlzLm92ZXJhbGxTdGF0cy5nZXRDcml0Q2hhbmNlKCkudG9TdHJpbmcoKSArIFwiJVwiO1xuICAgIHRoaXMucGlja3VwQW1vdW50LnN0cmluZyA9XG4gICAgICB0aGlzLm92ZXJhbGxTdGF0cy5nZXRQaWNrdXBSYW5nZVJhdGUoKS50b1N0cmluZygpICsgXCIlXCI7XG4gICAgdGhpcy5oYXN0ZUFtb3VudC5zdHJpbmcgPSB0aGlzLm92ZXJhbGxTdGF0cy5nZXRIYXN0ZVJhdGUoKS50b1N0cmluZygpICsgXCIlXCI7XG4gIH1cbiAgb25HYW1lT3ZlcigpIHtcbiAgICBVdGlscy5pc1BhdXNlID0gdHJ1ZTtcbiAgICBjYy50d2Vlbih0aGlzLmdhbWVPdmVyTGFiZWwpXG4gICAgICAudG8oMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMjAwKSB9KVxuICAgICAgLnN0YXJ0KCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5tYWluTWVudUJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5yZXRyeUJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5nYWluZWRIb2xvY29pbnMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5nYWluZWRIb2xvY29pbnMuc3RyaW5nID1cbiAgICAgICAgXCJIb2xvY29pbnMgR2FpbmVkOiBcIiArIHRoaXMuY29pbkxhYmVsLnN0cmluZztcbiAgICB9LCAzKTtcbiAgfVxuXG4gIG9uUmV0cnlCdXR0b25DbGljaygpIHtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lc2NlbmVcIik7XG4gIH1cbiAgb25NYWluTWVudUJ1dHRvbkNsaWNrKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW4gTWVudVwiKTtcbiAgfVxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkge1xuICAgICAgdGhpcy5zY3JlZW5Db3Zlci5hY3RpdmUgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNjcmVlbkNvdmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlVGltZXIoKTtcbiAgICB0aGlzLnVwZGF0ZUJ1ZmYoKTtcbiAgICAvLyB0aGlzLnVwZGF0ZVN0YXRzKCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/OptionGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd90fcTBpmpOyIwBqVo41EuQ', 'OptionGenerator');
// Script/Controller/OptionGenerator.ts

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
var OverallStats_1 = require("../Player/OverallStats");
var PlayerController_1 = require("../Player/PlayerController");
var GameController_1 = require("./GameController");
var SlotController_1 = require("./SlotController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Other = /** @class */ (function () {
    function Other(statName, increaseAmount, des, displayIcon) {
        this.name = statName;
        this.increaseAmount = increaseAmount;
        this.description = des;
        this.displayIcon = displayIcon;
    }
    return Other;
}());
var Option = /** @class */ (function () {
    function Option(upgrade, type) {
        this.upgrade = upgrade;
        this.type = type;
    }
    return Option;
}());
var OptionGenerator = /** @class */ (function (_super) {
    __extends(OptionGenerator, _super);
    function OptionGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.upgrade = new Array();
        _this.otherIconList = new Array();
        _this.otherList = new Array();
        _this.options = [];
        _this.list = new Array();
        _this.itemList = new Array();
        _this.weaponList = new Array();
        _this.equipedWeapon = new Array();
        _this.equipedItem = new Array();
        _this.positionList = new Array();
        return _this;
    }
    OptionGenerator_1 = OptionGenerator;
    OptionGenerator.prototype.onLoad = function () {
        OptionGenerator_1.instance = this;
        this.otherList.push(new Other("Max HP Up", 10, "Increase max HP by 10%", this.otherIconList[0]));
        this.otherList.push(new Other("ATK Up", 8, "Increase ATK by 8%", this.otherIconList[1]));
        this.otherList.push(new Other("SPD Up", 12, "Increase SPD by 12%", this.otherIconList[2]));
        this.otherList.push(new Other("Crit Up", 3, "Increase critical chance by 3%", this.otherIconList[3]));
        this.otherList.push(new Other("Pick Up Range", 20, "Increase pick up range by 20%", this.otherIconList[4]));
        this.otherList.push(new Other("Haste Up", 5, "Increase haste by 5%", this.otherIconList[5]));
        this.otherList.push(new Other("Coin", 250, "Gain 250 coins", this.otherIconList[6]));
        this.otherList.push(new Other("Burger", 20, "Heal 20% max HP", this.otherIconList[7]));
        this.list.push(this.itemList);
        this.list.push(this.weaponList);
        this.list.push(this.equipedItem);
        this.list.push(this.equipedWeapon);
    };
    OptionGenerator.prototype.onOptionSelect = function (index) {
        if (this.options[index].type == "weapon" ||
            this.options[index].type == "item") {
            this.options[index].upgrade.level += 1;
        }
        switch (this.options[index].type) {
            case "burger":
                PlayerController_1.default.instance.healByPercentage(this.options[index].upgrade.increaseAmount);
                break;
            case "coin":
                GameController_1.default.instance.gainCoin(this.options[index].upgrade.increaseAmount);
                break;
            case "statUp":
                var name = this.options[index].upgrade.name;
                var amount = this.options[index].upgrade.increaseAmount;
                if (name == "Max HP Up")
                    OverallStats_1.default.instance.increaseMaxHPRate(amount);
                if (name == "ATK Up")
                    OverallStats_1.default.instance.increaseAttackRate(amount);
                if (name == "SPD Up")
                    OverallStats_1.default.instance.increaseSpeedRate(amount);
                if (name == "Crit Up")
                    OverallStats_1.default.instance.increaseCritChance(amount);
                if (name == "Pick Up Range")
                    OverallStats_1.default.instance.increasePickupRangeRate(amount);
                if (name == "Haste Up")
                    OverallStats_1.default.instance.increaseHasteRate(amount);
                break;
            default:
                break;
        }
        SlotController_1.default.instance.updateSlot();
        GameController_1.default.instance.tuyetvong();
    };
    OptionGenerator.prototype.optionSelection = function (list) {
        var random1 = Math.floor(Math.random() * list.length);
        var option = list[random1];
        switch (this.currentType) {
            case "item":
                this.itemList.splice(random1, 1);
                break;
            case "weapon":
                this.weaponList.splice(random1, 1);
                break;
            case "equipedWeapon":
                this.equipedWeapon.splice(random1, 1);
                break;
            case "equipedItem":
                this.equipedItem.splice(random1, 1);
                break;
            default:
                break;
        }
        return option;
    };
    OptionGenerator.prototype.generateOptionList = function (optionType) {
        var options = [];
        var random = Math.random();
        if (optionType === "weapon") {
            if (GameController_1.default.instance.equipedWeapon.length >= 6) {
                options = this.equipedWeapon;
                this.currentType = "equipedWeapon";
            }
            else {
                if (random < 0.5) {
                    options = this.equipedWeapon;
                    this.currentType = "equipedWeapon";
                    if (options.length == 0) {
                        options = this.weaponList;
                        this.currentType = "weapon";
                    }
                }
                else {
                    options = this.weaponList;
                    this.currentType = "weapon";
                    if (options.length == 0) {
                        options = this.equipedWeapon;
                        this.currentType = "equipedWeapon";
                    }
                }
            }
        }
        else if (optionType === "item") {
            if (GameController_1.default.instance.equipedItem.length >= 6) {
                options = this.equipedItem;
                this.currentType = "equipedItem";
            }
            else {
                if (random < 0.5) {
                    options = this.equipedItem;
                    this.currentType = "equipedItem";
                    if (options.length == 0) {
                        options = this.itemList;
                        this.currentType = "item";
                    }
                }
                else {
                    options = this.itemList;
                    this.currentType = "item";
                    if (options.length == 0) {
                        options = this.equipedItem;
                        this.currentType = "equipedItem";
                    }
                }
            }
        }
        else if (optionType === "statUp") {
            options = this.otherList.filter(function (item) { return item.name != "Burger" && item.name != "Coin"; });
        }
        else if (optionType === "burger") {
            options = this.otherList.filter(function (item) { return item.name == "Burger"; });
        }
        else if (optionType === "coin") {
            options = this.otherList.filter(function (item) { return item.name == "Coin"; });
        }
        return options;
    };
    OptionGenerator.prototype.generateOption1 = function () {
        var optionType1 = null;
        var optionList1;
        var random1 = Math.random();
        if (random1 < 9.5 / 20) {
            optionType1 = "weapon";
            optionList1 = this.generateOptionList(optionType1);
            if (optionList1.length == 0) {
                optionType1 = "item";
                optionList1 = this.generateOptionList(optionType1);
            }
            if (optionList1.length == 0) {
                optionType1 = "statUp";
                optionList1 = this.generateOptionList(optionType1);
            }
        }
        else if (random1 < 19 / 20) {
            optionType1 = "item";
            optionList1 = this.generateOptionList(optionType1);
            if (optionList1.length == 0) {
                optionType1 = "statUp";
                optionList1 = this.generateOptionList(optionType1);
            }
        }
        else {
            optionType1 = "statUp";
            optionList1 = this.generateOptionList(optionType1);
        }
        this.options.push(new Option(this.optionSelection(optionList1), optionType1));
        /////////////////////////////////
        var optionType2 = null;
        var optionList2;
        var random2 = Math.random();
        if (random2 < 9.5 / 20) {
            optionType2 = "weapon";
            optionList2 = this.generateOptionList(optionType2);
            if (optionList2.length == 0) {
                optionType2 = "item";
                optionList2 = this.generateOptionList(optionType2);
            }
            if (optionList2.length == 0) {
                optionType2 = "burger";
                optionList2 = this.generateOptionList(optionType2);
            }
        }
        else if (random2 < 19 / 20) {
            optionType2 = "item";
            optionList2 = this.generateOptionList(optionType2);
            if (optionList2.length == 0) {
                optionType2 = "burger";
                optionList2 = this.generateOptionList(optionType2);
            }
        }
        else {
            optionType2 = "burger";
            optionList2 = this.generateOptionList(optionType2);
        }
        this.options.push(new Option(this.optionSelection(optionList2), optionType2));
        /////////////////////////
        var optionType3 = null;
        var optionList3 = [];
        var random3 = Math.random();
        for (var i = 0; i < 5; i++) {
            if (random3 < 10 / 20) {
                optionType3 = "weapon";
                optionList3 = this.generateOptionList(optionType3);
            }
            else if (random3 < 20 / 20) {
                optionType3 = "item";
                optionList3 = this.generateOptionList(optionType3);
            }
            if (optionList3.length > 0) {
                break;
            }
        }
        if (optionList3.length == 0) {
            optionType3 = "coin";
            optionList3 = this.generateOptionList(optionType3);
        }
        this.options.push(new Option(this.optionSelection(optionList3), optionType3));
    };
    OptionGenerator.prototype.generateOption2 = function () {
        var optionType2 = null;
        var optionList2;
        var random1 = Math.random();
        if (random1 < 9.5 / 20) {
            optionType2 = "weapon";
            optionList2 = this.generateOptionList(optionType2);
            if (optionList2.length == 0) {
                optionType2 = "item";
                optionList2 = this.generateOptionList(optionType2);
            }
            if (optionList2.length == 0) {
                optionType2 = "burger";
                optionList2 = this.generateOptionList(optionType2);
            }
        }
        else if (random1 < 19 / 20) {
            optionType2 = "item";
            optionList2 = this.generateOptionList(optionType2);
            if (optionList2.length == 0) {
                optionType2 = "burger";
                optionList2 = this.generateOptionList(optionType2);
            }
        }
        else {
            optionType2 = "burger";
            optionList2 = this.generateOptionList(optionType2);
        }
        this.options.push(new Option(this.optionSelection(optionList2), optionType2));
    };
    OptionGenerator.prototype.generateOption3 = function () {
        var optionType3 = null;
        var optionList3 = [];
        var random3 = Math.random();
        for (var i = 0; i < 5; i++) {
            if (random3 < 10 / 20) {
                optionType3 = "weapon";
                optionList3 = this.generateOptionList(optionType3);
            }
            else if (random3 < 20 / 20) {
                optionType3 = "item";
                optionList3 = this.generateOptionList(optionType3);
            }
            if (optionList3.length > 0) {
                break;
            }
        }
        if (optionList3.length == 0) {
            optionType3 = "coin";
            optionList3 = this.generateOptionList(optionType3);
        }
        this.options.push(new Option(this.optionSelection(optionList3), optionType3));
    };
    OptionGenerator.prototype.generateOptions = function () {
        var _this = this;
        this.weaponList.length = 0;
        this.itemList.length = 0;
        this.equipedItem.length = 0;
        this.equipedWeapon.length = 0;
        GameController_1.default.instance.weaponList.forEach(function (element) {
            if (element.isEquiped == false && !element.isLockLevel)
                _this.weaponList.push(element);
        });
        GameController_1.default.instance.itemList.forEach(function (element) {
            if (element.isEquiped == false && !element.isLockLevel)
                _this.itemList.push(element);
        });
        GameController_1.default.instance.equipedItem.forEach(function (element) {
            if (element.isEquiped == true && !element.isLockLevel)
                _this.equipedItem.push(element);
        });
        GameController_1.default.instance.equipedWeapon.forEach(function (element) {
            if (element.isEquiped == true && !element.isLockLevel)
                _this.equipedWeapon.push(element);
        });
        this.generateOption1();
        // this.generateOption2();
        // this.generateOption3();
        // console.log(this.options);
    };
    OptionGenerator.prototype.displayOptions = function () {
        for (var i = 0; i < this.upgrade.length; i++) {
            this.upgrade[i].x += 1000;
            cc.tween(this.upgrade[i])
                .to(0.1, {
                position: cc.v3(this.positionList[i]),
            })
                .start();
        }
        this.options.length = 0;
        this.generateOptions();
        for (var i = 0; i < this.upgrade.length; i++) {
            if (this.options[i] == undefined)
                continue;
            if (this.options[i].type == "weapon" || this.options[i].type == "item") {
                this.upgrade[i]
                    .getChildByName("Upgrade Name")
                    .getComponent(cc.Label).string = this.options[i].upgrade.name;
                if (this.options[i].upgrade.level > 0) {
                    this.upgrade[i]
                        .getChildByName("Upgrade Name")
                        .getComponent(cc.Label).string =
                        this.options[i].upgrade.name +
                            " LV " +
                            (this.options[i].upgrade.level + 1);
                }
                this.upgrade[i].getChildByName("New").active = false;
                if (this.options[i].upgrade.isEquiped == false) {
                    this.upgrade[i].getChildByName("New").active = true;
                }
                this.upgrade[i]
                    .getChildByName("Description")
                    .getComponent(cc.RichText).string =
                    this.options[i].upgrade.description;
                this.upgrade[i]
                    .getChildByName("Upgrade")
                    .getComponentInChildren(cc.Sprite).spriteFrame =
                    this.options[i].upgrade.displayIcon;
            }
            if (this.options[i].type == "statUp" ||
                this.options[i].type == "coin" ||
                this.options[i].type == "burger") {
                this.upgrade[i]
                    .getChildByName("Upgrade Name")
                    .getComponent(cc.Label).string = this.options[i].upgrade.name;
                this.upgrade[i].getChildByName("New").active = false;
                this.upgrade[i]
                    .getChildByName("Description")
                    .getComponent(cc.RichText).string =
                    this.options[i].upgrade.description;
                this.upgrade[i]
                    .getChildByName("Upgrade")
                    .getComponentInChildren(cc.Sprite).spriteFrame =
                    this.options[i].upgrade.displayIcon;
            }
        }
    };
    OptionGenerator.prototype.start = function () {
        var _this = this;
        this.upgrade.forEach(function (element) {
            _this.positionList.push(element.position);
        });
    };
    OptionGenerator.prototype.update = function (dt) { };
    var OptionGenerator_1;
    __decorate([
        property(Array(cc.Node))
    ], OptionGenerator.prototype, "upgrade", void 0);
    __decorate([
        property(Array(cc.SpriteFrame))
    ], OptionGenerator.prototype, "otherIconList", void 0);
    OptionGenerator = OptionGenerator_1 = __decorate([
        ccclass
    ], OptionGenerator);
    return OptionGenerator;
}(cc.Component));
exports.default = OptionGenerator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxPcHRpb25HZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUUxRCxtREFBOEM7QUFDOUMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBS0UsZUFDRSxRQUFnQixFQUNoQixjQUFzQixFQUN0QixHQUFXLEVBQ1gsV0FBMkI7UUFFM0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUNILFlBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBQ0Q7SUFHRSxnQkFBWSxPQUFtQixFQUFFLElBQVk7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQUVEO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBa2FDO1FBL1pDLGFBQU8sR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUUvQyxtQkFBYSxHQUEwQixJQUFJLEtBQUssRUFBa0IsQ0FBQztRQUNuRSxlQUFTLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUN6QyxhQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFVB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SSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sRUFBRSxJQUFHLENBQUM7O0lBOVpiO1FBREMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0RBQ3NCO0lBRS9DO1FBREMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7MERBQ21DO0lBTGhELGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FrYW5DO0lBQUQsc0JBQUM7Q0FsYUQsQUFrYUMsQ0FsYTRDLEVBQUUsQ0FBQyxTQUFTLEdBa2F4RDtrQkFsYW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IE92ZXJhbGxTdGF0cyBmcm9tIFwiLi4vUGxheWVyL092ZXJhbGxTdGF0c1wiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuLi9XZWFwb24vV2VhcG9uXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBTbG90Q29udHJvbGxlciBmcm9tIFwiLi9TbG90Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jbGFzcyBPdGhlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaW5jcmVhc2VBbW91bnQ6IG51bWJlcjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZGlzcGxheUljb246IGNjLlNwcml0ZUZyYW1lO1xuICBjb25zdHJ1Y3RvcihcbiAgICBzdGF0TmFtZTogc3RyaW5nLFxuICAgIGluY3JlYXNlQW1vdW50OiBudW1iZXIsXG4gICAgZGVzOiBzdHJpbmcsXG4gICAgZGlzcGxheUljb246IGNjLlNwcml0ZUZyYW1lXG4gICkge1xuICAgIHRoaXMubmFtZSA9IHN0YXROYW1lO1xuICAgIHRoaXMuaW5jcmVhc2VBbW91bnQgPSBpbmNyZWFzZUFtb3VudDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzO1xuICAgIHRoaXMuZGlzcGxheUljb24gPSBkaXNwbGF5SWNvbjtcbiAgfVxufVxuY2xhc3MgT3B0aW9uIHtcbiAgdXBncmFkZTogYW55O1xuICB0eXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHVwZ3JhZGU6IEFycmF5PGFueT4sIHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMudXBncmFkZSA9IHVwZ3JhZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkdlbmVyYXRvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogT3B0aW9uR2VuZXJhdG9yO1xuICBAcHJvcGVydHkoQXJyYXkoY2MuTm9kZSkpXG4gIHVwZ3JhZGU6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIEBwcm9wZXJ0eShBcnJheShjYy5TcHJpdGVGcmFtZSkpXG4gIG90aGVySWNvbkxpc3Q6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiA9IG5ldyBBcnJheTxjYy5TcHJpdGVGcmFtZT4oKTtcbiAgb3RoZXJMaXN0OiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgb3B0aW9uczogT3B0aW9uW10gPSBbXTtcbiAgbGlzdDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIGl0ZW1MaXN0OiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgd2VhcG9uTGlzdDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIGVxdWlwZWRXZWFwb246IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICBlcXVpcGVkSXRlbTogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gIGN1cnJlbnRUeXBlOiBzdHJpbmc7XG4gIHBvc2l0aW9uTGlzdDogQXJyYXk8Y2MuVmVjMz4gPSBuZXcgQXJyYXk8Y2MuVmVjMz4oKTtcbiAgb25Mb2FkKCkge1xuICAgIE9wdGlvbkdlbmVyYXRvci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5vdGhlckxpc3QucHVzaChcbiAgICAgIG5ldyBPdGhlcihcbiAgICAgICAgXCJNYXggSFAgVXBcIixcbiAgICAgICAgMTAsXG4gICAgICAgIFwiSW5jcmVhc2UgbWF4IEhQIGJ5IDEwJVwiLFxuICAgICAgICB0aGlzLm90aGVySWNvbkxpc3RbMF1cbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXCJBVEsgVXBcIiwgOCwgXCJJbmNyZWFzZSBBVEsgYnkgOCVcIiwgdGhpcy5vdGhlckljb25MaXN0WzFdKVxuICAgICk7XG4gICAgdGhpcy5vdGhlckxpc3QucHVzaChcbiAgICAgIG5ldyBPdGhlcihcIlNQRCBVcFwiLCAxMiwgXCJJbmNyZWFzZSBTUEQgYnkgMTIlXCIsIHRoaXMub3RoZXJJY29uTGlzdFsyXSlcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXG4gICAgICAgIFwiQ3JpdCBVcFwiLFxuICAgICAgICAzLFxuICAgICAgICBcIkluY3JlYXNlIGNyaXRpY2FsIGNoYW5jZSBieSAzJVwiLFxuICAgICAgICB0aGlzLm90aGVySWNvbkxpc3RbM11cbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXG4gICAgICAgIFwiUGljayBVcCBSYW5nZVwiLFxuICAgICAgICAyMCxcbiAgICAgICAgXCJJbmNyZWFzZSBwaWNrIHVwIHJhbmdlIGJ5IDIwJVwiLFxuICAgICAgICB0aGlzLm90aGVySWNvbkxpc3RbNF1cbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXCJIYXN0ZSBVcFwiLCA1LCBcIkluY3JlYXNlIGhhc3RlIGJ5IDUlXCIsIHRoaXMub3RoZXJJY29uTGlzdFs1XSlcbiAgICApO1xuICAgIHRoaXMub3RoZXJMaXN0LnB1c2goXG4gICAgICBuZXcgT3RoZXIoXCJDb2luXCIsIDI1MCwgXCJHYWluIDI1MCBjb2luc1wiLCB0aGlzLm90aGVySWNvbkxpc3RbNl0pXG4gICAgKTtcbiAgICB0aGlzLm90aGVyTGlzdC5wdXNoKFxuICAgICAgbmV3IE90aGVyKFwiQnVyZ2VyXCIsIDIwLCBcIkhlYWwgMjAlIG1heCBIUFwiLCB0aGlzLm90aGVySWNvbkxpc3RbN10pXG4gICAgKTtcbiAgICB0aGlzLmxpc3QucHVzaCh0aGlzLml0ZW1MaXN0KTtcbiAgICB0aGlzLmxpc3QucHVzaCh0aGlzLndlYXBvbkxpc3QpO1xuICAgIHRoaXMubGlzdC5wdXNoKHRoaXMuZXF1aXBlZEl0ZW0pO1xuICAgIHRoaXMubGlzdC5wdXNoKHRoaXMuZXF1aXBlZFdlYXBvbik7XG4gIH1cbiAgb25PcHRpb25TZWxlY3QoaW5kZXg6IGFueSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9uc1tpbmRleF0udHlwZSA9PSBcIndlYXBvblwiIHx8XG4gICAgICB0aGlzLm9wdGlvbnNbaW5kZXhdLnR5cGUgPT0gXCJpdGVtXCJcbiAgICApIHtcbiAgICAgIHRoaXMub3B0aW9uc1tpbmRleF0udXBncmFkZS5sZXZlbCArPSAxO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9uc1tpbmRleF0udHlwZSkge1xuICAgICAgY2FzZSBcImJ1cmdlclwiOlxuICAgICAgICBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLmhlYWxCeVBlcmNlbnRhZ2UoXG4gICAgICAgICAgdGhpcy5vcHRpb25zW2luZGV4XS51cGdyYWRlLmluY3JlYXNlQW1vdW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvaW5cIjpcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZ2FpbkNvaW4oXG4gICAgICAgICAgdGhpcy5vcHRpb25zW2luZGV4XS51cGdyYWRlLmluY3JlYXNlQW1vdW50XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0YXRVcFwiOlxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMub3B0aW9uc1tpbmRleF0udXBncmFkZS5uYW1lO1xuICAgICAgICBsZXQgYW1vdW50ID0gdGhpcy5vcHRpb25zW2luZGV4XS51cGdyYWRlLmluY3JlYXNlQW1vdW50O1xuICAgICAgICBpZiAobmFtZSA9PSBcIk1heCBIUCBVcFwiKVxuICAgICAgICAgIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5pbmNyZWFzZU1heEhQUmF0ZShhbW91bnQpO1xuICAgICAgICBpZiAobmFtZSA9PSBcIkFUSyBVcFwiKSBPdmVyYWxsU3RhdHMuaW5zdGFuY2UuaW5jcmVhc2VBdHRhY2tSYXRlKGFtb3VudCk7XG4gICAgICAgIGlmIChuYW1lID09IFwiU1BEIFVwXCIpIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5pbmNyZWFzZVNwZWVkUmF0ZShhbW91bnQpO1xuICAgICAgICBpZiAobmFtZSA9PSBcIkNyaXQgVXBcIikgT3ZlcmFsbFN0YXRzLmluc3RhbmNlLmluY3JlYXNlQ3JpdENoYW5jZShhbW91bnQpO1xuICAgICAgICBpZiAobmFtZSA9PSBcIlBpY2sgVXAgUmFuZ2VcIilcbiAgICAgICAgICBPdmVyYWxsU3RhdHMuaW5zdGFuY2UuaW5jcmVhc2VQaWNrdXBSYW5nZVJhdGUoYW1vdW50KTtcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJIYXN0ZSBVcFwiKSBPdmVyYWxsU3RhdHMuaW5zdGFuY2UuaW5jcmVhc2VIYXN0ZVJhdGUoYW1vdW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBTbG90Q29udHJvbGxlci5pbnN0YW5jZS51cGRhdGVTbG90KCk7XG4gICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UudHV5ZXR2b25nKCk7XG4gIH1cbiAgb3B0aW9uU2VsZWN0aW9uKGxpc3Q6IGFueVtdKSB7XG4gICAgY29uc3QgcmFuZG9tMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpc3QubGVuZ3RoKTtcbiAgICB2YXIgb3B0aW9uID0gbGlzdFtyYW5kb20xXTtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFR5cGUpIHtcbiAgICAgIGNhc2UgXCJpdGVtXCI6XG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc3BsaWNlKHJhbmRvbTEsIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ3ZWFwb25cIjpcbiAgICAgICAgdGhpcy53ZWFwb25MaXN0LnNwbGljZShyYW5kb20xLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZXF1aXBlZFdlYXBvblwiOlxuICAgICAgICB0aGlzLmVxdWlwZWRXZWFwb24uc3BsaWNlKHJhbmRvbTEsIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlcXVpcGVkSXRlbVwiOlxuICAgICAgICB0aGlzLmVxdWlwZWRJdGVtLnNwbGljZShyYW5kb20xLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuICBnZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTogc3RyaW5nKSB7XG4gICAgbGV0IG9wdGlvbnM6IGFueVtdID0gW107XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAob3B0aW9uVHlwZSA9PT0gXCJ3ZWFwb25cIikge1xuICAgICAgaWYgKEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmVxdWlwZWRXZWFwb24ubGVuZ3RoID49IDYpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMuZXF1aXBlZFdlYXBvbjtcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwiZXF1aXBlZFdlYXBvblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJhbmRvbSA8IDAuNSkge1xuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRXZWFwb247XG4gICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwiZXF1aXBlZFdlYXBvblwiO1xuICAgICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy53ZWFwb25MaXN0O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwid2VhcG9uXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLndlYXBvbkxpc3Q7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwid2VhcG9uXCI7XG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRXZWFwb247XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gXCJlcXVpcGVkV2VhcG9uXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcIml0ZW1cIikge1xuICAgICAgaWYgKEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmVxdWlwZWRJdGVtLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRJdGVtO1xuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gXCJlcXVpcGVkSXRlbVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJhbmRvbSA8IDAuNSkge1xuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRJdGVtO1xuICAgICAgICAgIHRoaXMuY3VycmVudFR5cGUgPSBcImVxdWlwZWRJdGVtXCI7XG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLml0ZW1MaXN0O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwiaXRlbVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5pdGVtTGlzdDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gXCJpdGVtXCI7XG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVxdWlwZWRJdGVtO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IFwiZXF1aXBlZEl0ZW1cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvblR5cGUgPT09IFwic3RhdFVwXCIpIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm90aGVyTGlzdC5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgIT0gXCJCdXJnZXJcIiAmJiBpdGVtLm5hbWUgIT0gXCJDb2luXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcImJ1cmdlclwiKSB7XG4gICAgICBvcHRpb25zID0gdGhpcy5vdGhlckxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUgPT0gXCJCdXJnZXJcIik7XG4gICAgfSBlbHNlIGlmIChvcHRpb25UeXBlID09PSBcImNvaW5cIikge1xuICAgICAgb3B0aW9ucyA9IHRoaXMub3RoZXJMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lID09IFwiQ29pblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbiAgZ2VuZXJhdGVPcHRpb24xKCkge1xuICAgIGxldCBvcHRpb25UeXBlMTogc3RyaW5nID0gbnVsbDtcbiAgICBsZXQgb3B0aW9uTGlzdDE7XG5cbiAgICBjb25zdCByYW5kb20xID0gTWF0aC5yYW5kb20oKTtcblxuICAgIGlmIChyYW5kb20xIDwgOS41IC8gMjApIHtcbiAgICAgIG9wdGlvblR5cGUxID0gXCJ3ZWFwb25cIjtcbiAgICAgIG9wdGlvbkxpc3QxID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTEpO1xuICAgICAgaWYgKG9wdGlvbkxpc3QxLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIG9wdGlvblR5cGUxID0gXCJpdGVtXCI7XG4gICAgICAgIG9wdGlvbkxpc3QxID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTEpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbkxpc3QxLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIG9wdGlvblR5cGUxID0gXCJzdGF0VXBcIjtcbiAgICAgICAgb3B0aW9uTGlzdDEgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyYW5kb20xIDwgMTkgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTEgPSBcIml0ZW1cIjtcbiAgICAgIG9wdGlvbkxpc3QxID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTEpO1xuXG4gICAgICBpZiAob3B0aW9uTGlzdDEubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTEgPSBcInN0YXRVcFwiO1xuICAgICAgICBvcHRpb25MaXN0MSA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uVHlwZTEgPSBcInN0YXRVcFwiO1xuICAgICAgb3B0aW9uTGlzdDEgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMSk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5wdXNoKFxuICAgICAgbmV3IE9wdGlvbih0aGlzLm9wdGlvblNlbGVjdGlvbihvcHRpb25MaXN0MSksIG9wdGlvblR5cGUxKVxuICAgICk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IG9wdGlvblR5cGUyOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBvcHRpb25MaXN0MjtcblxuICAgIGNvbnN0IHJhbmRvbTIgPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgaWYgKHJhbmRvbTIgPCA5LjUgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTIgPSBcIndlYXBvblwiO1xuICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG4gICAgICBpZiAob3B0aW9uTGlzdDIubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTIgPSBcIml0ZW1cIjtcbiAgICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uTGlzdDIubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTIgPSBcImJ1cmdlclwiO1xuICAgICAgICBvcHRpb25MaXN0MiA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhbmRvbTIgPCAxOSAvIDIwKSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiaXRlbVwiO1xuICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG5cbiAgICAgIGlmIChvcHRpb25MaXN0Mi5sZW5ndGggPT0gMCkge1xuICAgICAgICBvcHRpb25UeXBlMiA9IFwiYnVyZ2VyXCI7XG4gICAgICAgIG9wdGlvbkxpc3QyID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiYnVyZ2VyXCI7XG4gICAgICBvcHRpb25MaXN0MiA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUyKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnB1c2goXG4gICAgICBuZXcgT3B0aW9uKHRoaXMub3B0aW9uU2VsZWN0aW9uKG9wdGlvbkxpc3QyKSwgb3B0aW9uVHlwZTIpXG4gICAgKTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IG9wdGlvblR5cGUzOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBvcHRpb25MaXN0MyA9IFtdO1xuXG4gICAgY29uc3QgcmFuZG9tMyA9IE1hdGgucmFuZG9tKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGlmIChyYW5kb20zIDwgMTAgLyAyMCkge1xuICAgICAgICBvcHRpb25UeXBlMyA9IFwid2VhcG9uXCI7XG4gICAgICAgIG9wdGlvbkxpc3QzID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTMpO1xuICAgICAgfSBlbHNlIGlmIChyYW5kb20zIDwgMjAgLyAyMCkge1xuICAgICAgICBvcHRpb25UeXBlMyA9IFwiaXRlbVwiO1xuICAgICAgICBvcHRpb25MaXN0MyA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUzKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25MaXN0My5sZW5ndGggPiAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9uTGlzdDMubGVuZ3RoID09IDApIHtcbiAgICAgIG9wdGlvblR5cGUzID0gXCJjb2luXCI7XG4gICAgICBvcHRpb25MaXN0MyA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUzKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnB1c2goXG4gICAgICBuZXcgT3B0aW9uKHRoaXMub3B0aW9uU2VsZWN0aW9uKG9wdGlvbkxpc3QzKSwgb3B0aW9uVHlwZTMpXG4gICAgKTtcbiAgfVxuICBnZW5lcmF0ZU9wdGlvbjIoKSB7XG4gICAgbGV0IG9wdGlvblR5cGUyOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBvcHRpb25MaXN0MjtcblxuICAgIGNvbnN0IHJhbmRvbTEgPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgaWYgKHJhbmRvbTEgPCA5LjUgLyAyMCkge1xuICAgICAgb3B0aW9uVHlwZTIgPSBcIndlYXBvblwiO1xuICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG4gICAgICBpZiAob3B0aW9uTGlzdDIubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTIgPSBcIml0ZW1cIjtcbiAgICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uTGlzdDIubGVuZ3RoID09IDApIHtcbiAgICAgICAgb3B0aW9uVHlwZTIgPSBcImJ1cmdlclwiO1xuICAgICAgICBvcHRpb25MaXN0MiA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhbmRvbTEgPCAxOSAvIDIwKSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiaXRlbVwiO1xuICAgICAgb3B0aW9uTGlzdDIgPSB0aGlzLmdlbmVyYXRlT3B0aW9uTGlzdChvcHRpb25UeXBlMik7XG5cbiAgICAgIGlmIChvcHRpb25MaXN0Mi5sZW5ndGggPT0gMCkge1xuICAgICAgICBvcHRpb25UeXBlMiA9IFwiYnVyZ2VyXCI7XG4gICAgICAgIG9wdGlvbkxpc3QyID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25UeXBlMiA9IFwiYnVyZ2VyXCI7XG4gICAgICBvcHRpb25MaXN0MiA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUyKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnB1c2goXG4gICAgICBuZXcgT3B0aW9uKHRoaXMub3B0aW9uU2VsZWN0aW9uKG9wdGlvbkxpc3QyKSwgb3B0aW9uVHlwZTIpXG4gICAgKTtcbiAgfVxuICBnZW5lcmF0ZU9wdGlvbjMoKSB7XG4gICAgbGV0IG9wdGlvblR5cGUzOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBvcHRpb25MaXN0MyA9IFtdO1xuXG4gICAgY29uc3QgcmFuZG9tMyA9IE1hdGgucmFuZG9tKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGlmIChyYW5kb20zIDwgMTAgLyAyMCkge1xuICAgICAgICBvcHRpb25UeXBlMyA9IFwid2VhcG9uXCI7XG4gICAgICAgIG9wdGlvbkxpc3QzID0gdGhpcy5nZW5lcmF0ZU9wdGlvbkxpc3Qob3B0aW9uVHlwZTMpO1xuICAgICAgfSBlbHNlIGlmIChyYW5kb20zIDwgMjAgLyAyMCkge1xuICAgICAgICBvcHRpb25UeXBlMyA9IFwiaXRlbVwiO1xuICAgICAgICBvcHRpb25MaXN0MyA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUzKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25MaXN0My5sZW5ndGggPiAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9uTGlzdDMubGVuZ3RoID09IDApIHtcbiAgICAgIG9wdGlvblR5cGUzID0gXCJjb2luXCI7XG4gICAgICBvcHRpb25MaXN0MyA9IHRoaXMuZ2VuZXJhdGVPcHRpb25MaXN0KG9wdGlvblR5cGUzKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnB1c2goXG4gICAgICBuZXcgT3B0aW9uKHRoaXMub3B0aW9uU2VsZWN0aW9uKG9wdGlvbkxpc3QzKSwgb3B0aW9uVHlwZTMpXG4gICAgKTtcbiAgfVxuXG4gIGdlbmVyYXRlT3B0aW9ucygpIHtcbiAgICB0aGlzLndlYXBvbkxpc3QubGVuZ3RoID0gMDtcbiAgICB0aGlzLml0ZW1MaXN0Lmxlbmd0aCA9IDA7XG4gICAgdGhpcy5lcXVpcGVkSXRlbS5sZW5ndGggPSAwO1xuICAgIHRoaXMuZXF1aXBlZFdlYXBvbi5sZW5ndGggPSAwO1xuICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLndlYXBvbkxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaXNFcXVpcGVkID09IGZhbHNlICYmICFlbGVtZW50LmlzTG9ja0xldmVsKVxuICAgICAgICB0aGlzLndlYXBvbkxpc3QucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5pdGVtTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5pc0VxdWlwZWQgPT0gZmFsc2UgJiYgIWVsZW1lbnQuaXNMb2NrTGV2ZWwpXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5lcXVpcGVkSXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5pc0VxdWlwZWQgPT0gdHJ1ZSAmJiAhZWxlbWVudC5pc0xvY2tMZXZlbClcbiAgICAgICAgdGhpcy5lcXVpcGVkSXRlbS5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmVxdWlwZWRXZWFwb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaXNFcXVpcGVkID09IHRydWUgJiYgIWVsZW1lbnQuaXNMb2NrTGV2ZWwpXG4gICAgICAgIHRoaXMuZXF1aXBlZFdlYXBvbi5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb24xKCk7XG5cbiAgICAvLyB0aGlzLmdlbmVyYXRlT3B0aW9uMigpO1xuXG4gICAgLy8gdGhpcy5nZW5lcmF0ZU9wdGlvbjMoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMpO1xuICB9XG4gIGRpc3BsYXlPcHRpb25zKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGdyYWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnVwZ3JhZGVbaV0ueCArPSAxMDAwO1xuICAgICAgY2MudHdlZW4odGhpcy51cGdyYWRlW2ldKVxuICAgICAgICAudG8oMC4xLCB7XG4gICAgICAgICAgcG9zaXRpb246IGNjLnYzKHRoaXMucG9zaXRpb25MaXN0W2ldKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5sZW5ndGggPSAwO1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVwZ3JhZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0gPT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0udHlwZSA9PSBcIndlYXBvblwiIHx8IHRoaXMub3B0aW9uc1tpXS50eXBlID09IFwiaXRlbVwiKSB7XG4gICAgICAgIHRoaXMudXBncmFkZVtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlVwZ3JhZGUgTmFtZVwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMub3B0aW9uc1tpXS51cGdyYWRlLm5hbWU7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0udXBncmFkZS5sZXZlbCA+IDApIHtcbiAgICAgICAgICB0aGlzLnVwZ3JhZGVbaV1cbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlVwZ3JhZGUgTmFtZVwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tpXS51cGdyYWRlLm5hbWUgK1xuICAgICAgICAgICAgXCIgTFYgXCIgK1xuICAgICAgICAgICAgKHRoaXMub3B0aW9uc1tpXS51cGdyYWRlLmxldmVsICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZ3JhZGVbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJOZXdcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0udXBncmFkZS5pc0VxdWlwZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnVwZ3JhZGVbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJOZXdcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZ3JhZGVbaV1cbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjcmlwdGlvblwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9XG4gICAgICAgICAgdGhpcy5vcHRpb25zW2ldLnVwZ3JhZGUuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudXBncmFkZVtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlVwZ3JhZGVcIilcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0udXBncmFkZS5kaXNwbGF5SWNvbjtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5vcHRpb25zW2ldLnR5cGUgPT0gXCJzdGF0VXBcIiB8fFxuICAgICAgICB0aGlzLm9wdGlvbnNbaV0udHlwZSA9PSBcImNvaW5cIiB8fFxuICAgICAgICB0aGlzLm9wdGlvbnNbaV0udHlwZSA9PSBcImJ1cmdlclwiXG4gICAgICApIHtcbiAgICAgICAgdGhpcy51cGdyYWRlW2ldXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVXBncmFkZSBOYW1lXCIpXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5vcHRpb25zW2ldLnVwZ3JhZGUubmFtZTtcbiAgICAgICAgdGhpcy51cGdyYWRlW2ldLmdldENoaWxkQnlOYW1lKFwiTmV3XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZ3JhZGVbaV1cbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjcmlwdGlvblwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9XG4gICAgICAgICAgdGhpcy5vcHRpb25zW2ldLnVwZ3JhZGUuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudXBncmFkZVtpXVxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlVwZ3JhZGVcIilcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0udXBncmFkZS5kaXNwbGF5SWNvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnVwZ3JhZGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5wb3NpdGlvbkxpc3QucHVzaChlbGVtZW50LnBvc2l0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/Dumbbell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df1d1uxaA5KSLgkH7jmHlKq', 'Dumbbell');
// Script/Item/Dumbbell.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var HealthAndShield_1 = require("../Player/HealthAndShield");
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Dumbbell = /** @class */ (function (_super) {
    __extends(Dumbbell, _super);
    function Dumbbell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hpRate = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    Dumbbell_1 = Dumbbell;
    // LIFE-CYCLE CALLBACKS:
    Dumbbell.prototype.onLoad = function () {
        this.itemOnLoad();
        Dumbbell_1.instance = this;
        this.description = "Increase max HP by 10%.";
    };
    Dumbbell.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase max HP by 20%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    this.loadStats();
                    break;
                case 2:
                    this.description = "Increase max HP by 30%.";
                    this.updateStats(10);
                    break;
                case 3:
                    this.description = "Increase max HP by 40%.";
                    this.updateStats(10);
                    break;
                case 4:
                    this.description = "Increase max HP by 50%.";
                    this.updateStats(10);
                    break;
                case 5:
                    this.updateStats(10);
                    break;
                default:
                    break;
            }
        }
    };
    Dumbbell.prototype.loadStats = function () {
        this.overallStats.increaseMaxHPRate(this.hpRate);
        HealthAndShield_1.default.instance.setStateHP(PlayerController_1.default.instance.currentHp, PlayerController_1.default.instance.maxHp);
    };
    Dumbbell.prototype.updateStats = function (additionHpRate) {
        this.overallStats.increaseMaxHPRate(additionHpRate);
        this.hpRate += additionHpRate;
        HealthAndShield_1.default.instance.setStateHP(PlayerController_1.default.instance.currentHp, PlayerController_1.default.instance.maxHp);
    };
    Dumbbell.prototype.start = function () { };
    Dumbbell.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var Dumbbell_1;
    __decorate([
        property(cc.Float)
    ], Dumbbell.prototype, "hpRate", void 0);
    Dumbbell = Dumbbell_1 = __decorate([
        ccclass
    ], Dumbbell);
    return Dumbbell;
}(Item_1.default));
exports.default = Dumbbell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxEdW1iYmVsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLDZEQUF3RDtBQUN4RCwrREFBMEQ7QUFDMUQsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFJO0lBQTFDO1FBQUEscUVBbUVDO1FBaEVDLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQStENUIsQ0FBQztpQkFuRW9CLFFBQVE7SUFLM0Isd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsVUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNsQixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLHdCQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtTQUNGO0lBQ0gsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQ2pDLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQ25DLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ2hDLENBQUM7SUFDSixDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLGNBQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sSUFBSSxjQUFjLENBQUM7UUFDOUIseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUNqQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUNuQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVELHdCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztJQUM5QixDQUFDOztJQS9ERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNDO0lBSEQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1FNUI7SUFBRCxlQUFDO0NBbkVELEFBbUVDLENBbkVxQyxjQUFJLEdBbUV6QztrQkFuRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBIZWFsdGhBbmRTaGllbGQgZnJvbSBcIi4uL1BsYXllci9IZWFsdGhBbmRTaGllbGRcIjtcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuLi9QbGF5ZXIvUGxheWVyQ29udHJvbGxlclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVtYmJlbGwgZXh0ZW5kcyBJdGVtIHtcbiAgc3RhdGljIGluc3RhbmNlOiBEdW1iYmVsbDtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBocFJhdGU6IG51bWJlciA9IDEwO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5pdGVtT25Mb2FkKCk7XG4gICAgRHVtYmJlbGwuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIG1heCBIUCBieSAxMCUuXCI7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIG1heCBIUCBieSAyMCUuXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmFkZEVxdWlwZWRJdGVtKHRoaXMpO1xuICAgICAgICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBtYXggSFAgYnkgMzAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMTApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgbWF4IEhQIGJ5IDQwJS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDEwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIG1heCBIUCBieSA1MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygxMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDEwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9hZFN0YXRzKCkge1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlTWF4SFBSYXRlKHRoaXMuaHBSYXRlKTtcbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVIUChcbiAgICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuY3VycmVudEhwLFxuICAgICAgUGxheWVyQ29udHJvbGxlci5pbnN0YW5jZS5tYXhIcFxuICAgICk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoYWRkaXRpb25IcFJhdGU6IG51bWJlcikge1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlTWF4SFBSYXRlKGFkZGl0aW9uSHBSYXRlKTtcbiAgICB0aGlzLmhwUmF0ZSArPSBhZGRpdGlvbkhwUmF0ZTtcbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVIUChcbiAgICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UuY3VycmVudEhwLFxuICAgICAgUGxheWVyQ29udHJvbGxlci5pbnN0YW5jZS5tYXhIcFxuICAgICk7XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/EyePatch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1974n/pm1CzK9jxRhrk9G8', 'EyePatch');
// Script/Item/EyePatch.ts

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
var GameController_1 = require("../Controller/GameController");
var UIController_1 = require("../Controller/UIController");
var Utils_1 = require("../Controller/Utils");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EyePatch = /** @class */ (function (_super) {
    __extends(EyePatch, _super);
    function EyePatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxCrit = 10;
        _this.critPerSec = 1;
        _this.buffIcon = null;
        _this.timer = 1;
        _this.currentStack = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    EyePatch_1 = EyePatch;
    EyePatch.prototype.onLoad = function () {
        EyePatch_1.instance = this;
        this.description =
            "Gain 1% crit buff every second up to 10%. If taking damage by a target, lose half the buff.";
        this.itemOnLoad();
    };
    EyePatch.prototype.start = function () { };
    EyePatch.prototype.gainStack = function () {
        if (this.timer < 0) {
            this.timer = this.critPerSec;
            if (this.currentStack < this.maxCrit) {
                var oldStack = this.currentStack;
                this.currentStack += 1;
                this.overallStats.increaseCritChance(this.currentStack - oldStack);
            }
        }
    };
    EyePatch.prototype.onTakeDamage = function () {
        if (!this.isEquiped)
            return;
        var oldStack = this.currentStack;
        this.currentStack = Math.floor(this.currentStack / 2);
        this.overallStats.increaseCritChance(this.currentStack - oldStack);
    };
    EyePatch.prototype.updateStats = function (maxCrit) {
        this.maxCrit += maxCrit;
    };
    EyePatch.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    GameController_1.default.instance.dynamicBuff.push(this);
                    UIController_1.default.instance.addNewBuff(this);
                    GameController_1.default.instance.addEquipedItem(this);
                    this.description =
                        "Gain 1% crit buff every second up to 15%. If taking damage by a target, lose half the buff.";
                    this.isEquiped = true;
                    break;
                case 2:
                    this.description =
                        "Gain 1% crit buff every second up to 20%. If taking damage by a target, lose half the buff.";
                    this.updateStats(5);
                    break;
                case 3:
                    this.updateStats(5);
                    break;
                default:
                    break;
            }
        }
    };
    EyePatch.prototype.getCounting = function () {
        return this.currentStack;
    };
    EyePatch.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.gainStack();
    };
    var EyePatch_1;
    __decorate([
        property(cc.Integer)
    ], EyePatch.prototype, "maxCrit", void 0);
    __decorate([
        property(cc.Integer)
    ], EyePatch.prototype, "critPerSec", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], EyePatch.prototype, "buffIcon", void 0);
    EyePatch = EyePatch_1 = __decorate([
        ccclass
    ], EyePatch);
    return EyePatch;
}(Item_1.default));
exports.default = EyePatch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxFeWVQYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELDZDQUF3QztBQUN4QywrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQUk7SUFBMUM7UUFBQSxxRUE0RUM7UUF6RUMsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUNoQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQzs7SUFrRTVCLENBQUM7aUJBNUVvQixRQUFRO0lBVzNCLHlCQUFNLEdBQU47UUFDRSxVQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVztZQUNkLDZGQUE2RixDQUFDO1FBQ2hHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQUssR0FBTCxjQUFTLENBQUM7SUFDViw0QkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDcEU7U0FDRjtJQUNILENBQUM7SUFDRCwrQkFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLE9BQWU7UUFDekIsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxDQUFDO29CQUNKLHdCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLHNCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsV0FBVzt3QkFDZCw2RkFBNkYsQ0FBQztvQkFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXO3dCQUNkLDZGQUE2RixDQUFDO29CQUNoRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtTQUNGO0lBQ0gsQ0FBQztJQUNELDhCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O0lBeEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NkNBQ0E7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDRTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNPO0lBUGIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRFNUI7SUFBRCxlQUFDO0NBNUVELEFBNEVDLENBNUVxQyxjQUFJLEdBNEV6QztrQkE1RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVUlDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeWVQYXRjaCBleHRlbmRzIEl0ZW0ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEV5ZVBhdGNoO1xuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgbWF4Q3JpdDogbnVtYmVyID0gMTA7XG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBjcml0UGVyU2VjOiBudW1iZXIgPSAxO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGJ1ZmZJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIHRpbWVyOiBudW1iZXIgPSAxO1xuICBjdXJyZW50U3RhY2s6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIG9uTG9hZCgpIHtcbiAgICBFeWVQYXRjaC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICBcIkdhaW4gMSUgY3JpdCBidWZmIGV2ZXJ5IHNlY29uZCB1cCB0byAxMCUuIElmIHRha2luZyBkYW1hZ2UgYnkgYSB0YXJnZXQsIGxvc2UgaGFsZiB0aGUgYnVmZi5cIjtcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cbiAgZ2FpblN0YWNrKCkge1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy50aW1lciA9IHRoaXMuY3JpdFBlclNlYztcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGFjayA8IHRoaXMubWF4Q3JpdCkge1xuICAgICAgICB2YXIgb2xkU3RhY2sgPSB0aGlzLmN1cnJlbnRTdGFjaztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhY2sgKz0gMTtcbiAgICAgICAgdGhpcy5vdmVyYWxsU3RhdHMuaW5jcmVhc2VDcml0Q2hhbmNlKHRoaXMuY3VycmVudFN0YWNrIC0gb2xkU3RhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvblRha2VEYW1hZ2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzRXF1aXBlZCkgcmV0dXJuO1xuICAgIHZhciBvbGRTdGFjayA9IHRoaXMuY3VycmVudFN0YWNrO1xuICAgIHRoaXMuY3VycmVudFN0YWNrID0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRTdGFjayAvIDIpO1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlQ3JpdENoYW5jZSh0aGlzLmN1cnJlbnRTdGFjayAtIG9sZFN0YWNrKTtcbiAgfVxuICB1cGRhdGVTdGF0cyhtYXhDcml0OiBudW1iZXIpIHtcbiAgICB0aGlzLm1heENyaXQgKz0gbWF4Q3JpdDtcbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZHluYW1pY0J1ZmYucHVzaCh0aGlzKTtcbiAgICAgICAgICBVSUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkTmV3QnVmZih0aGlzKTtcbiAgICAgICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5hZGRFcXVpcGVkSXRlbSh0aGlzKTtcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiR2FpbiAxJSBjcml0IGJ1ZmYgZXZlcnkgc2Vjb25kIHVwIHRvIDE1JS4gSWYgdGFraW5nIGRhbWFnZSBieSBhIHRhcmdldCwgbG9zZSBoYWxmIHRoZSBidWZmLlwiO1xuICAgICAgICAgIHRoaXMuaXNFcXVpcGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJHYWluIDElIGNyaXQgYnVmZiBldmVyeSBzZWNvbmQgdXAgdG8gMjAlLiBJZiB0YWtpbmcgZGFtYWdlIGJ5IGEgdGFyZ2V0LCBsb3NlIGhhbGYgdGhlIGJ1ZmYuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldENvdW50aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGFjaztcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICB0aGlzLmdhaW5TdGFjaygpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fec23dgw3BLY4Mqz81ctXpY', 'EnemyManager');
// Script/Enemy/EnemyManager.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var EnemyController_1 = require("./EnemyController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyManager = /** @class */ (function (_super) {
    __extends(EnemyManager, _super);
    function EnemyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.gameplay = null;
        _this.player = null;
        _this.enemyPrefab = new Array();
        _this.spawnTimer = 2;
        _this.enemyPool = new Array();
        _this.batPool = null;
        _this.ghostPool = null;
        _this.povSize = null;
        _this.spawnArea = null;
        _this.spawnAreaMax = null;
        _this.timer = 3;
        _this.currentTime = 0;
        return _this;
    }
    EnemyManager_1 = EnemyManager;
    EnemyManager.prototype.onLoad = function () {
        EnemyManager_1.instance = this;
        this.loadPool();
        this.povSize = cc.v2(1000, 1000);
        this.timer = 5;
        this.spawnAmount = 5;
        this.spawnRadius = 200;
        this.spawnArea = cc.v2(this.povSize.x + this.spawnRadius, this.povSize.y + this.spawnRadius);
    };
    EnemyManager.prototype.loadPool = function () {
        for (var i = 0; i < this.enemyPrefab.length; i++) {
            var pool = new cc.NodePool();
            var initCount = 20;
            for (var j = 0; j < initCount; j++) {
                var enemy = cc.instantiate(this.enemyPrefab[i]);
                pool.put(enemy);
            }
            this.enemyPool.push(pool);
        }
    };
    EnemyManager.prototype.spawnEnemy = function (spawnAmount, speed, maxHp, scale, damage, expAmount, enemyIndex) {
        for (var i = 0; i < spawnAmount; i++) {
            var enemy = null;
            if (this.enemyPool[enemyIndex].size() > 0) {
                enemy = this.enemyPool[enemyIndex].get();
            }
            else {
                enemy = cc.instantiate(this.enemyPrefab[enemyIndex]);
            }
            enemy
                .getComponent(EnemyController_1.default)
                .setter(speed, maxHp, scale, damage, expAmount);
            enemy.parent = this.gameplay;
            enemy.position = this.generateRandomPosition();
        }
    };
    EnemyManager.prototype.spawnDefaultEnemy = function (spawnAmount, enemyIndex) {
        for (var i = 0; i < spawnAmount; i++) {
            var enemy = null;
            if (this.enemyPool[enemyIndex].size() > 0) {
                enemy = this.enemyPool[enemyIndex].get();
            }
            else {
                enemy = cc.instantiate(this.enemyPrefab[enemyIndex]);
            }
            enemy.getComponent(EnemyController_1.default).resetStat();
            enemy.parent = this.gameplay;
            enemy.position = this.generateRandomPosition();
        }
    };
    EnemyManager.prototype.endlessSpawn = function () {
        var hourTimer = Math.floor(GameController_1.default.instance.timer / 3600);
        var minuteTimer = Math.floor((GameController_1.default.instance.timer - 3600 * hourTimer) / 60);
        var a = minuteTimer <= 23 ? 37 * hourTimer : 37 * hourTimer + (minuteTimer - 23);
        var ATK = 15 + 2 * a;
        var SPD = 1 + 0.12 * a < 3 ? 1 + 0.12 * a : 3;
        var HP = 5000 + 5000 * 0.05 * a;
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 15);
        this.spawnEnemy(1, SPD, HP, 1.3, ATK, 25, 14);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 9);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 24);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 10);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 5);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 6);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 23);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 11);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 22);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 19);
        this.spawnEnemy(1, SPD, HP, 1.5, ATK, 25, 21);
    };
    EnemyManager.prototype.start = function () { };
    EnemyManager.prototype.generateRandomPosition = function () {
        var position = cc.Vec3.ZERO;
        position.x = this.player.x;
        position.y = this.player.y;
        var f = Utils_1.default.random(0, 1) > 0.5 ? -1 : 1;
        if (Utils_1.default.random(0, 1) > 0.5) {
            position.x += Utils_1.default.random(-this.spawnArea.x, this.spawnArea.x);
            position.y += this.spawnArea.y * f;
        }
        else {
            position.y += Utils_1.default.random(-this.spawnArea.y, this.spawnArea.y);
            position.x += this.spawnArea.x * f;
        }
        return position;
    };
    EnemyManager.prototype.putBackToPool = function (node) {
        if (!node)
            return;
        for (var i = 0; i < this.enemyPrefab.length; i++) {
            if (node.name == this.enemyPrefab[i].name) {
                this.enemyPool[i].put(node);
            }
        }
    };
    EnemyManager.prototype.update = function (dt) {
        this.currentTime = GameController_1.default.instance.timer;
        if (Utils_1.default.isPause)
            return;
        this.timer -= dt;
        if (this.timer < 0) {
            if (this.currentTime < 180 && this.currentTime > 0) {
                this.spawnDefaultEnemy(1, 0);
            }
            if (this.currentTime < 300 && this.currentTime > 30) {
                this.spawnDefaultEnemy(1, 1);
            }
            if (this.currentTime < 300 && this.currentTime > 180) {
                this.spawnDefaultEnemy(3, 2);
            }
            if (this.currentTime < 360 && this.currentTime > 240) {
                this.spawnDefaultEnemy(6, 3);
            }
            if (this.currentTime < 510 && this.currentTime > 300) {
                this.spawnDefaultEnemy(3, 4);
            }
            if (this.currentTime < 660 && this.currentTime > 300) {
                this.spawnDefaultEnemy(2, 5);
                this.spawnDefaultEnemy(2, 6);
            }
            if (this.currentTime < 510 && this.currentTime > 355) {
                this.spawnDefaultEnemy(3, 7);
            }
            if (this.currentTime < 660 && this.currentTime > 330) {
                this.spawnDefaultEnemy(3, 8);
            }
            if (this.currentTime < 660 && this.currentTime > 455) {
                this.spawnDefaultEnemy(3, 9);
            }
            if (this.currentTime < 660 && this.currentTime > 570) {
                this.spawnDefaultEnemy(6, 10);
            }
            if (this.currentTime < 840 && this.currentTime > 660) {
                this.spawnDefaultEnemy(12, 11);
            }
            if (this.currentTime < 840 && this.currentTime > 720) {
                this.spawnDefaultEnemy(2, 12);
                this.spawnDefaultEnemy(2, 13);
            }
            if (this.currentTime < 960 && this.currentTime > 840) {
                this.spawnDefaultEnemy(6, 14);
                this.spawnDefaultEnemy(6, 15);
            }
            if (this.currentTime < 1140 && this.currentTime > 945) {
                this.spawnDefaultEnemy(2, 16);
                this.spawnDefaultEnemy(2, 17);
                this.spawnDefaultEnemy(2, 18);
                this.spawnDefaultEnemy(2, 19);
                this.spawnDefaultEnemy(2, 20);
            }
            if (this.currentTime < 1140 && this.currentTime > 1080) {
                this.spawnDefaultEnemy(2, 21);
            }
            if (this.currentTime < 1140 && this.currentTime > 1200) {
                this.spawnDefaultEnemy(3, 22);
                this.spawnDefaultEnemy(3, 23);
            }
            if (this.currentTime < 1200 && this.currentTime > 1380) {
                this.spawnDefaultEnemy(6, 24);
            }
            if (this.currentTime > 1380) {
                this.spawnTimer = 5;
                this.endlessSpawn();
            }
            this.timer = this.spawnTimer;
        }
    };
    var EnemyManager_1;
    __decorate([
        property(cc.Canvas)
    ], EnemyManager.prototype, "canvas", void 0);
    __decorate([
        property(cc.Node)
    ], EnemyManager.prototype, "gameplay", void 0);
    __decorate([
        property(cc.Node)
    ], EnemyManager.prototype, "player", void 0);
    __decorate([
        property(Array(cc.Prefab))
    ], EnemyManager.prototype, "enemyPrefab", void 0);
    EnemyManager = EnemyManager_1 = __decorate([
        ccclass
    ], EnemyManager);
    return EnemyManager;
}(cc.Component));
exports.default = EnemyManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFDeEMscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBME1DO1FBdk1DLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGlCQUFXLEdBQXFCLElBQUksS0FBSyxFQUFhLENBQUM7UUFDdkQsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBUyxHQUF1QixJQUFJLEtBQUssRUFBZSxDQUFDO1FBQ3pELGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBQzlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQXNMMUIsQ0FBQztxQkExTW9CLFlBQVk7SUFzQi9CLDZCQUFNLEdBQU47UUFDRSxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FB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QUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFDRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDMUIsQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FDeEQsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUNILFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0UsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FB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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi9FbmVteUNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogRW5lbXlNYW5hZ2VyO1xuICBAcHJvcGVydHkoY2MuQ2FudmFzKVxuICBjYW52YXM6IGNjLkNhbnZhcyA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lcGxheTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoQXJyYXkoY2MuUHJlZmFiKSlcbiAgZW5lbXlQcmVmYWI6IEFycmF5PGNjLlByZWZhYj4gPSBuZXcgQXJyYXk8Y2MuUHJlZmFiPigpO1xuICBzcGF3blRpbWVyOiBudW1iZXIgPSAyO1xuICBlbmVteVBvb2w6IEFycmF5PGNjLk5vZGVQb29sPiA9IG5ldyBBcnJheTxjYy5Ob2RlUG9vbD4oKTtcbiAgYmF0UG9vbDogY2MuTm9kZVBvb2wgPSBudWxsO1xuICBnaG9zdFBvb2w6IGNjLk5vZGVQb29sID0gbnVsbDtcbiAgcG92U2l6ZTogY2MuVmVjMiA9IG51bGw7XG4gIHNwYXduQXJlYTogY2MuVmVjMiA9IG51bGw7XG4gIHNwYXduQXJlYU1heDogY2MuVmVjMiA9IG51bGw7XG4gIHNwYXduUmFkaXVzOiBudW1iZXI7XG4gIHNwYXduQW1vdW50OiBudW1iZXI7XG4gIHRpbWVyOiBudW1iZXIgPSAzO1xuICBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcblxuICBvbkxvYWQoKSB7XG4gICAgRW5lbXlNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcblxuICAgIHRoaXMubG9hZFBvb2woKTtcbiAgICB0aGlzLnBvdlNpemUgPSBjYy52MigxMDAwLCAxMDAwKTtcbiAgICB0aGlzLnRpbWVyID0gNTtcbiAgICB0aGlzLnNwYXduQW1vdW50ID0gNTtcbiAgICB0aGlzLnNwYXduUmFkaXVzID0gMjAwO1xuICAgIHRoaXMuc3Bhd25BcmVhID0gY2MudjIoXG4gICAgICB0aGlzLnBvdlNpemUueCArIHRoaXMuc3Bhd25SYWRpdXMsXG4gICAgICB0aGlzLnBvdlNpemUueSArIHRoaXMuc3Bhd25SYWRpdXNcbiAgICApO1xuICB9XG4gIGxvYWRQb29sKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVteVByZWZhYi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgIGxldCBpbml0Q291bnQgPSAyMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW5pdENvdW50OyBqKyspIHtcbiAgICAgICAgdmFyIGVuZW15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteVByZWZhYltpXSk7XG4gICAgICAgIHBvb2wucHV0KGVuZW15KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5lbXlQb29sLnB1c2gocG9vbCk7XG4gICAgfVxuICB9XG4gIHNwYXduRW5lbXkoXG4gICAgc3Bhd25BbW91bnQ6IG51bWJlcixcbiAgICBzcGVlZDogbnVtYmVyLFxuICAgIG1heEhwOiBudW1iZXIsXG4gICAgc2NhbGU6IG51bWJlcixcbiAgICBkYW1hZ2U6IG51bWJlcixcbiAgICBleHBBbW91bnQ6IG51bWJlcixcbiAgICBlbmVteUluZGV4OiBudW1iZXJcbiAgKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGF3bkFtb3VudDsgaSsrKSB7XG4gICAgICBsZXQgZW5lbXk6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuZW5lbXlQb29sW2VuZW15SW5kZXhdLnNpemUoKSA+IDApIHtcbiAgICAgICAgZW5lbXkgPSB0aGlzLmVuZW15UG9vbFtlbmVteUluZGV4XS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZW15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteVByZWZhYltlbmVteUluZGV4XSk7XG4gICAgICB9XG4gICAgICBlbmVteVxuICAgICAgICAuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcilcbiAgICAgICAgLnNldHRlcihzcGVlZCwgbWF4SHAsIHNjYWxlLCBkYW1hZ2UsIGV4cEFtb3VudCk7XG4gICAgICBlbmVteS5wYXJlbnQgPSB0aGlzLmdhbWVwbGF5O1xuICAgICAgZW5lbXkucG9zaXRpb24gPSB0aGlzLmdlbmVyYXRlUmFuZG9tUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cbiAgc3Bhd25EZWZhdWx0RW5lbXkoc3Bhd25BbW91bnQ6IG51bWJlciwgZW5lbXlJbmRleDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGF3bkFtb3VudDsgaSsrKSB7XG4gICAgICBsZXQgZW5lbXk6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuZW5lbXlQb29sW2VuZW15SW5kZXhdLnNpemUoKSA+IDApIHtcbiAgICAgICAgZW5lbXkgPSB0aGlzLmVuZW15UG9vbFtlbmVteUluZGV4XS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZW15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVteVByZWZhYltlbmVteUluZGV4XSk7XG4gICAgICB9XG4gICAgICBlbmVteS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5yZXNldFN0YXQoKTtcblxuICAgICAgZW5lbXkucGFyZW50ID0gdGhpcy5nYW1lcGxheTtcbiAgICAgIGVuZW15LnBvc2l0aW9uID0gdGhpcy5nZW5lcmF0ZVJhbmRvbVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG4gIGVuZGxlc3NTcGF3bigpIHtcbiAgICBsZXQgaG91clRpbWVyID0gTWF0aC5mbG9vcihHYW1lQ29udHJvbGxlci5pbnN0YW5jZS50aW1lciAvIDM2MDApO1xuICAgIGxldCBtaW51dGVUaW1lciA9IE1hdGguZmxvb3IoXG4gICAgICAoR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UudGltZXIgLSAzNjAwICogaG91clRpbWVyKSAvIDYwXG4gICAgKTtcbiAgICBsZXQgYSA9XG4gICAgICBtaW51dGVUaW1lciA8PSAyMyA/IDM3ICogaG91clRpbWVyIDogMzcgKiBob3VyVGltZXIgKyAobWludXRlVGltZXIgLSAyMyk7XG4gICAgbGV0IEFUSyA9IDE1ICsgMiAqIGE7XG4gICAgbGV0IFNQRCA9IDEgKyAwLjEyICogYSA8IDMgPyAxICsgMC4xMiAqIGEgOiAzO1xuICAgIGxldCBIUCA9IDUwMDAgKyA1MDAwICogMC4wNSAqIGE7XG5cbiAgICB0aGlzLnNwYXduRW5lbXkoMSwgU1BELCBIUCwgMS41LCBBVEssIDI1LCAxNSk7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuMywgQVRLLCAyNSwgMTQpO1xuICAgIHRoaXMuc3Bhd25FbmVteSgxLCBTUEQsIEhQLCAxLjUsIEFUSywgMjUsIDkpO1xuICAgIHRoaXMuc3Bhd25FbmVteSgxLCBTUEQsIEhQLCAxLjUsIEFUSywgMjUsIDI0KTtcbiAgICB0aGlzLnNwYXduRW5lbXkoMSwgU1BELCBIUCwgMS41LCBBVEssIDI1LCAxMCk7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuNSwgQVRLLCAyNSwgNSk7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuNSwgQVRLLCAyNSwgNik7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuNSwgQVRLLCAyNSwgMjMpO1xuICAgIHRoaXMuc3Bhd25FbmVteSgxLCBTUEQsIEhQLCAxLjUsIEFUSywgMjUsIDExKTtcbiAgICB0aGlzLnNwYXduRW5lbXkoMSwgU1BELCBIUCwgMS41LCBBVEssIDI1LCAyMik7XG4gICAgdGhpcy5zcGF3bkVuZW15KDEsIFNQRCwgSFAsIDEuNSwgQVRLLCAyNSwgMTkpO1xuICAgIHRoaXMuc3Bhd25FbmVteSgxLCBTUEQsIEhQLCAxLjUsIEFUSywgMjUsIDIxKTtcbiAgfVxuICBzdGFydCgpIHt9XG4gIGdlbmVyYXRlUmFuZG9tUG9zaXRpb24oKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY2MuVmVjMy5aRVJPO1xuICAgIHBvc2l0aW9uLnggPSB0aGlzLnBsYXllci54O1xuICAgIHBvc2l0aW9uLnkgPSB0aGlzLnBsYXllci55O1xuICAgIHZhciBmID0gVXRpbHMucmFuZG9tKDAsIDEpID4gMC41ID8gLTEgOiAxO1xuICAgIGlmIChVdGlscy5yYW5kb20oMCwgMSkgPiAwLjUpIHtcbiAgICAgIHBvc2l0aW9uLnggKz0gVXRpbHMucmFuZG9tKC10aGlzLnNwYXduQXJlYS54LCB0aGlzLnNwYXduQXJlYS54KTtcbiAgICAgIHBvc2l0aW9uLnkgKz0gdGhpcy5zcGF3bkFyZWEueSAqIGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uLnkgKz0gVXRpbHMucmFuZG9tKC10aGlzLnNwYXduQXJlYS55LCB0aGlzLnNwYXduQXJlYS55KTtcbiAgICAgIHBvc2l0aW9uLnggKz0gdGhpcy5zcGF3bkFyZWEueCAqIGY7XG4gICAgfVxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuICBwdXRCYWNrVG9Qb29sKG5vZGU6IGNjLk5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlQcmVmYWIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChub2RlLm5hbWUgPT0gdGhpcy5lbmVteVByZWZhYltpXS5uYW1lKSB7XG4gICAgICAgIHRoaXMuZW5lbXlQb29sW2ldLnB1dChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IEdhbWVDb250cm9sbGVyLmluc3RhbmNlLnRpbWVyO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMTgwICYmIHRoaXMuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMSwgMCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDMwMCAmJiB0aGlzLmN1cnJlbnRUaW1lID4gMzApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgxLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMzAwICYmIHRoaXMuY3VycmVudFRpbWUgPiAxODApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCAyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMzYwICYmIHRoaXMuY3VycmVudFRpbWUgPiAyNDApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSg2LCAzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNTEwICYmIHRoaXMuY3VycmVudFRpbWUgPiAzMDApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCA0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNjYwICYmIHRoaXMuY3VycmVudFRpbWUgPiAzMDApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCA1KTtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCA2KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNTEwICYmIHRoaXMuY3VycmVudFRpbWUgPiAzNTUpIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCA3KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNjYwICYmIHRoaXMuY3VycmVudFRpbWUgPiAzMzApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCA4KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNjYwICYmIHRoaXMuY3VycmVudFRpbWUgPiA0NTUpIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCA5KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgNjYwICYmIHRoaXMuY3VycmVudFRpbWUgPiA1NzApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSg2LCAxMCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDg0MCAmJiB0aGlzLmN1cnJlbnRUaW1lID4gNjYwKSB7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMTIsIDExKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgODQwICYmIHRoaXMuY3VycmVudFRpbWUgPiA3MjApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCAxMik7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMiwgMTMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPCA5NjAgJiYgdGhpcy5jdXJyZW50VGltZSA+IDg0MCkge1xuICAgICAgICB0aGlzLnNwYXduRGVmYXVsdEVuZW15KDYsIDE0KTtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSg2LCAxNSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDExNDAgJiYgdGhpcy5jdXJyZW50VGltZSA+IDk0NSkge1xuICAgICAgICB0aGlzLnNwYXduRGVmYXVsdEVuZW15KDIsIDE2KTtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCAxNyk7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMiwgMTgpO1xuICAgICAgICB0aGlzLnNwYXduRGVmYXVsdEVuZW15KDIsIDE5KTtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCAyMCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDExNDAgJiYgdGhpcy5jdXJyZW50VGltZSA+IDEwODApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgyLCAyMSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDExNDAgJiYgdGhpcy5jdXJyZW50VGltZSA+IDEyMDApIHtcbiAgICAgICAgdGhpcy5zcGF3bkRlZmF1bHRFbmVteSgzLCAyMik7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoMywgMjMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPCAxMjAwICYmIHRoaXMuY3VycmVudFRpbWUgPiAxMzgwKSB7XG4gICAgICAgIHRoaXMuc3Bhd25EZWZhdWx0RW5lbXkoNiwgMjQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiAxMzgwKSB7XG4gICAgICAgIHRoaXMuc3Bhd25UaW1lciA9IDU7XG4gICAgICAgIHRoaXMuZW5kbGVzc1NwYXduKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLnNwYXduVGltZXI7XG4gICAgfVxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/GrowthPill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98842CKG2xN2YADg0szZ0rz', 'GrowthPill');
// Script/Item/GrowthPill.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GrowthPill = /** @class */ (function (_super) {
    __extends(GrowthPill, _super);
    function GrowthPill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sizeIncreaseRate = 10;
        _this.pickUpRangeIncreaseRate = 30;
        _this.currentLevel = _this.level;
        return _this;
    }
    GrowthPill_1 = GrowthPill;
    // LIFE-CYCLE CALLBACKS:
    GrowthPill.prototype.onLoad = function () {
        GrowthPill_1.instance = this;
        this.description =
            "Increases attack size of weapons by 5%. Also increase Pick Up Range by 30%.";
        this.itemOnLoad();
    };
    GrowthPill.prototype.loadStats = function () {
        this.overallStats.statList[4] += this.sizeIncreaseRate;
        this.overallStats.statList[7] += this.pickUpRangeIncreaseRate;
        this.overallStats.onStatsChange();
    };
    GrowthPill.prototype.updateStats = function (additionSizeAmount, additionPickupRangeAmount) {
        this.sizeIncreaseRate += additionSizeAmount;
        this.pickUpRangeIncreaseRate += additionPickupRangeAmount;
        this.overallStats.statList[4] += additionSizeAmount;
        this.overallStats.statList[7] += additionPickupRangeAmount;
        this.overallStats.onStatsChange();
    };
    GrowthPill.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description =
                        "Increases attack size of weapons by 10%. Also increase Pick Up Range by 35%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    this.loadStats();
                    break;
                case 2:
                    this.description =
                        "Increases attack size of weapons by 15%. Also increase Pick Up Range by 40%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description =
                        "Increases attack size of weapons by 20%. Also increase Pick Up Range by 45%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description =
                        "Increases attack size of weapons by 25%. Also increase Pick Up Range by 50%.";
                    this.updateStats(5, 5);
                    break;
                case 5:
                    this.updateStats(5, 5);
                    break;
                default:
                    break;
            }
        }
    };
    GrowthPill.prototype.start = function () { };
    GrowthPill.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var GrowthPill_1;
    __decorate([
        property(cc.Float)
    ], GrowthPill.prototype, "sizeIncreaseRate", void 0);
    __decorate([
        property(cc.Float)
    ], GrowthPill.prototype, "pickUpRangeIncreaseRate", void 0);
    GrowthPill = GrowthPill_1 = __decorate([
        ccclass
    ], GrowthPill);
    return GrowthPill;
}(Item_1.default));
exports.default = GrowthPill;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxHcm93dGhQaWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCw2Q0FBd0M7QUFHeEMsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFJO0lBQTVDO1FBQUEscUVBd0VDO1FBckVDLHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUU5Qiw2QkFBdUIsR0FBVyxFQUFFLENBQUM7UUFDckMsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQWtFNUIsQ0FBQzttQkF4RW9CLFVBQVU7SUFPN0Isd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFDRSxZQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVztZQUNkLDZFQUE2RSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsZ0NBQVcsR0FBWCxVQUFZLGtCQUEwQixFQUFFLHlCQUFpQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLElBQUksa0JBQWtCLENBQUM7UUFDNUMsSUFBSSxDQUFDLHVCQUF1QixJQUFJLHlCQUF5QixDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNELDhCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXO3dCQUNkLDhFQUE4RSxDQUFDO29CQUNqRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsd0JBQWMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXO3dCQUNkLDhFQUE4RSxDQUFDO29CQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVc7d0JBQ2QsOEVBQThFLENBQUM7b0JBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVzt3QkFDZCw4RUFBOEUsQ0FBQztvQkFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtTQUNGO0lBQ0gsQ0FBQztJQUVELDBCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxlQUFLLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztJQUM5QixDQUFDOztJQXBFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2tCO0lBTGxCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3RTlCO0lBQUQsaUJBQUM7Q0F4RUQsQUF3RUMsQ0F4RXVDLGNBQUksR0F3RTNDO2tCQXhFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IE92ZXJhbGxTdGF0cyBmcm9tIFwiLi4vUGxheWVyL092ZXJhbGxTdGF0c1wiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi4vV2VhcG9uL1dlYXBvblwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jvd3RoUGlsbCBleHRlbmRzIEl0ZW0ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEdyb3d0aFBpbGw7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgc2l6ZUluY3JlYXNlUmF0ZTogbnVtYmVyID0gMTA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgcGlja1VwUmFuZ2VJbmNyZWFzZVJhdGU6IG51bWJlciA9IDMwO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgR3Jvd3RoUGlsbC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICBcIkluY3JlYXNlcyBhdHRhY2sgc2l6ZSBvZiB3ZWFwb25zIGJ5IDUlLiBBbHNvIGluY3JlYXNlIFBpY2sgVXAgUmFuZ2UgYnkgMzAlLlwiO1xuICAgIHRoaXMuaXRlbU9uTG9hZCgpO1xuICB9XG4gIGxvYWRTdGF0cygpIHtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5zdGF0TGlzdFs0XSArPSB0aGlzLnNpemVJbmNyZWFzZVJhdGU7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMuc3RhdExpc3RbN10gKz0gdGhpcy5waWNrVXBSYW5nZUluY3JlYXNlUmF0ZTtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5vblN0YXRzQ2hhbmdlKCk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoYWRkaXRpb25TaXplQW1vdW50OiBudW1iZXIsIGFkZGl0aW9uUGlja3VwUmFuZ2VBbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc2l6ZUluY3JlYXNlUmF0ZSArPSBhZGRpdGlvblNpemVBbW91bnQ7XG4gICAgdGhpcy5waWNrVXBSYW5nZUluY3JlYXNlUmF0ZSArPSBhZGRpdGlvblBpY2t1cFJhbmdlQW1vdW50O1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLnN0YXRMaXN0WzRdICs9IGFkZGl0aW9uU2l6ZUFtb3VudDtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5zdGF0TGlzdFs3XSArPSBhZGRpdGlvblBpY2t1cFJhbmdlQW1vdW50O1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICAgICAgICBcIkluY3JlYXNlcyBhdHRhY2sgc2l6ZSBvZiB3ZWFwb25zIGJ5IDEwJS4gQWxzbyBpbmNyZWFzZSBQaWNrIFVwIFJhbmdlIGJ5IDM1JS5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgdGhpcy5sb2FkU3RhdHMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZXMgYXR0YWNrIHNpemUgb2Ygd2VhcG9ucyBieSAxNSUuIEFsc28gaW5jcmVhc2UgUGljayBVcCBSYW5nZSBieSA0MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZXMgYXR0YWNrIHNpemUgb2Ygd2VhcG9ucyBieSAyMCUuIEFsc28gaW5jcmVhc2UgUGljayBVcCBSYW5nZSBieSA0NSUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgXCJJbmNyZWFzZXMgYXR0YWNrIHNpemUgb2Ygd2VhcG9ucyBieSAyNSUuIEFsc28gaW5jcmVhc2UgUGljayBVcCBSYW5nZSBieSA1MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc0VxdWlwZWQpIHJldHVybjtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/MightyStone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e485nxwipCSoi4wBDgh39e', 'MightyStone');
// Script/Item/MightyStone.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MightyStone = /** @class */ (function (_super) {
    __extends(MightyStone, _super);
    function MightyStone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damageRate = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    MightyStone_1 = MightyStone;
    // LIFE-CYCLE CALLBACKS:
    MightyStone.prototype.onLoad = function () {
        MightyStone_1.instance = this;
        this.itemOnLoad();
        this.description = "Gain 10% damage.";
    };
    MightyStone.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Gain 15% damage.";
                    this.isEquiped = true;
                    this.loadStats();
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Gain 20% damage.";
                    this.updateStats(5);
                    break;
                case 3:
                    this.description = "Gain 25% damage.";
                    this.updateStats(5);
                    break;
                case 4:
                    this.description = "Gain 30% damage.";
                    this.updateStats(5);
                    break;
                case 5:
                    this.updateStats(5);
                    break;
                default:
                    break;
            }
        }
    };
    MightyStone.prototype.loadStats = function () {
        this.overallStats.increaseAttackRate(this.damageRate);
    };
    MightyStone.prototype.updateStats = function (additionDamageRate) {
        this.overallStats.increaseAttackRate(additionDamageRate);
    };
    MightyStone.prototype.start = function () { };
    MightyStone.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var MightyStone_1;
    __decorate([
        property(cc.Float)
    ], MightyStone.prototype, "damageRate", void 0);
    MightyStone = MightyStone_1 = __decorate([
        ccclass
    ], MightyStone);
    return MightyStone;
}(Item_1.default));
exports.default = MightyStone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxNaWdodHlTdG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBSTtJQUE3QztRQUFBLHFFQTBEQztRQXZEQyxnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBc0Q1QixDQUFDO29CQTFEb0IsV0FBVztJQUs5Qix3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNFLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO0lBQ3hDLENBQUM7SUFDRCwrQkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO29CQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxpQ0FBVyxHQUFYLFVBQVksa0JBQTBCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsMkJBQUssR0FBTCxjQUFTLENBQUM7SUFFViw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLGVBQUssQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO0lBQzlCLENBQUM7O0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ0s7SUFITCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEQvQjtJQUFELGtCQUFDO0NBMURELEFBMERDLENBMUR3QyxjQUFJLEdBMEQ1QztrQkExRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pZ2h0eVN0b25lIGV4dGVuZHMgSXRlbSB7XG4gIHN0YXRpYyBpbnN0YW5jZTogTWlnaHR5U3RvbmU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgZGFtYWdlUmF0ZTogbnVtYmVyID0gMTA7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBNaWdodHlTdG9uZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5pdGVtT25Mb2FkKCk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiR2FpbiAxMCUgZGFtYWdlLlwiO1xuICB9XG4gIG9uTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2tMZXZlbCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMub25MZXZlbE1heCgpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJHYWluIDE1JSBkYW1hZ2UuXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJHYWluIDIwJSBkYW1hZ2UuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkdhaW4gMjUlIGRhbWFnZS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiR2FpbiAzMCUgZGFtYWdlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2FkU3RhdHMoKSB7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMuaW5jcmVhc2VBdHRhY2tSYXRlKHRoaXMuZGFtYWdlUmF0ZSk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoYWRkaXRpb25EYW1hZ2VSYXRlOiBudW1iZXIpIHtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5pbmNyZWFzZUF0dGFja1JhdGUoYWRkaXRpb25EYW1hZ2VSYXRlKTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLm9uTGV2ZWxVcCgpO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmlzRXF1aXBlZCkgcmV0dXJuO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/HastePotion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e86behE45tB+ZFEjjLVrX8A', 'HastePotion');
// Script/Item/HastePotion.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HastePotion = /** @class */ (function (_super) {
    __extends(HastePotion, _super);
    function HastePotion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasteRate = 5;
        _this.speedRate = 30;
        _this.currentLevel = _this.level;
        return _this;
    }
    HastePotion_1 = HastePotion;
    HastePotion.prototype.onLoad = function () {
        this.itemOnLoad();
        HastePotion_1.instance = this;
        this.description = "Increase Haste by 5% and SPD by 30%.";
    };
    HastePotion.prototype.loadStats = function () {
        this.overallStats.increaseHasteRate(this.hasteRate);
        this.overallStats.increaseSpeedRate(this.speedRate);
    };
    HastePotion.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase Haste by 10% and SPD by 35%.";
                    this.isEquiped = true;
                    this.loadStats();
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Increase Haste by 15% and SPD by 40%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description = "Increase Haste by 20% and SPD by 45%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description = "Increase Haste by 25% and SPD by 50%.";
                    this.updateStats(5, 5);
                    break;
                case 5:
                    this.updateStats(5, 5);
                    break;
                default:
                    break;
            }
        }
    };
    HastePotion.prototype.updateStats = function (additionHasteAmount, additionSpeedAmount) {
        this.overallStats.increaseHasteRate(additionHasteAmount);
        this.overallStats.increaseSpeedRate(additionSpeedAmount);
    };
    HastePotion.prototype.start = function () { };
    HastePotion.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var HastePotion_1;
    __decorate([
        property(cc.Float)
    ], HastePotion.prototype, "hasteRate", void 0);
    __decorate([
        property(cc.Float)
    ], HastePotion.prototype, "speedRate", void 0);
    HastePotion = HastePotion_1 = __decorate([
        ccclass
    ], HastePotion);
    return HastePotion;
}(Item_1.default));
exports.default = HastePotion;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxIYXN0ZVBvdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBSTtJQUE3QztRQUFBLHFFQTREQztRQXpEQyxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsa0JBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDOztJQXNENUIsQ0FBQztvQkE1RG9CLFdBQVc7SUFPOUIsNEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixhQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLHNDQUFzQyxDQUFDO0lBQzVELENBQUM7SUFDRCwrQkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELCtCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsdUNBQXVDLENBQUM7b0JBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLHdCQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyx1Q0FBdUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsdUNBQXVDLENBQUM7b0JBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLHVDQUF1QyxDQUFDO29CQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsaUNBQVcsR0FBWCxVQUFZLG1CQUEyQixFQUFFLG1CQUEyQjtRQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwyQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLDRCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87SUFDOUIsQ0FBQzs7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDRztJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNJO0lBTEosV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTREL0I7SUFBRCxrQkFBQztDQTVERCxBQTREQyxDQTVEd0MsY0FBSSxHQTRENUM7a0JBNURvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXN0ZVBvdGlvbiBleHRlbmRzIEl0ZW0ge1xuICBzdGF0aWMgaW5zdGFuY2U6IEhhc3RlUG90aW9uO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGhhc3RlUmF0ZTogbnVtYmVyID0gNTtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBzcGVlZFJhdGU6IG51bWJlciA9IDMwO1xuICBjdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5pdGVtT25Mb2FkKCk7XG4gICAgSGFzdGVQb3Rpb24uaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIEhhc3RlIGJ5IDUlIGFuZCBTUEQgYnkgMzAlLlwiO1xuICB9XG4gIGxvYWRTdGF0cygpIHtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5pbmNyZWFzZUhhc3RlUmF0ZSh0aGlzLmhhc3RlUmF0ZSk7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMuaW5jcmVhc2VTcGVlZFJhdGUodGhpcy5zcGVlZFJhdGUpO1xuICB9XG4gIG9uTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5pc0xvY2tMZXZlbCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMub25MZXZlbE1heCgpO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBIYXN0ZSBieSAxMCUgYW5kIFNQRCBieSAzNSUuXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBIYXN0ZSBieSAxNSUgYW5kIFNQRCBieSA0MCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIEhhc3RlIGJ5IDIwJSBhbmQgU1BEIGJ5IDQ1JS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUsIDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgSGFzdGUgYnkgMjUlIGFuZCBTUEQgYnkgNTAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUsIDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVTdGF0cyhhZGRpdGlvbkhhc3RlQW1vdW50OiBudW1iZXIsIGFkZGl0aW9uU3BlZWRBbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlSGFzdGVSYXRlKGFkZGl0aW9uSGFzdGVBbW91bnQpO1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlU3BlZWRSYXRlKGFkZGl0aW9uU3BlZWRBbW91bnQpO1xuICB9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75857hubXJPr5RQkanJ9FBc', 'Item');
// Script/Item/Item.ts

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
var GameController_1 = require("../Controller/GameController");
var OverallStats_1 = require("../Player/OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 0;
        _this.maxLevel = 5;
        _this.isEquiped = false;
        _this.isLockLevel = false;
        _this.description = null;
        _this.displayIcon = null;
        _this.dt = 0;
        return _this;
    }
    Item.prototype.onLevelMax = function () {
        if (this.level >= this.maxLevel) {
            this.isLockLevel = true;
        }
    };
    // onLoad () {}
    Item.prototype.itemOnLoad = function () {
        this.overallStats = OverallStats_1.default.instance;
        GameController_1.default.instance.addItem(this);
        this.name = this.node.name;
    };
    Item.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        this.level += 1;
        this.onLevelMax();
        console.log(this.level);
    };
    Item.prototype.start = function () { };
    Item.prototype.update = function (dt) { };
    __decorate([
        property(cc.Float)
    ], Item.prototype, "maxLevel", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Item.prototype, "displayIcon", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(cc.Component));
exports.default = Item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtEQUEwRDtBQUMxRCx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErQkM7UUE5QkMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLFFBQUUsR0FBVyxDQUFDLENBQUM7O0lBcUJqQixDQUFDO0lBbkJDLHlCQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDRCxlQUFlO0lBQ2YseUJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUM7UUFDMUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNELHdCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG9CQUFLLEdBQUwsY0FBUyxDQUFDO0lBQ1YscUJBQU0sR0FBTixVQUFPLEVBQUUsSUFBRyxDQUFDO0lBM0JiO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0U7SUFLckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDVTtJQVJoQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBK0J4QjtJQUFELFdBQUM7Q0EvQkQsQUErQkMsQ0EvQmlDLEVBQUUsQ0FBQyxTQUFTLEdBK0I3QztrQkEvQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgT3ZlcmFsbFN0YXRzIGZyb20gXCIuLi9QbGF5ZXIvT3ZlcmFsbFN0YXRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgbGV2ZWw6IG51bWJlciA9IDA7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgbWF4TGV2ZWw6IG51bWJlciA9IDU7XG4gIGlzRXF1aXBlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0xvY2tMZXZlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBkaXNwbGF5SWNvbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICBvdmVyYWxsU3RhdHM6IE92ZXJhbGxTdGF0cztcbiAgZHQ6IG51bWJlciA9IDA7XG4gIG5hbWU6IHN0cmluZztcbiAgb25MZXZlbE1heCgpIHtcbiAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLm1heExldmVsKSB7XG4gICAgICB0aGlzLmlzTG9ja0xldmVsID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgLy8gb25Mb2FkICgpIHt9XG4gIGl0ZW1PbkxvYWQoKSB7XG4gICAgdGhpcy5vdmVyYWxsU3RhdHMgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2U7XG4gICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkSXRlbSh0aGlzKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgfVxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5sZXZlbCk7XG4gIH1cbiAgc3RhcnQoKSB7fVxuICB1cGRhdGUoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/ObjectPooling.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb9e3iCZnBH3INAnHdGRZQw', 'ObjectPooling');
// Script/Manager/ObjectPooling.ts

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
var Coin_1 = require("../Other Object/Coin");
var Experience_1 = require("../Other Object/Experience");
var Pickup_1 = require("../Other Object/Pickup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var objectPooling = /** @class */ (function (_super) {
    __extends(objectPooling, _super);
    function objectPooling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expPrefab = new Array();
        _this.coinPrefab = null;
        _this.foodPrefab = null;
        _this.rainbowExpPrefab = null;
        _this.gameplay = null;
        _this.expPool = new Array();
        _this.coinPool = new cc.NodePool();
        _this.foodPool = new cc.NodePool();
        _this.rainbowExpPool = new cc.NodePool();
        _this.expList = new Array();
        _this.coinList = new Array();
        _this.magnetList = new Array();
        return _this;
    }
    objectPooling_1 = objectPooling;
    objectPooling.prototype.onLoad = function () {
        objectPooling_1.instance = this;
        this.addToArrayPool();
        var initCount = 500;
        for (var j = 0; j < this.expPool.length; j++) {
            for (var i = 0; i < initCount; ++i) {
                var exp = cc.instantiate(this.expPrefab[j]);
                this.expPool[j].put(exp);
            }
        }
    };
    objectPooling.prototype.start = function () { };
    objectPooling.prototype.addToArrayPool = function () {
        for (var i = 0; i < this.expPrefab.length; i++) {
            var expType = new cc.NodePool();
            this.expPool.push(expType);
        }
    };
    objectPooling.prototype.generateExp = function (node, expGained) {
        var exp = null;
        var type = null;
        if (expGained > 0)
            type = 1;
        if (expGained > 10)
            type = 2;
        if (expGained > 19)
            type = 3;
        if (expGained > 49)
            type = 4;
        if (expGained > 99)
            type = 5;
        if (expGained > 200)
            type = 6;
        if (this.expPool[type - 1].size() > 0) {
            exp = this.expPool[type - 1].get();
        }
        else {
            exp = cc.instantiate(this.expPrefab[type - 1]);
        }
        exp.getComponent(Experience_1.default).set(expGained);
        exp.getComponent(Pickup_1.default).set();
        this.addToExpList(exp);
        exp.parent = this.gameplay;
        exp.position = node.position;
    };
    objectPooling.prototype.generateCoin = function (node, amount) {
        var coin = null;
        if (this.coinPool.size() > 0) {
            coin = this.coinPool.get();
        }
        else {
            coin = cc.instantiate(this.coinPrefab);
        }
        coin.getComponent(Coin_1.default).set(amount);
        coin.getComponent(Pickup_1.default).set();
        this.addToCoinList(coin);
        coin.parent = this.gameplay;
        coin.position = node.position;
    };
    objectPooling.prototype.generateFood = function (node) {
        var food = null;
        if (this.foodPool.size() > 0) {
            food = this.foodPool.get();
        }
        else {
            food = cc.instantiate(this.foodPrefab);
        }
        food.getComponent(Pickup_1.default).set();
        food.parent = this.gameplay;
        food.position = node.position;
    };
    objectPooling.prototype.generateMagnet = function (node) {
        var magnet = null;
        this.addToMagnetList(magnet);
        magnet = cc.instantiate(this.rainbowExpPrefab);
        magnet.getComponent(Pickup_1.default).set();
        magnet.parent = this.gameplay;
        magnet.position = node.position;
    };
    objectPooling.prototype.addToExpList = function (node) {
        this.expList.push(node);
    };
    objectPooling.prototype.addToCoinList = function (node) {
        this.coinList.push(node);
    };
    objectPooling.prototype.addToMagnetList = function (node) {
        this.magnetList.push(node);
    };
    objectPooling.prototype.putBackToPool = function (node) {
        if (!node)
            return;
        switch (node.name) {
            case "Exp1":
                this.expPool[0].put(node);
                break;
            case "Exp2":
                this.expPool[1].put(node);
                break;
            case "Exp3":
                this.expPool[2].put(node);
                break;
            case "Exp4":
                this.expPool[3].put(node);
                break;
            case "Exp5":
                this.expPool[4].put(node);
                break;
            case "Exp6":
                this.expPool[5].put(node);
                break;
            case "Coin":
                this.coinPool.put(node);
                break;
            case "Food":
                this.foodPool.put(node);
                break;
        }
    };
    objectPooling.prototype.removeFromList = function () {
        this.expList = this.expList.filter(function (item) { return item.getComponent(Experience_1.default).isLooted !== true; });
        this.coinList = this.coinList.filter(function (item) { return item.getComponent(Coin_1.default).isLooted !== true; });
    };
    objectPooling.prototype.onMagnetPickup = function () {
        this.expList.forEach(function (element) {
            element.getComponent(Pickup_1.default).isPicking = true;
        });
        this.coinList.forEach(function (element) {
            element.getComponent(Pickup_1.default).isPicking = true;
        });
        this.magnetList.forEach(function (element) {
            if (element != null && element.active)
                element.getComponent(Pickup_1.default).isPicking = true;
        });
    };
    objectPooling.prototype.update = function (dt) {
        this.removeFromList();
    };
    var objectPooling_1;
    __decorate([
        property(Array(cc.Prefab))
    ], objectPooling.prototype, "expPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], objectPooling.prototype, "coinPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], objectPooling.prototype, "foodPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], objectPooling.prototype, "rainbowExpPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], objectPooling.prototype, "gameplay", void 0);
    objectPooling = objectPooling_1 = __decorate([
        ccclass
    ], objectPooling);
    return objectPooling;
}(cc.Component));
exports.default = objectPooling;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxPYmplY3RQb29saW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUN4Qyx5REFBb0Q7QUFHcEQsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBd0pDO1FBckpDLGVBQVMsR0FBcUIsSUFBSSxLQUFLLEVBQWEsQ0FBQztRQUVyRCxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQXVCLElBQUksS0FBSyxFQUFlLENBQUM7UUFDdkQsY0FBUSxHQUFnQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxjQUFRLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLG9CQUFjLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELGFBQU8sR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUMvQyxjQUFRLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7UUFDaEQsZ0JBQVUsR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQzs7SUFzSXBELENBQUM7c0JBeEpvQixhQUFhO0lBbUJoQyw4QkFBTSxHQUFOO1FBQ0UsZUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RC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TztZQUM5QixJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU07Z0JBQ25DLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ1MsOEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7SUFwSkQ7UUFEQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvREFDMEI7SUFFckQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkRBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQVhOLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F3SmpDO0lBQUQsb0JBQUM7Q0F4SkQsQUF3SkMsQ0F4SjBDLEVBQUUsQ0FBQyxTQUFTLEdBd0p0RDtrQkF4Sm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvaW4gZnJvbSBcIi4uL090aGVyIE9iamVjdC9Db2luXCI7XG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi4vT3RoZXIgT2JqZWN0L0V4cGVyaWVuY2VcIjtcbmltcG9ydCBGb29kIGZyb20gXCIuLi9PdGhlciBPYmplY3QvRm9vZFwiO1xuaW1wb3J0IE1hZ25ldCBmcm9tIFwiLi4vT3RoZXIgT2JqZWN0L01hZ25ldFwiO1xuaW1wb3J0IFBpY2t1cCBmcm9tIFwiLi4vT3RoZXIgT2JqZWN0L1BpY2t1cFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb2JqZWN0UG9vbGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBpbnN0YW5jZTogb2JqZWN0UG9vbGluZztcbiAgQHByb3BlcnR5KEFycmF5KGNjLlByZWZhYikpXG4gIGV4cFByZWZhYjogQXJyYXk8Y2MuUHJlZmFiPiA9IG5ldyBBcnJheTxjYy5QcmVmYWI+KCk7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGNvaW5QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGZvb2RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHJhaW5ib3dFeHBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lcGxheTogY2MuTm9kZSA9IG51bGw7XG4gIGV4cFBvb2w6IEFycmF5PGNjLk5vZGVQb29sPiA9IG5ldyBBcnJheTxjYy5Ob2RlUG9vbD4oKTtcbiAgY29pblBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gIGZvb2RQb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICByYWluYm93RXhwUG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgZXhwTGlzdDogQXJyYXk8Y2MuTm9kZT4gPSBuZXcgQXJyYXk8Y2MuTm9kZT4oKTtcbiAgY29pbkxpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIG1hZ25ldExpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIG9uTG9hZCgpIHtcbiAgICBvYmplY3RQb29saW5nLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmFkZFRvQXJyYXlQb29sKCk7XG4gICAgbGV0IGluaXRDb3VudCA9IDUwMDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZXhwUG9vbC5sZW5ndGg7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0Q291bnQ7ICsraSkge1xuICAgICAgICBsZXQgZXhwID0gY2MuaW5zdGFudGlhdGUodGhpcy5leHBQcmVmYWJbal0pO1xuICAgICAgICB0aGlzLmV4cFBvb2xbal0ucHV0KGV4cCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXJ0KCkge31cblxuICBhZGRUb0FycmF5UG9vbCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXhwUHJlZmFiLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXhwVHlwZSA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgdGhpcy5leHBQb29sLnB1c2goZXhwVHlwZSk7XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlRXhwKG5vZGU6IGNjLk5vZGUsIGV4cEdhaW5lZDogbnVtYmVyKSB7XG4gICAgbGV0IGV4cDogY2MuTm9kZSA9IG51bGw7XG4gICAgbGV0IHR5cGU6IG51bWJlciA9IG51bGw7XG4gICAgaWYgKGV4cEdhaW5lZCA+IDApIHR5cGUgPSAxO1xuICAgIGlmIChleHBHYWluZWQgPiAxMCkgdHlwZSA9IDI7XG4gICAgaWYgKGV4cEdhaW5lZCA+IDE5KSB0eXBlID0gMztcbiAgICBpZiAoZXhwR2FpbmVkID4gNDkpIHR5cGUgPSA0O1xuICAgIGlmIChleHBHYWluZWQgPiA5OSkgdHlwZSA9IDU7XG4gICAgaWYgKGV4cEdhaW5lZCA+IDIwMCkgdHlwZSA9IDY7XG5cbiAgICBpZiAodGhpcy5leHBQb29sW3R5cGUgLSAxXS5zaXplKCkgPiAwKSB7XG4gICAgICBleHAgPSB0aGlzLmV4cFBvb2xbdHlwZSAtIDFdLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV4cFByZWZhYlt0eXBlIC0gMV0pO1xuICAgIH1cbiAgICBleHAuZ2V0Q29tcG9uZW50KEV4cGVyaWVuY2UpLnNldChleHBHYWluZWQpO1xuICAgIGV4cC5nZXRDb21wb25lbnQoUGlja3VwKS5zZXQoKTtcbiAgICB0aGlzLmFkZFRvRXhwTGlzdChleHApO1xuICAgIGV4cC5wYXJlbnQgPSB0aGlzLmdhbWVwbGF5O1xuICAgIGV4cC5wb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gIH1cbiAgZ2VuZXJhdGVDb2luKG5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XG4gICAgbGV0IGNvaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIGlmICh0aGlzLmNvaW5Qb29sLnNpemUoKSA+IDApIHtcbiAgICAgIGNvaW4gPSB0aGlzLmNvaW5Qb29sLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb2luUHJlZmFiKTtcbiAgICB9XG4gICAgY29pbi5nZXRDb21wb25lbnQoQ29pbikuc2V0KGFtb3VudCk7XG4gICAgY29pbi5nZXRDb21wb25lbnQoUGlja3VwKS5zZXQoKTtcbiAgICB0aGlzLmFkZFRvQ29pbkxpc3QoY29pbik7XG4gICAgY29pbi5wYXJlbnQgPSB0aGlzLmdhbWVwbGF5O1xuICAgIGNvaW4ucG9zaXRpb24gPSBub2RlLnBvc2l0aW9uO1xuICB9XG4gIGdlbmVyYXRlRm9vZChub2RlOiBjYy5Ob2RlKSB7XG4gICAgbGV0IGZvb2Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIGlmICh0aGlzLmZvb2RQb29sLnNpemUoKSA+IDApIHtcbiAgICAgIGZvb2QgPSB0aGlzLmZvb2RQb29sLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5mb29kUHJlZmFiKTtcbiAgICB9XG4gICAgZm9vZC5nZXRDb21wb25lbnQoUGlja3VwKS5zZXQoKTtcbiAgICBmb29kLnBhcmVudCA9IHRoaXMuZ2FtZXBsYXk7XG4gICAgZm9vZC5wb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gIH1cbiAgZ2VuZXJhdGVNYWduZXQobm9kZTogY2MuTm9kZSkge1xuICAgIGxldCBtYWduZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIHRoaXMuYWRkVG9NYWduZXRMaXN0KG1hZ25ldCk7XG4gICAgbWFnbmV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yYWluYm93RXhwUHJlZmFiKTtcbiAgICBtYWduZXQuZ2V0Q29tcG9uZW50KFBpY2t1cCkuc2V0KCk7XG4gICAgbWFnbmV0LnBhcmVudCA9IHRoaXMuZ2FtZXBsYXk7XG4gICAgbWFnbmV0LnBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbjtcbiAgfVxuICBhZGRUb0V4cExpc3Qobm9kZTogY2MuTm9kZSkge1xuICAgIHRoaXMuZXhwTGlzdC5wdXNoKG5vZGUpO1xuICB9XG4gIGFkZFRvQ29pbkxpc3Qobm9kZTogY2MuTm9kZSkge1xuICAgIHRoaXMuY29pbkxpc3QucHVzaChub2RlKTtcbiAgfVxuICBhZGRUb01hZ25ldExpc3Qobm9kZTogY2MuTm9kZSkge1xuICAgIHRoaXMubWFnbmV0TGlzdC5wdXNoKG5vZGUpO1xuICB9XG4gIHB1dEJhY2tUb1Bvb2wobm9kZTogY2MuTm9kZSkge1xuICAgIGlmICghbm9kZSkgcmV0dXJuO1xuICAgIHN3aXRjaCAobm9kZS5uYW1lKSB7XG4gICAgICBjYXNlIFwiRXhwMVwiOlxuICAgICAgICB0aGlzLmV4cFBvb2xbMF0ucHV0KG5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFeHAyXCI6XG4gICAgICAgIHRoaXMuZXhwUG9vbFsxXS5wdXQobm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkV4cDNcIjpcbiAgICAgICAgdGhpcy5leHBQb29sWzJdLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRXhwNFwiOlxuICAgICAgICB0aGlzLmV4cFBvb2xbM10ucHV0KG5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFeHA1XCI6XG4gICAgICAgIHRoaXMuZXhwUG9vbFs0XS5wdXQobm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkV4cDZcIjpcbiAgICAgICAgdGhpcy5leHBQb29sWzVdLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQ29pblwiOlxuICAgICAgICB0aGlzLmNvaW5Qb29sLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRm9vZFwiOlxuICAgICAgICB0aGlzLmZvb2RQb29sLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJlbW92ZUZyb21MaXN0KCkge1xuICAgIHRoaXMuZXhwTGlzdCA9IHRoaXMuZXhwTGlzdC5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5nZXRDb21wb25lbnQoRXhwZXJpZW5jZSkuaXNMb290ZWQgIT09IHRydWVcbiAgICApO1xuICAgIHRoaXMuY29pbkxpc3QgPSB0aGlzLmNvaW5MaXN0LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLmdldENvbXBvbmVudChDb2luKS5pc0xvb3RlZCAhPT0gdHJ1ZVxuICAgICk7XG4gIH1cbiAgb25NYWduZXRQaWNrdXAoKSB7XG4gICAgdGhpcy5leHBMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KFBpY2t1cCkuaXNQaWNraW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmNvaW5MaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KFBpY2t1cCkuaXNQaWNraW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLm1hZ25ldExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCAmJiBlbGVtZW50LmFjdGl2ZSlcbiAgICAgICAgZWxlbWVudC5nZXRDb21wb25lbnQoUGlja3VwKS5pc1BpY2tpbmcgPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlRnJvbUxpc3QoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/BaneOfRegeneration.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71e5c8EZ9hGzqsKPVNjQ4gS', 'BaneOfRegeneration');
// Script/Item/BaneOfRegeneration.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaneOfRegeneration = /** @class */ (function (_super) {
    __extends(BaneOfRegeneration, _super);
    function BaneOfRegeneration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.regenTick = 5;
        _this.timer = 0;
        _this.currentLevel = _this.level;
        return _this;
    }
    BaneOfRegeneration_1 = BaneOfRegeneration;
    // LIFE-CYCLE CALLBACKS:
    BaneOfRegeneration.prototype.onLoad = function () {
        BaneOfRegeneration_1.instance = this;
        this.description = "Recover health by 1 every 5 seconds.";
        this.itemOnLoad();
        GameController_1.default.instance.addItem(this);
    };
    BaneOfRegeneration.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Recover health by 1 every 4 seconds.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Recover health by 1 every 3 seconds.";
                    this.updateStats(4);
                    break;
                case 3:
                    this.description = "Recover health by 1 every 2 seconds.";
                    this.updateStats(3);
                    break;
                case 4:
                    this.description = "Recover health by 1 every second.";
                    this.updateStats(2);
                    break;
                case 5:
                    this.updateStats(1);
                    break;
                default:
                    break;
            }
        }
    };
    BaneOfRegeneration.prototype.regenPlayer = function () {
        if (this.timer < 0) {
            this.timer = this.regenTick;
            PlayerController_1.default.instance.regenHP(1);
        }
    };
    BaneOfRegeneration.prototype.updateStats = function (regenTick) {
        this.regenTick = regenTick;
    };
    BaneOfRegeneration.prototype.start = function () { };
    BaneOfRegeneration.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.timer -= dt;
        this.regenPlayer();
    };
    var BaneOfRegeneration_1;
    __decorate([
        property(cc.Float)
    ], BaneOfRegeneration.prototype, "regenTick", void 0);
    BaneOfRegeneration = BaneOfRegeneration_1 = __decorate([
        ccclass
    ], BaneOfRegeneration);
    return BaneOfRegeneration;
}(Item_1.default));
exports.default = BaneOfRegeneration;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxCYW5lT2ZSZWdlbmVyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUN4QywrREFBMEQ7QUFDMUQsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFJO0lBQXBEO1FBQUEscUVBZ0VDO1FBN0RDLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBMkQ1QixDQUFDOzJCQWhFb0Isa0JBQWtCO0lBTXJDLHdCQUF3QjtJQUV4QixtQ0FBTSxHQUFOO1FBQ0Usb0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLHNDQUFzQyxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsc0NBQXNDLENBQUM7b0JBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0Qix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsc0NBQXNDLENBQUM7b0JBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsc0NBQXNDLENBQUM7b0JBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsbUNBQW1DLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsd0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVCLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBQ0Qsd0NBQVcsR0FBWCxVQUFZLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCxrQ0FBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLG1DQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O0lBNUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ0c7SUFISCxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQWdFdEM7SUFBRCx5QkFBQztDQWhFRCxBQWdFQyxDQWhFK0MsY0FBSSxHQWdFbkQ7a0JBaEVvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuLi9QbGF5ZXIvUGxheWVyQ29udHJvbGxlclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFuZU9mUmVnZW5lcmF0aW9uIGV4dGVuZHMgSXRlbSB7XG4gIHN0YXRpYyBpbnN0YW5jZTogQmFuZU9mUmVnZW5lcmF0aW9uO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIHJlZ2VuVGljazogbnVtYmVyID0gNTtcbiAgdGltZXI6IG51bWJlciA9IDA7XG4gIGN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBCYW5lT2ZSZWdlbmVyYXRpb24uaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlJlY292ZXIgaGVhbHRoIGJ5IDEgZXZlcnkgNSBzZWNvbmRzLlwiO1xuICAgIHRoaXMuaXRlbU9uTG9hZCgpO1xuICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmFkZEl0ZW0odGhpcyk7XG4gIH1cblxuICBvbkxldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2NrTGV2ZWwpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxNYXgoKTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVjb3ZlciBoZWFsdGggYnkgMSBldmVyeSA0IHNlY29uZHMuXCI7XG4gICAgICAgICAgdGhpcy5pc0VxdWlwZWQgPSB0cnVlO1xuICAgICAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmFkZEVxdWlwZWRJdGVtKHRoaXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiUmVjb3ZlciBoZWFsdGggYnkgMSBldmVyeSAzIHNlY29uZHMuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlJlY292ZXIgaGVhbHRoIGJ5IDEgZXZlcnkgMiBzZWNvbmRzLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoMyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJSZWNvdmVyIGhlYWx0aCBieSAxIGV2ZXJ5IHNlY29uZC5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVnZW5QbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMudGltZXIgPCAwKSB7XG4gICAgICB0aGlzLnRpbWVyID0gdGhpcy5yZWdlblRpY2s7XG4gICAgICBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLnJlZ2VuSFAoMSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVN0YXRzKHJlZ2VuVGljazogbnVtYmVyKSB7XG4gICAgdGhpcy5yZWdlblRpY2sgPSByZWdlblRpY2s7XG4gIH1cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy50aW1lciAtPSBkdDtcbiAgICB0aGlzLnJlZ2VuUGxheWVyKCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/ProjectilePooling.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99f7bFx1jZMiri/1AV9RwiL', 'ProjectilePooling');
// Script/Manager/ProjectilePooling.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ProjectilePooling = /** @class */ (function (_super) {
    __extends(ProjectilePooling, _super);
    function ProjectilePooling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrowPool = new cc.NodePool();
        _this.mollyPool = new cc.NodePool();
        _this.axePool = new cc.NodePool();
        _this.shurikenPool = new cc.NodePool();
        _this.trailPool = new cc.NodePool();
        _this.projectilePool = new Array();
        return _this;
    }
    ProjectilePooling_1 = ProjectilePooling;
    // LIFE-CYCLE CALLBACKS:
    ProjectilePooling.prototype.putBackToPool = function (node) {
        if (!node)
            return;
        switch (node.name) {
            case "Arrow":
                this.arrowPool.put(node);
                break;
            case "Molly":
                this.mollyPool.put(node);
                break;
            case "Axe":
                this.axePool.put(node);
                break;
            case "Shuriken":
                this.shurikenPool.put(node);
                break;
            case "Trail":
                this.trailPool.put(node);
                break;
        }
    };
    ProjectilePooling.prototype.onLoad = function () {
        ProjectilePooling_1.instance = this;
        var initCount = 1000;
        for (var i = 0; i < initCount; ++i) {
            var trail = new cc.Node("Trail");
            this.trailPool.put(trail);
        }
    };
    ProjectilePooling.prototype.start = function () { };
    ProjectilePooling.prototype.update = function (dt) { };
    var ProjectilePooling_1;
    ProjectilePooling = ProjectilePooling_1 = __decorate([
        ccclass
    ], ProjectilePooling);
    return ProjectilePooling;
}(cc.Component));
exports.default = ProjectilePooling;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxQcm9qZWN0aWxlUG9vbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXdDQztRQXRDQyxlQUFTLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLGVBQVMsR0FBZ0IsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsYUFBTyxHQUFnQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxrQkFBWSxHQUFnQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxlQUFTLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLG9CQUFjLEdBQXVCLElBQUksS0FBSyxFQUFlLENBQUM7O0lBaUNoRSxDQUFDOzBCQXhDb0IsaUJBQWlCO0lBUXBDLHdCQUF3QjtJQUN4Qix5Q0FBYSxHQUFiLFVBQWMsSUFBYTtRQUN6QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDRSxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFDRCxpQ0FBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLGtDQUFNLEdBQU4sVUFBTyxFQUFFLElBQUcsQ0FBQzs7SUF2Q00saUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F3Q3JDO0lBQUQsd0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzhDLEVBQUUsQ0FBQyxTQUFTLEdBd0MxRDtrQkF4Q29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdGlsZVBvb2xpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IFByb2plY3RpbGVQb29saW5nO1xuICBhcnJvd1Bvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gIG1vbGx5UG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgYXhlUG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgc2h1cmlrZW5Qb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICB0cmFpbFBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gIHByb2plY3RpbGVQb29sOiBBcnJheTxjYy5Ob2RlUG9vbD4gPSBuZXcgQXJyYXk8Y2MuTm9kZVBvb2w+KCk7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICBwdXRCYWNrVG9Qb29sKG5vZGU6IGNjLk5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBzd2l0Y2ggKG5vZGUubmFtZSkge1xuICAgICAgY2FzZSBcIkFycm93XCI6XG4gICAgICAgIHRoaXMuYXJyb3dQb29sLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTW9sbHlcIjpcbiAgICAgICAgdGhpcy5tb2xseVBvb2wucHV0KG5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBeGVcIjpcbiAgICAgICAgdGhpcy5heGVQb29sLnB1dChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiU2h1cmlrZW5cIjpcbiAgICAgICAgdGhpcy5zaHVyaWtlblBvb2wucHV0KG5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJUcmFpbFwiOlxuICAgICAgICB0aGlzLnRyYWlsUG9vbC5wdXQobm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgUHJvamVjdGlsZVBvb2xpbmcuaW5zdGFuY2UgPSB0aGlzO1xuICAgIGxldCBpbml0Q291bnQgPSAxMDAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdENvdW50OyArK2kpIHtcbiAgICAgIGxldCB0cmFpbCA9IG5ldyBjYy5Ob2RlKFwiVHJhaWxcIik7XG4gICAgICB0aGlzLnRyYWlsUG9vbC5wdXQodHJhaWwpO1xuICAgIH1cbiAgfVxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/Shield.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49abaKzDtZMdbL2TbK6fWVb', 'Shield');
// Script/Item/Shield.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var OverallStats_1 = require("../Player/OverallStats");
var PlayerController_1 = require("../Player/PlayerController");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseShield = 15;
        _this.baseResist = 5;
        _this.refreshTimer = 15;
        _this.timer = _this.refreshTimer;
        _this.currentLevel = _this.level;
        return _this;
    }
    Shield_1 = Shield;
    Shield.prototype.onLoad = function () {
        Shield_1.instance = this;
        GameController_1.default.instance.dynamicBuff.push(this);
        this.itemOnLoad();
        this.description =
            "Gain a shield that absorbs up to 15 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 5%.";
    };
    Shield.prototype.refreshShield = function (dt) {
        if (this.player.currentShield < this.player.maxShield) {
            this.timer -= dt;
            if (this.timer < 0) {
                this.timer = this.refreshTimer;
                this.player.gainShield(this.baseShield);
            }
        }
        else {
            this.timer = this.refreshTimer;
        }
    };
    Shield.prototype.onTakeDamage = function () {
        this.timer = 15;
    };
    Shield.prototype.updateStats = function (shieldAmount, resistAmount) {
        this.baseShield += shieldAmount;
        OverallStats_1.default.instance.increaseResistRate(resistAmount);
        this.addShieldToPlayer(shieldAmount);
    };
    Shield.prototype.loadStats = function () {
        OverallStats_1.default.instance.increaseResistRate(this.baseResist);
        this.addShieldToPlayer(this.baseShield);
    };
    Shield.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.loadStats();
                    this.description =
                        "Gain a shield that absorbs up to 20 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 10%.";
                    this.isEquiped = true;
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description =
                        "Gain a shield that absorbs up to 25 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 15%.";
                    this.updateStats(5, 5);
                    break;
                case 3:
                    this.description =
                        "Gain a shield that absorbs up to 30 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 20%.";
                    this.updateStats(5, 5);
                    break;
                case 4:
                    this.description =
                        "Gain a shield that absorbs up to 35 damage. Every 15 seconds, this shield refreshes. Also reduces damage taken by 25%.";
                    this.updateStats(5, 5);
                    break;
                case 5:
                    this.updateStats(5, 5);
                    break;
                default:
                    break;
            }
        }
    };
    Shield.prototype.addShieldToPlayer = function (shield) {
        this.player.gainMaxShield(shield);
    };
    Shield.prototype.start = function () {
        this.player = PlayerController_1.default.instance;
    };
    Shield.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
        this.refreshShield(dt);
    };
    var Shield_1;
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "baseShield", void 0);
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "baseResist", void 0);
    __decorate([
        property(cc.Float)
    ], Shield.prototype, "refreshTimer", void 0);
    Shield = Shield_1 = __decorate([
        ccclass
    ], Shield);
    return Shield;
}(Item_1.default));
exports.default = Shield;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxTaGllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFDbEQsK0RBQTBEO0FBQzFELCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBSTtJQUF4QztRQUFBLHFFQTJGQztRQXhGQyxnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixXQUFLLEdBQVcsS0FBSSxDQUFDLFlBQVksQ0FBQztRQUVsQyxrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBaUY1QixDQUFDO2VBM0ZvQixNQUFNO0lBV3pCLHVCQUFNLEdBQU47UUFDRSxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2Qix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVztZQUNkLHVIQUF1SCxDQUFDO0lBQzVILENBQUM7SUFDRCw4QkFBYSxHQUFiLFVBQWMsRUFBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3JELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FB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ekIsQ0FBQzs7SUF2RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ087SUFQUCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMkYxQjtJQUFELGFBQUM7Q0EzRkQsQUEyRkMsQ0EzRm1DLGNBQUksR0EyRnZDO2tCQTNGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IE92ZXJhbGxTdGF0cyBmcm9tIFwiLi4vUGxheWVyL092ZXJhbGxTdGF0c1wiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGllbGQgZXh0ZW5kcyBJdGVtIHtcbiAgc3RhdGljIGluc3RhbmNlOiBTaGllbGQ7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgYmFzZVNoaWVsZDogbnVtYmVyID0gMTU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgYmFzZVJlc2lzdDogbnVtYmVyID0gNTtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICByZWZyZXNoVGltZXI6IG51bWJlciA9IDE1O1xuICB0aW1lcjogbnVtYmVyID0gdGhpcy5yZWZyZXNoVGltZXI7XG4gIHBsYXllcjogUGxheWVyQ29udHJvbGxlcjtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgb25Mb2FkKCkge1xuICAgIFNoaWVsZC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuZHluYW1pY0J1ZmYucHVzaCh0aGlzKTtcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgIFwiR2FpbiBhIHNoaWVsZCB0aGF0IGFic29yYnMgdXAgdG8gMTUgZGFtYWdlLiBFdmVyeSAxNSBzZWNvbmRzLCB0aGlzIHNoaWVsZCByZWZyZXNoZXMuIEFsc28gcmVkdWNlcyBkYW1hZ2UgdGFrZW4gYnkgNSUuXCI7XG4gIH1cbiAgcmVmcmVzaFNoaWVsZChkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMucGxheWVyLmN1cnJlbnRTaGllbGQgPCB0aGlzLnBsYXllci5tYXhTaGllbGQpIHtcbiAgICAgIHRoaXMudGltZXIgLT0gZHQ7XG4gICAgICBpZiAodGhpcy50aW1lciA8IDApIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHRoaXMucmVmcmVzaFRpbWVyO1xuICAgICAgICB0aGlzLnBsYXllci5nYWluU2hpZWxkKHRoaXMuYmFzZVNoaWVsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZXIgPSB0aGlzLnJlZnJlc2hUaW1lcjtcbiAgICB9XG4gIH1cbiAgb25UYWtlRGFtYWdlKCkge1xuICAgIHRoaXMudGltZXIgPSAxNTtcbiAgfVxuICB1cGRhdGVTdGF0cyhzaGllbGRBbW91bnQ6IG51bWJlciwgcmVzaXN0QW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmJhc2VTaGllbGQgKz0gc2hpZWxkQW1vdW50O1xuICAgIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5pbmNyZWFzZVJlc2lzdFJhdGUocmVzaXN0QW1vdW50KTtcbiAgICB0aGlzLmFkZFNoaWVsZFRvUGxheWVyKHNoaWVsZEFtb3VudCk7XG4gIH1cbiAgbG9hZFN0YXRzKCkge1xuICAgIE92ZXJhbGxTdGF0cy5pbnN0YW5jZS5pbmNyZWFzZVJlc2lzdFJhdGUodGhpcy5iYXNlUmVzaXN0KTtcbiAgICB0aGlzLmFkZFNoaWVsZFRvUGxheWVyKHRoaXMuYmFzZVNoaWVsZCk7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9XG4gICAgICAgICAgICBcIkdhaW4gYSBzaGllbGQgdGhhdCBhYnNvcmJzIHVwIHRvIDIwIGRhbWFnZS4gRXZlcnkgMTUgc2Vjb25kcywgdGhpcyBzaGllbGQgcmVmcmVzaGVzLiBBbHNvIHJlZHVjZXMgZGFtYWdlIHRha2VuIGJ5IDEwJS5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuYWRkRXF1aXBlZEl0ZW0odGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiR2FpbiBhIHNoaWVsZCB0aGF0IGFic29yYnMgdXAgdG8gMjUgZGFtYWdlLiBFdmVyeSAxNSBzZWNvbmRzLCB0aGlzIHNoaWVsZCByZWZyZXNoZXMuIEFsc28gcmVkdWNlcyBkYW1hZ2UgdGFrZW4gYnkgMTUlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiR2FpbiBhIHNoaWVsZCB0aGF0IGFic29yYnMgdXAgdG8gMzAgZGFtYWdlLiBFdmVyeSAxNSBzZWNvbmRzLCB0aGlzIHNoaWVsZCByZWZyZXNoZXMuIEFsc28gcmVkdWNlcyBkYW1hZ2UgdGFrZW4gYnkgMjAlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIFwiR2FpbiBhIHNoaWVsZCB0aGF0IGFic29yYnMgdXAgdG8gMzUgZGFtYWdlLiBFdmVyeSAxNSBzZWNvbmRzLCB0aGlzIHNoaWVsZCByZWZyZXNoZXMuIEFsc28gcmVkdWNlcyBkYW1hZ2UgdGFrZW4gYnkgMjUlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSwgNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUsIDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFNoaWVsZFRvUGxheWVyKHNoaWVsZDogbnVtYmVyKSB7XG4gICAgdGhpcy5wbGF5ZXIuZ2Fpbk1heFNoaWVsZChzaGllbGQpO1xuICB9XG4gIHN0YXJ0KCkge1xuICAgIHRoaXMucGxheWVyID0gUGxheWVyQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMub25MZXZlbFVwKCk7XG4gICAgaWYgKFV0aWxzLmlzUGF1c2UpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaXNFcXVpcGVkKSByZXR1cm47XG4gICAgdGhpcy5yZWZyZXNoU2hpZWxkKGR0KTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item/WisdomStone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0874crcm+ZPvKqsI4mxBc56', 'WisdomStone');
// Script/Item/WisdomStone.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WisdomStone = /** @class */ (function (_super) {
    __extends(WisdomStone, _super);
    function WisdomStone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expBonusRate = 10;
        _this.currentLevel = _this.level;
        return _this;
    }
    WisdomStone_1 = WisdomStone;
    // LIFE-CYCLE CALLBACKS:
    WisdomStone.prototype.onLoad = function () {
        WisdomStone_1.instance = this;
        this.itemOnLoad();
        this.description = "Increase EXP gain by 10%.";
    };
    WisdomStone.prototype.onLevelUp = function () {
        if (this.isLockLevel)
            return;
        if (this.currentLevel < this.level) {
            this.onLevelMax();
            this.currentLevel = this.level;
            switch (this.level) {
                case 1:
                    this.description = "Increase EXP gain by 15%.";
                    this.isEquiped = true;
                    this.loadStats();
                    GameController_1.default.instance.addEquipedItem(this);
                    break;
                case 2:
                    this.description = "Increase EXP gain by 20%.";
                    this.updateStats(5);
                    break;
                case 3:
                    this.description = "Increase EXP gain by 25%.";
                    this.updateStats(5);
                    break;
                case 4:
                    this.description = "Increase EXP gain by 30%.";
                    this.updateStats(5);
                    break;
                case 5:
                    this.updateStats(5);
                    break;
                default:
                    break;
            }
        }
    };
    WisdomStone.prototype.loadStats = function () {
        this.overallStats.increaseBonusExpRate(this.expBonusRate);
    };
    WisdomStone.prototype.updateStats = function (additionExpAmount) {
        this.overallStats.increaseBonusExpRate(additionExpAmount);
    };
    WisdomStone.prototype.start = function () { };
    WisdomStone.prototype.update = function (dt) {
        this.onLevelUp();
        if (Utils_1.default.isPause)
            return;
        if (!this.isEquiped)
            return;
    };
    var WisdomStone_1;
    __decorate([
        property(cc.Float)
    ], WisdomStone.prototype, "expBonusRate", void 0);
    WisdomStone = WisdomStone_1 = __decorate([
        ccclass
    ], WisdomStone);
    return WisdomStone;
}(Item_1.default));
exports.default = WisdomStone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtXFxXaXNkb21TdG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsNkNBQXdDO0FBQ3hDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBSTtJQUE3QztRQUFBLHFFQTBEQztRQXZEQyxrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixrQkFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7O0lBc0Q1QixDQUFDO29CQTFEb0IsV0FBVztJQUs5Qix3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNFLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDO0lBQ2pELENBQUM7SUFDRCwrQkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDO29CQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLENBQUM7b0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLENBQUM7b0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLENBQUM7b0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxpQ0FBVyxHQUFYLFVBQVksaUJBQXlCO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsMkJBQUssR0FBTCxjQUFTLENBQUM7SUFFViw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLGVBQUssQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO0lBQzlCLENBQUM7O0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ087SUFIUCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEQvQjtJQUFELGtCQUFDO0NBMURELEFBMERDLENBMUR3QyxjQUFJLEdBMEQ1QztrQkExRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpc2RvbVN0b25lIGV4dGVuZHMgSXRlbSB7XG4gIHN0YXRpYyBpbnN0YW5jZTogV2lzZG9tU3RvbmU7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgZXhwQm9udXNSYXRlOiBudW1iZXIgPSAxMDtcbiAgY3VycmVudExldmVsID0gdGhpcy5sZXZlbDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIFdpc2RvbVN0b25lLmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLml0ZW1PbkxvYWQoKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBFWFAgZ2FpbiBieSAxMCUuXCI7XG4gIH1cbiAgb25MZXZlbFVwKCkge1xuICAgIGlmICh0aGlzLmlzTG9ja0xldmVsKSByZXR1cm47XG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5vbkxldmVsTWF4KCk7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWw7XG4gICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIEVYUCBnYWluIGJ5IDE1JS5cIjtcbiAgICAgICAgICB0aGlzLmlzRXF1aXBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5sb2FkU3RhdHMoKTtcbiAgICAgICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5hZGRFcXVpcGVkSXRlbSh0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkluY3JlYXNlIEVYUCBnYWluIGJ5IDIwJS5cIjtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzKDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiSW5jcmVhc2UgRVhQIGdhaW4gYnkgMjUlLlwiO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJJbmNyZWFzZSBFWFAgZ2FpbiBieSAzMCUuXCI7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyg1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoNSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvYWRTdGF0cygpIHtcbiAgICB0aGlzLm92ZXJhbGxTdGF0cy5pbmNyZWFzZUJvbnVzRXhwUmF0ZSh0aGlzLmV4cEJvbnVzUmF0ZSk7XG4gIH1cbiAgdXBkYXRlU3RhdHMoYWRkaXRpb25FeHBBbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMub3ZlcmFsbFN0YXRzLmluY3JlYXNlQm9udXNFeHBSYXRlKGFkZGl0aW9uRXhwQW1vdW50KTtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLm9uTGV2ZWxVcCgpO1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmlzRXF1aXBlZCkgcmV0dXJuO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu/Sound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82d38zYk45A5JW5Dsd2V51q', 'Sound');
// Script/Menu/Sound.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Sound = /** @class */ (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audible = null;
        _this.mute = null;
        return _this;
    }
    Sound_1 = Sound;
    // LIFE-CYCLE CALLBACKS:
    Sound.prototype.onLoad = function () {
        Sound_1.instance = this;
    };
    Sound.prototype.start = function () { };
    Sound.prototype.update = function (dt) {
        if (Utils_1.default.getLocal("Sound") == "true")
            this.node.getComponent(cc.Sprite).spriteFrame = this.audible;
        else
            this.node.getComponent(cc.Sprite).spriteFrame = this.mute;
    };
    var Sound_1;
    __decorate([
        property(cc.SpriteFrame)
    ], Sound.prototype, "audible", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Sound.prototype, "mute", void 0);
    Sound = Sound_1 = __decorate([
        ccclass
    ], Sound);
    return Sound;
}(cc.Component));
exports.default = Sound;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51XFxTb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFvQkM7UUFqQkMsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFFL0IsVUFBSSxHQUFtQixJQUFJLENBQUM7O0lBZTlCLENBQUM7Y0FwQm9CLEtBQUs7SUFPeEIsd0JBQXdCO0lBRXhCLHNCQUFNLEdBQU47UUFDRSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQscUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksZUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7O0lBaEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1Q0FDRztJQUxULEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FvQnpCO0lBQUQsWUFBQztDQXBCRCxBQW9CQyxDQXBCa0MsRUFBRSxDQUFDLFNBQVMsR0FvQjlDO2tCQXBCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGluc3RhbmNlOiBTb3VuZDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBhdWRpYmxlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgbXV0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBTb3VuZC5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmF1ZGlibGU7XG4gICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm11dGU7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu/BarslideEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e3abgvaPBOdbNJQ+GA/29X', 'BarslideEffect');
// Script/Menu/BarslideEffect.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuEffect = /** @class */ (function (_super) {
    __extends(MenuEffect, _super);
    function MenuEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startPoint = cc.v2(800, -215);
        _this.endPoint = cc.v2(-800, -215);
        return _this;
    }
    MenuEffect.prototype.onLoad = function () { };
    MenuEffect.prototype.start = function () { };
    MenuEffect.prototype.update = function (dt) {
        this.node.x -= dt * 100;
        if (this.node.x <= this.endPoint.x)
            this.node.x = this.startPoint.x;
    };
    MenuEffect = __decorate([
        ccclass
    ], MenuEffect);
    return MenuEffect;
}(cc.Component));
exports.default = MenuEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51XFxCYXJzbGlkZUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQVdDO1FBVkMsZ0JBQVUsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLGNBQVEsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBU3hDLENBQUM7SUFSQywyQkFBTSxHQUFOLGNBQVUsQ0FBQztJQUVYLDBCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQVZrQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBVzlCO0lBQUQsaUJBQUM7Q0FYRCxBQVdDLENBWHVDLEVBQUUsQ0FBQyxTQUFTLEdBV25EO2tCQVhvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhcnRQb2ludDogY2MuVmVjMiA9IGNjLnYyKDgwMCwgLTIxNSk7XG4gIGVuZFBvaW50OiBjYy5WZWMyID0gY2MudjIoLTgwMCwgLTIxNSk7XG4gIG9uTG9hZCgpIHt9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMubm9kZS54IC09IGR0ICogMTAwO1xuICAgIGlmICh0aGlzLm5vZGUueCA8PSB0aGlzLmVuZFBvaW50LngpIHRoaXMubm9kZS54ID0gdGhpcy5zdGFydFBvaW50Lng7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/DestroyableObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbc57hCFpRHALPri/eMuEs/', 'DestroyableObject');
// Script/Other Object/DestroyableObject.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DestroyableObject = /** @class */ (function (_super) {
    __extends(DestroyableObject, _super);
    function DestroyableObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.food = null;
        _this.foodDropChance = 20;
        return _this;
    }
    DestroyableObject.prototype.takeDamage = function () {
        this.node.destroy();
    };
    DestroyableObject.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 2) {
            this.takeDamage();
        }
    };
    DestroyableObject.prototype.onDestroy = function () {
        if (Utils_1.default.random(0, 100) < this.foodDropChance) {
            var food = cc.instantiate(this.food);
            food.position = this.node.position;
        }
    };
    DestroyableObject.prototype.start = function () { };
    DestroyableObject.prototype.update = function (dt) { };
    __decorate([
        property(cc.Prefab)
    ], DestroyableObject.prototype, "food", void 0);
    __decorate([
        property(cc.Float)
    ], DestroyableObject.prototype, "foodDropChance", void 0);
    DestroyableObject = __decorate([
        ccclass
    ], DestroyableObject);
    return DestroyableObject;
}(cc.Component));
exports.default = DestroyableObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXERlc3Ryb3lhYmxlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXlCQztRQXZCQyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLG9CQUFjLEdBQUcsRUFBRSxDQUFDOztJQXFCdEIsQ0FBQztJQW5CQyxzQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsNENBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBQ1MscUNBQVMsR0FBbkI7UUFDRSxJQUFJLGVBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDOUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxpQ0FBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLGtDQUFNLEdBQU4sVUFBTyxFQUFFLElBQUcsQ0FBQztJQXRCYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkRBQ0M7SUFKRCxpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXlCckM7SUFBRCx3QkFBQztDQXpCRCxBQXlCQyxDQXpCOEMsRUFBRSxDQUFDLFNBQVMsR0F5QjFEO2tCQXpCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzdHJveWFibGVPYmplY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBmb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGZvb2REcm9wQ2hhbmNlID0gMjA7XG5cbiAgdGFrZURhbWFnZSgpIHtcbiAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICB9XG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMikge1xuICAgICAgdGhpcy50YWtlRGFtYWdlKCk7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKFV0aWxzLnJhbmRvbSgwLCAxMDApIDwgdGhpcy5mb29kRHJvcENoYW5jZSkge1xuICAgICAgdmFyIGZvb2QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZvb2QpO1xuXG4gICAgICBmb29kLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6b16W8rZdMKbG2uFBWxHd6', 'Food');
// Script/Other Object/Food.ts

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
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var PlayerController_1 = require("../Player/PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healAmount = 20;
        return _this;
        // update (dt) {}
    }
    Food.prototype.onLoad = function () {
        this.node.zIndex = 10001;
    };
    Food.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
            other.node
                .getComponent(PlayerController_1.default)
                .healByPercentage(this.healAmount);
            ObjectPooling_1.default.instance.putBackToPool(this.node);
        }
    };
    Food.prototype.start = function () { };
    __decorate([
        property(cc.Integer)
    ], Food.prototype, "healAmount", void 0);
    Food = __decorate([
        ccclass
    ], Food);
    return Food;
}(cc.Component));
exports.default = Food;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXEZvb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsMERBQXFEO0FBQ3JELCtEQUEwRDtBQUVwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW1CQztRQWpCQyxnQkFBVSxHQUFHLEVBQUUsQ0FBQzs7UUFnQmhCLGlCQUFpQjtJQUNuQixDQUFDO0lBaEJDLHFCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFpQixLQUFrQixFQUFFLElBQWlCO1FBQ3BELElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDbEIsS0FBSyxDQUFDLElBQUk7aUJBQ1AsWUFBWSxDQUFDLDBCQUFnQixDQUFDO2lCQUM5QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsdUJBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxvQkFBSyxHQUFMLGNBQVMsQ0FBQztJQWRWO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ0w7SUFGRyxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBbUJ4QjtJQUFELFdBQUM7Q0FuQkQsQUFtQkMsQ0FuQmlDLEVBQUUsQ0FBQyxTQUFTLEdBbUI3QztrQkFuQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IG9iamVjdFBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvT2JqZWN0UG9vbGluZ1wiO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4uL1BsYXllci9QbGF5ZXJDb250cm9sbGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIGhlYWxBbW91bnQgPSAyMDtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS56SW5kZXggPSAxMDAwMTtcbiAgfVxuXG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMCkge1xuICAgICAgb3RoZXIubm9kZVxuICAgICAgICAuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpXG4gICAgICAgIC5oZWFsQnlQZXJjZW50YWdlKHRoaXMuaGVhbEFtb3VudCk7XG4gICAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Experience.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c54a1Bbd9xDxK3MtppYqqc9', 'Experience');
// Script/Other Object/Experience.ts

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
var Level_1 = require("../Manager/Level");
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Experience = /** @class */ (function (_super) {
    __extends(Experience, _super);
    function Experience() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exp = 10;
        _this.getExpSound = null;
        _this.isLooted = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Experience.prototype.onLoad = function () {
        this.node.zIndex = 10000;
        ObjectPooling_1.default.instance.addToExpList(this.node);
    };
    Experience.prototype.set = function (exp) {
        this.exp = exp;
        this.isLooted = false;
    };
    Experience.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.getExpSound, false, 1);
            Level_1.default.instance.addExperience(this.exp);
            this.isLooted = true;
            ObjectPooling_1.default.instance.putBackToPool(this.node);
        }
    };
    Experience.prototype.start = function () { };
    __decorate([
        property(cc.Float)
    ], Experience.prototype, "exp", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Experience.prototype, "getExpSound", void 0);
    Experience = __decorate([
        ccclass
    ], Experience);
    return Experience;
}(cc.Component));
exports.default = Experience;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXEV4cGVyaWVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsNkNBQXdDO0FBQ3hDLDBDQUFxQztBQUNyQywwREFBcUQ7QUFFL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE2QkM7UUEzQkMsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUVqQixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFZLEtBQUssQ0FBQzs7UUF1QjFCLGlCQUFpQjtJQUNuQixDQUFDO0lBdEJDLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHVCQUFhLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELHdCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QscUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLGVBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTTtnQkFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLHVCQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBQ0QsMEJBQUssR0FBTCxjQUFTLENBQUM7SUF4QlY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDRjtJQUVqQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNVO0lBSmQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTZCOUI7SUFBRCxpQkFBQztDQTdCRCxBQTZCQyxDQTdCdUMsRUFBRSxDQUFDLFNBQVMsR0E2Qm5EO2tCQTdCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL0NvbnRyb2xsZXIvVXRpbHNcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi4vTWFuYWdlci9MZXZlbFwiO1xuaW1wb3J0IG9iamVjdFBvb2xpbmcgZnJvbSBcIi4uL01hbmFnZXIvT2JqZWN0UG9vbGluZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZXJpZW5jZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgZXhwOiBudW1iZXIgPSAxMDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgZ2V0RXhwU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGlzTG9vdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS56SW5kZXggPSAxMDAwMDtcbiAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLmFkZFRvRXhwTGlzdCh0aGlzLm5vZGUpO1xuICB9XG4gIHNldChleHA6IG51bWJlcikge1xuICAgIHRoaXMuZXhwID0gZXhwO1xuICAgIHRoaXMuaXNMb290ZWQgPSBmYWxzZTtcbiAgfVxuICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2V0RXhwU291bmQsIGZhbHNlLCAxKTtcbiAgICAgIExldmVsLmluc3RhbmNlLmFkZEV4cGVyaWVuY2UodGhpcy5leHApO1xuICAgICAgdGhpcy5pc0xvb3RlZCA9IHRydWU7XG4gICAgICBvYmplY3RQb29saW5nLmluc3RhbmNlLnB1dEJhY2tUb1Bvb2wodGhpcy5ub2RlKTtcbiAgICB9XG4gIH1cbiAgc3RhcnQoKSB7fVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Pickup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee6b6BKEbdNroF3wYKtt+5y', 'Pickup');
// Script/Other Object/Pickup.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pickup = /** @class */ (function (_super) {
    __extends(Pickup, _super);
    function Pickup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPicking = false;
        _this.speed = 100;
        return _this;
    }
    Pickup.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 7) {
            this.isPicking = true;
        }
    };
    Pickup.prototype.onLoad = function () { };
    Pickup.prototype.set = function () {
        this.isPicking = false;
        this.speed = 100;
    };
    Pickup.prototype.moveToPlayer = function (dt) {
        var player = this.node.parent.getChildByName("PlayerBase");
        var deltaX = player.x - this.node.x;
        var deltaY = player.y - this.node.y;
        var normalizedDelta = cc.v2(deltaX, deltaY).normalize();
        this.node.x += normalizedDelta.x * this.speed * dt;
        this.node.y += normalizedDelta.y * this.speed * dt;
        this.speed += 20;
    };
    Pickup.prototype.start = function () { };
    Pickup.prototype.update = function (dt) {
        if (Utils_1.default.isPause)
            return;
        if (!this.isPicking)
            return;
        this.moveToPlayer(dt);
    };
    Pickup = __decorate([
        ccclass
    ], Pickup);
    return Pickup;
}(cc.Component));
exports.default = Pickup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXFBpY2t1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFnQ0M7UUEvQkMsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFLLEdBQVcsR0FBRyxDQUFDOztJQThCdEIsQ0FBQztJQTVCQyxpQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHVCQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1gsb0JBQUcsR0FBSDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFDRCw2QkFBWSxHQUFaLFVBQWEsRUFBVTtRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQUssR0FBTCxjQUFTLENBQUM7SUFFVix1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksZUFBSyxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBL0JrQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBZ0MxQjtJQUFELGFBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ21DLEVBQUUsQ0FBQyxTQUFTLEdBZ0MvQztrQkFoQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBpc1BpY2tpbmcgPSBmYWxzZTtcbiAgc3BlZWQ6IG51bWJlciA9IDEwMDtcblxuICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDcpIHtcbiAgICAgIHRoaXMuaXNQaWNraW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7fVxuICBzZXQoKSB7XG4gICAgdGhpcy5pc1BpY2tpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNwZWVkID0gMTAwO1xuICB9XG4gIG1vdmVUb1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgdmFyIHBsYXllciA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJCYXNlXCIpO1xuICAgIHZhciBkZWx0YVggPSBwbGF5ZXIueCAtIHRoaXMubm9kZS54O1xuICAgIHZhciBkZWx0YVkgPSBwbGF5ZXIueSAtIHRoaXMubm9kZS55O1xuICAgIGxldCBub3JtYWxpemVkRGVsdGEgPSBjYy52MihkZWx0YVgsIGRlbHRhWSkubm9ybWFsaXplKCk7XG4gICAgdGhpcy5ub2RlLnggKz0gbm9ybWFsaXplZERlbHRhLnggKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy5ub2RlLnkgKz0gbm9ybWFsaXplZERlbHRhLnkgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy5zcGVlZCArPSAyMDtcbiAgfVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVXRpbHMuaXNQYXVzZSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pc1BpY2tpbmcpIHJldHVybjtcbiAgICB0aGlzLm1vdmVUb1BsYXllcihkdCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other Object/Coin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6456cNTILNO74xFxkRLqkyK', 'Coin');
// Script/Other Object/Coin.ts

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
var GameController_1 = require("../Controller/GameController");
var Utils_1 = require("../Controller/Utils");
var ObjectPooling_1 = require("../Manager/ObjectPooling");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.amount = 10;
        _this.getCoinSound = null;
        _this.isLooted = false;
        return _this;
    }
    Coin.prototype.onLoad = function () {
        this.node.zIndex = 10001;
        ObjectPooling_1.default.instance.addToCoinList(this.node);
    };
    Coin.prototype.set = function (amount) {
        this.amount = amount;
        this.isLooted = false;
    };
    Coin.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.getCoinSound, false, 1);
            GameController_1.default.instance.gainCoin(this.amount);
            this.isLooted = true;
            ObjectPooling_1.default.instance.putBackToPool(this.node);
        }
    };
    __decorate([
        property(cc.Integer)
    ], Coin.prototype, "amount", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Coin.prototype, "getCoinSound", void 0);
    Coin = __decorate([
        ccclass
    ], Coin);
    return Coin;
}(cc.Component));
exports.default = Coin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlciBPYmplY3RcXENvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDZDQUF3QztBQUN4QywwREFBcUQ7QUFFL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1QkM7UUFyQkMsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxjQUFRLEdBQVksS0FBSyxDQUFDOztJQWtCNUIsQ0FBQztJQWpCQyxxQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHVCQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELGtCQUFHLEdBQUgsVUFBSSxNQUFjO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCwrQkFBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksZUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO2dCQUNuQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLHVCQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0NBQ1Q7SUFFWjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNXO0lBSmYsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXVCeEI7SUFBRCxXQUFDO0NBdkJELEFBdUJDLENBdkJpQyxFQUFFLENBQUMsU0FBUyxHQXVCN0M7a0JBdkJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgb2JqZWN0UG9vbGluZyBmcm9tIFwiLi4vTWFuYWdlci9PYmplY3RQb29saW5nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIGFtb3VudCA9IDEwO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBnZXRDb2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIGlzTG9vdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDE7XG4gICAgb2JqZWN0UG9vbGluZy5pbnN0YW5jZS5hZGRUb0NvaW5MaXN0KHRoaXMubm9kZSk7XG4gIH1cbiAgc2V0KGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgdGhpcy5pc0xvb3RlZCA9IGZhbHNlO1xuICB9XG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgIGlmIChvdGhlci50YWcgPT0gMCkge1xuICAgICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nZXRDb2luU291bmQsIGZhbHNlLCAxKTtcbiAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLmdhaW5Db2luKHRoaXMuYW1vdW50KTtcbiAgICAgIHRoaXMuaXNMb290ZWQgPSB0cnVlO1xuICAgICAgb2JqZWN0UG9vbGluZy5pbnN0YW5jZS5wdXRCYWNrVG9Qb29sKHRoaXMubm9kZSk7XG4gICAgfVxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/OverallStats.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3e72yWqRJJTI7+/B39kZpf', 'OverallStats');
// Script/Player/OverallStats.ts

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
var GameController_1 = require("../Controller/GameController");
var UIController_1 = require("../Controller/UIController");
var Weapon_1 = require("../Weapon/Weapon");
var PlayerController_1 = require("./PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverallStats = /** @class */ (function (_super) {
    __extends(OverallStats, _super);
    function OverallStats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   maxHpRate: number = 0;
        //   atkRate: number = 0;
        //   spdRate: number = 0;
        //   critChance: number = 0;
        //   pickupRangeRate: number = 0;
        //   resistRate: number = 0;
        _this.nameList = new Array();
        _this.statList = new Array();
        return _this;
    }
    OverallStats_1 = OverallStats;
    OverallStats.prototype.loadStats = function () {
        for (var i = 0; i < this.nameList.length; i++) {
            this.statList[i] = 0;
        }
    };
    OverallStats.prototype.loadFromCharacterData = function () {
        var data = PlayerController_1.default.instance.loadedData;
        this.increaseAttackRate(data.atk);
        this.increaseCritChance(data.crit);
    };
    OverallStats.prototype.pushToList = function () {
        this.nameList.push("Max HP Rate");
        this.nameList.push("Attack Rate");
        this.nameList.push("Speed Rate");
        this.nameList.push("Haste Rate");
        this.nameList.push("Weapon size Rate");
        this.nameList.push("Critical Chance");
        this.nameList.push("Critical Damage Rate");
        this.nameList.push("Pickup Range Rate");
        this.nameList.push("Resist Rate");
        this.nameList.push("Bonus Healing Rate");
        this.nameList.push("Bonus Exp Rate");
    };
    OverallStats.prototype.onStatsChange = function () {
        if (GameController_1.default.instance.isGameOver)
            return;
        PlayerController_1.default.instance.onStatChange();
        Weapon_1.default.instance.onStatChange();
        UIController_1.default.instance.updateStats();
    };
    OverallStats.prototype.increaseMaxHPRate = function (amount) {
        this.statList[0] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseAttackRate = function (amount) {
        this.statList[1] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseSpeedRate = function (amount) {
        this.statList[2] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseHasteRate = function (amount) {
        this.statList[3] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseWeaponSizeRate = function (amount) {
        this.statList[4] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseCritChance = function (amount) {
        this.statList[5] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseCritDamageRate = function (amount) {
        this.statList[6] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increasePickupRangeRate = function (amount) {
        this.statList[7] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseResistRate = function (amount) {
        this.statList[8] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseBonusHealingRate = function (amount) {
        this.statList[9] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.increaseBonusExpRate = function (amount) {
        this.statList[10] += amount;
        this.onStatsChange();
    };
    OverallStats.prototype.getMaxHPRate = function () {
        return this.statList[0];
    };
    OverallStats.prototype.getAttackRate = function () {
        return this.statList[1];
    };
    OverallStats.prototype.getSpeedRate = function () {
        return this.statList[2];
    };
    OverallStats.prototype.getHasteRate = function () {
        return this.statList[3];
    };
    OverallStats.prototype.getWeaponSizeRate = function () {
        return this.statList[4];
    };
    OverallStats.prototype.getCritChance = function () {
        return this.statList[5];
    };
    OverallStats.prototype.getCritDamageRate = function () {
        return this.statList[6];
    };
    OverallStats.prototype.getPickupRangeRate = function () {
        return this.statList[7];
    };
    OverallStats.prototype.getResistRate = function () {
        return this.statList[8];
    };
    OverallStats.prototype.getBonusHealingRate = function () {
        return this.statList[9];
    };
    OverallStats.prototype.getBonusExpRate = function () {
        return this.statList[10];
    };
    OverallStats.prototype.onLoad = function () {
        OverallStats_1.instance = this;
        this.player = PlayerController_1.default.instance;
        this.pushToList();
        this.loadStats();
    };
    OverallStats.prototype.start = function () {
        this.loadFromCharacterData();
    };
    OverallStats.prototype.update = function (dt) { };
    var OverallStats_1;
    OverallStats = OverallStats_1 = __decorate([
        ccclass
    ], OverallStats);
    return OverallStats;
}(cc.Component));
exports.default = OverallStats;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXE92ZXJhbGxTdGF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBRXRELDJDQUFzQztBQUN0Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtSUM7UUFqSUMsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGlDQUFpQztRQUNqQyw0QkFBNEI7UUFDNUIsY0FBUSxHQUFrQixJQUFJLEtBQUssRUFBVSxDQUFDO1FBQzlDLGNBQVEsR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQzs7SUEwSGhELENBQUM7cUJBbklvQixZQUFZO0lBVy9CLGdDQUFTLEdBQVQ7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ0QsNENBQXFCLEdBQXJCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsMEJBQWdCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJ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LENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMENBQW1CLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCw2QkFBTSxHQUFOO1FBQ0UsY0FBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRywwQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFHLENBQUM7O0lBbElNLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FtSWhDO0lBQUQsbUJBQUM7Q0FuSUQsQUFtSUMsQ0FuSXlDLEVBQUUsQ0FBQyxTQUFTLEdBbUlyRDtrQkFuSW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgVUlDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVyL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9Db250cm9sbGVyL1V0aWxzXCI7XG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuLi9XZWFwb24vV2VhcG9uXCI7XG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyYWxsU3RhdHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IE92ZXJhbGxTdGF0cztcbiAgLy8gICBtYXhIcFJhdGU6IG51bWJlciA9IDA7XG4gIC8vICAgYXRrUmF0ZTogbnVtYmVyID0gMDtcbiAgLy8gICBzcGRSYXRlOiBudW1iZXIgPSAwO1xuICAvLyAgIGNyaXRDaGFuY2U6IG51bWJlciA9IDA7XG4gIC8vICAgcGlja3VwUmFuZ2VSYXRlOiBudW1iZXIgPSAwO1xuICAvLyAgIHJlc2lzdFJhdGU6IG51bWJlciA9IDA7XG4gIG5hbWVMaXN0OiBBcnJheTxTdHJpbmc+ID0gbmV3IEFycmF5PFN0cmluZz4oKTtcbiAgc3RhdExpc3Q6IEFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICBwbGF5ZXI6IFBsYXllckNvbnRyb2xsZXI7XG4gIGxvYWRTdGF0cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3RhdExpc3RbaV0gPSAwO1xuICAgIH1cbiAgfVxuICBsb2FkRnJvbUNoYXJhY3RlckRhdGEoKSB7XG4gICAgbGV0IGRhdGEgPSBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlLmxvYWRlZERhdGE7XG4gICAgdGhpcy5pbmNyZWFzZUF0dGFja1JhdGUoZGF0YS5hdGspO1xuICAgIHRoaXMuaW5jcmVhc2VDcml0Q2hhbmNlKGRhdGEuY3JpdCk7XG4gIH1cbiAgcHVzaFRvTGlzdCgpIHtcbiAgICB0aGlzLm5hbWVMaXN0LnB1c2goXCJNYXggSFAgUmF0ZVwiKTtcbiAgICB0aGlzLm5hbWVMaXN0LnB1c2goXCJBdHRhY2sgUmF0ZVwiKTtcbiAgICB0aGlzLm5hbWVMaXN0LnB1c2goXCJTcGVlZCBSYXRlXCIpO1xuICAgIHRoaXMubmFtZUxpc3QucHVzaChcIkhhc3RlIFJhdGVcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiV2VhcG9uIHNpemUgUmF0ZVwiKTtcbiAgICB0aGlzLm5hbWVMaXN0LnB1c2goXCJDcml0aWNhbCBDaGFuY2VcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiQ3JpdGljYWwgRGFtYWdlIFJhdGVcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiUGlja3VwIFJhbmdlIFJhdGVcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiUmVzaXN0IFJhdGVcIik7XG4gICAgdGhpcy5uYW1lTGlzdC5wdXNoKFwiQm9udXMgSGVhbGluZyBSYXRlXCIpO1xuICAgIHRoaXMubmFtZUxpc3QucHVzaChcIkJvbnVzIEV4cCBSYXRlXCIpO1xuICB9XG5cbiAgb25TdGF0c0NoYW5nZSgpIHtcbiAgICBpZiAoR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2Uub25TdGF0Q2hhbmdlKCk7XG4gICAgV2VhcG9uLmluc3RhbmNlLm9uU3RhdENoYW5nZSgpO1xuICAgIFVJQ29udHJvbGxlci5pbnN0YW5jZS51cGRhdGVTdGF0cygpO1xuICB9XG4gIGluY3JlYXNlTWF4SFBSYXRlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0TGlzdFswXSArPSBhbW91bnQ7XG4gICAgdGhpcy5vblN0YXRzQ2hhbmdlKCk7XG4gIH1cbiAgaW5jcmVhc2VBdHRhY2tSYXRlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0TGlzdFsxXSArPSBhbW91bnQ7XG4gICAgdGhpcy5vblN0YXRzQ2hhbmdlKCk7XG4gIH1cbiAgaW5jcmVhc2VTcGVlZFJhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzJdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUhhc3RlUmF0ZShhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdExpc3RbM10gKz0gYW1vdW50O1xuICAgIHRoaXMub25TdGF0c0NoYW5nZSgpO1xuICB9XG4gIGluY3JlYXNlV2VhcG9uU2l6ZVJhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzRdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUNyaXRDaGFuY2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzVdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUNyaXREYW1hZ2VSYXRlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0TGlzdFs2XSArPSBhbW91bnQ7XG4gICAgdGhpcy5vblN0YXRzQ2hhbmdlKCk7XG4gIH1cbiAgaW5jcmVhc2VQaWNrdXBSYW5nZVJhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzddICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZVJlc2lzdFJhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzhdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUJvbnVzSGVhbGluZ1JhdGUoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRMaXN0WzldICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuICBpbmNyZWFzZUJvbnVzRXhwUmF0ZShhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdExpc3RbMTBdICs9IGFtb3VudDtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2UoKTtcbiAgfVxuXG4gIGdldE1heEhQUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFswXTtcbiAgfVxuICBnZXRBdHRhY2tSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRMaXN0WzFdO1xuICB9XG4gIGdldFNwZWVkUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFsyXTtcbiAgfVxuICBnZXRIYXN0ZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdExpc3RbM107XG4gIH1cbiAgZ2V0V2VhcG9uU2l6ZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdExpc3RbNF07XG4gIH1cbiAgZ2V0Q3JpdENoYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFs1XTtcbiAgfVxuICBnZXRDcml0RGFtYWdlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFs2XTtcbiAgfVxuICBnZXRQaWNrdXBSYW5nZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdExpc3RbN107XG4gIH1cbiAgZ2V0UmVzaXN0UmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFs4XTtcbiAgfVxuICBnZXRCb251c0hlYWxpbmdSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRMaXN0WzldO1xuICB9XG4gIGdldEJvbnVzRXhwUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0TGlzdFsxMF07XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIE92ZXJhbGxTdGF0cy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5wbGF5ZXIgPSBQbGF5ZXJDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIHRoaXMucHVzaFRvTGlzdCgpO1xuICAgIHRoaXMubG9hZFN0YXRzKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmxvYWRGcm9tQ2hhcmFjdGVyRGF0YSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/EnemyDetector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67d3e0TzONHGZRKEdQvuuLc', 'EnemyDetector');
// Script/Player/EnemyDetector.ts

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
var EnemyController_1 = require("../Enemy/EnemyController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyDetector = /** @class */ (function (_super) {
    __extends(EnemyDetector, _super);
    function EnemyDetector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.closestDistance = 100000;
        _this.closestEnemy = null;
        _this.enemyList = new Array();
        _this.distanceList = new Array();
        return _this;
    }
    EnemyDetector_1 = EnemyDetector;
    EnemyDetector.prototype.onLoad = function () {
        EnemyDetector_1.instance = this;
    };
    EnemyDetector.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).isInRange = true;
            this.enemyList.push(other.node);
            //   if (this.closestDistance >= distance) {
            //     this.closestDistance = distance;
            //     this.closestEnemy = other.node;
            //     this.angle =
            //       Math.atan2(
            //         this.closestEnemy.y - this.node.parent.y,
            //         this.closestEnemy.x - this.node.parent.x
            //       ) *
            //       (180 / Math.PI);
            //   }
        }
    };
    EnemyDetector.prototype.onCollisionExit = function (other, self) {
        if (other.tag == 1) {
            other.node.getComponent(EnemyController_1.default).isInRange = false;
        }
    };
    EnemyDetector.prototype.start = function () { };
    EnemyDetector.prototype.removeFromList = function () {
        this.enemyList = this.enemyList
            .filter(function (item) { return item.getComponent(EnemyController_1.default).currentHp > 0; })
            .filter(function (item) { return item.getComponent(EnemyController_1.default).isInRange == true; });
    };
    EnemyDetector.prototype.sortList = function () {
        this.enemyList = this.enemyList.sort(function (a, b) {
            return a.getComponent(EnemyController_1.default).distance -
                b.getComponent(EnemyController_1.default).distance;
        });
    };
    EnemyDetector.prototype.update = function (dt) {
        this.removeFromList();
        this.sortList();
        // if (this.closestEnemy == null) {
        //   this.angle = Movement.instance.directionAngle;
        //   this.closestDistance = 1000000;
        //   return;
        // }
        // if (this.closestEnemy.getComponent(EnemyController).currentHp <= 0) {
        //   this.closestEnemy = null;
        // }
    };
    var EnemyDetector_1;
    EnemyDetector = EnemyDetector_1 = __decorate([
        ccclass
    ], EnemyDetector);
    return EnemyDetector;
}(cc.Component));
exports.default = EnemyDetector;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXEVuZW15RGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEYsNERBQXVEO0FBRWpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMkRDO1FBekRDLHdCQUF3QjtRQUN4QixxQkFBZSxHQUFXLE1BQU0sQ0FBQztRQUNqQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7UUFDakQsa0JBQVksR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQzs7SUFvRHBELENBQUM7c0JBM0RvQixhQUFhO0lBUWhDLDhCQUFNLEdBQU47UUFDRSxlQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsNENBQTRDO1lBQzVDLHVDQUF1QztZQUN2QyxzQ0FBc0M7WUFDdEMsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvREFBb0Q7WUFDcEQsbURBQW1EO1lBQ25ELFlBQVk7WUFDWix5QkFBeUI7WUFDekIsTUFBTTtTQUNQO0lBQ0gsQ0FBQztJQUNELHVDQUFlLEdBQWYsVUFBZ0IsS0FBa0IsRUFBRSxJQUFpQjtRQUNuRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUNELDZCQUFLLEdBQUwsY0FBUyxDQUFDO0lBQ1Ysc0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7YUFDNUIsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQzthQUNsRSxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFwRCxDQUFvRCxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNsQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ0gsT0FBQSxDQUFDLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxRQUFRO2dCQUN4QyxDQUFDLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxRQUFRO1FBRHhDLENBQ3dDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBQ0QsOEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLG1DQUFtQztRQUNuQyxtREFBbUQ7UUFDbkQsb0NBQW9DO1FBQ3BDLFlBQVk7UUFDWixJQUFJO1FBQ0osd0VBQXdFO1FBQ3hFLDhCQUE4QjtRQUM5QixJQUFJO0lBQ04sQ0FBQzs7SUExRGtCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EyRGpDO0lBQUQsb0JBQUM7Q0EzREQsQUEyREMsQ0EzRDBDLEVBQUUsQ0FBQyxTQUFTLEdBMkR0RDtrQkEzRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IE1vdmVtZW50IGZyb20gXCIuLi9Db250cm9sbGVyL01vdmVtZW50XCI7XG5pbXBvcnQgRW5lbXlDb250cm9sbGVyIGZyb20gXCIuLi9FbmVteS9FbmVteUNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15RGV0ZWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBzdGF0aWMgaW5zdGFuY2U6IEVuZW15RGV0ZWN0b3I7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICBjbG9zZXN0RGlzdGFuY2U6IG51bWJlciA9IDEwMDAwMDtcbiAgY2xvc2VzdEVuZW15OiBjYy5Ob2RlID0gbnVsbDtcblxuICBlbmVteUxpc3Q6IEFycmF5PGNjLk5vZGU+ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gIGRpc3RhbmNlTGlzdDogQXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gIG9uTG9hZCgpIHtcbiAgICBFbmVteURldGVjdG9yLmluc3RhbmNlID0gdGhpcztcbiAgfVxuICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuaXNJblJhbmdlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW5lbXlMaXN0LnB1c2gob3RoZXIubm9kZSk7XG4gICAgICAvLyAgIGlmICh0aGlzLmNsb3Nlc3REaXN0YW5jZSA+PSBkaXN0YW5jZSkge1xuICAgICAgLy8gICAgIHRoaXMuY2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAvLyAgICAgdGhpcy5jbG9zZXN0RW5lbXkgPSBvdGhlci5ub2RlO1xuICAgICAgLy8gICAgIHRoaXMuYW5nbGUgPVxuICAgICAgLy8gICAgICAgTWF0aC5hdGFuMihcbiAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZXN0RW5lbXkueSAtIHRoaXMubm9kZS5wYXJlbnQueSxcbiAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZXN0RW5lbXkueCAtIHRoaXMubm9kZS5wYXJlbnQueFxuICAgICAgLy8gICAgICAgKSAqXG4gICAgICAvLyAgICAgICAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAvLyAgIH1cbiAgICB9XG4gIH1cbiAgb25Db2xsaXNpb25FeGl0KG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuaXNJblJhbmdlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YXJ0KCkge31cbiAgcmVtb3ZlRnJvbUxpc3QoKSB7XG4gICAgdGhpcy5lbmVteUxpc3QgPSB0aGlzLmVuZW15TGlzdFxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5jdXJyZW50SHAgPiAwKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5pc0luUmFuZ2UgPT0gdHJ1ZSk7XG4gIH1cblxuICBzb3J0TGlzdCgpIHtcbiAgICB0aGlzLmVuZW15TGlzdCA9IHRoaXMuZW5lbXlMaXN0LnNvcnQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgYS5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sbGVyKS5kaXN0YW5jZSAtXG4gICAgICAgIGIuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuZGlzdGFuY2VcbiAgICApO1xuICB9XG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMucmVtb3ZlRnJvbUxpc3QoKTtcbiAgICB0aGlzLnNvcnRMaXN0KCk7XG5cbiAgICAvLyBpZiAodGhpcy5jbG9zZXN0RW5lbXkgPT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5hbmdsZSA9IE1vdmVtZW50Lmluc3RhbmNlLmRpcmVjdGlvbkFuZ2xlO1xuICAgIC8vICAgdGhpcy5jbG9zZXN0RGlzdGFuY2UgPSAxMDAwMDAwO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5jbG9zZXN0RW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbGxlcikuY3VycmVudEhwIDw9IDApIHtcbiAgICAvLyAgIHRoaXMuY2xvc2VzdEVuZW15ID0gbnVsbDtcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b67a81990VAnaW6wnj+XVVi', 'PlayerController');
// Script/Player/PlayerController.ts

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
var GameController_1 = require("../Controller/GameController");
var UIController_1 = require("../Controller/UIController");
var Utils_1 = require("../Controller/Utils");
var DeathHeart_1 = require("../Other Object/DeathHeart");
var StartWeapon_1 = require("../Weapon/StartWeapon");
var HealthAndShield_1 = require("./HealthAndShield");
var OverallStats_1 = require("./OverallStats");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataPlayer = null;
        _this.deathHeart = null;
        _this.speed = 1;
        _this.maxHp = 100;
        _this.maxShield = 0;
        _this.iFrameDuration = 0.3;
        _this.pickupRange = 100;
        _this.resist = 0;
        _this.enableIframe = false;
        _this.isUnkilled = false;
        _this.characterPrefab = Array();
        _this.hurtSound = null;
        _this.deadSound = null;
        _this.healSound = null;
        return _this;
    }
    PlayerController_1 = PlayerController;
    PlayerController.prototype.onLoad = function () {
        PlayerController_1.instance = this;
        this.overallStat = OverallStats_1.default.instance;
        this.basePR = this.pickupRange;
        this.baseResist = this.resist;
        this.loadCharacter();
        this.node.parent.zIndex = 10000;
        this.isIFrame = false;
        this.isMoving = false;
        this.iFrametimer = 0;
    };
    PlayerController.prototype.loadCharacter = function () {
        var characterLevel = Utils_1.default.getCharacterLevel();
        for (var i = 0; i < this.characterPrefab.length; i++) {
            if (Utils_1.default.getCharacterByName() == this.characterPrefab[i].name) {
                var character = cc.instantiate(this.characterPrefab[i]);
                character.parent = this.node;
                UIController_1.default.instance.setPortrait(i);
                this.loadedData =
                    this.dataPlayer.json.character[i].stats[characterLevel - 1];
                this.startWeapon = this.dataPlayer.json.character[i].weapon;
                this.baseMaxHp = this.loadedData.health;
                this.maxHp = this.baseMaxHp;
                this.currentHp = this.maxHp;
                this.baseSpd = this.loadedData.speed;
                // this.overallStat.increaseAttackRate(data.atk);
                // this.overallStat.increaseCritChance(data.crit);
            }
        }
        this.anim = this.getComponentInChildren(cc.Animation);
        this.animList = this.anim.getClips();
        this.anim.play(this.animList[0]);
        this.currentShield = this.maxShield;
        HealthAndShield_1.default.instance.setStateOnLoad(this.currentHp, this.maxHp, this.currentShield, this.maxShield);
        this.onStatChange();
        this.node.getComponent(cc.CircleCollider).radius = this.pickupRange;
    };
    PlayerController.prototype.start = function () {
        this.node.parent
            .getChildByName("StartWeapon")
            .getChildByName(this.startWeapon)
            .getComponent(StartWeapon_1.default).level++;
    };
    PlayerController.prototype.takeDamage = function (damage) {
        if (this.isIFrame)
            return;
        if (this.isUnkilled)
            return;
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.hurtSound, false, 1);
        damage -= (damage * this.resist) / 100;
        var damageLeft = this.currentShield - damage;
        this.currentShield -= damage;
        if (this.currentShield < 0)
            this.currentShield = 0;
        if (damageLeft < 0) {
            this.currentHp += damageLeft;
            HealthAndShield_1.default.instance.setStateHP(this.currentHp, this.maxHp);
            GameController_1.default.instance.takeDamage();
        }
        if (this.enableIframe) {
            this.isIFrame = true;
            this.iFrametimer = this.iFrameDuration;
        }
        HealthAndShield_1.default.instance.setStateShield(this.currentShield, this.maxShield);
        if (this.currentHp <= 0) {
            if (Utils_1.default.getLocal("Sound") == "true")
                cc.audioEngine.play(this.deadSound, false, 1);
            this.currentHp = 0;
            HealthAndShield_1.default.instance.setStateHP(this.currentHp, this.maxHp);
            for (var x = -1; x <= 1; x++) {
                for (var y = -1; y <= 1; y += 0.25) {
                    var deathHeart = cc.instantiate(this.deathHeart);
                    deathHeart.position = this.node.position;
                    deathHeart.parent = this.node.parent;
                    deathHeart.getComponent(DeathHeart_1.default).vec2 = cc.v2(x, y);
                }
            }
            GameController_1.default.instance.onGameOver();
            this.node.destroy();
        }
    };
    PlayerController.prototype.onStatChange = function () {
        var oldMaxHP = this.maxHp;
        this.maxHp =
            (this.baseMaxHp * this.overallStat.getMaxHPRate()) / 100 + this.baseMaxHp;
        this.currentHp += this.maxHp - oldMaxHP;
        this.resist = this.overallStat.getResistRate() + this.baseResist;
        if (this.resist > 100)
            this.resist = 100;
        this.pickupRange =
            (this.basePR * this.overallStat.getPickupRangeRate()) / 100 + this.basePR;
        this.node.getComponent(cc.CircleCollider).radius = this.pickupRange;
        this.speed =
            (this.baseSpd * this.overallStat.getSpeedRate()) / 100 + this.baseSpd;
        HealthAndShield_1.default.instance.setStateOnLoad(this.currentHp, this.maxHp, this.currentShield, this.maxShield);
    };
    PlayerController.prototype.gainMaxShield = function (amount) {
        this.maxShield += amount;
        this.currentShield += amount;
        HealthAndShield_1.default.instance.setStateOnLoad(this.currentHp, this.maxHp, this.currentShield, this.maxShield);
    };
    PlayerController.prototype.gainShield = function (amount) {
        this.currentShield += amount;
        if (this.currentShield > this.maxShield)
            this.currentShield = this.maxShield;
        HealthAndShield_1.default.instance.setStateOnLoad(this.currentHp, this.maxHp, this.currentShield, this.maxShield);
    };
    PlayerController.prototype.heal = function (healAmount) {
        if (this.currentHp <= 0)
            return;
        if (this.currentHp == this.maxHp)
            return;
        this.currentHp +=
            healAmount + (healAmount / 100) * this.overallStat.getBonusHealingRate();
        if (this.currentHp > this.maxHp) {
            this.currentHp = this.maxHp;
        }
        HealthAndShield_1.default.instance.setStateHP(Math.ceil(this.currentHp), this.maxHp);
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.healSound, false, 1);
    };
    PlayerController.prototype.regenHP = function (healAmount) {
        if (this.currentHp <= 0)
            return;
        if (this.currentHp == this.maxHp)
            return;
        this.currentHp +=
            healAmount + (healAmount / 100) * this.overallStat.getBonusHealingRate();
        if (this.currentHp > this.maxHp) {
            this.currentHp = this.maxHp;
        }
        HealthAndShield_1.default.instance.setStateOnLoad(Math.ceil(this.currentHp), this.maxHp, this.currentShield, this.maxShield);
    };
    PlayerController.prototype.healByPercentage = function (healPercentage) {
        if (this.currentHp <= 0)
            return;
        if (this.currentHp == this.maxHp)
            return;
        this.currentHp +=
            (this.maxHp / 100) *
                (healPercentage +
                    (healPercentage / 100) * this.overallStat.getBonusHealingRate());
        if (this.currentHp > this.maxHp) {
            this.currentHp = this.maxHp;
        }
        HealthAndShield_1.default.instance.setStateHP(Math.ceil(this.currentHp), this.maxHp);
        if (Utils_1.default.getLocal("Sound") == "true")
            cc.audioEngine.play(this.healSound, false, 1);
    };
    PlayerController.prototype.runAnimation = function () {
        if (!this.anim.getAnimationState(this.animList[1].name).isPlaying &&
            this.isMoving == true) {
            this.anim.play(this.animList[1].name);
        }
        if (this.isMoving == false &&
            !this.anim.getAnimationState(this.animList[0].name).isPlaying) {
            this.anim.play(this.animList[0].name);
        }
    };
    PlayerController.prototype.update = function (dt) {
        if (Utils_1.default.isPause) {
            this.anim.pause();
            return;
        }
        this.anim.resume();
        this.deltaTime = dt;
        this.iFrametimer -= dt;
        if (this.iFrametimer < 0) {
            this.enableIframe = false;
            this.isIFrame = false;
        }
        this.runAnimation();
    };
    var PlayerController_1;
    __decorate([
        property(cc.JsonAsset)
    ], PlayerController.prototype, "dataPlayer", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "deathHeart", void 0);
    __decorate([
        property(cc.Float)
    ], PlayerController.prototype, "iFrameDuration", void 0);
    __decorate([
        property(cc.Boolean)
    ], PlayerController.prototype, "enableIframe", void 0);
    __decorate([
        property(cc.Boolean)
    ], PlayerController.prototype, "isUnkilled", void 0);
    __decorate([
        property(Array(cc.Prefab))
    ], PlayerController.prototype, "characterPrefab", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "hurtSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "deadSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "healSound", void 0);
    PlayerController = PlayerController_1 = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUN0RCw2Q0FBd0M7QUFHeEMseURBQW9EO0FBQ3BELHFEQUFnRDtBQUVoRCxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBNk9DO1FBMU9DLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUVaLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFHZCxvQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUNyQixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFjNUIscUJBQWUsR0FBcUIsS0FBSyxFQUFhLENBQUM7UUFFdkQsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBdU1qQyxDQUFDO3lCQTdPb0IsZ0JBQWdCO0lBd0NuQyxpQ0FBTSxHQUFOO1FBQ0Usa0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLHNCQUFZLENBQUMs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bnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IFVJQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlci9VSUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vQ29udHJvbGxlci9VdGlsc1wiO1xuaW1wb3J0IEVuZW15Q29udHJvbGxlciBmcm9tIFwiLi4vRW5lbXkvRW5lbXlDb250cm9sbGVyXCI7XG5pbXBvcnQgQmFuZU9mUmVnZW5lcmF0aW9uIGZyb20gXCIuLi9JdGVtL0JhbmVPZlJlZ2VuZXJhdGlvblwiO1xuaW1wb3J0IERlYXRoSGVhcnQgZnJvbSBcIi4uL090aGVyIE9iamVjdC9EZWF0aEhlYXJ0XCI7XG5pbXBvcnQgU3RhcnRXZWFwb24gZnJvbSBcIi4uL1dlYXBvbi9TdGFydFdlYXBvblwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi4vV2VhcG9uL1dlYXBvblwiO1xuaW1wb3J0IEhlYWx0aEFuZFNoaWVsZCBmcm9tIFwiLi9IZWFsdGhBbmRTaGllbGRcIjtcbmltcG9ydCBPdmVyYWxsU3RhdHMgZnJvbSBcIi4vT3ZlcmFsbFN0YXRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGluc3RhbmNlOiBQbGF5ZXJDb250cm9sbGVyO1xuICBAcHJvcGVydHkoY2MuSnNvbkFzc2V0KVxuICBkYXRhUGxheWVyOiBjYy5Kc29uQXNzZXQgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBkZWF0aEhlYXJ0OiBjYy5QcmVmYWIgPSBudWxsO1xuICBzcGVlZCA9IDE7XG4gIG1heEhwID0gMTAwO1xuICBjdXJyZW50SHA7XG4gIG1heFNoaWVsZCA9IDA7XG4gIGN1cnJlbnRTaGllbGQ6IG51bWJlcjtcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBpRnJhbWVEdXJhdGlvbiA9IDAuMztcbiAgcGlja3VwUmFuZ2UgPSAxMDA7XG4gIHJlc2lzdCA9IDA7XG4gIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICBlbmFibGVJZnJhbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gIGlzVW5raWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYmFzZVNwZDogbnVtYmVyO1xuICBiYXNlTWF4SHA6IG51bWJlcjtcbiAgYmFzZVBSOiBudW1iZXI7XG4gIGJhc2VSZXNpc3Q6IG51bWJlcjtcbiAgaXNJRnJhbWU6IGJvb2xlYW47XG4gIGlGcmFtZXRpbWVyOiBudW1iZXI7XG4gIGlzTW92aW5nOiBib29sZWFuO1xuICBhbmltOiBjYy5BbmltYXRpb247XG4gIGFuaW1MaXN0O1xuICBkZWx0YVRpbWU6IG51bWJlcjtcbiAgb3ZlcmFsbFN0YXQ6IE92ZXJhbGxTdGF0cztcbiAgbG9hZGVkRGF0YTtcbiAgQHByb3BlcnR5KEFycmF5KGNjLlByZWZhYikpXG4gIGNoYXJhY3RlclByZWZhYjogQXJyYXk8Y2MuUHJlZmFiPiA9IEFycmF5PGNjLlByZWZhYj4oKTtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgaHVydFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBkZWFkU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGhlYWxTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgc3RhcnRXZWFwb246IHN0cmluZztcbiAgb25Mb2FkKCkge1xuICAgIFBsYXllckNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMub3ZlcmFsbFN0YXQgPSBPdmVyYWxsU3RhdHMuaW5zdGFuY2U7XG4gICAgdGhpcy5iYXNlUFIgPSB0aGlzLnBpY2t1cFJhbmdlO1xuICAgIHRoaXMuYmFzZVJlc2lzdCA9IHRoaXMucmVzaXN0O1xuICAgIHRoaXMubG9hZENoYXJhY3RlcigpO1xuICAgIHRoaXMubm9kZS5wYXJlbnQuekluZGV4ID0gMTAwMDA7XG4gICAgdGhpcy5pc0lGcmFtZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlGcmFtZXRpbWVyID0gMDtcbiAgfVxuICBsb2FkQ2hhcmFjdGVyKCkge1xuICAgIGxldCBjaGFyYWN0ZXJMZXZlbCA9IFV0aWxzLmdldENoYXJhY3RlckxldmVsKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYXJhY3RlclByZWZhYi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFV0aWxzLmdldENoYXJhY3RlckJ5TmFtZSgpID09IHRoaXMuY2hhcmFjdGVyUHJlZmFiW2ldLm5hbWUpIHtcbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hhcmFjdGVyUHJlZmFiW2ldKTtcbiAgICAgICAgY2hhcmFjdGVyLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgVUlDb250cm9sbGVyLmluc3RhbmNlLnNldFBvcnRyYWl0KGkpO1xuICAgICAgICB0aGlzLmxvYWRlZERhdGEgPVxuICAgICAgICAgIHRoaXMuZGF0YVBsYXllci5qc29uLmNoYXJhY3RlcltpXS5zdGF0c1tjaGFyYWN0ZXJMZXZlbCAtIDFdO1xuICAgICAgICB0aGlzLnN0YXJ0V2VhcG9uID0gdGhpcy5kYXRhUGxheWVyLmpzb24uY2hhcmFjdGVyW2ldLndlYXBvbjtcbiAgICAgICAgdGhpcy5iYXNlTWF4SHAgPSB0aGlzLmxvYWRlZERhdGEuaGVhbHRoO1xuICAgICAgICB0aGlzLm1heEhwID0gdGhpcy5iYXNlTWF4SHA7XG4gICAgICAgIHRoaXMuY3VycmVudEhwID0gdGhpcy5tYXhIcDtcbiAgICAgICAgdGhpcy5iYXNlU3BkID0gdGhpcy5sb2FkZWREYXRhLnNwZWVkO1xuXG4gICAgICAgIC8vIHRoaXMub3ZlcmFsbFN0YXQuaW5jcmVhc2VBdHRhY2tSYXRlKGRhdGEuYXRrKTtcbiAgICAgICAgLy8gdGhpcy5vdmVyYWxsU3RhdC5pbmNyZWFzZUNyaXRDaGFuY2UoZGF0YS5jcml0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkFuaW1hdGlvbik7XG4gICAgdGhpcy5hbmltTGlzdCA9IHRoaXMuYW5pbS5nZXRDbGlwcygpO1xuICAgIHRoaXMuYW5pbS5wbGF5KHRoaXMuYW5pbUxpc3RbMF0pO1xuICAgIHRoaXMuY3VycmVudFNoaWVsZCA9IHRoaXMubWF4U2hpZWxkO1xuICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZS5zZXRTdGF0ZU9uTG9hZChcbiAgICAgIHRoaXMuY3VycmVudEhwLFxuICAgICAgdGhpcy5tYXhIcCxcbiAgICAgIHRoaXMuY3VycmVudFNoaWVsZCxcbiAgICAgIHRoaXMubWF4U2hpZWxkXG4gICAgKTtcbiAgICB0aGlzLm9uU3RhdENoYW5nZSgpO1xuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IHRoaXMucGlja3VwUmFuZ2U7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudFxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiU3RhcnRXZWFwb25cIilcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZSh0aGlzLnN0YXJ0V2VhcG9uKVxuICAgICAgLmdldENvbXBvbmVudChTdGFydFdlYXBvbikubGV2ZWwrKztcbiAgfVxuICB0YWtlRGFtYWdlKGRhbWFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNJRnJhbWUpIHJldHVybjtcbiAgICBpZiAodGhpcy5pc1Vua2lsbGVkKSByZXR1cm47XG4gICAgaWYgKFV0aWxzLmdldExvY2FsKFwiU291bmRcIikgPT0gXCJ0cnVlXCIpXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuaHVydFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgZGFtYWdlIC09IChkYW1hZ2UgKiB0aGlzLnJlc2lzdCkgLyAxMDA7XG4gICAgdmFyIGRhbWFnZUxlZnQgPSB0aGlzLmN1cnJlbnRTaGllbGQgLSBkYW1hZ2U7XG4gICAgdGhpcy5jdXJyZW50U2hpZWxkIC09IGRhbWFnZTtcbiAgICBpZiAodGhpcy5jdXJyZW50U2hpZWxkIDwgMCkgdGhpcy5jdXJyZW50U2hpZWxkID0gMDtcblxuICAgIGlmIChkYW1hZ2VMZWZ0IDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50SHAgKz0gZGFtYWdlTGVmdDtcbiAgICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZS5zZXRTdGF0ZUhQKHRoaXMuY3VycmVudEhwLCB0aGlzLm1heEhwKTtcbiAgICAgIEdhbWVDb250cm9sbGVyLmluc3RhbmNlLnRha2VEYW1hZ2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5hYmxlSWZyYW1lKSB7XG4gICAgICB0aGlzLmlzSUZyYW1lID0gdHJ1ZTtcbiAgICAgIHRoaXMuaUZyYW1ldGltZXIgPSB0aGlzLmlGcmFtZUR1cmF0aW9uO1xuICAgIH1cbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVTaGllbGQodGhpcy5jdXJyZW50U2hpZWxkLCB0aGlzLm1heFNoaWVsZCk7XG4gICAgaWYgKHRoaXMuY3VycmVudEhwIDw9IDApIHtcbiAgICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZGVhZFNvdW5kLCBmYWxzZSwgMSk7XG4gICAgICB0aGlzLmN1cnJlbnRIcCA9IDA7XG4gICAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVIUCh0aGlzLmN1cnJlbnRIcCwgdGhpcy5tYXhIcCk7XG4gICAgICBmb3IgKGxldCB4ID0gLTE7IHggPD0gMTsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAtMTsgeSA8PSAxOyB5ICs9IDAuMjUpIHtcbiAgICAgICAgICBsZXQgZGVhdGhIZWFydCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGVhdGhIZWFydCk7XG4gICAgICAgICAgZGVhdGhIZWFydC5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICBkZWF0aEhlYXJ0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgZGVhdGhIZWFydC5nZXRDb21wb25lbnQoRGVhdGhIZWFydCkudmVjMiA9IGNjLnYyKHgsIHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBHYW1lQ29udHJvbGxlci5pbnN0YW5jZS5vbkdhbWVPdmVyKCk7XG4gICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBvblN0YXRDaGFuZ2UoKSB7XG4gICAgdmFyIG9sZE1heEhQID0gdGhpcy5tYXhIcDtcbiAgICB0aGlzLm1heEhwID1cbiAgICAgICh0aGlzLmJhc2VNYXhIcCAqIHRoaXMub3ZlcmFsbFN0YXQuZ2V0TWF4SFBSYXRlKCkpIC8gMTAwICsgdGhpcy5iYXNlTWF4SHA7XG4gICAgdGhpcy5jdXJyZW50SHAgKz0gdGhpcy5tYXhIcCAtIG9sZE1heEhQO1xuICAgIHRoaXMucmVzaXN0ID0gdGhpcy5vdmVyYWxsU3RhdC5nZXRSZXNpc3RSYXRlKCkgKyB0aGlzLmJhc2VSZXNpc3Q7XG4gICAgaWYgKHRoaXMucmVzaXN0ID4gMTAwKSB0aGlzLnJlc2lzdCA9IDEwMDtcbiAgICB0aGlzLnBpY2t1cFJhbmdlID1cbiAgICAgICh0aGlzLmJhc2VQUiAqIHRoaXMub3ZlcmFsbFN0YXQuZ2V0UGlja3VwUmFuZ2VSYXRlKCkpIC8gMTAwICsgdGhpcy5iYXNlUFI7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzID0gdGhpcy5waWNrdXBSYW5nZTtcbiAgICB0aGlzLnNwZWVkID1cbiAgICAgICh0aGlzLmJhc2VTcGQgKiB0aGlzLm92ZXJhbGxTdGF0LmdldFNwZWVkUmF0ZSgpKSAvIDEwMCArIHRoaXMuYmFzZVNwZDtcbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVPbkxvYWQoXG4gICAgICB0aGlzLmN1cnJlbnRIcCxcbiAgICAgIHRoaXMubWF4SHAsXG4gICAgICB0aGlzLmN1cnJlbnRTaGllbGQsXG4gICAgICB0aGlzLm1heFNoaWVsZFxuICAgICk7XG4gIH1cbiAgZ2Fpbk1heFNoaWVsZChhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMubWF4U2hpZWxkICs9IGFtb3VudDtcbiAgICB0aGlzLmN1cnJlbnRTaGllbGQgKz0gYW1vdW50O1xuICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZS5zZXRTdGF0ZU9uTG9hZChcbiAgICAgIHRoaXMuY3VycmVudEhwLFxuICAgICAgdGhpcy5tYXhIcCxcbiAgICAgIHRoaXMuY3VycmVudFNoaWVsZCxcbiAgICAgIHRoaXMubWF4U2hpZWxkXG4gICAgKTtcbiAgfVxuICBnYWluU2hpZWxkKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50U2hpZWxkICs9IGFtb3VudDtcbiAgICBpZiAodGhpcy5jdXJyZW50U2hpZWxkID4gdGhpcy5tYXhTaGllbGQpXG4gICAgICB0aGlzLmN1cnJlbnRTaGllbGQgPSB0aGlzLm1heFNoaWVsZDtcbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVPbkxvYWQoXG4gICAgICB0aGlzLmN1cnJlbnRIcCxcbiAgICAgIHRoaXMubWF4SHAsXG4gICAgICB0aGlzLmN1cnJlbnRTaGllbGQsXG4gICAgICB0aGlzLm1heFNoaWVsZFxuICAgICk7XG4gIH1cbiAgaGVhbChoZWFsQW1vdW50OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SHAgPD0gMCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRIcCA9PSB0aGlzLm1heEhwKSByZXR1cm47XG4gICAgdGhpcy5jdXJyZW50SHAgKz1cbiAgICAgIGhlYWxBbW91bnQgKyAoaGVhbEFtb3VudCAvIDEwMCkgKiB0aGlzLm92ZXJhbGxTdGF0LmdldEJvbnVzSGVhbGluZ1JhdGUoKTtcbiAgICBpZiAodGhpcy5jdXJyZW50SHAgPiB0aGlzLm1heEhwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRIcCA9IHRoaXMubWF4SHA7XG4gICAgfVxuICAgIEhlYWx0aEFuZFNoaWVsZC5pbnN0YW5jZS5zZXRTdGF0ZUhQKE1hdGguY2VpbCh0aGlzLmN1cnJlbnRIcCksIHRoaXMubWF4SHApO1xuICAgIGlmIChVdGlscy5nZXRMb2NhbChcIlNvdW5kXCIpID09IFwidHJ1ZVwiKVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmhlYWxTb3VuZCwgZmFsc2UsIDEpO1xuICB9XG4gIHJlZ2VuSFAoaGVhbEFtb3VudDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEhwIDw9IDApIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50SHAgPT0gdGhpcy5tYXhIcCkgcmV0dXJuO1xuICAgIHRoaXMuY3VycmVudEhwICs9XG4gICAgICBoZWFsQW1vdW50ICsgKGhlYWxBbW91bnQgLyAxMDApICogdGhpcy5vdmVyYWxsU3RhdC5nZXRCb251c0hlYWxpbmdSYXRlKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudEhwID4gdGhpcy5tYXhIcCkge1xuICAgICAgdGhpcy5jdXJyZW50SHAgPSB0aGlzLm1heEhwO1xuICAgIH1cbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVPbkxvYWQoXG4gICAgICBNYXRoLmNlaWwodGhpcy5jdXJyZW50SHApLFxuICAgICAgdGhpcy5tYXhIcCxcbiAgICAgIHRoaXMuY3VycmVudFNoaWVsZCxcbiAgICAgIHRoaXMubWF4U2hpZWxkXG4gICAgKTtcbiAgfVxuICBoZWFsQnlQZXJjZW50YWdlKGhlYWxQZXJjZW50YWdlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SHAgPD0gMCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmN1cnJlbnRIcCA9PSB0aGlzLm1heEhwKSByZXR1cm47XG4gICAgdGhpcy5jdXJyZW50SHAgKz1cbiAgICAgICh0aGlzLm1heEhwIC8gMTAwKSAqXG4gICAgICAoaGVhbFBlcmNlbnRhZ2UgK1xuICAgICAgICAoaGVhbFBlcmNlbnRhZ2UgLyAxMDApICogdGhpcy5vdmVyYWxsU3RhdC5nZXRCb251c0hlYWxpbmdSYXRlKCkpO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudEhwID4gdGhpcy5tYXhIcCkge1xuICAgICAgdGhpcy5jdXJyZW50SHAgPSB0aGlzLm1heEhwO1xuICAgIH1cbiAgICBIZWFsdGhBbmRTaGllbGQuaW5zdGFuY2Uuc2V0U3RhdGVIUChNYXRoLmNlaWwodGhpcy5jdXJyZW50SHApLCB0aGlzLm1heEhwKTtcbiAgICBpZiAoVXRpbHMuZ2V0TG9jYWwoXCJTb3VuZFwiKSA9PSBcInRydWVcIilcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5oZWFsU291bmQsIGZhbHNlLCAxKTtcbiAgfVxuICBydW5BbmltYXRpb24oKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLmFuaW1MaXN0WzFdLm5hbWUpLmlzUGxheWluZyAmJlxuICAgICAgdGhpcy5pc01vdmluZyA9PSB0cnVlXG4gICAgKSB7XG4gICAgICB0aGlzLmFuaW0ucGxheSh0aGlzLmFuaW1MaXN0WzFdLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLmlzTW92aW5nID09IGZhbHNlICYmXG4gICAgICAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuYW5pbUxpc3RbMF0ubmFtZSkuaXNQbGF5aW5nXG4gICAgKSB7XG4gICAgICB0aGlzLmFuaW0ucGxheSh0aGlzLmFuaW1MaXN0WzBdLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVdGlscy5pc1BhdXNlKSB7XG4gICAgICB0aGlzLmFuaW0ucGF1c2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hbmltLnJlc3VtZSgpO1xuICAgIHRoaXMuZGVsdGFUaW1lID0gZHQ7XG4gICAgdGhpcy5pRnJhbWV0aW1lciAtPSBkdDtcbiAgICBpZiAodGhpcy5pRnJhbWV0aW1lciA8IDApIHtcbiAgICAgIHRoaXMuZW5hYmxlSWZyYW1lID0gZmFsc2U7XG4gICAgICB0aGlzLmlzSUZyYW1lID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucnVuQW5pbWF0aW9uKCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
