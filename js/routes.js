import home from './pages/appsus.home.js';
import emailHome from './mister-email/pages/email.home.js';

const routes = [
    {path: '/', component: home},
    {path: '/email', component: emailHome}
];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes});

export default myRouter;