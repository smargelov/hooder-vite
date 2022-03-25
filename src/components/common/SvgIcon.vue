<script setup>
import {computed} from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  width: {
    type: Number,
    default: 24
  },
  height: {
    type: Number,
    default: 24
  }
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
<svg
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    :width="width"
    aria-hidden="true"
>
  <use :fill="color" :href="symbolId"/>
</svg>
</template>
