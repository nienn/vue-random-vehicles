<template>
  <div class="vehicle">

    <div class="row">
      <h3 v-if="vehicle.driverName">{{vehicle.driverName}}</h3>
      <h3 v-else-if="!vehicle.driverName"><i class="red">&mdash; No Driver &mdash;</i></h3>
    </div>

    <div class="row">
      <div class="row-title">Licence Plate</div>
      <div>{{vehicle.licensePlate}}</div>
    </div>

    <div class="row">
      <div class="row-title">Manufacturer</div>
      <div>{{vehicle.manufacturer}}</div>
    </div>

    <div class="row">
      <div class="row-title">Acquisition Date</div>
      <div>{{vehicle.acquisitionDate}}</div>
    </div>

    <div class="row">
      <div class="row-title">Odometer</div>
      <div>{{vehicle.odometer}}km</div>
    </div>

    <div class="row">
      <div class="row-title">Has Insurance</div>
      <div v-bind:class="{'red':!vehicle.hasInsurance}">{{vehicle.hasInsurance}}</div>
    </div>

    <div class="row">
      <div class="row-title">Next Inspection</div>
      <div>{{vehicle.dateNextInspection}}</div>
    </div>

    <div class="row">
      <div class="row-title"># {{vehicle.id}}</div>
    </div>

  </div>
</template>


<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Vehicle',
    props: ["vehicle"]
  });
</script>


<style lang="scss">
</style>
