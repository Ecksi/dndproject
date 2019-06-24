<template>
  <div class="equipment">
    <Coins />
    <section class="equip">
      <textarea name="equipment" class="equipment-list" placeholder="Equipment list here"></textarea>
      <label for="equipment" class="equipment-text">equipment</label>
    </section>
  </div>
</template>

<script>
  import Coins from '@/components/molecules/characterSheet/Coins';

  export default {
    name: 'Equipment',
    components: {
      Coins
    }
  }
</script>

<style lang="less" scoped>
  .equipment {
    display: flex;
    height: 213px;
    padding: 10px;
    width: 254px;
  }

  .equip {
    width: 180px;
  }

  .equipment-list {
    background-color: transparent;
    border: none;
    height: 180px;
    padding: 10px;
    width: 170px;
  }

  .equipment-text {
    display: inline-block;
    font-size: 1.2rem;
    padding-left: 10px;
    text-align: left;
    width: 100%;
  }
</style>
