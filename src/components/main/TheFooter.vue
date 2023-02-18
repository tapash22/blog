<template>
<div class="the-footer">
    <v-footer class="d-block">
        <v-row class="d-flex bg-red-darken-2">
            <v-col cols="12" sm="12" lg="3" md="3" xl="3">
                <div class="d-block pa-5">
                    <strong class="text-h6 text-weight-bold">Your Journey</strong>
                    <p class="text-justify text-body-2 my-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.Rem modi saepe placeat amet in sed praesentium
                        tempora nisi. Rem modi saepe placeat amet in sed praesentium
                        tempora nisi.Rem modi saepe placeat amet in sed praesentium
                        tempora nisi.
                    </p>
                </div>
            </v-col>

            <v-col cols="12" sm="12" md="2" lg="2" xl="2" v-for="list in lists" :key="list.id" class="d-flex justify-center">
                <v-list class="list">
                    <v-list-item-title class="text-body-1 font-weight-bold text-white">{{ list.title }}</v-list-item-title>
                    <v-divider color="white"></v-divider>
                    <!-- <v-list-item class="" > -->
                    <router-link v-for="lis in list.list" :key="lis" :to="lis" class="text-decoration-none ">
                        <v-list-item-title class="text-body-2 text-white pa-1 ">
                            {{ lis }}
                        </v-list-item-title>
                    </router-link>
                    <!-- </v-list-item> -->
                </v-list>

            </v-col>

            <v-col cols="12" sm="12" lg="3" md="3" xl="3" class="d-flex justify-center align-center">
                <v-btn v-for="icon in icons" :key="icon" class="mx-1 bg-white mx-smAndDown-3 text-h6" color="red" :icon="icon" size="small"></v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center bg-red-lighten-2">
            <p class="my-2 text-body-2 font-weight-bold"> &copy; {{ date }} TravelBlog</p>
        </v-row>
     
    </v-footer>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        date:new Date().getFullYear(),
    }),

    computed:{
        ...mapState('footer',{
            icons : 'icons',
            lists : 'lists'
        })
    }
}
</script>

<style scoped>
.list {
    background: transparent !important;
    display: block;
}
</style>
