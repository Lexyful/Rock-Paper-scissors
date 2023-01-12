var defaultPage = document.querySelector(".main-section")

defaultPage.addEventListener("load", homeView);
buttonClassicGame.addEventListener("click", renderGameSection)


function homeView(){
    defaultPage.classList.add(".main-section");
}

// function renderGameSection(){
    //     buttonClassicGame.classList.add(".hidden")
    //     defaultPage.classList.add(".hidden");
    
    // }
    
    function renderGameSection(event) {
        console.log(event.target)
        
        var buttonClassicGame = document.querySelector("#box1")
      if (event.target.id === `box`) {
      buttonClassicGame.classList.add(".hidden")
    defaultPage.classList.remove(".main-section")
      }
    }
  