<template>
  <section id="app">
    <h1>This is my app</h1>
    <Filters v-on:add-filter="addFilter" :filters='filters' />
    <Vehicles v-bind:vehicles="filteredVehicles" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { filter } from 'vue/types/umd';

import Filters from './components/Filters.vue';
import Vehicles from './components/Vehicles.vue';

type vehicleType = {
  id: number;
  driverName: string;
  licensePlate: string;
  manufacturer: string;
  acquisitionDate: string;
  odometer: number;
  hasInsurance: boolean;
  dateNextInspection: string;
}

let vehiclesArr: vehicleType[] = [];
let newVehicle: vehicleType;


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

  newVehicle = {
    id: Vue.faker().random.uuid(),
    driverName: ( Math.random() < 0.9 ? Vue.faker().name.findName() : '' ),//this will give a 10% chance of not returning a vehicle - so we get some vehicles without driver
    licensePlate: randomLicencePlate,
    manufacturer: Vue.faker().vehicle.manufacturer(),
    acquisitionDate: randomAcquisitionDate.toLocaleDateString('en-GB'),
    odometer: randomOdometer,
    hasInsurance: Vue.faker().random.boolean(),
    dateNextInspection: randomDateNextInspection.toLocaleDateString('en-GB')
  }

  vehiclesArr.push(newVehicle);
}
// end mock data ---------------------

/*let filterProps = {
  hasInsurance: 'all',
  driverName: true,
  odometer: 0
};
let vehiclesCount = 0;

let filteredVehiclesArr = vehiclesArr.filter(function(item) {
  for (var key in filterProps) {
    if(
        key == 'hasInsurance' && filterProps[key] != 'all' || 
        key == 'driverName' && !filterProps[key]
      ){
      if (item[key] === undefined || item[key] != filterProps[key]) {
        return false;
      }
    }
    if(key == 'odometer'){
      if (item[key] <= filterProps[key] * 1000) {
        return false;
      }
    }
  }
  vehiclesCount++;
  return true;
});
console.log('Currently showing ' + vehiclesCount + ' of 50 vehicles.');*/

export default Vue.extend({
  name: 'App',
  components: {
    Filters,
    Vehicles
  },
  data() {
    return {
      vehicles: vehiclesArr,
      filteredVehicles: vehiclesArr,
      filters: {
          hasInsurance: 'all',
          showNoDriverOnly: false,
          minOdometer: -1
      }
    }
  },
  computed: {
  },
  methods: {
  
    addFilter(e:Event, other) {
  
      var fl:Object = this.filters;
      for (var key in e) {
        fl[key] = e[key]
      }

      this.filteredVehicles = this.vehicles.filter(function(item) {
        if(fl.hasInsurance != 'all'){
          if(fl.hasInsurance != item.hasInsurance) return false;
        }
        if(fl.showNoDriverOnly && (item.driverName.trim())) return false;
        if(fl.minOdometer > item.odometer) return false;
        return true
      });
      //this.filters
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

  .vehicles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
  }
  .vehicle {
    background-color: #fafafa;
    border: 1px solid #eee;
    border-radius: 10px;
    margin:  15px;

    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 260px;
    align-self: auto;
  }
  .vehicle .row {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #eee;
    padding: 6px 15px;

    font-weight: bold;
  }
  .vehicle .row-title {
    font-size: 11px;
    padding-bottom: 8px;
    font-weight: normal;
    color: $text-light;
  }
  .red {
    color: $red;
  }
</style>