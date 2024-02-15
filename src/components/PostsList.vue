<script>
    import Post from "@/components/Post.vue"

    export default {
        components: { Post },
    }
</script>

<template>
    <div className="posts__container">
        <!-- <transition-group name="post-list" > -->
            <Post
                v-for="post, index in $store.getters['posts/sortedAndSearchedPosts']" 
                :key="post.id"
                :post="post"
                :postIndex="index"
            />
        <!-- </transition-group> -->
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
