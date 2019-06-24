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
          Trance
          <template v-slot:feat_description>Elves don't need to sleep. Instead they meditate deeply, remaining semiconsicious for 4 hours. After resting this way you gain the same benefit that a human does from 8 hours of sleep.</template>
        </Feat>
        <Feat>
          Superior Darkvision
          <template v-slot:feat_description>You have superior vision in dark and dim conditions. You can see in dim light within 120 feet as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.</template>
        </Feat>
        <Feat>
          Drow Magic
          <template v-slot:feat_description>
            You learn the following at:
            <ul>
              <li>1st Level - Dancing Lights Cantrips</li>
              <li>3rd Level - Faerie Fire</li>
              <li>5th Level - Darkness Spell</li>
            </ul>
            Faerie Fire and Darkness are useable once per long rest. Charisma is the spellcasting ability for these spells.
          </template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Character Feats
      <div class="feat-box">
        <Feat>
          title here
          <template v-slot:feat_description>description here</template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Archetype Feats
      <div class="feat-box">
        <Feat>
          title here
          <template v-slot:feat_description>description here</template>
        </Feat>
      </div>
    </section>
  </div>
</template>

<script>
  import Feat from '@/components/atoms/Feat';

  export default {
    name: 'Melonlord',
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
