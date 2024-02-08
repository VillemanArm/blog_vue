// TODO: передать в postlist количество страниц и сделать соответствующую пагинацию

<script>
    import NewPostForm from "@/components/NewPostForm.vue"
    import PostList from "@/components/PostsList.vue"
    import axios from "axios"

    export default {
        components: { NewPostForm, PostList },
        data() {
            return {
                isCreatePost: false,
                isPostsLoading: false,
                posts: [],
                sortOptions: [
                    {
                        value: "title",
                        name: "title",
                    },
                    {
                        value: "body",
                        name: "content",
                    },
                ],
                sortOption: "",
                searchQuery: "",
                page: 1,
                limit: 10,
                totalPages: 0,
            }
        },
        methods: {
            openModal() {
                this.isCreatePost = true
                document.body.style.overflow = "hidden"
            },
            closeModal() {
                this.isCreatePost = false
                document.body.style.overflow = "visible"
            },
            addPost(newPost) {
                this.posts.push(newPost)
            },
            delPost(postId) {
                this.posts = this.posts.filter((post) => post.id != postId)
            },
            async getPosts() {
                try {
                    this.isPostsLoading = true
                    const response = await axios.get(
                        `https://jsonplaceholder.typicode.com/posts`, {
                            params: {
                                _page: this.page,
                                _limit: this.limit
                            }
                        }
                    )
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data
                } catch (error) {
                    console.log(error.message)
                } finally {
                    this.isPostsLoading = false
                }
            },
            async loadMorePosts() {
                try {
                    this.page += 1
                    const response = await axios.get(
                        `https://jsonplaceholder.typicode.com/posts`, {
                            params: {
                                _page: this.page,
                                _limit: this.limit
                            }
                        }
                    )
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data]
                } catch (error) {
                    console.log(error.message)
                } 
            },
            selectSortOption(event) {
                this.sortOption = event.target.value
            },
            findPost(query) {
                this.searchQuery = query.trim().toLowerCase()
            }, 
            // changePage(pageNumber) {
            //     this.page = pageNumber
                
            // }
        },
        mounted() {
            this.getPosts()
            


        },
        computed: {
            sortedPosts() {
                return [...this.posts].sort((post1, post2) => post1[this.sortOption]?.localeCompare(post2[this.sortOption]))
            },
            sortedAndSearchedPosts() {
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery) || post.body.toLowerCase().includes(this.searchQuery))
            },
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
            :findPost="findPost"
        />
        <div v-else>Posts is loading</div>
        <div v-intersection="{ loadMorePosts }" ref="observer" class="observer"></div>
        <!-- <div class="pages__wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber" 
            :class="{
                'pages__button': true,
                'pages__current-page': page === pageNumber,
            }"
            @click="changePage(pageNumber)"
        >{{ pageNumber }}</div>
        </div> -->
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

