<template>
  <div class="message error">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'error',
  props: ['text'],
};
</script>

<style>
.error {
  background: #ef9a9a;
  color: #d32f2f;
}
</style>

