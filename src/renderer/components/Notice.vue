<template>
  <div class="message notice">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'notice',
  props: ['text'],
};
</script>

<style>
.notice {
  background: #90caf9;
  color: #1976d2;
}
</style>

