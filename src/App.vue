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
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-size: 10px;
  }

  .center-text {
    display: inherit;
    font-size: 1.6rem;
    text-align: center;
  }

  .sub-header-text {
    font-size: 2.8rem;
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;
  }
</style>
