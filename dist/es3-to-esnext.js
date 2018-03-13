// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({5:[function(require,module,exports) {
var global = (1,eval)("this");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// ****************************************
// ****** FOREWORDS ABOUT JAVASCRIPT ******

// THE LANGUAGE THAT NO ONE LEARN
// begin with some web project, whitout any training
// use framwork/lib with getstarted tuto, c/p a lot of stuff, relay on stackoverflow
// then misunderstanding leads to hate & language blaming
// @see https://github.com/denysdovhan/wtfjs

(function () {
  var value = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!true) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return ++i;

          case 4:
            _context.next = 1;
            break;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })();
  Object.defineProperty(global || window, 'x', {
    get: function get() {
      return value.next().value;
    }
  });
})();

var a = _typeof(null) === "object",
    b = new Boolean(false),
    // bad use of constructor
c = NaN !== NaN,
    // simple logic
d = [] + [] === ""; // coercion
e = 0.1 + 0.2 !== 0.3; // @see http://0.30000000000000004.com/
f = x === 1 && x === 2 && x === 3; // generators
if (a && b && c && d && e && f) {
  console.log("JavaScript seems so fucked up");
}

// A BRIEF HISTORY OF JAVASCRIPT

// JAVASCRIPT PHILOSOPHERS
// Existence comes before being; J.P. Sartre
// Mix Java && C syntax and behaviors
// intrepreted script (for HTTP purpose) vs compiled executable
// without try / catch madness (aka coercion)
// without class requirement (aka composition vs inheritance, "Prototype oriented")

// **************************************************
// ****** CREATE A MODULAR QUIZZ PROCESS IN JS ******

// TYPES
// primitive types and their boxing behavior (ex: String().upperCase());
var empty = [undefined, null];
var primitives = ['Quelle est la taille du rayon de la terre', 6371, true];
console.log(empty.concat(primitives).map(function (type) {
  return typeof type === "undefined" ? "undefined" : _typeof(type);
}).join(','));
console.log('test'.toUpperCase(), 6371 .toFixed(2), true.toString());

// untyped/weakly typed language ? dynamically typed !
var anything = 'Quel... ?'; // VS var string: String = new String('string');
anything = 42; // container goes left, type goes right (inverse static type)

// copying values
var nbPlayers = 2;
var nbOriginalPlayers = nbPlayers;
a = 5;
console.log(a, b);

// Object type
var playerInfos = { nb: 2 };
var playerScores = [12, 15, 20, 4];
console.log(playerInfos.toString(), playerScores.toString());
console.log(typeof playerInfos === "undefined" ? "undefined" : _typeof(playerInfos), playerScores);

var currentPlayerInfos = playerInfos;
currentPlayerInfos.nb = 5;
console.log(playerInfos);

// SCOPE
// function is the only scope
// interpreter/compiler & runtime + LHS/RHS
// undefined vs undeclared + ReferenceError

// CLOSURE
for (var timer = 1; timer <= 5; timer++) {
  setTimeout(function () {
    console.log("Elapsed second: " + timer);
  }, 1000 * timer);
}

// falsy vs truthy values
var falsy = [undefined, null, false, 0, NaN, ""]; // that's all folks !

// coercion & equality
// == allow coercion 
// === disallow coercion

// use strict, eval & with

// eventloop

// The ES new feature process

// the big frameworks and library
},{}]},{},[5])
//# sourceMappingURL=/dist/es3-to-esnext.map