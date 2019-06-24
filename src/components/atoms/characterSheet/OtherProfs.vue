<template>
  <div>
    <textarea name="otherProfs" class="main-text border" placeholder="Add Proficiences" :value="textForm"></textarea>
    <label for="otherProfs" class="sub-text center-caps">Other Proficiencies and Languages</label>
  </div>
</template>

<script>
  export default {
    name: 'OtherProfs',
    props: {
      proficiences: Object
    },
    data() {
      return {
        textForm:
        `Armor: ${this.proficiences.armor}\n\nWeapons: ${this.proficiences.weapons}\n\nTools: ${this.proficiences.tools}\n\nLanguages: ${this.proficiences.languages}`
      }
    }
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
