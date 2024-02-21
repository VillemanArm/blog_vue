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
        },
        mounted() {
            if (this.post.body.length > 400) {
                this.$refs.content.innerText = this.post.body.slice(0, 400) + "..."
            } else 
                this.$refs.content.innerText = this.post.body
        }

    }
</script>

<template>
    <div className="post">
        <div className="post__buttons">
            <div className="post__button" @click="$router.push(`/works/blog_vue/posts/${post.id}`)">
                <BookOpenText  />
            </div>
            <div className="post__button" @click="editPost">
                <FileEdit />
            </div>
            <div className="post__button" @click="delPost">
                <Trash2 />
            </div>
        </div>
        <h2>{{ post.title }}</h2>
        <p ref="content" class="content"></p>
        <p class="date">{{ post.date }}</p>
    </div>
</template>

<style scoped lang="sass">
    @import '@/assets/constants.sass'

    .post     
        min-height: 28rem  
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
        padding-left: 10rem


    .post__button
        cursor: pointer
        
        & > svg
            width: 28rem !important
            height: 28rem !important

    h2
        margin-bottom: 12rem

    .date
        margin-top: 8rem
       

</style>
