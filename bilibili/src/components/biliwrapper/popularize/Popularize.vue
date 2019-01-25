<template>
    <div class="popularize clearfix">
        <div class="l-con">
            <div class="headline clearfix">
                <i class="icon icon-popularize"></i>
                <span class="name">推广</span>
            </div>
            <div class="storey-box clearfix" v-for="(list,item) in videoList" :key="item">
                <div class="spread-module">
                    <a href="#">
                        <div class="pic">
                            <img :src="list.image" :alt="list.msg">
                            <div class="mask-video"></div><!--图片hover后阴影 -->
                            <span class="dur">{{list.dur}}</span>
                            <div class="watch-later-trigger"></div>
                        </div>
                        <p class="t">{{list.msg}}</p>
                    </a>
                </div>
                <div class="spread-module">
                    <a href="#">
                        <div class="pic">
                            <img :src="list.image" :alt="list.msg">
                            <div class="mask-video"></div><!--图片hover后阴影 -->
                            <span class="dur">{{list.dur}}</span>
                            <div class="watch-later-trigger"></div>
                        </div>
                        <p class="t">{{list.msg}}</p>
                    </a>
                </div>
                <div class="spread-module">
                    <a href="#">
                        <div class="pic">
                            <img :src="list.image" :alt="list.msg">
                            <div class="mask-video"></div><!--图片hover后阴影 -->
                            <span class="dur">{{list.dur}}</span>
                            <div class="watch-later-trigger"></div>
                        </div>
                        <p class="t">{{list.msg}}</p>
                    </a>
                </div>
                <div class="spread-module">
                    <a href="#">
                        <div class="pic">
                            <img :src="list.image" :alt="list.msg">
                            <div class="mask-video"></div><!--图片hover后阴影 -->
                            <span class="dur">{{list.dur}}</span>
                            <div class="watch-later-trigger"></div>
                        </div>
                        <p class="t">{{list.msg}}</p>
                    </a>
                </div>
                <div class="spread-module">
                    <a href="#">
                        <div class="pic">
                            <img :src="list.image" :alt="list.msg">
                            <div class="mask-video"></div><!--图片hover后阴影 -->
                            <span class="dur">{{list.dur}}</span>
                            <div class="watch-later-trigger"></div>
                        </div>
                        <p class="t">{{list.msg}}</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="r-con">
            <div class="online">
                <a href="#">在线人数：{{onlineNum}}</a>
                <em></em>
                <a href="#">最新投稿：{{submitNum}}</a>
            </div>
            <div class="adpos">
                <a href="#">
                    <img src="http://i0.hdslb.com/bfs/archive/bc2e778c9891c5bed00933dd721e84c9b05a2df1.jpg" alt="">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            videoList: [
                {
                    "clickUrl": "#",
                    "image": "http://i0.hdslb.com/bfs/archive/86ed88a1c76d703d08ee6c81308f73ba579eb605.jpg@160w_100h.jpg",
                    "msg":"【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西",
                    "dur":"01:10",
                    "msgInfo":1180,
                    "danmuInfo":5521
                }
            ],
            onlineNum:3214183,
            submitNum:33199
        }
    }
}
</script>
<style>
    .icon{
        display: inline-block;
        background-image: url(http://static.hdslb.com/images/base/icons.png);
    }


    .popularize{
        padding-bottom: 15px
    }
    .popularize .l-con{
        width: 900px;
        float: left;
    }
    .popularize .l-con .headline{
        padding: 0 0 15px;
    }
    .popularize .l-con .headline .icon-popularize{
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: middle;
        float: left;
        margin-top: -10px;
        background-position: -141px -75px;
    }
    .popularize .l-con .headline .name{
        font-size: 24px!important;
        line-height: 24px;
        font-weight: 400;
        margin-right: 20px;
        float: left;
    }


    .popularize .l-con .storey-box{
        height: 168px;
        overflow: hidden;
    }
    .popularize .l-con .storey-box .spread-module{
        position: relative;
        width: 160px;
        height: 148px;
        font-size: 12px;
        overflow: hidden;
        float: left;
        margin: 0 20px 20px 0;
        padding: 0;
    }
    .popularize .l-con .storey-box .spread-module:hover .watch-later-trigger{
        display: block;
    }
    .popularize .l-con .storey-box .spread-module .pic{
        position: relative;
        width: 160px;
        height: 100px;
        overflow: hidden;
        text-align: center;
        border-radius: 4px;
        display: block;
    }
    .popularize .l-con .storey-box .spread-module .pic img{
        margin: 0 auto;
        outline: 0;
    }
    /* .popularize .l-con .storey-box .spread-module .pic .mask-video{
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .2);
        transition: all .2s;
    } */
    /* .popularize .l-con .storey-box .spread-module .pic .dur{
        position: absolute;
        left: 6px;
        bottom: 2px;
        height: 12px;
        line-height: 12px;
        color: #fff;
        padding: 0 5px 1px 0;
        opacity: 0;
        transition: all .2s;
        
    } */
    .popularize .l-con .storey-box .spread-module .pic:hover .mask-video,
    .popularize .l-con .storey-box .spread-module .pic:hover .dur{
        opacity: 1;
    }
    .popularize .l-con .storey-box .spread-module .t{
        padding-top: 8px;
        height: 40px;
        line-height: 20px;
        transition: all .2s linear;
        color: #222;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        text-align: left;
    }
    .popularize .l-con .storey-box .spread-module a:hover .t{
        color:#00a1d6
    }
    



    .popularize .r-con{
        float: right;
        width: 260px;
    }
    .popularize  .r-con .online{
        padding: 0 10px;
        position: relative;
        height: 34px;
        line-height: 34px;
        border-radius: 4px;
        background-color: #e5e9ef;
        white-space: nowrap;
    }
    .popularize .r-con .online a{
        color: #6d757a;
    }
    .popularize .r-con .online a:hover{
        color: #00a1d6;
    }
    .popularize .r-con .online em{
        display: inline-block;
        border-left: 1px solid #b8c0cc;
        height: 10px;
        line-height: 10px;
        vertical-align: top;
        margin: 12px 15px 0;
        font-style: normal;
        font-weight: 400;
    }

    .popularize .r-con .adpos{
        margin-top: 10px;
        border-radius: 4px;
        overflow: hidden;
        width: 260px;
        height: 150px;
        position: relative;
    }

</style>
