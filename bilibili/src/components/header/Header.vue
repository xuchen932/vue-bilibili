<template>
    <div class="header">
      <!-- nav-top 开始 -->
      <app-navmenu></app-navmenu>
      <!-- nav-top 结束 -->
      <!-- 搜索、logo 开始 -->
      <app-headbanner></app-headbanner>
      <!-- 搜索、logo 结束 -->
      <!-- 分类导航 开始 -->
      <app-bilinav></app-bilinav>
      <!-- 分类导航 结束 -->

    </div>
</template>
<script>
import navmenu from '../navmenu/Navmenu'
import headbanner from "../headbanner/Headbanner"
import bilinav from "../bilinav/Bilinav"



export default {
    name:'App',
    components:{
        'app-navmenu':navmenu,
        'app-headbanner':headbanner,
        'app-bilinav':bilinav
    }
}
</script>
<style>
    
</style>