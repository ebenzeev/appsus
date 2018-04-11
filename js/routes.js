import home from './pages/appsus.home.js';
import emailHome from './pages/mister-email/email.home.js';

const routes = [
    {path: '/', component: home},
    {path: '/email', component: emailHome}
];

Vue.use(VueRouter);
var myRouter = new VueRouter({mode:'history' ,routes});

export default myRouter;