import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// route 0 cần đăng nhập vẫn vào đc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// route cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };

// @ là cái kí tự muốn match, và nickname là pattern 0 cố định, sau này cứ có /@ + kí tự sau thì nó sẽ vào
// page profile
