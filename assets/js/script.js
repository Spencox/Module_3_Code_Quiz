let mainPage = document.querySelector(".mainPage");
let questions = document.querySelector(".questions");
let flashCard = document.querySelector(".flashCard");
let button = document.querySelector(".startButton");

// Hide questions until ready wit click
//flashCard.innerHTML = mainPage.innerHTML;
function startQuiz () {
    console.log("Start Quiz Function Call")
    mainPage.setAttribute("style", "display: none")
    questions.setAttribute("style", "display: block")
}






