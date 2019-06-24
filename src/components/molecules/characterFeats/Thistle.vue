<template>
  <div class="feats">
    <section class="otter">
      Racial Feats
      <div class="feat-box">
        <Feat>
          title here
          <template v-slot:feat_description>description here</template>
        </Feat>
        <Feat>
          title here
          <template v-slot:feat_description>description here</template>
        </Feat>
      </div>
    </section>
    <section class="otter">
      Character Feats
      <div class="feat-box">
        <Feat>
          title here
          <template v-slot:feat_description>description here</template>
        </Feat>
      </div>
    </section>
  </div>
</template>

<script>
  import Feat from '@/components/atoms/Feat';

  export default {
    name: 'Thistle',
    components: {
      Feat
    }
  }
</script>

<style lang="less" scoped>
  .feats {
    display: flex;
    justify-content: center;

    .otter {
      font-size: 2.4rem;
      text-align: center;
      width: 400px;
    }

    & .otter:last-child {
      border-left: 1px solid black;
    }
  }

  .feat-box {
    border-top: 1px solid black;
    margin-top: 5px;
    padding-top: 15px;
  }
</style>
