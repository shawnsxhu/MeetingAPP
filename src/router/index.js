import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Select from '../views/Select.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/123',
        name: 'Meeting',
        component: Select,
    },
]

const router = new VueRouter({
    mode:'history',
    routes
})

const DEFAULT_TITLE = 'Group Scheduling App';
router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router