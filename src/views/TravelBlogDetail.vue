<template>
    <div class="travel-blog-detail">
        <v-row class="d-flex justify-center">
            <v-col cols="10" sm="10" lg="10" md="12" xl="12" class="pa-5">
                <video controls autoplay class="w-100" height="300">
                    <source src="../assets/video.mp4" type="video/mp4" />
                    <source src="speach.ogg" type="video/ogg" />
                </video>
            </v-col>
            <v-col cols="12" sm="12" lg="12" md="12" xl="12">
                <v-sheet elevation="6" class="pa-5">
                    <v-card>
                        <v-card-title class="text-left text-h4">name</v-card-title>
                        <v-card-subtitle class="my-2">new Date</v-card-subtitle>
                        <v-acrd-text class="d-flex justify-left">
                            <p class="text-justify pa-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur distinctio eveniet
                                ex, dicta asperiores eos perspiciatis voluptate a. Blanditiis, iusto tempora. Recusandae
                                nihil quod id saepe iste quia explicabo dignissimos?</p>
                        </v-acrd-text>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-space-between">
                                    
                                </v-col>
                            </v-row>
                     
                        </v-card-text>
                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name:'travel-blog-detail',
    data(){
        return{
            name:'hotel',
        }
    },
    methods:{
        onClick(name){
            if(name ==='hotel'){
                this.$router.push('/hotel');
            }else{
                this.$router.push('/transport')
            }
        }
    }
}
</script>