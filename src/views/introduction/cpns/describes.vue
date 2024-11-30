<template>
  <div class="describes">
    <div class="title">学校简介</div>
    <div class="text">
      <template v-for="(item, index) in text" :key="index">
        <p>{{ item }}</p>
      </template>
    </div>

  </div>
</template>

<script setup>
  import text from '@/assets/data/desc.js'
  console.log(text)
</script>

<style scoped>
  .describes {
    .title {
      font-size: 35px;
      font-weight: 400;
      margin-bottom: 100px;
    }
    .text {
      font-weight: 400;
      font-size: 20px;
      text-indent: 2em;
    }
  }
</style>