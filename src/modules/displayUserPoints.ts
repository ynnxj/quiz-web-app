import { userScore } from "./checkAnswers"

const userPoints: HTMLElement | null = document.querySelector('#points-btn')

export const displayUserPoints = () => {
    if (userPoints !== null) {
        userPoints.textContent = `${userScore}\n \n points`
    }
}

