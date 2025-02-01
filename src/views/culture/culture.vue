<template>
  <div class="culture">
    <div class="content" @mousemove="mouseArea"> 
      <div ref="bgElement" class="banner" :style="styleObject">
        <div class="bg">
        <img src="@/assets/img/culture02.png" alt="">
        </div>
        <div class="title" >
          <div class="up">WELCOME TO</div>
          <div class="down"> WHPU</div>
        </div>
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
        <div class="indicator" ref="idct" >
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
import { computed, reactive, ref } from 'vue';
import { mouseFollow, throttle } from '@/utils/mouseFollow';

const data = cultureData
const idct = ref()// 拿到indicator元素
const des = ref()//拿到desc元素
// 轮播图监听
function onChange(index) {
// console.log(idct.value)
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

// 获取dom
const bgElement = ref(null)
// 初始化元素偏移量
const elementBgPos = reactive({
  pX: 0,
  pY: 0,
  rX: 0,
  rY: 0
})
// 鼠标跟踪
const mouseArea = (event) => {
  // 节流
  const throt = throttle(mouseFollow, 50) 
  throt(event, bgElement, elementBgPos)
  console.log(elementBgPos.pX)
}

// 设置元素样式
const styleObject = computed(() => ({
  transform:`perspective(2000px) translate(${elementBgPos.pX}px, ${elementBgPos.pY }px) rotateX(${elementBgPos.rX}deg) rotateY(${elementBgPos.rY}deg)`
}))

</script>

<style lang="less" scoped>
  .culture {
    height: 100vh;
    z-index: 100;
    background-image: url('@/assets/img/culture_bg.png');
    background-size: cover;
    transform-style: preserve-3d;
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

      .banner {
        position: relative;
        transform-style:preserve-3d;
        transform: translateZ(200px);
        @keyframes allBannerMove {
          0% {transform: translateX(1500px);}
          100% {transform: translateX(0);}
        }

        :deep( .my-swipe) {
          position: absolute;
          top: 32vh;
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
        .bg {
          position: fixed;
          transform: translateZ(-200px);
          top: -50px;
          left: 180px;
          width: 1000px;
            // 动画
          @keyframes bgMove {
            0% {transform:translate3d(-100%,0,-200px)}
            20% {transform:translate3d(15%,0,0-200px)}
            40% {transform:translate3d(-10%,0,-200px)}
            60% {transform:translate3d(5%,0,-200px)}
            80% {transform:translate3d(-2%,0,-200px)}
            100% {transform:translate3d(0%,0,-200px)}

          }
          animation: bgMove .7s ease-out;

            img {
            width: 100%;
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
        .title {
            position: absolute;
            transform: translateZ(-80px);
            top: 160px;
            right: 400px;
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
        .control {
          .last {
            position: absolute;
            height: 26vh;
            width: 4vw;
            background-color: #11ae7c;
            top: 45vh;
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
            height: 26vh;
            width: 4vw;
            top: 45vh;
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
          position: absolute;
          transform: translateZ(50px);
          display: flex;
          top: 700px;
          left: 380px;
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
          transform: translateZ(100px);
          font-size: 40px;
          font-weight: 1000;
          color: #AEAEAE;
          top: 82vh;
          left: 600px;
          animation: allBannerMove var(--animation-time) .7s ease-in backwards;
        }
      }
      

    }
  }
</style>