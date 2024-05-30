import styles from './sidebar-menu.css';
import logOutIcon from '../../assets/sidebar/logout.svg'
import Home from '../../assets/sidebar/home.svg'
import shop from '../../assets/sidebar/cartshop.svg'
import libros from '../../assets/sidebar/rutas.svg'

export function SidebarMenu(data = []) {

  const path = window.location.pathname;

  // if path === href, add active class
  data.forEach((item) => {
    if (path === item.href) {
      item.active = true;
    }
  });//${styles["navMenu-visible"]}

  return `
    <aside id="sidebar-menu" class="${styles["sidebar-menu"]}">
        <div class="${styles["logo-app-container"]}">
          <p>Singularity</p>
        </div>
        <ul>
          ${data.map((item) => `
            <li class="${item.active ? styles.active : ''}">
              <button id="${item.href}" type="button">${item.name} <img src=${item.icon} alt=logo></button>
            </li>
          `).join('')}
          <li><button id="logout" type="button">Logout<img src="${logOutIcon}" alt=logo></button></li>
        </ul>
      
    </aside>
  `;

}