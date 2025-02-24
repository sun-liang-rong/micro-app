import { createWebHistory, createRouter } from 'vue-router'
import Home from '../App.vue'
import Login from '../views/main/login.vue'
import childAbout from '@/views/child/childAbout.vue'
import childEnterprise from '@/views/child/childEnterprise.vue'
import childHome from '@/views/child/childHome.vue'
import childJob from '@/views/child/childJob.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/main/login',
        component: Login,
        name: 'mainLogin'
    },
    {
        path: '/child/home',
        component: childHome,
        name: 'childHome'
    },
    {
        path: '/child/job',
        component: childJob,
        name: 'childJob'
    },
    {
        path: '/child/enterprise',
        component: childEnterprise,
        name: 'childEnterprise'
    },
    {
        path: '/child/about',
        component: childAbout,
        name: 'childAbout'
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router