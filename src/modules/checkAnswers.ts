import { Questions } from './questions'

export let userScore = 0

export function checkAnswer(question: Questions, selectedAnswer: string): boolean {
  //Checks if selected answer exists
  const isCorrect = question.answer[selectedAnswer] || false

  //if the answer is correct incriment score
  if (isCorrect) {
    userScore++
  }
  //return whether the answer was correct or not
  return isCorrect
}

export function getScore(): number {
  //return the users score
  return userScore
}

// function that sets the score to 0
export function resetUserScore() {
  userScore = 0
}