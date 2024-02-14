import Main from "@/pages/Main.vue"
import Posts from "@/pages/Posts.vue"
import About from "@/pages/About.vue"
import PostPage from "@/pages/PostPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Posts,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/posts/:id',
        component: PostPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router