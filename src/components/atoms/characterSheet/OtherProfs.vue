<template>
  <div>
    <textarea name="otherProfs" class="main-text" placeholder="Add Proficiences"></textarea>
    <label for="otherProfs" class="subtext">Other Proficiencies and Languages</label>
  </div>
</template>

<script>
  export default {
    name: 'OtherProfs'
  }
</script>

<style lang="less" scoped>
  .main-text {
    border: 1px solid black;
    border-radius: 10px;
    display: block;
    height: 260px;
    padding: 10px;
    resize: none;
    width: 265px;
  }

  .subtext {
    background-color: white;
    border: 1px solid black;
    border-radius: 0 0 10px 10px;
    border-top: none;
    display: inline-block;
    font-weight: bold;
    left: 20px;
    padding: 4px 0;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    width: 245px;
  }
</style>
