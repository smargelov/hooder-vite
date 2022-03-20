import {createRouter, createWebHistory} from 'vue-router'
import TheCatalog from '@/components/TheCatalog.vue'
import AppProduct from '@/components/AppProduct.vue'

const routes = [
	{path: '/', component: TheCatalog, name: 'Home'},
	{path: '/model-:productId', component: AppProduct, name: 'Product'}
]
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
