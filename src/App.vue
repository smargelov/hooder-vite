<script setup>
import TheHelloText from '@/components/TheHelloText.vue'
import {computed, onBeforeMount, ref} from 'vue'
import {productCount} from '@/helpers/helpers'
import {useCurrencyStore} from '@/stores/currency'
import {useProductStore} from '@/stores/products'
import AppModal from '@/components/AppModal.vue'
import AppFeedbackForm from '@/components/AppFeedbackForm.vue'

const productsStore = useProductStore()
const inStock = computed(() => productsStore.inStock)

const allProductsCount = computed(() => {
  return inStock.value.reduce((sum, product) => sum + productCount(product.sizes), 0)
})
const allProductsSum = computed(() => {
  return inStock.value.reduce((sum, product) => sum + (product.price * productCount(product.sizes)), 0)
})


const currency = useCurrencyStore()
onBeforeMount(() => {
  currency.fetchUsdCourse()
})

const isFormModalOpen = ref(false)
const openFormModal = () => {
  isFormModalOpen.value = true
}
const closeFormModal = () => {
  isFormModalOpen.value = false
}

const sendFormHandler = (form) => {
  console.log(form.name)
}
</script>

<template lang="pug">
TheHelloText(
  :product-count="allProductsCount"
  :all-price="allProductsSum"
  @open-form-modal="openFormModal"
)
router-view
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
