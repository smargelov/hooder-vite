<script setup>
import {computed, toRefs} from 'vue'
import { useRoute } from 'vue-router'
import {fullPrice, sizes} from '@/helpers/helpers'

const props = defineProps({
    catalog: {
        type:Array,
        required: true
    }
})

const {catalog} = toRefs(props)
const route = useRoute()
const item = computed(() => {
    return catalog.value.find(product => product.id === route.params.productId)
})

const sizesList = sizes(item.value)

</script>

<template lang="pug">
article.product
    .product__slider
        picture.product__image
            source(
                :srcset="`/images/${item.images[0]}.webp`"
                type="image/webp"
            )
            img(
                :src="`/images/${item.images[0]}.jpg`"
                :alt="item.brand"
            )
    .product__content
        h3.product__brand {{item.brand}}
        .product__price {{item.price}} ₽
            span.product__old-price (Розничная цена: {{fullPrice(item)}})
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


<style scoped lang="sass">
.product
    display: grid
    gap: 2rem
    grid-template-columns: minmax(auto, 1fr) 1fr
    justify-items: center

    &__image
        max-width: 100%
        display: block
        height: 0
        overflow: hidden
        padding-bottom: 150%

        img
            max-width: 100%
            display: block
            object-fit: cover

    &__content
        min-width: 45%
        justify-self: start
        display: grid
        gap: 1rem
        align-content: start

    &__brand
        margin-top: 0
        margin-bottom: 0
        font-size: 2rem
        color: $accent-color

    &__price
        font-weight: 700
        font-size: 1.8rem
        display: grid
        grid-template-columns: repeat(2, auto)
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
