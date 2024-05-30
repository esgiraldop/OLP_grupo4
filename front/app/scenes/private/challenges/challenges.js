import styles from './challenges.css'
import { navigateTo } from '../../../Router'

export function challengesScene(params) {
    let pageContent = ``
    let logic = async () => { }

    if (params.get('modID')) {
        const modID = params.get('modID')
        pageContent = `
        <div class="${styles.container}">
            <div id="chalgs-container"></div>
            <div id="loader" class="${styles.loader}"></div>
        </div>

        `
        logic = async () => {
            const $chalsContainer = document.getElementById("chalgs-container")
            const resp = await fetch(`http://localhost:4000/api/priv/challenges/${modID}`)
            const chalArray = await resp.json()

            document.getElementById('loader').classList.add(styles["hide-loader"])

            $chalsContainer.innerHTML = `
            <h2 class=${styles['title']}>Here are the challenges you can take on</h2>
            <button class="${styles['btn-new-chalg']}" id="createchalg">Create new challenge</button>
            <button class="${styles['btn-edit-chalg']}" id="editchalg">Edit challenge</button>
            <div class="${styles["btn-container"]}">
                ${chalArray.map(elem => {
                return `
                        <button id=${elem.id} class=${styles['btn-challenge']} type="button">${elem.id}</button>
                        `
            }).join('')
                }
            `
            const buttons = document.getElementsByClassName(`${styles['btn-challenge']}`)
            const buttonsArray = [...buttons]
            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    alert(`You clicked the challenge ${$elem.title}`)
                })
            )
            // Evento de crear new module
            const $buttonChalg = document.getElementById("createchalg");
            $buttonChalg.addEventListener("click", () => {
                navigateTo(
                    `/dashboard/learning-paths/languages/modules/challenges/create?modID=${modID}`
                );
            });  
        }
    }
    return { pageContent, logic }
}
