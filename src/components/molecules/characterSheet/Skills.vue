<template>
  <div class="skills">
    <section class="skills-block">
      <Skill>Acrobatics <template v-slot:attr>(Dex)</template></Skill>
      <Skill>Animal Handling <template v-slot:attr>(Wis)</template></Skill>
      <Skill>Arcana <template v-slot:attr>(Int)</template></Skill>
      <Skill>Athletics <template v-slot:attr>(Str)</template></Skill>
      <Skill>Deception <template v-slot:attr>(Cha)</template></Skill>
      <Skill>History <template v-slot:attr>(Int)</template></Skill>
      <Skill>Insight <template v-slot:attr>(Wis)</template></Skill>
      <Skill>Intimidation <template v-slot:attr>(Cha)</template></Skill>
      <Skill>Investigation <template v-slot:attr>(Int)</template></Skill>
      <Skill>Medicine <template v-slot:attr>(Wis)</template></Skill>
      <Skill>Nature <template v-slot:attr>(Int)</template></Skill>
      <Skill>Perception <template v-slot:attr>(Wis)</template></Skill>
      <Skill>Performance <template v-slot:attr>(Cha)</template></Skill>
      <Skill>Persuasion <template v-slot:attr>(Cha)</template></Skill>
      <Skill>Religion <template v-slot:attr>(Int)</template></Skill>
      <Skill>Sleight of Hand <template v-slot:attr>(Dex)</template></Skill>
      <Skill>Stealth <template v-slot:attr>(Dex)</template></Skill>
      <Skill>Survival <template v-slot:attr>(Wis)</template></Skill>
    </section>
    <h3 class="skill-box-text">Skills</h3>
  </div>
</template>

<script>
  import Skill from '@/components/atoms/characterSheet/Skill';

  export default {
    name: 'SavingThrows',
    components: {
      Skill
    }
  }
</script>

<style lang="less" scoped>
  .skills {
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    width: 178px;
  }

  .skills-block {
    padding-left: 10px;
    padding-top: 10px;
  }

  .skill-box-text {
    text-align: center;
    text-transform: uppercase;
  }
</style>
