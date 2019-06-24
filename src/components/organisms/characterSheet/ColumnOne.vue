<template>
  <div>
    <section class="attributes-skills">
      <Attributes :attributes="attributes" :modifiers="modifiers" />
      <div class="skillsauce">
        <Bonus :type="'inspiration'"></Bonus>
        <Bonus :type="'proficiency'" :prof_bonus="prof_bonus"></Bonus>
        <SavingThrows :modifiers="modifiers" :saving_throws="skills.saving_throws" />
        <Skills  :modifiers="modifiers" :skills="skills.skills" />
      </div>
    </section>
    <section class="profsauce">
      <Bonus :type="'perception'" :passive_perception="10+modifiers.wis"></Bonus>
      <OtherProfs :proficiences="skills.proficiences" />
    </section>
  </div>
</template>

<script>
import Attributes from '@/components/molecules/characterSheet/Attributes';
import Bonus from '@/components/atoms/characterSheet/Bonus';
import OtherProfs from '@/components/atoms/characterSheet/OtherProfs';
import SavingThrows from '@/components/molecules/characterSheet/SavingThrows';
import Skills from '@/components/molecules/characterSheet/Skills';

  export default {
    name: 'ColumnOne',
    components: {
      Attributes,
      Bonus,
      OtherProfs,
      SavingThrows,
      Skills
    },
    props: {
      attributes: Object,
      modifiers: Object,
      skills: Object,
      level: String
    },
    computed: {
      prof_bonus: function() {
        return 1 + (Math.ceil(this.level * .25));
      }
    }
  }
</script>

<style lang="less" scoped>
  .attributes-skills {
    display: flex;
    margin-bottom: 10px;
  }

  .skillsauce {
    padding: 0 10px;
  }

  .profsauce > div:last-child {
    margin-top: 10px;
  }

  .skillsauce > div:not(:last-child) {
    margin-bottom: 10.75px;
  }
</style>
