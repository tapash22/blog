<template>
    <div class="client">

        <TheNavigation />

        <v-main>
            <router-view />
            <div style="position:fixed;right:20px;bottom:50px;">
                <v-menu v-model="menu" :close-on-content-click="false" location="end">
                    <template v-slot:activator="{ props }">

                        <v-btn icon="mdi-chart-line-variant" color="red" class="text-h6" v-bind="props"></v-btn>
                    </template>

                    <v-card min-width="300" max-height="400" class="mb-6 rounded-xl">
                        <v-list>
                           <v-list-item-title class="text-center text-h6">Blog</v-list-item-title>
                           <div class="d-block justify-space-between " style="width:100%">
                            <v-list-item >
                            <v-list-item-title>Agent</v-list-item-title>
                            <v-list-item-subtitle>message</v-list-item-subtitle>
                           </v-list-item>
                           <v-list-item class="d-flex justify-end">
                            <v-list-item-title>Customer</v-list-item-title>
                            <v-list-item-subtitle>message</v-list-item-subtitle>
                           </v-list-item>
                           <v-list-item >
                            <v-list-item-title>Agent</v-list-item-title>
                            <v-list-item-subtitle>message</v-list-item-subtitle>
                           </v-list-item>
                           <v-list-item class="d-flex justify-end">
                            <v-list-item-title>Customer</v-list-item-title>
                            <v-list-item-subtitle>message</v-list-item-subtitle>
                           </v-list-item>
                           <v-list-item >
                            <v-list-item-title>Agent</v-list-item-title>
                            <v-list-item-subtitle>message</v-list-item-subtitle>
                           </v-list-item>
                           
                          
                           </div>
                           <v-list-item-action class="d-flex my-2 mx-2">
                            <v-text-field density="compact" variant="outlined" class="w-75" v-model="textm"/>
                            <btn icon  class="w-25 pa-0 mt-n5 ml-2" @click="send">
                                <v-icon class="text-h5 pa-2" color="red">
                                    mdi-send
                                </v-icon>
                            </btn>
                           </v-list-item-action>
                           
                        </v-list>
 
                    </v-card>
                </v-menu>
                <!--  -->
            </div>
        </v-main>
        <TheFooter />

    </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'client',
    data() {
        return {
            menu: false,
            textm:''
        }
    },
    components: {
        TheNavigation,
        TheFooter
    },
    methods:{
        send(){
            console.log(this.textm);
        }
    }
}
</script>