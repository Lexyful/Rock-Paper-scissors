class Player{
    constructor(name, token){
        this.name = name
        this.token = token
        this.wins = 0
        this.fighter 
        this.currentChoice
    }
    takeTurn(gameBoard){
      gameBoard.determineOutcome() 
      }
    
    chooseFighter(fighter){
        this.currentChoice = fighter 
    }
}


  



// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage - only necessary if you choose the localStorage extension
// retrieveWinsFromStorage - only necessary if you choose the localStorage extension
// takeTurn