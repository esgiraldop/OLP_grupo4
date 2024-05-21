import styles from './languages.css'

export function languagesScene(){

    const pageContent = `
        <h2 class="titulo">Bienvenido! Estos son los lenguajes que puedes estudiar</h2>
        <p>Haz click en cualquiera de ellos para ir a los módulos</p>
        <div id="langs-container">
        <!-- I should insert the languages cards here -->
        </div>
    `

    const logic = function (){
        const $langsContainer = document.getElementById("langs-container")
        // I should receive an id here for back or for front

        // Based on the id, query to the database the languages

        // Once i Have them, now I can build the HTML

        // Let's assume for now I already have the array
        const langArray = ["Python", "Rust", "Golang"]

        // Inserting the languages in the html
        $langsContainer.innerHTML = `
            ${
                langArray.map(elem =>
                    `<div>${elem}</div>
                    <button id=${elem} class="btn-${elem}">Click me</button>`
                ).join('')
            }
        `

        //Adding an event listener to evey language
        const bttns  = document.getElementsByTagName('button')
        const bttnsArray = [...bttns]
        bttnsArray.forEach(
            $elem => $elem.addEventListener('click', () => {
                alert(`You clicked the language ${$elem.id}`)
            })
        )
    }

    return {pageContent, logic}

}

