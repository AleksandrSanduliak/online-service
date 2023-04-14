// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js.15cb019b.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
parcelRequire = function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }
      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };
  for (var c = 0; c < t.length; c++) try {
    f(t[c]);
  } catch (e) {
    i || (i = e);
  }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }
  if (parcelRequire = f, i) throw i;
  return f;
}({
  "tnZC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      windowEl: window,
      documentEl: document,
      htmlEl: document.documentElement,
      bodyEl: document.body
    };
    exports.default = e;
  }, {}],
  "ISfh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.disableScroll = void 0;
    var l = e(require("./vars"));
    function e(l) {
      return l && l.__esModule ? l : {
        default: l
      };
    }
    var t = function t() {
      var e,
        t = null === (e = document) || void 0 === e ? void 0 : e.querySelectorAll(".fixed-block"),
        o = window.scrollY,
        d = "".concat(window.innerWidth - l.default.bodyEl.offsetWidth, "px");
      l.default.htmlEl.style.scrollBehavior = "none", t.forEach(function (l) {
        l.style.paddingRight = d;
      }), l.default.bodyEl.style.paddingRight = d, l.default.bodyEl.classList.add("dis-scroll"), l.default.bodyEl.dataset.position = o, l.default.bodyEl.style.top = "-".concat(o, "px");
    };
    exports.disableScroll = t;
  }, {
    "./vars": "tnZC"
  }],
  "CRgt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.enableScroll = void 0;
    var e = t(require("./vars"));
    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var l = function l() {
      var t,
        l = null === (t = document) || void 0 === t ? void 0 : t.querySelectorAll(".fixed-block"),
        o = (document.body, parseInt(e.default.bodyEl.dataset.position, 10));
      l.forEach(function (e) {
        e.style.paddingRight = "0px";
      }), e.default.bodyEl.style.paddingRight = "0px", e.default.bodyEl.style.top = "auto", e.default.bodyEl.classList.remove("dis-scroll"), window.scroll({
        top: o,
        left: 0
      }), e.default.bodyEl.removeAttribute("data-position"), e.default.htmlEl.style.scrollBehavior = "smooth";
    };
    exports.enableScroll = l;
  }, {
    "./vars": "tnZC"
  }],
  "nzug": [function (require, module, exports) {
    "use strict";

    var e = require("./disable-scroll"),
      l = require("./enable-scroll");
    !function () {
      var t,
        a,
        i,
        n,
        r,
        u = null === (t = document) || void 0 === t ? void 0 : t.querySelector("[data-burger]"),
        c = null === (a = document) || void 0 === a ? void 0 : a.querySelector("[data-menu]"),
        s = null === (i = document) || void 0 === i ? void 0 : i.querySelectorAll("[data-menu-item]"),
        o = null === (n = document) || void 0 === n ? void 0 : n.querySelector("[data-menu-overlay]"),
        d = null === (r = document) || void 0 === r ? void 0 : r.querySelector("[data-menu-close]");
      null == u || u.addEventListener("click", function (t) {
        null == u || u.classList.toggle("burger--active"), null == c || c.classList.toggle("menu--active"), null != c && c.classList.contains("menu--active") ? (null == u || u.setAttribute("aria-expanded", "true"), null == u || u.setAttribute("aria-label", "Закрыть меню"), (0, e.disableScroll)()) : (null == u || u.setAttribute("aria-expanded", "false"), null == u || u.setAttribute("aria-label", "Открыть меню"), (0, l.enableScroll)());
      }), null == d || d.addEventListener("click", function () {
        null == u || u.setAttribute("aria-expanded", "false"), null == u || u.setAttribute("aria-label", "Открыть меню"), u.classList.remove("burger--active"), c.classList.remove("menu--active"), (0, l.enableScroll)();
      }), null == o || o.addEventListener("click", function () {
        null == u || u.setAttribute("aria-expanded", "false"), null == u || u.setAttribute("aria-label", "Открыть меню"), u.classList.remove("burger--active"), c.classList.remove("menu--active"), (0, l.enableScroll)();
      }), null == s || s.forEach(function (e) {
        e.addEventListener("click", function () {
          null == u || u.setAttribute("aria-expanded", "false"), null == u || u.setAttribute("aria-label", "Открыть меню"), u.classList.remove("burger--active"), c.classList.remove("menu--active"), (0, l.enableScroll)();
        });
      });
    }();
  }, {
    "./disable-scroll": "ISfh",
    "./enable-scroll": "CRgt"
  }],
  "t4Rl": [function (require, module, exports) {
    "use strict";

    var e = new Swiper(".swiper", {
      slidesPerView: 3,
      direction: "horizontal",
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20
        },
        425: {
          slidesPerView: 1.7,
          spaceBetween: 20
        },
        555: {
          slidesPerView: 2.1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 20
        },
        1600: {
          slidesPerView: 3
        }
      }
    });
  }, {}],
  "RDxu": [function (require, module, exports) {
    "use strict";

    require("./components/burger"), require("./components/slider");
  }, {
    "./components/burger": "nzug",
    "./components/slider": "t4Rl"
  }],
  "QvaY": [function (require, module, exports) {
    "use strict";

    require("./_components");
  }, {
    "./_components": "RDxu"
  }]
}, {}, ["QvaY"], null);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60286" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js.15cb019b.js"], null)
//# sourceMappingURL=/js.15cb019b.d8cd260c.js.map