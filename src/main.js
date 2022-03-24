import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import {createPinia} from 'pinia'
import {createHead} from '@vueuse/head'

createApp(App)
    .use(createHead())
    .use(createPinia())
    .use(router)
    .mount('#app')
