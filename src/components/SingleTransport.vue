<template>
    <div class="single-transport">
        <v-card elevation="5">
            <v-img class="pa-2" height="250" cover src="https://i.ibb.co/5R63kBv/g.png" alt="bus"></v-img>
            <v-card-title class="text-body-1 font-weight-bold text-uppercase pa-0 my-2 mx-2 ">{{ transport.name }}</v-card-title>

            <v-card-text class="my-2 w-100 h-100 d-flex pa-0">
                <v-list v-for="bus in transport.buses" :key="bus.id" class="d-block pa-0 w-100 h-100 bg-red-lighten-1 ">
                    <v-list-item class="w-100 h-50 d-flex justify-start  my-2">
                        <v-list-item-title class="white--text text-body-2 font-weight-bold">{{ bus.features }}</v-list-item-title>
                        <v-list-item-subtitle class="text-white text-body-1 font-weight-bold my-2">Tk: {{ bus.price }}</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item-action class=" h-50  w-100 d-flex justify-start">
                     <v-btn class="my-1 bg-yellow-lighten-1 mx-1">choose</v-btn>
                    </v-list-item-action>

                </v-list>


            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'single-transport',
    props:['transport'],

    methods:{
        save(){
            this.$router.push('/bus');
        }
    }
}
</script>