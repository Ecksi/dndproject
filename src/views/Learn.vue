<template>
  <div>
    <h1 class="sub-header-text">Character sheet playground</h1>
    <div class="paper">
      <header class="char-info">
        <PlayerName />
        <PlayerInfo />
      </header>
      <main class="bottom-block">
        <ColumnOne />
        <ColumnTwo />
        <ColumnThree />
      </main>
    </div>
  </div>
</template>

<script>
import ColumnOne from '@/components/organisms/characterSheet/ColumnOne';
import ColumnTwo from '@/components/organisms/characterSheet/ColumnTwo';
import ColumnThree from '@/components/organisms/characterSheet/ColumnThree';
import PlayerInfo from '@/components/atoms/characterSheet/PlayerInfo';
import PlayerName from '@/components/atoms/characterSheet/PlayerName';

export default {
  name: 'Learn',
  components: {
    ColumnOne,
    ColumnTwo,
    ColumnThree,
    PlayerInfo,
    PlayerName
  }
};
</script>

<style lang="less" scoped>
  .paper {
    background-image: url('../../public/assets/paper.jpg');
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
</style>
