<script setup>
import AppButton from "@/components/AppButton.vue";

const emit = defineEmits(['closeForm'])
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template lang="pug">
.tnx
  p.tnx__title Спасибо, {{name}}. Скоро я с вами свяжусь. И да. Обязуюсь не передавать ваши данные третьим лицам
  AppButton(
    @click="$emit('closeForm')"
  ).tnx__btn Закрыть
</template>

<style lang="sass" scoped>
.tnx
  display: grid
  gap: 1rem
  &__btn
    justify-self: end

</style>
