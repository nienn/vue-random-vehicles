<template>
  <section class="vehicles">

    <div v-bind:key="vehicle.id" v-for="vehicle in vehicles">
      <Vehicle v-bind:vehicle="vehicle" />
    </div>

  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  import Vehicle from './Vehicle.vue';

  export default Vue.extend({
    name: 'Vehicles',
    components: {
      Vehicle
    },
    props: ["vehicles"]
  });
</script>
