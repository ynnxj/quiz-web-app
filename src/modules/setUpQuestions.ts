import { Questions, questionList } from './questions'
import { printHtml, restartQuiz } from './createCard'

// Arrays to store questions
let firstQuestions: Questions[] = []
let remainingQuestions: Questions[] = []

// Boolean to determine if the next set is the first or remaining questions
let isFirstSetNext = true

/**
 * Split a total of 20 questions
 * into two sets of 10 questions.
 */
export function splitQuestions() {
    firstQuestions = questionList.slice(0, 10)
    remainingQuestions = questionList.slice(10, 20)
}

/**
 * Handle set of questions.
 * If a set of questions already have been displayed,
 * display the next set of questions.
 * @param set
 */
export function handleQuestions(set: 'start' | 'restart') {
    if (firstQuestions.length === 0 || remainingQuestions.length === 0) {
        splitQuestions()
    }

    if (set === 'start') {
        questionList.length = 0
        questionList.push(...firstQuestions)
        isFirstSetNext = false
        
    } else if (set === 'restart') {
        questionList.length = 0

        if (isFirstSetNext) {
            questionList.push(...firstQuestions)
        } else {
            questionList.push(...remainingQuestions)
        }
        isFirstSetNext = false
    }
    
    printHtml()
}

/**
 * EventListeners for start and restart buttons.
 * If start button is clicked, display first set.
 * If restart button is clicked, display second set
 * and restart quiz.
 */
export function setupEventListeners() {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button') 

    if (startButton) {
        startButton.addEventListener('click', () => {
            handleQuestions('start')
        });
    }

    if (restartButton) {
        restartButton.addEventListener('click', () => {
            handleQuestions('restart')
            restartQuiz()
        })
    }
}
