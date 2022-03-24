<script setup>
import {computed, toRefs} from 'vue'
import {useRoute} from 'vue-router'
import {fullPrice, sizes} from '@/helpers/helpers'
import {useCurrencyStore} from '@/stores/currency'
import {storeToRefs} from 'pinia'
import AppImageSlider from '@/components/AppImageSlider.vue'
import {useProductStore} from "@/stores/products.js";

const route = useRoute()
const productsStore = useProductStore()
const item = computed(() => productsStore.getProductById(route.params.productId))

const sizesList = sizes(item.value)
const currency = useCurrencyStore()
const {usd} = storeToRefs(currency)
const usdToRubPrice = computed(() => Math.floor(item.value.usdPrice * usd.value))
</script>

<template lang="pug">
article.product
  AppImageSlider(
    :images="item.images"
    :brand="item.brand"
  ).product__image
  .product__content
    router-link(
      to="/"
      title="На главную"
    ).product__home-link ← на главную
    h3.product__brand {{item.brand}}
    .product__price {{item.price}} ₽
      span.product__old-price (Розничная цена: {{fullPrice(item)}})
    .product__desc
      | Покупалось оптом по ${{item.usdPrice}}. (Это {{usdToRubPrice}}₽ по сегодняшнему курсу)
      br
      | {{item.description}}
    .product__sizes
      .product__sizes-title Размеры:
      .product__sizes-list
        .product__size(
          v-for="(size, key) in sizesList"
          :key="key"
        )
          span.product__size-title {{key.toUpperCase()}}: 
          span.product__size-count {{size}}
    .product__model Модель: {{item.id}}
</template>


<style lang="sass" scoped>
.product
  display: grid
  gap: 2rem
  grid-template-columns: minmax(auto, 1fr) 1fr
  justify-items: center
  +md-block
    grid-template-columns: 1fr

  &__image
    max-width: 100%

  &__content
    min-width: 45%
    justify-self: start
    display: grid
    gap: 1rem
    align-content: start

  &__home-link
    text-decoration: none
    color: $accent-color

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

  &__sizes
    display: grid
    grid-template-columns: auto 1fr
    align-items: start
    gap: 5px

  &__sizes-title
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

  &__model
    color: $accent-color
    font-size: 0.8em


</style>
