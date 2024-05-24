import styles from './home.css';
import { ReportScene } from '../reports'

export function HomeScene() {

  // generate random number between 1 an 10
  // const randomNumber = Math.floor(Math.random() * 10) + 1;

  const footer = `
  <footer><p>All rights reserved.</p></footer>
  `;

  const pageContent = `
  <div class="${styles.hidden}" id="home_container">
    <h2>Home</h2>
    <p>Welcome to the home view.</p>
    <div id="user-info"></div>
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
        <p>User id: ${user.id}</p>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>User points: ${user.points}</p>
        <p>User role: ${user.id_role}</p>
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