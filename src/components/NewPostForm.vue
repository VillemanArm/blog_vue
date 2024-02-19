<script>

    export default {
        data() {
            return {}
        },
        methods: {
            publishPost() {
                let date = new Date
                date = date.toLocaleDateString('ru').split('.').reverse().join('.')
                const newPost = {
                    id: Date.now(),
                    date: date,
                    title: this.$refs.newPostTitle.value.trim(),
                    body: this.$refs.newPostContent.value.trim(),
                }

                this.$store.commit('posts/addPost', newPost)
                this.$store.dispatch('posts/addPostToDB', newPost)
                this.$refs.newPost.reset() 
                this.$store.commit('posts/setCreatePost', false)          
            },
            clearForm() {
                this.$refs.newPost.reset()
            }
        },
    }
</script>

<template>
    <form ref="newPost" className="post-creation" @submit.prevent>
        <input id="create-post-header" v-focus ref="newPostTitle" type="text" placeholder="Title" />
        <textarea id="create-post-body" ref="newPostContent" placeholder="Content"></textarea>
        <div class="post-creation__management">
            <AppButton class="post-creation__button" @click="publishPost">publish</AppButton>
            <AppButton class="post-creation__button" @click="clearForm">clear</AppButton>
        </div>
    </form>
</template>

<style scoped lang="sass">
    *
        margin: 0
        padding: 0

        box-sizing: border-box

    .post-creation
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

    .post-creation__management
        display: flex
        gap: 12rem
        justify-content: end

        &>button
            width: 120rem

</style>
