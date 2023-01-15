var gameBoard = new Game()

var pageDefault = document.querySelector(".wrapper2")
var pageGameClassic = document.querySelector("#classicGame")
var pageGameDifficult = document.querySelector(".difficult-game-view")
var classicGame = document.querySelector("#box1")
var classicFighters = document.querySelector("#classicFighters")
var difficultGame = document.querySelector("#box2")
var difficultFighters = document.querySelector("#difficultFighters")
var viewResultSection = document.querySelector(".view-outcome-section")
var playerCommand = document.querySelector(".player-command")
var fighter1 = document.querySelector("#fighterOne")
var fighter2 = document.querySelector("#fighterTwo")
var buttonChangeGame = document.querySelector("#changeGame")

pageDefault.addEventListener("load",loadMainpaige)


classicGame.addEventListener("click", renderClassicGameSection)

difficultGame.addEventListener("click", renderDifficultGameSection)

classicFighters.addEventListener("click", playClassicGame)

difficultFighters.addEventListener("click", playDifficultGame)

buttonChangeGame.addEventListener("click", changeGame)


function loadMainpaige(){
  pageGameClassic.classList.remove("hidden")
  pageGameClassic.classList.add("hidden")
  pageGameDifficult.classList.add("hidden")
  viewResultSection.classList.add("hidden")
  buttonChangeGame.classList.add("hidden")
}

    
    function renderClassicGameSection() {
      pageDefault.classList.add("hidden")
      pageGameClassic.classList.remove("hidden")
      pageGameDifficult.classList.add("hidden")
      viewResultSection.classList.add("hidden")
      buttonChangeGame.classList.remove("hidden")
      classicFighters.classList.remove = ("hidden")
      playerCommand.innerText = "Choose your Fighter!"

    }

    function playClassicGame(event){
      gameBoard.gameChoice = "Classic"
      gameBoard.pickFighters()
      gameBoard.getRandomFighter()
      gameBoard.human.chosenFighter(event)
      gameBoard.computer.takeTurn(gameBoard)
      // updatePlayerCommand() 
      viewOutcome()
  
      buttonChangeGame.classList.remove("hidden")
    }
    
    function renderDifficultGameSection() {
      console.log('hello')
    pageDefault.classList.add("hidden")
    pageGameDifficult.classList.remove("hidden")
    viewResultSection.classList.add("hidden")
    buttonChangeGame.classList.remove("hidden")
    difficultFighters.classList.remove("hidden");
    playerCommand.innerText = "Choose your Fighter!"
    
    }

    function playDifficultGame(fighter){
      gameBoard.gameChoice = "Difficult"
      gameBoard.pickFighters()
      gameBoard.getRandomFighter()
      gameBoard.human.chosenFighter(fighter)
      gameBoard.computer.takeTurn(gameBoard)
      viewOutcome()
      buttonChangeGame.classList.remove("hidden")
    }

    // function updatePlayerCommand() {

    //    if(gameBoard.winner === "human"){
    //   viewResultSection.innerHTML = `<img class="human-icon" src="girl.png"> Human </img>`;
    //   humanWins.innerHTML = "Human Wins!"
    // }else if(gameBoard.winner === "computer"){
    //   viewResultSection.innerHTML = `<img class="human-token" src="robot.png"> Computer </img>`;
    //   computerWins.innerHTML = "Computer Wins"
    // }else {
    //   viewResultSection.innerText = "Wah, Wah, Waaaaaaaaaaah...it's a Draw";
    // }

  // }

    function viewOutcome(){
      fighter1.src = event.target.src
      // fighter2.src = `<img id="${gameBoard.computerChoice}" src="./assets/${gameboard.computerChoice}png">
      // </img>`
      classicFighters.classList.add("hidden");
      difficultFighters.classList.add("hidden");
      viewResultSection.classList.remove("hidden")
      
    }

    function changeGame(){
      buttonChangeGame.classList.add("hidden")
      pageDefault.classList.remove("hidden")
      viewResultSection.classList.add("hidden")
      classicFighters.classList.add("hidden");
      difficultFighters.classList.add("hidden");
      loadMainpaige()
    
    }

    


    
    
    
    
    
    // if(gameBoard.winner === "human"){
    //   viewResultSection.innerHTML `<img class="human-icon" src="girl.png"> Human </img>`;
    //   humanWins.innerHTML = game.human.wins
    // }else if(gameBoard.winner === "computer"){
    //   viewResultSection.innerHTML = `<img class="human-token" src="robot.png"> Computer </img>`;
    //   computerWins.innerHTML = gameBoard.computer.wins
    // }else {
    //   viewResultSection.innerText = "Wah, Wah, Waaaaaaaaaaah...it's a Draw";
    // }


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
      

    