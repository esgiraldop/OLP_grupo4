import Quill from "quill"
import 'quill/dist/quill.snow.css'; // para el tema bubble //TODO: This line was giving me errors
import { ToolbarContainer } from "./components/toolbar-container";
import styles from './create-modules.css'
import { fetchApi } from "../../../helpers/fetch-api";
import { navigateTo } from "../../../Router";

export function CreateModuleScene(params) {
    // Inicializa el contenedor HTML para el editor y un botón para guardar el contenido
    const editorContent = `<div id="editor" class="${styles.editor}"></div>`
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
            // <button id="saveButton" type="button">Guardar</button>

    const persistContent = (quill) => {
        const content = quill.getContents();  // Obtén el contenido como Delta
        localStorage.setItem('quillContent', JSON.stringify(content));
    }

    // Lógica para inicializar y configurar Quill

    const logic = () => {
        // Quill.register('modules/formula', MathQuillBlot);
        // Espera a que el DOM esté completamente cargado
        const quill = new Quill('#editor', {
            modules: {
                toolbar: '#toolbar-container',
            },
            placeholder: 'Crea tu mejor modulo aquí...',
            theme: 'snow',
            // modules: {
            //     formula: true,
            // }
        });
        
        // Listener para manejar la publicación del contenido, o sea, enviar a base de datos.
        document.querySelector('#create-module-form')
            .addEventListener('submit', async (e) => {
                // Evita que el formulario se envíe
                e.preventDefault();
                // Valida que el título y la descripción no estén vacíos
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
                    // Aquí va la lógica para enviar el contenido a la base de datos
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
                                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                            }
                        });
                        console.log(response);
                        alert('Modulo publicado con éxito');
                        document.querySelector('#create-module-form').reset(); // Resetea el formulario
                        navigateTo(`/dashboard/learning-paths/languages/modules?langID=${langID}`);
                    } catch (error) {
                        alert('Ha ocurrido un error al publicar el modulo. Por favor, inténtalo de nuevo más tarde.');
                        console.error('Error al publicar el modulo:', error);
                    }
                }
            });
    }
    return {
        pageContent,
        logic
    }
}
