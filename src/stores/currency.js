import {defineStore} from 'pinia'

export const useCurrencyStore = defineStore('currency', {
    state: () => {
        return {
            usd: 0
        }
    },
    actions: {
        async fetchUsdCourse() {
            const url = 'https://api.freecurrencyapi.com/v1/latest?apikey=XKx4e9wHATFblqduhQvZSYGOE95DkydSvX6QdaOl'
            try {
                const response = await fetch(url)
                const {data} = await response.json()
                this.usd = await data.RUB
            } catch (e) {
                console.log('ERROR: ', e.message)
            }
        }
    }
})
