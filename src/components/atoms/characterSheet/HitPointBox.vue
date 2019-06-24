<template>
  <div>
    <section v-show="hpBox === 'top'" class="box box-top">
      <div class="hp-max-wrapper">
        <label for="hp-max" class="hp-max-label">Hit Point Maximum</label>
        <input type="text" name="hp-max" class="hp-max" placeholder="10" :value="hit_points">
      </div>
      <input type="text" name="hp-current" class="hit-points" :value="hit_points">
      <label for="hp-current" class="sub-text center-caps">Current Hit Points</label>
    </section>
    <section v-show="hpBox === 'bot'" class="box box-bottom">
      <input type="number" name="hp-temp" class="hit-points">
      <label for="hp-temp" class="sub-text center-caps">Temporary Hit Points</label>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HitPointBox',
    props: {
      hpBox: String,
      hit_points: String
    }
  }
</script>

<style lang="less" scoped>
  input, label {
    display: block;
  }

  .box {
    border: 1px solid black;
    width: 256px;
  }

  .box-top {
    border-radius: 10px 10px 0 0;
  }

  .box-bottom {
    border-radius: 0 0 10px 10px;
  }

  .hp-max, .hit-points {
    background-color: transparent;
  }

  .hp-max-wrapper {
    display: flex;
    justify-content: space-around;
    padding-top: 3px;
  }

  .hp-max, .hp-max-label {
    display: inline-block;
  }

  .hp-max-label {
    color: #bbb;
  }

  .hp-max {
    border: none;
    border-bottom: 1px solid #ddd;
    text-align: center;
    width: 40%;
  }

  .hp-max::placeholder {
    color: #ddd;
  }

  .hit-points {
    border: none;
    font-size: 3em;
    padding: 14px 0;
    text-align: center;
    width: 256px;
  }

  .sub-text {
    font-weight: bold;
    padding-bottom: 5px;
  }
</style>
