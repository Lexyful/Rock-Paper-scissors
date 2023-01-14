var gameBoard = new Game()

var pageDefault = document.querySelector(".wrapper2")
var pageGameClassic = document.querySelector("#classicGame")
var pageGameDifficult = document.querySelector(".difficult-game-view")
var classicGame = document.querySelector("#box1")
var difficultGame = document.querySelector("#box2")
var iconClassicRock = document.querySelector(".rock-icon")
var iconClassicScissors = document.querySelector(".scissors-icon")
var iconClassicPaper = document.querySelector(".paper-icon")
var iconDifficultRock = document.querySelector(".difficult-rock-icon")
var iconDifficultPaper = document.querySelector(".difficult-paper-icon")
var iconDifficultScissors = document.querySelector(".difficult-scissors-icon")
var iconDifficultChick = document.querySelector(".difficult-chick-icon")
var iconDifficultHotAirBalloon = document.querySelector(".difficult-hot-air-balloon-icon")



classicGame.addEventListener("click", renderClassicGameSection)

difficultGame.addEventListener("click", renderDifficultGameSection)






    
    function renderClassicGameSection() {
      pageDefault.classList.add("hidden")
      pageGameClassic.classList.remove("hidden")
      pageGameDifficult.classList.add("hidden")
    }

    function playClassicGame(fighter){
      gameBoard.gameChoice = "Classic"
      gameBoard.pickFighters()
      gameBoard.getRandomWeapon()
      gameBoard.human.chooseFighter(fighter)
      gameBoard.computer.takeTurn(gameBoard)
    }
    
    function renderDifficultGameSection() {
      console.log('hello')
    pageDefault.classList.add("hidden")
    pageGameDifficult.classList.remove("hidden")
    }



  


// will need a function, takes the user's choice as a parameter. 
//call getRandomWeapon(weapons) method, store in variable
// user choice vs computer choice and the conditions
// if player1 === player 2
  // draw
//if player1 === 'rock'
  //if player2 === 'scissors'
    //player2 wins
    // computer.wins ++
  // else if player2 == 'paper'
    //player1 wins
    // human.wins ++
      

    