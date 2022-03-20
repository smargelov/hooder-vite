<script setup>
import TheHelloText from '@/components/TheHelloText.vue'
import { catalog } from './db.json'
import {computed} from 'vue'
import {productCount} from '@/helpers/helpers'

const products = computed(() => {
    return catalog
})
const inStock = computed(() => {
    return products.value.filter(product => productCount(product.sizes))
})
const allProductsCount = computed(() => {
    return inStock.value.reduce((sum, product) => sum + productCount(product.sizes), 0)
})
const allProductsSum = computed(() => {
    return inStock.value.reduce((sum, product) => sum + (product.price * productCount(product.sizes)), 0)
})
</script>

<template lang="pug">
TheHelloText(
    :productCount="allProductsCount"
    :allPrice="allProductsSum"
)
router-view(
    :catalog="inStock"
)
</template>

<style lang="sass">
@import "@/assets/sass/main.sass"

</style>
