<template>
  <div class="driver">

    <div class="row">
      <h3>{{driver.driverName}}</h3>
    </div>

    <div class="row">
      <div class="row-title">Licence Plate</div>
      <div>{{driver.licensePlate}}</div>
    </div>

    <div class="row">
      <div class="row-title">Manufacturer</div>
      <div>{{driver.manufacturer}}</div>
    </div>

    <div class="row">
      <div class="row-title">Acquisition Date</div>
      <div>{{driver.acquisitionDate}}</div>
    </div>

    <div class="row">
      <div class="row-title">Odometer</div>
      <div>{{driver.odometer}}km</div>
    </div>

    <div class="row">
      <div class="row-title">Has Insurance</div>
      <div v-bind:class="{'red':!driver.hasInsurance}">{{driver.hasInsurance}}</div>
    </div>

    <div class="row">
      <div class="row-title">Next Inspection</div>
      <div>{{driver.dateNextInspection}}</div>
    </div>

    <div class="row">
      <div class="row-title"># {{driver.id}}</div>
    </div>

  </div>
</template>


<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Driver',
    props: ["driver"]
  });
</script>


<style lang="scss">
</style>
