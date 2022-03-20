import {computed} from 'vue'

const productCount = (sizes) => {
	return Object.keys(sizes).reduce((sum, size) => sum + sizes[size], 0)
}

const plural = (number, one, two, five) => {
	// plural(10, 'носок', 'носка', 'носков') --> '10 носков'
	let n = Math.abs(number)

	n %= 100
	if (n >= 5 && n <= 20) {
		return `${number} ${five}`
	}

	n %= 10
	if (n === 1) {
		return `${number} ${one}`
	}

	if (n >= 2 && n <= 4) {
		return `${number} ${two}`
	}

	return `${number} ${five}`
}

const pluralProducts = number => plural(number, 'толстовку', 'толстовки', 'толстовок')

const fullPrice = computed(() => {
	return Math.round((props.item.price * 1.8) / 100) * 100
})
const sizes = computed(() => {
	const obj = props.item.sizes
	return Object.keys(props.item.sizes)
		.filter(size => obj[size])
		.reduce((res, size) => (res[size] = obj[size], res), {})
})

export {productCount, pluralProducts, fullPrice, sizes}
