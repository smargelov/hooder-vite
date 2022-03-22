import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
	tablet: 480,
	laptop: 768
})

const laptop = breakpoints.greater('laptop')
const tablet = breakpoints.between('tablet', 'laptop')
const phone = breakpoints.smaller('tablet')

export {laptop, tablet, phone}
