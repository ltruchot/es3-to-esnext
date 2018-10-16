// ------------ ES7
// INCLUDES
const arr = ["Peach", "Sonic", "Momo54"];
console.log(arr.includes("Sonic"), arr.includes("Mimi35"));

// AWAIT ASYNC
async function welcomePlayer(playerName) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`La partie commence, ${playerName} !`);
}
welcomePlayer("Peach");

// ------------ ES NEXT

// Promise.finally, enhanced regexp

// DECORATORS

// OBSERVABLE
