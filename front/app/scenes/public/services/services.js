import styles from './services.css'
import { RootScene } from "../root/root";

export function servicesPage(){
    const root = document.getElementById('root');

    root.innerHTML=`
    <div>${RootScene()}</div>
    <div class="${styles["container"]}">
        <div class="${styles["card-container"]}">
            <div class="${styles["card"]}">
            <span></span>
                <div class="${styles["content"]}"><h2>Interactive Courses</h2> Language-Specific Tracks: Courses tailored to specific programming languages like Python, JavaScript, Java, C++, etc.
                Framework Tutorials: Interactive tutorials for popular frameworks such as React, Angular, Django, and Spring.
                Database Training: Courses on SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB, and Firebase.</div>
            </div>
            <div class="${styles["card"]}">
            <span></span>
                <div class="${styles["content"]}"><h2>Gamified Learning Experience</h2>
                Challenges and Quizzes: Short, interactive challenges and quizzes to test knowledge and reinforce learning.
                Leaderboards: Display points and rankings to encourage healthy competition among users.
                Achievement Badges: Award badges for completing modules, challenges, and milestones.</div>
            </div>
            <div class="${styles["card"]}">
            <span></span>
                <div class="${styles["content"]}"><h2>Mentorship and Community Support</h2>
                Mentor Programs: Connect learners with experienced developers for guidance and support.
                Discussion Forums: Platforms for users to ask questions, share knowledge, and collaborate on projects.
                Study Groups: Facilitate the formation of study groups for collaborative learning.</div>
            </div>
            <div class="${styles["card"]}">
            <span></span>
                <div class="${styles["content"]}"><h2>Access to Resources</h2>
                Free and Premium Content: Offer a mix of free and premium content to make learning accessible while also generating revenue.
                Resource Library: Access to a library of coding resources, documentation, and tutorials.
                Coding Environment: An integrated development environment (IDE) for practicing coding directly on the platform.</div>
            </div>
        </div>
        <div class=${styles["stars"]}>
            </div>
                <div id=${styles["container-stars2"]}>
                    
                <div id=${styles["stars"]}>
            </div>
        </div>
    </div>
    `
}