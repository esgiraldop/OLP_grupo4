import styles from './contact.css'
import { RootScene } from '../root/root';

export function contact(){
    const root = document.getElementById('root');

    root.innerHTML=`
    <div>${RootScene()}</div>
    <h1>This is our contact</h1>
    <div class=${styles["stars"]}>
        </div>
            <div id=${styles["container-stars2"]}>
                
            <div id=${styles["stars"]}>
        </div>
    </div>
    `
}