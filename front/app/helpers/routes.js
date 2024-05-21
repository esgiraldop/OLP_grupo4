import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/home';
import { ReportScene } from '../scenes/private/reports';
import { SettingsScene } from '../scenes/private/settings';
import { UserScene } from '../scenes/private/users';
import { ForumScene } from '../scenes/private/forum';
import { Showcases } from '../scenes/private/showcases';
import { RegisterPage } from '../scenes/public/register';
import { RootScene } from '../scenes/public/root/root';
import { languagesScene } from '../scenes/private/languages'
import { shopScene } from '../scenes/private/shop';
import { PathScene } from '../scenes/private/learning-paths';

export const routes = {
    private: [
        { path: '/dashboard', component: HomeScene },
        { path: '/dashboard/reports', component: ReportScene },
        { path: '/dashboard/settings', component: SettingsScene },
        { path: '/dashboard/users', component: UserScene },
        { path: '/dashboard/forum', component: ForumScene},
        { path: '/dashboard/show-cases', component: Showcases },
        { path: '/dashboard/languages', component: languagesScene},
        { path: '/dashboard/shop', component: shopScene },
        { path: '/dashboard/learning-paths', component: PathScene },
    ],
    public: [
        { path: '/', component: RootScene },
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage },
    ]
};