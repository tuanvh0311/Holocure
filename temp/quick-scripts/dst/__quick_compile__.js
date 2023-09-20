
(function () {
var scripts = [{"deps":{"./assets/Script/Weapon/Melee":1,"./assets/Script/SlerpTest":2,"./assets/Script/Weapon/Bow":3,"./assets/Script/Weapon/MollyThrower":4,"./assets/Script/Weapon/OrbitProjectile":5,"./assets/Script/Weapon/Projectile":6,"./assets/Script/Weapon/SpiderCooking":7,"./assets/Script/Weapon/ShurikenThrower":8,"./assets/Script/Weapon/SpiralProjectile":9,"./assets/Script/Weapon/Sword":10,"./assets/Script/Weapon/StartWeapon":11,"./assets/Script/Weapon/ThrowableProjectile":12,"./assets/Script/Weapon/Trident":13,"./assets/Script/Weapon/Weapon":14,"./assets/Script/TerrainTile":15,"./assets/Script/Weapon/AxeThrower":16,"./assets/Script/Controller/GameController":17,"./assets/Script/Item/BloodyTear":18,"./assets/Script/Enemy/EnemyController":19,"./assets/Script/Manager/Level":20,"./assets/Script/Menu/Button":21,"./assets/Script/Other Object/DeathHeart":22,"./assets/Script/Player/HealthAndShield":23,"./assets/Script/Controller/Movement":24,"./assets/Script/Controller/OptionTest":25,"./assets/Script/Controller/MenuController":26,"./assets/Script/Controller/SlotController":27,"./assets/Script/Controller/Utils":28,"./assets/Script/Controller/CameraController":29,"./assets/Script/Controller/WorldScrolling":30,"./assets/Script/Controller/UIController":31,"./assets/Script/Controller/OptionGenerator":32,"./assets/Script/Item/Dumbbell":33,"./assets/Script/Item/EyePatch":34,"./assets/Script/Enemy/EnemyManager":35,"./assets/Script/Item/GrowthPill":36,"./assets/Script/Item/MightyStone":37,"./assets/Script/Item/HastePotion":38,"./assets/Script/Item/Item":39,"./assets/Script/Item/KnightyMilk":40,"./assets/Script/Manager/ObjectPooling":41,"./assets/Script/Item/BaneOfRegeneration":42,"./assets/Script/Manager/ProjectilePooling":43,"./assets/Script/Item/Shield":44,"./assets/Script/Item/WisdomStone":45,"./assets/Script/Menu/Sound":46,"./assets/Script/Menu/BarslideEffect":47,"./assets/Script/Other Object/DestroyableObject":48,"./assets/Script/Other Object/Food":49,"./assets/Script/Other Object/Experience":50,"./assets/Script/Other Object/Pickup":51,"./assets/Script/Other Object/Magnet":52,"./assets/Script/Other Object/Coin":53,"./assets/Script/Player/OverallStats":54,"./assets/Script/Player/EnemyDetector":55,"./assets/Script/Player/PlayerController":56},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../Enemy/EnemyController":19},"path":"preview-scripts/assets/Script/Weapon/Melee.js"},{"deps":{},"path":"preview-scripts/assets/Script/SlerpTest.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Manager/ProjectilePooling":43,"../Player/EnemyDetector":55,"./Projectile":6,"./Weapon":14},"path":"preview-scripts/assets/Script/Weapon/Bow.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Manager/ProjectilePooling":43,"./ThrowableProjectile":12,"./Weapon":14},"path":"preview-scripts/assets/Script/Weapon/MollyThrower.js"},{"deps":{"../Controller/Utils":28,"../Enemy/EnemyController":19,"../Manager/ProjectilePooling":43,"./Projectile":6,"./ShurikenThrower":8},"path":"preview-scripts/assets/Script/Weapon/OrbitProjectile.js"},{"deps":{"../Controller/Movement":24,"../Controller/Utils":28,"../Enemy/EnemyController":19,"../Manager/ProjectilePooling":43},"path":"preview-scripts/assets/Script/Weapon/Projectile.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Enemy/EnemyController":19,"./Weapon":14},"path":"preview-scripts/assets/Script/Weapon/SpiderCooking.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Manager/ProjectilePooling":43,"./OrbitProjectile":5,"./Weapon":14},"path":"preview-scripts/assets/Script/Weapon/ShurikenThrower.js"},{"deps":{"../Controller/Utils":28,"../Manager/ProjectilePooling":43,"../Weapon/Projectile":6},"path":"preview-scripts/assets/Script/Weapon/SpiralProjectile.js"},{"deps":{"../Controller/GameController":17,"../Controller/Movement":24,"../Controller/Utils":28,"./Melee":1,"./StartWeapon":11},"path":"preview-scripts/assets/Script/Weapon/Sword.js"},{"deps":{"../Player/OverallStats":54},"path":"preview-scripts/assets/Script/Weapon/StartWeapon.js"},{"deps":{"../Controller/Utils":28,"../Enemy/EnemyController":19,"../Manager/ProjectilePooling":43},"path":"preview-scripts/assets/Script/Weapon/ThrowableProjectile.js"},{"deps":{"../Controller/GameController":17,"../Controller/Movement":24,"../Controller/Utils":28,"./Melee":1,"./StartWeapon":11},"path":"preview-scripts/assets/Script/Weapon/Trident.js"},{"deps":{"../Controller/GameController":17,"../Player/OverallStats":54},"path":"preview-scripts/assets/Script/Weapon/Weapon.js"},{"deps":{},"path":"preview-scripts/assets/Script/TerrainTile.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Manager/ProjectilePooling":43,"./SpiralProjectile":9,"./Weapon":14},"path":"preview-scripts/assets/Script/Weapon/AxeThrower.js"},{"deps":{"./SlotController":27,"./UIController":31,"./Utils":28},"path":"preview-scripts/assets/Script/Controller/GameController.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Player/PlayerController":56,"./Item":39},"path":"preview-scripts/assets/Script/Item/BloodyTear.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Manager/ObjectPooling":41,"../Player/OverallStats":54,"../Player/PlayerController":56,"./EnemyManager":35},"path":"preview-scripts/assets/Script/Enemy/EnemyController.js"},{"deps":{"../Controller/GameController":17,"../Controller/UIController":31,"../Controller/Utils":28,"../Player/OverallStats":54},"path":"preview-scripts/assets/Script/Manager/Level.js"},{"deps":{"../Controller/Utils":28},"path":"preview-scripts/assets/Script/Menu/Button.js"},{"deps":{},"path":"preview-scripts/assets/Script/Other Object/DeathHeart.js"},{"deps":{},"path":"preview-scripts/assets/Script/Player/HealthAndShield.js"},{"deps":{"../Player/PlayerController":56,"./GameController":17,"./Utils":28},"path":"preview-scripts/assets/Script/Controller/Movement.js"},{"deps":{},"path":"preview-scripts/assets/Script/Controller/OptionTest.js"},{"deps":{"./Utils":28},"path":"preview-scripts/assets/Script/Controller/MenuController.js"},{"deps":{"./GameController":17},"path":"preview-scripts/assets/Script/Controller/SlotController.js"},{"deps":{},"path":"preview-scripts/assets/Script/Controller/Utils.js"},{"deps":{},"path":"preview-scripts/assets/Script/Controller/CameraController.js"},{"deps":{},"path":"preview-scripts/assets/Script/Controller/WorldScrolling.js"},{"deps":{"../Player/OverallStats":54,"../Player/PlayerController":56,"./GameController":17,"./OptionGenerator":32,"./SlotController":27,"./Utils":28},"path":"preview-scripts/assets/Script/Controller/UIController.js"},{"deps":{"../Player/OverallStats":54,"../Player/PlayerController":56,"./GameController":17,"./SlotController":27},"path":"preview-scripts/assets/Script/Controller/OptionGenerator.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Player/HealthAndShield":23,"../Player/PlayerController":56,"./Item":39},"path":"preview-scripts/assets/Script/Item/Dumbbell.js"},{"deps":{"../Controller/GameController":17,"../Controller/UIController":31,"../Controller/Utils":28,"./Item":39},"path":"preview-scripts/assets/Script/Item/EyePatch.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"./EnemyController":19},"path":"preview-scripts/assets/Script/Enemy/EnemyManager.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"./Item":39},"path":"preview-scripts/assets/Script/Item/GrowthPill.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"./Item":39},"path":"preview-scripts/assets/Script/Item/MightyStone.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"./Item":39},"path":"preview-scripts/assets/Script/Item/HastePotion.js"},{"deps":{"../Controller/GameController":17,"../Player/OverallStats":54},"path":"preview-scripts/assets/Script/Item/Item.js"},{"deps":{"./Item":39},"path":"preview-scripts/assets/Script/Item/KnightyMilk.js"},{"deps":{"../Other Object/Coin":53,"../Other Object/Experience":50,"../Other Object/Pickup":51},"path":"preview-scripts/assets/Script/Manager/ObjectPooling.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Player/PlayerController":56,"./Item":39},"path":"preview-scripts/assets/Script/Item/BaneOfRegeneration.js"},{"deps":{},"path":"preview-scripts/assets/Script/Manager/ProjectilePooling.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Player/OverallStats":54,"../Player/PlayerController":56,"./Item":39},"path":"preview-scripts/assets/Script/Item/Shield.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"./Item":39},"path":"preview-scripts/assets/Script/Item/WisdomStone.js"},{"deps":{"../Controller/Utils":28},"path":"preview-scripts/assets/Script/Menu/Sound.js"},{"deps":{},"path":"preview-scripts/assets/Script/Menu/BarslideEffect.js"},{"deps":{"../Controller/Utils":28},"path":"preview-scripts/assets/Script/Other Object/DestroyableObject.js"},{"deps":{"../Manager/ObjectPooling":41,"../Player/PlayerController":56},"path":"preview-scripts/assets/Script/Other Object/Food.js"},{"deps":{"../Controller/Utils":28,"../Manager/Level":20,"../Manager/ObjectPooling":41},"path":"preview-scripts/assets/Script/Other Object/Experience.js"},{"deps":{"../Controller/Utils":28},"path":"preview-scripts/assets/Script/Other Object/Pickup.js"},{"deps":{"../Controller/Utils":28,"../Manager/ObjectPooling":41},"path":"preview-scripts/assets/Script/Other Object/Magnet.js"},{"deps":{"../Controller/GameController":17,"../Controller/Utils":28,"../Manager/ObjectPooling":41},"path":"preview-scripts/assets/Script/Other Object/Coin.js"},{"deps":{"../Controller/GameController":17,"../Controller/UIController":31,"../Weapon/Weapon":14,"./PlayerController":56},"path":"preview-scripts/assets/Script/Player/OverallStats.js"},{"deps":{"../Enemy/EnemyController":19},"path":"preview-scripts/assets/Script/Player/EnemyDetector.js"},{"deps":{"../Controller/GameController":17,"../Controller/UIController":31,"../Controller/Utils":28,"../Other Object/DeathHeart":22,"../Weapon/StartWeapon":11,"./HealthAndShield":23,"./OverallStats":54},"path":"preview-scripts/assets/Script/Player/PlayerController.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    