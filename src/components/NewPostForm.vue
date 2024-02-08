<script>
    // import AppButton from "./UI/AppButton.vue"

    export default {
        // components: { AppButton },
        data() {
            return {}
        },
        methods: {
            createPost() {
                const newPost = {
                    id: Date.now(),
                    title: this.$refs.newPostTitle.value.trim(),
                    body: this.$refs.newPostContent.value.trim(),
                }
                this.$emit("create", newPost) // создание события с именем  create
                this.$refs.newPost.reset()
            },
        },
    }
</script>

<template>
    <form ref="newPost" className="post-creation" @submit.prevent>
        <input v-focus ref="newPostTitle" type="text" placeholder="Title" />
        <textarea ref="newPostContent" placeholder="Content"></textarea>
        <AppButton @click="createPost">publish</AppButton>
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
</style>
