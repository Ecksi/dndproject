<template>
  <div>
    <section v-show="type === 'inspiration'">
      <input type="checkbox" name="inspiration">
      <div class="shared-box">
        <label for="inspiration">Inspiration</label>
      </div>
    </section>

    <section v-show="type === 'proficiency'">
      <input type="number" placeholder="+2" name="prof-bonus">
      <div class="shared-box text-box">
        <label for="prof-bonus">Proficiency Bonus</label>
      </div>
    </section>

    <section v-show="type === 'perception'">
      <input type="number" placeholder="10" name="passive-wisdom">
      <div class="shared-box text-box long-text">
        <label for="passive-wisdom">Passive Wisdom (Perception)</label>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Bonus',
    props: {
      type: String
    }
  }
</script>

<style lang="less" scoped>
  section {
    height: 32px;
  }

  input {
    appearance: none;
    background-color: white;
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
    background-color: white;
    border: 1px solid black;
    border-left: none;
    bottom: 11px;
    display: inline-block;
    padding: 4px 0;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    width: 149px;
  }

  .text-box {
    bottom: 1px;
  }

  .long-text {
    width: 255px;
  }
</style>
