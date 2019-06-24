<template>
  <div class="feats">
    <section class="otter">
      Racial Feats
      <div class="feat-box">
        <Feat>
          Draconic Ancestry
          <template v-slot:feat_description>You have draconic ancestry (White). You gain Breath Weapon and Damage Resistance.<br/><br/>See Below for more detailed information.</template>
        </Feat>
        <Feat>
          Breath Weapon
          <template v-slot:feat_description>You can use your action to exhale destructive energy. You exhale a 15 ft. cone that deals Cold damage and the save type is Con.<br/><br/>When you use your breath weapon, each creature in the area of the exhalation must make a saving throw. The DC for this saving throw is 8 + your Con modifier + your proficiency bonus.<br/><br/>A creature takes 2d6 on a failed save, and half as much damage on a successful one.<br/><br/>The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.<br/><br/>After you use your breath weapon, you can't use it again until you complete a short or long rest.</template>
        </Feat>
        <Feat>
          Damage Resistance
          <template v-slot:feat_description>You have resistance to cold damage.</template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Character Feats
      <div class="feat-box">
        <Feat>
          Bardic Inspiration
          <template v-slot:feat_description>You can inspire other through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.<br/><br/>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one <strong>ability check, attack roll, or saving throw</strong> it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails.<br/><br/>Once the Bardic Inspiration die is rolled, it is lost. A creature can only have one Bardic Inspiration die at a time.<br/><br/>You can use this feature a number of times equal to your Charisma modifier. You regain any expended uses when you finish a long rest.<br/><br/>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</template>
        </Feat>
        <Feat>
          Jack of All Trades
          <template v-slot:feat_description>You can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.</template>
        </Feat>
        <Feat>
          Song of Rest
          <template v-slot:feat_description>You can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.<br/><br/>The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.</template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Archetype Feats
      <div class="feat-box">
        <Feat>
          Nothing here yet
          <template v-slot:feat_description>Reach level 3 for archetype feats.</template>
        </Feat>
      </div>
    </section>
  </div>
</template>

<script>
  import Feat from '@/components/atoms/Feat';

  export default {
    name: 'Tantan',
    components: {
      Feat
    }
  }
</script>

<style lang="less" scoped>
  .feats {
    display: flex;
    justify-content: center;

    .otter {
      font-size: 2.4rem;
      text-align: center;
      width: 400px;
    }

    & .otter:nth-child(2) {
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  }

  .feat-box {
    border-top: 1px solid black;
    margin-top: 5px;
    padding-top: 15px;
  }
</style>
