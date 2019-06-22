<template>
  <div>
    <section class="attributes-skills">
      <Attributes />
      <div class="skillsauce">
        <Bonus :type="'inspiration'"></Bonus>
        <Bonus :type="'proficiency'"></Bonus>
        <SavingThrows />
        <Skills />
      </div>
    </section>
    <section class="profsauce">
      <Bonus :type="'perception'"></Bonus>
      <OtherProfs />
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
