<script setup>
import AppProductCard from '@/components/AppProductCard.vue'
import {useProductStore} from '@/stores/products.js'
import {computed} from 'vue'
import {useHead} from '@vueuse/head'

const productsStore = useProductStore()
const catalog = computed(() => productsStore.inStock)

useHead({
  title: computed(() => 'Распродажа толстовок с капюшоном'),
  meta: [
    {
      name: `description`,
      content: computed(() => 'Продаются остатки после закрытия интернет-магазина вещей с капюшоном')
    }
  ]
})

</script>

<template lang="pug">
a(
  href="https://docs.google.com/spreadsheets/d/1d9HXw6faq9rL-9Qv98PkCpyIC6z69AyhhjlMfK-sd_I/edit?usp=sharing"
  title="Все модели в виде Google таблицы"
  target="_blank"
).table-link Посмотреть все модели в виде google таблицы
section.catalog
  AppProductCard(
    v-for="item in catalog"
    :key="item.id"
    :item="item"
  ).catalog__item

</template>


<style lang="sass" scoped>

.catalog
  margin-top: 1rem
  max-width: 100%
  display: grid
  gap: 2rem
  grid-template-columns: repeat(3, 1fr)
  +md-block
    grid-template-columns: repeat(2, 1fr)
  +sm-block
    grid-template-columns: 1fr

</style>
