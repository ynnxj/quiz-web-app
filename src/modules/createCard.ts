
import { checkAnswer, getScore, userScore } from "./checkAnswers";
import { Questions, questionList } from "./questions";

let currentQuestionIndex:number = 0;
export function createHtml(questionList: Questions[], index: number){
    const question = questionList[index];
    const options = Object.keys(question.answer)
    .map((option) => `<li><button class="option-btn">${option}</button></li>`)
    .join("")
    return `
        <div class="questionContainer">
            <div class="questionImageContainer">
                <img src="${question.img.url}" alt="${question.img.alt}" class="questionImage">
            </div>
            <div class="questionText">
                <h2>${question.question}</h2>
            <ul class="options">
                 ${options}
            </ul>
            </div>
            <div class="navigationButtons">
                <button class="next-btn" id="nextButton" ${index === questionList.length - 1}">Next</button>
            </div>
        </div>
    `;
}
export function navigateQuestion() {
    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex++;
        printHtml();
    } else {
        alert(`You have reached the end of the questions! \n\n Your score is: ${userScore}`);
    }
}

export function handleOptionClick(event: Event){
    const target = event.target as HTMLElement;
    if(target.tagName === "BUTTON" && target.classList.contains("option-btn")){
        const selectedAnswer = target.textContent || "";
        const currentQuestion = questionList[currentQuestionIndex];
        const isCorrect = checkAnswer(currentQuestion, selectedAnswer);

        if(isCorrect) {
            getScore()
        } 
    }
}

export function printHtml() {
    const htmlContent = createHtml(questionList, currentQuestionIndex);
    const container = document.querySelector<HTMLElement>('.card-container');
    if (container) {
        container.innerHTML = htmlContent;
    }

    const optionButton = document.querySelectorAll(".option-btn");
    optionButton.forEach((button) => {
        button.addEventListener("click", handleOptionClick)
    })

    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', navigateQuestion);
    }
}
printHtml()