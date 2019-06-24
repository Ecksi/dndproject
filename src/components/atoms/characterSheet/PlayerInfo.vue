<template>
  <div class="player-info">
    <ul class="smock">
      <li>
        <input name="classLevel" type="text" class="player-input" placeholder="Barbarian 2">
        <label for="classLevel" class="player-label">Class & Level</label>
      </li>
      <li>
        <input name="playerBg" type="text" class="player-input" placeholder="Urchin">
        <label for="playerBg" class="player-label">Background</label>
      </li>
      <li>
        <input name="playerName" type="text" class="player-input" placeholder="Player McPlayerface">
        <label for="playerName" class="player-label">Player Name</label>
      </li>
      <li>
        <input name="playerRace" type="text" class="player-input" placeholder="Drow Elf">
        <label for="playerRace" class="player-label">Race</label>
      </li>
      <li>
        <input name="playerAlignment" type="text" class="player-input" placeholder="Chaotic Good">
        <label for="playerAignment" class="player-label">Alignment</label>
      </li>
      <li>
        <input name="playerXp" type="text" class="player-input" placeholder="5555">
        <label for="playerXp" class="player-label">Experience Points</label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PlayerInfo',
    props: {
      char_info: Object
    }
  }
</script>

<style lang="less" scoped>
  .player-info {
    display: inline-block;
    height: 95px;
    margin-bottom: 20px;
    padding: 0 16px;
    vertical-align: top;
    width: 565px;
  }

  .smock {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }

  li {
    list-style: none;
    width: 33%;
  }

  .player-input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #333;
    font-size: 1.6rem;
    line-height: 1.15px;
    padding: 1px 0 1px 1px;
    width: 100%;
  }

  .player-label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 5px;
    text-align: left;
  }
</style>
