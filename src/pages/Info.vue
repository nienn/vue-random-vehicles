<template>
  <section class="container">
    <section class="row">
      <section class="col-xs-12 col-md-12 col-lg-12">
        <section class="panel panel-default">
          <section class="panel-heading">
              <h1>{{ pageName }}</h1>
          </section>
          <section class="panel-body">
              <h2>That project has use:</h2>
              <ul>
                  <li>Vue 2.5.2 <a href="https://vuejs.org" target="_blank" title="VueJS Framework">https://vuejs.org</a></li>
                  <li>Vue Router <a href="https://router.vuejs.org/" target="_blank" title="Vue Router">https://router.vuejs.org/</a></li>
                  <li>Bootstrap 3.3.7 <a href="https://getbootstrap.com/docs/3.3/" target="_blank" title="">https://getbootstrap.com/docs/3.3/</a></li>
              </ul>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Information',
  data() {
    return {
      pageName: 'Info',
    };
  },
  mounted()
  {
    console.log('mounted!!');
  }
};
</script>

<style scoped>

</style>
