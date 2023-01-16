class Game {
    constructor(){
        this.gameChoice
        this.human = new Player("human", "👩🏽")
        this.computer = new Player("computer", "🤖");
        this.winner = undefined 
        this.computerChoice = null
        this.fighters
        
    } 


pickFighters(){
    if(this.gameChoice === "Classic"){
        this.fighters = ["rock", "paper", "scissors"];
    }else if(this.gameChoice === "Difficult")
    {
        this.fighters = ["rock", "paper", "scissors", "chick", "hot-air-balloon"]
    }
}



getRandomFighter() {
    this.computerChoice = this.fighters[Math.floor(Math.random() * this.fighters.length)]
    return this.computerChoice
}


determineOutcome(){
    console.log(this.human.currentChoice, this.computerChoice)
    console.log( this.human.currentChoice === "rock" && this.computerChoice === "scissors")
    if(this.computerChoice === this.human.currentChoice){
        console.log("it's a tie")
      this.winner = "Wah, Wah, Waaaaaaaaaaah...it's a Draw"
    }else if (
      (this.human.currentChoice === "rock" && this.computerChoice === "scissors") ||
      (this.human.currentChoice === "rock" && this.computerChoice === "hot-air-balloon") ||
      (this.human.currentChoice === "paper" && this.computerChoice === "chick") ||
      (this.human.currentChoice === "paper" && this.computerChoice === "rock") ||
      (this.human.currentChoice === "scissors" && this.computerChoice === "paper") ||
      (this.human.currentChoice === "scissors" && this.computerChoice === "hot-air-balloon") ||
      (this.human.currentChoice === "hot-air-balloon" && this.computerChoice === "paper") ||
      (this.human.currentChoice === "hot-air-balloon" && this.computerChoice === "chick") ||
      (this.human.currentChoice === "chick" && this.computerChoice === "scissors") ||
      (this.human.currentChoice === "chick" && this.computerChoice === "rock") ) {
     console.log("human wins")
     this.winner = "human"
     this.human.wins ++
    } else {
        console.log("computer wins")
        this.winner = "computer"
        this.computer.wins ++
      console.log(this.computer.wins)
    }
      
  }

}
