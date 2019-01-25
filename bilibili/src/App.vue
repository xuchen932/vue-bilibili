<template>
  <div id="app">
    <a href="#top" id="top"></a>
    <!-- header开始 -->
    <app-header></app-header>
    <!-- header结束 -->
    
    <!-- biliwrapper开始 -->
    <app-biliwrapper></app-biliwrapper>
    <!-- biliwrapper结束 -->

    <!-- 右侧升降机 开始 -->
    <app-elevator></app-elevator>
    <!-- 右侧升降机 结束 -->

    <!-- 底部footer 开始-->
    <app-footer></app-footer>
    <!-- 底部footer 结束-->

  </div>
</template>

<script>


import header from "./components/header/Header"
import biliwrapper from "./components/biliwrapper/Biliwrapper"
import elevator from "./components/elevator/Elevator"
import footer from "./components/footer/Footer"

export default {
  name:'App',
  components:{
    'app-header':header,
    'app-biliwrapper':biliwrapper,
    'app-elevator':elevator,
    'app-footer':footer
  },
  data(){
    return{
      
    }
  },
  
}
</script>

<style>


  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  .clearfix{
    zoom: 1;
  }
  .clearfix::before,
  .clearfix::after{
    content: "";
    display: table;
  }
  .clearfix::after{
    clear: both;
    overflow: hidden;
  }
  body{
        font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
  }
  .icon{
    display: inline-block;
    background-image: url(http://static.hdslb.com/images/base/icons.png)
  }


  .spread-module {
    position: relative;
    width: 160px;
    height: 148px;
    font-size: 12px;
    overflow: hidden;
  }
  .spread-module .pic {
    position: relative;
    width: 160px;
    height: 100px;
    display: block;
    overflow: hidden;
    text-align: center;
    border-radius: 4px;
  }
  .spread-module .pic img{
    width: 160px;
    height: 100px;
  }
  .spread-module .pic .mask-video {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    transition: opacity .3s;
  }
  .spread-module .pic .dur {
    opacity: 0;
    position: absolute;
    bottom: 2px;
    left: 6px;
    color: #fff;
    height: 12px;
    line-height: 12px;
    padding: 0 5px 1px 0;
    transition: all .3s;
  }
  .spread-module .num i{
    display: inline-block;
    width: 12px;
    height: 12px;
    vertical-align: top;
    margin-right: 5px;
  }
  .spread-module .num{
    position: absolute;
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: #99a2aa;
    background-color: #fff;
    font-size: 0;
    transition: all .3s;
    bottom: 0;
  }
  .spread-module .num span{
    height: 14px;
    line-height: 12px;
    overflow: hidden;
    width: 50%;
    display: inline-block;
    font-size: 12px;
    vertical-align: bottom;
  }
  .spread-module .num span .icon{
    background-position: -282px -90px;
  }
  .spread-module .num .danmu .icon{
    background-position: -282px -218px;
  }



  
  .watch-later-trigger{
      display: none;
      width: 22px;
      height: 22px;
      position: absolute;
      right: 6px;
      bottom: 4px;
      cursor: pointer;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABT0lEQVQ4je3VMYrCQBTG8b/DWASLNKJgJ1hY2sloZeF2gkeYW+wZvIVXsLBJY5UdtLJLk17EIghCwChukWRxFzSaaLdfMwm8/EgemTclgOl02gEmwAAoky8RsAA+tdbrUoJ+AVZO8G9CoCeJ39Sq1+sopbBtO5e23+8xxrDdbi1gIog/vxAKYNs2Sqn0diBIenoP9X2fIAgyccv66WZZZBXvdjtc18UYkwlfJxM+n8+/1pfBefMPPw4LEZcEQcBqteJ0Or0GrlartFotLpcLnucxm83YbDbFYSEE/X6f4XBIpVLhcDjgOA6u63I8HvPDaRqNBuPxmHa7DcS7cT6f36yXj8IAUkq63S7NZpPlcomUtx9/Ck5Tq9UYjUZ3a976u0UQz9OiCcMwvYwk8XHyYYxBKXU9+p5Grybg4m1Hk9Bar4Ee4JC0JWeixOhprdffE/1yRW/TLMYAAAAASUVORK5CYII=)
  }







</style>