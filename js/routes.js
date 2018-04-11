import home from './pages/appsus.home.js';
import emailHome from './pages/mister-email/email.home.js';
import emailCompose from './cmps/mister-email/email-compose.js';
import emailDetails from './cmps/mister-email/email-details.js';

const routes = [
    {path: '/', component: home},
    {path: '/email', component: emailHome,
    children: [
        {path: 'compose', component: emailCompose},
        {path: 'details/:id', component: emailDetails}      
    ]    
}
];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes});

export default myRouter;