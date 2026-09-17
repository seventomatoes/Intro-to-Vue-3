const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [
                {id: 1, size: 'XS'},
                {id: 2, size: 'S'},
                {id: 3, size: 'M'},
                {id: 4, size: 'L'},
                {id: 5, size: 'XL'},
                {id: 6, size: 'XXL'},
                {id: 7, size: 'XXXL'}
            ]
        }
    }
})
