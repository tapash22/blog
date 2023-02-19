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
            // {
            //     path:'homeview',
            //     name:'homeview',
            //     component: () => import(/* webpackChunkName: "homeview" */ '../views/test/HomeView.vue')
            // },
            {
                path:'travelblog',
                name:'travel-blog',
                component: () => import(/* webpackChunkName: "travelblog" */ '../views/TravelBlog.vue')
            },
          
            {
                path:'travelblogdetail/:id',
                name:'travelblogdetail',
                component: () => import(/* webpackChunkName: "travelblog" */ '../views/TravelBlogDetail.vue')
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
                path:'tourpackage',
                name:'tourpackage',
                component: () => import(/* webpackChunkName: "tourpackage" */ '../views/TourPackage.vue')
            },
            {
                path:'packagedetails/:id',
                name:'packagedetails',
                component: () => import(/* webpackChunkName: "packagedetails" */ '../views/PackageDetails.vue')
            },
            
            // {
            //     path:'transport',
            //     name:'transport',
            //     component: () => import(/* webpackChunkName: "transport" */ '../views/Transport.vue')
            // },
            // {
            //     path:'bus',
            //     name:'bus',
            //     component: () => import(/* webpackChunkName: "bus" */ '../views/Bus.vue')
            // },
            {
                path:'hotel',
                name:'hotel',
                component: () => import(/* webpackChunkName: "hotel" */ '../views/Hotel.vue')
            },
            {
                path:'fullhotel/:id',
                name:'fullhotel',
                component: () => import(/* webpackChunkName: "fullhotel" */ '../views/FullHotelView.vue')
            },
            // {
            //     path:'hotel/:id',
            //     name:'hoteldetails',
            //     component: () => import(/* webpackChunkName: "hoteldetails" */ '../components/HotelDetails.vue')
            // },
            // {
            //     path:'hotel/id/:room_id',
            //     name:'roomdetails',
            //     component: () => import(/* webpackChunkName: "roomdetails" */ '../components/RoomDetails.vue')
            // },
        ]
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;