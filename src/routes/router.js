import Vue from 'vue'
import VueRouter from 'vue-router'

import Favorite from '../views/Favorite.vue'
import Home from '../views/Home.vue'
import Watch from '../views/Watch.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/favorites/:user_id',
            name: 'favorites',
            component: Favorite
        },
        {
            path: '/watch/:video_id',
            name: 'watch',
            component: Watch
        },
    ]
})