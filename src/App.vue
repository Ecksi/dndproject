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
    background-image: url('../public/assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-size: 10px;
  }

  input[type="checkbox"] {
    cursor: pointer;
    outline: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea {
    resize: none;
  }

  ::placeholder {
    color: #888;
  }

  .center-text {
    display: inherit;
    font-size: 1.6rem;
    text-align: center;
  }

  .center-caps {
    text-align: center;
    text-transform: uppercase;
  }

  .bold {
    font-weight: bold;
  }

  .border {
    border: 1px solid black;
    border-radius: 10px;
  }

  .sub-header-text {
    font-size: 2.8rem;
    text-align: center;
  }

  @media print {
  body * {
    visibility: hidden;
  }
  .paper, .paper * {
    visibility: visible;
  }
  .paper {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
