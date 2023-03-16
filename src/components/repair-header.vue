<template>
  <div class="repair-header">
    <ul class="banner">
      <li  class="banner-item" v-for="(item, index) in menuList" :key="index" v-show="index === currentIndex">
        <img :src="item.img" alt="">
        <div>{{ item.name }}</div>
      </li>
    </ul>
    <div class="repair-nav">
      <el-menu :default-active="defaultPath" :ellipsis="false" class="box" mode="horizontal" background-color="#2041b0"
               text-color="#fff" active-text-color="#000" router>
        <template v-for="(menu, index) in menuList" :key="index">
          <el-menu-item :index="menu.path" :route="menu.path">{{ menu.name }}</el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import oneJpg from '../assets/images/1.jpg'
import twoJpg from '../assets/images/2.jpg'
import threeJpg from '../assets/images/3.jpg'
import fourJpg from '../assets/images/4.jpg'
import fiveJpg from '../assets/images/5.jpg'
import {computed, watch, ref} from "vue";
import {useRouter, useRoute} from "vue-router";
import * as buffer from "buffer";

const route = useRoute();

type MenuType = {
  name: string,
  path: string,
  img: string
}

const menuList = ref<MenuType[]>([
  {
    name: '维修维护（巡检）说明',
    path: '/description',
    img:oneJpg
  },
  {
    name: '维修维护（巡检）流程',
    path: '/process',
    img:twoJpg
  },
  {
    name: '维修',
    path: '/mend',
    img:threeJpg
  },
  {
    name: '维护',
    path: '/protect',
    img:fourJpg
  },
  {
    name: '维修维护（巡检）单位',
    path: '/department',
    img:fiveJpg
  },
  {
    name: '查询统计',
    path: '/queryStatistics',
    img:fiveJpg
  }
]);

const currentIndex = computed(() =>{
  return menuList.value.findIndex(menu =>{
    return route.path.includes(menu.path)
  })
})

const defaultPath = computed(() => {
  return '/'+ route.path.split('/')[1]
})
</script>

<style lang="scss">
.repair-header {
  height: 240px;
  position: relative;

  .banner {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    position: relative;
    li {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
      position: absolute;
      div{
        position: absolute;
        color: #fff;
        top: 30%;
        left: 40px;
        font-size: 40px;
        font-weight: 700;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

  }


  .repair-nav {
    position: absolute;
    height: 40px;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background-color: #2041b0;
  }
}

.el-menu {
  height: 40px;
  border-bottom: none !important;
}

.is-active {
  background-color: #fff !important;
  border-bottom: 2px solid #125ef6 !important;
}
</style>