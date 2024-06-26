import { navigateTo } from '../../../../../Router.js';
import { formValidator } from '../../../../../helpers';
import galaxia from  '../../../../../assets/fondo-galaxia.jpg';
import styles from './login-form.css';

export async function LoginFormComponent() {
  const $root = document.getElementById('root');

  $root.innerHTML = `
  <div class=${styles.login_page} style="background-image: url(${galaxia})">
    <form class=${styles.form_login} id="loginForm">
        <h4>Login</h4>
        <div class=${styles.input_container}>
          <p class=${styles.label_name}>User Email:</p> 
          <input class=${styles.input} type="email" id="email" placeholder="useremail@example.com" required>
        </div>
        <div class=${styles.input_container}>  
          <p class=${styles.label_name}>Password:</p>
          <input class=${styles.input} type="password" id="password" placeholder="password" required>   
        </div>
          <input type="submit" value="Login" class=${styles.button}>
        <div class=${styles.register_link}>
            <p>Don't have an account yet?    <a href="./register">Sign Up</a></p>
        </div>
        <a class=${styles.btn_go_home} href="/home">Go To Home</a>
    </form>
</div>
    `;

  const $form = document.getElementById('loginForm');
  $form.addEventListener('submit', async (event) => {
    event.preventDefault(); // previene el comportamiento por default que es, recargar la pagina

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!formValidator(email, password)){
      alert('Please fill in all fields');
      return;
    }
    const {token, userId} = await login(email, password);
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId)
      navigateTo('/dashboard?');
    } else {
      alert('Invalid credentials');
    }
  });
}

async function login(email, password) {
  try {
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return {token: data.token, userId: data.user.id};
  } catch (error) {
    console.error('Login failed:', error);
    return ""
    //return null; // Promises cannot return a null or an undefined
  }
}