import styles from './modules.css'
import { navigateTo } from '../../../Router'

export function modulesScene(params){
    let pageContent = ``
    let logic = async () =>{}

    if (params.get('courseId')){
        const courseId = params.get('courseId')
        console.log("courseID:", courseId);
        pageContent = `
        <h2 class="titulo">Bienvenido! Estos son los módulos que puedes estudiar</h2>
        <p>Haz click en cualquiera de ellos para ir a los desafíos</p>
        <div id="mods-container">
        <!-- I should insert the modules cards here -->
        </div>
        `

        logic = async () =>{
            const $modsContainer = document.getElementById("mods-container")
            const resp = await fetch(`http://localhost:3000/modules?courseId=${courseId}`)
            const modArray = await resp.json()

            $modsContainer.innerHTML = `
                ${
                    modArray.map(elem => {
                        return `<div>${elem.name}</div>
                        <button id=${elem.id} class="btn-course">Ir al curso</button>`
                        }
                    ).join('')
                }
            `

            const bttns  = document.getElementsByTagName('button')
            const bttnsArray = [...bttns]
            bttnsArray.forEach(
                $elem => $elem.addEventListener('click', (e) => {
                    navigateTo(`/dashboard/learning-paths/languages/modules/challenges?id=${$elem.id}`)
                    console.log($elem.id)
                })
            )
        }
    }

    return {pageContent, logic}
}
