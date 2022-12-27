<template>
    <div class="home-view">
        <v-container>
            <!-- slots -->
            <v-row>
                <v-col>
                    <card-view>
                        <h2>this is new</h2>
                        <p>do you know</p>
                    </card-view>
                </v-col>
            </v-row>

            <v-row>
                <v-col v-for="transport in transports" :key="transport.id">
                    <PropsView :transport="transport" @bus-name="getBus" />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                   
                    <v-card class="d-block">
                        <v-card-title>{{ transpostname.name }}</v-card-title>
                        <v-card-text class="d-block ">
                            <v-list class="d-flex justify-space-between">
                                <v-lsit-item v-for="bus in transpostname.buses" :key="bus.id">
                                    <v-list-item-title>{{ bus.features }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ bus.price }}</v-list-item-subtitle>

                                </v-lsit-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                  
                  
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import CardView from './CardView.vue';
import PropsView from './PropsView.vue';

export default {
    name: 'home-view',

    data() {
        return {
            transports: [
                {
                    id: 1,
                    name: 'poribohon',
                    image: '',
                    buses: [
                        {
                            id: 1,
                            features: 'AC',
                            price: 1500,

                        },
                        {
                            id: 2,
                            features: 'Non AC',
                            price: 1000,
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'poribohon',
                    image: '',
                    buses: [
                        {
                            id: 1,
                            features: 'AC',
                            price: 1500,
                        },
                        {
                            id: 2,
                            features: 'Non AC',
                            price: 1000,
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'poribohon',
                    image: '',
                    buses: [
                        {
                            id: 1,
                            features: 'AC',
                            price: 1500,
                        },
                        {
                            id: 2,
                            features: 'Non AC',
                            price: 1000,
                        }
                    ]
                }
            ],
            transpostname: {},
          
        }
    },

    components: {
        CardView,
        PropsView

    },
    methods: {
        getBus(e) {
            this.transpostname = e;
   
            console.log(this.transpostname)
        }
    }
}
</script>