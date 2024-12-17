import { Questions } from "./questions";

import { questionList } from "./questions";
let currentQuestionIndex = 0;
export function createHtml(questionList: Questions[], index: number){
    const question = questionList[index];
    return `
        <div class="questionContainer">
            <div class="questionImageContainer">
                <img src="${question.img.url}" alt="${question.img.alt}" class="questionImage">
            </div>
            <div class="questionText">
                <h2>${question.question}</h2>
            <ul class="options">
                <li><button>${Object.keys(question.answer)[0]}</button></li>
                <li><button>${Object.keys(question.answer)[1]}</button></li>
                <li><button>${Object.keys(question.answer)[2]}</button></li>
            </ul>
            </div>
            <div class="navigationButtons">
                <button class="nextBtn" id="nextButton" ${index === questionList.length - 1}">Next</button>
            </div>
        </div>
    `;
}
export function navigateQuestion() {
    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex++;
        printHtml();
    } else {
        alert('You have reached the end of the questions!');
    }
}
export function printHtml() {
    const htmlContent = createHtml(questionList, currentQuestionIndex);
    const container = document.querySelector<HTMLElement>('.card-container');
    if (container) {
        container.innerHTML = htmlContent;
    }
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', navigateQuestion);
    }
}
printHtml()