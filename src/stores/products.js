import {defineStore} from 'pinia'
import {catalog} from '@/db.json'
import {productCount} from "@/helpers/helpers.js";

export const useProductStore = defineStore('products', {
    state: () => ({
        products: catalog
    }),
    getters: {
        inStock: (state) => {
            return state.products.filter(product => productCount(product.sizes))
        },
        getProductById: (state) => {
            return (productId) => state.inStock.find(product => product.id === productId)
        }
    }
})
