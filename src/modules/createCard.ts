
import { checkAnswer, getScore, resetUserScore, userScore} from './checkAnswers'
import { Questions, questionList } from './questions'
import { displayUserPoints } from './displayUserPoints'
import { userTime, startTimer, stopTimer } from './timer'
import { handleQuestions } from './setUpQuestions'

let currentQuestionIndex:number = 0
let selectedAnswer:string = ''



// generates HTML for display questions + answer options
export function createHtml(questionList: Questions[], index: number){
    const question = questionList[index]
    //Extract answer options from answer property
    const options = Object.keys(question.answer)
    .map((option) => `<li><button class="option-btn">${option}</button></li>`)
    //ensure no commas or seperator are included
    .join('')
    return `
        <div class="question-container">
            <div class="question-image-container">
                <img src="${question.img.url}" alt="${question.img.alt}" class="questionImage">
                <div class="question-text">
                    <h2 id="question-${index}" aria-live="polite" tabindex="-1">${question.question}</h2>
                </div> 
            </div>
            <div class="options">
                 ${options}
            </div>
            <div class="navigation-buttons">
                <button class="next-btn" id="nextButton" disabled aria-disabled="true" aria-describedby="next-btn-disabled-description">Next</button>
                <p id="next-btn-disabled-description" class="sr-only">Choose an answer to unlock this button.</p>
            </div>
        </div>
    `
}


export function navigateQuestion() {
    const currentQuestion = questionList[currentQuestionIndex]
    
    //Validate the answer and update the score 
    if (selectedAnswer && checkAnswer(currentQuestion, selectedAnswer)) {
        getScore()
    }
    selectedAnswer = ''
    displayUserPoints() // update point display on every next button
    
    // Check and display the right answer in green.
    const correctAnswer = Object.keys(currentQuestion.answer).find(key => currentQuestion.answer[key])
    const optionButtons = document.querySelectorAll('.option-btn')
    optionButtons.forEach((button: Element) => {
        const btn = button as HTMLElement
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct') // Add class to show correct answer
        } else {
            btn.classList.remove('correct') // Remove class if answer is not correct
        }
    })

    // Disable next button after first click, while waiting for next question to render.
    const nextButton = document.getElementById('nextButton')
    if (nextButton) {
        nextButton.setAttribute('disabled', 'true') // Set disabled as default on next button
        nextButton.setAttribute('aria-disabled', 'true')
    }
    // Disable answer option buttons when clicked on next button, untill next question is rendered
    optionButtons.forEach((btn) => btn.setAttribute('disabled', 'true'))

    /**
     * The delay will give the user enough time to see wich answer is correct.
     */
    setTimeout(() => {
        if (currentQuestionIndex < questionList.length - 1) {
            currentQuestionIndex++
            printHtml()
        } else {
            stopTimer()
            displayEndCard()
        }
    }, 1500)
}

//Handles click event for answer option buttons 
export function handleOptionClick(event: Event) {

    //Get the target element of the click and cast as htmlelement 
    const target = event.target as HTMLElement

    //Check if target element is a button with the right class
    if (target.tagName === 'BUTTON' && target.classList.contains('option-btn')) {

        // adds Active class to option button
        const optionButtons = document.querySelectorAll('.option-btn')
        optionButtons.forEach(button => button.classList.remove('active'))
        target.classList.add('active')

        selectedAnswer = target.textContent || ''

        // removes Disabled attribute to next button
        const nextButton = document.getElementById('nextButton')
        if (nextButton) {
            nextButton.removeAttribute('disabled')
            nextButton.removeAttribute('aria-disabled')
            nextButton.removeAttribute('aria-describedby')
        }
    }
}

export function printHtml() {
    const htmlContent = createHtml(questionList, currentQuestionIndex)
    const container = document.querySelector<HTMLElement>('.card-container')
    if (container) {
        container.innerHTML = htmlContent
    }
    // Focus the question text for screenreaders.
    const questionText = document.getElementById(`question-${currentQuestionIndex}`)
    questionText?.focus()

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
    const container = document.querySelector<HTMLElement>('.card-container')
    if (container) {
        const minutes = Math.floor((userTime ?? 0) / 60)
        const seconds = (userTime ?? 0) % 60
        const formattedUserTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        // % counter
        const maxQuestions = 10
        const correctPercentage = ((userScore ?? 0)/ maxQuestions)* 100 // counts the % of correct answer 
        container.innerHTML = `
            <div class="start-end-card">
                <img src="images/disney_first.webp" height="700" width="1400" alt="Big castle drawn with pencil on a old piece of paper with the Disney logo in the foreground.">
                <h2>Disney Quiz</h2>
                <div class="card-info">
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
                </div>
            </div>
            <div class="end-button-box">
                <button class="restart-btn" id="restart-button">Play Again</button>
            </div>
        `
        const restartButton = document.getElementById('restart-button')
        if (restartButton) {
            restartButton.addEventListener('click', restartQuiz)
        }
    }
}


export function restartQuiz() {
    currentQuestionIndex = 0
    selectedAnswer = ''
    resetUserScore()
    startTimer()
    handleQuestions('restart') // Display second set of questions
    printHtml() //Start over with the first question
}