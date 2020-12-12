<template>
  <section id="app">
    <h1>This is my app</h1>
    <Drivers v-bind:drivers="drivers" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import Drivers from './components/Drivers.vue';

type driverType = {
  id: number;
  driverName: string;
  licensePlate: string;
  manufacturer: string;
  acquisitionDate: string;
  odometer: number;
  hasInsurance: boolean;
  dateNextInspection: string;
}

let driversArr: driverType[] = [];
let driverMan: driverType;


// Mock Data
// ----------------------------------
Vue.use(require('vue-faker'));

for  (let i = 0; i < 50; i++){

  let randomLicencePlate = (Math.floor(Math.random() * (99 - 10 + 1)) + 10)
                        + '-FC-'
                        + (Math.floor(Math.random() * (99 - 10 + 1)) + 10); 

  let randomOdometer = Math.floor(Math.random() * 500001);

  function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  let randomAcquisitionDate = randomDate(new Date(2008, 0, 1), new Date());
  let randomDateNextInspection = randomDate(new Date(), new Date(2022, 1, 1));


  driverMan = {
    id: Vue.faker().random.uuid(),
    driverName: Vue.faker().name.findName(),
    licensePlate: randomLicencePlate,
    manufacturer: Vue.faker().vehicle.manufacturer(),
    acquisitionDate: randomAcquisitionDate.toLocaleDateString('en-GB'),
    odometer: randomOdometer,
    hasInsurance: Vue.faker().random.boolean(),
    dateNextInspection: randomDateNextInspection.toLocaleDateString('en-GB')
  }

  driversArr.push(driverMan);

}
// end mock data ---------------------


export default Vue.extend({
  name: 'App',
  components: {
    Drivers
  },
  data() {
    return {
      drivers: driversArr
    }
  }
});
</script>

<style lang="scss">

  $text-color: #333;
  $text-light: #666;
  $primary-color: rgb(0, 124, 56);
  $red: rgb(219, 0, 48);

  html, body { margin: 0; padding: 0;}

  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $text-color;
    padding-top: 60px;
  }

  .drivers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
  }
  .driver {
    background-color: #fafafa;
    border: 1px solid #eee;
    border-radius: 10px;
    margin:  15px;

    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 260px;
    align-self: auto;
  }
  .driver .row {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #eee;
    padding: 6px 15px;

    font-weight: bold;
  }
  .driver .row-title {
    font-size: 11px;
    padding-bottom: 8px;
    font-weight: normal;
    color: $text-light;
  }
  .red {
    color: $red;
  }
</style>