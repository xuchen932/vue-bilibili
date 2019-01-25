<template>
    <div class="head-banner" style="background-image:url(http://i0.hdslb.com/bfs/archive/6c42c40ed54f4bb5ea491894aff693878afa6580.png)">
        <div class="head-content">
          <div class="search">
            <form class="searchform">
              <input type="text" placeholder="我是徐晨">
              <button type="submit" class="search-submit"></button>
            </form>
            <a href="#" class="link-ranking">
              <span>排行榜</span>
            </a>
          </div>
          <a href="#" class="head-logo" style="background-image:url(http://i0.hdslb.com/bfs/archive/08f98bb10251bb89461c0f3d50c864327b1ac05d.png)"></a>
        </div>
        <a href="#" class="banner-link"></a>
      </div>
</template>
<script>
export default {
    
}
</script>
<style>
  .header .head-banner{
    position: relative;
    z-index: 199;
    height: 170px;
    margin-top: -42px;
    background: #eee;
    background-position: center -10px;
    background-repeat: no-repeat;
  }
  .header .head-banner .head-content{
    position: relative;
    height: 170px;
    margin: 0 auto;
    width: 1160px;
  }
  .header .head-banner .head-content .head-logo{
    position: absolute;
    width: 220px;
    height: 105px;
    left: 24px;
    top: 55px;
    background: transparent no-repeat 0;
    z-index: 10;
  }
  .header .head-banner .head-content .search{
    position:absolute;
    bottom: 20px;
    right: 0;
    width: 268px;
    padding: 2px 2px 2px 72px;
    height: 32px;
    background-color: rgba(0, 0, 0, .12);
    border-radius: 6px;
    font-size: 12px;
    z-index: 10;
  }
  .header .head-banner .head-content .search .searchform{
    display: block;
    height: 32px;
    border-radius: 4px;
    background-color: hsla(0, 0%, 100%, .88)
  }
  .header .head-banner .head-content .search .searchform input{
    float: left;
    width: 200px;
    color: #222;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    border: 0;
    padding: 0 12px;
    overflow: hidden;
    box-shadow: none;
    background: transparent;
  }
  .header .head-banner .head-content .search .searchform button{
    display: block;
    position: absolute;
    right: 0;
    width: 48px;
    height: 32px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    background-image: url(http://static.hdslb.com/images/base/icons.png);
    background-repeat: no-repeat;
    background-position: -653px -720px;
    text-align:center;
  }
  .header .head-banner .head-content .search .searchform button:hover{
      background-position: -718px -720px;
  }
  .header .head-banner .head-content .search .link-ranking{
    position: absolute;
    width: 68px;
    height: 32px;
    left: 2px;
    top: 2px;
    line-height: 32px;
    background-color: hsla(0, 0%, 100%, .88);
    border-radius: 4px;
  }
  .header .head-banner .head-content .search .link-ranking span{
    display: inline-block;
    color: #f25d8e;
    padding-left: 26px;
    background-repeat: no-repeat;
    background-position: -659px -655px;
    background-image: url(http://static.hdslb.com/images/base/icons.png);

  }
  .header .head-banner .banner-link{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
</style>