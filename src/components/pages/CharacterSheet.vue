<template>
  <div class="paper">
    <header class="char-info">
      <PlayerName :name="character.char_info.char_name" />
      <PlayerInfo :char_info="character.char_info" />
    </header>
    <main class="bottom-block">
      <ColumnOne
        :attributes="character.char_attributes"
        :modifiers="modifiers"
        :skills="character.char_skills"
        :level="character.char_info.level"
      />
      <ColumnTwo
        :stats="character.char_stats"
        :init="modifiers.dex"
        :currency="character.currency"
      />
      <ColumnThree
        :bg_traits="character.bg_traits"
        :portrait="character.portrait"
      />
    </main>
  </div>
</template>

<script>
import ColumnOne from '@/components/organisms/characterSheet/ColumnOne';
import ColumnTwo from '@/components/organisms/characterSheet/ColumnTwo';
import ColumnThree from '@/components/organisms/characterSheet/ColumnThree';
import PlayerInfo from '@/components/atoms/characterSheet/PlayerInfo';
import PlayerName from '@/components/atoms/characterSheet/PlayerName';

export default {
  name: 'CharacterSheet',
  components: {
    ColumnOne,
    ColumnTwo,
    ColumnThree,
    PlayerInfo,
    PlayerName
  },
  props: {
    character: Object
  },
  computed: {
    modifiers: function() {
      return Object.keys(this.character.char_attributes).reduce((modifiers, attribute) => {
        modifiers[attribute] = Math.floor((this.character.char_attributes[attribute] - 10) / 2);

        return modifiers;
      }, {});
    }
  }
};
</script>

<style lang="less" scoped>
  .paper {
    background-image: url('../../../public/assets/paper.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px #333 solid;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 1100px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 15px;
    // width: 800px;
    width: 840px;
  }

  .border {
    border: 1px #333 solid;
  }

  .bottom-block {
    display: flex;
    height: 90%;
  }

  @media only screen and (max-width : 420px) {
    .paper {
      height: 100%;
      width: 80vw;
    }

    .char-info {
      display: flex;
      flex-direction: column;
    }

    .bottom-block {
      flex-direction: column;
      justify-content: center;

      .col-piece {
        margin: 0 auto 10px;
      }
    }
  }
</style>
