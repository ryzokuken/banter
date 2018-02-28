<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'banter',
  props: ['messages'],
};
</script>

<style>
/* CSS */
</style>
