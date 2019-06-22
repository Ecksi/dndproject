<template>
  <div class="moo-cow">
    <section class="live-block">
      <ArmorInitSpeed />
      <HitPointBoxes />
      <HitDiceDeathSaves />
    </section>
    <AttacksAndSpells />
    <Equipment />
  </div>
</template>

<script>
  import ArmorInitSpeed from '@/components/molecules/characterSheet/ArmorInitSpeed';
  import AttacksAndSpells from '@/components/atoms/characterSheet/AttacksAndSpells';
  import Equipment from '@/components/molecules/characterSheet/Equipment';
  import HitDiceDeathSaves from '@/components/atoms/characterSheet/HitDiceDeathSaves';
  import HitPointBoxes from '@/components/molecules/characterSheet/HitPointBoxes';

  export default {
    name: 'ColumnTwo',
    components: {
      ArmorInitSpeed,
      AttacksAndSpells,
      Equipment,
      HitDiceDeathSaves,
      HitPointBoxes,
    }
  }
</script>

<style lang="less" scoped>
  .live-block {
    background-color: #ddd;
    border-radius: 10px;
    padding: 15px 10px;
    margin-bottom: 10px;
  }

  .moo-cow > div:last-child {
    margin-top: 10px;
  }

  .moo-cow {
    margin-right: 10px
  }
</style>
