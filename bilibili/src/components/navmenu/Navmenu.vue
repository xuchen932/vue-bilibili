<template>
    <div class="nav-menu">
        <div class="nav-bg"></div>
        <div class="nav-mask"></div>
        <!-- wrapper开始 -->
        <div class="nav-wrapper clearfix">
          <div class="nav-con fl">
            <ul>
              <li class="nav-item main">
                <a href="#" title="主站" class="t">
                  <i class="header-iconfont iconfont icon-bilibili"></i>
                  主站
                </a>
              </li>
              <li class="nav-item huahua">
                <a href="#" title="画友" class="t">画友</a>
              </li>
              <li class="nav-item audio">
                <a href="#" title="音频" class="t">音频</a>
              </li>
              <li class="nav-item game" @mouseover="gameShow" @mouseout="gameHide">
                <a href="#" title="游戏中心" class="t">游戏中心</a>
                <div class="gameshow" v-show="gameshow">
                    <iframe src="https://www.bilibili.com/page-proxy/game-nav.html" frameborder="0"  width="100%" height="100%"></iframe>
                </div>
              </li>
              <li class="nav-item live" @mouseover="liveShow" @mouseout="liveHide">
                <a href="#" title="直播" class="t">直播</a>
                <div class="liveshow" v-show="liveshow">
                  <iframe src="https://live.bilibili.com/blackboard/dropdown-menu.html" frameborder="0" width="100%" height="100%"></iframe>
                </div>
              </li>
              <li class="nav-item buy">
                <a href="#" title="会员购" class="t">会员购</a>
              </li>
              <li class="nav-item cartoon">
                <a href="#" title="漫画" class="t">漫画</a>
              </li>
              <li class="nav-item download" @mouseover="overShow" @mouseout="outHide">
                  <i class="icon-mobile iconfont"></i>
                  <a href="#" class="t">下载APP</a>
                  <div class="appshow" v-show="appshow">
                  </div>
              </li>
            </ul>
          </div>
          <div class="up-load">
            <a href="" class="u-link">投稿</a>
          </div>
          <div class="nav-con fr">
            <ul class="fr">
              <li class="nav-item profile-info">
                <a href="" class="t">
                  <div class="i-face">
                    <img src="http://i2.hdslb.com/bfs/face/c82685bb0f151a4fc4a6feea6fc9fa50e4cb56d9.jpg" alt="touxiang" class="face">
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a href="" class="t">大会员</a>
              </li>
              <li class="nav-item">
                <a href="" class="t">消息</a>
              </li>
              <li class="nav-item">
                <a href="" class="t">动态</a>
              </li>
              <li class="nav-item">
                <a href="" class="t">稍后再看</a>
              </li>
              <li class="nav-item">
                <a href="" class="t">收藏夹</a>
              </li>
              <li class="nav-item">
                <a href="" class="t">历史</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- wrapper结束 -->

    </div>
</template>
<script>
export default {
  data () {
    return {
      appshow:false,
      gameshow:false,
      liveshow:false,
    }
  },
  methods:{
    overShow(){
      this.appshow = true;
    },
    outHide(){
      this.appshow = false;
    },
    gameShow(){
      this.gameshow = true;
    },
    gameHide(){
      this.gameshow = false;
    },
    liveShow(){
      this.liveshow = true
    },
    liveHide(){
      this.liveshow = false
    }
    
  }
}
</script>
<style>

@import url(../../assets/css/icon/iconfont.css);

  .header{
    font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    position: relative;
    z-index: 10000;
    background: #fff;
  }
  .header .nav-menu{
    position: relative;
    z-index: 200;
    height: 42px;
    color: #222;
  }
  .header .nav-menu .nav-bg{
    background-image: url(http://i0.hdslb.com/bfs/archive/6c42c40ed54f4bb5ea491894aff693878afa6580.png);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center -10px;
    background-repeat: no-repeat;
    filter: blur(4px);
  }
  .header .nav-menu .nav-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 100%, 0.4);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1)
  }
  .header .nav-menu .nav-wrapper{
    margin: 0 auto;
    width: 1160px;
    min-width: 980px;
  }
  .header .nav-menu .nav-wrapper .nav-con{
    display: inline;
  }
  .header .nav-menu .nav-wrapper .fl{
    float: left;
  }
  .header .nav-menu .nav-wrapper .fr{
    float: right;
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item{
    float: left;
    text-align: center;
    line-height: 42px;
    height: 42px;
    position: relative;
    background-color: hsla(0,0%,100%,0);
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.game .gameshow{
    width: 680px;
    height: 260px;
    position: absolute;
    left: 0;
    top: 42px;
    /* display: none; */
    /* background: red; */
    /* border: 1px solid black; */
  }
  /* .header .nav-menu .nav-wrapper .nav-con .nav-item.game .gamenone{
    display: none;
  } */
  .header .nav-menu .nav-wrapper .nav-con .nav-item:hover{
    background-color:hsla(0,0%,100%,.3)
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item .t{
    color: #222;
    display: block;
    height: 100%;
    padding: 0 7px;
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.live .liveshow{
    width: 528px;
    height: 266px;
    position: absolute;
    /* left: 0;
    top: 42px; */
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.live .liveshow iframe{
    display: block;
  }
  /* .header .nav-menu .nav-wrapper .nav-con .nav-item.live .livehide{
    display: none;
  } */
  .header .nav-menu .nav-wrapper .nav-con .nav-item.main{
    margin-left: -10px;
    padding-left: 12px;
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.main a{
    padding-left: 20px;
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.main a .header-iconfont{
    position: absolute;
    left: 9px;
    top: -1px;
    color: #00a1d6;
    font-size: 20px;
    width: 20px;
    height: 21px;
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.download{
    padding: 0 10px;
  }
  
  .header .nav-menu .nav-wrapper .nav-con .nav-item.download .appshow{
    position: absolute;
    width: 259px;
    height: 174px;
    left: -20px;
    top: 42px;
    background: url(http://s1.hdslb.com/bfs/static/jinkela/home/asserts/orcode-frame.png)
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.download .appshow::before{
    content: "";
    width: 97px;
    height: 97px;
    left: 82px;
    top: 30px;
    position: absolute;
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.download .none{
    display: none;
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.download .icon-mobile{
    vertical-align: middle;
    font-size: 16px;
    line-height: 17px;
    color: #23ade5;
  }
  .header .nav-menu .nav-wrapper .nav-con .nav-item.download a{
    display: inline-block;
    padding: 0;
    margin-left: -3px;
  }

  .header .nav-menu .nav-wrapper .up-load{
    position: relative;
    width: 68px;
    height: 42px;
    margin-left: 8px;
    float: right;
  }
  .header .nav-menu .nav-wrapper .up-load .u-link{
    display: block;
    width: 100%;
    height: 46px;
    background-color: #f45a8d;
    color: #fff;
    border-radius: 0 0 6px 6px;
    font-size: 14px;
    text-align: center;
    line-height:42px;
  }
  .header .nav-menu .nav-wrapper .nav-con .profile-info{
    width: 46px;
  }
  .header .nav-menu .nav-wrapper .nav-con .profile-info .i-face{
    position: absolute;
    z-index: 20;
    width: 32px;
    height: 32px;
    left: 0;
    top: 0;
    transition: .3s;
  }
  .header .nav-menu .nav-wrapper .nav-con .profile-info .i-face .face{
    border: 0 solid #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    vertical-align: middle;
  }
</style>
