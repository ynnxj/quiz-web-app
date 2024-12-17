
interface Questions {
    image: string;
    alt: string;
    question: string;
    optionAnswer1: string;
    optionAnswer2: string;
    optionAnswer3: string;
    answers: {
        answerOne: boolean;
        answerTwo: boolean;
        answerThree: boolean;
    };
}
const questionList: Questions[] = [
    {
        image: 'lionking.jpg',
        alt: 'Lion king',
        question: 'Who killed Mufasa?',
        optionAnswer1: 'Simba',
        optionAnswer2: 'Scar',
        optionAnswer3: 'Kiara',
        answers: {
            answerOne: false,
            answerTwo: true,
            answerThree: false,
        }
    },
    {
        image: 'lionking.jpg',
        alt: 'Lion king',
        question: 'Who killed simba?',
        optionAnswer1: 'Simba',
        optionAnswer2: 'Scar',
        optionAnswer3: 'Kiara',
        answers: {
            answerOne: false,
            answerTwo: true,
            answerThree: false,
        }
    },       
];

let currentQuestionIndex = 0;
function createHtml(questionList: Questions[], index: number){
    const question = questionList[index];
    return `
        <div class="questionContainer">
            <div class="questionImageContainer">
                <img src="${question.image}" alt="${question.alt}" class="questionImage">
            </div>
            <div class="questionText">
                <h2>${question.question}</h2>
                <ul class="options">
                    <button>${question.optionAnswer1}</button>
                    <button>${question.optionAnswer2}</button>
                    <button>${question.optionAnswer3}</button>
                </ul>
            </div>
            <div class="navigationButtons">
                <button class="nextBtn" id="nextButton" ${index === questionList.length - 1}">Next</button>
            </div>
        </div>
    `;
}
function navigateQuestion() {
    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex++;
        printHtml();
    } else {
        alert('You have reached the end of the questions!');
    }
}
function printHtml() {
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
printHtml();
