<script>
    import axios from "axios"

export default  {
    components: {},
    // props: {
    //     propsTemplate: {
    //         type: Function,
    //         required: true,
    //     },
    //     },
    data() {
        return {
            id: this.$route.params.id,
            post: '',
        }
    },
    methods: {
        async getPost() {
                try {
                    const response = await axios.get(
                        `https://jsonplaceholder.typicode.com/posts/${this.id}`, 
                    )
                    this.post = response.data
                } catch (error) {
                    console.log(error.message)
                } finally {
                    this.isPostsLoading = false
                }
            },
    },
    mounted() {
        this.getPost()
    }
}
</script>

<template>
    <div>
        <h1>This is page for post with ID = {{ id }}</h1>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>    
</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

</style>