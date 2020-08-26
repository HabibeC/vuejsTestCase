import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {extend} from 'vee-validate';
import {required} from "vee-validate/dist/rules";

extend('required',{...required, message:'** This field is required'});
import VueConfirmDialog from 'vue-confirm-dialog'

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
