<template>
  <section id="app">
    <h1>Vehicles</h1>
    <div class="top-note">Showing <b>{{filteredVehicles.length}}</b> of a total of <b>50</b> vehicles</div>
    <Filters v-on:add-filter="addFilter" :filters='filters' />
    <Vehicles v-bind:vehicles="filteredVehicles" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { filter } from 'vue/types/umd';
import _ from 'lodash';

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


// Create vehiclesArr with Mock Data
// ----------------------------------
Vue.use(require('vue-faker'));

let getVehiclesArr = function(){

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
  return vehiclesArr;
}
// end mock data ---------------------


// sessionStorage --------------------
let sessionExpiryTime = parseInt(sessionStorage.getItem('_vat'));

// check if sessionExpiryTime exists && if it's less than 30 mins old
if (sessionExpiryTime !== null && sessionExpiryTime > Date.now()) {

  // get vehiclesArr from sessionStorage
  vehiclesArr = JSON.parse(sessionStorage.getItem('_va'));
}
else {
  // we don't have the required data in session,
  // lets create the vehiclesArr from model/mock data
  // and then set the sessionStorage
  vehiclesArr = getVehiclesArr();
  
  // set sessionStorage
  let minsToExpireSession: number = 30;

  sessionStorage.setItem('_va', JSON.stringify(vehiclesArr));
  sessionStorage.setItem('_vat', Date.now() + minsToExpireSession * 60000);
}
// end sessionStorage ------------------


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
          showWithInsurance: 'all',
          showNoDriverOnly: false,
          showMinOdometer: -1
      }
    }
  },
  computed: {
  },
  methods: {
  
    addFilter(e:Event, other) {
  
      var fl:Object = this.filters;

      _.merge(fl, e);

      this.filteredVehicles = this.vehicles.filter(function(item) {
        if(fl.showWithInsurance != 'all'){
          if(fl.showWithInsurance != item.hasInsurance) return false;
        }
        if(fl.showNoDriverOnly && (item.driverName.trim())) return false;
        if(fl.showMinOdometer > item.odometer) return false;
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
  $red: rgb(219, 0, 48);
  $primary-color: $red;

  html, body { margin: 0; padding: 0;}

  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $text-color;
  }

  h1 {
    font-size: 40px;
    margin:  60px 0 10px;
  }
  .top-note {
    font-style:  italic;
    color: #666;

    b {
      color: $text-color;
    }
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


  .filters {
    margin: 40px 0 30px;
  }
  .btn-group {
    padding: 6px 10px;
    display: inline-block;
  }
  .btn {
    background:linear-gradient(to bottom, #fff 0%, #f2f2f2 100%);
    background-color:#fafafa;
    border:1px solid #ddd;
    display:inline-block;
    cursor:pointer;
    padding:8px 18px;
    font-size: 13px;
    text-decoration: none;
    margin-right: -1px;
  }
  .btn:hover {
    background:linear-gradient(to bottom, #f6f6f6 0%, #ffffff 100%);
    background-color:#f6f6f6;
  }
  .btn:first-child {
    border-radius: 3px 0 0 3px;
  }
  .btn:last-child {
    border-radius: 0 3px 3px 0;
  }


  .btn.active {
    background:linear-gradient(to bottom, $primary-color 0%, darken($primary-color, 7%) 100%);
	  background-color:#f24537;
	  border-color: darken(#f24537, 10%);
    color: #fff;
  }
  .btn.inactive {
    color: #bbb;
  }
</style>