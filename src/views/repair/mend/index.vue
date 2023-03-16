<template>
  <mend-nav :list="subMenuList"/>
  <div class="content">
    <router-view/>
  </div>
</template>


<script lang="ts" setup>
import MendNav from '../components/sub-nav.vue'
import {ref} from "vue";


const subMenuList = ref<{ title: string, path: string }[]>([
  {
    title: '我的申请',
    path: '/mend/apply',
  },
  {
    title: '待办事宜',
    path: '/mend/pending'
  },
  {
    title: '已办事宜',
    path: '/mend/done',
  },
  {
    title: '办结事宜',
    path: '/mend/completed'
  }
]);


</script>
<style lang="scss" scoped>

</style>
