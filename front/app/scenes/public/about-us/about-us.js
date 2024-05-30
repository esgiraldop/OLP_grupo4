import styles from './about-us.css';
import { RootScene } from '../root/root';
import Erick from "../../../assets/avatar/erick.jpeg"
import Christian from "../../../assets/avatar/christian.jpeg"
import Carlos from "../../../assets/avatar/carlos.jpeg"
import edgar from "../../../assets/avatar/edgar.jpeg"
import jeronimo from "../../../assets/avatar/jerónimo.jpeg"

export function AboutUsPage() {
    const root = document.getElementById('root');

    root.innerHTML = `
        <div>${RootScene()}</div>
        <div class="${styles["container"]}">
            <div class="${styles["card"]}">
                <div class="${styles["card-border-top"]}">
                </div>
                <div class="${styles["img"]}">
                    <img src="${Erick}">
                </div>
                <span>Erick Giraldo</span>
                <p class="${styles["job"]}">Backend developer, Aeronautic engineer</p>
                <div><p class="${styles["card-txt"]}">engineer with a Master's and Bachelor's in aeronautical engineering. He excels in English and communication, with strong analytical and teamwork skills.

                Erick's technical expertise includes Python, Matlab, Excel, MySQL, Tableau, JavaScript, HTML, and CSS. He currently works as an aviation consultant, focusing on data tasks, and is pursuing an intensive software development course.
                
                Outside of work, Erick enjoys programming, traveling, reading, gaming, and family time.</p></div>
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
                    <img src="${Christian}">
                </div>
                <span>Christian López</span>
                <p class="${styles["job"]}">Frontend developer</p>
            </div>
            <div class="${styles["card"]}">
                <div class="${styles["card-border-top"]}"></div>
                <div class="${styles["img"]}">
                    <img src=${edgar}>
                </div>
                <span>Edgar Cardona</span>
                <p class="${styles["job"]}">Back & Frontend developer, Architect</p>
                <div><p class="${styles["card-txt"]}">Software developer student and Architect with experience in architectural design, construction, 3D modeling and use of BIM methodology. 
                Excellent communication and empathy skills, efficient when developing assigned tasks, always willing to grow and learn with new knowledge and experiences. 
                Avid for the new technologies of exponential growth that allow to develop projects with high standards of quality and service.</p></div>
            </div>
            <div class="${styles["card"]}">
                <div class="${styles["card-border-top"]}"></div>
                <div class="${styles["img"]}">
                    <img src=${jeronimo}>
                </div>
                <span>Jerónimo Cruz</span>
                <p class="${styles["job"]}">Frontend developer, music event staff</p>
                <div><p class="${styles["card-txt"]}">recent graduated student, music events staff, experience in frontend. Musician in free time and also he likes to play videogames, draw and teach to play piano</p></div>
            </div>
            <div class="${styles["stars"]}"></div>
            <div id="${styles["container-stars2"]}">
                <div id="${styles["stars"]}"></div>
            </div>
        </div>
    `;
}