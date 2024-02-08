import { createStore } from 'vuex'
import { postModule } from '@/store/postModule'

export default createStore({
    modules: { // данные импортируемые для отдельных компонентов, чтобы не засорять глобальный store
        post: postModule
    },

})
