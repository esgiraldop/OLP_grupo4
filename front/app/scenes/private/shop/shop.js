import styles from './shop.css';
import { shopInnerHTML } from './shopInnerHTML'
import { usrInfoInnerHTML } from "./usrInfoInnerHTML";
import { startBuyProcess } from "./startBuyProcess"

export function shopScene(){

    const pageContent = `
        <div class="${styles["container"]}">
            <div id="loader" class="${styles.loader}"></div>
            <!-- Starfield moving background -->
            <div class="${styles["star-field"]}">
            <div class="${styles.layer}"></div>
             <div class="${styles.layer}"></div>
             <div class="${styles.layer}"></div>
             
            <h2 class="${styles.title}">Welcome to the store!</h2>
            <div class="${styles["shop_container"]}">
                <div class="${styles["shop_container_elem"]} ${styles["elem1"]}" id="accessoriesContainer">
                    <!-- Container for the accessories to buy -->
                </div>
                <div class="${styles["shop_container_elem"]} ${styles["elem2"]}" id="usrInfoContainer">
                    <!-- Container for the accessories my avatar has already -->
                </div>
            </div>
        </div>
    `

    const logic = async () => {
        const usrId = localStorage.getItem('userId')

        // Changing content for all accessories
        const response1 = await fetch('http://localhost:4000/api/priv/store')
        const accessories = await response1.json()
        const $accessoriesContainer = document.getElementById("accessoriesContainer")

        $accessoriesContainer.innerHTML = shopInnerHTML(accessories)

        // Changing content for avatar accessories
        const response2 = await fetch(`http://localhost:4000/api/priv/store/usrinfo/${usrId}`)
        const usrInfo = await response2.json()
        const $usrInfoContainer = document.getElementById("usrInfoContainer")

        $usrInfoContainer.innerHTML = usrInfoInnerHTML(usrInfo)

        document.getElementById('loader').classList.add(styles["hide-loader"])

        // Adding the event listeners to the "buy" buttons
        const $buyBttns = document.querySelectorAll("div#buyBttnContainer>button")

        const $buyBttnsArray = [...$buyBttns]
        $buyBttnsArray.forEach(
            $buyBttn => {
                $buyBttn.addEventListener('click',
                    async e => {
                        // purchase process
                        const {user, accessory} = await startBuyProcess(e, accessories, usrInfo)
                        console.log("user: ", user)
                        console.log("accessory: ", accessory)
                        if(user){
                            // Inserting the new accessory in usrInfoInnerHTML
                            console.log("Holaaaaaa")
                        }
                    }
                )
            }
        )
    }

    return{
        pageContent,logic
    }
}