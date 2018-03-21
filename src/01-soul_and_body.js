// *****************************************
// ******** JAVASCRIPT SOUL && BODY ********

// THE LANGUAGE THAT NO ONE LEARN
// begin with some web project, whitout any training
// use fwk/libs with getstarted tuto, c/p a lot of stuff, relay on stackoverflow
// instant punishment: weird, unknown, blocking errors...
// then misunderstanding leads to hate & language blaming
// paradox: it's a language that assumes you are smart and you'll learn it
// @see https://github.com/denysdovhan/wtfjs

(() => {
  var value = (function*() {
    let i = 0;
    while (true) {
      yield ++i;
    }
  })();
  Object.defineProperty(global || window, 'x', {
    get() {
      return value.next().value;
    }
  });
})();

var a = typeof null === 'object',
  b = new Boolean(false), // bad use of constructor
  c = NaN !== NaN, // simple logic
  d = [] + [] === '', // coercion
  e = 0.1 + 0.2 !== 0.3, // @see http://0.30000000000000004.com/
  f = x === 1 && x === 2 && x === 3; // generators
if (a && b && c && d && e && f) {
  console.log('JavaScript seems so fucked up');
}

// A BRIEF HISTORY OF JAVASCRIPT
// created in 1995 par Brendan Eich, a huge fan of Scheme
// a language in Mozilla Netscape Navigator to do calculation in an HTML tag
// need to conform to Java syntax, that already have applets
// written in 10 days, as an experimentation
// so much speed than old applets and they virtual machine...
// but IE has it own JScript (retro-engieneering) ang browse war begin
// Peace is asked to Ecma International

// EUROPEAN COMPUTER MANUFACTURERS ASSOCIATION & TECHNICAL COMITTEE 39
// @see https://github.com/tc39
// 1997: ECMA-262 norm begin with ES1
// 1998: ES2 - only conformity and implementation recommandation
// 1999: ES3 - baseline for modern JS: syntax, regexp, errors, coercion rules...
// ES4 try to replace prototype by class: big fail
// 2009: ES5 - clarify runtime behavior, add JSON, add "use strict"
// add real life useful methods: reduce, map, filter, find...
// ES TC39 new feature process begin (@see https://github.com/tc39/proposals)
// always need an E5 polyfill
// June 2015: ES6/ES2015: a language reform begin for multiple years
// maps, sets, proxy, promise, iterators, generators, ..., =>, import, class...
// June 2016: ES7/2016: Array includes, clarify ES6, add some operators
// June 2017: await/async
// June 2018 ? Observable ? Decorators ? Wait and see.

// JAVASCRIPT PHILOSOPHERS
// Existence comes before being; J.P. Sartre
// Mix Scheme, Java && C syntax and behaviors
// intrepreted script (for HTTP purpose) vs compiled executable
// without try / catch madness (aka coercion)
// without class requirement (acomposition vs inheritance, "Prototype oriented")
// with manual type management
// withou manual memory mamangement
// Everything is possible with JS, Everithing !
// a lot of implicit that can becomes explicit
// a lot of literal than can becomes constructed

// JAVASCRIPT IN NUMBERS
// Javascript Everywhere (front, back, hybrid, OS, PDF, exe, office, games...)
// most used in the world
// https://stackify.com/wp-content/uploads/2017/12/Most-pull-requests-1.png
// Node + NPM @see http://www.modulecounts.com/
// winners: React + Vue + Angular
// https://stateofjs.com/2017/front-end/results
// losers: Backbone, Ember, Aurelia, AngularJS, Knockout
// forgotten: Jquery (in 75% of existing websites !), Dojo
// redux, moment, lodash, rambda, polymer, webpack, meteor
// Names: Douglas Crockford VS Kyle Simpson (+ David Flanagan)

// HOW JAVASCRIPT WORK
// HTTP textual ressource (aka script), inline or as file
// few syntax, and a global object/scope (aka hoisting)
// tag <script> by tag <script>,  (if error, next script / next file)
// when code parsed & executed
// function by function, scope by scope, a short compilation process
// after callstack, the event loop
// @see http://latentflip.com/loupe
// everything in a tree

var launchMsg = 'Game begin';
var contents = [
  { q: 'How many planets are in our solar system?', a: 8 },
  { q: 'What is the Earth-Moon distance in km?', a: 384400 }
];

function launchQuizz () {
  console.log(launchMsg);
  var content = getRandomInArray(contents);
  var answer = prompt(content.q);
  alert(parseInt(answer, 10) === content.a ? 'Bravo !' : 'Wrong.');
}

// launchQuizz();

function getRandomInArray (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// JAVASCRIPT FEW SYNTAX POETRY (by art4theSould)
/*
Let this long package float,
Goto private class if short.
While protected with debugger case,
Continue volatile interface.
Instanceof super synchronized throw,
Extends final export throws.

Try import double enum?
- False, boolean, abstract function,
Implements typeof transient break!
Void static, default do,
Switch int native new.
Else, delete null public var
In return for const, true, char
…Finally catch byte.
*/

// THE (BROWSER) WINDOW TOOLBOX
// console, alert, document
// window itself, type boxes, object contructors, etc.
// almost everything can change
// but it's really not recommanded
console.log(window);
player1 = 'Captain Shepard';

// PRIMITIVE TYPES
// primitive types and their boxing behavior (ex: String().upperCase());
var empty = [undefined, null];
var primitives = ['Quelle est la taille du rayon de la terre', 6371, true];
console.log(empty.concat(primitives).map(type => typeof type).join(','));
console.log('test'.toUpperCase(), (6371).toFixed(2), true.toString());

// untyped/weakly typed language ? dynamically typed !
var anything = 'Quel... ?'; // VS var string: String = new String("string");
anything = 42; // container goes left, type goes right (inverse static type)

// copying values
var nbPlayers = 2;
var nbOriginalPlayers = nbPlayers;
a = 5;
console.log(a, b);

// OBJECT TYPE
var playerInfos = { nb: 2 };
var playerScores = [12, 15, 20, 4];
var playNow = function playNow () {
  console.log('let\'s play.');
};
playNow.score = 0;
console.log(playerInfos.toString(), playerScores.toString(), playNow.toString());
console.log(typeof playerInfos, playerScores);

var currentPlayerInfos = playerInfos;
currentPlayerInfos.nb = 5;
console.log(playerInfos);
playerInfos = null;
console.log(currentPlayerInfos);

// MUTABILITY, IMMUTABILITY
var quizzResults = [];
var quizzResultsRef = quizzResults;
quizzResults.push(1); // mutated
console.log(quizzResults, quizzResultsRef);
quizzResults = [1]; // replaced
console.log(quizzResults, quizzResultsRef); // still exists, until no ref !


// Built-in object constructors, with usefull static methods
// String, Number, Boolean (box, new forbidden !)
// Object, Array, Function (new possible, but prefer literals)
// Date, RegExp
// Error (TypeError, ReferenceError, )

// SCOPE
// function is the only scope
// interpreter/compiler & runtime + LHS/RHS
// undefined vs undeclared + ReferenceError
var game = 'quizz';
function play () {
  var joueur1 = 'Loïc';
  console.log(game, joueur1);
  function displayScore () {
    var score = 42;
    console.log(game, joueur1, score);
    function forceError () {
      throw new Error('Error with a beautiful callstack');
    }
    // forceError();
  }
  displayScore();
  // console.log(score);
}
play();
// var joueur1
// console.log(joueur1);
// var joueur1;

// falsy vs truthy values
var falsy = [undefined, null, false, 0, NaN, '']; // that's all folks !
if (undefined || null || false || 0 || NaN || '') {
  console.log('I don\'t exist :(');
}
// @see https://dorey.github.io/JavaScript-Equality-Table/

// COERCION && EQUALITY
// == allow coercion (<= & >= too...)
// === disallow coercion
// R1: If operands have differentype, operators aplly ToNumber
// E1: Logical operators apply ToBolean
// E2: == and + apply ToPrimitive on objects
// E3: If one of the operands is a string, + operator apply ToString
// @see https://codeburst.io/one-rule-and-three-exceptions-to-understand-javascript-coercion-35289365c449
// || and && returns values !
// A && B returns the value A if A can be coerced into false; otherwise, it returns B.
// A || B returns the value A if A can be coerced into true; otherwise, it returns B.
console.log('' && 'win');
console.log('win' || 'fail');

// USE STRICT, EVAL && WITH
// "use string": at the beginning of a script or a function, to secure JS
// eval: dangerous and slow
eval('var player2 = "Mario"; console.log(player2);');
// with: obsolete
var player3 = {
  name: 'Luigi',
  age: 41
};
with (player3) {
  console.log(name);
}

// QUIZZ :
// What is the global object in browser?
// What is the scope of a variable declared with "var"?
// Can use a function before declare it?
// Why we use rarely '=='?
// what will return console.log(typeof []);
// new String('test'); <-- do you recommand this approach?
// in JavaScript, is this a possible case where (a === 2 && === 4) is true ?
