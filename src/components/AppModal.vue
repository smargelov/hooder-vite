<script setup>
import {computed, ref, watch} from 'vue'
import {useHead} from '@vueuse/head'

const bodyClass = ref('')
useHead({bodyAttrs: [{class: computed(() => bodyClass.value)}]})
watch(() => props.open, (val) => {
  bodyClass.value = val ? 'modal-open' : ''
})
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template lang="pug">
Teleport( to="body")
  transition(name="fade")
    .overlay( v-if="open" @click="closeModal")
  transition(name="slide")
    .modal(v-if="open" @keydown.esc="closeModal")
      slot
      button(
        @click="closeModal"
      ).modal__close &times;
</template>

<style lang="sass" scoped>
.overlay
  position: fixed
  top: 0
  bottom: 0
  right: 0
  left: 0
  z-index: 10
  background-color: $text-color
  opacity: .95
  filter: blur(1.5rem)

.modal
  filter: blur(0)
  position: fixed
  z-index: 11
  left: 50%
  transform: translateX(-50%)
  top: 10vh
  background-color: $bg-color
  max-width: 30rem
  width: 70%
  padding: 2rem

  &__close
    position: absolute
    right: 1rem
    top: 1rem
    padding: .3rem
    background-color: transparent
    border: none
    font-size: 2.5rem
    line-height: .5
    font-weight: 200
    color: $text-color
    opacity: .7

    &:hover, &:focus-visible
      opacity: 1

    &:focus-visible
      outline: 1px solid $accent-color

.fade-enter-active
  transition: opacity 0.5s ease

.fade-leave-active
  transition: opacity 0.5s ease .4s

.fade-enter-from,
.fade-leave-to
  opacity: 0

.slide-enter-active
  transition: all 0.3s ease-out .3s

.slide-leave-active
  transition: all 0.4s ease-in-out

.slide-enter-from,
.slide-leave-to
  top: 4vh
  opacity: 0

</style>
