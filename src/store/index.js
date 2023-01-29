import { createStore } from "vuex";
import HotelInformation from './modules/hotelinfo/index'
import BusInformation from './modules/businfo/index'
import TourInformation from './modules/tourblog/index'
import NavigattionInformation from './modules/Navigattioninfo/index'


const store = createStore({
 
    modules:{
        hotel: HotelInformation,
        buss: BusInformation,
        tour: TourInformation,
        navigationinfo: NavigattionInformation,
    },

});

export default store;