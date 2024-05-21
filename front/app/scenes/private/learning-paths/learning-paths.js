import { navigateTo } from '../../../Router'; 
import galaxia from '../../../assets/fondo-galaxia.jpg'
// Importa los estilos CSS para este componente
import styles from './learning-paths.css';

// Define y exporta la función PathScene
export function PathScene(params) {

    // const helperContent = "<div id='content'>Hola mundo</div>"

    // Define el contenido de la página como una cadena de texto HTML
    let pageContent = `
    <div class="${styles.container}" id="content" style="background-image: url(${galaxia})">Hola mundo</div>
    `;
    // Define la lógica que se ejecutará cuando se cargue la página
    let logic = async () => {
        const $myContent = document.getElementById('content');
        const response = await fetch ('http://localhost:3000/learningPaths');
        const learningPaths = await response.json();
        console.log(learningPaths);

        // Pinto en el DOM
        $myContent.innerHTML = `
            ${learningPaths.map(path => `
            <div>
                <button class="my-click-paths" id="${path.id}">${path.id}</button>
                <div class="${styles.title}">${path.name}</div>
                <div>${path.description}</div>
              
            </div>
            `).join('')}
        `;

        /*
        // Esto se usaba para pintar el dom antes de mover languages a otra página
        ${path.courses.map(course => `
                <div>
                    <p>Course ID: ${course.courseId}</p>
                    <p>Title: ${course.title}</p>
                    <p>Duration: ${course.duration}</p>
                </div>
                `).join('')}
        */

        //Evento
        document.querySelectorAll('.my-click-paths').forEach(singleButton =>
            singleButton.addEventListener('click', (e) => navigateTo(`/dashboard/learning-paths/languages?routeID=${e.target.id}`)))
        // singleButton.addEventListener('click', (e) => console.log(e.target.id))
            
        // const myClickPaths = document.querySelectorAll('.my-click-paths');
        // myClickPaths.forEach (e => console.log(e))
    };
    
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

    return {
        pageContent,
        logic
    }
}
