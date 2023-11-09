import { createRouter, createWebHistory } from 'vue-router';
import Guest from './Views/GuestPage'
import Login from './components/guestComponents/login'
import Register from './components/guestComponents/registration'
import HomePage from "@/Views/HomePage";
import tableNotes from './Views/NotesPage';

import userPage from "@/Views/UserPage";

const routes =[
    {
        path: '/',
        name: 'GuestPage',
        meta: { requiresAuth: false },
        component: Guest
    },
    {
        path: '/login',
        name: 'login',
        meta: { requiresAuth: false },
        component: Login
    },
    {
        path:'/register',
        name:'register',
        meta: { requiresAuth: false },
        component: Register,
    },
    {
        path:'/home',
        meta: { requiresAuth: true },
        name:'home',
        component: HomePage
    },
    {
        path:'/allNotes',
        meta: { requiresAuth: true },
        name:'allNotes',
        component: tableNotes,
    },
    {
        path:'/user',
        name:"user",
        component: userPage,
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title || "Your Default Title";
//     next();
// })

export default router