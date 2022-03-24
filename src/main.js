import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import {createPinia} from 'pinia'
import {createHead} from '@vueuse/head'
import Maska from "maska";

createApp(App)
    .use(createHead())
    .use(createPinia())
    .use(Maska)
    .use(router)
    .mount('#app')
