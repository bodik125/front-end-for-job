import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import SignUP from '@/views/signUp'
import Profile from '@/views/profile'
import itemEdit from '@/views/postItem'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/signin',
            component: () => import('./views/signIn.vue')
        },
        {
            path: '/signup',
            component: SignUP
        },
        {
            path: '/user/profile',
            component: Profile
        },
        {
            path: '/posts/all',
            component: () => import('./views/posts.vue')
        },
        {
            path: '/posts/add',
            component: () => import('./views/postsadd.vue')
        },
        {
            path: '/posts/edit/:id',
            component: itemEdit,
            name: 'itemEdit',
            props:true
        },
        {
            path: '/group/add',
            component: () => import('./views/addgroup.vue')
        },

    ]
})