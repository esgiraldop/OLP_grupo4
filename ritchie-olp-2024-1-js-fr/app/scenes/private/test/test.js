import test from './test.css'

export function testScene(){

    const pageContent = `
        <h2 class="titulo">Hola desde mi práctica</h2>
    `

    const logic = function (){
        const title = document.querySelector(".titulo")
        title.addEventListener('click', () =>{
            title.style.color = "red"
        })
    }

    return {pageContent, logic}

}

