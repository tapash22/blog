const NavigattionInformation = {
    namespaced:true,
    state() {
        return {
            items: [
                { text: 'Dhaka', icon: 'mdi-bike-fast' },
                { text: 'Chittagong', icon: 'mdi-ferry' },
                { text: 'Rajshahi', icon: 'mdi-bike-fast' },
                { text: 'Sylhet', icon: 'mdi-terrain' },
                { text: 'Mymensingh', icon: 'mdi-terrain' },
                { text: 'Rangpur', icon: 'mdi-terrain' },
                { text: 'Khulna', icon: 'mdi-sail-boat' },
                { text: 'Barisal', icon: 'mdi-sail-boat' },
            ],
            item: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
    },
    mutations: {

    },
    getters: {

    },
    actions: {

    }
}

export default NavigattionInformation;