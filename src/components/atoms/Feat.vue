<template>
  <div class="oink">
    <div @click="toggle = !toggle" :class="{opened: toggle}" class="circle-plus closed">
      <div class="circle">
        <div class="horizontal"></div>
        <div class="vertical"></div>
      </div>
    </div>
    <section class="feat-text">
      <slot></slot>
    </section>
    <section :class="{hideText: !toggle}" class="feat-description textBlock">
      <slot name="feat_description"></slot>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Feat',
    data() {
    return {
      toggle: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .closed {
    .vertical {
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
    }
    .horizontal {
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
      opacity: 1;
    }
  }

  .opened {
    opacity: 1;
    .vertical {
      transition: all 0.5s ease-in-out;
      transform: rotate(90deg);
    }
    .horizontal {
      transition: all 0.5s ease-in-out;
      transform: rotate(90deg);
      opacity: 0;
    }
  }

  .circle-plus {
    cursor: pointer;
    display: inline-block;
    opacity: .7;
  }

  .circle-plus .circle {
      position: relative;
      width: 2rem;
      height: 3rem;
  }

  .circle-plus .circle .horizontal {
      position: absolute;
      background-color: green;
      width: 30px;
      height: 5px;
      margin-left: -15px;
      top: 50%;
      margin-top: -2.5px;
  }

  .circle-plus .circle .vertical {
      position: absolute;
      background-color: green;
      width: 5px;
      height: 30px;
      margin-left: -2.5px;
      top: 50%;
      margin-top: -15px;
  }

  .feat-text {
    display: inline-block;
    font-size: 2rem;
    padding: 0 10px 10px 10px;
    position: relative;
    bottom: 14px;
    vertical-align: sub;
  }

  .textBlock {
    opacity: 1;
    position: relative;
    transition: all 0.7s ease;
  }

  .hideText {
    display: none;
  }

  .feat-description {
    font-size: 1.8rem;
    margin-top: -25px;
    padding: 10px;
  }

  .oink {
    text-align: left;
    margin-left: 24px;
  }
</style>
