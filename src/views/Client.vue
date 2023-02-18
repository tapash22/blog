<template>
<div class="client">

    <TheNavigation />

    <v-main>
        <router-view />

    </v-main>
    <div style="position:sticky;bottom:25%;display:flex;justify-content:right;margin:50px;">
        <v-menu v-model="menu" :close-on-content-click="false" location="end">
            <template v-slot:activator="{ props }">

                <v-btn icon="mdi-chart-line-variant" color="red" class="text-h6" v-bind="props"></v-btn>
            </template>

            <ChatPage />
        </v-menu>
        <!--  -->
    </div>
    <TheFooter />

</div>
</template>

<script>
import TheNavigation from '../components/main/TheNavigation.vue';
import TheFooter from '../components/main/TheFooter.vue';
import ChatPage from '../components/ChatPage.vue';

export default {
    name: 'client',
    data() {
        return {
            menu: false,
            textm: ''
        }
    },
    components: {
        TheNavigation,
        TheFooter,
        ChatPage
    },

}
</script>
