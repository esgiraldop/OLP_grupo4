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
            <button class=${styles["btn"]} type="button">
                <strong>More Info.</strong>
                <div id=${styles["container-stars"]}>
                    <div id=${styles["stars"]}></div>
                </div>

                <div id=${styles["glow"]}>
                    <div class=${styles["circle"]}></div>
                    <div class=${styles["circle"]}></div>
                </div>
            </button>
        </div>
        <div class=${styles["shopContent"]}>
            <div class=${styles["buyContent"]}>
                <div class=${styles["shopNav"]}>
                    <button class=${styles["btn"]} type="button">
                        <strong>Cabeza</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                    </button>
                    <button class=${styles["btn"]} type="button">
                        <strong>Torso</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                    </button>
                    <button class=${styles["btn"]} type="button">
                        <strong>Pantalones</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                    </button>
                    <button class=${styles["btn"]} type="button">
                        <strong>Zapatos</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                    </button>

                </div>
                <div class=${styles["buyAvatar"]}>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar1"]}>
                            <img></img>
                        </div>
                        img1 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
                    </div>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar2"]}>
                            <img></img>
                        </div>
                        img2 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
                    </div>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar3"]}>
                            <img></img>
                        </div>
                        img3 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
                    </div>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar4"]}>
                            <img></img>
                        </div>
                        img4 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
                    </div>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar5"]}>
                            <img></img>
                        </div>
                        img5 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
                    </div>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar6"]}>
                            <img></img>
                        </div>
                        img6 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
                    </div>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar7"]}>
                            <img></img>
                        </div>
                        img7 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
                    </div>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar8"]}>
                            <img></img>
                        </div>
                        img8 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
                    </div>
                    <div class=${styles["imgSpot"]}>
                        <div class=${styles["avatar9"]}>
                            <img></img>
                        </div>
                        img9 spot
                        <button class=${styles["btn"]} type="button">
                        <strong>500 X-coins</strong>
                        <div id=${styles["container-stars"]}>
                            <div id=${styles["stars"]}></div>
                        </div>

                        <div id=${styles["glow"]}>
                            <div class=${styles["circle"]}></div>
                            <div class=${styles["circle"]}></div>
                        </div>
                        </button>
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