<template>
    <div class="transport">
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" lg="4" md="4" xl="4" v-for="transport in transports" :key="transport.id">
                    <v-card>
                        <v-img class="w-100 h-50 pa-2" src="../assets/bus.png" alt="bus"></v-img>
                        <v-card-title>{{ transport.name }}</v-card-title>

                        <v-card-text class="my-2 w-100 h-100 d-flex pa-0">
                            <v-list v-for="bus in transport.buses" :key="bus.id"
                                class="d-block pa-0 w-100 h-100 bg-red ">
                                <v-list-item class="w-100 h-50 d-flex justify-start  my-2">
                                    <v-list-item-title class="white--text text-h6">{{ bus.features }}</v-list-item-title>
                                    <v-list-item-subtitle class="text-yellow text-h6">Price: {{ bus.price }}</v-list-item-subtitle>
                                </v-list-item>
                                
                                <v-list-item-action class="h-50  w-100 d-flex ">
                                    <v-btn @click="save"  class="white--text d-flex justify-start w-100 bg-red">
                                        choose
                                    </v-btn>
                                </v-list-item-action>
                                     
                            </v-list>
                  
                            
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'transport',

    computed:{
        ...mapState('buss',{
            transports:'transports'
        })
    },
    
    methods:{
        save(){
            this.$router.push('/bus');
        }
    }
}
</script>