<template>
  <section class="container">
    <section class="row">
      <section class="col-xs-12 col-md-12 col-lg-12">
        <section class="panel panel-default">
          <section class="panel-heading">
              <h1>Vehicles</h1>
          </section>
          <section class="panel-body">
            <h3>Render vehicle table</h3>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      vehicleData: '',
    };
  },
  mounted()
  {
    console.log('mounted!!');
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
