<template>
  <div :is="type" :text="text"></div>
</template>

<script>
import Notice from '@/components/Notice';
import Error from '@/components/Error';
import Reply from '@/components/Reply';
import Preformatted from '@/components/Preformatted';

export default {
  name: 'message',
  props: ['type', 'text'],
  components: {
    Notice,
    Error,
    Reply,
    Preformatted,
  },
};
</script>

<style>
.message {
  padding: 5px 10px;
}
</style>
