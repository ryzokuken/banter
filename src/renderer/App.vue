<template>
  <div class="container">
    <nav>hello world</nav>
    <main>
      <ul class="messages">
        <li v-for="(message, index) in messages" :key="index">
          <message :type="message.commandType" :args="message.args"></message>
        </li>
      </ul>
      <textarea placeholder="Send a message" v-model="text" @keyup.enter="handleSend"></textarea>
      <!-- <router-view></router-view> -->
    </main>
  </div>
</template>

<script>
import Message from '@/components/Message';

export default {
  name: 'banter',
  props: ['messages'],
  components: {
    Message,
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    handleSend() {
      this.$emit('message', this.text.trim());
      this.text = '';
    },
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 200px auto;

  height: 100vh;
  width: 100vw;

  overflow: hidden;
}

.container > nav {
  border-right: 1px solid #bdbdbd;
}

.container > main > .messages {
  height: calc(100vh - 70px);
  overflow-x: scroll;
  font-size: 18px;
  margin: 0;
  color: #212121;
  line-height: 1.5;
  list-style: none;
  padding: 0;
}

.container > main > textarea {
  width: 100%;
  height: 70px;

  outline: none;
  border: none;
  border-top: 1px solid #bdbdbd;
  font-size: 18px;
  padding: 10px;
  resize: none;
}
</style>
