import axios from "axios"

export const postsModule = {
    state: () => {
        return {
            isCreatePost: false,
            isEditPost: false,
            editedPostIndex: '',
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
            serverURL: `https://gem-toothsome-leo.glitch.me/posts/`,
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
        setEditPost(state, bool) {
            state.isEditPost = bool
        },
        setEditedPostIndex(state, postId) {
            state.editedPostIndex = postId
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
            state.posts.unshift(newPost)
        },
        delPost(state, postId) {
            state.posts = state.posts.filter((post) => post.id != postId)
        },
        editPost(state, editedPost) {
            state.posts[state.editedPostIndex] = editedPost
        },
    },
    actions: {
        async getPosts({state, commit}) {
            commit('setPage', 1)
            try {
                commit('setPostsLoading', true)
                const response = await axios.get(
                    state.serverURL, {
                        params: {
                            _sort: 'date,id',
                            _order: 'desc,desc',
                            _page: state.page,
                            _per_page: state.limit
                        }
                    }
                )
                commit( 'setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            } catch (error) {
                console.log(error.message)
            } finally {
                commit('setPostsLoading', false)
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page += 1)
                const response = await axios.get(
                    state.serverURL, {
                        params: {
                            _sort: 'date,id',
                            _order: 'desc,desc',
                            _page: state.page,
                            _per_page: state.limit
                        }
                    }
                )
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch (error) {
                console.log(error.message)
            } 
        },
        async addPostToDB({state}, newPost) {
            try {
                await axios.post(state.serverURL, newPost)
            } catch (error) {
                console.log(error.message)
            } 
        },
        async delPostFromDB({state}, postId) {
            try {
                await axios.delete(state.serverURL + postId)
            } catch (error) {
                console.log(error.message)
            } 
        },
        async editPostInDB({state}, editedPost) {
            try {
                await axios.put(state.serverURL + editedPost.id, editedPost)
            } catch (error) {
                console.log(error.message)
            } 
        }
    },
    namespaced: true,
}
