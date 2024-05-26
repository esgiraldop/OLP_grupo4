import { navigateTo } from '../../../Router'; 
// Importa los estilos CSS para este componente
import styles from './learning-paths.css';

// Define y exporta la función PathScene
export function PathScene() {
    // Define el contenido de la página como una cadena de texto HTML
    let pageContent = `
    <div class="${styles.container}">
    <h2 class="${styles.title}">Bienvenido! Estas son las rutas que puedes estudiar</h2>
    <div id="paths-container"></div>
    </div>
    `;
    // Define la lógica que se ejecutará cuando se cargue la página
    let logic = async () => {
        const $myContent = document.getElementById('paths-container');
        // const response = await fetch ('http://localhost:3000/learningPaths');
        const response = await fetch ('http://localhost:4000/api/priv/routes');
        const learningPaths = await response.json();

        // Pinto en el DOM
        $myContent.innerHTML = `
        <button class="${styles['btn-new-path']}" id="createpath">Create new path</button>
        <button class="${styles['btn-edit-path']}" id="createpath">Edit paths</button>
            ${learningPaths.map(path => `
            <div class="${styles['card-container']}" >
                <div class="${styles.card}"> 
                <button class=${styles['btn-course']} id="${path.id}">Go to ${path.name}</button>
            </div>
                 <div class="${styles['star-field']}">
                 <div class="${styles.layer}"></div>
                 <div class="${styles.layer}"></div>
                 <div class="${styles.layer}"></div>
                 
                `).join('')}
                `;
        //Evento
        // Obtiene todos los elementos 'button' en el documento
        const buttons  = document.getElementsByTagName('button')
        // Convierte la colección HTML de botones en un array
            const buttonsArray = [...buttons]
            // Recorre cada botón en el array
            buttonsArray.forEach(
            // Para cada botón...
            $singleButton =>
            // Añade un event listener 'click' al botón
            $singleButton.addEventListener('click', (e) =>
            // Cuando se hace click en el botón, navega a la URL especificada
            // Incluye el id del botón como un parámetro de consulta en la URL   
            navigateTo(`/dashboard/learning-paths/languages?pathID=${e.target.id}`)))
    };
    return {
        pageContent,
        logic
    }
}

    //Otra pagina
    // if (params.get('id')){
    //     pageContent = `${helperContent}`
    //     logic = () => {
    //         console.log(document.getElementById('content'),"desde constent");
    //     }
    // }

    // const $myTitle = document.getElementById('my-title');
    // $myTitle.addEventListener('click', (e) => {
    //     console.log(e);
    //     e.preventDefault();
    //     console.log(e.target);
    //     console.log("Click desde $Mytitle");
    // })


    // Devuelve un objeto con el contenido de la página y la lógica
