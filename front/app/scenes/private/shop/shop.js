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
                    <img>
                    <img>
                    <img>
                    <img>
                    <img>
                    <img>
                    <img>
                    <img>
                    <img>
                </div>
            </div>
            <div class=${styles["availableContent"]}>
                <div class=${styles["userAvatar"]}></div>
                <div class=${styles["availableSide"]}></div>
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