// Importing Quill, a powerful, rich text editor
import Quill from "quill"
// Importing the styles for the Quill snow theme
import 'quill/dist/quill.snow.css';
// Importing the ToolbarContainer component
import { ToolbarContainer } from "./components/toolbar-container";
// Importing the styles from the create-modules.css file
import styles from './create-modules.css'
// Importing the fetchApi helper function
import { fetchApi } from "../../../helpers/fetch-api";
// Importing the navigateTo function from the Router
import { navigateTo } from "../../../Router";

// Exporting the CreateModuleScene function which takes params as an argument
export function CreateModuleScene(params) {
    // Initializing the HTML container for the editor and a button to save the content
    const editorContent = `<div id="editor" class="${styles.editor}"></div>`
    // Initializing the HTML content for the page
    const pageContent = `
    <h1 class="${styles["title"]}">Crear un nuevo modulo</h1>
    <form   class="${styles["create-module-form"]}" id="create-module-form">
        <div class="${styles["module_title-container"]}">
            <label for="title">Título</label>
            <input type="text" id="title" name="title" class="${styles["module_title-input"]}">
        </div>
        <div class="${styles["module_description-container"]}">
            <label>Descripción</label>
            <textarea id="description" name="description" class="${styles["module_description-input"]}"></textarea>
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
            placeholder: 'Crea tu mejor modulo aquí...',
            theme: 'snow',
        });
        
        // Event listener to handle the publication of the content, i.e., send to the database.
        document.querySelector('#create-module-form')
            .addEventListener('submit', async (e) => {
                // Prevent the form from being submitted
                e.preventDefault();
                // Validate that the title and description are not empty
                const titleValue = document.querySelector('#title').value;

                const descriptionValue = document.querySelector('#description').value;
                if (!titleValue) {
                    alert('Por favor, ingresa un título para tu modulo');
                    return;
                }
                if (!descriptionValue) {
                    alert('Por favor, ingresa una descripción para tu modulo');
                    return;
                }
                persistContent(quill);
                if (!localStorage.getItem('quillContent')) {
                    alert('Por favor, ingresa una descripción para tu modulo');
                    return;
                }
                if (confirm("¿Estás seguro de que deseas publicar el modulo?")) {
                    // Here goes the logic to send the content to the database
                    try {
                        const langID = params.get('langID')
                        console.log('langID :' ,langID);
                        const data = {
                            name: titleValue,
                            content: localStorage.getItem('quillContent'),
                            description: descriptionValue,
                            id_language: langID,    
                        }
                        const response = await fetchApi('http://localhost:4000/api/priv/modules', {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        });
                        console.log(response);
                        alert('Modulo publicado con éxito');
                        document.querySelector('#create-module-form').reset(); // Reset the form
                        navigateTo(`/dashboard/learning-paths/languages/modules?langID=${langID}`);
                    } catch (error) {
                        alert('Ha ocurrido un error al publicar el modulo. Por favor, inténtalo de nuevo más tarde.');
                        console.error('Error al publicar el modulo:', error);
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
