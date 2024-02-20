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
                    const response = await axios.get(this.$store.state.posts.serverURL + this.id)
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
    <div class='container'>
        <div v-if="!$store.state.posts.isPostsLoading">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
        </div>
        <div v-else class="loader-wrapper">
            <AppLoader />            
        </div>
    </div>    
</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

</style>