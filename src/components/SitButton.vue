<template>
    <div class="sit-button d-flex justify-center">
        <v-btn class="mx-2 d-block"  @click="clickB(sit.id)">{{
                sit
        }}</v-btn>
        <!-- <v-btn class="mx-2">{{ sit.name2 }}</v-btn> -->
    </div>
</template>

<script>
export default {
    name:'sit-button',
    props:['sit'],
    data(){
        return{
            clicked:true,
        }
    },
    methods:{
        clickB(id){
            this.$emit('id',id);
        }
    }
}
</script>