import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', {
	state: () => {
		return {
			usd: 0
		}
	},
	actions: {
		async fetchUsdCourse() {
			const url = 'https://cdn.cur.su/api/cbr.json'
			try {
				const response = await fetch(url)
				const data = await response.json()
				this.usd = await data.rates.RUB
			} catch (e) {
				console.log('ERROR: ', e.message)
			}
		}
	}
})
