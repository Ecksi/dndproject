<template>
  <div class="feats">
    <section class="otter">
      Racial Feats
      <div class="feat-box">
        <Feat>
          Fey Ancestry
          <template v-slot:feat_description>You have advantage on saving throws against being charmed, and magic can't put you to sleep.</template>
        </Feat>
        <Feat>
          Darkvision
          <template v-slot:feat_description>You have superior vision in dark and dim conditions. You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Character Feats
      <div class="feat-box">
        <Feat>
          Favored Enemy
          <template v-slot:feat_description>You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.<br/><br/>You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.<br/><br/>You choose an addtional favored enemy, as well as an associated language at 6th and 14th level.<br/><br/>Your favored enemies are:<ul><li>Goblin</li><li>Orc?</li></ul></template>
        </Feat>
        <Feat>
          Natural Explorer
          <template v-slot:feat_description>
            You are particularly familiar with <strong>forest</strong> environment and are adept at traveling and surviving in such regions. When you make an Intelligence or Wisdom check related to <strong>forests</strong>, your proficiency bonus is doubled if you are using a skill that you're proficient in.
            <br/><br/>While traveling for an hour or more in <strong>forests</strong>, you gain the following benefits:
            <ul>
              <li>Difficult terrain doesn't slow your group's travel.</li>
              <li>Your group can't become lost execpt by magical means.</li>
              <li>Even when you are engaged in another activity while travling (such as foraging, navigating, or tracking), you remain alert to danger.</li>
              <li>If you are traveling alone, you can move stealthily at a normal pace.</li>
              <li>When you forage, you find twice as much food as you normally would.</li>
              <li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li>
            </ul>
            You choose additional favored terrain types at 6th and 10th level.
          </template>
        </Feat>
        <Feat>
          Fighting Style
          <template v-slot:feat_description>You will pick this on Wednesday~~</template>
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
    name: 'Thistle',
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
