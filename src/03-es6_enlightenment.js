// LET && CONST
// let, const
const q = 'What is the formula of carbon dioxide?';
if (typeof q === 'string') {
  var a1 = 'O2'; // let a, const a
  a1 = 'CO2';
}
console.log(a1);
{
  const a2 = 'H2O';
}
// console.log(a2);
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

// TEMPLATE STRING
const players = 'Peach, Toad, Mario';
const templateString = `
<div>
  <p>"Hello ${players}"</p>
</div>
`;
// console.log(templateString);

// ARROW FUNCTION
const end = () => 'Game over...';
console.log(end());
// check this

// IMPORT / EXPORT
import { Game, Quizz } from './classes/Game';

// CLASS
const game1 = new Game('Labirynth', 10);
const game2 = new Game('Sonic', 15);
console.log(game1, game2);
game1.launch();
game2.gameName = 'Mario';
game2.launch();

const quizz1 = new Quizz('Special Theme "La cité de la peur"', 5);
console.log(quizz1.launch());

// SPREAD
const display3winners = (a, b, c) => {
  console.log(a, b, c);
};
const arr = ['Peach', 'Sonic', 'Momo54'];
display3winners(...arr);
const arr2 = ['Chiffon1050', 'Jean louis', ...arr];
display3winners(...arr2);

// { DESTRUCTURING } + ...REST
const [a, b, ...c] = arr2;
console.log(a, b, c);
const quizzSpecial = {
  name: 'La cité de la peur',
  editor: 'Pay2Win Corp.',
  price: 20,
  type: 'Quizz'
};
const { name, editor } = quizzSpecial;
console.log(name, editor);
const checkPrice = ({ price }) => {
  console.log(price);
};
checkPrice(quizzSpecial);

// SHORT HAND KEY-VALUE && COMPUTED KEYS
const key = 'notice3';
const prix = 21;
const notice3 = {};
const divineLumiere = {
  livre: 'La divine lumière',
  auteur: 'Eiji Yoshikawa',
  prix,
  type: 'roman',
  [key]: notice3
};
console.log(divineLumiere);

// PROMISES
const questions$ = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.onload = () => resolve(xhr.responseText);
  xhr.onerror = () => reject(xhr.statusText);
  xhr.send();
});

questions$.then(data => console.log('received data:', data));

const end$ = new Promise(function(resolve, reject) {
  console.log('Game over...');
  setTimeout(function() {
    resolve('... try again ?');
  }, 1000);
});

end$.then(val => console.log(val)).catch(() => console.log('...insert coin'));

// SYMBOL
console.log(typeof Symbol.iterator);

// ITERATORS, GENERATORS && YIELD
function* playerIdMaker() {
  var index = 20;
  while (true) {
    yield index = index + 2;
  }
}
var gen = playerIdMaker();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

const playerObj = {
  'mario': { id: gen.next().value, name: 'Mario' },
  'peach': { id: gen.next().value, name: 'Peach' }
};

playerObj[Symbol.iterator] = '...';
for (const playerId of playerObj) {
  console.log(playerId);
}

// console.log([...iterable1]);

// DECORATORS

// PROXY

// MAP, SETS
