
import { checkAnswer, getScore, resetUserScore, userScore} from './checkAnswers'
import { Questions, questionList } from './questions'
import { displayUserPoints } from './displayUserPoints'
import { userTime, startTimer, stopTimer } from './timer'
import { handleQuestions } from './setUpQuestions'

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
    displayUserPoints(); // update point display on every next button
    setTimeout(() => {
        if (currentQuestionIndex < questionList.length - 1) {
            currentQuestionIndex++;
            printHtml();
        } else {
            //U can make function here that calls the end card
            stopTimer()
            displayEndCard();
        }
    }, 1500)
}

//Handles click event for answer option buttons 
export function handleOptionClick(event: Event){

    //Get the target element of the click and cast as htmlelement 
    const target = event.target as HTMLElement;

    //Check if target element is a button with the right class
    if(target.tagName === 'BUTTON' && target.classList.contains('option-btn')){

        // adds Active class to option button
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(button => button.classList.remove('active'));
        target.classList.add('active');

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

/**
 * This function will print the end card showing the users final score, time and
 * a restart button.
 */
export function displayEndCard() {
    const container = document.querySelector<HTMLElement>('.card-container');
    if (container) {
        const minutes = Math.floor((userTime ?? 0) / 60)
        const seconds = (userTime ?? 0) % 60
        const formattedUserTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        // % counter
        const maxQuestions = 10;
        const correctPercentage = ((userScore ?? 0)/ maxQuestions)* 100; // counts the % of correct answer 
        container.innerHTML = `
            <div class="start-end-card">
                <img src="public/images/disney_first.webp" height="700" width="1400" alt="Big castle drawn with pencil on a old piece of paper with the Disney logo in the foreground.">
                <h2>Disney Quiz</h2>
                <section class="card-info">
                    <div>
                        <p id="card-question-score">Your Score</p>
                        <hr>
                        <p id="card-number-percent">${correctPercentage.toFixed(2)}%</p>
                    </div>
                    <div>
                        <p id="card-time-txt">Your Time</p>
                        <p id="card-time">${formattedUserTime}</p>
                    </div>
                    <div>
                        <p id="card-points-txt">Your Points</p>
                        <hr>
                        <p id="card-points">${userScore}/10</p>
                    </div>
                    <div>
                        <button class="restart-btn" id="restart-button">Play Again</button>
                    </div>
                </section>
            </div>
        `;
        const restartButton = document.getElementById('restart-button');
        if (restartButton) {
            restartButton.addEventListener('click', restartQuiz);
        }
    }
}

export function restartQuiz() {
    currentQuestionIndex = 0;
    selectedAnswer = '';
    resetUserScore();
    startTimer()
    handleQuestions('restart'); // Display second set of questions
    printHtml(); //Start over with the first question
}