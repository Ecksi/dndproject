<template>
  <div class="hp-boxes">
    <HitPointBox :hpBox="'top'" :hit_points="hit_points" />
    <HitPointBox :hpBox="'bot'" :hit_points="hit_points" />
  </div>
</template>

<script>
  import HitPointBox from '@/components/atoms/characterSheet/HitPointBox';

  export default {
    name: 'HitPointBoxes',
    components: {
      HitPointBox
    },
    props: {
      hit_points: Number
    }
  }
</script>

<style lang="less" scoped>
  .hp-boxes > div:last-child {
    margin-top: 5px;
    margin-bottom: 15px;
  }
</style>
