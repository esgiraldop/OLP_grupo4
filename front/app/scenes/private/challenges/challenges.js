// Importing the styles from the challenges.css file
import styles from './challenges.css'

// Importing the navigateTo function from the Router
import { navigateTo } from '../../../Router'

// Exporting the challengesScene function which takes params as an argument
export function challengesScene(params) {
    // Initializing pageContent as an empty string
    let pageContent = ``
    // Initializing logic as an async function
    let logic = async () => { }

    // Checking if modID exists in params
    if (params.get('modID')) {
        // Getting modID from params
        const modID = params.get('modID')
        // Setting the HTML content for pageContent
        pageContent = `
        <div class="${styles.container}">
            <div id="chalgs-container"></div>
            <div id="loader" class="${styles.loader}"></div>
        </div>

        `
        // Defining the logic function
        logic = async () => {
            // Getting the chalgs-container element
            const $chalsContainer = document.getElementById("chalgs-container")
            // Fetching the challenges data from the API
            const resp = await fetch(`http://localhost:4000/api/priv/challenges/${modID}`)
            // Parsing the response data to JSON
            const chalArray = await resp.json()

            // Adding the hide-loader class to the loader element
            document.getElementById('loader').classList.add(styles["hide-loader"])

            // Setting the innerHTML for the chalgs-container element
            $chalsContainer.innerHTML = `
            <h2 class=${styles['title']}>Here are the challenges you can take on</h2>
            <button class="${styles['btn-new-chalg']}" id="createchalg">Create new challenge</button>
            <button class="${styles['btn-edit-chalg']}" id="editchalg">Edit challenge</button>
            <div class="${styles["btn-container"]}">
                ${chalArray.map(elem => {
                return `
                        <button id=${elem.id} class=${styles['btn-challenge']} type="button">${elem.id}</button>
                        `
            }).join('')
                }
            `
            // Getting all the elements with the btn-challenge class
            const buttons = document.getElementsByClassName(`${styles['btn-challenge']}`)
            // Converting the buttons HTMLCollection to an array
            const buttonsArray = [...buttons]
            // Adding a click event listener to each button in the buttonsArray
            buttonsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    alert(`You clicked the challenge ${$elem.title}`)
                })
            )
            // Getting the createchalg element
            const $buttonChalg = document.getElementById("createchalg");
            // Adding a click event listener to the createchalg button
            $buttonChalg.addEventListener("click", () => {
                // Navigating to the create challenge page
                navigateTo(
                    `/dashboard/learning-paths/languages/modules/challenges/create?modID=${modID}`
                );
            });  
        }
    }
    // Returning an object with pageContent and logic
    return { pageContent, logic }
}
