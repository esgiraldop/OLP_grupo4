import styles from './modules.css'
import { navigateTo } from '../../../Router'

export function modulesScene(params){
    let pageContent = ``
    let logic = async () =>{}

    if (params.get('courseId')){
        const courseId = params.get('courseId')
        console.log("courseID:", courseId);
        pageContent = `
        <main class=${styles['main']}>
            <h2 class=${styles['title']}>Bienvenido! Estos son los módulos que puedes estudiar</h2>
            <p>Haz click en cualquiera de ellos para ir a los desafíos</p>
            <div id="mods-container" class=${styles['mods-container']}>
            <!-- I should insert the modules cards here -->
            </div>
        </main>
        `

        logic = async () =>{
            const $modsContainer = document.getElementById("mods-container")
            const resp = await fetch(`http://localhost:3000/modules?courseId=${courseId}`)
            const modArray = await resp.json()

            $modsContainer.innerHTML = `
                ${
                    modArray.map(elem => {
                        return `<section class=${styles['mod-card']}>
                                    <div>${elem.name} </div>
                                    <button id=${elem.id} class=${styles['btn-course']} type="button">Ir al curso</button>
                                </section>`
                        }
                    ).join('')
                }
            `

            const bttns  = document.getElementsByTagName('button')
            const bttnsArray = [...bttns]
            bttnsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    alert("ir al curso")
                    //navigateTo(`/dashboard/learning-paths/languages/modules/challenges?routeID=${$elem.id}`)
                })
            )
        }
    }

    return {pageContent, logic}
}
