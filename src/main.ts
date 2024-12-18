import './styles/styles.scss'
import { createHtml } from './modules/createCard'
import { displayUserPoints } from './modules/displayUserPoints'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ""

createHtml()
displayUserPoints()
