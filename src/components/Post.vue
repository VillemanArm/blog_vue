<script>
    import { Trash2, FileEdit, BookOpenText } from "lucide-vue-next"

    export default {
        components: { Trash2, FileEdit, BookOpenText},
        props: {
            post: {
                type: Object,
                required: true,
            },
            postIndex: {
                type: Number,
                required: true,
            },
        },
        methods: {
            editPost() {
                this.$store.commit('posts/setEditPost', true)
                this.$store.commit('posts/setEditedPostIndex', this.postIndex)
            },
        }
    }
</script>

<template>
    <div className="post">
        <div className="post__buttons">
            <div className="post__button" @click="$router.push(`/posts/${post.id}`)">
                <BookOpenText :size="28" />
            </div>
            <div className="post__button">
                <FileEdit :size="28" @click="editPost"/>
            </div>
            <div className="post__button" @click="$store.commit('posts/delPost', this.post.id)">
                <Trash2 :size="28" />
            </div>
        </div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
</template>

<style scoped lang="sass">
    .post
        
        margin-bottom: 12rem
        padding: 12rem 20rem

        font-size: 16rem
        font-family: 'Ubuntu'

        border-radius: 12rem
        box-shadow: 1rem 4rem 9rem 4rem rgba(0, 0, 0, 0.6)
    .post__buttons
        float: right
        display: flex
        gap: 8rem

    .post__button
        cursor: pointer

    h2
        margin-bottom: 12rem
</style>
