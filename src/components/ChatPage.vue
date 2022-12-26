<template>
    <div class="chat-page">
        <v-card min-width="300" max-height="400" class="mb-6 rounded-xl">
            <v-list>
                <v-list-item-title class="text-center text-h6">Blog</v-list-item-title>
                <div class="d-block justify-space-between " style="width:100%">
                    <v-list-item>
                        <v-list-item-title>Agent</v-list-item-title>
                        <v-list-item-subtitle>message</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item class="d-flex justify-end">
                        <v-list-item-title>Customer</v-list-item-title>
                        <v-list-item-subtitle>message</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Agent</v-list-item-title>
                        <v-list-item-subtitle>message</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item class="d-flex justify-end">
                        <v-list-item-title>Customer</v-list-item-title>
                        <v-list-item-subtitle>message</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Agent</v-list-item-title>
                        <v-list-item-subtitle>message</v-list-item-subtitle>
                    </v-list-item>


                </div>
                <v-list-item-action class="d-flex my-2 mx-2">
                    <v-text-field density="compact" variant="outlined" class="w-75" v-model="textm" />
                    <btn icon class="w-25 pa-0 mt-n5 ml-2" @click="send">
                        <v-icon class="text-h5 pa-2" color="red">
                            mdi-send
                        </v-icon>
                    </btn>
                </v-list-item-action>

            </v-list>

        </v-card>
    </div>
</template>

<script>
export default {
    name: 'chat-page',

    methods:{
        send(){
            console.log(this.textm);
        }
    }
}
</script>