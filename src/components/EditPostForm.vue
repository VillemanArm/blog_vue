<script>

    export default {
        data() {
            return {}
        },
        methods: {
            publishPost() {
                // const editedPost = {
                //     id: postId,
                //     title: this.$refs.newPostTitle.value.trim(),
                //     body: this.$refs.newPostContent.value.trim(),
                // }

                this.$store.commit('posts/editPost', postId, editedPost)
                this.$refs.editPost.reset()
            },
            clearForm() {
                this.$refs.editPost.reset()
            }
        },
        mounted() {
            const post = this.$store.getters['posts/sortedAndSearchedPosts'][this.$store.state.posts.editedPostId]

            this.$refs.editPostTitle.value = post.title
            this.$refs.editPostContent.value = post.body
        }
    }
</script>

<template>
    <form ref="editPost" className="post-editing" @submit.prevent>
        <input id="edit-post-header" v-focus ref="editPostTitle" type="text" placeholder="Title" />
        <textarea id="edit-post-body" ref="editPostContent" placeholder="Content"></textarea>
        <div class="post-editing__management">
            <AppButton class="post__button" @click="publishPost">publish</AppButton>
            <AppButton class="post__button" @click="clearForm">clear</AppButton>
        </div>
    </form>
</template>

<style scoped lang="sass">
    .post-editing
        display: flex
        flex-direction: column

        & input, & textarea
            margin-bottom: 12rem
            padding: 4rem 8rem

            font-family: Ubuntu, sans-serif
            border-radius: 8rem

        & textarea
            height: 270rem
            resize: none

    .post-editing__management
        display: flex
        gap: 12rem
        justify-content: end

        &>button
            width: 120rem

</style>
