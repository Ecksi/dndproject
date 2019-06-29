<template>
  <div class="wizzle col-piece">
    <BackgroundTraits :bg_traits="bg_traits" />
    <FeatureTraits :features="features" />
  </div>
</template>

<script>
import BackgroundTraits from '@/components/molecules/characterSheet/BackgroundTraits';
import FeatureTraits from '@/components/atoms/characterSheet/FeatureTraits';

  export default {
    name: 'ColumnThree',
    components: {
      BackgroundTraits,
      FeatureTraits
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
