// LET && CONST
// let, const
// const livre = 'le rouge et noir';
// if (typeof livre === 'string') {
// 	let auteur = 'stendhal';
// 	auteur = 'dosto';
// }
// for (let i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		// console.log(i);
// 	}, i * 1000);
// }
const livres = [{nom: 'Le joueur', prix: 20}];
livres.push({nom: 'La joueuse', prix: 22});
livres.push({nom: 'La clef', prix: 25});


// IMPORT / EXPORT
import { Livre, Roman } from './Livre';

// class
const livre1 = new Livre(25, 'la clef');
const livre2 = new Livre(26, 'le chuchoteur');
// console.log(livre1, livre2);
// console.log(livre1.getNotice());
livre2.titre = 'test';
// console.log(livre2.getNotice());

const roman1 = new Roman(20, 'La mare au diable');
// console.log(roman1.getNotice());

// TEMPLATE STRING
const val = 'les amis';
let templateString = `
<div>
	<p>"bonjour ${val}"</p>
</div>
`;
// console.log(templateString);

// arrow function
const func = () => 'bonjour';
// check this
// console.log(func());

// SPREAD
const add = (a, b, c) => {
	console.log(a + b + c);
};
const arr = [1, 2, 3];
add(...arr);
const arr2 = [5, 9, ...arr];
add(...arr2);

// { DESTRUCTURING } + ...REST
const [a, b, ...c] = arr2;
console.log(a, b, c);
const pierreEtSabre = {
	livre: 'La pierre et le sabre',
	auteur: 'Eiji Yoshikawa',
	prix: 20,
	type: 'roman'
};
const { livre, auteur } = pierreEtSabre;
console.log(livre, auteur);
const checkPrice = (livre) => {
	const { prix } = livre;
	console.log(prix);
};
checkPrice(pierreEtSabre);

// COMPUTED KEYS
const key = 'notice3';
const notice3 = {};
const divineLumiere = {
	livre: 'La divine lumière',
	auteur: 'Eiji Yoshikawa',
	prix: 21,
	type: 'roman',
	[key]: notice3
};
console.log(divineLumiere);

// PROMISES

// SYMBOL && ITERATORS

// GENERATORS

// DECORATORS


