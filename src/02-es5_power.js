// OBJECT PARTICULARITY & METHODS
// Conventional special object: collection & entities
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

// CURRYING || PARTIAL
function log(status, css) {
  return function(context) {
    return function(message) {
      console.log('%c[' + status + ']', css, context + ': ' + message);
    };
  };
}
var info = log('info', 'color:green');
var error = log('error', 'color:red');
info('New player enter the game')('Mario');
info('New player enter the game')('Peach');
error('Unkown error occured')('Game over');
var partialInfo = log.bind(null, 'special info');
var info2 = partialInfo('color:purple');
info2('New player arrives')('Warrio');

// THIS & BINDING
// 3 rules to now what is "this"
// R1: from what object it was call ?
// R2: was a it bound ?
// R3: was it a new object
// var selg = this;
window.name = 'Super Quizz';
function beginGame () {
  var name = 'Mega Quizz';
  console.log('this', this);
  var play = function () {
    this.name = 'Hyper Quizz';
    console.log('this:', this);
  }.bind(this);
  play();
}
beginGame();
var fullGame = {
  name: 'Cool Quizz',
  launchGame: beginGame
 };
fullGame.launchGame();
// CALL ... && APPLY []
function stopGame () {
  this.name = 'Game over';
}
stopGame.call(fullGame);
console.log('Full game now indicates:', fullGame.name);

// NEW
// create a new object
// bind this
// bind prototype
// return the new object
function createPlayer (name) {
  var that = {};
  that.__proto__ = {};
  that.name = name;
  return that;
}
var toad = createPlayer('Toad');
var koopa = new createPlayer('Koopa');
console.log(toad, koopa);

// FAKE CLASS
function Player (name) {
  this.name = name || 'unknow player';
  this.score = 0;
}
Player.prototype.win = function () {
  this.score++;
};
Player.prototype.displayScore = function () {
  console.log('score of ' + this.name + ' is ' + this.score);
};
var mario = new Player('Mario');
var luigi = new Player('Luigi');
mario.win();
mario.win();
mario.displayScore();

// PROTOTYPE && DELEGATION
// what is the prototype chain. Why we all have a toString method ?
var BetterPlayer = {
  name: 'unknow player',
  score: 0,
  win: function () {
    this.score++;
  },
  displayScore: function () {
    console.log('score of ' + this.name + ' is ' + this.score);
  }
};
var peach = Object.create(BetterPlayer);
// peach.name = 'Peach';
peach.win();
peach.displayScore();
// composition over inheritance

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

var round1Scores = [{ p1: 2, p2: 4}, { p1: 7, p2: 3 }];
var round2Scores = [{ p1: 5, p2: 0}, { p1: 1, p2: 3 }];
// immutable (shallow) array methods (pure function): concat, map
// reduce, filter, slice(fromIndex, toIndex)... or slice() to clone !

// any: find
// number: findIndex, indexOf, lastIndexOf...
// string: join, toString...
// boolean: every (pass the test), some (pass the test)


/*
const players = [{ name: 'Momo54', age: 20 }];
players.push({ name: 'Chiffon35', age: 22 });
players.push({ name: 'anonymous1050', age: 25 });
const bibliotheque = players.map(function (livre) {
  livre.editeur = 'acte sud';
  return livre;new Object()
});
// console.log(bibliotheque);
const total = players.reduce(function (accumulateur, livre) {
  return accumulateur + livre.age;
}, 0);
// console.log(total / players.length);
const livrePasCher = players.find(function (livre) {
  return livre.age === 20;
});
// console.log(livrePasCher);
const playersChers = players.filter(function (livre) { 
  return livre.age > 21;
});
// console.log(playersChers);
*/

// CHAINING
var scoreOfPlayer1 = round1Scores
                      .concat(round2Scores)
                      .map(scores => scores.p1)
                      .reduce(function (acc, current) { console.log(acc, current); return acc + current; }, 0)
                      .toString() + 'pt(s)';
console.log('player 1 score:', scoreOfPlayer1);

