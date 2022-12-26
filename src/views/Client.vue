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

                   <ChatPage />
                </v-menu>
                <!--  -->
            </div>
        </v-main>
        <TheFooter />

    </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';
import TheFooter from '../components/TheFooter.vue';
import ChatPage from '../components/ChatPage.vue';

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
        TheFooter,
        ChatPage
    },

}
</script>