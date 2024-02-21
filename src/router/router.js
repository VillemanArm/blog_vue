import Posts from "@/pages/Posts.vue"
import About from "@/pages/About.vue"
import PostPage from "@/pages/PostPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/works/blog_vue/',
        component: Posts,
        // redirect: to => ({ path: '/works/blog_vue/' })
    },
    {
        path: '/works/blog_vue/about',
        component: About,
    },
    {
        path: '/works/blog_vue/posts/:id',
        component: PostPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router