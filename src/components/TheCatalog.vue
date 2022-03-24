<script setup>
import AppProductCard from '@/components/AppProductCard.vue'

const props = defineProps({
  catalog: {
    type: Array,
    required: true
  }
})
</script>

<template lang="pug">
section.catalog
  AppProductCard(
    v-for="item in catalog"
    :key="item.id"
    :item="item"
  ).catalog__item

</template>


<style lang="sass" scoped>
.catalog
  max-width: 100%
  display: grid
  gap: 2rem
  grid-template-columns: repeat(3, 1fr)
  +md-block
    grid-template-columns: repeat(2, 1fr)
  +sm-block
    grid-template-columns: 1fr

</style>
