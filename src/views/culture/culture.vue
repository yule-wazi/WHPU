<template>
  <div class="culture">
    <div class="content">
      <div class="bg">
        <img src="@/assets/img/culture02.png" alt="">
        <i>
          <div class="up">WELCOME TO</div>
          <div class="down"> WHPU</div>
        </i>
      </div>
      <div class="banner">
        <van-swipe class="my-swipe" 
        :autoplay="5000" 
        indicator-color="white" 
        @change="onChange"
        :show-indicators="false"
        ref="banner"
        >
          <template v-for="(item, index) in data.imgs" :key="index">
            <van-swipe-item><img :src="item.url" alt=""></van-swipe-item>
           </template>
        </van-swipe>
        <div class="control">
          <div class="last" @click="btnClick(0)"></div>
          <div class="next" @click="btnClick(1)"></div>
        </div>
        <div class="indicator" ref="idct">
          <div class="index">0{{ indicator.index }}</div>
          <div class="total">/0{{ indicator.total }}</div>
        </div>
        <div class="desc" ref="des">
          {{data.imgs[indicator.index - 1].desc}}   
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cultureData from '@/assets/data/culture';
import { reactive, ref } from 'vue';

  const data = cultureData
  const idct = ref()// 拿到indicator元素
  const des = ref()//拿到desc元素
// 轮播图监听
  function onChange(index) {
    console.log(idct.value)
    idct.value.style.transition = '.1s'
    des.value.style.transition = '.1s'
    idct.value.style.opacity = 0
    des.value.style.opacity = 0


    setTimeout(() => {
      idct.value.style.opacity = 1
      des.value.style.opacity = 1
      indicator.index = index + 1

    },100)
  }
  const indicator = reactive({
    index: '1',
    total: `${data.imgs.length}`
  })

// 按钮监听
  const banner = ref()//先绑定banner组件
  function btnClick(count) {
    if(count) {
      banner.value.next()
    } else {
      banner.value.prev()
    }
  }



</script>

<style lang="less" scoped>
  .culture {
    height: 100vh;
    background-image: url('@/assets/img/culture_bg.png');
    background-size: cover;
    .content {
      @keyframes bannerMove {
        0% { background-position-x: left;}
        100% { background-position-x: right;}
      }
      animation: bannerMove 6s linear infinite ;
      position: relative;
      height: 100%;
      background-color: #02093ba2;
      background-image: url('@/assets/img/culture_banner.png');
      background-repeat: no-repeat;
      background-size: 140% 70%;
      background-position: 0 180px;

      .bg {
        position: fixed;
        top: -110px;
        left: 180px;
        width: 1000px;
          // 动画
        @keyframes bgMove {
          0% {transform: translateX(-100%);}
          20% {transform: translateX(15%);}
          40% {transform: translateX(-10%);}
          60% {transform: translateX(5%);}
          80% {transform: translateX(-2%);}
          100% {transform: translateX(0%);}
        }
        animation: bgMove .7s ease-out;

          img {
          width: 100%;
        }
        i {
          position: absolute;
          top: 200px;
          right: -110px;
          text-align: justify;
          .up {
            font-size: 50px;
            color: #fff;
            font-weight: 1000
          }
          .down {
            position: absolute;
            top: 60px;
            right: -100px;
            font-size: 60px;
            color: var(--primary-color);
            font-weight: 1000;
          }
        }
        @keyframes  tapeRotate{
          0% {transform: rotate(0);}
          100% {transform: rotate(-360deg);}
        }
        &::before {
          content: "";
          position: absolute;
          top: 420px;
          left: 233px;
          background-image: url('@/assets/img/culture01.png');
          background-repeat: no-repeat;
          background-position: 0 100%;
          background-size: 100% auto;
          height: 130px;
          width: 130px;
          animation: tapeRotate 6s linear infinite;
          filter: blur(1px);
        }
        &::after {
          content: "";
          position: absolute;
          top: 420px;
          right: 233px;
          background-image: url('@/assets/img/culture01.png');
          background-repeat: no-repeat;
          background-position: 0 100%;
          background-size: 100% auto;
          height: 130px;
          width: 130px;
          animation: tapeRotate 6s linear infinite;
          filter: blur(1px);
        }
      }  

      .banner {
        @keyframes allBannerMove {
          0% {transform: translateX(1500px);}
          100% {transform: translateX(0);}
        }

        :deep( .my-swipe) {
          position: absolute;
          top: 25vh;
          right: 13.5vw;
          width: 50vw;
          height: 55vh;
          background-color: #11ae7c;
          border: 10px #585858 solid;
          cursor:auto;
          animation: allBannerMove var(--animation-time) .7s ease-in backwards;
        }
        :deep(.van-swipe-item) {
          img {
            height: 100%;
            width: 100%;
          }
        }

        .control {
          .last {
            position: absolute;
            height: 25vh;
            width: 4vw;
            background-color: #11ae7c;
            top: 40vh;
            left: 30vw;
            background-image: url('@/assets/img/culture_left.png');
            background-size: 200% auto;
            background-position: 0 100%;
            &:hover {
              background-position: 100% 100%;
            }
          }
          .next {
            position: absolute;
            height: 25vh;
            width: 4vw;
            top: 40vh;
            right: 8vw;
            background-color: #11ae7c;
            background-image: url('@/assets/img/culture_right.png');
            background-size: 200% auto;
            background-position: 0 100%;
            &:hover {
              background-position: 100% 100%;
            }
          }
          animation: allBannerMove var(--animation-time) .7s ease-in backwards;
        }
        .indicator {
          position: fixed;
          display: flex;
          bottom: 130px;
          left: 300px;
          font-size: 80px;
          font-weight: 1000;
          font-family:'Courier New', Courier, monospace;
          color: var(--primary-color);
          .total {
            color: #AEAEAE;
          }
          animation: allBannerMove var(--animation-time) .7s ease-in backwards;
        }
        .desc {
          position: fixed;
          font-size: 40px;
          font-weight: 1000;
          color: #AEAEAE;
          bottom: 145px;
          left: 600px;
          animation: allBannerMove var(--animation-time) .7s ease-in backwards;
        }
      }
      

    }
  }
</style>