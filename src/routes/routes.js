import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Host from '~/pages/Host';
import Form from '~/pages/Form';
import Guide from '~/pages/Guide';

// route 0 cần đăng nhập vẫn vào đc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.host, component: Host },
    { path: config.routes.guide, component: Guide },
    { path: config.routes.form, component: Form },
];

// route cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
