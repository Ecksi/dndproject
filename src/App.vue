<template>
  <div>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/atoms/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>


<style lang="less">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-size: 10px;
  }
</style>
