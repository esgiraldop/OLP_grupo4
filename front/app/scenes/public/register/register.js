import { fetchApi } from '../../../helpers/fetch-api';
import { navigateTo } from '../../../Router';
import galaxia from  '../../../assets/fondo-galaxia.jpg';
import styles from './register.css';


export async function RegisterPage() {
    const root = document.getElementById('root');

    root.innerHTML = `
    <main class=${styles.registerPage} style="background-image: url(${galaxia})">
        <form class=${styles.form_register} id="form-register">
            <h4>Sign Up</h4>
            <input class=${styles.controls} type="text" id="name" placeholder="Username" required>
            <input class=${styles.controls} type="email" id="email" placeholder="Email" required>
            <input class=${styles.controls} type="password" id="password" placeholder="Password" required>
            <input type="submit" value="Sign Up" class=${styles.button}>
            <div class=${styles.login_link}>
                <p>Already have an account?   <a href="./login">Login</a></p>
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
        const userCreated = await fetchApi('http://localhost:4000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: $userName,
                email: $userEmail,
                password: $password
            })
        }) 
        console.log("uservreated: ",userCreated);
        if(userCreated){
            alert("User created successfully");
            navigateTo('/login');
        }
    }
    else{
        let invalidAlert = "";
    
        if(! dotAfterAtEmail){
            invalidAlert += "There must be at least one dot '.' after the at '@' in the email\n"
        }
        if(!charactersNotTogetherEmail){
            invalidAlert += "the dot '.' and the at '@' can't be togther in the email.\n"
        }
        if(!passwordWithoutEmptySpaces){
            invalidAlert += "the password cannot have empty spaces.\n"
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