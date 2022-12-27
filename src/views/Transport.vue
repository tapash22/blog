<template>
    <div class="transport">
        <v-container>
            <h2 class="text-h4 text-uppercase my-2 text-center">Transport</h2>
            <v-row>
                <v-col cols="12" sm="6" lg="4" md="4" xl="4" v-for="transport in transports" :key="transport.id">
                    <SingleTransport :transport="transport" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import SingleTransport from '../components/SingleTransport.vue';

export default {
    name: 'transport',

    computed:{
        ...mapState('buss',{
            transports:'transports'
        })
    },

    components:{
        SingleTransport
    },
}
</script>