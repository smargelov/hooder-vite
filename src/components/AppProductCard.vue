<script setup>
import {computed, defineProps} from 'vue'

const props = defineProps({
    item: {
        type:Object,
        required: true
    }
})

const fullPrice = computed(() => {
    return Math.round((props.item.price * 1.8) / 100) * 100
})
const sizes = computed(() => {
    const obj = props.item.sizes
    return Object.keys(props.item.sizes)
        .filter(size => obj[size])
        .reduce((res, size) => (res[size] = obj[size], res), {})
})

</script>

<template lang="pug">
article.product-card
    picture.product-card__image
        source(
            :srcset="`/images/${item.images[0]}.webp`"
            type="image/webp"
        )
        img(
            :src="`/images/${item.images[0]}.jpg`"
            :alt="item.brand"
        )
    h3.product-card__brand {{item.brand}}
    .product-card__price {{item.price}} ₽
        span.product-card__old-price (Розничная цена: {{fullPrice}})
    .product-card__sizes
        .product-card__sizes-title Размеры:
        .product-card__sizes-list
            .product-card__size(
                v-for="(size, key) in sizes"
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
    display: grid
    gap: 10px
    align-self: start
    position: relative

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

    &__brand
        margin-top: 0
        margin-bottom: 0
        font-size: 1.5rem
        color: $accent-color

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
        &::before
            position: absolute
            display: block
            content: ''
            top: 0
            bottom: 0
            left: 0
            right: 0
            cursor: pointer
            z-index: 1

</style>
