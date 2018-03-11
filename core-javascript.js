// ****************************************
// ****** FOREWORDS ABOUT JAVASCRIPT ******

// THE LANGUAGE THAT NO ONE LEARN
// begin with some web project, whitout any training
// use framwork/lib with getstarted tuto, c/p a lot of stuff, relay on stackoverflow
// then misunderstanding leads to hate & language blaming
var x = 1;
var a = x === 1 && x === 2 && x === 3,
  b = [] + [] === "",
  c = NaN !== NaN,
  d = typeof null === "object",
  e = new Boolean(false);
if (a && b && c && d && e) {
  console.log("JavaScript seems so fucked up");
}

// A BRIEF HISTORY OF JAVASCRIPT

// JAVASCRIPT PHILOSOPHERS
// Existence comes before being; J.P. Sartre
// Mix Java + C syntaxe and behaviors
// intrepreted script (for HTTP purpose) vs compiled executable
// without try / catch madness (aka coercion)
// without class requirement (aka composition vs inheritance)

// **************************************************
// ****** CREATE A MODULAR QUIZZ PROCESS IN JS ******

// TYPES
// primitive types and their boxing behavior

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

// use strict, eval & with

// eventloop

// The ES new feature process

// the big frameworks and library
