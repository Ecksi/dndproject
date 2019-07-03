<template>
  <div>
    <Portraits @selectedChar="(data) => selectedChar = data">Select your character</Portraits>
    <section>
      <CharacterSheet v-if="selectedChar==='del'" :character="del" />
      <CharacterSheet v-if="selectedChar==='gardein'" :character="gardein" />
      <CharacterSheet v-if="selectedChar==='melonlord'" :character="melonlord" />
      <CharacterSheet v-if="selectedChar==='tantan'" :character="tantan" />
      <CharacterSheet v-if="selectedChar==='thistle'" :character="thistle" />
    </section>
  </div>
</template>

<script>
import Portraits from '@/components/atoms/Portraits';
import Del from '@/data/characters/del.json';
import Gardein from '@/data/characters/gardein.json';
import Melonlord from '@/data/characters/melonlord.json';
import Tantan from '@/data/characters/tantan.json';
import Thistle from '@/data/characters/thistle.json';
import CharacterSheet from '@/components/pages/CharacterSheet.vue';

export default {
  name: 'Players',
  components: {
    Portraits,
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

</style>
