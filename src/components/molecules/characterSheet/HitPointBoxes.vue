<template>
  <div class="hp-boxes">
    <HitPointBox :hpBox="'top'" />
    <HitPointBox :hpBox="'bot'" />
  </div>
</template>

<script>
  import HitPointBox from '@/components/atoms/characterSheet/HitPointBox';

  export default {
    name: 'HitPointBoxes',
    components: {
      HitPointBox
    }
  }
</script>

<style lang="less" scoped>
  .hp-boxes > div:last-child {
    margin-top: 5px;
    margin-bottom: 15px;
  }
</style>
