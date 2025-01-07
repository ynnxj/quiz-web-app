import { userScore } from './checkAnswers'

const userPoints: HTMLElement | null = document.querySelector('#points-counter')

export const displayUserPoints = () => {
    if (userPoints !== null) {
        userPoints.textContent = `${userScore}\n \n points`
    }
}