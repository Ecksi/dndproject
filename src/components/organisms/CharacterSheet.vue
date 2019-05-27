<template>
  <div>
    <ul>
      <li>Name: {{ character.name }}</li>
      <li>Class: {{ character.class }}</li>
      <li>Race: {{ character.race }}</li>
      <li>Alignment: {{ character.alignment }}</li>
      <li>Background: {{ character. background }}</li>
      <li>Level: {{ character.level }}</li>
      <li><Attributes :charAttributes="character.attributes" /></li>
    </ul>
  </div>
</template>

<script>
import Attributes from '@/components/atoms/Attributes.vue';

export default {
  name: 'CharacterSheet',
  components: {
    Attributes,
  },
  props: {
    character: Object,
  },
};
</script>

<style lang="less" scoped>

</style>
