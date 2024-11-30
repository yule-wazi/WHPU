<template>
  <div class="newsData">
    <template v-for="(item, index) in newsData" :key="index">
      <div class="content" >
        <div class="text">{{ item.text }}</div>
        <div class="time">{{ item.time }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
  defineProps({
    newsData: {
      type: Array,
      default: []
    }
  })
</script>

<style lang="less" scoped>
  .newsData {
    .content {
      position: relative;
      height: 9vh;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px #ffffff93 solid;
      font-size: 18px;
      text-align: justify;
      padding: 0 10px;
      cursor: pointer;
      &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 12;
          width: 0%;
          height: 5px;
          background-color: var(--primary-color);
          transition: all .4s;
        }
        &:hover::after {
          width: 100%;
        }
        &:first-child {
          border-top: 2px solid #fff;
        }
      .text {
        height: 50px;
        margin-top: 15px;
        width: 400px; /* 限制容器宽度 */
        display: -webkit-box; /* 设置为WebKit内核的弹性盒子模型 */
        -webkit-box-orient: vertical; /* 垂直排列 */
        -webkit-line-clamp: 2; /* 限制显示两行 */
        overflow: hidden; /* 隐藏超出范围的内容 */
        text-overflow: ellipsis; /* 使用省略号 */
        color: #fff;
        
      }
      .time {
        flex: 1;
        align-content: center;
        text-align: right;
        color: #bbb;
        font-size: 15px;
      }
    }
  }
</style>