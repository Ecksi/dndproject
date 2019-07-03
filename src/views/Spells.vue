<template>
  <div>
    <Portraits @selectedChar="(data) => selectedChar = data">Yo spell list</Portraits>
  </div>
</template>

<script>
  import Portraits from '@/components/atoms/Portraits';

  export default {
    name: 'Spells',
    components: {
      Portraits
    },
    data() {
      return {
        selectedChar: '',
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
