<script setup>
import {toRefs} from 'vue'
import {fullPrice, sizes} from '@/helpers/helpers'
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
    .product-card__title-line
        h3.product-card__brand {{item.brand}}
        button.product-card__more(
            @click="$router.push(`/model-${item.id}`)"
        ) посмотреть →
    .product-card__price {{item.price}} ₽
        span.product-card__old-price (Розничная цена: {{fullPrice(item)}})
    .product-card__sizes
        .product-card__sizes-title Размеры:
        .product-card__sizes-list
            .product-card__size(
                v-for="(size, key) in sizesList"
                :key="key"
            )
                span.product-card__size-title {{key.toUpperCase()}}: 
                span.product-card__size-count {{size}}
    router-link(
        :to="`/model-${item.id}`"
        :title="`Бренд: ${item.brand} за ${item.price}₽`"
    ).product-card__model Модель: {{item.id}}
</template>


<style scoped lang="sass">
.product-card
    max-width: 90vw
    display: grid
    gap: .8rem
    align-self: start
    position: relative

    &__image
        max-width: 100%
        display: block
        height: 0
        overflow: hidden
        padding-bottom: 150%

    &__title-line
        display: flex
        justify-content: space-between
        align-items: center

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

    &__more-icon
        transform: scale(.9)

    &__price
        font-weight: 700
        font-size: 1.8rem
        display: grid

    &__old-price
        font-weight: 200
        font-size: .8rem
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
        text-decoration: none

</style>
