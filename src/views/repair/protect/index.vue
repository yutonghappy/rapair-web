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
    title: '实验室设备',
    path: '/protect/equipment'
  },
  {
    title: '实验室家具',
    path: '/protect/furniture',
  },
  {
    title: '实验室通风设施',
    path: '/protect/ventilation-equipment',
  },
]);


</script>
<style lang="scss" scoped>

</style>
