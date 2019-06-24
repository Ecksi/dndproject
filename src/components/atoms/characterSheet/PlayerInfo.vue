<template>
  <div class="player-info border">
    <ul class="smock">
      <li>
        <input name="classLevel" type="text" class="player-input" placeholder="Barbarian 2" :value="`${char_info.class} ${char_info.level}`">
        <label for="classLevel" class="player-label center-caps">Class & Level</label>
      </li>
      <li>
        <input name="playerBg" type="text" class="player-input" placeholder="Urchin" :value="char_info.background">
        <label for="playerBg" class="player-label center-caps">Background</label>
      </li>
      <li>
        <input name="playerName" type="text" class="player-input" placeholder="Player McPlayerface" :value="char_info.player_name">
        <label for="playerName" class="player-label center-caps">Player Name</label>
      </li>
      <li>
        <input name="playerRace" type="text" class="player-input" placeholder="Drow Elf" :value="char_info.race">
        <label for="playerRace" class="player-label center-caps">Race</label>
      </li>
      <li>
        <input name="playerAlignment" type="text" class="player-input" placeholder="Chaotic Good" :value="char_info.alignment">
        <label for="playerAignment" class="player-label center-caps">Alignment</label>
      </li>
      <li>
        <input name="playerXp" type="text" class="player-input" placeholder="5555" :value="char_info.experience">
        <label for="playerXp" class="player-label center-caps">Experience Points</label>
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
