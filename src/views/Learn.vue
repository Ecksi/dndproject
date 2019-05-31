<template>
  <div>
    <h1 class="sub-header-text">Character sheet playground</h1>
    <div class="paper">
      <header class="border char-info">
        <div class="border">Name Block</div>
        <div class="border">Race / Class Block</div>
      </header>
      <main class="border bottom-block">
        <section class="border char-stats">
          <div class="border attributes-skills">
            <div class="border attributes">
              <div class="border">Strength</div>
              <div class="border">Dexterity</div>
              <div class="border">Constitution</div>
              <div class="border">Intelligence</div>
              <div class="border">Wisdom</div>
              <div class="border">Charisma</div>
            </div>
            <div class="border skills">skills & saving throws</div>
          </div>
          <div class="border prof-lang">Prof & Langs</div>
        </section>
        <section class="border char-gear">
          <div class="border">AC - Init - HP</div>
          <div class="border">Attacks & Spellcasting</div>
          <div class="border">Equipment</div>
        </section>
        <section class="border char-traits">
          <div class="border">Background Traits</div>
          <div class="border">Class Traits</div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Learn',
};
</script>

<style lang="less" scoped>
  .paper {
    border: 1px #333 solid;
    display: flex;
    flex-direction: column;
    height: 900px;
    margin: 0 auto;
    padding: 15px;
    width: 75%;
  }

  .border {
    border: 1px #333 solid;
  }

  .char-info {
    display: flex;
    height: 100px;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 100%;

    div {
      width: 50%;
    }
  }

  .bottom-block {
    display: flex;
    height: 800px;
  }

  .attributes-skills {
    display: flex;
    height: 100%;
    width: 100%;

    div {
      height: 100%;
    }

    .attributes {
      width: 30%;
    }

    .skills {
      width: 70%;
    }
  }

  .attributes {
    display: flex;
    flex-direction: column;
  }

  .char-stats, .char-gear, .char-traits {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    width: 33%;
  }

  .char-stats {
    .attributes-skills {
      height: 70%;
    }

    .prof-lang {
      height: 30%;
    }
  }

  .char-gear {
    div {
      height: 33%;
    }
  }

  .char-traits {
    div {
      height: 50%;
    }
  }
</style>
