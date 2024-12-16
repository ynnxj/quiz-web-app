
interface Questions {
    id: number;
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
        id: 1,
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
        id: 1,
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
    }    
];

function createHtml(questionList: Questions[]): string {
    let questionListHTML = '';

    questionList.forEach(question => {
        questionListHTML += `
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
        </div>`;
    });
    return questionListHTML;
}

function printHtml(){
    const htmlContent = createHtml(questionList);
    const container = document.querySelector<HTMLElement>('.card-container');
    if (container) {
        container.innerHTML = htmlContent;
    }
}
printHtml()
