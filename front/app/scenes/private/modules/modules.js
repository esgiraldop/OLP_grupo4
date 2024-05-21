import styles from './modules.css'
import { navigateTo } from '../../../Router'

export function modulesScene(params){
    let pageContent = ``
    let logic = async () =>{}

    if (params.get('routeID')){
        const routeID = params.get('routeID')

        pageContent = `
        <h2 class="titulo">Bienvenido! Estos son los módulos que puedes estudiar</h2>
        <p>Haz click en cualquiera de ellos para ir a los desafíos</p>
        <div id="mods-container">
        <!-- I should insert the modules cards here -->
        </div>
        `

        logic = async () =>{
            const $modsContainer = document.getElementById("mods-container")
            const resp = await fetch(`http://localhost:3000/modules?id=${routeID}`)
            const modArray = await resp.json()

            $modsContainer.innerHTML = `
                ${
                    modArray.map(elem => {
                        return `<div>${elem.title}</div>
                        <button id=${elem.id} class="btn-${elem.id}">Click me</button>`
                        }
                    ).join('')
                }
            `

            const bttns  = document.getElementsByTagName('button')
            const bttnsArray = [...bttns]
            bttnsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    navigateTo(`/dashboard/learning-paths/languages/modules/challenges?routeID=${$elem.id}`)
                })
            )
        }
    }

    return {pageContent, logic}
}
