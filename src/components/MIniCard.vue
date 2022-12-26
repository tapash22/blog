<template>
    <div class="mini-card">
        <v-card max-width="250" max-height="300">
            <v-card-text>
                <v-list>
                    <v-list-item v-for="(item, index) in item" :key="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'mini-card',
    props:['item'],
}
</script>