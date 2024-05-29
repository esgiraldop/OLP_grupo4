
import styles from './about-us.css'
import { RootScene } from '../root/root';

export function AboutUsPage(){
    const root = document.getElementById('root');

    root.innerHTML = `
    <div>${RootScene()}</div>
        <div class=${styles["container"]}>
            <div class=${styles["card"]}>
                <div class=${styles["card-border-top"]}">
                </div>
                <div class=${styles["img"]}>
                    <img src="../../../assets/avatar/hombre.png">
                </div>
                <span>Erick Giraldo</span>
                <p class=${styles["job"]}>Backend developer, Aeronautic engineer</p>
            </div>
            <div class=${styles["card"]}>
                <div class=${styles["card-border-top"]}">
                </div>
                <div class=${styles["img"]}>
                </div>
                <span>Carlos Durán</span>
                <p class=${styles["job"]}>Frontend developer</p>
            </div>
            <div class=${styles["card"]}>
                <div class=${styles["card-border-top"]}">
                </div>
                <div class=${styles["img"]}>
                </div>
                <span>Christian López</span>
                <p class=${styles["job"]}>Frontend developer</p>
            </div>
            <div class=${styles["card"]}>
                <div class=${styles["card-border-top"]}">
                </div>
                <div class=${styles["img"]}>
                </div>
                <span>Edgar Cardona</span>
                <p class=${styles["job"]}>Back & Frontend developer, Architect</p>
            </div>
            <div class=${styles["card"]}>
                <div class=${styles["card-border-top"]}">
                </div>
                <div class=${styles["img"]}>
                </div>
                <span>Jerónimo Cruz</span>
                <p class=${styles["job"]}>Frontend developer, music event staff</p>
            </div>
            <div class=${styles["stars"]}>
                </div>
                <div id=${styles["container-stars2"]}>
                
                <div id=${styles["stars"]}>
                </div>
            </div>
        </div>
    `;
}