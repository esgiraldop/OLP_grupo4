// Importing Quill, a powerful, rich text editor
import Quill from "quill"
// Importing the styles for the Quill snow theme
import 'quill/dist/quill.snow.css';
// Importing the ToolbarContainer component
import { ToolbarContainer } from "./components/toolbar-container";
// Importing the styles from the create-paths.css file
import styles from './create-paths.css'
// Importing the fetchApi helper function
import { fetchApi } from "../../../helpers/fetch-api";
// Importing the navigateTo function from the Router
import { navigateTo } from "../../../Router";

// Exporting the CreatePathScene function
export function CreatePathScene() {
    // Initializing the HTML container for the editor and a button to save the content
    const editorContent = `<div id="editor" class="${styles.editor}"></div>`
    // Initializing the HTML content for the page
    const pageContent = `
    <form class="${styles["create-path-form"]}" id="create-path-form">
        <div class="${styles["path_title-container"]}">
    <!-- Starfield animation -->
    <div class="${styles["star-field"]}">
    <div class="${styles.layer}"></div>
    <div class="${styles.layer}"></div>
    <div class="${styles.layer}"></div>
    
    <h1 class="${styles["title"]}">Create a new learning path</h1>
    <form id="create-challenge-form">
        <div class="${styles["challenge_title-container"]}">
            <label for="title">Título</label>
            <input type="text" id="title" name="title" class="${styles["path_title-input"]}">
        </div>
        <div class="${styles["path_description-container"]}">
            <label>Descripción</label>
            <textarea id="description" name="description" class="${styles["path_description-input"]}"></textarea>
        </div>
        
        <div class="${styles["description-container"]}">
            <label>Descripción de la ruta</label>
            <div class="${styles["action-buttons"]}">
            <button type="submit">Publicar</button>
            </div>
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
            placeholder: 'Crea tu mejor ruta aquí...',
            theme: 'snow',
        });

        // Event listener to handle the publication of the content, i.e., send to the database.
        document.querySelector('#create-path-form')
            .addEventListener('submit', async (e) => {
                // Prevent the form from being submitted
                e.preventDefault();
                // Validate that the title and description are not empty
                const titleValue = document.querySelector('#title').value;
                const descriptionValue = document.querySelector('#description').value;
                if (!titleValue) {
                    alert('Por favor, ingresa un título para tu ruta');
                    return;
                }
                if (!descriptionValue) {
                    alert('Por favor, ingresa una descripción para tu ruta');
                    return;
                }
                persistContent(quill);
                if (!localStorage.getItem('quillContent')) {
                    alert('Por favor, ingresa una descripción para tu ruta');
                    return;
                }
                if (confirm("¿Estás seguro de que deseas publicar la ruta?")) {
                    // Here goes the logic to send the content to the database
                    try {
                        const data = {
                            name: titleValue,
                            content: localStorage.getItem('quillContent'),
                            description: descriptionValue
                        }
                        const response = await fetchApi('http://localhost:4000/api/priv/routes', {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        });
                        console.log(response);
                        alert('Ruta publicado con éxito');
                        document.querySelector('#create-path-form').reset(); // Reset the form
                        navigateTo('/dashboard/learning-paths');
                    } catch (error) {
                        alert('Ha ocurrido un error al publicar el ruta. Por favor, inténtalo de nuevo más tarde.');
                        console.error('Error al publicar el ruta:', error);
                    }
                }
            });
    }
    // Returning an object with pageContent and logic
    return {
        pageContent,
        logic
    }
}
