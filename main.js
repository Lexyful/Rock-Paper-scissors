var pageDefault = document.querySelector(".wrapper2")
var pageGameClassic = document.querySelector(".classic-game-view")
var pageGameDifficult = document.querySelector(".difficult-game-view")
var classicGame = document.querySelector("#box1")
var difficultGame = document.querySelector("#box2")
var iconClassicRock = document.querySelector(".rock-icon")
var iconClassicScissors = document.querySelector(".scissors-icon")
var iconClassicPaper = document.querySelector(".paper-icon")


classicGame.addEventListener("click", renderClassicGameSection)
difficultGame.addEventListener("click", renderDifficultGameSection)



    
    function renderClassicGameSection() {
    pageDefault.classList.add("hidden")
    pageGameClassic.classList.remove("hidden")
    // iconClassicRock.classList.remove("hidden")
    // iconClassicScissors.classList.remove("hidden")

      
    }

    function renderDifficultGameSection() {
    pageDefault.classList.add("hidden")
    pageGameDifficult.classList.remove("hidden")
    }