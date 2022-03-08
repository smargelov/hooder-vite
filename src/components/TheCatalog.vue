<script setup>
import { defineProps, computed, ref, onMounted } from 'vue'
import AppProductCard from '@/components/AppProductCard.vue'
const props = defineProps({
    catalog: {
        type:Array,
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


<style scoped lang="sass">
.catalog
    max-width: 100%
    display: grid
    gap: 2rem
    grid-template-columns: repeat(3, 1fr)
</style>
