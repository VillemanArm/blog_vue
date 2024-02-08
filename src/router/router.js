import Main from "@/pages/Main.vue"
import Posts from "@/pages/Posts.vue"
import About from "@/pages/About.vue"
import PostPage from "@/pages/PostPage.vue"
import PostsWithStorage from "@/pages/PostsWithStorage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
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
    {
        path: '/storage',
        component: PostsWithStorage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router