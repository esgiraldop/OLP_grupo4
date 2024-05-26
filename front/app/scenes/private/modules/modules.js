import styles from './modules.css'
import { navigateTo } from '../../../Router'

export function modulesScene(params){
    let pageContent = ``
    let logic = async () =>{}

    if (params.get('langID')){
        const langID = params.get('langID')
        pageContent = `
        <div class=${styles['container']}>
            <h2 class=${styles['title']}>Bienvenido! Estos son los módulos que puedes estudiar</h2>
            <div id="mods-container" class=${styles['mods-container']}>
            </div>
        </div>
        `

        logic = async () =>{
            const $modsContainer = document.getElementById("mods-container")
            // const resp = await fetch(`http://localhost:3000/modules?courseId=${courseId}`)
            const resp = await fetch(`http://localhost:4000/api/priv/modules/${langID}`)
            const modArray = await resp.json()
            console.log(modArray);

            $modsContainer.innerHTML = `
            <button class="${styles['btn-new-module']}" id="createchalg">Create new module</button>
            <button class="${styles['btn-edit-module']}" id="createchalg">Edit modules</button>
                ${modArray.map(elem => {
                        return `
                        <button id=${elem.id} class=${styles['btn-challenge']} type="button">Go to challenges</button>
                        `
                        }).join('')
                }
            `
            const buttons  = document.getElementsByTagName('button')
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
