<template>
  <div>
    <textarea name="otherProfs" class="main-text" placeholder="Add Proficiences"></textarea>
    <label for="otherProfs" class="sub-text">Other Proficiencies and Languages</label>
  </div>
</template>

<script>
  export default {
    name: 'OtherProfs'
  }
</script>

<style lang="less" scoped>
  .main-text {
    background-color: transparent;
    display: block;
    font-size: 1.4rem;
    height: 260px;
    padding: 10px;
    width: 265px;
  }

  .sub-text {
    border: 1px solid black;
    border-radius: 0 0 10px 10px;
    border-top: none;
    display: inline-block;
    font-weight: bold;
    left: 20px;
    padding: 4px 0;
    position: relative;
    width: 245px;
  }
</style>
