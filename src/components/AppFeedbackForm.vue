<script setup>
import AppButton from "@/components/AppButton.vue";

const emit = defineEmits(['sendFormHandler'])
const props = defineProps({
  //
})
</script>

<template lang="pug">
.feedback
  p.feedback__text Можете просто #[a(href="tel:+79208552911" title="Мой номер телефона") позвонить] мне или связаться в #[a(href="tg://resolve?domain=smargelov" title="Моя телега") Telegram]. Но так же можно отравить мне ваши данные и я сам с вами свяжусь
  p.feedback__text Тут будет форма
  AppButton(@click="$emit('sendFormHandler')") test

</template>


<style lang="sass" scoped>
</style>
