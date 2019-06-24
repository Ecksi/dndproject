<template>
  <div class="header">
    <section class="header-logo">
      <router-link to="/">
        <img src="../../../public/assets/dnd-header.png" alt="d&amp;d logo">
      </router-link>
    </section>
    <section class="header-links">
      <router-link to="/players">The Crew</router-link>
      <span class="spacer">&#9672;</span>
      <router-link to="/feats">Your Feats</router-link>
      <span class="spacer">&#9672;</span>
      <router-link to="/learn">Quick Reference</router-link>
      <span class="spacer">&#9672;</span>
      <router-link to="/resources">Resources</router-link>
      <span class="spacer">&#9672;</span>
      <router-link to="/contact">Contact</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.header-logo {
  padding-left: 15px;
  padding-top: 15px;
}

.header-links {
  line-height: 106px;
  padding-right: 40px;

  a {
    color: maroon;
    font-size: 2rem;
    text-decoration: none;
  }

  .spacer {
    color: cornflowerblue;
    font-size: 2.5rem;
    padding: 0 15px;
    vertical-align: sub;
  }
}
</style>
