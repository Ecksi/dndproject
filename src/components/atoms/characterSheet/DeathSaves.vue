<template>
  <div class="death-saves">
    <section class="save-text">
      <slot></slot>
    </section>
    <section class="foo">
      <input type="checkbox" class="save-bubble">
      <input type="checkbox" class="save-bubble">
      <input type="checkbox" class="save-bubble">
    </section>
  </div>
</template>

<script>
  export default {
    name: 'DeathSaves'
  }
</script>

<style lang="less" scoped>
  .death-saves {
    display: flex;
    justify-content: center;
  }

  .save-text {
    font-size: .8rem;
    letter-spacing: 0.2px;
    line-height: 17px;
    text-align: right;
    text-transform: uppercase;
    width: 55px;
  }

  .foo {
    margin-left: 5px;
  }

  .save-bubble {
    appearance: none;
    border: 1px solid black;
    border-radius: 50%;
    height: 10px;
    width: 10px;

    &:checked {
      background-color: #333;
    }
  }
</style>
