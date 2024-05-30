import styles from './home.css';
import { ReportScene } from '../reports';

export function HomeScene() {

  // generate random number between 1 an 10
  // const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("all good from home")
  const footer = `
  <!-- <footer><p>All rights reserved.</p></footer> -->
  `;

  const pageContent = `
  <div class="${styles.container}" id="home_container">
    <div class="${styles["star-field"]}">
      <div class="${styles.layer}"></div>
      <div class="${styles.layer}"></div>
      <div class="${styles.layer}"></div>
     
      <div  margin: 0 auto" id="user-info"></div>
      ${footer}
      <div class="${styles.loader}" id="loader"></div>
    </div>
    </div>
  `;

  const logic = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token || !userId) {
      console.log("Log in not successful");
      return;
    }

    fetch(`http://localhost:4000/api/priv/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Bad response");
      }
      return response.json();
    })
    .then(userInfo => {
      return fetch(`http://localhost:4000/api/priv/store/usrinfo/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    })
    .then(response1 => {
      if (!response1.ok) {
        throw new Error("Bad response in second fetch");
      }
      return response1.json();
    })
    .then(data => {
      console.log(data);

      const userInfo = document.getElementById('user-info');
      userInfo.innerHTML = `
        <div class=${styles["pcc"]}>
          <div class=${styles["mycardContainer"]}>
              <div class=${styles["myCard"]}>
                <div class=${styles["innerCard"]}>
                  <div class=${styles["frontSide"]}>
                    <figure>
                      <img src="${data[0].avatar_img}">
                    </figure>
                    <p class=${styles["title"]}>User: ${data[0].username}</p>
                    <p>${data[0].email}</p>
                  </div>
                  <div class=${styles["backSide"]}>
                    <p class=${styles["title"]}>Points <br> ${data[0].points}</p>
                    <button class=${styles["btn"]} type="button">
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
          </div>
          <div class=${styles["card1-container"]}>
            <div class=${styles["card1"]}>
              <div class=${styles["front-content"]}>
                <p>Challenges</p>
              </div>
              <div class=${styles["content"]}>
                <p class=${styles["heading"]}>Reto Mensual</p>
                <p></p>
                <p class=${styles["heading"]}>Reto Semanal</p>
                <p></p>
                <p class=${styles["heading"]}>Reto Diario</p>
                <p></p>
              </div>
            </div>
          </div>
          <div class=${styles["progress-container"]}>
            <div class=${styles["card-progress"]}>
              <p>Progreso Back</p>
            </div>
            <div class=${styles["card-progress"]}>
              <p>Progreso Front</p>
            </div>
          </div>
        </div>
      `;
      
      // Finalmente, ocultamos el loader y mostramos el div
      document.querySelector(`#loader`).classList.add(styles.hidden);
      document.getElementById('home_container').classList.remove(styles.hidden);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return {
    pageContent,
    logic
  };
}