import axios from "axios"

export const postsModule = {
    state: () => {
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
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.sortOption]?.localeCompare(post2[state.sortOption]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery) || post.body.toLowerCase().includes(state.searchQuery))
        },

    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setCreatePost(state, bool) {
            state.isCreatePost = bool
        },
        setPostsLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setSortOption(state, option) {
            state.sortOption = option
        },
        setSearchQuery(state, query) {
            state.searchQuery = query
        },
        setPage(state, pageNumber) {
            state.page = pageNumber
        },
        setTotalPages(state, pagesAmount) {
            state.totalPages = pagesAmount
        },
        addPost(state, newPost) {
            state.posts.push(newPost)
        },
        delPost(state, postId) {
            state.posts = state.posts.filter((post) => post.id != postId)
        },
    },
    actions: {
        async getPosts({state, commit}) {
            try {
                commit('setPostLoading', true)
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts`, {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    }
                )
                commit( 'setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            } catch (error) {
                console.log(error.message)
            } finally {
                commit('setPostLoading', false)
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page += 1)
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts`, {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    }
                )
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch (error) {
                console.log(error.message)
            } 
        },
    },
    namespaced: true,
}