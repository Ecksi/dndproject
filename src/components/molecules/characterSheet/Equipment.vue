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
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    height: 213px;
    padding: 10px;
    width: 254px;
  }

  .equip {
    width: 180px;
  }

  .equipment-list {
    border: none;
    height: 180px;
    padding: 10px;
    resize: none;
  }

  .equipment-text {
    display: inline-block;
    font-size: 1.2rem;
    padding-left: 10px;
    text-transform: uppercase;
    width: 100%;
  }
</style>
