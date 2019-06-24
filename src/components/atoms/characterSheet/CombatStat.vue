<template>
  <div class="combat-stat">
    <input type="number" name="combatStat" class="stat-modifier border" :placeholder="phValue" :value="actualValue">
    <label for="combatStat" class="sub-text center-caps">{{phText}}</label>
  </div>
</template>

<script>
  export default {
    name: 'CombatStat',
    props: {
      phValue: Number,
      phText: String,
      actualValue: Number
    }
  }
</script>

<style lang="less" scoped>
  .combat-stat {
    display: inline-block;
  }

  .stat-modifier {
    background-color: transparent;
    display: block;
    font-size: 3.5rem;
    height: 64px;
    text-align: center;
    width: 71px;
  }

  .sub-text {
    border: 1px solid black;
    border-radius: 0 0 10px 10px;
    border-top: none;
    display: inline-block;
    font-size: .8rem;
    left: 12px;
    letter-spacing: 0.2px;
    padding: 5px 0;
    position: relative;
    width: 50px;
  }
</style>
