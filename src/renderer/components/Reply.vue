<template>
  <div class="message reply">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'reply',
  props: ['text'],
};
</script>
