<template>
    <div class="tour-details">
        <v-card elevation="6" class="h-50" rounded="lg">
            <v-card-item >
                <v-img class="w-100 pa-2 background-position-cover" height="200" :src='tour.image' />
            </v-card-item>
            
            <v-card-text class="h-25 bg-red">
                <v-card-title>{{ tour.name }}</v-card-title>
                <v-card-subtitle>{{ tour.date }}</v-card-subtitle>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'tour-details',
    props: ['tour'],
}
</script>