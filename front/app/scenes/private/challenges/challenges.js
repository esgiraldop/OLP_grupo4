import styles from './challenges.css'

export function challengesScene(params){
    let pageContent = ``
    let logic = async () =>{}

    if (params.get('routeID')){
        const routeID = params.get('routeID')

        pageContent = `
        <h2 class="titulo">Bienvenido! Estos son los desafíos que puedes realizar</h2>
        <div id="chals-container">
        <!-- I should insert the challenges cards here -->
        </div>
        `

        logic = async () =>{
            const $chalsContainer = document.getElementById("chals-container")
            const resp = await fetch(`http://localhost:3000/challenges?id=${routeID}`)
            const chalArray = await resp.json()

            $chalsContainer.innerHTML = `
                ${
                    chalArray.map(elem => {
                        return `<div>${elem.title}</div>
                        <button id=${elem.id} class="btn-${elem.id}">Click me</button>`
                        }
                    ).join('')
                }
            `

            const bttns  = document.getElementsByTagName('button')
            const bttnsArray = [...bttns]
            bttnsArray.forEach(
                $elem => $elem.addEventListener('click', () => {
                    alert(`You clicked the challenge ${$elem.title}`)
                })
            )
        }
    }

    return {pageContent, logic}
}
