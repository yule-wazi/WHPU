<template>
  <div class="leaderList">
    <div class="title">
      <div class="post">{{ leaders.post }}</div>
      <div class="name">{{ leaders.name }}</div>
    </div>
    <div class="desc">{{ leaders.desc }}</div>
  </div>
</template>

<script setup>
  defineProps({
    leaders: {
      type: Object,
      default: {}
    }
  })
</script>

<style lang="less" scoped>
  .leaderList {
    margin: 30px auto;
    border-bottom: 1px #999 solid;
    .title {
      display: flex;
      flex-wrap: wrap;
      .post {
        padding: 5px 30px;
        border-right: 1px solid #999;
        color: #0B558A;
        border-left: 5px solid var(--primary-color);
      }
      .name {
        padding: 5px 20px;
        font-weight: 400;
      }
    }
    .desc {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      margin: 20px 0px 40px 25px;
      line-height: 32px;
    }
  }
</style>