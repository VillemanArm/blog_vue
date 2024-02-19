<script>

    export default {
        data() {
            return {
                post: this.$store.getters['posts/sortedAndSearchedPosts'][this.$store.state.posts.editedPostIndex],

            }
        },
        methods: {
            publishPost() {
                const editedPost = {
                    id: this.post.id,
                    title: this.$refs.postTitle.value.trim(),
                    body: this.$refs.postContent.value.trim(),
                    date: this.post.date,
                }

                this.$store.commit('posts/editPost', editedPost)
                this.$refs.editablePost.reset()
                this.$store.commit('posts/setEditPost', false)
                this.$store.commit('posts/setCreatePost', false) 
                this.$store.dispatch('posts/editPostInDB', editedPost)
            },
            clearForm() {
                this.$refs.editablePost.reset()
            }
        },
        mounted() {     
            this.$refs.postTitle.value = this.post.title
            this.$refs.postContent.value = this.post.body
        }
    }
</script>

<template>
    <form ref="editablePost" className="editable-post" @submit.prevent>
        <input id="post-title" v-focus ref="postTitle" type="text" placeholder="Title" />
        <textarea id="post-content" ref="postContent" placeholder="Content"></textarea>
        <div class="editable-post__management">
            <AppButton @click="publishPost">publish</AppButton>
            <AppButton @click="clearForm">clear</AppButton>
        </div>
    </form>
</template>

<style scoped lang="sass">
    .editable-post
        display: flex
        flex-direction: column

        & input, & textarea
            margin-bottom: 12rem
            padding: 4rem 8rem

            font-family: Ubuntu, sans-serif
            clip-path: polygon(0 6rem, 6rem 0, 100% 0, 100% calc(100% - 6rem), calc(100% - 6rem) 100%, 0 100%,0 6rem)
            outline: none

        & textarea
            height: 270rem
            resize: none

    .editable-post__management
        display: flex
        gap: 12rem
        justify-content: end

        &>button
            width: 120rem

</style>
