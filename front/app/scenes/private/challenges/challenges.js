import styles from './challenges.css'
import { navigateTo } from '../../../Router'

export function challengesScene(params){
    let pageContent = ``
    let logic = async () =>{}

    if (params.get('modID')){
        const moduleID = params.get('modID')

        pageContent = `
        <div class=${styles['container']}>
            <h2 class=${styles['title']}>Bienvenido! Estos son los retos que puedes realizar</h2>
            <div id="chalgs-container" class=${styles['chalgs-container']}>
            </div>
        </div>
        `
        logic = async () =>{
            const $chalsContainer = document.getElementById("chalgs-container")
            const resp = await fetch(`http://localhost:4000/api/priv/challenges/${moduleID}`)
            const chalArray = await resp.json()
            console.log(chalArray);

            $chalsContainer.innerHTML = `
            <button class="${styles['btn-new-chalg']}" id="createchalg">Create new challenge</button>
            <button class="${styles['btn-edit-chalg']}" id="createchalg">Edit challenge</button>
                ${chalArray.map(elem => {
                        return `<div>${elem.title}</div>
                        <button id=${elem.id} class=${styles['btn-challenge']} type="button">Go to your challenge </button>
                        `
                        }).join('')
                }
            `
            const buttons  = document.getElementsByTagName('button')
            const buttonsArray = [...buttons]
            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    alert(`You clicked the challenge ${$elem.title}`)
                })
            )
        }
    }
    return {pageContent, logic}
}
