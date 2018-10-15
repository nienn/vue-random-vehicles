<template>
  <section class="row">
    <div class="col-lg-12 hello">
      <section class="container">
        <div class="jumbotron">
          <div class="container">
            <h1>Hello, Dev!</h1>
            <h2>{{ welcome }}</h2>
            <ul>
              <li>Create bitbucket repository with nameDeveloper_Frotcom and share with jorge.moreira@frotcom.com and dereckson.santana@frotcom.com;</li>
              <li>Use Vue Lifecycles;</li>
              <li>Configure and use SCSS (using npm);</li>
              <li>Configure and use Typescript Project (using npm);</li>
              <li>Import Lodash on project and use lodash methods (using npm);</li>
              <li>Create function/method to populate the array with 50 items;</li>
              <li>Save and verify if already exists the collection of vehicles in Session Storage</li>
              <li>
                  <span>Create array with keys:</span>
                  <ul>
                    <li>id;</li>
                    <li>driver;</li>
                    <li>licensePlate;</li>
                    <li>dateNextInspection;</li>
                    <li>hasInsurance</li>
                    <li>year</li>
                    <li>manufacturer</li>
                    <li>acquisitionDate</li>
                    <li>odometer</li>
                  </ul>
                </li>

              <li>Render vehicle table;</li>
              <li>Create vehicle details;</li>
              <li>
                  <span>The vehicle list has the filters:</span>
                  <ul>
                    <li>Vehicles with insurance</li>
                    <li>Vehicles without insurance</li>
                    <li>Vehicles with less than one month to go to inspection;</li>
                    <li>Odometer > 100.000km</li>
                    <li>Odometer >= 200.000km</li>
                    <li>Odometer > 300.000km</li>
                  </ul>
              </li>
              <li>Estimated time: <b>120 minutes</b></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        welcome: 'Welcome to Frotcom International',
      };
    },
  };
</script>

<style scoped>

</style>
