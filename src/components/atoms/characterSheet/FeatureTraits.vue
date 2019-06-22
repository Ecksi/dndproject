<template>
  <div class="round-box border">
    <textarea name="" class="box-input"></textarea>
    <label for="" class="box-text center-caps">
      Features & Traits
    </label>
  </div>
</template>

<script>
  export default {
    name: 'FeatureTraits'
  }
</script>

<style lang="less" scoped>
  .round-box {
    // background-color: white;
    // opacity: 0.7;
    height: 232px;
    padding: 10px;
    width: 236px;
  }

  .box-input {
    background-color: transparent;
    border: none;
    padding: 5px;
    height: 207px;
    width: 225px;
  }

  .box-text {
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 3px;
    width: 100%;
  }
</style>
