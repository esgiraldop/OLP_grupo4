import { navigateTo } from "../../../Router";
import styles from './root.css'

export function RootScene () {
    const root = document.getElementById('root');

    const header = `
        <header class="${styles.header}">
          
       

            <nav>
                <ul>
                    <li><button class=${styles["btn"]} type=${styles["button"]}>
                    <strong><a href="/">Home</a></strong>
                    <div id=${styles["container-stars"]}>
                      <div id=${styles["stars"]}></div>
                    </div>

                    <div id=${styles["glow"]}>
                      <div class=${styles["circle"]}></div>
                      <div class=${styles["circle"]}></div>
                    </div>
                  </button></li>
                    <li><button class=${styles["btn"]} type=${styles["button"]}>
                    <strong> <a href="/login">Servicios</a> </strong>
                    <div id=${styles["container-stars"]}>
                      <div id=${styles["stars"]}></div>
                    </div>

                    <div id=${styles["glow"]}>
                      <div class=${styles["circle"]}></div>
                      <div class=${styles["circle"]}></div>
                    </div>
                  </button>
                   
                    </li>
                    <li>
                    <button class=${styles["btn"]} type=${styles["button"]}>
                    <strong><a href="/register">Nosotros</a></strong>
                    <div id=${styles["container-stars"]}>
                      <div id=${styles["stars"]}></div>
                    </div>

                    <div id=${styles["glow"]}>
                      <div class=${styles["circle"]}></div>
                      <div class=${styles["circle"]}></div>
                    </div>
                  </button>
                    
                    </li>
                    <li>
                    <button class=${styles["btn"]} type=${styles["button"]}>
                    <strong> <a href="/register">Contacto</a></strong>
                    <div id=${styles["container-stars"]}>
                      <div id=${styles["stars"]}></div>
                    </div>

                    <div id=${styles["glow"]}>
                      <div class=${styles["circle"]}></div>
                      <div class=${styles["circle"]}></div>
                    </div>
                  </button>
                   </li>
                    <li>
                    <button class=${styles["btn"]} type=${styles["button"]}>
                    <strong> <a href="/register">Register</a></strong>
                    <div id=${styles["container-stars"]}>
                      <div id=${styles["stars"]}></div>
                    </div>

                    <div id=${styles["glow"]}>
                      <div class=${styles["circle"]}></div>
                      <div class=${styles["circle"]}></div>
                    </div>
                  </button>
                   </li>
                    <li>  <button class=${styles["btn"]} type=${styles["button"]}>
                    <strong><a href="/register">Login</a></strong>
                    <div id=${styles["container-stars"]}>
                      <div id=${styles["stars"]}></div>
                    </div>

                    <div id=${styles["glow"]}>
                      <div class=${styles["circle"]}></div>
                      <div class=${styles["circle"]}></div>
                    </div>
                  </button>
                </ul>
            </nav>
        </header>
        <div class=${styles["stars"]}>
        <div id=${styles["title"]}>
            <span>SINGULARITY</span>
            <br>
        </div>
        </div>
    `;

    const hero = `
        <img />
    `;

    root.innerHTML = `
        ${header}
    `;

    // logic

    const button = document.getElementById('btn-login');
    button.addEventListener('click', () => {
        navigateTo('/login');
    });

}