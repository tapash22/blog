<template>
    <div class="props-view" >
        <v-card class="d-block">
            <v-card-title>{{ transport.name }}</v-card-title>
            <v-card-text class="d-block ">
                <v-list class="d-flex justify-space-between">
                    <v-lsit-item  v-for="bus in transport.buses" :key="bus.id">
                        <v-list-item-title>{{ bus.features }}</v-list-item-title>
                        <v-list-item-subtitle>{{ bus.price }}</v-list-item-subtitle>
                       
                    </v-lsit-item>
                    <v-list-item-action>
                        <v-btn @click="save(transport)">
                            save
                        </v-btn>
                    </v-list-item-action>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'props-view',
    props:['transport'],
    data(){
        return{
            transportss:{},
        }
    },

    methods:{
        save(transport){
          this.transportss = transport;
            this.$emit('bus-name',this.transportss);
        }
    }
}
</script>