<template>
  <div class='attribute'>
    <div class='attribute-name'>
      <slot></slot>
    </div>
    <input class='modifier-stat' type="number" placeholder="10">
    <input class='base-stat' type="number" placeholder="+0">
  </div>
</template>

<script>
  export default {
    name: 'attribute'
  }
</script>

<style lang="less" scoped>
  .attribute {
    margin-bottom: 20px;
    height: 85px;
    width: 70px;

    input {
      display: block;
      margin: 0 auto;
      text-align: center;
    }
  }

  .attribute-name {
    font-size: .8rem;
    font-weight: bold;
    letter-spacing: 0.5px;
    padding-top: 7px;
  }


  .modifier-stat {
    background-color: transparent;
    border: none;
    font-size: 4rem;
    padding-bottom: 5px;
    width: 55px;
  }

  .base-stat {
    background-color: #e0d5be;
    border-radius: 20px;
    font-size: 1.6rem;
    width: 30px;
  }
</style>
