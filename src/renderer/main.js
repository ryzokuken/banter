import Vue from 'vue';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { ipcRenderer as ipc } from 'electron';
import 'modern-normalize/modern-normalize.css';

import App from './App';
// import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
const vm = new Vue({
  components: { App },
  // router,
  template: '<App :messages="messages.globals" />',
  data: {
    messages: {
      globals: [],
    },
  },
}).$mount('#app');

ipc.on('notice', (event, data) => vm.messages.globals.push(data));
ipc.on('error', (event, data) => vm.messages.globals.push(data));
ipc.on('reply', (event, data) => vm.messages.globals.push(data));
ipc.on('pong', () => console.log('PONG'));
ipc.on('unhandled', (event, data) => console.log(data));
