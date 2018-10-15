<template>
  <section id="app">
    <section class="col-lg-12">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <img class="logo-frotcom" alt="Frotcom International Logo" src="https://frotcomcdn.blob.core.windows.net/application-content/images/f-logo.png">
            </a>
          </div>
          <ul class="nav nav-pills menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/vehicles">Vehicles</router-link></li>
          </ul>

          <ul class="nav nav-pills menu pull-right">
            <li class="pull-right"><router-link to="/info">Info</router-link></li>
          </ul>
        </div>
      </nav>
    </section>
    <router-view></router-view>
    <section class="footer">
      <section class="row">
        <section class="container">
          <h6>Frotcom International 2018</h6>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.menu {
  margin: 12px 0 8px;
  display: block;
  float: left;
}
.menu li a{
  padding: 5px 10px;
}
.logo-frotcom {
  width: 30px;
  height: auto;
  display: block;
}

.footer h6 {
  text-align: center;
}
</style>
