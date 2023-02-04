export default {
  namespaced: true,

  state() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
      lists: [
        {
          id: 1,
          title: "Place",
          list: [
            "Dhaka",
            "Chittogong",
            "Sylhet",
            "Rajsahi",
            "Borishal",
            "Khulna",
            "Rongpur",
          ],
        },
        {
          id: 2,
          title: "Information",
          list: [
            "Recent Tour",
            "Travel Blog",
            "Our services",
            "Gideline with details",
            "Blog about",
            "Contact Form",
          ],
        },
        {
          id: 3,
          title: "Terms & Conditions",
          list: [
            "Recent Tour",
            "Travel Blog",
            "Our services",
            "Gideline with details",
            "Blog about",
            "Contact Form",
          ],
        },
      ],
    };
  },
  mutations: {},
  getters: {},
  actions: {},
};
