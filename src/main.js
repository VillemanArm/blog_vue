import router from './router/router'

import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI/index' // 4. импортируем массив общих компонентов
import directives from '@/directives/'
import store from '@/store/'

const app = createApp(App) // 5. создаем vue приложение

components.forEach(component => { // 6. региcтрируем глобально в приложении каждый компонент из списка
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive) // принимает название без v-
})

app
    .use(router) // через метод use подключаются все дополнительные плагиниы и библиотеки во vue приложение.
    .use(store)
    .mount('#app') // 7. монтируем приложение с глобально зарегистрированными компонентами


