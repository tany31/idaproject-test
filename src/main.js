import Vue from 'vue';
import App from './App.vue';

import '@/plugins/veevalidate';
import '@/assets/styles/base.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
