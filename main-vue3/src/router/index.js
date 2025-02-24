import { createWebHistory, createRouter } from 'vue-router'
import Home from '../App.vue'
import Login from '../views/main/login.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/main/login',
        component: Login
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router