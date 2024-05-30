// Importing the styles from the languages.css file
import styles from './languages.css'

// Importing the navigateTo function from the Router
import { navigateTo } from '../../../Router'

// Exporting the languagesScene function which takes params as an argument
export function languagesScene(params) {
    // Initializing pageContent as an empty string
    let pageContent = ``
    // Initializing logic as an async function
    let logic = async () => { }

    // Checking if pathID exists in params
    if (params.get('pathID')) {
        // Getting routeID from params
        const routeID = params.get('pathID')
        // Setting the HTML content for pageContent
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

        // Defining the logic function
        logic = async () => {
            // Getting the langs-container element
            const $langsContainer = document.getElementById("langs-container")
            // Fetching the languages data from the API
            const resp = await fetch(`http://localhost:4000/api/priv/languages/${routeID}`)
            // Parsing the response data to JSON
            const langArray = await resp.json()

            // Adding the hide-loader class to the loader element
            document.getElementById('loader').classList.add(styles["hide-loader"])

            // Setting the innerHTML for the langs-container element
            $langsContainer.innerHTML = `
            <h2 class="${styles.title}">Welcome to languages section</h2>
            <button class="${styles['btn-new-lang']}" id="createlang">Create new language</button>
            <button class="${styles['btn-edit-lang']}" id="editlang">Edit languages</button>
            <div class="${styles["img-container"]}">
                ${langArray.map(elem => `
                    <div id="lang-img" class="${styles['img-box']}"> 
                        <img id=${elem.id} class="${styles.img}" src="${elem.language_img}"></img>  
                    </div>
                `).join('')}
            </div>
            `;

            // Getting all the img elements inside div#lang-img
            const buttons = document.querySelectorAll("div#lang-img>img");
            // Converting the buttons NodeList to an array
            const buttonsArray = [...buttons]

            // Adding a click event listener to each button in the buttonsArray
            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', (e) =>
                    navigateTo(`/dashboard/learning-paths/languages/modules?langID=${e.target.id}`)))

            // Getting the createlang element
            const $buttonLang = document.getElementById("createlang");
            // Adding a click event listener to the createlang button
            $buttonLang.addEventListener("click", () => {
                // Navigating to the create language page
                navigateTo(`/dashboard/learning-paths/languages/create?routeID=${routeID}`);
            });

            // The following code is commented out and not being used
            // Evento de editar languages
            // const $buttonEditLang = document.getElementById("editlang");
            // $buttonEditLang.addEventListener("click", () => {
            //     navigateTo(`/dashboard/learning-paths/languages/edit`);
            // });
        }
    };
    // Returning an object with pageContent and logic
    return {
        pageContent,
        logic
    }
}
