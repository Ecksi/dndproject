<template>
  <div class="feats">
    <section class="otter">
      Racial Feats
      <div class="feat-box">
        <Feat>
          Nothing to see here
          <template v-slot:feat_description>You have no racial traits, have a nice day.</template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Character Feats
      <div class="feat-box">
        <Feat>
          Expertise
          <template v-slot:feat_description>
            At 1st level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.
            <br/><br/>At 6th level, you can choose two more of your proficiencies to gain this benefit.
            <br/><br/>Expertise Chosen:
            <ul>
              <li>Deception</li>
              <li>Sleight of Hand</li>
            </ul>
          </template>
        </Feat>
        <Feat>
          Sneak Attack
          <template v-slot:feat_description>
            You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.
            <br/><br/>You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.
            <br/><br/>The amount of the extra damage increases as you gain level in this class, as shown in the Sneak Attack column of the Rogue table (pg. 95).
          </template>
        </Feat>
        <Feat>
          Thieves' Cant
          <template v-slot:feat_description>
            During your Rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide message in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.
            <br/><br/>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the teritory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for theives on the run.
          </template>
        </Feat>
        <Feat>
          Cunning Action
          <template v-slot:feat_description>Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat, This action can be used only to take the <strong>Dash, Disengage, or Hide</strong> action.</template>
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
    name: 'Del',
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
