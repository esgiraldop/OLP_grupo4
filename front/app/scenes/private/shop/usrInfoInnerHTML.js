import styles from './shop.css';

export function usrInfoInnerHTML(usrInfo){
    console.log(usrInfo)
    return `
        <h3 class="${styles.title}">Your avatar</h3>
        <figure class="${styles.avatar_picture_container}">
             <img class="${styles.avatar_picture_picture}" src="${usrInfo[0].avatar_img}">
        </figure>
        <h3 class="${styles.title}">Your accessories</h3>
        <div class="${styles["card-container"]}">
            ${usrInfo.map(elem => `
                <div class="${styles.card} ${styles.space_around}" id="accesory-card">
                    <figure class="${styles.card_elem} ${styles.figure}">
                        <img src="${elem.accesory_url}">
                     </figure>
                     <div class="${styles.card_elem} ${styles.title_card}">
                        <h3>${elem.accesory_name}</h3>
                    </div>
                </div>
            `)}
        </div>
    `
}