// classes
export class Game {
  constructor(gameName, nbPlayers) {
    this.nbPlayers = nbPlayers;
    this.gameName = gameName;
    this.editor = 'Pay2Win Corp.';
  }
  // shorthand method (possible with object too !)
  launch() {
    console.log(`${this.editor} game named ${this.gameName} will begin !`);
    // arrow function needed
    setTimeout(function() {
      console.log(this.nbPlayers + ' players participate');
    }, 3000);
  }
}

export class Quizz extends Game {
  constructor(gameName, nbPlayers) {
    super(gameName, nbPlayers);
    this.type = 'Quizz';
  }
  launch() {
    super.launch();
    console.log(this.gameName + ' is a ' + this.type);
  }
}
