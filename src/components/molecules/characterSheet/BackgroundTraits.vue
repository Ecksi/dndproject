<template>
  <div class="bg-traits">
    <section class="box box-top">
      <textarea name="bg-personality" class="bg-input"></textarea>
      <label for="bg-personality" class="bg-label">Personality</label>
    </section>
    <section class="box">
      <textarea name="bg-ideals" class="bg-input"></textarea>
      <label for="bg-ideals" class="bg-label">Ideals</label>
    </section>
    <section class="box">
      <textarea name="bg-bonds" class="bg-input"></textarea>
      <label for="bg-bonds" class="bg-label">Bonds</label>
    </section>
    <section class="box box-bottom">
      <textarea name="bg-flaws" class="bg-input"></textarea>
      <label for="bg-flaws" class="bg-label">Flaws</label>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'BackgroundTraits'
  }
</script>

<style lang="less" scoped>
  .bg-traits {
    background-color: #bbb;
    border-radius: 10px;
    padding: 10px;
    width: 236px;
  }

  .bg-traits > section:not(:last-child) {
    margin-bottom: 10px;
  }

  .box {
    background-color: white;
    border: 1px solid black;
    height: 94px;
    padding: 5px;
    width: 224px;
  }

  .box-top {
    border-radius: 10px 10px 0 0;
  }

  .box-bottom {
    border-radius: 0 0 10px 10px;
  }

  .bg-input {
    border: none;
    font-size: 2em;
    height: 58px;
    padding: 10px;
    resize: none;
    width: 204px;
  }

  .bg-label {
    display: inline-block;
    margin-top: 3px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
</style>
