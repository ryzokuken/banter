import Vue from 'vue';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { ipcRenderer as ipc } from 'electron';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');

ipc.on('message', (event, data) => console.log(data));
