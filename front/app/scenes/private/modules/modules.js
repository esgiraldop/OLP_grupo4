// Importing the styles from the modules.css file
import styles from "./modules.css";
// Importing the navigateTo function from the Router
import { navigateTo } from "../../../Router";

// Exporting the modulesScene function which takes params as an argument
export function modulesScene(params) {
    // Initializing pageContent as an empty string
    let pageContent = ``;
    // Initializing logic as an async function
    let logic = async () => { };

    // Checking if langID exists in params
    if (params.get("langID")) {
        // Getting langID from params
        const langID = params.get("langID");
        // Setting the HTML content for pageContent
        pageContent = `
        <div class="${styles.container}">
            <div id="mods-container">
            <div id="loader" class="${styles.loader}"></div>
        </div>
            <div class="${styles["star-field"]}">
            <div class="${styles.layer}"></div>
            <div class="${styles.layer}"></div>
            <div class="${styles.layer}"></div>
        </div>
        `;

        // Defining the logic function
        logic = async () => {
            // Getting the mods-container element
            const $modsContainer = document.getElementById("mods-container");
            // Fetching the modules data from the API
            const resp = await fetch(`http://localhost:4000/api/priv/modules/${langID}`);
            // Parsing the response data to JSON
            const modArray = await resp.json();

            // Adding the hide-loader class to the loader element
            document.getElementById("loader").classList.add(styles["hide-loader"]);

            // Setting the innerHTML for the mods-container element
            $modsContainer.innerHTML = `
        <div class="${styles["img-container"]}">
            <h2 class=${styles["title"]
                }>These are the modules you can study</h2>
            <div class=${styles["section"]}>Theory</div>
            <div class=${styles["section"]}>Practice</div>
            ${modArray.map((elem, index) => `
                <div class=${styles["module"]}>${index + 1}. ${elem.name}</div>
                <div id="challenge${index + 1}" class=${styles["challenge"]}></div>`
                    ).join("")}
            <div class=${styles["coming-soon"]}>Coming soon...</div>
            <div class=${styles["coming-soon"]}>Challenges coming soon...</div>
            <div class=${styles["coming-soon"]}>Coming soon...</div>
            <div class=${styles["coming-soon"]}>Challenges coming soon...</div>
            <button class="${styles["btn-edit-module"]
                }" id="editmodule">Edit modules</button>
            <button class="${styles["btn-new-module"]
                }" id="createmodule">Create new module</button>
        </div>
        `;

            // Adding the server elements to the challenge containers
            modArray.forEach((elem, index) => {
                const challengeContainer = document.getElementById(`challenge${index + 1}`);
                if (challengeContainer) {
                    challengeContainer.innerHTML = `
                    <div class="${styles["img-challenge-container"]}">
                        <div id=${elem.id} class="${styles["img-challenge"]}"></div>
                        <p class="${styles["hover-text"]}">Go to challenge</p>
                    </div>
                    `;
                }
            });
            // Adding an event listener to every language
            const buttons = document.getElementsByClassName(styles["img-challenge"]);
            const buttonsArray = [...buttons];
            buttonsArray.forEach(($elem) =>
                $elem.addEventListener("click", () => {
                    navigateTo(
                        `/dashboard/learning-paths/languages/modules/challenges?modID=${$elem.id}`
                    );
                })
            );
            // Event to create a new module
            const $buttonMod = document.getElementById("createmodule");
            $buttonMod.addEventListener("click", () => {
                navigateTo(
                    `/dashboard/learning-paths/languages/modules/create?langID=${langID}`
                );
            });
        };
    }

    // Returning an object with pageContent and logic
    return { pageContent, logic };
}
