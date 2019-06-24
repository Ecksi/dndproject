<template>
  <div class="moo-cow">
    <section class="live-block">
      <ArmorInitSpeed :stats="stats" :init="init" />
      <HitPointBoxes :hit_points="stats.hit_points" />
      <HitDiceDeathSaves :hit_dice="stats.hit_dice" />
    </section>
    <AttacksAndSpells />
    <Equipment :currency="currency" />
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
    },
    props: {
      stats: Object,
      init: Number,
      currency: Object
    }
  }
</script>

<style lang="less" scoped>
  .live-block {
    padding: 0 10px;
    margin-bottom: 10px;
  }

  .moo-cow > div:last-child {
    margin-top: 10px;
  }

  .moo-cow {
    margin-right: 10px
  }
</style>
