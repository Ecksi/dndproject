<template>
  <div class="round-box">
    <textarea name="" class="box-input"></textarea>
    <label for="" class="box-text">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'RoundBox'
  }
</script>

<style lang="less" scoped>
  .round-box {
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    height: 222px;
    padding: 10px;
    width: 236px;
  }

  .box-input {
    border: none;
    padding: 5px;
    height: 200px;
    resize: none;
    width: 225px;
  }

  .box-text {
    display: inline-block;
    margin-top: 3px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
</style>
