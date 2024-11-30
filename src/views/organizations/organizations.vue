<template>
  <div class="organizations">
    <div class="navg">
      <van-tabs v-model:active="active" 
      line-height="0"
      title-inactive-color="#fff"
      title-active-color="#21BED5"
      >
        <van-tab v-for="(item, index) in major" :title="item.name">
          <div class="title">{{ item.name }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="enter">
            <a :href="item.url" target="_blank">——学院官网</a>
          </div>
        </van-tab>
      </van-tabs>
      
      <div class="control">
        <div class="left">
          <van-icon name="arrow-double-left" @click="btnClick(0)"/>
        </div>
        <div class="right">
          <van-icon name="arrow-double-right" @click="btnClick(1)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import major from '@/assets/data/major';
 const active = ref(0)

//  按钮点击
function btnClick(judge) {
  console.log(active.value)
  if(judge) {
    active.value++
  } else {
    const length = major.length
    console.log(length)
    active.value = (active.value + length - 1) % length
  }
}
</script>

<style lang="less" scoped>
  .organizations {
    height: 100vh;
    background-color: #000d2a;
    background-image: url('https://www.whpu.edu.cn/img/bg4.png');
    background-size: cover;
    overflow: hidden;
    .navg {
      padding: 0px 200px;
      .title {
        @keyframes move {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0);  opacity: 1;}
        }
        height: 100%;
        width: 100%;
        font-size: 50px;
        font-weight: 700;
        color: #fff;
        margin: 250px 0px 40px;

        animation: move .3s forwards ease-in;
      }
      .desc {
        @keyframes move {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0);  opacity: 1;}
        }
        font-size: 20px;
        color: #fff;
        line-height: 40px;
        text-align: justify;
        animation: move .5s forwards ease-in;
      }
      .enter {
        @keyframes moveEnter {
          0% { transform: translateX(-100px); opacity: 0; }
          50% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0);  opacity: 1;}
        }
        animation: moveEnter .7s forwards ease-in;
        height: 40px;
        width: 120px;
        margin-top: 20px;
        a {
          transition: all .3s;
          display: block;
          height: 100%;
          width: 100%;
          text-align: center;
          align-content: center;
          color: #fff;
          font-size: 20px;

          &:hover {
            color: var(--primary-color);
          }
        }
      }
      :deep(.van-tabs__wrap) {
        position: fixed;
        left: 0;
        right: 0;
        top: initial;
        bottom: 0;
        z-index: 9;
        height: 200px;
        background-image: none;
        
      }
      :deep(.van-tabs__nav--line) {
        height: 100px;
        margin: 40px 250px 20px 250px;
        background-color: #0000;
      }
      :deep(.van-tab) {
        font-size: 20px;
        width: 280px;
        border-radius: 10px;
        margin: 0px 20px;
        border: 2px solid #ffffff44;
        background-color: #7a7a7a82;
        background-image: linear-gradient(140deg, #ffffff00 40%, rgba(255, 255, 255, 0.407) 100%);
      }
      :deep(.van-tab--active) {
        background-image: linear-gradient(140deg, #000000 0%, rgba(255, 255, 255, 0) 90%);
        border: 2px solid var(--primary-color);
      }
      
      .control {
        :deep(.van-badge__wrapper) {
          height: 100px;
          width: 100px;
          text-align: center;
          align-content: center;
          cursor: pointer;
          transition: .5s all;
        }
        .left {
          position: fixed;
          font-size: 60px;
          right: 85%;
          bottom: 60px;
          color: var(--primary-color);
          z-index: 10;          
          :hover {
            width: 130px;
          }
        }
        .right {
          position: fixed;
          font-size: 60px;
          left: 85%;
          bottom: 60px;
          color: var(--primary-color);
          z-index: 10;
          :hover {
            width: 130px;
          }
        }
      }
    }
  }
</style>