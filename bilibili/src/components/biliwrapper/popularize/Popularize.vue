<template>
    <div class="donghua clearfix">
        <div class="zone-module">
            <div class="l-con">
                <div class="zone-title">
                    <div class="headline clearfix">
                        <i class="icon-popularize"></i>
                        <a href="#" class="name">推广</a>
                        <div class="bili_tab">
                            <div class="bili-tab-item" :class="{on:activeOn}" @click="bindOn">有新动态</div>
                            <div class="bili-tab-item" :class="{on:activeOn1}" @click="bindShow">最新投稿</div>
                        </div>
                        <a href="#" class="link-more">
                            更多
                            <i class="icon"></i>
                        </a>
                        <div class="read-push">
                            <i class="icon"></i>
                            <span class="info">
                                <b>{{msgInfo}}</b>条新动态
                            </span>
                        </div>
                    </div>
                </div>
                <div class="storey-box clearfix" v-show="xindongtai"  >

                    <div class="spread-module" v-for="(list,index) in biliwrapper.videoList" :key="index">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div>
                                <!--图片hover后阴影 -->
                                <span class="dur">{{list.dur}}</span>
                                <div class="watch-later-trigger"></div>
                            </div>
                            <p class="t">{{list.msg}}</p>
                            <p class="num">
                                <span class="play">
                                    <i class="icon"></i>{{list.msgInfo}}
                                </span>
                                <span class="danmu">
                                    <i class="icon"></i>{{list.danmuInfo}}
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
                <div class="storey-box clearfix" v-show="zuixintougao">
                    <div class="spread-module"  v-for="(list,index1) in biliwrapper.videoList1" :key="index1">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div>
                                <span class="dur">{{list.dur}}</span>
                                <div class="watch-later-trigger"></div>
                            </div>
                            <p class="t">{{list.msg}}</p>
                            <p class="num">
                                <span class="play">
                                    <i class="icon"></i>{{list.msgInfo}}
                                </span>
                                <span class="danmu">
                                    <i class="icon"></i>{{list.danmuInfo}}
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <section class="sec-rank">
                <header class="rank-head">
                    <h3>排行</h3>
                    <div class="rank-tab">
                        <div class="bili-tab-item" :class="{on:activeOn2}" @click="bindOn1">全部</div>
                        <div class="bili-tab-item" :class="{on:activeOn3}" @click="bindShow1">原创</div>
                    </div>
                    <div class="rank-dropdown">
                        <span class="selected">三日</span>
                        <i class="icon icon-arrow-down"></i>
                        <ul class="dropdown-list">
                            <li class="dropdown-item">三日</li>
                            <li class="dropdown-item">一周</li>
                        </ul>
                    </div>
                </header>
                <div class="rank-list-wrap" :class="{showOrigin:showOrigin}">
                    <ul class="rank-list hot-list" :style="{display:showhot}">
                        <li class="rank-item highlight first" @mouseenter="showclock" @mouseleave="hideclock">
                            <i class="ri-num">1</i>
                            <a href="#" class="ri-info-wrap clearfix">
                                <div class="ri-preview">
                                    <img src="http://i2.hdslb.com/bfs/archive/8718659edf25198c87b4accfc10d0efaf2ec45d0.jpg@160w_100h.webp" alt="【UP主战争】2019最强新番吐槽是谁？">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">【UP主战争】2019最强新番吐槽是谁？</p>
                                    <p class="ri-point">综合评分：59.8万</p>
                                </div>
                                <div class="watch-later-trigger w-later" v-show="clock"></div>
                            </a>
                        </li>
                        <li class="rank-item highlight">
                            <i class="ri-num">2</i>
                            <a href="#" class="ri-info-wrap clearfix">
                                <div class="ri-preview">
                                    <img src="http://i2.hdslb.com/bfs/archive/8718659edf25198c87b4accfc10d0efaf2ec45d0.jpg@160w_100h.webp" alt="【UP主战争】2019最强新番吐槽是谁？">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">【UP主战争】2019最强新番吐槽是谁？</p>
                                    <p class="ri-point">综合评分：59.8万</p>
                                </div>
                                <!-- <div class="watch-later-trigger w-later"></div> -->
                            </a>
                        </li>
                        <li class="rank-item highlight">
                            <i class="ri-num">3</i>
                            <a href="#" class="ri-info-wrap clearfix">
                                <div class="ri-preview">
                                    <img src="http://i2.hdslb.com/bfs/archive/8718659edf25198c87b4accfc10d0efaf2ec45d0.jpg@160w_100h.webp" alt="【UP主战争】2019最强新番吐槽是谁？">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">【UP主战争】2019最强新番吐槽是谁？</p>
                                    <p class="ri-point">综合评分：59.8万</p>
                                </div>
                                <!-- <div class="watch-later-trigger w-later"></div> -->
                            </a>
                        </li>
                        <li class="rank-item"  v-for="(rank,index) in biliwrapper.rankList" :key="index">
                            <i class="ri-num">{{rank.num}}</i>
                            <a href="#" class="ri-info-wrap clearfix">
                                <div class="ri-preview">
                                    <img :src="rank.previewImg" :alt="rank.title">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">{{rank.title}}</p>
                                    <p class="ri-point">{{rank.point}}</p>
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                    <ul class="rank-list origin-list" :style="{display:originshow}">
                        <li class="rank-item highlight first" @mouseenter="showclock" @mouseleave="hideclock">
                            <i class="ri-num">1</i>
                            <a href="#" class="ri-info-wrap clearfix">
                                <div class="ri-preview">
                                    <img src="https://i2.hdslb.com/bfs/archive/f25b3dd8506c7b6b088e20b3b94e2a996b21fac2.jpg@320w_200h.webp" alt="【凹凸世界手书】雷德和祖玛的牵丝戏（超级ooc，注意避雷）">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">【凹凸世界手书】雷德和祖玛的牵丝戏（超级ooc，注意避雷）</p>
                                    <p class="ri-point">综合评分：59.8万</p>
                                </div>
                                <div class="watch-later-trigger w-later" v-show="clock"></div>
                            </a>
                        </li>
                        <li class="rank-item highlight">
                            <i class="ri-num">2</i>
                            <a href="#" class="ri-info-wrap clearfix">
                                <div class="ri-preview">
                                    <img src="https://i2.hdslb.com/bfs/archive/f25b3dd8506c7b6b088e20b3b94e2a996b21fac2.jpg@320w_200h.webp" alt="【凹凸世界手书】雷德和祖玛的牵丝戏（超级ooc，注意避雷）">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">【凹凸世界手书】雷德和祖玛的牵丝戏（超级ooc，注意避雷）</p>
                                    <p class="ri-point">综合评分：59.8万</p>
                                </div>
                                <!-- <div class="watch-later-trigger w-later" v-show="clock"></div> -->
                            </a>
                        </li>
                        <li class="rank-item highlight">
                            <i class="ri-num">3</i>
                            <a href="#" class="ri-info-wrap clearfix">
                                <div class="ri-preview">
                                    <img src="https://i2.hdslb.com/bfs/archive/f25b3dd8506c7b6b088e20b3b94e2a996b21fac2.jpg@320w_200h.webp" alt="【凹凸世界手书】雷德和祖玛的牵丝戏（超级ooc，注意避雷）">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">【凹凸世界手书】雷德和祖玛的牵丝戏（超级ooc，注意避雷）</p>
                                    <p class="ri-point">综合评分：59.8万</p>
                                </div>
                                <!-- <div class="watch-later-trigger w-later" v-show="clock"></div> -->
                            </a>
                        </li>
                        <li class="rank-item"  v-for="(rank,index1) in biliwrapper.rankList1" :key="index1">
                            <i class="ri-num">{{rank.num}}</i>
                            <a href="#" class="ri-info-wrap clearfix">
                                <div class="ri-preview">
                                    <img :src="rank.previewImg" :alt="rank.title">
                                </div>
                                <div class="ri-detail">
                                    <p class="ri-title">{{rank.title}}</p>
                                    <p class="ri-point">{{rank.point}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            biliwrapper:{},
            msgInfo:1111,
            xindongtai:true,
            zuixintougao:false,
            activeOn:true,
            activeOn1:false,
            activeOn2:true,
            activeOn3:false,
            clock:false,
            showOrigin:false,
            showhot:"block",
            originshow:"none"
        }
    },
    
    methods: {
        bindOn(){
            this.xindongtai = true;
            this.zuixintougao = false;
            this.activeOn = true;
            this.activeOn1 = false;
            
        },
        bindShow(){
            this.xindongtai = false;
            this.zuixintougao = true;
            this.activeOn = false;
            this.activeOn1 = true;
            
        },
        bindOn1(){
            this.activeOn2 = true;
            this.activeOn3 = false;
            this.showOrigin = false;
            this.showhot = "block";
            this.originshow = "none";
        },
        bindShow1(){
            this.activeOn2 = false;
            this.activeOn3 = true;
            this.showOrigin = true;
            this.showhot = "none";
            this.originshow = "block";
        },
        showclock(){
            this.clock = true
        },
        hideclock(){
            this.clock = false
        }
    },
    created: function () {
        // GET /someUrl
        this.$http.get('https://www.easy-mock.com/mock/5c7d1b71cf384074c61ce181/bilibili/biliwrapper').then(response => {
          // console.log(response.json())
          this.biliwrapper = response.data.data.biliwrapper
 
        }, response => {
            console.log("error");
        });
    },

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
