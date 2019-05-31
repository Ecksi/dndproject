<template>
  <div>
    <h1 class="sub-header-text">Meet the players</h1>
    <span class="center-text">Click on a player for more information</span>
    <section class="char-portrait">
      <img @click="selectedChar='Del'" src="../../public/assets/del.png" alt="del">
      <img @click="selectedChar='Gardein Battlehammer'" src="../../public/assets/gardein.png" alt="gardein">
      <img @click="selectedChar='Melon-Lord'" src="../../public/assets/melonlord.png" alt="melonlord">
      <img @click="selectedChar='Tan-Tan'" src="../../public/assets/tantan.png" alt="tantan">
      <img @click="selectedChar='Thistle'" src="../../public/assets/thistle.png" alt="thistle">
    </section>
    <div>
      <div v-for="character in characters"
        :key="generateKey(character)"
        class="center-text"
      >
        <CharacterSheet :character=character :selectedChar="selectedChar" />
      </div>
    </div>
  </div>
</template>

<script>
import Characters from '@/characters.json';
import CharacterSheet from '@/components/organisms/CharacterSheet.vue';

export default {
  name: 'Players',
  components: {
    CharacterSheet,
  },
  data: () => ({
    characters: Characters,
    selectedChar: ''
  }),
  methods: {
    generateKey(character) {
      return Math.random().toString(36).substring(character, 8);
    },
  },
};
</script>

<style lang="less" scoped>
  .char-portrait {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;

    img:not(:last-child) {
      margin-right: 30px;
    }
  }
</style>
