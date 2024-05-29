import styles from './modules.css'
import { navigateTo } from '../../../Router'

export function modulesScene(params) {
    let pageContent = ``
    let logic = async () => { }

    if (params.get('langID')) {
        const langID = params.get('langID')
        pageContent = `
        <div class="${styles.container}">
            <div id="mods-container">
            <div id="loader" class="${styles.loader}"></div>
        </div>
            <div class="${styles["star-field"]}">
            <div class="${styles.layer}"></div>
            <div class="${styles.layer}"></div>
            <div class="${styles.layer}"></div>
        </div>
        `

        logic = async () => {
            const $modsContainer = document.getElementById("mods-container")
            // const resp = await fetch(`http://localhost:3000/modules?courseId=${courseId}`)
            const resp = await fetch(`http://localhost:4000/api/priv/modules/${langID}`)
            const modArray = await resp.json()

            document.getElementById('loader').classList.add(styles["hide-loader"])

            // Pinto en el DOM
            $modsContainer.innerHTML = `
            <div class="${styles["img-container"]}">
            <h2 class=${styles['title']}>These are the modules you can study</h2>
            <div class=${styles['section']}>Theory</div>
            <div class=${styles['section']}>Practice</div>
            <div class=${styles['module']}>1. Introduction to Javascript</div>
            <div id="challenge1" class=${styles['challenge']}></div>
            <div class=${styles['module']}>2. Syntax and data types in JavaScript</div>
            <div id="challenge2" class=${styles['challenge']}></div>
            <div class=${styles['module']}>3. Functions and objects in JavaScript</div>
            <div id="challenge3" class=${styles['challenge']}></div>
            <div class=${styles['coming-soon']}>Coming soon...</div>
            <div class=${styles['coming-soon']}>Challenges coming soon...</div>
            <div class=${styles['coming-soon']}>Coming soon...</div>
            <div class=${styles['coming-soon']}>Challenges coming soon...</div>
            <button class="${styles['btn-edit-module']}" id="createchalg">Edit modules</button>
            <button class="${styles['btn-new-module']}" id="createchalg">Create new module</button>
                </div>
                `;

            // Agrego los elementos del servidor a los contenedores de desafíos
            modArray.forEach((elem, index) => {
                const challengeContainer = document.getElementById(`challenge${index + 1}`);
                if (challengeContainer) {
                    challengeContainer.innerHTML = `
                    <div class="${styles['img-challenge-container']}">
                        <div id=${elem.id} class="${styles['img-challenge']}"></div>
                        <p class="${styles['hover-text']}">Go to challenge</p>
                    </div>
                    
        `;
                }
            });
            //Adding an event listener to evey language
            const buttons = document.getElementsByClassName(styles['img-challenge'])
            const buttonsArray = [...buttons]
            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    navigateTo(`/dashboard/learning-paths/languages/modules/challenges?modID=${$elem.id}`)
                })
            )
        }
    }

    return { pageContent, logic }
}
