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
        methods: {
            ...mapMutations({
                setPage: 'post/setPage',
                setSearchQuery: 'post/setSearchQuery',
                setSortOption: 'post/setSortOption',
                setCreatePost: 'post/setCreatePost',
                addPost: 'post/addPost',
                delPost: 'post/delPost',
            }),
            ...mapActions({
                getPosts: 'post/getPosts',
                loadMorePosts:'post/loadMorePosts',
            }),

        },
        mounted() {
            this.getPosts()
        },
    }
</script>

<template>
    <section class="container posts-management">
        <AppButton @click="setCreatePost(true)" class="posts-management__create-btn"> Create post </AppButton>
        <Modal v-if="isCreatePost" :header="'Create post'" :close="setCreatePost">
            <NewPostForm @create="addPost" />
        </Modal>
        <div class="posts-management__functions">
            <AppInput 
                class="posts__search-input"
                :changeFunc="setSearchQuery"
            />
            <AppSelect
                class="posts__sort-select"
                :options="sortOptions"
                :changeFunc="setSortOption"
                :defaultLabel="'sort by'"
            ></AppSelect>
        </div>
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
    </section>
</template>

<style lang="sass">
    @import "@/assets/constants.sass"

    .container
        width: 900rem
        margin: 0 auto
        font-family: Ubuntu
        box-sizing: border-box

    .posts-management
        padding: 16rem 0
        display: flex
        justify-content: space-between
        align-items: center

    .posts-management__create-btn
        width: 200rem

    .posts-management__functions
        display: flex
        justify-content: end
        gap: 8rem

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

