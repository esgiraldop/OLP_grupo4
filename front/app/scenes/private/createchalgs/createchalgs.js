// Importing Quill, a powerful, rich text editor
import Quill from "quill"
// Importing the styles for the Quill snow theme
import 'quill/dist/quill.snow.css';
// Importing the ToolbarContainer component
import { ToolbarContainer } from "./components/toolbar-container";
// Importing the styles from the create-chalgs.css file
import styles from './create-chalgs.css'
// Importing the fetchApi helper function
import { fetchApi } from "../../../helpers/fetch-api";
// Importing the navigateTo function from the Router
import { navigateTo } from "../../../Router";

// Exporting the CreateChalgScene function which takes params as an argument
export function CreateChalgScene(params) {
    // Initializing the HTML container for the editor and a button to save the content
    const editorContent = `<div id="editor" class="${styles.editor}"></div>`
    // Initializing the HTML content for the page
    const pageContent = `
    <h1 class="${styles["title"]}">Crear un nuevo reto</h1>
    <form class="${styles["create-chalg-form"]}" id="create-chalg-form">
        <div class="${styles["chalg_title-container"]}">
            <label for="title">Título</label>
            <input type="text" id="title" name="title" class="${styles["chalg_title-input"]}">
        </div>
        <div class="${styles["chalg_description-container"]}">
            <label>Descripción</label>
            <textarea id="description" name="description" class="${styles["chalg_description-input"]}"></textarea>
        </div>
        
        <div class="${styles["description-container"]}">
            <label>Descripción del modulo</label>
        </div>
        <div class="${styles["action-buttons"]}">
            <button type="submit">Publicar</button>
        </div>
            ${ToolbarContainer()}
            ${editorContent}
    </form>
            `;

    // Function to persist the content in local storage
    const persistContent = (quill) => {
        const content = quill.getContents();  // Get the content as Delta
        localStorage.setItem('quillContent', JSON.stringify(content));
    }

    // Logic to initialize and configure Quill
    const logic = () => {
        // Initialize Quill on the #editor element
        const quill = new Quill('#editor', {
            modules: {
                toolbar: '#toolbar-container',
            },
            placeholder: 'Crea tu mejor reto aquí...',
            theme: 'snow',
        });
        
        // Event listener to handle the publication of the content, i.e., send to the database.
        document.querySelector('#create-chalg-form')
            .addEventListener('submit', async (e) => {
                // Prevent the form from being submitted
                e.preventDefault();
                // Validate that the title and description are not empty
                const titleValue = document.querySelector('#title').value;
                const descriptionValue = document.querySelector('#description').value;
                if (!titleValue) {
                    alert('Por favor, ingresa un título para tu reto');
                    return;
                }
                if (!descriptionValue) {
                    alert('Por favor, ingresa una descripción para tu reto');
                    return;
                }
                persistContent(quill);
                if (!localStorage.getItem('quillContent')) {
                    alert('Por favor, ingresa una descripción para tu reto');
                    return;
                }
                if (confirm("¿Estás seguro de que deseas publicar el reto?")) {
                    // Here goes the logic to send the content to the database
                    try {
                        const modID = params.get("modID");
                        console.log("modID :", modID);
                        const data = {
                            title: titleValue,
                            content: localStorage.getItem("quillContent"),
                            description: descriptionValue,
                            id_module: modID,
                        };
                        const response = await fetchApi(
                            "http://localhost:4000/api/priv/challenges",
                            {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }
                        );
                        console.log('response :' ,response);
                        alert("Reto publicado con éxito");
                        document.querySelector("#create-chalg-form").reset(); // Reset the form
                        navigateTo(
                            `/dashboard/learning-paths/languages/modules/challenges?modID=${modID}`);
                    } catch (error) {
                        alert(
                            "Ha ocurrido un error al publicar el reto. Por favor, inténtalo de nuevo más tarde."
                        );
                        console.error("Error al publicar el reto:", error);
                    }
                }
            });
    }
    // Returning an object with pageContent and logic
    return {
        pageContent,
        logic,
    }
}
