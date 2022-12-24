<template>
    <div class="bus">
        <v-container>
            <h2 class="text-h5 my-5 text-center">Bus Transport</h2>
            <v-row class="d-flex justify-center">
                <v-col cols="12" sm="12" lg="6" md="6" xl="6" class="d-flex justify-center">

                    <v-card class="d-block w-100" elevation="10" rounded="lg">
                        <v-card-title class="my-5 text-center bg-red white--text">Dhake to cox-bazer(AC)</v-card-title>

                        <div class="d-flex w-100">
                            <v-card-text class="d-block ">
                                <div class="d-flex justify-center my-5" v-for="sit in sitLeft" :key="sit.id">
                                    <v-btn class="mx-2" :class="clicked ? 'bg-white' : 'bg-red'" :color="red"
                                        @click="clickB(sit.id)">{{
                                                sit.name1
                                        }}</v-btn>
                                    <v-btn class="mx-2">{{ sit.name2 }}</v-btn>
                                </div>
                            </v-card-text>
                            <v-divider vertical></v-divider>
                            <v-card-text class="d-block ">
                                <div class="d-flex justify-center my-5" v-for="sit in sitRight" :key="sit.id">
                                    <v-btn class="mx-2">{{ sit.name1 }}</v-btn>
                                    <v-btn class="mx-2">{{ sit.name2 }}</v-btn>
                                </div>
                            </v-card-text>
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="3" lg="3" xl="3" class="my-5">
                    <v-card elevation="10" class="mt-2" rounded="xl">
                        <v-card-title class="text-center my-5"> Amount</v-card-title>
                        <v-card-text class="bg-red-darken-2 d-flex  pt-10 ">
                            <v-text-field label="price" variant="outlined" density="compact" v-model="price"
                                class="mx-2 text-h6" />
                            <v-text-field label="sit" variant="outlined" density="compact" class=" mx-2" />
                        </v-card-text>
                        <v-card-text class="pa-0">
                            <v-card-title class="text-center">Total Amount: 1500</v-card-title>
                        </v-card-text>
                        <v-card-text>
                            <v-list class="d-flex w-100 overflow-hidden" v-for="ticket in tickets" :key="ticket.id" >

                                <v-list-item-title class="w-25 d-flex justify-center mt-2 pt-1 bg-red-lighten-1">{{ ticket.sit_name }}</v-list-item-title>
                                <v-list-item-title class="w-50 d-flex justify-center mt-2 pt-1 bg-red-lighten-1">{{ ticket.price }}</v-list-item-title>
                                <v-list-item-action class="w-25 d-flex justify-center">
                                    <v-btn elevation="5" size="sm" class="pa-1" icon>
                                        <v-icon>
                                            mdi-close
                                        </v-icon>
                                    </v-btn>
                                </v-list-item-action>

                            </v-list>
                        </v-card-text>
                        <v-card-actions class="my-2">

                            <v-btn class="w-50 pa-2  offset-3" color="red" elevation="10" rounded="lg">
                                confirm
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'bus',
    data() {
        return {
            sitLeft: [
                {
                    id: 1,
                    name1: 'A1',
                    name2: 'A2'
                },
                {
                    id: 2,
                    name1: 'B1',
                    name2: 'B2'
                },
                {
                    id: 3,
                    name1: 'C1',
                    name2: 'C2'
                },
                {
                    id: 4,
                    name1: 'D1',
                    name2: 'D2'
                },
                {
                    id: 5,
                    name1: 'E1',
                    name2: 'E2'
                },
                {
                    id: 6,
                    name1: 'F1',
                    name2: 'F2'
                },
                {
                    id: 7,
                    name1: 'F1',
                    name2: 'F2'
                },
            ],
            sitRight: [
                {
                    id: 1,
                    name1: 'A3',
                    name2: 'A4'
                },
                {
                    id: 2,
                    name1: 'B3',
                    name2: 'B4'
                },
                {
                    id: 3,
                    name1: 'C3',
                    name2: 'C4'
                },
                {
                    id: 4,
                    name1: 'D3',
                    name2: 'D4'
                },
                {
                    id: 5,
                    name1: 'E3',
                    name2: 'E4'
                },
                {
                    id: 6,
                    name1: 'F3',
                    name2: 'F4'
                },
                {
                    id: 7,
                    name1: 'F3',
                    name2: 'F4'
                },
            ],
            price: 1500,
            clicked: true,
            tickets: [
                {
                    id: 1,
                    sit_name: 'A1',
                    price: 1500,
                    date: new Date(),
                    time: '10.00'
                },
                {
                    id: 2,
                    sit_name: 'A2',
                    price: 1500,
                    date: new Date(),
                    time: '10.00'
                },
            ]
        }
    },
    methods:{
        clickB(id){
            console.log(id);
            switch(id){
                case 1:
                    this.clicked =false;
                    break;
                    case 2:
                    this.clicked =false;
                    break;
                    case 3:
                    this.clicked =false;
                    break;
                      case 4:
                    this.clicked =false;
                    break;
                      case 5:
                    this.clicked =false;
                    break;
                      case 6:
                    this.clicked =false;
                    break;
                      case 7:
                    this.clicked =false;
                    break;
                      case 1:
                    this.clicked =false;
                    break;

            }

        }
   
    
    }
}
</script>