<template>
  <div class="wizzle">
    <BackgroundTraits :bg_traits="bg_traits" />
    <FeatureTraits />
    <!-- <Portrait :portrait="portrait" /> -->
  </div>
</template>

<script>
import BackgroundTraits from '@/components/molecules/characterSheet/BackgroundTraits';
import FeatureTraits from '@/components/atoms/characterSheet/FeatureTraits';
import Portrait from '@/components/atoms/characterSheet/Portrait';

  export default {
    name: 'ColumnThree',
    components: {
      BackgroundTraits,
      FeatureTraits,
      Portrait
    },
    props: {
      bg_traits: Object,
      portrait: String
    }
  }
</script>

<style lang="less" scoped>
  .wizzle > div:not(:last-child) {
    margin-bottom: 10px;
  }
</style>
