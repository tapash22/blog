export default {
    namespaced: true,
    state() {
        return {
            hotels: [
                {
                    id: 1,
                    name: 'hotel name',
                    image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
                    rating: 4,
                    price: 44,
                    lists: ['Breakfast', 'Room Service', 'Gym', 'Swimming Pool']
                },
                {
                    id: 2,
                    name: 'hotel name',
                    image: 'https://i.ibb.co/vh8FDh1/francesca-saraco-d-S27-XGg-Ry-Q-unsplash.jpg',
                    rating: 4,
                    price: 44,
                    lists: ['Breakfast', 'Room Service', 'Gym', 'Swimming Pool']
                },
                {
                    id: 3,
                    name: 'hotel name',
                    image: 'https://i.ibb.co/DpFvPNR/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg',
                    rating: 4,
                    price: 44,
                    lists: ['Breakfast', 'Room Service', 'Gym', 'Swimming Pool']
                },
                {
                    id: 4,
                    name: 'hotel name',
                    image: 'https://i.ibb.co/BVHRxz3/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash.jpg',
                    price: 44,
                    rating: 4,
                    lists: ['Breakfast', 'Room Service', 'Gym', 'Swimming Pool']
                },
                {
                    id: 5,
                    name: 'hotel name',
                    image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
                    price: 44,
                    rating: 4,
                    lists: ['Breakfast', 'Room Service', 'Gym', 'Swimming Pool']
                },
                {
                    id: 6,
                    name: 'hotel name',
                    image: 'https://i.ibb.co/DpFvPNR/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg',
                    rating: 4,
                    price: 44,
                    lists: ['Breakfast', 'Room Service', 'Gym', 'Swimming Pool']
                },
                {
                    id: 7,
                    name: 'hotel name',
                    image: 'https://i.ibb.co/vh8FDh1/francesca-saraco-d-S27-XGg-Ry-Q-unsplash.jpg',
                    price: 44,
                    rating: 4,
                    lists: ['Breakfast', 'Room Service', 'Gym', 'Swimming Pool']
                },
                {
                    id: 8,
                    name: 'hotel name',
                    image: 'https://i.ibb.co/BVHRxz3/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash.jpg',
                    rating: 4,
                    price: 44,
                    lists: ['Breakfast', 'Room Service', 'Gym', 'Swimming Pool']
                },
            ]
        }
    },
    mutations: {

    },

    getters: {
        getHotelById: (state) => (id) => {
            return state.hotels.find(hotel => hotel.id === id)
        },
    },

    actions: {

    }
}
