import { navigateTo } from "../../../../Router";
import { logOut } from "../../../../helpers";
import { NavigationBar } from "../../../navigation-bar/navigation-bar";
import { SidebarMenu } from "../../../sidebar-menu/sidebar-menu";
import styles from './dashboard-layout.css';

export function DashboardLayout(pageContent, logic, footer, navbarData, sidebarData,) {

  // hace la peticion al backend.

  const root = document.getElementById('root');

  sidebarData = [
    { href: '/dashboard', name: 'Home' },
    // { href: '/dashboard/reports', name: 'Reports' },
    // { href: '/dashboard/settings', name: 'Settings' },
    // { href: '/dashboard/users', name: 'Users' },
    // { href: '/dashboard/products', name: 'Products' },
    // { href: '/dashboard/forum', name: 'Forum' },
    // { href: '/dashboard/show-cases', name: 'Showcases' },
    { href: '/dashboard/shop', name: 'Shop'},
    { href: '/dashboard/learning-paths', name: 'Learning Paths'}

  ];

 // { href: '/dashboard/languages', name: 'Languages' } // This link should not be accessible from the sidebar, but from the "routes" scene

  navbarData = {
    user: 'Nicolas Picon',
    userImage: 'https://randomuser.me/api/portraits/men/75.jpg',
  };

  root.innerHTML = `
  <div class="${styles.container}">
    <div class="${styles.sidebar}">
      ${SidebarMenu(sidebarData)}
    </div>
    <div class="${styles.navbar}">
      ${NavigationBar(navbarData)}
    </div>
    <div class="${styles.main}">
      ${pageContent}
    </div>
  </div>
  `;

  logic();

  sidebarData.forEach(({ href, icon, label }) => {
    document.getElementById(href).addEventListener('click', () => {
      navigateTo(href);
    });
  });

  document.getElementById('logout').addEventListener('click', logOut)
}