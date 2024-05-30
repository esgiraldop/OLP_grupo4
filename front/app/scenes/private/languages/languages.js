import styles from './languages.css'
import { navigateTo } from '../../../Router'

export function languagesScene(params) {
    let pageContent = ``
    let logic = async () => { }

    if (params.get('pathID')) {
        const routeID = params.get('pathID')
        pageContent = `
        <div class="${styles.container}">
            <div id="langs-container"></div>
            <div id="loader" class="${styles.loader}"></div>

        </div>
            <div class="${styles["star-field"]}">
            <div class="${styles.layer}"></div>
            <div class="${styles.layer}"></div>
            <div class="${styles.layer}"></div>
        </div>

        `

        logic = async () => {
            const $langsContainer = document.getElementById("langs-container")
            const resp = await fetch(`http://localhost:4000/api/priv/languages/${routeID}`)
            const langArray = await resp.json()

            document.getElementById('loader').classList.add(styles["hide-loader"])

            //Pinto en el DOM
            $langsContainer.innerHTML = `
            <h2 class="${styles.title}">Bienvenido a la sección de lenguajes</h2>
            <button class="${styles['btn-new-lang']}" id="createlang">Create new language</button>
            <button class="${styles['btn-edit-lang']}" id="editlang">Edit languages</button>
            <div class="${styles["img-container"]}">
                ${langArray.map(elem => `
                    <div id="lang-img"> 
                        <img id=${elem.id} class="${styles.img}" src="${elem.language_img}"></img>  
                    </div>
                `).join('')}
            </div>
            `;
            //Adding an event listener to evey language
            const buttons = document.querySelectorAll("div#lang-img>img");
            const buttonsArray = [...buttons]

            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', (e) =>
                    navigateTo(`/dashboard/learning-paths/languages/modules?langID=${e.target.id}`)))

            // Evento de crear new language
            const $buttonLang = document.getElementById("createlang");
            $buttonLang.addEventListener("click", () => {
                navigateTo(`/dashboard/learning-paths/languages/create?routeID=${routeID}`);
            });

            // Evento de editar languages
            // const $buttonEditLang = document.getElementById("editlang");
            // $buttonEditLang.addEventListener("click", () => {
            //     navigateTo(`/dashboard/learning-paths/languages/edit`);
            // });
        }
    };
    return {
        pageContent,
        logic
    }
}

