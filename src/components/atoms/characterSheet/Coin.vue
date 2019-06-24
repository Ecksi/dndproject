<template>
  <div>
    <label for="coins" class="coin-label center-caps">
      <slot></slot>
    </label>
    <input type="number" for="coins" class="coin-input border" :value="currency">
  </div>
</template>

<script>
  export default {
    name: 'Coin',
    props: {
      currency: Number
    }
  }
</script>

<style lang="less" scoped>
  .coin-label {
    border: 1px solid black;
    border-radius: 10px 0 0 10px;
    border-right: none;
    bottom: 2px;
    display: inline-block;
    font-size: .8rem;
    height: 9px;
    padding: 4px 0 3px 2px;
    position: relative;
    width: 21px;
  }

  .coin-input {
    background-color: transparent;
    height: 13px;
    padding: 10px 3px;
    text-align: center;
    width: 40px;
  }
</style>
