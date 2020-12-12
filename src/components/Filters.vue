<template>
  <section class="filters">

    <div>
      <button @click="$emit('add-filter', {hasInsurance: true})">Has Insurance</button>
      <button @click="$emit('add-filter', {hasInsurance: false})">Without Insurance</button>
      <button @click="$emit('add-filter', {hasInsurance: 'all'})">Reset</button>
      &emsp;|&emsp;
      <button @click="$emit('add-filter', {minOdometer: 75000})">> 75.000km</button>
      <button @click="$emit('add-filter', {minOdometer: 129999})">>= 130.000km</button>
      <button @click="$emit('add-filter', {minOdometer: 250000})">> 250.000km</button>
      <button @click="$emit('add-filter', {minOdometer: -1})">Reset</button>
      &emsp;|&emsp;
      <button @click="$emit('add-filter', {showNoDriverOnly: true})">No Driver</button>
      <button @click="$emit('add-filter', {showNoDriverOnly: false})">Reset</button>
    </div>

  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Filters',
    props: ["filters"]
  });
</script>