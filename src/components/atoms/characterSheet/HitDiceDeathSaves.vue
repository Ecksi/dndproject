<template>
  <div class="hit-dice-death-saves">
    <section class="hit-dice box border">
      <div class="hd-wrapper">
        <label for="hit-dice" class="hd-text">Hit Dice</label>
        <input type="text" name="hit-dice" class="hd-number" placeholder="2d10" :value="hit_dice">
      </div>
      <input type="text" name="num-dice" class="num-of-dice" :value="hit_dice">
      <label for="num-dice" class="sub-arf center-caps">Hit Dice</label>
    </section>
    <section class="death-saves-foo box border">
      <DeathSaves>Successes</DeathSaves>
      <DeathSaves>Failures</DeathSaves>
      <span class="sub-arf center-caps">Death Saves</span>
    </section>
  </div>
</template>

<script>
  import DeathSaves from '@/components/atoms/characterSheet/DeathSaves';

  export default {
    name: 'HitDiceDeathSaves',
    components: {
      DeathSaves
    },
    props: {
      hit_dice: String
    }
  }
</script>

<style lang="less" scoped>
  .hit-dice-death-saves {
    display: flex;
  }

  .box {
    height: 82px;
    width: 120px;
  }

  .hd-wrapper {
    padding: 5px 0;
  }

  .hd-text {
    color: #bbb;
    margin: 2.5px;
    margin-left: 9px;
  }

  .num-of-dice, .hd-number {
    background-color: transparent;
  }

  .hd-number {
    border: none;
    border-bottom: 1px solid #bbb;
    font-size: 1.2rem;
    margin-right: 3px;
    padding: 0 3px;
    text-align: center;
    width: 60px;
  }

  .num-of-dice {
    border: none;
    font-size: 1.8rem;
    height: 35px;
    padding: 1px;
    text-align: center;
    width: 118px;
  }

  .sub-arf {
    display: inline-block;
    padding: 2px;
    width: 100%;
  }

  .death-saves-foo {
    margin-left: 15px;
  }

  .death-saves-foo > div:first-child {
    padding-top: 15px;
  }

  .death-saves-foo > div:nth-child(2) {
    padding-bottom: 12px;
  }
</style>
