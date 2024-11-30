<template>
  <div class="intro">
    <div class="content">
      <div class="left">
        <div class="title">学校概况</div>
        <div class="nav">
          <van-sidebar v-model="active">
            <van-sidebar-item title="学校简介" to="/intro/describes"/>
            <van-sidebar-item title="学校领导" to="/intro/leader"/>
            <van-sidebar-item title="学校章程" to="/intro/regulations"/>
          </van-sidebar>
        </div>
      </div>
      <div class="right">
        <div class="title">{{ text[active] }}</div>
        <div class="text"><router-view /></div>
      </div>
    </div>
    <div class="backTop">
      <van-back-top right="15px" :offset="400" bottom="60px " 
      style="background-color: var(--primary-color); width: 50px; height: 50px; border-radius: 10px;"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 图片url
  const images = [
    'https://www.whpu.edu.cn/img/ban_xxjj.jpg',
    'https://www.whpu.edu.cn/img/jgsz.jpg',
    'https://www.whpu.edu.cn/img/xkjs.jpg',
    'https://www.whpu.edu.cn/img/crpy.jpg',
    'https://www.whpu.edu.cn/img/kxyj.jpg',
  ]
//切换导航
  const active = ref(0)
  const text = ref([
    "学校简介",
    "学校领导",
    "学校章程"
  ])
</script>

<style lang="less" scoped>
  .intro {
    height: 100vh;
    background-image: url('@/assets/img/intro_bg.png');
    .content {
      display: flex;
      padding: 110px 120px;
      background-color: #43599b5d;
      font-size: 25px;
      font-weight: 700;
      color: var(--primary-color);
      .left {
        width: 200px;
        background-color: rgba(255,255,255, .08);
        height: 310px;
        border-radius: 50px 0 0 0;
        color: #fff;
        .title {
          width: 80%;
          padding: 40px 20px;
          height: 50px;
          line-height: 100px;
          border-bottom: 1px var(--primary-color) solid;
        }
        .nav {
          --van-sidebar-width: 100%;
          --van-sidebar-background:rgba(255, 255, 255, 0);
          --van-sidebar-text-color:#fff;
          --van-sidebar-font-size:18px;
          --van-sidebar-selected-border-height:100%;
          --van-sidebar-padding:20px 0px 20px 50px;
          --van-sidebar-selected-border-width:0;
        }
      }
      .right {
        flex: 1;
        padding: 0 60px;
        height: 810px;
        overflow: auto;
        background-color: rgba(255,255,255, .08);
        color: #fff;
        .title {
          width: 100%;
          padding: 40px 0;
          height: 50px;
          line-height: 100px;
          border-bottom: 1px var(--primary-color) solid;
        }
        .text {
          margin-top: 20px;
          text-align: justify;
        }
      }
    }
  }
</style>