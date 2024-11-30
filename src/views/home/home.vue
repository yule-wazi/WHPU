<template>
  <div class="home">
    <div class="bg">
      <video src="@/assets/video/whpu.mp4" autoplay="" :muted="isMute" loop="" class="background-video" style="object-fit: cover;z-index: -1;height: 100vh;"></video>
    </div>
    <div class="mute" @click="changeMute" :class="{muteActive: isMute}"></div>
    <div class="enter">
      <a href="https://www.whpu.edu.cn/" target="_blank">学校官网</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 设置静音
  const isMute = ref(true)
  function changeMute() {
    isMute.value = !isMute.value
  }
</script>

<style lang="less" scoped>
  .home {
    position: relative; 
    height: 100vh;
    width: 100vh;
    .bg {
      position: absolute;
      left: 0;
      top: 0;
    }
    .mute {
      position: fixed;
      top: 30px;
      right: 150px;
      z-index: 10;
      height: 35px;
      width: 35px;
      background-image: url('@/assets/img/music_logo.png');
      background-size: cover;
      cursor: pointer;
    }
    .muteActive {
      background-image: url('@/assets/img/!music_logo.png');
    }
    .enter {
      position: fixed;
      right: 40px;
      top: 30px;
      z-index: 10;
      width: 80px;
      height: 30px;
      border: #fff 2px solid;
      border-radius: 15px;
      a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 30px;
        text-align: center;
        font-size: 13px;
        color: #fff;
        font-weight: 700;
      }
    }
    .enter:hover {  
        border: var(--primary-color) 2px solid;
        a {
          color: var(--primary-color);  
        }
      }
  }
</style>