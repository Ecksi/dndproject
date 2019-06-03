<template>
  <div class="attributes">
    <Attribute>Strength</Attribute>
    <Attribute>Dexterity</Attribute>
    <Attribute>Consitution</Attribute>
    <Attribute>Wisdom</Attribute>
    <Attribute>Intelligence</Attribute>
    <Attribute>Charisma</Attribute>
  </div>
</template>

<script>
  import Attribute from '@/components/atoms/characterSheet/Attribute';

  export default {
    name: 'Attributes',
    components: {
      Attribute
    }
  }
</script>

<style lang="less" scoped>
  .attributes {
    background-color: #999;
    border-radius: 10px;
    height: 612px;
    padding: 15px 0 0.1px 10px;
    width: 85px;
  }
</style>
