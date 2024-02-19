<script>
    import NewPostForm from "@/components/NewPostForm.vue"
    import EditPostForm from "@/components/EditPostForm.vue"
    import PostList from "@/components/PostsList.vue"
    import { mapState, mapGetters, mapMutations, mapActions } from "vuex"

    export default {
        components: { NewPostForm, PostList, EditPostForm },
        computed: {
            ...mapState({
                isCreatePost: state => state.posts.isCreatePost,
                isEditPost: state => state.posts.isEditPost,
                editedPostId: state => state.posts.editedPostId,
                isPostsLoading: state => state.posts.isPostsLoading,
                posts: state => state.posts.posts,
                sortOptions: state => state.posts.sortOptions,
                    
                sortOption: state => state.posts.sortOption,
                searchQuery: state => state.posst.searchQuery,
                page: state => state.posts.page,
                limit: state => state.posts.limit,
                totalPages: state => state.posts.totalPages,
            }),
            ...mapGetters({
                sortedPosts: 'posts/sortedPosts',           
                sortedAndSearchedPosts: 'posts/sortedAndSearchedPosts'
            }),
        },
        methods: {
            ...mapMutations({
                setPage: 'posts/setPage',
                setSearchQuery: 'posts/setSearchQuery',
                setSortOption: 'posts/setSortOption',
                setCreatePost: 'posts/setCreatePost',
                addPost: 'posts/addPost',
                delPost: 'posts/delPost',
                setEditPost: 'posts/setEditPost',
            }),
            ...mapActions({
                getPosts: 'posts/getPosts',
                loadMorePosts:'posts/loadMorePosts',
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
        <div class="posts-management__functions">
            <AppInput id="search-input"
            class="posts__search-input"
            :changeFunc="setSearchQuery"
            :placeholder="'⌕'"
            />
            <AppSelect id="sort-select"
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
        />
        <div v-else>Posts is loading</div>
        <div v-intersection="{ loadMorePosts }" ref="observer" class="observer"></div>
    </section>
    
    <Modal  v-if="isCreatePost" :header="'Create post'" :close="setCreatePost">
        <NewPostForm />
    </Modal>
    <Modal v-if="isEditPost" :header="'Edit post'" :close="setEditPost">
        <EditPostForm />
    </Modal>
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

        color: $light-font-color
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

