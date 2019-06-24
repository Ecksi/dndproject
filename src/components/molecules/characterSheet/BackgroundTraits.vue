<template>
  <div class="bg-traits">
    <section class="box box-top">
      <textarea name="bg-personality" class="bg-input" :value="bg_traits.personality"></textarea>
      <label for="bg-personality" class="bg-label center-caps">Personality</label>
    </section>
    <section class="box">
      <textarea name="bg-ideals" class="bg-input" :value="bg_traits.ideal"></textarea>
      <label for="bg-ideals" class="bg-label center-caps">Ideals</label>
    </section>
    <section class="box">
      <textarea name="bg-bonds" class="bg-input" :value="bg_traits.bond"></textarea>
      <label for="bg-bonds" class="bg-label center-caps">Bonds</label>
    </section>
    <section class="box box-bottom">
      <textarea name="bg-flaws" class="bg-input" :value="bg_traits.flaw"></textarea>
      <label for="bg-flaws" class="bg-label center-caps">Flaws</label>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'BackgroundTraits',
    props: {
      bg_traits: Object
    }
  }
</script>

<style lang="less" scoped>
  .bg-traits > section:not(:last-child) {
    margin-bottom: 10px;
  }

  .box {
    border: 1px solid black;
    height: 94px;
    padding: 5px;
    width: 245px;
  }

  .box-top {
    border-radius: 10px 10px 0 0;
  }

  .box-bottom {
    border-radius: 0 0 10px 10px;
  }

  .bg-input {
    background-color: transparent;
    border: none;
    font-size: 1.2em;
    height: 58px;
    padding: 10px;
    width: 226px;
  }

  .bg-label {
    display: inline-block;
    margin-top: 3px;
    width: 100%;
  }
</style>
