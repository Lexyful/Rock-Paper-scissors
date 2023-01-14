class Game {
    constructor(gameChoice){
        this.gameChoice = gameChoice
        this.human = new Player("human", "👩🏽")
        this.computer = new Player("computer", "🤖");
        this.winner = winner
        this.computerPick = null
        
}

pickFighters(){
    if(this.gameChoice === "Classic"){
        this.fighters = ["rock", "paper", "scissors"];
    }else if(this.category === 'Spicy')
    {
        this.fighters = ["rock", "paper", "scissors", "chick", "hot-air-balloon"]
    }
}
}


function getRandomWeapon() {
    this.computerPick = this.fighters[Math.floor(Math.random() * this.fighters.length)]
    return this.computerPick
}


playGame(){
    if(this.computerChoice === this.person.currentChoice){
      this.winner = "Wah, Wah, Waaaaaaaaaaah... Draw"
    }else if (
      (this.person.currentChoice === "rock" && this.computerChoice === "scissor") ||
      (this.person.currentChoice === "rock" && this.computerChoice === "hot-air-balloon") ||
      (this.person.currentChoice === "paper" && this.computerChoice === "chick") ||
      (this.person.currentChoice === "paper" && this.computerChoice === "rock") ||
      (this.person.currentChoice === "scissor" && this.computerChoice === "paper") ||
      (this.person.currentChoice === "scissor" && this.computerChoice === "hot-air-balloon") ||
      (this.person.currentChoice === "hot-air-balloon" && this.computerChoice === "paper") ||
      (this.person.currentChoice === "hot-air-balloon" && this.computerChoice === "chick") ||
      (this.person.currentChoice === "chick" && this.computerChoice === "scissor") ||
      (this.person.currentChoice === "chick" && this.computerChoice === "rock") ) {
      this.winner =  "human"
      this.person.wins ++
    } else {
      this.winner = 'computer'
      this.computer.wins ++
    }
      
  }


