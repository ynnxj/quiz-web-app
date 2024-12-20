import { Questions } from "./questions"

//Declare globar variable to track users's score
export let userScore = 0;

//Function to check if the selected answer is correct
export function checkAnswer(question: Questions, selectedAnswer: string): boolean {
  //Checks if selected answer exists
  const isCorrect = question.answer[selectedAnswer] || false

  //if the answer is correct incriment score
  if(isCorrect){
    userScore++
  }
  //return whether the answer was correct or not
  return isCorrect
}

export function getScore(): number {
  console.log(userScore)
  //return the users score
  return userScore
}

//When the user has picked the right answer and then choose another the point is til there, pusha score when next button is clicked 