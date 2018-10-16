// LET && CONST

// TEMPLATE STRING

// ARROW FUNCTION
// check this
// closure & currying

// IMPORT / EXPORT

// CLASS

// SPREAD
const display3winners = (a, b, c) => {
  console.log(a, b, c);
};

// { DESTRUCTURING } + ...REST

// SHORT HAND KEY-VALUE && COMPUTED KEYS
const key = "notice3";
const prix = 21;
const notice3 = {};
const divineLumiere = {
  livre: "La divine lumière",
  auteur: "Eiji Yoshikawa"
};

// PROMISES

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// xhr.onload = xhr => console.log(xhr.currentTarget.responseText);
// xhr.onerror = xhr => xhr.statusText;
// xhr.send();

// SYMBOL

// ITERATORS, GENERATORS && YIELD
const question = ["1+1", "1+2", "1+3"];

// function iterator() {
//   // use index to track properties
//   let index = 0;
//   // get the properties of the object
//   let properties = Object.keys(this);

//   // set to true when the loop is done
//   let Done = false;
//   // return the next method, need for iterator
//   return {
//     next: () => {
//       Done = index >= properties.length;
//       // define the object you will return done state, value eg Lila ,key eg
//       //name
//       let obj = {
//         done: Done,
//         value: this[properties[index]],
//         key: properties[index]
//       };
//       // increment index
//       index++;
//       return obj;
//     }
//   };
// }

// PROXY
const player42 = { name: "Peach", age: 23 };
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect#Methods

// SET: an Array without duplicate

// MAP: an iterable object, without prototype collisions
