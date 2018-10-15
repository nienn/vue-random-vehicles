import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Vehicles from '@/pages/Vehicles';
import Info from '@/pages/Info';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/vehicles', name: 'Vehicles', component: Vehicles },
    { path: '/info', name: 'Info', component: Info }
  ],
});
