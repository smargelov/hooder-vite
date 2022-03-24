<script setup>
import {uid} from "@/helpers/helpers.js";
import {computed} from "vue";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    validator(value) {
      return ['tel', 'text', 'email', 'textarea'].indexOf(value) !== -1
    },
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
const id = computed(() => uid())
const maskPattern = computed(() => {
  switch (props.label) {
    case 'Телефон':
      return '+7 (###) ###-##-##'
    case 'Telegram':
      return '!@X*'
    default:
      return ''
  }
})

</script>

<template lang="pug">
.field(v-if="type !== 'textarea'" )
  input(
    v-maska="maskPattern"
    v-model="value"
    :type="type"
    :disabled="disabled"
    :id="`field-${id}`"
    :class="{'field__input--val': value}"
  ).field__input
  label(
    :for="`field-${id}`"
  ).field__label {{label}}
.field(v-else)
  textarea(
    v-model="value"
    :disabled="disabled"
    :id="`field-${id}`"
    :class="{'field__input--val': value}"
  ).field__input.field__input--textarea
  label(
    :for="`field-${id}`"
  ).field__label {{label}}
</template>


<style lang="sass" scoped>
.field
  position: relative
  width: 100%
  display: inline-flex
  justify-content: stretch
  margin-top: 1.3rem

  &__input
    background-color: $bg-color
    box-shadow: inset 0 0 0 1px $bold-color
    height: 2rem
    border: none
    width: 100%
    padding: .3rem 1rem .2rem
    +baseTransition()
    &:focus
      outline: none
      box-shadow: inset 0 0 0 1px $accent-color

    &:focus, &--val
      & + .field__label
        top: -1rem
        left: .7rem
        color: $accent-color

    &--textarea
      resize: none
      padding-top: 1rem
      height: 5rem
      font-family: $main-font

  &__label
    position: absolute
    left: 1rem
    top: .5rem
    background-color: $bg-color
    color: $disable-color
    padding-right: .1rem
    padding-left: .1rem
    +baseTransition()

</style>
