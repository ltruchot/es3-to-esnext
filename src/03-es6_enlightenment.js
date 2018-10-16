// LET && CONST
// let, const
const q = "Carbon dioxide formula?";
if (typeof q === "string") {
  var a1 = "O2"; // let a, const a
  a1 = "CO2";
}
console.log(a1);
{
  const a2 = "H2O";
  let a3 = "Au";
}
const qsts = ["1+1", "2+2"];
// qsts = [];
// console.log(a2, a3);
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

// TEMPLATE STRING
const players = "Peach, Toad, Mario";
const templateString = `
<div>
  <p>"Hello ${players}"</p>
</div>
`;
// console.log(templateString);

// ARROW FUNCTION
const end = () => "Game over...";
console.log(end());
// check this
// closure & currying

// IMPORT / EXPORT
import { Game, Quizz } from "./classes/Game";

// CLASS
const game1 = new Game("Labirynth", 10);
const game2 = new Game("Sonic", 15);
console.log(game1, game2);
game1.launch();
game2.gameName = "Mario";
game2.launch();

const quizz1 = new Quizz('Special Theme "La cité de la peur"', 5);
quizz1.launch();

// SPREAD
const display3winners = (a, b, c) => {
  console.log(a, b, c);
};
const arr = ["Peach", "Sonic", "Momo54"];
display3winners(...arr);
const arr2 = ["Chiffon1050", "Jean louis", ...arr];
display3winners(...arr2);

// { DESTRUCTURING } + ...REST
const [a, b, ...c] = arr2;
console.log(a, b, c);
const quizzSpecial = {
  name: "La cité de la peur",
  editor: "Pay2Win",
  price: 20,
  type: "Quizz"
};
const { name, editor } = quizzSpecial;
console.log(name, editor);
const checkPrice = ({ price }) => {
  console.log(price);
};
checkPrice(quizzSpecial);

// SHORT HAND KEY-VALUE && COMPUTED KEYS
const key = "notice3";
const prix = 21;
const notice3 = {};
const divineLumiere = {
  livre: "La divine lumière",
  auteur: "Eiji Yoshikawa",
  prix,
  type: "roman",
  [key]: notice3
};
console.log(divineLumiere);

// PROMISES
const questions$ = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  xhr.onload = () => resolve(xhr.responseText);
  xhr.onerror = () => reject(xhr.statusText);
  xhr.send();
});

questions$.then(data => console.log("received data:", data));

const end$ = new Promise(function(resolve, reject) {
  console.log("Game over...");
  setTimeout(function() {
    resolve("... try again ?");
  }, 1000);
});

end$.then(val => console.log(val)).catch(() => console.log("...insert coin"));

// SYMBOL
console.log(typeof Symbol.iterator);
const uniquePlayer = {
  [Symbol("I'm unique !")]: "Mario"
};
console.log("u", uniquePlayer);

// ITERATORS, GENERATORS && YIELD
const question = ["1+1", "1+2", "1+3"];
console.log(question[Symbol.iterator]().next());
const iterator = question[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* playerIdMaker() {
  var index = 20;
  while (true) {
    yield (index = index + 2);
  }
}
var gen = playerIdMaker();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

const playerObj = {
  mario: { id: gen.next().value, name: "Mario" },
  peach: { id: gen.next().value, name: "Peach" }
};

playerObj[Symbol.iterator] = function() {
  // use index to track properties
  let index = 0;
  // get the properties of the object
  let properties = Object.keys(this);

  // set to true when the loop is done
  let Done = false;
  // return the next method, need for iterator
  return {
    next: () => {
      Done = index >= properties.length;
      // define the object you will return done state, value eg Lila ,key eg
      //name
      let obj = {
        done: Done,
        value: this[properties[index]],
        key: properties[index]
      };
      // increment index
      index++;
      return obj;
    }
  };
};

for (const player of playerObj) {
  console.log("p", player);
}

console.log(...playerObj);

// PROXY
const player42 = { name: "Peach", age: 23 };

const handler = {
  get(target, prop) {
    console.log(`Someone want to know my ${prop}:`);
    return target[prop];
  }
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect#Methods
const proxy = new Proxy(player42, handler);
console.log(proxy.name);

// SET: an Array without duplicate
const lastPlayers = new Set(["Toad", "Wario"]);
lastPlayers.add("Wario");
console.log(lastPlayers);
lastPlayers.delete("Toad");
console.log(lastPlayers);

// MAP: an iterable object, without prototype collisions
const lastPlayer = new Map([["name", "Luigi"]]);
console.log(lastPlayer);
lastPlayer.set("age", 45);
console.log(lastPlayer);
lastPlayer.forEach(a => console.log(a));
console.log(
  lastPlayer.has("age"),
  lastPlayer.has("test"),
  lastPlayer.get("name")
);
