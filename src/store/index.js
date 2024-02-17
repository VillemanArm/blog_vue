import { createStore } from 'vuex'
import { postsModule } from '@/store/postsModule'

export default createStore({
    state: {
        isAuth: false,
    },
    getters: {
        notAuth(state) {
            return !state.isAuth
        }
    },
    modules: { // данные импортируемые для отдельных компонентов, чтобы не засорять глобальный store
        posts: postsModule
    },

})

