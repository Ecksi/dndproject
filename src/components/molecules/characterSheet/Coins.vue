<template>
  <div class="coins">
    <Coin>cp</Coin>
    <Coin>sp</Coin>
    <Coin>gp</Coin>
    <Coin>ep</Coin>
    <Coin>pp</Coin>
  </div>
</template>

<script>
  import Coin from '@/components/atoms/characterSheet/Coin';

  export default {
    name: 'coins',
    components: {
      Coin
    }
  }
</script>

<style lang="less" scoped>
  .coins > div:not(:last-child) {
    margin-bottom: 5px;
  }
</style>
