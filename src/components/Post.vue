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
            delPost() {
                this.$store.commit('posts/delPost', this.post.id)
                this.$store.dispatch('posts/delPostFromDB', this.post.id)
            }
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
            <div className="post__button" @click="delPost">
                <Trash2 :size="28" />
            </div>
        </div>
        <h2>{{ post.title }}</h2>
        <p class="content">{{ post.body }}</p>
        <p class="date">{{ post.date }}</p>
    </div>
</template>

<style scoped lang="sass">
    @import '@/assets/constants.sass'

    .post       
        margin-bottom: 12rem
        padding: 12rem 20rem 22rem 20rem

        font-size: 16rem
        font-family: 'Ubuntu', sans-serif
        color: $dark-font-color

        clip-path: polygon(0 0,100% 0,100% calc(100% - 20rem), calc(100% - 10rem) calc(100% - 10rem), 10rem calc(100% - 10rem), 0 100%,0 5rem)
        background-color: $primary-color
    .post__buttons
        float: right
        display: flex
        gap: 8rem

    .post__button
        cursor: pointer

    h2
        margin-bottom: 12rem

    .date
        margin-top: 8rem
       

</style>
