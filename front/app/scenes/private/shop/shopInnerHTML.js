import styles from './shop.css';
export function shopInnerHTML(accessories){
    return `
        <div class="${styles["card-container"]}">
            <div className="${styles.card}" id="route-card">
                    hola
            </div>
        </div>
    `;
}

// ${accessories.map(elem => `
//                 <div className="${styles.card}" id="route-card">
//                     ${elem.name}
//                 </div>
//                 `
//             ).join("")
//             }