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
})({"js.dad89719.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* online web landing - 1.0.0 */
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
    var e = l(require("./vars"));
    function l(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var o = function o() {
      var l,
        o = null === (l = document) || void 0 === l ? void 0 : l.querySelectorAll(".fixed-block"),
        t = window.scrollY,
        d = "".concat(window.innerWidth - e.default.bodyEl.offsetWidth, "px");
      e.default.htmlEl.style.scrollBehavior = "none", o.forEach(function (e) {
        e.style.paddingRight = d;
      }), e.default.bodyEl.classList.add("dis-scroll"), e.default.bodyEl.dataset.position = t, e.default.bodyEl.style.top = "-".concat(t, "px");
    };
    exports.disableScroll = o;
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
  "FheM": [function (require, module, exports) {
    var t = null;
    function e() {
      return t || (t = n()), t;
    }
    function n() {
      try {
        throw new Error();
      } catch (e) {
        var t = ("" + e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
        if (t) return r(t[0]);
      }
      return "/";
    }
    function r(t) {
      return ("" + t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, "$1") + "/";
    }
    exports.getBundleURL = e, exports.getBaseURL = r;
  }, {}],
  "TUK3": [function (require, module, exports) {
    var r = require("./bundle-url").getBundleURL;
    function e(r) {
      Array.isArray(r) || (r = [r]);
      var e = r[r.length - 1];
      try {
        return Promise.resolve(require(e));
      } catch (n) {
        if ("MODULE_NOT_FOUND" === n.code) return new s(function (n, i) {
          t(r.slice(0, -1)).then(function () {
            return require(e);
          }).then(n, i);
        });
        throw n;
      }
    }
    function t(r) {
      return Promise.all(r.map(u));
    }
    var n = {};
    function i(r, e) {
      n[r] = e;
    }
    module.exports = exports = e, exports.load = t, exports.register = i;
    var o = {};
    function u(e) {
      var t;
      if (Array.isArray(e) && (t = e[1], e = e[0]), o[e]) return o[e];
      var i = (e.substring(e.lastIndexOf(".") + 1, e.length) || e).toLowerCase(),
        u = n[i];
      return u ? o[e] = u(r() + e).then(function (r) {
        return r && module.bundle.register(t, r), r;
      }).catch(function (r) {
        throw delete o[e], r;
      }) : void 0;
    }
    function s(r) {
      this.executor = r, this.promise = null;
    }
    s.prototype.then = function (r, e) {
      return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.then(r, e);
    }, s.prototype.catch = function (r) {
      return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.catch(r);
    };
  }, {
    "./bundle-url": "FheM"
  }],
  "jnKH": [function (require, module, exports) {
    function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(e);
    }
    function e() {
      "use strict";

      e = function e() {
        return r;
      };
      var r = {},
        n = Object.prototype,
        o = n.hasOwnProperty,
        i = Object.defineProperty || function (t, e, r) {
          t[e] = r.value;
        },
        a = "function" == typeof Symbol ? Symbol : {},
        c = a.iterator || "@@iterator",
        u = a.asyncIterator || "@@asyncIterator",
        s = a.toStringTag || "@@toStringTag";
      function l(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), t[e];
      }
      try {
        l({}, "");
      } catch (P) {
        l = function l(t, e, r) {
          return t[e] = r;
        };
      }
      function f(t, e, r, n) {
        var o = e && e.prototype instanceof d ? e : d,
          a = Object.create(o.prototype),
          c = new S(n || []);
        return i(a, "_invoke", {
          value: E(t, r, c)
        }), a;
      }
      function h(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (P) {
          return {
            type: "throw",
            arg: P
          };
        }
      }
      r.wrap = f;
      var p = {};
      function d() {}
      function v() {}
      function y() {}
      var m = {};
      l(m, c, function () {
        return this;
      });
      var g = Object.getPrototypeOf,
        w = g && g(g(k([])));
      w && w !== n && o.call(w, c) && (m = w);
      var b = y.prototype = d.prototype = Object.create(m);
      function x(t) {
        ["next", "throw", "return"].forEach(function (e) {
          l(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function L(e, r) {
        var n;
        i(this, "_invoke", {
          value: function value(i, a) {
            function c() {
              return new r(function (n, c) {
                !function n(i, a, c, u) {
                  var s = h(e[i], e, a);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      f = l.value;
                    return f && "object" == t(f) && o.call(f, "__await") ? r.resolve(f.__await).then(function (t) {
                      n("next", t, c, u);
                    }, function (t) {
                      n("throw", t, c, u);
                    }) : r.resolve(f).then(function (t) {
                      l.value = t, c(l);
                    }, function (t) {
                      return n("throw", t, c, u);
                    });
                  }
                  u(s.arg);
                }(i, a, n, c);
              });
            }
            return n = n ? n.then(c, c) : c();
          }
        });
      }
      function E(t, e, r) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n) throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return N();
          }
          for (r.method = o, r.arg = i;;) {
            var a = r.delegate;
            if (a) {
              var c = j(a, r);
              if (c) {
                if (c === p) continue;
                return c;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw n = "completed", r.arg;
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var u = h(t, e, r);
            if ("normal" === u.type) {
              if (n = r.done ? "completed" : "suspendedYield", u.arg === p) continue;
              return {
                value: u.arg,
                done: r.done
              };
            }
            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg);
          }
        };
      }
      function j(t, e) {
        var r = e.method,
          n = t.iterator[r];
        if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, j(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), p;
        var o = h(n, t.iterator, e.arg);
        if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, p;
        var i = o.arg;
        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, p) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p);
      }
      function _(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }
      function O(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }
      function S(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(_, this), this.reset(!0);
      }
      function k(t) {
        if (t) {
          var e = t[c];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              n = function e() {
                for (; ++r < t.length;) if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                return e.value = void 0, e.done = !0, e;
              };
            return n.next = n;
          }
        }
        return {
          next: N
        };
      }
      function N() {
        return {
          value: void 0,
          done: !0
        };
      }
      return v.prototype = y, i(b, "constructor", {
        value: y,
        configurable: !0
      }), i(y, "constructor", {
        value: v,
        configurable: !0
      }), v.displayName = l(y, s, "GeneratorFunction"), r.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name));
      }, r.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, l(t, s, "GeneratorFunction")), t.prototype = Object.create(b), t;
      }, r.awrap = function (t) {
        return {
          __await: t
        };
      }, x(L.prototype), l(L.prototype, u, function () {
        return this;
      }), r.AsyncIterator = L, r.async = function (t, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new L(f(t, e, n, o), i);
        return r.isGeneratorFunction(e) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, x(b), l(b, s, "Generator"), l(b, c, function () {
        return this;
      }), l(b, "toString", function () {
        return "[object Generator]";
      }), r.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return r.reverse(), function t() {
          for (; r.length;) {
            var n = r.pop();
            if (n in e) return t.value = n, t.done = !1, t;
          }
          return t.done = !0, t;
        };
      }, r.values = k, S.prototype = {
        constructor: S,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t) for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
        },
        stop: function stop() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(t) {
          if (this.done) throw t;
          var e = this;
          function r(r, n) {
            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n;
          }
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n],
              a = i.completion;
            if ("root" === i.tryLoc) return r("end");
            if (i.tryLoc <= this.prev) {
              var c = o.call(i, "catchLoc"),
                u = o.call(i, "finallyLoc");
              if (c && u) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
              } else if (c) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
              } else {
                if (!u) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r];
            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
              var i = n;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a);
        },
        complete: function complete(t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p;
        },
        finish: function finish(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), p;
          }
        },
        catch: function _catch(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                O(r);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, e, r) {
          return this.delegate = {
            iterator: k(t),
            resultName: e,
            nextLoc: r
          }, "next" === this.method && (this.arg = void 0), p;
        }
      }, r;
    }
    function r(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (s) {
        return void r(s);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    function n(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, n);
          function c(t) {
            r(a, o, i, c, u, "next", t);
          }
          function u(t) {
            r(a, o, i, c, u, "throw", t);
          }
          c(void 0);
        });
      };
    }
    window.onload = function () {
      var t = document.querySelector("#interview");
      new IntersectionObserver(function (r, o) {
        r.forEach(function (r) {
          if (r.isIntersecting) {
            var i = document.createElement("link");
            i.type = "text/css", i.rel = "stylesheet", i.href = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css", document.getElementsByTagName("head")[0].appendChild(i);
            var a = document.createElement("script");
            a.src = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js", document.getElementsByTagName("head")[0].appendChild(a), a.onload = n(e().mark(function t() {
              return e().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, require("_bundle_loader")(require.resolve("./slider.js"));
                  case 2:
                    t.sent.swiper;
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), console.log("script worked"), o.unobserve(t);
          }
        });
      }, {
        rootMargin: "50px 0px 550px 0px",
        threshold: [0, .5, 1]
      }).observe(t);
    };
  }, {
    "_bundle_loader": "TUK3",
    "./slider.js": [["slider.d93aaa98.js", "t4Rl"], "slider.d93aaa98.js.map", "t4Rl"]
  }],
  "RKkx": [function (require, module, exports) {
    var define;
    var global = arguments[3];
    var e,
      t = arguments[3];
    !function (t, n) {
      "object" == _typeof(exports) && "undefined" != typeof module ? module.exports = n() : "function" == typeof e && e.amd ? e(n) : t.AOS = n();
    }(this, function () {
      "use strict";

      var e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
        n = "Expected a function",
        o = NaN,
        i = "[object Symbol]",
        a = /^\s+|\s+$/g,
        r = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        u = parseInt,
        d = "object" == _typeof(e) && e && e.Object === Object && e,
        l = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        f = d || l || Function("return this")(),
        m = Object.prototype.toString,
        p = Math.max,
        b = Math.min,
        v = function v() {
          return f.Date.now();
        };
      function g(e) {
        var t = _typeof(e);
        return !!e && ("object" == t || "function" == t);
      }
      function w(e) {
        if ("number" == typeof e) return e;
        if (function (e) {
          return "symbol" == _typeof(e) || function (e) {
            return !!e && "object" == _typeof(e);
          }(e) && m.call(e) == i;
        }(e)) return o;
        if (g(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = g(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(a, "");
        var n = c.test(e);
        return n || s.test(e) ? u(e.slice(2), n ? 2 : 8) : r.test(e) ? o : +e;
      }
      var y = function y(e, t, o) {
          var i = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(n);
          return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), function (e, t, o) {
            var i,
              a,
              r,
              c,
              s,
              u,
              d = 0,
              l = !1,
              f = !1,
              m = !0;
            if ("function" != typeof e) throw new TypeError(n);
            function y(t) {
              var n = i,
                o = a;
              return i = a = void 0, d = t, c = e.apply(o, n);
            }
            function h(e) {
              var n = e - u;
              return void 0 === u || n >= t || n < 0 || f && e - d >= r;
            }
            function k() {
              var e = v();
              if (h(e)) return x(e);
              s = setTimeout(k, function (e) {
                var n = t - (e - u);
                return f ? b(n, r - (e - d)) : n;
              }(e));
            }
            function x(e) {
              return s = void 0, m && i ? y(e) : (i = a = void 0, c);
            }
            function O() {
              var e = v(),
                n = h(e);
              if (i = arguments, a = this, u = e, n) {
                if (void 0 === s) return function (e) {
                  return d = e, s = setTimeout(k, t), l ? y(e) : c;
                }(u);
                if (f) return s = setTimeout(k, t), y(u);
              }
              return void 0 === s && (s = setTimeout(k, t)), c;
            }
            return t = w(t) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? p(w(o.maxWait) || 0, t) : r, m = "trailing" in o ? !!o.trailing : m), O.cancel = function () {
              void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
            }, O.flush = function () {
              return void 0 === s ? c : x(v());
            }, O;
          }(e, t, {
            leading: i,
            maxWait: t,
            trailing: a
          });
        },
        h = NaN,
        k = "[object Symbol]",
        x = /^\s+|\s+$/g,
        O = /^[-+]0x[0-9a-f]+$/i,
        j = /^0b[01]+$/i,
        E = /^0o[0-7]+$/i,
        N = parseInt,
        z = "object" == _typeof(e) && e && e.Object === Object && e,
        C = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        A = z || C || Function("return this")(),
        q = Object.prototype.toString,
        L = Math.max,
        T = Math.min,
        M = function M() {
          return A.Date.now();
        };
      function S(e) {
        var t = _typeof(e);
        return !!e && ("object" == t || "function" == t);
      }
      function D(e) {
        if ("number" == typeof e) return e;
        if (function (e) {
          return "symbol" == _typeof(e) || function (e) {
            return !!e && "object" == _typeof(e);
          }(e) && q.call(e) == k;
        }(e)) return h;
        if (S(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = S(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(x, "");
        var n = j.test(e);
        return n || E.test(e) ? N(e.slice(2), n ? 2 : 8) : O.test(e) ? h : +e;
      }
      var H = function H(e, t, n) {
          var o,
            i,
            a,
            r,
            c,
            s,
            u = 0,
            d = !1,
            l = !1,
            f = !0;
          if ("function" != typeof e) throw new TypeError("Expected a function");
          function m(t) {
            var n = o,
              a = i;
            return o = i = void 0, u = t, r = e.apply(a, n);
          }
          function p(e) {
            var n = e - s;
            return void 0 === s || n >= t || n < 0 || l && e - u >= a;
          }
          function b() {
            var e = M();
            if (p(e)) return v(e);
            c = setTimeout(b, function (e) {
              var n = t - (e - s);
              return l ? T(n, a - (e - u)) : n;
            }(e));
          }
          function v(e) {
            return c = void 0, f && o ? m(e) : (o = i = void 0, r);
          }
          function g() {
            var e = M(),
              n = p(e);
            if (o = arguments, i = this, s = e, n) {
              if (void 0 === c) return function (e) {
                return u = e, c = setTimeout(b, t), d ? m(e) : r;
              }(s);
              if (l) return c = setTimeout(b, t), m(s);
            }
            return void 0 === c && (c = setTimeout(b, t)), r;
          }
          return t = D(t) || 0, S(n) && (d = !!n.leading, a = (l = "maxWait" in n) ? L(D(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f), g.cancel = function () {
            void 0 !== c && clearTimeout(c), u = 0, o = s = i = c = void 0;
          }, g.flush = function () {
            return void 0 === c ? r : v(M());
          }, g;
        },
        $ = function $() {};
      function W(e) {
        e && e.forEach(function (e) {
          var t = Array.prototype.slice.call(e.addedNodes),
            n = Array.prototype.slice.call(e.removedNodes);
          if (function e(t) {
            var n = void 0,
              o = void 0;
            for (n = 0; n < t.length; n += 1) {
              if ((o = t[n]).dataset && o.dataset.aos) return !0;
              if (o.children && e(o.children)) return !0;
            }
            return !1;
          }(t.concat(n))) return $();
        });
      }
      function P() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      var Y = function Y() {
          return !!P();
        },
        _ = function _(e, t) {
          var n = window.document,
            o = new (P())(W);
          $ = t, o.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0
          });
        },
        B = function B(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        F = function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        }(),
        I = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
        K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
      function R() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      var U = new (function () {
          function e() {
            B(this, e);
          }
          return F(e, [{
            key: "phone",
            value: function value() {
              var e = R();
              return !(!K.test(e) && !G.test(e.substr(0, 4)));
            }
          }, {
            key: "mobile",
            value: function value() {
              var e = R();
              return !(!J.test(e) && !Q.test(e.substr(0, 4)));
            }
          }, {
            key: "tablet",
            value: function value() {
              return this.mobile() && !this.phone();
            }
          }, {
            key: "ie11",
            value: function value() {
              return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
            }
          }]), e;
        }())(),
        V = function V(e, t) {
          var n = void 0;
          return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
            detail: t
          }) : n = new CustomEvent(e, {
            detail: t
          }), document.dispatchEvent(n);
        },
        X = function X(e) {
          return e.forEach(function (e, t) {
            return function (e, t) {
              var n = e.options,
                o = e.position,
                i = e.node,
                a = (e.data, function () {
                  e.animated && (function (e, t) {
                    t && t.forEach(function (t) {
                      return e.classList.remove(t);
                    });
                  }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !1);
                });
              n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function (e, t) {
                t && t.forEach(function (t) {
                  return e.classList.add(t);
                });
              }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !0) : e.animated && !n.once && a();
            }(e, window.pageYOffset);
          });
        },
        Z = function Z(e) {
          for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
          return {
            top: n,
            left: t
          };
        },
        ee = function ee(e, t, n) {
          var o = e.getAttribute("data-aos-" + t);
          if (void 0 !== o) {
            if ("true" === o) return !0;
            if ("false" === o) return !1;
          }
          return o || n;
        },
        te = function te() {
          var e = document.querySelectorAll("[data-aos]");
          return Array.prototype.map.call(e, function (e) {
            return {
              node: e
            };
          });
        },
        ne = [],
        oe = !1,
        ie = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          mirror: !1,
          anchorPlacement: "top-bottom",
          startEvent: "DOMContentLoaded",
          animatedClassName: "aos-animate",
          initClassName: "aos-init",
          useClassNames: !1,
          disableMutationObserver: !1,
          throttleDelay: 99,
          debounceDelay: 50
        },
        ae = function ae() {
          return document.all && !window.atob;
        },
        re = function re() {
          var e, t;
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (oe = !0), oe && (t = ie, (e = ne).forEach(function (e, n) {
            var o = ee(e.node, "mirror", t.mirror),
              i = ee(e.node, "once", t.once),
              a = ee(e.node, "id"),
              r = t.useClassNames && e.node.getAttribute("data-aos"),
              c = [t.animatedClassName].concat(r ? r.split(" ") : []).filter(function (e) {
                return "string" == typeof e;
              });
            t.initClassName && e.node.classList.add(t.initClassName), e.position = {
              in: function (e, t, n) {
                var o = window.innerHeight,
                  i = ee(e, "anchor"),
                  a = ee(e, "anchor-placement"),
                  r = Number(ee(e, "offset", a ? 0 : t)),
                  c = a || n,
                  s = e;
                i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
                var u = Z(s).top - o;
                switch (c) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    u += s.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    u += s.offsetHeight;
                    break;
                  case "top-center":
                    u += o / 2;
                    break;
                  case "center-center":
                    u += o / 2 + s.offsetHeight / 2;
                    break;
                  case "bottom-center":
                    u += o / 2 + s.offsetHeight;
                    break;
                  case "top-top":
                    u += o;
                    break;
                  case "bottom-top":
                    u += o + s.offsetHeight;
                    break;
                  case "center-top":
                    u += o + s.offsetHeight / 2;
                }
                return u + r;
              }(e.node, t.offset, t.anchorPlacement),
              out: o && function (e, t) {
                window.innerHeight;
                var n = ee(e, "anchor"),
                  o = ee(e, "offset", t),
                  i = e;
                return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), Z(i).top + i.offsetHeight - o;
              }(e.node, t.offset)
            }, e.options = {
              once: i,
              mirror: o,
              animatedClassNames: c,
              id: a
            };
          }), X(ne = e), window.addEventListener("scroll", y(function () {
            X(ne, ie.once);
          }, ie.throttleDelay)));
        },
        ce = function ce() {
          if (ne = te(), ue(ie.disable) || ae()) return se();
          re();
        },
        se = function se() {
          ne.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), ie.initClassName && e.node.classList.remove(ie.initClassName), ie.animatedClassName && e.node.classList.remove(ie.animatedClassName);
          });
        },
        ue = function ue(e) {
          return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e();
        };
      return {
        init: function init(e) {
          return ie = I(ie, e), ne = te(), ie.disableMutationObserver || Y() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), ie.disableMutationObserver = !0), ie.disableMutationObserver || _("[data-aos]", ce), ue(ie.disable) || ae() ? se() : (document.querySelector("body").setAttribute("data-aos-easing", ie.easing), document.querySelector("body").setAttribute("data-aos-duration", ie.duration), document.querySelector("body").setAttribute("data-aos-delay", ie.delay), -1 === ["DOMContentLoaded", "load"].indexOf(ie.startEvent) ? document.addEventListener(ie.startEvent, function () {
            re(!0);
          }) : window.addEventListener("load", function () {
            re(!0);
          }), "DOMContentLoaded" === ie.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && re(!0), window.addEventListener("resize", H(re, ie.debounceDelay, !0)), window.addEventListener("orientationchange", H(re, ie.debounceDelay, !0)), ne);
        },
        refresh: re,
        refreshHard: ce
      };
    });
  }, {}],
  "cOFZ": [function (require, module, exports) {}, {}],
  "CXOJ": [function (require, module, exports) {
    "use strict";

    var e = a(require("aos"));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    require("aos/dist/aos.css"), e.default.init({
      disable: !1,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: !1,
      disableMutationObserver: !1,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: !1,
      mirror: !1,
      anchorPlacement: "top-bottom"
    }), console.log("aos init");
  }, {
    "aos": "RKkx",
    "aos/dist/aos.css": "cOFZ"
  }],
  "RDxu": [function (require, module, exports) {
    "use strict";

    require("./components/burger"), require("./components/observ"), require("./components/anim");
  }, {
    "./components/burger": "nzug",
    "./components/observ": "jnKH",
    "./components/anim": "CXOJ"
  }],
  "QvaY": [function (require, module, exports) {
    "use strict";

    require("./_components"), window.addEventListener("pageshow", function (e) {
      e.persisted ? console.log("Эта страница восстановлена ​​из BFcache.") : console.log("Эта страница загрузилась по запросу.");
    });
  }, {
    "./_components": "RDxu"
  }],
  "Yi9z": [function (require, module, exports) {
    module.exports = function (n) {
      return new Promise(function (e, o) {
        var r = document.createElement("script");
        r.async = !0, r.type = "text/javascript", r.charset = "utf-8", r.src = n, r.onerror = function (n) {
          r.onerror = r.onload = null, o(n);
        }, r.onload = function () {
          r.onerror = r.onload = null, e();
        }, document.getElementsByTagName("head")[0].appendChild(r);
      });
    };
  }, {}],
  0: [function (require, module, exports) {
    var b = require("TUK3");
    b.register("js", require("Yi9z"));
  }, {}]
}, {}, [0, "QvaY"], null);

// The End.
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53832" + '/');
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js.dad89719.js"], null)
//# sourceMappingURL=/js.dad89719.c554a944.js.map