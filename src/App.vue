<script setup>
import TheHelloText from '@/components/TheHelloText.vue'
import { catalog } from './db.json'
import {computed, onBeforeMount, onMounted, ref} from 'vue'
import {productCount} from '@/helpers/helpers'
import {useCurrencyStore} from '@/stores/currency'
import AppModal from '@/components/AppModal.vue'
import AppFeedbackForm from '@/components/AppFeedbackForm.vue'

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

const currency = useCurrencyStore()
onBeforeMount( () => {
    currency.fetchUsdCourse()
})

const isFormModalOpen = ref(false)
const openFormModal = () => {
    isFormModalOpen.value = true
}
const closeFormModal = () => {
    isFormModalOpen.value = false
}
</script>

<template lang="pug">
TheHelloText(
    :product-count="allProductsCount"
    :all-price="allProductsSum"
    @open-form-modal="openFormModal"
)
router-view(
    :catalog="inStock"
)
AppModal(
    :open="isFormModalOpen"
    @close="closeFormModal"
    )
    AppFeedbackForm(
        @send-form-handler="sendFormHandler"
    )
</template>

<style lang="sass">
@import "@/assets/sass/main.sass"

</style>
