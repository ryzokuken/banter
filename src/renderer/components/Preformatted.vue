<template>
  <pre class="message reply">
    {{ text }}
  </pre>
</template>

<script>
export default {
  name: 'preformatted',
  props: ['text'],
};
</script>
