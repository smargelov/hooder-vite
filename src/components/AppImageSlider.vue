<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {laptop} from '@/helpers/breakpoints'
// Import Swiper styles
import 'swiper/css'
import "swiper/css/lazy"
import "swiper/css/scrollbar"
import "swiper/css/navigation"

// import required modules
import {Lazy, Navigation, Scrollbar} from 'swiper'

const modules = [Scrollbar, Lazy, Navigation]

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  brand: {
    type: String,
    required: true
  }
})
</script>

<template lang="pug">
Swiper(
  :scrollbar="{ hide: false }"
  :navigation="laptop"
  :modules="modules"
  :lazy="true"
).slider
  SwiperSlide(
    v-for="img in images"
  )
    picture.slider__image
      source(
        :srcset="`/images/${img}.webp`"
        type="image/webp"
      )
      img(
        :src="`/images/${img}.jpg`"
        :alt="brand"
      )

</template>


<style lang="sass">
.slider
  width: 100%

  &__image
    img
      display: block
      width: 100%
      height: 100%
      object-fit: cover

  .swiper-wrapper
    height: auto

  .swiper-scrollbar-drag
    background-color: $accent-color

  .swiper-button-next, .swiper-button-prev
    color: $accent-color

</style>
