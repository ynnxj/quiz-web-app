const userAnswers = string[] = []

function checkAnswers(/*quiz bank*/, userAnswers: string[]): void {
  let score = 0;

  /*quiz bank*/.forEach((question, index) => {
    const userAnswer = userAnswers[index]
    const isCorrect = question.answer === userAnswer
    console.log(`right answer ${question.answer} your answer ${userAnswer}`)

    if(isCorrect){
      score++
    }
  })
}

checkAnswers(/*quiz bank*/userAnswers)