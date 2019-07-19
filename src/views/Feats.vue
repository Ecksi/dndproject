<template>
  <div class="feat-wrapper">
    <Portraits @selectedChar="(data) => selectedChar = data">Check your Feats</Portraits>
    <div v-if="selectedChar==='del'">
      <h2 class="who">
        <span>Del</span><span class="dash"> - </span>
        <span>Illuskan Human</span><span class="dash"> - </span>
        <span>Arcane Trickseter Rogue</span>
      </h2>
      <Del />
    </div>
    <div v-if="selectedChar==='gardein'">
      <h2 class="who">
        <span>Gardein Battlehammer</span><span class="dash"> - </span>
        <span>Hill Dwarf</span><span class="dash"> - </span>
        <span>Wild Magic Sorcerer</span>
      </h2>
      <Gardein />
    </div>
    <div v-if="selectedChar==='melonlord'">
      <h2 class="who">
        <span>Melonlord</span><span class="dash"> - </span>
        <span>Dark Elf</span><span class="dash"> - </span>
        <span>Tempest Cleric</span>
      </h2>
      <Melonlord />
    </div>
    <div v-if="selectedChar==='tantan'">
      <h2 class="who">
        <span>Tantan</span><span class="dash"> - </span>
        <span>White Dragonborn</span><span class="dash"> - </span>
        <span>School of ? Bard</span>
      </h2>
      <Tantan />
    </div>
    <div v-if="selectedChar==='thistle'">
      <h2 class="who">
        <span>Thistle</span><span class="dash"> - </span>
        <span>Half Elf</span><span class="dash"> - </span>
        <span>Beastmaster Ranger</span>
      </h2>
      <Thistle />
    </div>
  </div>
</template>

<script>
import Portraits from '@/components/atoms/Portraits';
import Del from '@/components/molecules/characterFeats/Del';
import Gardein from '@/components/molecules/characterFeats/Gardein';
import Melonlord from '@/components/molecules/characterFeats/Melonlord';
import Tantan from '@/components/molecules/characterFeats/Tantan';
import Thistle from '@/components/molecules/characterFeats/Thistle';

export default {
  name: 'Feats',
  components: {
    Portraits,
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

<style lang="less">
  .who {
    font-size: 2rem;
    margin: 20px 0;
    text-align: center;
  }

  @media only screen and (max-width : 420px) {
    .feats {
      display: flex;
      flex-direction: column;
    }

    .otter {
      border: none !important;
      width: 100vw !important;
    }

    .who {
      display: flex;
      flex-direction: column;

      .dash {
        display: none;
      }
    }
  }
</style>
