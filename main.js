var gameBoard = new Game()

var pageDefault = document.querySelector(".wrapper2")
var pageGameClassic = document.querySelector(".classic-game-view")
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
var computerWins = document.querySelector("#computerWinsCalculator")
var humanWins = document.querySelector("#humanWinsCalculator")


pageDefault.addEventListener("load",loadMainpaige)


classicGame.addEventListener("click", renderClassicGameSection)

difficultGame.addEventListener("click", renderDifficultGameSection)

classicFighters.addEventListener("click",function(event){
  playClassicGame(event)})

difficultFighters.addEventListener("click", function(event){
  playDifficultGame(event)})

buttonChangeGame.addEventListener("click", changeGame)


function loadMainpaige(){
  pageGameClassic.classList.remove("hidden")
  pageGameClassic.classList.add("hidden")
  pageGameDifficult.classList.add("hidden")
  viewResultSection.classList.add("hidden")
  buttonChangeGame.classList.add("hidden")
  playerCommand.innerText = "Choose your Game!"
}

    
    function renderClassicGameSection() {
      pageDefault.classList.add("hidden")
      pageGameClassic.classList.remove("hidden")
      pageGameDifficult.classList.add("hidden")
      viewResultSection.classList.add("hidden")
      buttonChangeGame.classList.remove("hidden")
      classicFighters.classList.remove("hidden")
      playerCommand.innerText = "Choose your Fighter!"

    }

    function playClassicGame(event){
      console.log(event)
      gameBoard.gameChoice = "Classic"
      pickClassicFighters()
      gameBoard.getRandomFighter()
      gameBoard.human.chosenFighter(event)
      gameBoard.human.takeTurn(gameBoard)
      viewOutcome(event)
      resetGame()
  
      buttonChangeGame.classList.remove("hidden")
    }
    function pickClassicFighters(){
      gameBoard.pickFighters();
      viewResultSection.classList.remove("hidden");
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

    function playDifficultGame(event){
      gameBoard.gameChoice = "Difficult"
      pickDifficultFighters(event)
      gameBoard.getRandomFighter()
      gameBoard.human.chosenFighter(event)
      gameBoard.human.takeTurn(gameBoard)
      viewOutcome()
      resetGame()
      buttonChangeGame.classList.remove("hidden")
    }
    function pickDifficultFighters(){
      gameBoard.pickFighters();
      viewResultSection.classList.remove("hidden");
    }


    function updatePlayerCommand() {
      if(gameBoard.winner === "human" ){
        playerCommand.innerHTML = `<img class="girl-icon" src="girl.png"> Human <img class="girl-icon" src="girl.png">`
    }else if(gameBoard.winner === "computer"){
      playerCommand.innerHTML  = `<img class="computer-icon" src="computer.png"> Computer <img class="computer-icon" src="computer.png">`
    }else {
      playerCommand.innerText = "Wah, Wah, Waaaaaaaaaaah...it's a Draw";
    }

  }

  

    function viewOutcome(){
      console.log(gameBoard.human)
      fighter1.src =`./assets/${gameBoard.human.currentChoice}.png`
      fighter2.src = `./assets/${gameBoard.computerChoice}.png`
      console.log(fighter2)
      classicFighters.classList.add("hidden");
      difficultFighters.classList.add("hidden");
      viewResultSection.classList.remove("hidden")
      updatePlayerCommand()
      updateScore()
      
    }

    function resetGame(){
      if(gameBoard.gameChoice === "Classic"){
        setTimeout(renderClassicGameSection, 3000);
      } else if(gameBoard.gameChoice === "Difficult"){
        setTimeout(renderDifficultGameSection, 3000);
      }
    }

  function updateScore(){
    if(gameBoard.winner === "human" ){
      humanWins.innerText = gameBoard.human.wins
  }else if(gameBoard.winner === "computer"){
    computerWins.innerText  = gameBoard.computer.wins
  }
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
      

    