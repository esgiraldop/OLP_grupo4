import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/home';
import { ReportScene } from '../scenes/private/reports';
import { SettingsScene } from '../scenes/private/settings';
import { UserScene } from '../scenes/private/users';
import { ForumScene } from '../scenes/private/forum';
import { Showcases } from '../scenes/private/showcases';
import { RegisterPage } from '../scenes/public/register';
import { RootScene } from '../scenes/public/root/root';
import { languagesScene } from '../scenes/private/languages';
import { shopScene } from '../scenes/private/shop';
import { PathScene } from '../scenes/private/learning-paths';
import { modulesScene } from '../scenes/private/modules';
import { challengesScene } from '../scenes/private/challenges';
import { GameScene } from '../scenes/private/games/games';
import { ProfileScene } from '../scenes/private/profile/profile';
import { PostScene } from '../scenes/private/posts/posts';
import { ChallengeScene_nico, CreateChallengeScene_nico } from '../scenes/private/challenges_nico';
// import { ModuleCreateScene_nico } from '../scenes/private/modules_nico/module-create';
import { CreatePathScene } from '../scenes/private/createpaths/'
import { CreateLangScene } from '../scenes/private/createlangs'
import { CreateModuleScene } from '../scenes/private/createmodules'
import { CreateChalgScene } from '../scenes/private/createchalgs'
import { AboutUsPage } from '../scenes/public/about-us/about-us';
import { publicHome } from '../scenes/public/publicHome/publicHome';
import { contact } from '../scenes/public/contact/contact';
import { servicesPage } from '../scenes/public/services';

export const routes = {
    private: [
        { path: '/dashboard', component: HomeScene },
        { path: '/dashboard/reports', component: ReportScene },
        { path: '/dashboard/settings', component: SettingsScene },
        { path: '/dashboard/users', component: UserScene },
        { path: '/dashboard/forum', component: ForumScene},
        { path: '/dashboard/show-cases', component: Showcases },
        { path: '/dashboard/shop', component: shopScene },
        { path: '/dashboard/learning-paths', component: PathScene },
        { path: '/dashboard/learning-paths/create', component: CreatePathScene },
        { path: '/dashboard/learning-paths/languages', component: languagesScene},
        { path: '/dashboard/learning-paths/languages/create', component: CreateLangScene },
        { path: '/dashboard/learning-paths/languages/modules', component: modulesScene},
        { path: '/dashboard/learning-paths/languages/modules/create', component: CreateModuleScene },
        { path: '/dashboard/learning-paths/languages/modules/challenges',component: challengesScene },
        { path: '/dashboard/learning-paths/languages/modules/challenges/create', component: CreateChalgScene },
        { path: '/dashboard/games', component: GameScene },
        { path: '/dashboard/profile', component: ProfileScene },
        { path: '/dashboard/posts', component: PostScene },
        { path: '/dashboard/challenges', component: ChallengeScene_nico},
        { path: '/dashboard/challenges/create', component: CreateChallengeScene_nico},
    ],
    public: [
        { path: '/', component: RootScene },
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage },
        { path: '/profile', component: ProfileScene },
        { path: '/about-us', component: AboutUsPage},
        { path: '/home', component: publicHome },
        { path: '/contact', component: contact },
        { path: '/services', component: servicesPage}
    ]
};