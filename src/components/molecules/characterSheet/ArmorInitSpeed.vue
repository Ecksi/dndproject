<template>
  <div class="armor-init-speed">
    <CombatStat :phValue="10" :phText="'Armor'" />
    <CombatStat :phValue="'+0'" :phText="'Initiative'" />
    <CombatStat :phValue="30" :phText="'Speed'" />
  </div>
</template>

<script>
  import CombatStat from '@/components/atoms/characterSheet/CombatStat';

  export default {
    name: 'ArmorInitSpeed',
    components: {
      CombatStat
    }
  }
</script>

<style lang="less" scoped>
  .armor-init-speed > div:not(:last-child) {
    margin-right: 15px;
    margin-bottom: 15px;
  }
</style>
