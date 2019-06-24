<template>
  <div class="coins">
    <Coin :currency="currency.cp">cp</Coin>
    <Coin :currency="currency.sp">sp</Coin>
    <Coin :currency="currency.ep">ep</Coin>
    <Coin :currency="currency.gp">gp</Coin>
    <Coin :currency="currency.pp">pp</Coin>
  </div>
</template>

<script>
  import Coin from '@/components/atoms/characterSheet/Coin';

  export default {
    name: 'coins',
    components: {
      Coin
    },
    props: {
      currency: Object
    }
  }
</script>

<style lang="less" scoped>
  .coins > div:not(:last-child) {
    margin-bottom: 5px;
  }
</style>
