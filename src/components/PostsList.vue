<script>
    import Post from "@/components/Post.vue"
    // import AppInput from "./UI/AppInput.vue"


    export default {
        components: { Post },
        props: {
            posts: {
                type: Array,
                required: true,
            },
            sortOptions: {
                type: Array,
                required: true,
            },
            findPost: {
                type: Function,
                required: true,
            },
        },
        data() {
            return {}
        },
        methods: {
            delPost(postId) {
                this.$emit("delPost", postId)
            },
        },
    }
</script>

<template>
    <div className="posts__container">
        <transition-group name="post-list" >
            <Post
                v-for="post in posts" 
                :key="post.id"
                :post="post"
                @delPost="delPost"
            />
        </transition-group>
    </div>
</template>

<style scoped lang="sass">
    .posts-container
        display: flex
        align-items: center
        flex-direction: column

    .post-list-move, 
    .post-list-enter-active, 
    .post-list-leave-active  // Имена классов начинаются с имени transitionGroup
        transition: all 1s ease 
        
    .post-list-enter-from, 
    .post-list-leave-to 
        opacity: 0                          // Анимация добавляется на конкретные имена классов
        transform: translateX(100rem)

    .post-list-leave-active 
        position: absolute
    
    ul
        list-style-type: none
        
</style>
