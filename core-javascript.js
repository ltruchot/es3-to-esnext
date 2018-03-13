// ****************************************
// ****** FOREWORDS ABOUT JAVASCRIPT ******

// THE LANGUAGE THAT NO ONE LEARN
// begin with some web project, whitout any training
// use framwork/lib with getstarted tuto, c/p a lot of stuff, relay on stackoverflow
// then misunderstanding leads to hate & language blaming
// @see https://github.com/denysdovhan/wtfjs

(() => {
  const value = function* () {
    let i = 0;
    while(true) yield ++i;
  }();
  Object.defineProperty(global || window, 'x', {
    get() {
      return value.next().value;
    }
  });
})();

var a = typeof null === "object",
  b = new Boolean(false), // bad use of constructor
  c = NaN !== NaN, // simple logic
  d = [] + [] === "" // coercion
  e = (0.1 + 0.2) !== 0.3 // @see http://0.30000000000000004.com/
  f = (x === 1 && x === 2 && x === 3); // generators
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
console.log(empty.concat(primitives).map(type => typeof type).join(','));
console.log( 'test'.toUpperCase() , (6371).toFixed(2), true.toString() ); 

// untyped/weakly typed language ? dynamically typed !
var anything = 'Quel... ?';// VS var string: String = new String('string');
anything = 42; // container goes left, type goes right (inverse static type)

// copying values
var nbPlayers = 2;
var nbOriginalPlayers = nbPlayers;
a = 5;
console.log(a, b)

// Object type
var playerInfos = { nb: 2 }
var playerScores = [12, 15, 20, 4];
console.log(playerInfos.toString(), playerScores.toString());
console.log(typeof playerInfos, playerScores)

var currentPlayerInfos = playerInfos;
currentPlayerInfos.nb = 5;
console.log(playerInfos);





// SCOPE
// function is the only scope
// interpreter/compiler & runtime + LHS/RHS
// undefined vs undeclared + ReferenceError

// CLOSURE
for (var timer = 1; timer <= 5; timer++) {
  setTimeout(function() {
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
