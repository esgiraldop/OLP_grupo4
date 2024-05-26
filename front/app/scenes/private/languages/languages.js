import styles from './languages.css'
import { navigateTo } from '../../../Router'

export function languagesScene(params){
    let pageContent = ``
    let logic = async () =>{}

    if (params.get('pathID')){
        const routeID = params.get('pathID')

        pageContent = `
        <div class="${styles.container}">
        <h2 class="${styles.title}">Bienvenido! Estos son los lenguajes que puedes estudiar</h2>
        <div id="langs-container"></div>
        </div>
        `
        logic = async () =>{
            const $langsContainer = document.getElementById("langs-container")
            // const resp = await fetch(`http://localhost:3000/learningPaths?id=${routeID}`)
            // const resp = await fetch(`http://localhost:4000/api/priv/routes?id=${routeID}`)
            // const route = await resp.json()
            // Based on the id, query to the database the languages
                // const resp2 = await fetch(`http://localhost:3000/courses?learningPathId=${routeID}`)
            const resp2 = await fetch(`http://localhost:4000/api/priv/languages/${routeID}`)

            const langArray = await resp2.json()
            console.log(langArray);

            //Pinto en el DOM
            $langsContainer.innerHTML = `
            <button class="${styles['btn-new-path']}" id="createpath">Create new language</button>
            <button class="${styles['btn-edit-path']}" id="createpath">Edit languages</button>
                ${langArray.map(elem => `
                        <img id=${elem.id} class="${styles.img}" src="${elem.language_img}"></img>  
                        `).join('')}
                        `;
            //Adding an event listener to evey language
            const buttons = document.getElementsByTagName('img');
            const buttonsArray = [...buttons]
            
            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', (e) => 
                    navigateTo(`/dashboard/learning-paths/languages/modules?langID=${e.target.id}`)))
        }
    };
    return {
        pageContent,
        logic
    }
}

