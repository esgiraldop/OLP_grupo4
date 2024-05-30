// Importing the navigateTo function from the Router
import { navigateTo } from "../../../Router";
// Importing the styles from the learning-paths.css file
import styles from "./learning-paths.css";

// Exporting the PathScene function
export function PathScene() {
  // Initializing pageContent with the HTML structure for the page
  let pageContent = `
    <div class="${styles.container}">
    <div id="paths-container"></div>
    <div id="loader" class="${styles.loader}"></div>
    </div>
    `;

  // Defining the logic function that will be executed when the page loads
  let logic = async () => {
    // Getting the paths-container element
    const $myContent = document.getElementById("paths-container");
    // Fetching the routes data from the API
    const response = await fetch("http://localhost:4000/api/priv/routes");
    // Parsing the response data to JSON
    const learningPaths = await response.json();

    // Adding the hide-loader class to the loader element
    document.getElementById('loader').classList.add(styles["hide-loader"])

    // Setting the innerHTML for the paths-container element
    $myContent.innerHTML = `
    <h2 id="h2-title" class="${styles.title}">Welcome! These are the learning paths you can choose</h2>
        <button class="${styles["btn-new-path"]}" id="createpath">Create new path</button>
        <button class="${styles["btn-edit-path"]}" id="editpath">Edit paths</button>
            <div class="${styles["card-container"]}">
            ${learningPaths
        .map((path) => `
                <div class="${styles.card}" id="route-card"> 
                    <button class=${styles["btn-course"]} id="${path.id}">Go to ${path.name}</button>
                </div>
                ` ).join("")}
            </div>
                 <div class="${styles["star-field"]}">
                 <div class="${styles.layer}"></div>
                 <div class="${styles.layer}"></div>
                 <div class="${styles.layer}"></div>
                `;

    // Getting all the button elements inside div#route-card
    const buttons = document.querySelectorAll("div#route-card>button");
    // Converting the buttons NodeList to an array
    const buttonsArray = [...buttons];
    // Adding a click event listener to each button in the buttonsArray
    buttonsArray.forEach(
      // For each button...
      ($singleButton) =>
        // Add a click event listener to the button
        $singleButton.addEventListener("click", (e) =>
          // When the button is clicked, navigate to the specified URL
          // Include the id of the button as a query parameter in the URL
          navigateTo(
            `/dashboard/learning-paths/languages?pathID=${e.target.id}`)));

    // Getting the createpath element
    const $buttonPath = document.getElementById("createpath");
    // Adding a click event listener to the createpath button
    $buttonPath.addEventListener("click", () => {
      // When the button is clicked, navigate to the create path page
      navigateTo(`/dashboard/learning-paths/create`);
    });
  };
  // Returning an object with pageContent and logic
  return {
    pageContent,
    logic,
  };
}
