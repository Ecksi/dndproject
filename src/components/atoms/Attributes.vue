<template>
  <div>
    {{ charAttributes }}
  </div>
</template>

<script>
export default {
  name: 'Attributes',
  props: {
    charAttributes: Object,
  },
};
</script>
