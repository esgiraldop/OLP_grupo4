import styles from './../root/root.css'
import { RootScene } from "../root/root";


export function publicHome(){
    const root = document.getElementById('root');

    root.innerHTML = `
    <div>${RootScene()}</div>
    <div class=${styles["stars"]}>
    <div id=${styles["title"]}>
        <span>SINGULARITY</span>
        <br>
    </div>
    </div>
    <div id=${styles["container-stars2"]}>
    
    <div id=${styles["stars"]}>
    </div>
    </div>
    `;
}

