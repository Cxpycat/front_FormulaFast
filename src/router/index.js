import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: () => import('../views/HomeView.vue'),
        }, {
            path: '/login',
            name: 'Авторизация',
            component: () => import('../views/LoginView.vue'),
        }, {
            path: '/register',
            name: 'Регистрация',
            component: () => import('../views/RegisterView.vue'),
        }, {
            path: '/calendar',
            name: 'Календарь',
            component: () => import('../views/CalendarView.vue'),
        }, {
            path: '/tourney',
            name: 'Турнирная таблица',
            component: () => import('../views/TourneyView.vue'),
        }, {
            path: '/*',
            name: '404',
            component: () => import('../views/HomeView.vue'),
        },

    ],
});

router.beforeEach((to, fromm, next) => {
    const accessToken = localStorage.access_token;
    if (!accessToken) {
        if (to.name !== 'Профиль') {
            return next();
        }
        else {
            return next({
                name: 'Авторизация',
            });
        }
    }
    if (accessToken) {
        if (to.name === 'Авторизация' || to.name === 'Регистрация' && accessToken) {
            return next({
                name: 'Профиль',
            });
        }

    }
    next();
});

export default router;
