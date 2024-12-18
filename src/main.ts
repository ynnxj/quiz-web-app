import './styles/styles.scss'
import { createHtml } from './modules/createCard'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ""

createHtml()

