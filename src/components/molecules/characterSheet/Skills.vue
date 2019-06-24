<template>
  <div class="skills border">
    <section class="skills-block">
      <Skill :modifier="modifiers.dex" :proficient="skills.includes('acrobatics')">Acrobatics <template v-slot:attr>(Dex)</template></Skill>
      <Skill :modifier="modifiers.wis" :proficient="skills.includes('animal')">Animal Handling <template v-slot:attr>(Wis)</template></Skill>
      <Skill :modifier="modifiers.int" :proficient="skills.includes('arcana')">Arcana <template v-slot:attr>(Int)</template></Skill>
      <Skill :modifier="modifiers.str" :proficient="skills.includes('athletics')">Athletics <template v-slot:attr>(Str)</template></Skill>
      <Skill :modifier="modifiers.cha" :proficient="skills.includes('deception')">Deception <template v-slot:attr>(Cha)</template></Skill>
      <Skill :modifier="modifiers.int" :proficient="skills.includes('history')">History <template v-slot:attr>(Int)</template></Skill>
      <Skill :modifier="modifiers.wis" :proficient="skills.includes('insight')">Insight <template v-slot:attr>(Wis)</template></Skill>
      <Skill :modifier="modifiers.cha" :proficient="skills.includes('intimidation')">Intimidation <template v-slot:attr>(Cha)</template></Skill>
      <Skill :modifier="modifiers.int" :proficient="skills.includes('investigation')">Investigation <template v-slot:attr>(Int)</template></Skill>
      <Skill :modifier="modifiers.wis" :proficient="skills.includes('medicine')">Medicine <template v-slot:attr>(Wis)</template></Skill>
      <Skill :modifier="modifiers.int" :proficient="skills.includes('nature')">Nature <template v-slot:attr>(Int)</template></Skill>
      <Skill :modifier="modifiers.wis" :proficient="skills.includes('perception')">Perception <template v-slot:attr>(Wis)</template></Skill>
      <Skill :modifier="modifiers.cha" :proficient="skills.includes('performance')">Performance <template v-slot:attr>(Cha)</template></Skill>
      <Skill :modifier="modifiers.cha" :proficient="skills.includes('persuasion')">Persuasion <template v-slot:attr>(Cha)</template></Skill>
      <Skill :modifier="modifiers.int" :proficient="skills.includes('religion')">Religion <template v-slot:attr>(Int)</template></Skill>
      <Skill :modifier="modifiers.dex" :proficient="skills.includes('sleight')">Sleight of Hand <template v-slot:attr>(Dex)</template></Skill>
      <Skill :modifier="modifiers.dex" :proficient="skills.includes('stealth')">Stealth <template v-slot:attr>(Dex)</template></Skill>
      <Skill :modifier="modifiers.wis" :proficient="skills.includes('survival')">Survival <template v-slot:attr>(Wis)</template></Skill>
    </section>
    <h3 class="center-caps">Skills</h3>
  </div>
</template>

<script>
  import Skill from '@/components/atoms/characterSheet/Skill';

  export default {
    name: 'Skills',
    components: {
      Skill
    },
    props: {
      modifiers: Object,
      skills: Array
    }
  }
</script>

<style lang="less" scoped>
  .skills {
    width: 178px;
  }

  .skills-block {
    padding-left: 10px;
    padding-top: 10px;
  }
</style>
