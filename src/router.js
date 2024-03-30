import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Contatti from './pages/Contatti.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: Contatti,
        },
    ]
});

export { router };
