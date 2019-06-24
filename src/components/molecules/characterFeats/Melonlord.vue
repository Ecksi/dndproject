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
          Channel Divinity
          <template v-slot:feat_description>You gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects.<br/><br/>When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Dvinity again.<br/><br/>Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests.<br/><br/>When you finish a short or long rests, you regain your expended uses.</template>
        </Feat>
        <Feat>
          Channel Divinity: Turn Undead
          <template v-slot:feat_description>As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.<br/><br/>A turned creature must spend its turns trying to move as far away from you as it can, and it can't willing move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.</template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Archetype Feats
      <div class="feat-box">
        <Feat>
          Wrath of the Storm
          <template v-slot:feat_description>You can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw.<br/><br/>The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.<br/><br/>You can use this feature a number of times equal to your Wisdom modifier. You regain all expended uses when you finish a long rest.</template>
        </Feat>
        <Feat>
          Channel Divinity: Destructive Wrath
          <template v-slot:feat_description>You wield the power of the storm with unchecked ferocity. When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.</template>
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
