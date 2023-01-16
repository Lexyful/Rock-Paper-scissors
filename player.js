

class Player{
    constructor(name, token){
        this.name = name
        this.token = token
        this.wins = 0
        this.currentChoice
    }
    takeTurn(gameBoard){
        
      gameBoard.determineOutcome() 
      }
    
    chosenFighter(event){
     this.currentChoice = event.target.dataset.difficult || event.target.dataset.classic

    }
}

  
