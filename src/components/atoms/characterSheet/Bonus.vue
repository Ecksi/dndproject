<template>
  <div>
    <section v-show="type === 'inspiration'">
      <input type="checkbox" name="inspiration">
      <div class="shared-box center-caps">
        <label for="inspiration">Inspiration</label>
      </div>
    </section>

    <section v-show="type === 'proficiency'">
      <input class="shared-input" type="number" placeholder="+2" name="prof-bonus" :value="prof_bonus">
      <div class="shared-box text-box center-caps">
        <label for="prof-bonus">Proficiency Bonus</label>
      </div>
    </section>

    <section v-show="type === 'perception'">
      <input class="shared-input" type="number" placeholder="10" name="passive-wisdom" :value="passive_perception">
      <div class="shared-box text-box long-text center-caps">
        <label for="passive-wisdom">Passive Wisdom (Perception)</label>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Bonus',
    props: {
      type: String,
      prof_bonus: String,
      passive_perception: String
    }
  }
</script>

<style lang="less" scoped>
  section {
    height: 32px;
  }

  input {
    appearance: none;
    border: 1px solid black;
    border-radius: 7px;
    font-size: 1.5rem;
    height: 32px;
    margin: 0;
    text-align: center;
    width: 30px;

    &:checked {
      background-image: url('../../../../public/assets/checkmark.png');
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  input[type=number] {
    padding: 0;
    height: 30px;
    width: 28px;
  }

  .shared-box {
    border: 1px solid black;
    border-left: none;
    border-radius: 0 5px 5px 0;
    bottom: 11px;
    display: inline-block;
    padding: 4px 0;
    position: relative;
    width: 149px;
  }

  .text-box {
    bottom: 1px;
  }

  .long-text {
    width: 255px;
  }

  .shared-input {
    background-color: transparent;
  }
</style>
