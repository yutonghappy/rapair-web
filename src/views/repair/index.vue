<template>
  <div class="container scrollbar-mac">
    <div class="container-banner">
      <repair-header/>
      <el-card class="main">
          <router-view/>
      </el-card>
    </div>
  </div>
</template>
<script setup>

import RepairHeader from '@/components/repair-header.vue'
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  overflow: auto;
  .container-banner{
    width: 1220px;
    margin: 0 auto;
    height: 100%;
  }
  .main{
    border-radius: 0;
    min-height: calc(100% - 240px);
  }
}
</style>