<template>
  <div>
    <h1>Meet the players</h1>
    <div v-for="character in characters"
      :key="generateKey(character)"
    >
      <CharacterSheet :character=character />
    </div>
  </div>
</template>

<script>
  import Characters from '@/characters.json';
  import CharacterSheet from '@/components/organisms/CharacterSheet';

  export default {
    name: 'Players',
    components: {
      CharacterSheet
    },
    data: () => {
      return {
        characters: Characters,
      }
    },
    methods: {
      generateKey(character) {
        return Math.random().toString(36).substring(character, 8);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
