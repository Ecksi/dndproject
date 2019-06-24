<template>
  <div class="attributes">
    <Attribute :attribute="attributes.str" :modifier="modifiers.str">Strength</Attribute>
    <Attribute :attribute="attributes.dex" :modifier="modifiers.dex">Dexterity</Attribute>
    <Attribute :attribute="attributes.con" :modifier="modifiers.con">Consitution</Attribute>
    <Attribute :attribute="attributes.int" :modifier="modifiers.int">Intelligence</Attribute>
    <Attribute :attribute="attributes.wis" :modifier="modifiers.wis">Wisdom</Attribute>
    <Attribute :attribute="attributes.cha" :modifier="modifiers.cha">Charisma</Attribute>
  </div>
</template>

<script>
  import Attribute from '@/components/atoms/characterSheet/Attribute';

  export default {
    name: 'Attributes',
    components: {
      Attribute
    },
    props: {
      attributes: Object,
      modifiers: Object
    }
  }
</script>

<style lang="less" scoped>
  .attributes {
    height: 612px;
    padding: 0 0 0.1px 10px;
    width: 85px;
  }
</style>
