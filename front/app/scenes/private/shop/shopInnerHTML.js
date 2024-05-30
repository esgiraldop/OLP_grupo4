import styles from './shop.css';
import coin from '../../../assets/coin.png'

export function shopInnerHTML(accessories){
    return `
        <h3 class="${styles.title}">Check out what we have in the store!</h3>
        <div class="${styles["card-container"]}">
            ${accessories.map(elem => `
                <div class="${styles.card}" id="accesory-card">
                    <figure class="${styles.card_elem} ${styles.figure}">
                        <img src="${elem.url}">
                    </figure>
                    <div class="${styles.card_elem} ${styles.title_card}">
                        <h3>${elem.name}</h3>
                    </div>
                    <div class="${styles.card_elem} ${styles.buy}">
                        <div class="${styles.buy_element} ${styles.req_points}">
                            <figure>
                                <img src="${coin}" alt="coin figure">
                            </figure>
                            <h3> ${elem.req_points} </h3>
                        </div>
                        <div class="${styles.buy_element} ${styles.buy_bttn}" id="buyBttnContainer">
                            <button class=${styles["btn"]}  id="${elem.id}">Buy</button>
                        </div>
                    </div>
                </div>
            `)}
        </div>
    `;
}