import styles from './shop.css';

export function shopScene(){

    const pageContent = `
    <div class=${styles["generalContainer"]}>
        <div class=${styles["header"]}>
                
        </div>
        <div class=${styles["shopContent"]}>

        </div>
    </div>
    `

    const logic = () => {
        console.log("hello from shop logic");
    }

    return{
        pageContent,logic
    }
}