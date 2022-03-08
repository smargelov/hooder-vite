export const productCount = (sizes) => {
	return Object.keys(sizes).reduce((sum, size) => sum + sizes[size], 0)
}

export default {productCount}
