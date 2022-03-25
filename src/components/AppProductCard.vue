<script setup>
import {toRefs} from 'vue'
import {sizes} from '@/helpers/helpers'
import AppImageSlider from '@/components/AppImageSlider.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const {item} = toRefs(props)
const sizesList = sizes(item.value)

</script>

<template lang="pug">
article.product-card
  AppImageSlider(
    :images="item.images"
    :brand="item.brand"
  ).product-card__image
  .product-card__desc
    h3.product-card__brand {{item.brand}}
    router-link.product-card__more(
      :to="`/model-${item.id}`"
      :title="`Бренд: ${item.brand} за ${item.price}₽`"
    ) →
    .product-card__price {{item.price}} ₽
    .product-card__sizes
      .product-card__size(
        v-for="(size, key) in sizesList"
        :key="key"
      )
        span.product-card__size-title {{key.toUpperCase()}}: 
        span.product-card__size-count {{size}}
</template>


<style lang="sass" scoped>
.product-card
  max-width: 90vw
  display: grid
  gap: .5rem
  align-self: start
  position: relative

  &__image
    max-width: 100%
    display: block
    height: 0
    overflow: hidden
    padding-bottom: 150%

  &__desc
    display: grid
    gap: .5rem
    grid-template-columns: auto 1fr
    align-items: center
    position: absolute
    z-index: 1
    right: 0
    left: 0
    bottom: 0
    background-color: rgba(#ffffff, .7)
    padding: .5rem 1rem 1rem

  &__brand
    margin-top: 0
    margin-bottom: 0
    font-size: 1.5rem
    color: $accent-color

  &__more
    background-color: transparent
    color: $accent-color
    border: none
    display: inline-flex
    align-items: center
    justify-content: center
    opacity: .7
    cursor: pointer
    justify-self: end
    font-size: 1.5rem
    text-decoration: none

    &::before
      position: absolute
      content: ''
      display: block
      left: 0
      right: 0
      top: 0
      bottom: 0

  &__more-icon
    transform: scale(.9)

  &__price
    font-size: 1.8rem
    display: grid

  &__sizes
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(40px, auto))
    gap: 0.3rem
    justify-content: end

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
    text-decoration: none

</style>
