// import imagen from '../../../assets'
import style from "./style.css"

export function practiceScene(){
    const pageContent = 
`<div id="1" class = ${style["contenedor-global"]}>
    <div class="${style['bg']}"></div>
    <div class="${style['star-field']}">
        <div class="${style['layer']}"></div>
        <div class="${style['layer']}"></div>
        <div class="${style['layer']}"></div>
        <div class="${style['container']}">
            <div class="${style['card']}">
                <div id="2" class="${style['button']}">
                    <p>Ocultar vista</p>
                </div>
                <p class="${style['heading']}">
                    Reto semanal
                </p>
                <p>
                    Powered By
                </p>
                <p>
                    Learning platform
                </p>
            </div>
            <div class="${style['card']}">
                <p class="${style['heading']}">
                    Reto mensual
                </p>
                <p>
                    Powered By
                </p>
                <p>
                    Learning platform
                </p>
            </div>
            <div class="${style['card']}">
                <p class="${style['heading']}">
                    Reto definitivo
                </p>
                <p>
                    Powered By
                </p>
                <p>
                    Learning platform
                </p>
            </div>
        </div>
    </div>
</div>
            
        ` 
  


let logic = ()=>{
    const botonOcultar = document.getElementById("2")
    botonOcultar.addEventListener("click", (e)=>{
    const ocultar = document.getElementById("1")
    ocultar.classList.add(style.hidden)
    })
    

    
}
return{pageContent,logic}
}
