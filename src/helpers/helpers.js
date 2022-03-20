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

export {productCount, pluralProducts}
