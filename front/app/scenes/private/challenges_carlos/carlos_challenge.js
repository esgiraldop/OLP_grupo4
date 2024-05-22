// import imagen from '../../../assets'
import style from "./style.css"

export function challengeScene(params){
   let logic = async()=>{}
    let pageContent = ``
    if (params.get('id')){
        const id = params.get('id')
        console.log('id', id);
    
    pageContent =
`<div id="1" class = ${style["contenedor-global"]}>
    <div class="${style['bg']}"></div>
    <div class="${style['star-field']}">
        <div class="${style['layer']}"></div>
        <div class="${style['layer']}"></div>
        <div class="${style['layer']}"></div>
        <div class="${style['container']}">
            <div class="${style['card']}">
                    
               
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
  


    logic = async ()=>{
    const respns = await fetch(`http://localhost:3000/challenges?id=${id}`)
    
    const challengeArray = await respns.json()
    console.log(challengeArray)



    
}}
return{pageContent,logic}
}
