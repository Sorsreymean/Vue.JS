import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import Routes from './router/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueRouter)
const router = new VueRouter({
  routes:Routes,
  mode: 'history'
});
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
