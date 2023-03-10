<template>
<div class="single-bus">
    <v-container>
        <v-row class="d-flex justify-center ">
            <v-col cols="12" sm="12" lg="8" md="8" xl="8" class="d-flex justify-center">

                <v-card class="d-block w-100" elevation="10" rounded="lg">
                    <v-card-title class="my-5 text-center bg-red white--text">Dhake to cox-bazer(AC)</v-card-title>
                    {{ sitlist }}
                    <div class="d-flex ">
                        <v-card-text class="d-block ">

                            <div class="d-flex justify-center my-5" v-for="sit in sitLeft" :key="sit.id">
                                <BaseButton :sit="sit" />
                            </div>
                        </v-card-text>
                        <v-divider vertical></v-divider>
                        <v-card-text class="d-block ">
                            <div class="d-flex justify-center my-5" v-for="sit in sitRight" :key="sit.id">
                                <BaseButton :sit="sit" />
                            </div>
                        </v-card-text>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="my-5">
                <v-card elevation="10" class="mt-2" rounded="xl">
                    <v-card-title class="text-center my-5"> Amount</v-card-title>
                    <v-card-text class="bg-red-darken-2 d-flex  pt-10 ">
                        <v-text-field label="price" variant="outlined" density="compact" v-model="price" class="mx-2 text-h6" />
                        <v-text-field label="sit" variant="outlined" density="compact" class=" mx-2" />
                    </v-card-text>
                    <v-card-text class="pa-0">
                        <v-card-title class="text-center">Total Amount: 1500</v-card-title>
                    </v-card-text>
                    <v-card-text>
                        <v-list class="d-flex w-100 overflow-hidden" v-for="ticket in tickets" :key="ticket.id">

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
import {
    mapState
} from 'vuex';
import BaseButton from './BaseButton.vue';

export default {
    name: 'single-bus',
    data() {
        return {
            price: 1500,
            clicked: true,

        }
    },
    computed: {
        ...mapState([
            'tickets',
            'sitLeft',
            'sitRight',
        ])
    },

    components: {
        BaseButton,
    }

}
</script>

<style scoped>
.single-bus {
    width: 100%;
}
</style>
