<script setup>
import {ref, defineProps} from 'vue'

const props = defineProps({
    productCount: {
        type: Number,
        default: 0
    },
    allPrice: {
        type: Number,
        default: 0
    }
})
</script>

<template lang="pug">
section.hello
    h1.hello__title Толстовки с капюшоном
    h2.hello__subtitle Продаю остатки после закрытия интернет-магазина
    p.hello__desc Время непростое и моя мечта воссоздать интернет-магазин по продаже вещей с капюшоном, похоже, не осуществится. Поэтому, оставшиеся толстовки ({{productCount}}) продаю.
    p.hello__desc Цена за всё — {{allPrice}} ₽. По частям не продаю. Без торга
</template>


<style scoped lang="sass">

</style>
