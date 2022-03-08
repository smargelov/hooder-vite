<script setup>
import { defineProps, computed, ref } from 'vue'
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
    return Object.keys(props.item.sizes).filter(size => obj[size]).reduce((res, size) => (res[size] = obj[size], res), {})
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
        span.product-card__old-price  (Розничная цена: {{fullPrice}})
    .product-card__sizes
        .product-card__sizes-title Размеры:
        .product-card__size(
            v-for="(size, key) in sizes"
            :key="key"
        )
            span.product-card__size-title {{key.toUpperCase()}}: 
            span.product-card__size-count {{size}}
    .product-card__model Модель: {{item.id}}
</template>


<style scoped lang="sass">
.product-card
    &__image
        max-width: 100%
        img
            max-width: 100%
            display: block

</style>
