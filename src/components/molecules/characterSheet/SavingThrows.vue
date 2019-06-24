<template>
  <div class="skills border">
    <section class="skills-block">
      <Skill :modifier="modifiers.str" :proficient="saving_throws.includes('str')">Strength</Skill>
      <Skill :modifier="modifiers.dex" :proficient="saving_throws.includes('dex')">Dexterity</Skill>
      <Skill :modifier="modifiers.con" :proficient="saving_throws.includes('con')">Constitution</Skill>
      <Skill :modifier="modifiers.int" :proficient="saving_throws.includes('int')">Intelligence</Skill>
      <Skill :modifier="modifiers.wis" :proficient="saving_throws.includes('wis')">Wisdom</Skill>
      <Skill :modifier="modifiers.cha" :proficient="saving_throws.includes('cha')">Charisma</Skill>
    </section>
    <h3 class="center-caps">Saving Throws</h3>
  </div>
</template>

<script>
  import Skill from '@/components/atoms/characterSheet/Skill';

  export default {
    name: 'SavingThrows',
    components: {
      Skill
    },
    props: {
      modifiers: Object,
      saving_throws: Array
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
