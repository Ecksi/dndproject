<template>
  <div class="feats">
    <section class="otter">
      Racial Feats
      <div class="feat-box">
        <Feat>
          Dwarven Resilience
          <template v-slot:feat_description>You have advantage on saving throws against poison, and you have resistance against poison damage.</template>
        </Feat>
        <Feat>
          Dwarven Toughness
          <template v-slot:feat_description>Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.</template>
        </Feat>
        <Feat>
          Darkvision
          <template v-slot:feat_description>You have superior vision in dark and dim conditions. You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</template>
        </Feat>
        <Feat>
          Stonecutting
          <template v-slot:feat_description>Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check instead of your normal proficiency bonus.</template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Character Feats
      <div class="feat-box">
        <Feat>
          Font of Magic
          <template v-slot:feat_description>You tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.<br/><br/>You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.</template>
        </Feat>
        <Feat>
          Flexible casting
          <template v-slot:feat_description>
            You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points.
            <br/><br/>As a bonus action you can transform unexpended sorcery points into one spell slot or convert a spell slot into sorcery points. The cost per spell slot / amount of sorcery points can be found in the table below:
            <ul>
              <li>1st lvl spell slot <==> 2 Sorcery points</li>
              <li>2nd lvl spell slot <==> 3 Sorcery points</li>
              <li>3rd lvl spell slot <==> 5 Sorcery points</li>
              <li>4th lvl spell slot <==> 6 Sorcery points</li>
              <li>5th lvl spell slot <==> 7 Sorcery points</li>
            </ul>
          </template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Archetype Feats
      <div class="feat-box">
        <Feat>
          Wild Magic Surge
          <template v-slot:feat_description>
            Your spellcasting can unleash surges of untamed magic. Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1 - 5, roll on the Wild Magic Surge table (pg. 104) to create a magical effect.
            <br/><br/>If that effect is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.</template>
        </Feat>
        <Feat>
          Tides of Chaos
          <template v-slot:feat_description>You can manipulate the forces of chance and chaos to gain advantage on one <strong>attack roll, ability check, or saving throw</strong>. Once you do so, you must finish a long rest before you can use this feature again.<br/><br/>Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.</template>
        </Feat>
      </div>
    </section>
  </div>
</template>

<script>
  import Feat from '@/components/atoms/Feat';

  export default {
    name: 'Gardein',
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
