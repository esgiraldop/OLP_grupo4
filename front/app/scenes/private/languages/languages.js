import styles from './languages.css'
import { navigateTo } from '../../../Router'

export function languagesScene(params){

    let pageContent = ``
    let logic = async () =>{}

    if (params.get('routeID')){
        const routeID = params.get('routeID')

        pageContent = `
        <h2 class="titulo">Bienvenido! Estos son los lenguajes que puedes estudiar</h2>
        <p>Haz click en cualquiera de ellos para ir a los módulos</p>
        <div id="langs-container">
        <!-- I should insert the languages cards here -->
        </div>
        `

        logic = async () =>{
            const $langsContainer = document.getElementById("langs-container")
            console.log("$langsContainer: ", $langsContainer)
            // Based on the id, query to the database the languages
            console.log("routeID: ", routeID)
            const resp = await fetch(`http://localhost:3000/learningPaths?id=${routeID}`)
            console.log("resp: ", resp)
            const route = await resp.json()
            console.log("route: ", route)
            // Based on the id, query to the database the languages
                const resp2 = await fetch(`http://localhost:3000/courses?learningPathId=${routeID}`)

            const langArray = await resp2.json()
            console.log("langArray: ", langArray);
            // Inserting the languages in the html
            $langsContainer.innerHTML = `
                ${
                    langArray.map(elem => {
                        console.log("elemnet:",elem)
                        return `<div>${elem.title}</div>
                        <button id=${elem.courseId} type="button" class="btn-module">Ir a Retos</button>`
                        }
                    ).join('')
                }
            `

            //Adding an event listener to evey language
            const bttns  = document.getElementsByClassName('btn-module')
            console.log("BTTNS:",bttns);
            const bttnsArray = [...bttns]
            console.log("bttnsarray:",bttnsArray);
            bttnsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    console.log($elem.id);
                    navigateTo(`/dashboard/learning-paths/languages/modules?courseId=${$elem.id}`)
                })
            )
        }
    }

    return {pageContent, logic}

}

