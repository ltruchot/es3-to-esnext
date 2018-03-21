// *****************************************
// ******** JAVASCRIPT SOUL && BODY ********

// THE LANGUAGE THAT NO ONE LEARN
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
  b = new Boolean(false),
  c = NaN !== NaN,
  d = [] + [] === '',
  e = 0.1 + 0.2 !== 0.3, // @see http://0.30000000000000004.com/
  f = x === 1 && x === 2 && x === 3; 
if (a && b && c && d && e && f) {
  console.log('JavaScript seems so f*** up');
}

// A BRIEF HISTORY OF JAVASCRIPT

// EUROPEAN COMPUTER MANUFACTURERS ASSOCIATION & TECHNICAL COMITTEE 39
// @see https://github.com/tc39
// @see https://github.com/tc39/proposals

// JAVASCRIPT PHILOSOPHERS


// JAVASCRIPT IN NUMBERS
// https://stackify.com/wp-content/uploads/2017/12/Most-pull-requests-1.png
//  http://www.modulecounts.com/
// https://stateofjs.com/2017/front-end/results

// HOW JAVASCRIPT WORK
// @see http://latentflip.com/loupe


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

launchQuizz();

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
// window.console.log = function () { console.error('haha je log plus rien'); };


// PRIMITIVE TYPES
var empty = [undefined, null];
var primitives = ['Quelle est la taille du rayon de la terre', 6371, true];
// console.log(empty.concat(primitives).map(type => typeof type).join(','));
console.log('test'.toUpperCase(), (6371).toFixed(2), true.toString());
var anything = 'Quel.. ?';
anything = 42;

var nbPlayers = 2;
var nbOrigPlayer = nbPlayers;
nbPlayers = 5;
// console.log(nbPlayers, nbOrigPlayer);

// OBJECT TYPE
var playerInfos = { nb: 2 };
var playerScores = [12, 15, 20, 4];
function playNow () {
  console.log('c\'est parti');
}
playNow.test = 2;

var currentPlayerInfos = playerInfos;
currentPlayerInfos.nb = 5;
playerInfos = null;
console.log(currentPlayerInfos, playerInfos);

// MUTABILITY, IMMUTABILITY
var quizzResults = [];
var quizzResultsRef = quizzResults;
quizzResults.push(1);
quizzResults = [2];
quizzResults = [2, 4];
console.log(quizzResults, quizzResultsRef);

var i = 1 + "toto";
"1toto";
// SCOPE
// var joueur1 = 'toto';
console.log(joueur1);
var joueur1 = 1;
// FALSY VS TRUTHY
// undefined, null, false, 0, NaN, '';
// @see https://dorey.github.io/JavaScript-Equality-Table/

// COERCION && EQUALITY
// R1: If operands have differentype, operators aplly ToNumber
// E1: Logical operators apply ToBolean
// E2: == and + apply ToPrimitive on objects
// E3: If one of the operands is a string, + operator apply ToString
// @see https://codeburst.io/one-rule-and-three-exceptions-to-understand-javascript-coercion-35289365c449

// USE STRICT, EVAL && WITH
// eval('var test = "you"; console.log(test);');
var player3 = {
  name: 'Luigi',
  age: 41
}
with (player3) {
  console.log(name, age);
}

// QUIZZ
