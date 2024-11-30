<template>
  <div class="news">
    <div class="news-box">
      <div class="title">
        <div class="left">综合新闻</div>
        <div class="right">NEWS</div>
      </div>
      <div class="more">
        <a href="https://www.whpu.edu.cn/xwzx/zhxw/zhxw.htm" target="_blank">
          <div class="text">查看更多</div>
          <van-icon name="arrow" />
        </a>
      </div>
      <div class="content">
        <div class="left">
          <van-tabs v-model:active="active" animated
          title-active-color="#7CECFC"
          title-inactive-color="#fff"
          color="#7CECFC"
          >
            <van-tab v-for="(item, index) in news" :title="item.title">
              <news-data :newsData="item.content"/>
            </van-tab>
          </van-tabs>
        </div>
        <div class="right">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in newsImg" :key="index">
              <van-swipe-item><img :src="item" alt=""></van-swipe-item>
            </template>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import newsData from '@/components/newsData.vue';
import news from '@/assets/data/news';
import newsImg from '@/assets/data/newsBannerImg';
  const active = ref(0)
</script>

<style lang="less" scoped>
  .news {
    height: 100vh;
    background-color: #000832;
    background-image: url('https://www.whpu.edu.cn/img/bg2.png');
    background-size: cover;
    .news-box {
      position: relative;
      left: 50%;
      top: 20%;
      transform: translate(-50%, -50%);
      width: 80vw;
      height: 50px;
      .title {
        display: flex;
        height: 100%;
        width: 100%;
        align-content: center;
        color: #fff;
        padding-bottom: 15px;
        border-bottom: 3px #fff solid;
        .left {
          height: 100%;
          width: 150px;
          text-align: center;
          align-content: center;
          font-size: 28px;
          border-right: 3px #fff solid;
        }
        .right {
          height: 100%;
          font-size: 20px;
          margin-top: 20px;
          margin-left: 10px;
          margin: 20px 0px 0px 20px;
        }
      }
      .more {
        position: fixed;
        right: 0;
        top: 35px;
        a {
          display: flex;
          font-size: 18px;
          color: #fff;
          .text {
            margin-top: -3px;
          }
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .content {
        display: flex;
        position: relative;
        height: 100%;
        width: 100%;
        .left {
          :deep(.van-tabs__wrap) {
              position: absolute;
              left: 0;
              top: 10px;
              width: 400px;
              z-index: 0;
              height: 600px;
              background-image: none;
              
            }
          :deep(.van-tabs__nav--line) {
            height: 40px;
            width:300px;
            margin: 0px;
            background-color: #0000;
          }
          :deep(.van-tab) {
            width: 100%;
            height: 100%;
            font-size: 15px; 
          }
          :deep(.van-tabs__content) {
            position: absolute;
            top: 60px;
            left: 0px;
            width: 35vw;
            height: 55vh;
          }
          :deep(.van-tab__panel) {
            height: 100%;
          }
        }
        .right {
          :deep( .my-swipe) {
            position: absolute;
            top: 60px;
            right: 0px;
            width: 45vw;
            height: 55vh;
            // background-color: #ae111168;
            cursor:auto;
          }
          :deep(.van-swipe-item) {
            img {
              height: 100%;
              width: 100%;

            }
          }

        }
      }
    }
  }
</style>