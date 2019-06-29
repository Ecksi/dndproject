<template>
  <div class="header">
    <section class="header-logo">
      <router-link to="/">
        <img src="../../../public/assets/dnd-header.png" alt="d&amp;d logo">
      </router-link>
    </section>
    <section class="header-links">
      <div class="desktop">
        <router-link to="/players">The Crew</router-link>
        <span class="spacer">&#9672;</span>
        <router-link to="/feats">Your Feats</router-link>
        <span class="spacer">&#9672;</span>
        <router-link to="/spells">Your Spells</router-link>
        <span class="spacer">&#9672;</span>
        <router-link to="/learn">Quick Reference</router-link>
        <span class="spacer">&#9672;</span>
        <router-link to="/resources">Resources</router-link>
        <span class="spacer">&#9672;</span>
        <router-link to="/contact">Contact</router-link>
      </div>
      <nav class="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <router-link to="/players"><li>The Crew</li></router-link>
            <router-link to="/feats"><li>Your Feats</li></router-link>
            <router-link to="/spells"><li>Your Spells</li></router-link>
            <router-link to="/learn"><li>Quick Reference</li></router-link>
            <router-link to="/resources"><li>Resources</li></router-link>
            <router-link to="/contact"><li>Contact</li></router-link>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="less" scoped>
.navigation {
  display: none;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header-logo {
  padding-left: 15px;
  padding-top: 15px;
}

.header-links {
  margin-top: 50px;
  padding-right: 40px;
  text-align: right;

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

@media only screen and (max-width : 420px) {
  .header {
    height: 125px;
  }

  .header-links {
    margin-top: 1px;
    text-align: left;
  }

  .desktop {
    display: none;
  }

  a {
    transition: color 0.3s ease;
  }

  .navigation {
    display: inline-block;
  }

  #menuToggle {
    display: block;
    position: relative;
    top: 30px;
    left: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #menuToggle span{
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    margin-right: 25px;
    position: relative;
    background: #000;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -220px;
    padding: 20px;
    padding-top: 100px;
    background: #fff;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  #menu li {
    font-size: 2rem;
    height: 20px;
    padding-bottom: 20px;

    :last-child {
      padding-bottom: 0;
    }
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  }
}
</style>
