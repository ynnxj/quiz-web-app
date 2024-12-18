import { userScore } from "./checkAnswers";

const userPoints: HTMLElement | null = document.querySelector('#points-btn')

if (userPoints) {
    userPoints.textContent = `${userScore}pts`
}