<template>
  <div class="regulations">
    <div class="title">学校章程</div>
    <div class="name">武汉轻工大学章程</div>
    <div class="preface">
      <div class="tit">序言</div>
      <div class="text">
        {{ regulations.preface }}
      </div>
    </div>
    <div class="general">
      <div class="tit">总则</div>
      <div class="content">
        <template v-for="(item, index) in regulations.general" :key="index">
          <div class="text">
            <div class="item"><strong>第{{ index + 1 }}条 </strong>{{ item }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
  import regulations from '@/assets/data/regulations';
  console.log(regulations)
</script>

<style lang="less" scoped>
  .regulations {
  .title {
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 80px;
  }
  .name {
  font-size: 20px;
  text-align: center;
  height: 100px;
  line-height: 100px;
  margin-bottom: 40px;
  } 
  .preface {
    .tit {
      text-align: center;
      font-size: 20px;
      height: 50px;
      line-height: 50px;
    }
    .text {
      font-weight: 400;
      font-size: 16px;
      text-indent: 2em;
      text-align: justify;
      line-height: 40px;
    }
  }
  .general {
    .tit {
      text-align: center;
      font-size: 20px;
      height: 50px;
      line-height: 50px;
    }
    .content {
      .text {
        padding: 10px 0px;
        text-indent: 2em;
        font-size: 16px;
        font-weight: 400;
      } 
    }
  }
}
</style>