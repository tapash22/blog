<template>
    <div class="global-search d-flex justify-center w-100">
        <v-sheet class="pa-2 w-75 h-25 d-block justify-center mt-2 bg-white" rounded="lg">
            <Datepicker v-model="date" range week-start="0" calendar-cell-class-name="dp-custom-cell"
                :auto-position="true" class="my-1 pa-2 mx-0 " placeholder="select date"></Datepicker>
            <v-btn class="text-h6 d-flex justify-center w-50 offset-3 my-3 bg-red" elevation="10" @click="onSearch">
                search
            </v-btn>
        </v-sheet>
    </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'global-search',
    data() {
        return {
            date: '',
        }
    },

    components:{
        Datepicker
    },

    methods: {
        onSearch() {
            this.$router.push('/trip')
        },
    }
}
</script>