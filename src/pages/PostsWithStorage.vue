// TODO: передать в postlist количество страниц и сделать соответствующую пагинацию

<script>
    import NewPostForm from "@/components/NewPostForm.vue"
    import PostList from "@/components/PostsList.vue"
    import { mapState, mapGetters, mapMutations, mapActions } from "vuex"

    export default {
        components: { NewPostForm, PostList },
        data() {
            return {
                
            }
        },
        methods: {
            ...mapMutations({
                setPage: 'post/setPage',
                setSearchQuery: 'post/setSearchQuery'
            }),
            ...mapActions({
                getPosts: 'post/getPosts',
                loadMorePosts:'post/loadMorePosts',
            }),
            // openModal() {
            //     this.isCreatePost = true
            //     document.body.style.overflow = "hidden"
            // },
            // closeModal() {
            //     this.isCreatePost = false
            //     document.body.style.overflow = "visible"
            // },
            // addPost(newPost) {
            //     this.posts.push(newPost)
            // },
            // delPost(postId) {
            //     this.posts = this.posts.filter((post) => post.id != postId)
            // },
            
            // selectSortOption(event) {
            //     this.sortOption = event.target.value
            // },
            // findPost(query) {
            //     this.searchQuery = query.trim().toLowerCase()
            // }, 
            // changePage(pageNumber) {
            //     this.page = pageNumber
                
            // }
        },
        mounted() {
            this.getPosts()
        },
        computed: {
            ...mapState({
                isCreatePost: state => state.post.isCreatePost,
                isPostsLoading: state => state.post.isPostsLoading,
                posts: state => state.post.posts,
                sortOptions: state => state.post.sortOptions,
                    
                sortOption: state => state.post.sortOption,
                searchQuery: state => state.post.searchQuery,
                page: state => state.post.page,
                limit: state => state.post.limit,
                totalPages: state => state.post.totalPages,
            }),
            ...mapGetters({
                sortedPosts: 'post/sortedPosts',           
                sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
            }),
        },
        watch: {
            // page() {
            //     this.getPosts()
            // }
        }
    }
</script>

<template>
    <section class="container">
        <AppButton @click="openModal" class="create-button"> Create post </AppButton>
        <Modal v-if="isCreatePost" :header="'Create post'" :close="closeModal">
            <NewPostForm @create="addPost" />
        </Modal>
    </section>

    <section class="container">
        <PostList
            v-if="!isPostsLoading"
            :posts="sortedAndSearchedPosts"
            @delPost="delPost"
            :sortOptions="sortOptions"
            :selectSortOption="selectSortOption"
            :findPost="setSearchQuery"
        />
        <div v-else>Posts is loading</div>
        <div v-intersection="{ loadMorePosts }" ref="observer" class="observer"></div>
        <div class="pages__wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber" 
            :class="{
                'pages__button': true,
                'pages__current-page': page === pageNumber,
            }"
            @click="changePage(pageNumber)"
        >{{ pageNumber }}</div>
        </div> 
    </section>
</template>

<style lang="sass">
    @import "@/assets/constants.sass"

    .container
        width: 900rem
        margin: 0 auto
        font-family: Ubuntu
        box-sizing: border-box

    .create-button
        width: 100%
        margin: 16rem 0

        border-radius: 40rem !important

    .pages__wrapper
        display: flex
        gap: 8rem    
        justify-content: center
        margin-bottom: 16rem

    .pages__button
        min-width: 28rem
        padding: 4rem

        text-align: center

        color: $secondary-color
        background-color: $primary-color
        cursor: pointer
        border-radius: 4rem

        &:hover
            opacity: 0.75

    .pages__current-page
        opacity: 0.75

    .observer
        height: 10rem
        position: relative
        bottom: 400rem
</style>

