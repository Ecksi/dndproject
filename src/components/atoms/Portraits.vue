<template>
  <div>
    <h1 class="sub-header-text"><slot></slot></h1>
    <section class="char-portrait">
      <img class="image" @click="$emit('selectedChar', 'del')" src="../../../public/assets/del.png" alt="del">
      <img class="image" @click="$emit('selectedChar', 'gardein')" src="../../../public/assets/gardein.png" alt="gardein">
      <img class="image" @click="$emit('selectedChar', 'melonlord')" src="../../../public/assets/melonlord.png" alt="melonlord">
      <img class="image" @click="$emit('selectedChar', 'tantan')" src="../../../public/assets/tantan.png" alt="tantan">
      <img class="image" @click="$emit('selectedChar', 'thistle')" src="../../../public/assets/thistle.png" alt="thistle">
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portraits'
}
</script>

<style lang="less" scoped>
  .char-portrait {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;

    img:not(:last-child) {
      margin-right: 30px;
    }
  }

  .image {
    cursor: pointer;
  }
</style>
