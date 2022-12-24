<template>
    <div class="client">
        <TheNavigation/>
        <v-main>
            <router-view/>
        </v-main>
        <TheFooter/>
    </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';
import TheFooter from '../components/TheFooter.vue'

export default {
    name:'client',

    components:{
        TheNavigation,
        TheFooter
    }
}
</script>