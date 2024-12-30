
import { checkAnswer, getScore, resetUserScore, userScore} from './checkAnswers'
import { Questions, questionList } from './questions'
import { displayUserPoints } from './displayUserPoints'

let currentQuestionIndex:number = 0
let selectedAnswer:string = ''


export function createHtml(questionList: Questions[], index: number){
    const question = questionList[index];
    //Extract answer options from answer property
    const options = Object.keys(question.answer)
    .map((option) => `<li><button class="option-btn">${option}</button></li>`)
    //ensure no commas or seperator are included
    .join('');
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
    selectedAnswer = '';

    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex++;
        printHtml();
    } else {
        //U can make function here that calls the end card
        displayEndCard();
    }
}

//Handles click event for answer option buttons 
export function handleOptionClick(event: Event){

    //Get the target element of the click and cast as htmlelement 
    const target = event.target as HTMLElement;

    //Check if target element is a button with the right class
    if(target.tagName === 'BUTTON' && target.classList.contains('option-btn')){
        selectedAnswer = target.textContent || ''
    }
}

export function printHtml() {
    const htmlContent = createHtml(questionList, currentQuestionIndex);
    const container = document.querySelector<HTMLElement>('.card-container')
    if (container) {
        container.innerHTML = htmlContent;
    }

    const optionButton = document.querySelectorAll('.option-btn')
    optionButton.forEach((button) => {
        button.addEventListener('click', handleOptionClick)
    })

    const nextButton = document.getElementById('nextButton')
    if (nextButton) {
        nextButton.addEventListener('click', navigateQuestion)
        displayUserPoints()
    }
}

function displayEndCard() {
    const container = document.querySelector<HTMLElement>('.card-container');
    if (container) {
        container.innerHTML = `
            <div class="start-end-card">
                <img src="public/images/disney_first.webp" height="700" width="1400" alt="Big castle drawn with pencil on a old piece of paper with the Disney logo in the foreground.">
                <h2>Disney Quiz</h2>
                <section class="card-info">
                <div>
                    <p id="card-question-score">Questions</p>
                    <hr>
                    <p id="card-number-percent">20</p>
                </div>
                <div>
                    <p id="card-time-txt">Max Time</p>
                    <p id="card-time">10:00</p>
                </div>
                <div>
                    <p id="card-points-txt">Max Points</p>
                    <hr>
                    <p id="card-points">${userScore}/20</p>
                </div>
                <div>
                    <button class="restart-btn" id="restartButton">Play Again</button>
                </div>
                
          </section>
        </div>
        `;
        const restartButton = document.getElementById('restartButton');
        if (restartButton) {
            restartButton.addEventListener('click', restartQuiz);
        }
    }
}



function restartQuiz() {
    currentQuestionIndex = 0;
    selectedAnswer = '';
    resetUserScore();
    printHtml(); //Start over with the first question
}