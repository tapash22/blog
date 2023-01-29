<template>
<div class="dynamic-star">
    <v-row>
        <v-col>
            <span v-for="icon in icons" :key="icon.id" style="display:block">
                <i v-for="rat in icon.rating" :key="rat" class="fa fa-star " style="color:orange"></i>
                <i v-for="count in (5 - icon.rating)" :key="count" class="fa fa-star-o"></i>
            </span>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            icons: [{
                    id: 1,
                    rating: 2,
                },
                {
                    id: 2,
                    rating: 3,
                },
                {
                    id: 3,
                    rating: 4,
                },
                {
                    id: 4,
                    rating: 5,
                },
            ]
        }
    }
}
</script>
