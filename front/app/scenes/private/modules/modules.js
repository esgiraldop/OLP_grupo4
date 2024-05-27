import styles from './modules.css'
import { navigateTo } from '../../../Router'

export function modulesScene(params){
    let pageContent = ``
    let logic = async () =>{}

    if (params.get('langID')){
        const langID = params.get('langID')
        pageContent = `
        <div class=${styles['container']}>
        <div id="mods-container">
        <div id="loader" class="${styles.loader}"></div>
        </div>
        </div>
        </div>
        `

        logic = async () =>{
            const $modsContainer = document.getElementById("mods-container")
            // const resp = await fetch(`http://localhost:3000/modules?courseId=${courseId}`)
            const resp = await fetch(`http://localhost:4000/api/priv/modules/${langID}`)
            const modArray = await resp.json()

            document.getElementById('loader').classList.add(styles["hide-loader"])

            //Pinto en el DOM
            $modsContainer.innerHTML = `
            <h2 class=${styles['title']}>Bienvenido! Estos son los módulos que puedes estudiar</h2>
            <button class="${styles['btn-new-module']}" id="createchalg">Create new module</button>
            <button class="${styles['btn-edit-module']}" id="createchalg">Edit modules</button>
            <div class="${styles["img-container"]}">
            <div class="section theory">Theory</div>
            <div class="section practice">Practice</div>
            <div class="module">1. Introduction to Javascript</div>
            <div class="challenge">Challenges module 1</div>
            <div class="module">2. Syntax and data types in JavaScript</div>
            <div class="challenge">Challenges module 2</div>
            <div class="module">3. Functions and objects in JavaScript</div>
            <div class="challenge">Challenges module 3</div>
            <div class="coming-soon">Coming soon</div>
            <div class="coming-soon">Challenges coming soon</div>
            <div class="coming-soon">Coming soon</div>
            <div class="coming-soon">Challenges coming soon</div>
                ${modArray.map(elem => {
                        return `
                        <img id=${elem.id} class=${styles['btn-challenge']} type="img"></img>
                        `}).join('')
                }
            `;
            //Adding an event listener to evey language
            const buttons  = document.getElementsByTagName('img')
            const buttonsArray = [...buttons]
            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    navigateTo(`/dashboard/learning-paths/languages/modules/challenges?modID=${$elem.id}`)
                })
            )
        }
    }

    return {pageContent, logic}
}
