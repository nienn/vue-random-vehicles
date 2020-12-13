<template>
  <section class="filters">

    <div class="btn-group">
      <a class="btn" v-bind:class="{'active': filters.showWithInsurance === true}" @click="$emit('add-filter', {showWithInsurance: true})">Has Insurance</a>
      <a class="btn"  v-bind:class="{'active': filters.showWithInsurance === false}" @click="$emit('add-filter', {showWithInsurance: false})">Without Insurance</a>
      <a class="btn"  v-bind:class="{'inactive': filters.showWithInsurance == 'all'}" @click="$emit('add-filter', {showWithInsurance: 'all'})">Reset</a>
    </div>
    <div class="btn-group">
      <a class="btn"  v-bind:class="{'active': filters.showMinOdometer == 75000}" @click="$emit('add-filter', {showMinOdometer: 75000})">> 75.000km</a>
      <a class="btn"  v-bind:class="{'active': filters.showMinOdometer == 129999}" @click="$emit('add-filter', {showMinOdometer: 129999})">>= 130.000km</a>
      <a class="btn"  v-bind:class="{'active': filters.showMinOdometer == 250000}" @click="$emit('add-filter', {showMinOdometer: 250000})">> 250.000km</a>
      <a class="btn"  v-bind:class="{'inactive': filters.showMinOdometer == -1}" @click="$emit('add-filter', {showMinOdometer: -1})">Reset</a>
    </div>
    <div class="btn-group">
      <a class="btn"  v-bind:class="{'active': filters.showNoDriverOnly === true}" @click="$emit('add-filter', {showNoDriverOnly: true})">No Driver</a>
      <a class="btn"  v-bind:class="{'inactive': filters.showNoDriverOnly === false}" @click="$emit('add-filter', {showNoDriverOnly: false})">Reset</a>
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