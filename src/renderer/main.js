import Vue from 'vue';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { ipcRenderer as ipc } from 'electron';
import 'modern-normalize/modern-normalize.css';

import App from './App';
// import router from './router';

Vue.config.productionTip = false;

function handleMessage(message) {
  if (message[0] === '/') {
    switch (message.split(' ')[0]) {
      case '/join':
      case '/j':
        ipc.send(
          'join',
          message
            .split(' ')
            .slice(1)
            .join(' '),
        );
        break;
      default:
        console.error(message);
    }
  }
}

/* eslint-disable no-new */
const vm = new Vue({
  components: { App },
  // router,
  template: '<App :messages="messages.globals" @message="handleSend"/>',
  data: {
    messages: {
      globals: [],
    },
  },
  methods: {
    handleSend(data) {
      handleMessage(data);
    },
  },
}).$mount('#app');

ipc.on('notice', (event, { text }) => vm.messages.globals.push({ type: 'notice', text }));
ipc.on('error', (event, text) => vm.messages.globals.push({ type: 'error', text }));
ipc.on('reply', (event, text) => vm.messages.globals.push({ type: 'reply', text }));
ipc.on('motd', (event, text) => vm.messages.globals.push({ type: 'preformatted', text }));
ipc.on('unhandled', (event, data) => console.log(data));
