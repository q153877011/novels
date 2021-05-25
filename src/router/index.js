import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import("@/view/home/home.vue")
const Login = () => import("@/view/login/login.vue")
const Registered = () => import("@/view/login/registered/registered.vue")
const Shelf = () => import("@/view/home/homeView/BookShelf.vue")
const Search = () => import("@/view/home/search/Search.vue")
const chapters = () => import("@/view/novel/chapters/chapters.vue")

const router =  new createRouter ({
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/home',
                    redirect: '/home/shelf'
                },
                {
                    path: 'shelf',
                    name: 'homeShelf',
                    component:Shelf,
                },
                {
                    path: 'search',
                    name: 'homeSearch',
                    component: Search
                }
            ]
        },
        {
            path: "/login",
            name: 'login',
            component: Login
        },
        {
            path: '/registered',
            name: 'registered',
            component: Registered
        },
        {
            path: '/chapters',
            component: chapters,
            name: 'chapters'
        }
    ],
    history: createWebHistory(),
})

router.beforeEach((to, from , next) => {
    if(to.name == 'homeShelf') {
        console.log("i will come to home");
    }
    next()
})

export default router