<template>
  <div class="container">
    <nav>hello world</nav>
    <main>
      <ul class="messages">
        <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
      </ul>
      <textarea placeholder="Send a message"></textarea>
      <!-- <router-view></router-view> -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'banter',
  props: ['messages'],
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
