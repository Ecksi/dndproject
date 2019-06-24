<template>
  <div class="player-name">
    <input name="char-name" type="text" class="char-input" placeholder="Bort McSimpson">
    <label for="char-name" class="char-label">Character Name</label>
  </div>
</template>

<script>
  export default {
    name: 'PlayerName'
  }
</script>

<style lang="less" scoped>
  .player-name {
    border: 1px solid black;
    border-right: none;
    border-radius: 10px 0 0 10px;
    bottom: 3px;
    display: inline-block;
    height: 65px;
    margin: 13px 0;
    padding: 5px 0;
    position: relative;
    width: 240px;
  }

  .char-input {
    background-color: transparent;
    border-radius: 5px;
    font-size: 1.6rem;
    line-height: 1.15;
    margin: 5px;
    padding: 8px;
    width: 210px;
  }

  .char-label {
    display: block;
    font-size: 1.2rem;
    letter-spacing: 0.1px;
    padding-left: 12px;
    text-align: left;
  }
</style>
