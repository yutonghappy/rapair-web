<template>
  <div class="nav-content">
    <el-menu :default-active="defaultPath" mode="horizontal" :ellipsis="false" router>
      <template v-for="(item, index) in list" :key="index">
        <el-menu-item :index="item.path" :route="item.path">{{ item.title }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>

import {computed, ref} from "vue";
import { useRoute } from "vue-router";


import type { PropType} from "vue";

type ListType = {
  title: string,
  path: string
}

const props = defineProps({
  list: {
    type: Array as PropType<ListType[]>,
  }
})
const route = useRoute();
const defaultPath = computed(() => {
  const curMenu = props.list?.find(menu => {
    return menu.path === route.path
  })
  return curMenu?.path || ''
})

</script>

<style lang="scss" scoped>
.nav-content {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--el-card-border-color);
  margin-bottom: 20px;
}
</style>