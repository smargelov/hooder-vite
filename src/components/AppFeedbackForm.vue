<script setup>
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";
import {computed, reactive} from "vue";

const emit = defineEmits(['sendFormHandler'])
const form = reactive({
  name: '',
  phone: '',
  tg: '',
  message: ''
})
const isRequire = computed(() => {
  return form.name && (form.phone || form.tg)
})

</script>

<template lang="pug">
.feedback
  p.feedback__text Можете просто #[a(href="tel:+79208552911" title="Мой номер телефона") позвонить] мне или связаться в #[a(href="tg://resolve?domain=smargelov" title="Моя телега") Telegram]. Но так же можно отправить мне ваши данные и я сам с вами свяжусь
  form(
    @submit.prevent
  ).feedback__form
    AppInput(
      label="Имя"
      v-model.trim="form.name"
    ).feedback__input
    AppInput(
      type="tel"
      label="Телефон"
      v-model.trim="form.phone"
    ).feedback__input
    AppInput(
      label="Telegram"
      v-model.trim="form.tg"
    ).feedback__input
    AppInput(
      type="textarea"
      label="Сообщение"
      v-model.trim="form.message"
    ).feedback__input
    AppButton(
      :disabled="!isRequire"
      type="submit"
      @click.once="$emit('sendFormHandler', form)"
    ).feedback__btn Отправить
</template>

<style lang="sass" scoped>
.feedback
  &__text
    margin-bottom: 0
    margin-top: 0

    &:not(:first-child)
      margin-top: 1rem

  &__form
    display: grid

  &__btn
    justify-self: end
    margin-top: 1.3rem


</style>
