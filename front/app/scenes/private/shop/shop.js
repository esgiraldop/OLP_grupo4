
import styles from './shop.css';

export function shopScene(){

    const pageContent = `
    <div class=${styles["generalContainer"]}>
        <div class=${styles["header"]}>
            <div class=${styles["title"]}>
                <h2>
                    X-Coins shop
                </h2>
            </div>
            <button class=${styles["moreInfo"]}>
                More info.
            </button>
        </div>
        <div class=${styles["shopContent"]}>
            <div class=${styles["buyContent"]}>
                <div class=${styles["shopNav"]}>
                    <button>Cabeza</button>
                    <button>Torso</button>
                    <button>Pantalones</button>
                    <button>Zapatos</button>
                </div>
                <div class=${styles["buyAvatar"]}>
                    <div>
                        <img></img>
                        img1 spot
                    </div>
                    <div>
                        <img>
                        img2 spot
                    </div>
                    <div>
                        <img>
                        img3 spot
                    </div>
                    <div>
                        <img>
                        img4 spot
                    </div>
                    <div>
                        <img>
                        img5 spot
                    </div>
                    <div>
                        <img>
                        img6 spot
                    </div>
                    <div>
                        <img>
                        img7 spot
                    </div>
                    <div>
                        <img>
                        img8 spot
                    </div>
                    <div>
                        <img>
                        img9 spot
                    </div>
                </div>
            </div>
            <div class=${styles["availableContent"]}>
                <div class=${styles["userAvatar"]}>Here comes your avatar</div>
                <div class=${styles["availableSide"]}>Here comes the available avatar</div>
            </div>       
        </div>
    </div>
    `

    const logic = () => {
        console.log("hello from shop logic");
    }

    return{
        pageContent,logic
    }
}