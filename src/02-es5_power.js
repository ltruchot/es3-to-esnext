
// OBJECT PARTICULARITY & METHODS
// [[GET]], [[PUT]], defineProperty, seal, freeze
var player1 = {
  name: 'Peach',
  score: 4
};
var player2 = new Object({
  name: 'Toad',
  score: 3,
  get color () {
    console.log('getted was call');
    return 'white & red';
  }
});
player2.age = 32;
player2.color = 'blue';
Object.defineProperty(player2, 'height', {
  value: '99cm',
  writable: false,
  configurable: true,
  enumerable: false
});
console.log(player2);
for (var key in player2) {
  console.log(player2[key]);
}
Object.seal(player1);
console.log(Object.getOwnPropertyDescriptor(player1, 'name'));
Object.freeze(player1);
console.log(Object.getOwnPropertyDescriptor(player1, 'name'));

// COPY AN OBJECT
// JSON.stringify to JSON.parse
// Object.assign()
var contents = {
  fr: [],
  en: []
};
contents.all = contents;
var contentsCopy = Object.assign({}, contents); // shallow copy
contents.fr.push('Quel est la taille du rayon de la terre ?');
console.log(contents);
// JSON.parse(JSON.stringify(contents));
console.log(contentsCopy);

// IIFE: Immediately Invoked Function Expression
// how to distinct a declared function and an executed function ? func();
var score = (function () {
  var calculatedScore = 5 - 2;
  console.log('score:', calculatedScore);
  return calculatedScore;
})();

// CLOSURE
for (var timer = 1; timer <= 5; timer++) {
  setTimeout(function() {
    // console.log('Elapsed second: ' + timer);
  }, 1000 * timer);
}

var wait = 2;
setTimeout(function() {
  console.log('Elapsed second: ' + wait);
}, 1000 * wait);
setTimeout((function(timeToWait) {
  return function () { console.log('Elapsed second: ' + timeToWait); };
})(wait), 1000 * wait);
wait = 4;


// PURE FUNCTION
var finalPlayer1Score = 50;
checkPlayerScore();
console.log(finalPlayer1Score);
// dangerous approach
function checkPlayerScore () {
  var bonus = Math.random * 10;
  finalPlayer1Score = finalPlayer1Score + bonus;
}
// safe approach
function getPlayerScore (finalScore) { return finalScore + 10; }
var finalPlayerScore = getPlayerScore(finalPlayerScore);

// CURRYING

// THIS & BINDING
// 3 rules to now what is "this"
// R1: from what object it was call ?
// R2: was a it bound ?
// R3: was it a new object
window.name = 'Super Quizz';
function game () {
  var name = 'Mega Quizz';
  console.log('this', this);
  var play = function () {
    this.name = 'Hyper Quizz';
    console.log('this:', this);
  }.bind(this);
  play();
}
game();
var fullGame = {
  name: 'Cool Quizz',
  launchGame: game
 };
fullGame.launchGame();
// CALL && APPLY


// NEW
// create a new object
// bind this
// bind prototype
// return object

// FAKE CLASS

// PROTOTYPE

// DELEGATION

// ARRAY METHODS
// undefined: forEach
var players = ['Luigi', 'Mario', {name: 'Peach', grade: 'princess'}];
players.forEach(function(value, idx, arr) {
  console.log('player' + idx, value);
  if (value) { // useless test
    value = 'Warrio';
  }
});
console.log(players);

// mutable array methods: push pop unshift shift, splice(index, howmany)
// reverse, sort, length = 0
// @see https://www.w3schools.com/jsref/jsref_splice.asp
var push = function (val) {
  this[this.length] = val;
};
var arr = [];
arr.newPush = push;
arr.newPush('player');
console.log(arr);

// immutable (shallow) array methods (pure function): concat, map
// reduce, filter, slice(index, index)... or slice() to clone !


// any: find
// number: findIndex, indexOf, lastIndexOf...
// string: join, toString...
// boolean: every (pass the test), some (pass the test)

// CHAINING
var round1Scores = [{ p1: 2, p2: 4}, { p1: 7, p2: 3 }];
var round2Scores = [{ p1: 5, p2: 0}, { p1: 1, p2: 3 }];
var scoreOfPlayer1 = round1Scores
                      .concat(round2Scores)
                      .map(scores => scores.p1)
                      .reduce(function (acc, current) { console.log(acc, current); return acc + current; }, 0)
                      .toString() + 'pt(s)';
console.log('player 1 score:', scoreOfPlayer1);

