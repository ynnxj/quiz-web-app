
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
