var gameBoard = new Game()

var playerCommand = document.querySelector("#playerCommand");
var pageDefault = document.querySelector("#wrap2");
var pageGameClassic = document.querySelector("#classicGame");
var pageGameDifficult = document.querySelector("#difficultGame");
var classicGame = document.querySelector("#box1");
var classicFighters = document.querySelector("#classicFighters");
var difficultGame = document.querySelector("#box2");
var difficultFighters = document.querySelector("#difficultFighters");
var viewResultSection = document.querySelector("#viewOutcomeSection");
var buttonChangeGame = document.querySelector("#changeGame");

var humanPlayer = document.querySelector("#humanP");
var humanWins = document.querySelector("#humanWinsCalculator");
var computerPlayer = document.querySelector("#computerP");
var computerWins = document.querySelector("#computerWinsCalculator");


pageDefault.addEventListener("load",loadMainpaige);
classicGame.addEventListener("click", renderClassicGameSection);
difficultGame.addEventListener("click", renderDifficultGameSection);
classicFighters.addEventListener("click",function(event){
  playClassicGame(event)});
difficultFighters.addEventListener("click", function(event){
  playDifficultGame(event)});
buttonChangeGame.addEventListener("click", changeGame);


function loadMainpaige() {
  pageDefault.classList.remove("hidden");
  buttonChangeGame.classList.add("hidden");
  playerCommand.innerText = "Choose your Game!";

}

function renderClassicGameSection() {
  pageDefault.classList.add("hidden");
  pageGameClassic.classList.remove("hidden");
  viewResultSection.classList.add("hidden");
  buttonChangeGame.classList.remove("hidden");
  difficultFighters.classList.add("hidden");
  classicFighters.classList.remove("hidden");
  buttonChangeGame.setAttribute("disabled")
  playerCommand.innerText = "Choose your Fighter!";
}

function playClassicGame(event) {
  gameBoard.gameChoice = "Classic";
  pickClassicFighters();
  gameBoard.getRandomFighter();
  gameBoard.human.chosenFighter(event);
  gameBoard.human.takeTurn(gameBoard);
  viewOutcome();
  buttonChangeGame.classList.remove("hidden");
}

function pickClassicFighters() {
  gameBoard.pickFighters();
  viewResultSection.classList.remove("hidden");
}
    
function renderDifficultGameSection() {
  pageDefault.classList.add("hidden");
  pageGameDifficult.classList.remove("hidden");
  viewResultSection.classList.add("hidden");
  buttonChangeGame.classList.remove("hidden");
  classicFighters.classList.add("hidden");
  difficultFighters.classList.remove("hidden");
  buttonChangeGame.setAttribute("disabled")
  playerCommand.innerText = "Choose your Fighter!";
}

function playDifficultGame(event) {
  gameBoard.gameChoice = "Difficult";
  pickDifficultFighters();
  gameBoard.getRandomFighter();
  gameBoard.human.chosenFighter(event);
  gameBoard.human.takeTurn(gameBoard);
  viewOutcome();
  buttonChangeGame.classList.remove("hidden");
}
    
function pickDifficultFighters() {
  gameBoard.pickFighters();
  viewResultSection.classList.remove("hidden");
}

function updatePlayerCommand() {
  if (gameBoard.winner === "human" ) {
      playerCommand.innerHTML = `<img class="girl-icon" src="girl.png"> Human Wins<img class="girl-icon" src="girl.png">`;
  } else if (gameBoard.winner === "computer") {
      playerCommand.innerHTML  = `<img class="computer-icon" src="computer.png"> Computer Wins<img class="computer-icon" src="computer.png">`;
  } else {
      playerCommand.innerText = "...it's a Draw";
    }
  }

function viewOutcome(){
  humanPlayer.src =`./assets/${gameBoard.human.currentChoice}.png`
  computerPlayer.src = `./assets/${gameBoard.computerChoice}.png`
  classicFighters.classList.add("hidden");
  difficultFighters.classList.add("hidden");
  viewResultSection.classList.remove("hidden");
  updatePlayerCommand();
  updateScore();
  resetGame() 
  buttonChangeGame.removeAttribute("disabled")
}


function resetGame() {
  if (gameBoard.gameChoice === "Classic") {
    setTimeout(renderClassicGameSection, 3000);
  } else if (gameBoard.gameChoice === "Difficult") {
   setTimeout(renderDifficultGameSection, 3000);
    } 
  }

function updateScore() {
  if (gameBoard.winner === "human" ){
    humanWins.innerText = gameBoard.human.wins;
  } else if (gameBoard.winner === "computer") {
    computerWins.innerText  = gameBoard.computer.wins;
    }
  }
 
  function changeGame() {
  pageGameDifficult.classList.add("hidden");
  pageGameClassic.classList.add("hidden")
  viewResultSection.classList.add("hidden");
  loadMainpaige();  
}



    