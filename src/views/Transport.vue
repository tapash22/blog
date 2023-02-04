<template>
<div class="transport">
    <v-container>
        <!-- <h2 class="text-h6 font-weight-bold text-uppercase my-2 text-center">Transport</h2> -->
        <v-row>
            <v-col cols="12" sm="12" lg="12" md="12" xl="12" class="d-flex justify-center">
                <v-sheet rounded="xl" elevation="5" color="" class="my-5 w-100">
                    <h2 class="d-flex justify-center my-5 pa-3 text-uppercase text-h6 font-weight-bold bg-red-lighten-1 ">Select your Destination</h2>
                    <div class="date">
                        <Datepicker  v-model="transpost_info.date" :close-on-auto-apply="true" week-start="0" :auto-position="true" class="my-1 pa-2" placeholder="select date"></Datepicker>
                    </div>
                    <div class="form my-2 ">
                        <v-select label="From" chips variant="solo" :items="transpost_info.place" />
                        <v-select label="To" chips variant="solo" :items="transpost_info.place" />
                        <v-select label="Transport" chips variant="solo" :items="transpost_info.transport" />
                        <v-select label="Time" chips variant="solo" :items="transpost_info.times" />
                    </div>

                </v-sheet>
                <!-- <SingleTransport :transport="transport" />  v-for="transport in transports" :key="transport.id"-->
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// import SingleTransport from '../components/SingleTransport.vue';

export default {
    name: 'transport',

    computed: {
        ...mapState('buss', {
            transpost_info: 'transpost_info'
        })
    },

    components: {
        Datepicker
        // SingleTransport
    },
}
</script>

<style scoped>
.form {
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
}
.date{
    width: 100%;
    display:flex;
    justify-content: center;
}

@media only screen and (max-width:600px) {
    .form {
        width: 100%;
        display: grid;
        padding: 10px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 50px);
        grid-gap: 10px;
    }
}
</style>
