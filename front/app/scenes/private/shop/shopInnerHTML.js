import styles from './shop.css';
export function shopInnerHTML(accessories){
    return `
        <h3 class="${styles.title}">Check out what we have in the store!</h3>
        <div class="${styles["card-container"]}">
            ${accessories.map(elem => `
                <div class="${styles.card}" id="accesory-card">
                    <img src="${elem.url}">
                    ${elem.name}
                </div>
            `)}
        </div>
    `;
}