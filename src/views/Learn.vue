<template>
  <div>
    <h1 class="sub-header-text">Character sheet playground</h1>
    <div class="paper">
      <header class="char-info">
        <PlayerName />
        <PlayerInfo />
      </header>

      <main class="bottom-block">
        <section class="char-traits">
          <!-- This can be an organism -->
          <div class="attributes-skills">
            <Attributes />
            <div class="skillsauce">
              <Bonus :type="'inspiration'"></Bonus>
              <Bonus :type="'proficiency'"></Bonus>
              <SavingThrows />
              <Skills />
            </div>
          </div>

          <div class="profsauce">
          <!-- This can be an organism -->
            <Bonus :type="'perception'"></Bonus>
            <OtherProfs />
          </div>
        </section>


        <section class="moo-cow char-traits">
          <!-- This can be an organism -->
          <div class="live-block">
            <ArmorInitSpeed />
            <HitPointBoxes />
            <HitDiceDeathSaves />
          </div>
          <AttacksAndSpells />
          <Equipment />
        </section>

        <section class="char-traits wizzle">
          <!-- This can be an organism -->
          <BackgroundTraits />
          <RoundBox>Features & Traits</RoundBox>
          <RoundBox>Portrait</RoundBox>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import ArmorInitSpeed from '@/components/molecules/characterSheet/ArmorInitSpeed';
import AttacksAndSpells from '@/components/atoms/characterSheet/AttacksAndSpells';
import Attributes from '@/components/molecules/characterSheet/Attributes';
import BackgroundTraits from '@/components/molecules/characterSheet/BackgroundTraits';
import Bonus from '@/components/atoms/characterSheet/Bonus';
import Equipment from '@/components/molecules/characterSheet/Equipment';
import HitDiceDeathSaves from '@/components/atoms/characterSheet/HitDiceDeathSaves';
import HitPointBoxes from '@/components/molecules/characterSheet/HitPointBoxes';
import OtherProfs from '@/components/atoms/characterSheet/OtherProfs';
import PlayerInfo from '@/components/atoms/characterSheet/PlayerInfo';
import PlayerName from '@/components/atoms/characterSheet/PlayerName';
import RoundBox from '@/components/atoms/characterSheet/RoundBox';
import SavingThrows from '@/components/molecules/characterSheet/SavingThrows';
import Skills from '@/components/molecules/characterSheet/Skills';

export default {
  name: 'Learn',
  components: {
    ArmorInitSpeed,
    AttacksAndSpells,
    Attributes,
    BackgroundTraits,
    Bonus,
    Equipment,
    HitDiceDeathSaves,
    HitPointBoxes,
    OtherProfs,
    PlayerInfo,
    PlayerName,
    RoundBox,
    SavingThrows,
    Skills,
  }
};
</script>

<style lang="less" scoped>
  .paper {
    border: 1px #333 solid;
    display: flex;
    flex-direction: column;
    height: 1100px;
    margin: 0 auto;
    padding: 15px;
    // width: 800px;
    width: 840px;
  }

  .border {
    border: 1px #333 solid;
  }

  .bottom-block {
    display: flex;
    height: 90%;
  }

  .attributes-skills {
    display: flex;
    margin-bottom: 10px;
  }

  .skillsauce {
    padding: 0 10px;
  }

  .profsauce > div:last-child {
    margin-top: 10px;
  }

  .skillsauce > div:not(:last-child) {
    margin-bottom: 10.75px;
  }

  .live-block {
    background-color: #ddd;
    border-radius: 10px;
    padding: 15px 10px;
    margin-bottom: 10px;
  }

  .moo-cow > div:last-child {
    margin-top: 10px;
  }

  .moo-cow {
    margin-right: 10px
  }

  .char-traits {
    // width: 33%;
  }

  .wizzle > div:not(:last-child) {
    margin-bottom: 10px;
  }
</style>
