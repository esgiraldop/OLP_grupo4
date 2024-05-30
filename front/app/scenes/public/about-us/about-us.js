import styles from './about-us.css';
import { RootScene } from '../root/root';
import avatar1img from "../../../assets/avatar/hombre.png"
import avatar2img from "../../../assets/avatar/hombre (1).png"
import Carlos from "../../../assets/avatar/Screenshot from 2024-05-29 20-42-41.png"

export function AboutUsPage() {
    const root = document.getElementById('root');

    root.innerHTML = `
        <div>${RootScene()}</div>
        <div class="${styles["container"]}">
            <div class="${styles["card"]}">
                <div class="${styles["card-border-top"]}">
                </div>
                <div class="${styles["img"]}">
                    <img src="${avatar1img}">
                </div>
                <span>Erick Giraldo</span>
                <p class="${styles["job"]}">Backend developer, Aeronautic engineer</p>
            </div>
            <div class="${styles["card"]}">
                <div class="${styles["card-border-top"]}"></div>
                <div class="${styles["img"]}">
                    <img src="${Carlos}">
                </div>
                <span>Carlos Durán</span>
                <p class="${styles["job"]}">Frontend developer</p>
            </div>
            <div class="${styles["card"]}">
                <div class="${styles["card-border-top"]}"></div>
                <div class="${styles["img"]}">
                    <img src="${avatar2img}">
                </div>
                <span>Christian López</span>
                <p class="${styles["job"]}">Frontend developer</p>
            </div>
            <div class="${styles["card"]}">
                <div class="${styles["card-border-top"]}"></div>
                <div class="${styles["img"]}"></div>
                <span>Edgar Cardona</span>
                <p class="${styles["job"]}">Back & Frontend developer, Architect</p>
            </div>
            <div class="${styles["card"]}">
                <div class="${styles["card-border-top"]}"></div>
                <div class="${styles["img"]}"></div>
                <span>Jerónimo Cruz</span>
                <p class="${styles["job"]}">Frontend developer, music event staff</p>
            </div>
            <div class="${styles["stars"]}"></div>
            <div id="${styles["container-stars2"]}">
                <div id="${styles["stars"]}"></div>
            </div>
        </div>
    `;
}