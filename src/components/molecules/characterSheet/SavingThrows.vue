<template>
  <div class="skills">
    <section class="skills-block">
      <Skill>Strength</Skill>
      <Skill>Dexterity</Skill>
      <Skill>Constitution</Skill>
      <Skill>Intelligence</Skill>
      <Skill>Wisdom</Skill>
      <Skill>Charisma</Skill>
    </section>
    <h3 class="skill-box-text">Saving Throws</h3>
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
    width: 178px;
  }

  .skills-block {
    padding-left: 10px;
    padding-top: 10px;
  }
</style>
