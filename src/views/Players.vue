<template>
  <div>
    <h1 class="sub-header-text">Select your character</h1>
    <section class="char-portrait">
      <img class="image" @click="selectedChar='del'" src="../../public/assets/del.png" alt="del">
      <img class="image" @click="selectedChar='gardein'" src="../../public/assets/gardein.png" alt="gardein">
      <img class="image" @click="selectedChar='melonlord'" src="../../public/assets/melonlord.png" alt="melonlord">
      <img class="image" @click="selectedChar='tantan'" src="../../public/assets/tantan.png" alt="tantan">
      <img class="image" @click="selectedChar='thistle'" src="../../public/assets/thistle.png" alt="thistle">
    </section>
    <section>
      <CharacterSheet v-if="selectedChar==='del'" :character="del" />
      <CharacterSheet v-if="selectedChar==='gardein'" :character="gardein"/>
      <CharacterSheet v-if="selectedChar==='melonlord'" :character="melonlord" />
      <CharacterSheet v-if="selectedChar==='tantan'" :character="tantan"/>
      <CharacterSheet v-if="selectedChar==='thistle'" :character="thistle"/>
    </section>
  </div>
</template>

<script>
import Del from '@/data/characters/del.json';
import Gardein from '@/data/characters/gardein.json';
import Melonlord from '@/data/characters/melonlord.json';
import Tantan from '@/data/characters/tantan.json';
import Thistle from '@/data/characters/thistle.json';
import CharacterSheet from '@/components/pages/CharacterSheet.vue';

export default {
  name: 'Players',
  components: {
    CharacterSheet
  },
  data: () => ({
    selectedChar: '',
    del: Del,
    gardein: Gardein,
    melonlord: Melonlord,
    tantan: Tantan,
    thistle: Thistle
  })
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

  .image {
    cursor: pointer;
  }
</style>
