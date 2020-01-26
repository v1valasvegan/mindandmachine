import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login';
import Main from './components/Main';
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/main',
      component: Main,
    },
  ]
})
