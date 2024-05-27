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
                <div class="${styles.card}" id="accesory-card">
                    <img src="${elem.accesory_url}">
                    ${elem.accesory_name}
                </div>
            `)}
        </div>
    `
}