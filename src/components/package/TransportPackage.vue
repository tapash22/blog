<template>
    <div class="transport-package">
        <v-table>
    <tbody>
      <tr
        v-for="item in transports"
        :key="item.id"
      >
        <td>{{ item.busname }}</td>
        <td>{{ item.condition }}</td>
        <td>{{ item.from }}</td>
        <td>{{ item.to }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.price }}</td>
        <td><v-btn @click="addTransport()">add</v-btn></td>
      </tr>
    </tbody>
  </v-table>
    </div>
</template>

<script>
export default {
    name:'transportpackage',
    props:['transports'],

    methods:{
        addTransport(){
            console.log('add transport');
        }
    }
}
</script>

<style scoped>
.list{
    border: 1px solid red;
    margin-bottom: 2px;
    align-self: center;
    padding:5px;
    display: grid;
    grid-template-columns: 100px 100px 200px 200px 100px;
    grid-gap: 5px;
}
</style>