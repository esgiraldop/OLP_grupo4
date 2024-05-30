// Importing Quill, a powerful, rich text editor
import Quill from "quill"
// Importing the styles for the Quill snow theme
import 'quill/dist/quill.snow.css';
// Importing the ToolbarContainer component
import { ToolbarContainer } from "./components/toolbar-container";
// Importing the styles from the create-langs.css file
import styles from './create-langs.css'
// Importing the fetchApi helper function
import { fetchApi } from "../../../helpers/fetch-api";
// Importing the navigateTo function from the Router
import { navigateTo } from "../../../Router";

// Exporting the CreateLangScene function which takes params as an argument
export function CreateLangScene(params) {
    // Initializing the HTML container for the editor and a button to save the content
    const editorContent = `<div id="editor" class="${styles.editor}"></div>`
    // Initializing the HTML content for the page
    const pageContent = `
    <h1 class="${styles["title"]}">Crear un nuevo lenguaje</h1>
    <form class="${styles["create-language-form"]}" id="create-language-form">
        <div class="${styles["language_title-container"]}">
            <label for="title">Título</label>
            <input type="text" id="title" name="title" class="${styles["language_title-input"]}">
        </div>
        <div class="${styles["language_description-container"]}">
            <label>Descripción</label>
            <textarea id="description" name="description" class="${styles["language_description-input"]}"></textarea>
        </div>
        
        <div class="${styles["img-url"]}">
        <label>Insertar URL de la imagen</label>
        <input id = "img-url"  type="text">
        <div class="${styles["description-container"]}">
            <label>Descripción del lenguaje</label>
        </div>
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
            placeholder: 'Crea tu mejor lenguaje aquí...',
            theme: 'snow',
        });
        
        // Event listener to handle the publication of the content, i.e., send to the database.
        document.querySelector('#create-language-form')
            .addEventListener('submit', async (e) => {
                // Prevent the form from being submitted
                e.preventDefault();
                // Validate that the title and description are not empty
                const titleValue = document.querySelector('#title').value;
                const imgUrlValue = document.querySelector('#img-url').value;

                const descriptionValue = document.querySelector('#description').value;
                if (!titleValue) {
                    alert('Por favor, ingresa un título para tu lenguaje');
                    return;
                }
                if (!descriptionValue) {
                    alert('Por favor, ingresa una descripción para tu lenguaje');
                    return;
                }
                persistContent(quill);
                if (!localStorage.getItem('quillContent')) {
                    alert('Por favor, ingresa una descripción para tu lenguaje');
                    return;
                }
                if (confirm("¿Estás seguro de que deseas publicar el lenguaje?")) {
                    // Here goes the logic to send the content to the database
                    try {
                        const routeID = params.get('routeID')
                        console.log('RouteID :' ,routeID);
                        const data = {
                            name: titleValue,
                            content: localStorage.getItem('quillContent'),
                            description: descriptionValue,
                            id_route: routeID,
                            language_img: imgUrlValue       
                        }
                        const response = await fetchApi('http://localhost:4000/api/priv/languages', {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        });
                        console.log(response);
                        alert('Lenguaje publicado con éxito');
                        document.querySelector('#create-language-form').reset(); // Reset the form
                        navigateTo(`/dashboard/learning-paths/languages?pathID=${routeID}`);
                    } catch (error) {
                        alert('Ha ocurrido un error al publicar el lenguaje. Por favor, inténtalo de nuevo más tarde.');
                        console.error('Error al publicar el lenguaje:', error);
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
