import styles from './challenges.css'
import { navigateTo } from '../../../Router'

export function challengesScene(params) {
    let pageContent = ``
    let logic = async () => { }

    if (params.get('modID')) {
        const moduleID = params.get('modID')
        pageContent = `
        <div class="${styles.container}">
            <div id="chalgs-container"></div>
            <div id="loader" class="${styles.loader}"></div>
        </div>

        `
        logic = async () => {
            const $chalsContainer = document.getElementById("chalgs-container")
            const resp = await fetch(`http://localhost:4000/api/priv/challenges/${moduleID}`)
            const chalArray = await resp.json()

            document.getElementById('loader').classList.add(styles["hide-loader"])

            $chalsContainer.innerHTML = `
            <h2 class=${styles['title']}>Bienvenido! Estos son los retos que puedes realizar</h2>
            <button class="${styles['btn-new-chalg']}" id="createchalg">Create new challenge</button>
            <button class="${styles['btn-edit-chalg']}" id="createchalg">Edit challenge</button>
            <div class="${styles["btn-container"]}">
                ${chalArray.map(elem => {
                return `
                        <button id=${elem.id} class=${styles['btn-challenge']} type="button"></button>
                        `
            }).join('')
                }
            `
            const buttons = document.getElementsByTagName('button')
            const buttonsArray = [...buttons]
            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    alert(`You clicked the challenge ${$elem.title}`)
                })
            )
        }
    }
    return { pageContent, logic }
}
