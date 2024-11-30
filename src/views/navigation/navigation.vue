<template>
  <div class="navigation">
    <img src="@/assets/img/logo.png" alt="">
    <div class="nav">
      <van-tabs v-model:active="active" 

      background="#0000" 
      title-inactive-color="#fff"
      title-active-color="#7CECFC"
      line-width="100px"
      >
        <van-tab title="首页" to="/home"><RouterView /></van-tab>
        <van-tab title="资讯" to="/news"><RouterView /></van-tab>
        <van-tab title="院系" to="/org"><RouterView /></van-tab>
        <van-tab title="概况" to="/intro"><RouterView /></van-tab>
        <van-tab title="校园映像" to="/culture"><RouterView /></van-tab>
      </van-tabs>
    </div>
    <div class="author">By 尤乐娃子</div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { RouterView } from 'vue-router';
  const active = ref(0)
  
</script>

<style lang="less" scoped>
  .navigation {
    overflow: hidden;
    img {
      position: fixed;
      left: 20px;
      top: 20px;
      width: 400px;
      z-index: 10;
    }
    :deep(.van-tabs__wrap) {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;
      height: 100px;
      background-image: linear-gradient(180deg, #000000ce 0%, rgba(255, 255, 255, 0) 90%);
    }
    :deep(.van-tabs__nav--line) {
      height: 50px;
      margin: 20px 250px 20px 550px;
    }
    .author {
      position: fixed;
      z-index: 9;
      right: 10px;
      bottom: 10px;
      font-size: 15px;
      color: #fff;
      font-weight: 700;
    }
    --van-tab-font-size:18px
  }
</style>