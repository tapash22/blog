export default {
  namespaced: true,
  state() {
    return {
      tours: [
        {
          id: 1,
          name: "travaling to cox bazzer",
          date: new Date(2022, 0, 24).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },
        {
          id: 2,
          name: "travaling to jaflong",
          date: new Date(2022, 0, 25).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },
        {
          id: 3,
          name: "travaling to Bandorbon",
          date: new Date(2022, 0, 28).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },
        {
          id: 4,
          name: "travaling to sundorbon",
          date: new Date(2022, 0, 29).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },
        {
          id: 5,
          name: "travaling to cox bazzer",
          date: new Date(2022, 0, 24).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },

        {
          id: 6,
          name: "travaling to jaflong",
          date: new Date(2022, 0, 24).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },
        {
          id: 7,
          name: "travaling to Bandorbon",
          date: new Date(2022, 0, 24).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },
        {
          id: 8,
          name: "travaling to sundorbon",
          date: new Date(2022, 0, 24).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },
        {
          id: 9,
          name: "travaling to Borisal",
          date: new Date(2022, 0, 24).toUTCString(),
          image: "https://i.ibb.co/5YVBDG0/bus.jpg",
        },
      ],

      packagess: [
        {
          id: 1,
          name: "Tour package",
          des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi aut nesciunt dicta eveniet autem, earum quidem deserunt,Doloremque eligendi aut nesciunt dicta eveniet autem, earum quidem deserunt,Doloremque eligendi aut nesciunt dicta eveniet autem, earum quidem deserunt, ",
          icon: "train-car",
          link: "/tourpackage",
        },
        {
          id: 2,
          name: "Hotel",
          des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi aut nesciunt dicta eveniet autem, earum quidem deserunt,Doloremque eligendi aut nesciunt dicta eveniet autem, earum quidem deserunt,Doloremque eligendi aut nesciunt dicta eveniet autem, earum quidem deserunt, ",
          icon: "home-city-outline",
          link: "/hotel",
        },
      ],
    };
  },
  mutations: {},

  getters: {
     getProductById: (state) => (id) => {
           return state.tours.find(tour => tour.id == id)
        },

        // getId:(state)=>{
        //   return state.tours.filter(tour => tour.id === 2)
        // }

  },

  actions: {},
}
