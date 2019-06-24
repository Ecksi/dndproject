<template>
  <div class="skill">
    <input class="skill-proficient" type="checkbox">
    <input class="skill-modifier" type="number" placeholder="+0">
    <div class="skill-name">
      <slot></slot>
      <div class="skill-name-stat">
        <slot name="attr"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Skill'
  }
</script>

<style lang="less" scoped>
  .skill {
    width: 175px;
  }

  .skill-proficient {
    appearance: none;
    border: 1px solid black;
    border-radius: 50%;
    height: 10px;
    vertical-align: sub;
    width: 10px;

    &:checked {
      background-color: #333;
    }
  }

  .skill-modifier {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    font-size: 1.2rem;
    margin-left: 3px;
    margin-right: 7px;
    text-align: center;
    width: 30px;
  }

  .skill-name, .skill-name-stat {
    display: inline;
    letter-spacing: 0.2px;
  }

  .skill-name-stat {
    color: #999;
  }
</style>
