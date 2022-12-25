<template>
    <div class="home">
        <v-row class="pa-0 ma-0">
            <v-col cols="12" lg="12" md="12" xl="12">
                <TheSlider />
            </v-col>
        </v-row>
        <v-container>


            <v-row>

                <v-col cols="12" lg="8" md="8" sm="12" xl="8" class="d-block justify-center my-5">

                    <v-sheet elevation="10" class="pa-2 w-50 h-80 d-block justify-center mt-10 bg-white offset-3"
                        rounded="lg">

                        <h2 class="pp text-center my-2 text-red">Round Trip</h2>
                        <!-- change input 
                    text text-input :text-input-options="textInputOptions" 
                    -->

                        <Datepicker v-model="date" range week-start="0" calendar-cell-class-name="dp-custom-cell"
                            :auto-position="true" class="my-2 pa-2 mx-0 " placeholder="select date"></Datepicker>
                        <v-btn class="text-h6 d-flex justify-center w-50 offset-3 my-3" elevation="10"
                            @click="onSearch">
                            search
                        </v-btn>


                        <v-img class="w-100 h-50" src="https://i.ibb.co/Qb75K1p/bus1-removebg-preview.jpg" />
                    </v-sheet>

                </v-col>

                <v-col cols="12" lg="4" md="4" sm="12" xl="4">
                    <v-card class="mx-5 my-5" elevation="10" rounded="lg">
                        <v-card-title class="p bg-red-lighten-1 ">Recent tour</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-list>
                                <v-list-item class="d-flex" v-for="tour in tours" :key="tour.id">
                                    <template v-slot:prepend>
                                        <v-img width="100" height="100" :src="tour.image" />
                                    </template>

                                    <v-list-item-content two class="mx-2">
                                        <v-list-item-title>{{ tour.name }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ tour.date }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-divider></v-divider>

                                </v-list-item>

                            </v-list>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center bg-red">
                            <v-btn elevation="6" class="bg-red w-100 p2" @click="viewAll">View all</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

            <h2 class="text-center my-5 w-50 offset-3 rounded-lg pp">Package</h2>
            <!-- <v-divider class="w-25 bg-red offset-4"></v-divider> -->

            <v-row>
                <v-col cols="12" lg="4" md="4" sm="12" xl="4" v-for="packages in packagess" :key="packages.id">
                    <v-card elevation="10" rounded="lg">

                        <v-card-title class="h-5 w-100 bg-red text-center">
                            {{ packages.name }}
                        </v-card-title>

                        <v-card-text class="my-2">
                            <div class="d-flex justify-center align-center">
                                <v-avatar size="64" class=" pa-2 bg-red">
                                    <v-icon class="text-h4 text-weight-bold icon" color="white">
                                        mdi-{{ packages.icon }}
                                    </v-icon>
                                </v-avatar>
                            </div>
                            <div class="d-flex justify-center">
                                <p class="text-h6 text-weight-bold text-justify my-5 mx-5">
                                    {{
                                            packages.des
                                    }}
                                </p>
                            </div>
                        </v-card-text>

                        <v-card-actions class="d-flex justify-center my-5 mx-5 bg-red rounded-lg">
                            <v-btn v-bind="props" elevation="10" color="red" @click="getPage(packages.id)"
                                class="w-100 text-weight-bold rounded-lg text-h6 bg-white">
                                Details
                            </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col cols="12" md="4" lg="4" xl="4" sm="12" class="pa-10">
                    <v-sheet elevation="10" class="my-10 mx-auto pa-5 mt-16" rounded="xl">
                        <v-progress-circular :rotate="360" :size="80" :width="10" :model-value="value" color="red"
                            class="offset-4 my-5">
                            {{ value }}
                        </v-progress-circular>
                        <p class="text-h6 text-center pa-5">
                            You can choose any package, what do you want!
                        </p>

                    </v-sheet>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    {{ name }}
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import TheSlider from '../components/TheSlider.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'home',
    data() {
        return {
            date: '',
            textInputOptions: 'MM.dd.yyyy HH:mm',
            dialog: false,
            interval: {},
            value: 0,
            tours: [
                {
                    id: 1,
                    name: 'travaling to cox bazzer',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },

                {
                    id: 2,
                    name: 'travaling to jaflong',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
                {
                    id: 3,
                    name: 'travaling to Bandorbon',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
                {
                    id: 4,
                    name: 'travaling to sundorbon',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
            ],
            packagess: [
                {
                    id: 1,
                    name: 'Transport',
                    des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi aut nesciunt dicta eveniet autem, earum quidem deserunt, ',
                    icon: 'train-car'
                },
                {
                    id: 2,
                    name: 'Hotel',
                    des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi aut nesciunt dicta eveniet autem, earum quidem deserunt, ',
                    icon: 'home-city-outline'
                },
            ]
        }
    },

    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0)
            }
            this.value += 1
        }, 100)
    },
    computed:{
        // ...mapState('hotel',{
        //     name:'name'
        // }),
        getName(){
        //    return this.$store.state.name;
        return this.$store.state.buss.name;
        }
    },
    // computed:{
    //     textInputOptions(){
    //         return this.date('');
    //     }
    // },
    components: {
        TheSlider,
        Datepicker
    },

    methods: {
        viewAll() {
            this.$router.replace('/travelblog');
            console.log('routed works');
        },
        onSearch() {
            this.$router.push('/trip')
        },
        getPage(id){
            if(id === 1){
                this.$router.push('/transport');
            }else{
                this.$router.push('/hotel');
            }
        }
    }

}
</script>]

<style>
@import url('https://fonts.googleapis.com/css2?family=Sansita:wght@800&display=swap');

.dp-custom-cell {
    border-radius: 50%;
}

.pp {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Sansita', sans-serif;
}

.p {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: 'Sansita', sans-serif;
}

.p2 {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Sansita', sans-serif;
}

.rounded {
    border-radius: 50%;
}
</style>