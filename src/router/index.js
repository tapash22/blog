const { createRouter, createWebHistory } = require("vue-router");
import Client from '../views/Client.vue'

const routes = [
    {
        path:'/',
        name:'client',
        component:Client,
        redirect:'/home',
        children:[
            {
                path:'home',
                name:'home',
                component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
            },
            {
                path:'travelblog',
                name:'travel-blog',
                component: () => import(/* webpackChunkName: "travelblog" */ '../views/TravelBlog.vue')
            },
            {
                path:'login',
                name:'login',
                component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
            },
            {
                path:'trip',
                name:'trip',
                component: () => import(/* webpackChunkName: "trip" */ '../views/Trip.vue')
            },
            {
                path:'transport',
                name:'transport',
                component: () => import(/* webpackChunkName: "transport" */ '../views/Transport.vue')
            },
            {
                path:'hotel',
                name:'hotel',
                component: () => import(/* webpackChunkName: "hotel" */ '../views/Hotel.vue')
            },
            {
                path:'hotel/:id',
                name:'hoteldetails',
                component: () => import(/* webpackChunkName: "hoteldetails" */ '../components/HotelDetails.vue')
            },
            {
                path:'hotel/id/:room_id',
                name:'hotelroom',
                component: () => import(/* webpackChunkName: "hotelroom" */ '../components/RoomDetails.vue')
            },
        ]
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;