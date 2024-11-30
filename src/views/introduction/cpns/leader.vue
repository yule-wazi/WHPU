<template>
  <div class="leader">
    <template v-for="(item, index) in leaders" :key="index">
      <leader-list :leaders="item"/>
    </template>
  </div>
</template>

<script setup>
  import leaders from '@/assets/data/leaders';
  import leaderList from '@/components/leaderList.vue';
</script>

<style scoped>
  
</style>