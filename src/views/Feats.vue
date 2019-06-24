<template>
  <div>
    <h1 class="sub-header-text">Check your Feats</h1>
    <section class="char-portrait">
      <img class="image" @click="selectedChar='del'" src="../../public/assets/del.png" alt="del">
      <img class="image" @click="selectedChar='gardein'" src="../../public/assets/gardein.png" alt="gardein">
      <img class="image" @click="selectedChar='melonlord'" src="../../public/assets/melonlord.png" alt="melonlord">
      <img class="image" @click="selectedChar='tantan'" src="../../public/assets/tantan.png" alt="tantan">
      <img class="image" @click="selectedChar='thistle'" src="../../public/assets/thistle.png" alt="thistle">
    </section>
    <div v-if="selectedChar==='del'">
      <h2 class="who">Del - Illuskan Human - Arcane Trickster Rogue</h2>
      <Del />
    </div>
    <div v-if="selectedChar==='gardein'">
      <h2 class="who">Gardein - Hill Dwarf - Wild Magic Sorcerer</h2>
      <Gardein />
    </div>
    <div v-if="selectedChar==='melonlord'">
      <h2 class="who">Melonlord - Dark Elf - Tempest Cleric</h2>
      <Melonlord />
    </div>
    <div v-if="selectedChar==='tantan'">
      <h2 class="who">Tantan - White Dragonborn - School of ? Bard</h2>
      <Tantan />
    </div>
    <div v-if="selectedChar==='thistle'">
      <h2 class="who">Thistle - Half-Elf - Beastmaster Ranger</h2>
      <Thistle />
    </div>
  </div>
</template>

<script>
import Del from '@/components/molecules/characterFeats/Del';
import Gardein from '@/components/molecules/characterFeats/Gardein';
import Melonlord from '@/components/molecules/characterFeats/Melonlord';
import Tantan from '@/components/molecules/characterFeats/Tantan';
import Thistle from '@/components/molecules/characterFeats/Thistle';

export default {
  name: 'Feats',
  components: {
    Del,
    Gardein,
    Melonlord,
    Tantan,
    Thistle
  },
  data() {
    return {
      selectedChar: '',
    }
  }
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

  .who {
    font-size: 2rem;
    margin: 20px 0;
    text-align: center;
  }
</style>
