<script setup>
import AppButton from '@/components/AppButton.vue'

const emit = defineEmits(['openFormModal'])
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
  p.hello__desc Цена за всё — #[strong {{allPrice}}] ₽. По частям не продаю. Без торга
  AppButton.hello__form-btn(@click="$emit('openFormModal')") Кнопка для связи со мной
</template>


<style lang="sass" scoped>
.hello
  padding-bottom: 2rem
  display: flex
  flex-direction: column
  gap: 1rem
  align-items: center

  &__title
    text-align: center
    font-size: 2rem
    margin-bottom: 0

  &__subtitle
    text-align: center
    font-size: 1.5rem
    margin-bottom: 0
    margin-top: 0

  &__desc
    max-width: 32rem
    margin: 0

  &__form-btn
    justify-self: center

</style>
