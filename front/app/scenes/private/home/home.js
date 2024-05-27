import styles from './home.css';
import { ReportScene } from '../reports'

export function HomeScene() {

  // generate random number between 1 an 10
  // const randomNumber = Math.floor(Math.random() * 10) + 1;

  const footer = `
<!--  <footer><p>All rights reserved.</p></footer>-->
  `;

  const pageContent = `
  <div class="${styles.container}" id="home_container">
<!--    <h2>Home vision</h2>-->
<!--    <p>Welcome to the home view.</p>-->
    <div style="border: 2px red solid margin: 0 auto" id="user-info"></div>
    ${footer}
  </div>
  <div class="${styles.loader}" id="loader">
  </div>
 
  `;

  const logic = () => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    if(!token || !userId){
      console.log("Log in not sucessful")
    }
    fetch(`http://localhost:4000/api/priv/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
        }
        )
      .then( response =>{
        if(!response.ok){
          throw new Error("Bad response")
        }
        return response.json()
      }
      )
      .then( user => {
        const userInfo = document.getElementById('user-info');
        userInfo.innerHTML = `
        <div class=${styles["myCard"]}>
        <div class=${styles["innerCard"]}>
            <div class=${styles["frontSide"]}>
                <p class=${styles["title"]}>User: ${user.username}</p>
                <p>${user.email}</p>
            </div>
            <div class=${styles["backSide"]}>
                <p class=${styles["title"]}>points <br> ${user.points}</p>
                <button class=${styles["btn"]} type=${styles["button"]}>
                    <strong>SPACE</strong>
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
        `;
        // Finalmente, ocultamos el loader y mostramos el div
        document.querySelector(`#loader`).classList.add(styles.hidden);
        document.getElementById('home_container').classList.remove(styles.hidden);
      })
  };

  return {
    pageContent,
    logic
  }
}