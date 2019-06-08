<template>
  <div>
    <label for="coins" class="coin-label">
      <slot></slot>
    </label>
    <input type="number" for="coins" class="coin-input">
  </div>
</template>

<script>
  export default {
    name: 'Coin'
  }
</script>

<style lang="less" scoped>
  .coin-label {
    height: 9px;
    border: 1px solid black;
    border-radius: 10px 0 0 10px;
    border-right: none;
    bottom: 2px;
    display: inline-block;
    font-size: .8rem;
    padding: 3px 0;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    width: 21px;
  }
  .coin-input {
    border: 1px solid black;
    border-radius: 10px;
    height: 13px;
    padding: 10px 3px;
    width: 40px;
  }
</style>
