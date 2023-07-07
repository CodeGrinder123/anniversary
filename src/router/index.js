import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import TicketsPage from '../views/TicketsPage.vue'
import AboutPage from '../views/AboutPage.vue'
import MilestonePage from '../views/MilestonePage.vue'
import MilestonePage_1 from '../views/MilestonePage_1.vue'
import MilestonePage_2 from '../views/MilestonePage_2.vue'
import MilestonePage_3 from '../views/MilestonePage_3.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: IndexPage,
    },
    {
        path: '/Tickets',
        name: 'Tickets',
        component: TicketsPage,
    },
    {
        path: '/About',
        name: 'About',
        component: AboutPage,
    },
    {
        path: '/Memory',
        name: 'Milestones',
        component: MilestonePage,
    },
    {
        path: '/Memory/2021',
        name: '2021',
        component: MilestonePage_1,
    },
    {
        path: '/Memory/2022',
        name: '2022',
        component: MilestonePage_2,
    },
    {
        path: '/Memory/2023',
        name: '2023',
        component: MilestonePage_3,
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router