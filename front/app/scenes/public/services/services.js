import styles from './services.css'
import { RootScene } from "../root/root";

export function servicesPage(){
    const root = document.getElementById('root');

    root.innerHTML=`
    <div>${RootScene()}</div>
    <h1>This are our services</h1>
    <div class=${styles["stars"]}>
        </div>
            <div id=${styles["container-stars2"]}>
                
            <div id=${styles["stars"]}>
        </div>
    </div>
    `
}