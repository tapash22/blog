import { createStore } from "vuex";
import HotelInformation from "./modules/businfo/index";
import BusInformation from './modules/businfo/index'
import TourInformation from './modules/tourblog/index'


const store = createStore({
 
    modules:{
        hotel: HotelInformation,
        buss: BusInformation,
        tour: TourInformation
    },

});

export default store;