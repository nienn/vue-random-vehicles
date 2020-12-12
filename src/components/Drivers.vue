<template>
  <section class="drivers">

    <div v-bind:key="driver.id" v-for="driver in drivers">
      <Driver v-bind:driver="driver" />
    </div>

  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  import Driver from './Driver.vue';

  export default Vue.extend({
    name: 'Drivers',
    components: {
      Driver
    },
    props: ["drivers"]
  });
</script>
