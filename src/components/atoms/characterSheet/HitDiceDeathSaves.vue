<template>
<!-- Turn this into a molecule? - atoms can include the box and the saves  -->
  <div class="hit-dice-death-saves">
    <section class="hit-dice box">
      <div class="hd-wrapper">
        <label for="hit-dice" class="hd-text">Hit Dice</label>
        <input type="number" name="hit-dice" class="hd-number" placeholder="2d10">
      </div>
      <input type="number" name="num-dice" class="num-of-dice">
      <label for="num-dice" class="sub-arf">Hit Dice</label>
    </section>
    <section class="death-saves-foo box">
      <DeathSaves>Successes</DeathSaves>
      <DeathSaves>Failures</DeathSaves>
      <span class="sub-arf">Death Saves</span>
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
      something: String
    }
  }
</script>

<style lang="less" scoped>
  .hit-dice-death-saves {
    display: flex;
  }

  .box {
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    height: 82px;
    width: 120px;
  }

  .hd-wrapper {
    padding: 5px 0;
  }

  .hd-text {
    color: #bbb;
    margin: 2.5px;
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
    height: 38px;
    padding: 1px;
    text-align: center;
    width: 108px;
  }

  .sub-arf {
    display: inline-block;
    padding: 2px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  .death-saves-foo {
    margin-left: 15px;
  }

  .death-saves-foo > div:first-child {
    padding-top: 15px;
  }

  .death-saves-foo > div:nth-child(2) {
    padding-bottom: 15px;
  }
</style>
