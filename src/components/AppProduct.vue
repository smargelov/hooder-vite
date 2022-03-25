<script setup>
import {computed, reactive} from 'vue'
import {useRoute} from 'vue-router'
import {fullPrice, sizes} from '@/helpers/helpers'
import {useCurrencyStore} from '@/stores/currency'
import {storeToRefs} from 'pinia'
import {useHead} from '@vueuse/head'
import AppImageSlider from '@/components/AppImageSlider.vue'
import {useProductStore} from '@/stores/products.js'

const route = useRoute()
const productsStore = useProductStore()
const item = computed(() => productsStore.getProductById(route.params.productId))

const siteData = reactive({
  title: `Бренд: ${item.value.brand} за ${item.value.price}₽`,
  description: item?.value.description
})
useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description)
    }
  ]
})

const sizesList = sizes(item.value)
const currency = useCurrencyStore()
const {usd} = storeToRefs(currency)
const usdToRubPrice = computed(() => Math.floor(item.value.usdPrice * usd.value))
const male = computed(() => {
  switch (item.value.male) {
    case 'm':
      return 'Для него'
    case 'w':
      return 'Для неё'
    default:
      return false
  }
})
</script>

<template lang="pug">
article.product
  router-link(
    to="/"
    title="На главную"
  ).product__home-link ← на главную
  .product__model Модель: {{item.id}}
  AppImageSlider(
    :images="item.images"
    :brand="item.brand"
  ).product__image
  .product__content
    .product__field-title Бренд:
    h3.product__brand {{item.brand}}
    .product__field-title Цена:
    .product__price {{item.price}} ₽
      span.product__old-price (Розничная цена: {{fullPrice(item)}})
    .product__field-title Для кого:
    .product__desc {{male}}
    .product__field-title Описание:
    .product__desc
      | Покупалось оптом по ${{item.usdPrice}}. (Это {{usdToRubPrice}}₽ по сегодняшнему курсу)
      br
      | {{item.description}}
    .product__field-title Размеры:
    .product__sizes-list
      .product__size(
        v-for="(size, key) in sizesList"
        :key="key"
      )
        span.product__size-title {{key.toUpperCase()}}: 
        span.product__size-count {{size}}
    .product__field-title Сезон:
    .product__desc {{item.season.join(', ')}}
</template>


<style lang="sass" scoped>
.product
  display: grid
  gap: 1rem 2rem
  grid-template-columns: minmax(auto, 1fr) 1fr
  justify-items: center
  +md-block
    grid-template-columns: 1fr 1fr

  &__home-link
    text-decoration: none
    color: $accent-color
    justify-self: start
    align-self: center

  &__model
    color: $accent-color
    font-size: 0.8em
    justify-self: end
    align-self: center

  &__image
    max-width: 100%
    +md-block
      grid-column: 1/-1

  &__content
    min-width: 45%
    justify-self: start
    display: grid
    gap: 1rem
    align-content: start
    align-items: center
    grid-template-columns: auto 1fr
    +md-block
      grid-column: 1/-1

  &__line
    display: grid
    gap: 1rem
    align-items: center

  &__brand
    margin-top: 0
    margin-bottom: 0
    font-size: 2rem
    color: $accent-color

  &__price
    font-weight: 700
    font-size: 1.8rem
    display: grid
    grid-template-columns: auto 1fr
    gap: 1rem
    align-items: center

  &__old-price
    font-weight: 200
    font-size: 1rem
    color: $accent-color

  &__field-title
    font-weight: 200

  &__sizes-list
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(40px, auto))
    justify-content: start
    gap: 5px

  &__size
    background-color: $accent-color
    color: $bg-color
    display: flex
    justify-content: center
    align-items: center
    padding: 2px 5px
    font-size: .7rem
    border-radius: 5px
    font-weight: 200


</style>
