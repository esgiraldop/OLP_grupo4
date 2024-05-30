import styles from './navigation-bar.css';
import menuIcon from '../../assets/navbar/list.svg'

export function NavigationBar(
  { user, userImage } =
    { user: 'User', userImage: 'https://via.placeholder.com/150' }
) {

  return  `
  <div class="${styles.container}">
      <div class="${styles["logo-app-container"]}">
        <p>Singularity</p>
      </div>
      <div>
        <p>${user}</p>
        <img src="${userImage}" alt="User image">
      </div>
  </div>
  `;

}

