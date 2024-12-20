
import { checkAnswer, getScore, userScore } from "./checkAnswers"
import { Questions, questionList } from "./questions"
import { displayUserPoints } from "./displayUserPoints"

let currentQuestionIndex:number = 0
let selectedAnswer:string = ""

export function createHtml(questionList: Questions[], index: number){
    const question = questionList[index];
    //Extract answer options from answer property
    const options = Object.keys(question.answer)
    .map((option) => `<li><button class="option-btn">${option}</button></li>`)
    //ensure no commas or seperator are included
    .join("");
    return `
        <div class="question-container">
            <div class="question-image-container">
                <img src="${question.img.url}" alt="${question.img.alt}" class="questionImage">
                <div class="question-text">
                    <h2>${question.question}</h2>
                </div> 
            </div>
            <div class="options">
                 ${options}
            </div>
            <div class="navigation-buttons">
                <button class="next-btn" id="nextButton" ${index === questionList.length - 1}">Next</button>
            </div>
        </div>
    `;
}


export function navigateQuestion() {
    const currentQuestion = questionList[currentQuestionIndex]
    
    //Validate the answer and update the score 
    if(selectedAnswer && checkAnswer(currentQuestion, selectedAnswer)){
        getScore()
    }
    selectedAnswer = "";

    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex++;
        printHtml();
    } else {
        alert(`You have reached the end of the questions! \n\n Your score is: ${userScore}`);
    }
}

//Handles click event for answer option buttons 
export function handleOptionClick(event: Event){

    //Get the target element of the click and cast as htmlelement 
    const target = event.target as HTMLElement;

    //Check if target element is a button with the right class
    if(target.tagName === "BUTTON" && target.classList.contains("option-btn")){
        selectedAnswer = target.textContent || ""
    }
}

export function printHtml() {
    const htmlContent = createHtml(questionList, currentQuestionIndex);
    const container = document.querySelector<HTMLElement>('.card-container')
    if (container) {
        container.innerHTML = htmlContent;
    }

    const optionButton = document.querySelectorAll(".option-btn")
    optionButton.forEach((button) => {
        button.addEventListener("click", handleOptionClick)
    })

    const nextButton = document.getElementById('nextButton')
    if (nextButton) {
        nextButton.addEventListener('click', navigateQuestion)
        displayUserPoints()
    }
}
