<template>
    <div class="room-details">
        <v-container>
            <v-row class="my-5 d-flex justify-center" v-for="room in rooms" :key="room.id">
                <v-col cols="12" sm="12" lg="4" md="4" xl=4>
                    <v-img src="../assets/hotel.jpg" />

                </v-col>
                <v-col cols="12" sm="12" lg="6" md="6" xl="6" class="pa-0">
                    <v-card class="w-100" elevation="10">
                        <v-card-title class="my-2 text-h5 text-weight-bold"> {{ room.r_name }}</v-card-title>
                        <v-card-subtitle class="text-h6">Price: {{ room.rent }}/night</v-card-subtitle>
                        <v-rating v-model="room.rating" size="20" readonly class="mx-5 my-2" color="red"></v-rating>
                        <v-card-text class="d-flex bg-red my-2">
                            <v-chip size="lg" color="red" class="pa-2 d-flex justify-center mx-1 bg-white"
                                v-for="datail in room.datails" :key="datail">
                                {{ datail }}
                            </v-chip>
                        </v-card-text>
                     
                        <v-card-text class="mx-2 pa-0">

                            <h3 class="text-h6 pa-0 ml-3">Information:</h3>

                            <p class="pa-2 mx-2 text-body-1 text-justify">
                                {{ room.breif }}
                            </p>
                        </v-card-text>
                        <v-card-text-actions class="d-flex justify-start w-100">
                            <Datepicker v-model="date" range week-start="0" calendar-cell-class-name="dp-custom-cell"
                                :auto-position="true" class="my-2 pa-2 mx-0 w-75 " placeholder="select date">
                            </Datepicker>
                            <v-btn class="text-h6 d-flex justify-center w-25 my-4 mr-2 bg-red" 
                                @click="onSearch">
                                check-Out
                            </v-btn>
                           
                        </v-card-text-actions>
                        <v-card-subtitle class="my-5 text-center text-body-1 text-red text-uppercase">welcome to our service</v-card-subtitle>
                     
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'hotelroom',
    data() {
        return {
            id: this.$route.params.room_id,
            date: '',
            rooms: [
                {
                    id: 1,
                    r_name: 'Couple Room',
                    w_room: '1',
                    breif: 'this room is very beautiful.there have south-face window and see view face.this room have one shoure with gizer and also have steam bath.for more deatil you can call given number and clear your confution.',
                    datails: ['south-face', 'Led TV', 'Fridze', 'Drawing', 'single-bed', 'room-service', 'Aircondition'],
                    image: [],
                    rent: 44.0,
                    rating: 4,
                },
                // {
                //     id:2,
                //     r_name:'single room',
                //     w_room:'1',
                //     datails:['south-face','tv','fridge','chair','double-bed','room-service','AC'],
                //     image:[],
                //     rent:44,
                // },
                // {
                //     id:3,
                //     r_name:'single room',
                //     w_room:'1',
                //     datails:['north-face','tv','fridge','chair','couple-bed','room-service','AC'],
                //     image:[],
                //     rent:44,
                // },
                // {
                //     id:4,
                //     r_name:'double room',
                //     w_room:'2',
                //     datails:['north-face','tv','fridge','drowing','single-bed','room-service','AC','kitchen'],
                //     image:[],
                //     rent:44,
                // },
                // {
                //     id:5,
                //     r_name:'suit room',
                //     w_room:'2',
                //     datails:['south-face','tv','fridge','drawing','dining','single-bed','room-service','AC','kitchen'],
                //     image:[],
                //     rent:44,
                // },
                // {
                //     id:1,
                //     r_name:'couple room',
                //     w_room:'1',
                //     datails:['south-face','tv','fridge','drawing','dining','single-bed','room-service','AC'],
                //     image:[],
                //     rent:44,
                // },
            ]
        }
    },
    components: {
        Datepicker
    },
    methods: {
        addDay(e) {
            if (this.dayCount === e) {
                console.log(this.dayCount);
            } else {
                this.dayCount++;
                console.log(this.dayCount);
            }
        }
    }
}
</script>