<template>
<div class="base-button">
    <v-btn class="mx-2 " :class="[ isActive ? 'bg-red' : 'bg-white']" @click="onClick(sit.name1)">
        {{ sit.name1}}
    </v-btn>
    <v-btn class="mx-2 " :class="[ isActive ? 'bg-red' : 'bg-white']" @click="onClick(sit.name2)">
        {{ sit.name2}}
    </v-btn>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    name: 'base-button',
    props: ['sit'],
    data() {
        return {
            id: 0,
            isActive: false
        }
    },

    computed: {
        ...mapState('buss', {
            sitlist: 'sitlist'
        })
    },

    methods: {
        onClick(id) {
            this.id = id;
            this.sitlist.push(this.id);
            this.isActive = !this.isActive;
        }

    }
}
</script>
