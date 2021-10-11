import {createWebHistory,createRouter} from 'vue-router'
 
import Home from './pages/Home.vue';
// import Registration from './pages/Registration.vue';
import AboutUs from './pages/AboutUs.vue';
import Signup from './pages/signup.vue';

const routes = [
 
    {
        name:'Home',
        path:'/Home',
        component:Home
    },
    {
        name:'AboutUs',
        path:'/AboutUs',
        component:AboutUs
    },
    // {
    //     name:'Registration',
    //     path:'/Registration',
    //     component:Registration
    // },
    {
        name:'Signup',
        path:'/Signup',
        component:Signup
    },
    
];
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history:createWebHistory(),
    routes
})
export default router;