<template>
  <div class="portrait border">
    <div class="box-input">
      <img src="" class="img-foo" alt="">
    </div>
    <span class="box-text center-caps">
      Portrait
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Portrait'
  }
</script>

<style lang="less" scoped>
  .portrait {
    height: 212px;
    padding: 10px;
    width: 235px;
  }

  .box-input {
    border: none;
    padding: 5px;
    height: 187px;
    text-align: center;
    width: 225px;
  }

  .img-foo {
    padding-top: 10px;
    height: 157px;
    width: 195px;
  }

  .box-text {
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 3px;
    width: 100%;
  }
</style>
