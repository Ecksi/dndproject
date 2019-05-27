<template>
  <div>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/atoms/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<style lang="less">

</style>
