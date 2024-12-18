import { Questions } from "./questions";

export let userScore = 0

export function checkAnswer(question: Questions, selectedAnswer: string): boolean {
  const isCorrect = question.answer[selectedAnswer] || false;

  if(isCorrect){
    userScore++;
  }
  return isCorrect;
}

export function getScore(): number {
  console.log(userScore)
  return userScore;
}