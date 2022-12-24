<template>
    <div class="d-block my-5">
        <label class="pp my-5">{{ name }}</label><br />
        <input @input="updateValue" :value="modelValue" class="form-control bg-white" :type="type" />

    </div>
</template>
  
<script>
export default {
    props: ['modelValue', 'name', 'type'],

    methods: {
        updateValue($event) {

            this.$emit('update:modelValue', $event.target.value);
        },
    },
};
</script>

<style scoped>
.form-control {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    padding: 5px;
    margin: 0;
    width: 100%;
}

.pp {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Sansita', sans-serif;
}
</style>
