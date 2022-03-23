<script setup>
const emit = defineEmits(['buttonHandler'])
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<template lang="pug">
button(
    @click.prevent="$emit('buttonHandler')"
    :disabled="disabled"
).btn
    slot
</template>


<style scoped lang="sass">
.btn
    display: inline-flex
    background-color: $accent-color
    color: $bg-color
    border: none
    font-size: 1.2rem
    padding: .7rem 1.5rem
    align-items: center
    gap: .5rem
    justify-content: center
    border-radius: .2rem
    &:hover, &:focus-visible
        background-color: $bg-color
        box-shadow: 0 0 0 1px $accent-color
        color: $accent-color
        cursor: pointer
    &:disabled
        background-color: $disable-color
        &:hover, &:focus-visible
            background-color: $disable-color
            box-shadow: none
            color: $bg-color
            cursor: not-allowed

</style>
