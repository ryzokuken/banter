<template>
  <div>
    <notice v-if="type === 'normal'" :text="args.slice(1).join('\n')"></notice>
    <error v-else-if="type === 'error'" :text="args.slice(1).join('\n')"></error>
    <reply v-else-if="type === 'reply'" :text="args.slice(1).join('\n')"></reply>
  </div>
</template>

<script>
import Notice from '@/components/Notice';
import Error from '@/components/Error';
import Reply from '@/components/Reply';

export default {
  name: 'message',
  props: ['type', 'args'],
  components: {
    Notice,
    Error,
    Reply,
  },
};
</script>

<style>
.message {
  padding: 5px 10px;
}
</style>
