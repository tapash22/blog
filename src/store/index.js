import { createStore } from "vuex";
import HotelInformation from './modules/hotelinfo/index'
import BusInformation from './modules/businfo/index'
import TourInformation from './modules/tourblog/index'
import footerInformation from './modules/footer/index'
import packageInformation from './modules/packages/index'


const store = createStore({
 
    modules:{
        hotel: HotelInformation,
        buss: BusInformation,
        tour: TourInformation,
        footer : footerInformation,
        packages : packageInformation
    },

});



export default store;