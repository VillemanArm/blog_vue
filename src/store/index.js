import { createStore } from 'vuex'
import { postsModule } from '@/store/postsModule'

export default createStore({
    modules: { // данные импортируемые для отдельных компонентов, чтобы не засорять глобальный store
        posts: postsModule
    },

})
