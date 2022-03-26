<script setup>
import TheHelloText from '@/components/TheHelloText.vue'
import {computed, onBeforeMount, ref} from 'vue'
import {productCount} from '@/helpers/helpers'
import {useCurrencyStore} from '@/stores/currency'
import {useProductStore} from '@/stores/products'
import AppModal from '@/components/AppModal.vue'
import AppFeedbackForm from '@/components/AppFeedbackForm.vue'
import AppFeedbackTnx from '@/components/AppFeedbackTnx.vue'
import fetchFromToTelegram from '@/fetch/formToTelegram.js'
import AppFooter from '@/components/AppFooter.vue'

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

const userName = ref(null)
const isFormModalOpen = ref(false)
const openFormModal = () => {
  isFormModalOpen.value = true
}
const closeFormModal = () => {
  isFormModalOpen.value = false
}
const sendFormHandler = async (form) => {
  try {
    if (import.meta.env.PROD) {
      await fetchFromToTelegram(form)
    } else {
      await console.log(form)
    }
    userName.value = form.name
  } catch (e) {
    console.log(e.message)
    closeFormModal()
  }
}
</script>

<template lang="pug">
TheHelloText(
  :product-count="allProductsCount"
  :all-price="allProductsSum"
  @open-form-modal="openFormModal"
)
router-view
AppFooter
AppModal(
  :open="isFormModalOpen"
  @close="closeFormModal"
)
  AppFeedbackForm(
    v-if="!userName"
    @send-form-handler="sendFormHandler"
  )
  AppFeedbackTnx(
    v-else
    :name="userName"
    @close-form="closeFormModal"
  )
</template>

<style lang="sass">
@import "@/assets/sass/main.sass"

</style>
