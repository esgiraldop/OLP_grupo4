import { fetchApi } from '../../../helpers/fetch-api';
import { navigateTo } from '../../../Router';
import galaxia from  '../../../assets/fondo-galaxia.jpg';
import styles from './register.css';


export async function RegisterPage() {
    const root = document.getElementById('root');

    root.innerHTML = `
    <main class=${styles.registerPage} style="background-image: url(${galaxia})">
        <form class=${styles.form_register} id="form-register">
            <h4>Registrarte</h4>
            <input class=${styles.controls} type="text" id="name" placeholder="nombre" required>
            <input class=${styles.controls} type="email" id="email" placeholder="correo" required>
            <input class=${styles.controls} type="password" id="password" placeholder="contraseña" required>
            <input type="submit" value="Registrarme" class=${styles.button}>
            <div class=${styles.login_link}>
                <p>¿Ya tengo una cuenta?    <a href="./login">Ingresar</a></p>
            </div>
        </form>
    </main>
    `;

const $form = document.getElementById('form-register');



$form.addEventListener('submit', async (event)=>{
    event.preventDefault();

    const $userName = document.getElementById('name').value.trim();
    console.log($userName);
    const $userEmail = document.getElementById('email').value.trim();
    console.log($userEmail);
    const $password = document.getElementById('password').value.trim();
    console.log($password);

    let dotAfterAtEmail, charactersNotTogetherEmail, passwordWithoutEmptySpaces;
    dotAfterAtEmail = dotAfterAt($userEmail); //Validate that the email has at least one dot after the at.
    charactersNotTogetherEmail = charactersNotTogether($userEmail,".","@"); //Validate that the email does not contain dot and at together.
    passwordWithoutEmptySpaces = noEmptySpaces($password); //Validate that the password does not contain empty spaces.

    if( dotAfterAtEmail && charactersNotTogetherEmail && passwordWithoutEmptySpaces ){
        const userCreated = await fetchApi('http://localhost:4000/api/priv/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: $userName,
                email: $userEmail,
                password: $password
            })
        }) 
        
        if(userCreated){
            alert("Usuario creado correctamente");
            navigateTo('/login');
        }
    }
    else{
        let invalidAlert = "";
    
        if(! dotAfterAtEmail){
            invalidAlert += "Debe haber al menos un punto '.' despues del '@' en el correo electrónico\n"
        }
        if(!charactersNotTogetherEmail){
            invalidAlert += "El punto '.' y el símbolo '@' no pueden estar juntos en el correo electrónico.\n"
        }
        if(!passwordWithoutEmptySpaces){
            invalidAlert += "La contraseña no puede contener espacios vacios.\n"
        }
        alert(invalidAlert);
    }
})
}


function dotAfterAt (string){
    let indexChar = string.indexOf("@")
    if (string.includes(".",indexChar)){
        return true
    }
    else{
        return false     
    }  
}

function charactersNotTogether(string,char1,char2){
    if (string.includes(char1+char2) || string.includes(char2+char1)){
        return false
    }
    else{
        return true    
    }  
}

function noEmptySpaces (string){
    if (string.includes(" ")){
        return false
    }
    else{
        return true
    }
}