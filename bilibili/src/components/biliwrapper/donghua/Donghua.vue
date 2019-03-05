<template>
    <div class="donghua clearfix">
        <div class="zone-module">
            <div class="l-con">
                <div class="zone-title">
                    <div class="headline clearfix">
                        <i class="icon-donghua"></i>
                        <a href="#" class="name">动画</a>
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
    


    .donghua{
        padding-bottom: 30px;
    }
    .donghua .zone-module .l-con{
        width: 900px;
        float: left;
    }
    .donghua .zone-module .l-con .title{
        padding-right: 20px;
    }
    .donghua .zone-module .l-con .headline{
        padding: 0 0 15px;
    }
    .donghua .zone-module .l-con .headline .icon-donghua{
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: middle;
        float: left;
        margin-top: -10px;
        background-image: url(http://static.hdslb.com/images/base/icons.png);
        background-position: -141px -908px;
        /* display: inline-block; */
    }
    .donghua .zone-module .l-con .headline .name{
        font-size: 24px!important;
        line-height: 24px;
        font-weight: 400;
        margin-right: 20px;
        float: left;
        color: #222;
    }
    .donghua .zone-module .l-con .headline .bili_tab{
        float: left;
        margin: 0 10px 0 0;
    }
    .donghua .zone-module .l-con .headline .bili_tab .bili-tab-item{
        float: left;
        position: relative;
        margin-left: 12px;
        height: 20px;
        line-height: 20px;
        cursor: pointer;
        padding: 1px 0 2px;
        border-bottom: 1px solid transparent;
        transition: .2s;
        transition-property: border,color;
    }
    .donghua .zone-module .l-con .headline .bili_tab .bili-tab-item:first-child{
        margin-left:0;
    }
    .donghua .zone-module .l-con .headline .bili_tab .bili-tab-item:hover{
        color: #00a1d6;
    }
    .donghua .zone-module .l-con .headline .bili_tab .bili-tab-item.on{
        background-color: transparent;
        border-color: #00a1d6;
        color: #00a1d6;
    }
    .donghua .zone-module .l-con .headline .bili_tab .bili-tab-item.on::before{
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -3px;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 3px solid #00a1d6;
        border-top: 0;
        border-right: 3px dashed transparent;
        border-left: 3px dashed transparent;
    }

    .donghua .zone-module .l-con .headline .link-more{
        float: right;
        border: 1px solid #ccd0d7;
        border-radius: 4px;
        color: #555;
        width: 52px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        margin: 0 20px 0 10px;
        transition: all .2s;
    }
    .donghua .zone-module .l-con .headline .link-more .icon{
        display: inline-block;
        background-position: -478px -218px;
        width: 6px;
        height: 12px;
        vertical-align: middle;
        margin: -2px 0 0;
        transition: all .2s;
    }
    .donghua .zone-module .l-con .headline .link-more:hover{
        background-color:#ccd0d7;
    }
    .donghua .zone-module .l-con .headline .link-more:hover i{
        margin-left: 5px;
    }
    .donghua .zone-module .l-con .headline .read-push{
        padding: 0 10px;
        float: right;
        cursor: pointer;
        border: 1px solid #ccd0d7;
        height: 22px;
        background-color: #fff;
        border-radius: 4px;
        transition: all .2s;
    }
    .donghua .zone-module .l-con .headline .read-push .icon{
        width: 12px;
        height: 13px;
        vertical-align: top;
        transition: all .5s;
        margin-top: 5px;
        background-position: -475px -89px;
    }
    .donghua .zone-module .l-con .headline .read-push .info{
        display: inline-block;
        vertical-align: top;
        margin-left: 5px;
        line-height: 22px;
    }
    .donghua .zone-module .l-con .headline .read-push .info b{
        font-weight: 700;
    }
    .donghua .zone-module .l-con .headline .read-push:hover{
        background-color: #ccd0d7;
    }
    .donghua .zone-module .l-con .headline .read-push:hover .icon{
        transform: rotateZ(360deg)
    }

    .donghua .zone-module .l-con .storey-box{
        height: 336;
        overflow: hidden;
    }
    .donghua .zone-module .l-con .storey-box .spread-module{
        float: left;
        margin: 0 20px 20px 0;
    }
    .donghua .zone-module .l-con .storey-box .spread-module:hover .mask-video,
    .donghua .zone-module .l-con .storey-box .spread-module:hover .dur{
        opacity: 1;
    }

    .donghua .zone-module .l-con .storey-box .spread-module:hover .watch-later-trigger{
        display: block;
    }


    .donghua .zone-module .l-con .storey-box .spread-module:hover .t{
        color: #00a1d6;
    }
    .donghua .zone-module .l-con .storey-box .spread-module:hover .num{
        bottom: -20px;
    }

    .donghua .zone-module .l-con .storey-box .spread-module .t{
        padding-top: 8px;
        height: 40px;
        line-height: 20px;
        color: #222;
        word-wrap: normal;
        word-break: break-all;
        overflow: hidden;
        text-align: left;
        transition: all .3s linear;
    }
    


    /* 排行 */
    .sec-rank{
        float: right;
        width: 260px;
        min-height: 360px;
    }
    .sec-rank .rank-head{
        height: 24px;
        line-height: 24px;
    }
    .sec-rank .rank-head h3{
        float: left;
        font-size: 18px;
        font-weight: 400;
    }
    .sec-rank .rank-head .rank-tab{
        float: left;
        margin-left: 20px;
        overflow: hidden;
    }
    .sec-rank .rank-head .rank-tab .bili-tab-item{
        float: left;
        position: relative;
        height: 20px;
        line-height: 20px;
        padding: 1px 0 2px;
        margin-left: 12px;
        border-bottom: 1px solid transparent;
        cursor: pointer;
        transition: .2s;
        transition-property: color,border;
        color: #222;
    }
    .sec-rank .rank-head .rank-tab .bili-tab-item:first-child{
        margin-left: 0;
    }
    .sec-rank .rank-head .rank-tab .bili-tab-item.on{
        background-color:transparent;
        color: #00a1d6;
        border-color: #00a1d6;
    }
    .sec-rank .rank-head .rank-tab .bili-tab-item.on::before{
        display: block;
        content: "";
        /* display: none; */
        position: absolute;
        left: 50%;
        margin-left: -3px;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 3px solid #00a1d6;
        border-top: 0;
        border-left: 3px dashed transparent;
        border-right: 3px dashed transparent;
    }
    .sec-rank .rank-head .rank-dropdown{
        float: right;
        position: relative;
        display: inline-block;
        background-color:#fff;
        vertical-align: middle;
        cursor: default;
        padding: 0 7px;
        height: 22px;
        border: 1px solid #ccd0d7;
        border-radius: 4px;
    }
    .sec-rank .rank-head .rank-dropdown .selected{
        display: inline-block;
        vertical-align: top;
    }
    .sec-rank .rank-head .rank-dropdown .icon-arrow-down{
        background-position: -475px -157px;
        display: inline-block;
        vertical-align: middle;
        width: 12px;
        height: 6px;
        margin-left: 0px;
        margin-top: -1px;
    }
    .sec-rank .rank-head .rank-dropdown .dropdown-list {
        position: absolute;
        width: 100%;
        background: #fff;
        border: 1px solid #ccd0d7;
        border-top: 0;
        left: -1px;
        top: 22px;
        z-index: 10;
        display: none;
        border-radius: 0 0 4px 4px;
    }
    .sec-rank .rank-head .rank-dropdown .dropdown-list .dropdown-item{
        cursor: pointer;
        margin: 0;
        padding: 3px 7px;
    }

    .sec-rank .rank-head .rank-dropdown:hover{
        border-radius:4px 4px 0 0;
        box-shadow:0 2px 4px rgba(0,0,0,.16)
    }
    .sec-rank .rank-head .rank-dropdown .dropdown-list .dropdown-item:hover{
        background-color: #e5e9ef;
    }


    .sec-rank .rank-head .rank-dropdown:hover .dropdown-list,
    .sec-rank .rank-head .rank-dropdown:hover .dropdown-list .dropdown-item{
        display: block;
    }
    .sec-rank .rank-head .rank-dropdown:hover .dropdown-list .dropdown-item:first-child{
        display: none;
    }


    .sec-rank .rank-list-wrap{
        width: 100%;
        overflow: hidden;
        zoom: 1;
        transition: all .2s linear;
    }
    .sec-rank .rank-list-wrap .rank-list{
        padding-top: 20px;
        padding-bottom: 15px;
        min-height: 278px;
        position: relative;
        width: 100%;
        float: left;
    }
    /* .sec-rank .rank-list-wrap.showOrigin{
        margin-left: -100%;
    } */
    .sec-rank .rank-list-wrap .rank-list .rank-item {
        position: relative;
        padding-left: 25px;
        margin-top: 20px;
        overflow: hidden;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item.first{
        margin-top: 0;
        margin-bottom: 15px;
    }

    /* 排行序号 */
    .rank-list .rank-item .ri-num{
        position: absolute;
        width: 18px;
        height: 18px;
        line-height: 18px;
        background-color: #b8c0cc;
        border-radius: 4px;
        color: #fff;
        top: 0;
        left: 0;
        text-align: center;
        /* padding: 0 3px; */
        font-weight: bolder;
        font-style: normal;
        min-width: 12px;
        font-size: 12px;
    }
    .rank-list .rank-item.highlight .ri-num{
        background-color: #f25d8e;
    }

    .sec-rank .rank-list-wrap .rank-list .rank-item .ri-info-wrap{
        position: relative;
        display: block;
        cursor: pointer;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item .ri-info-wrap .w-later{
        right: 160px;
        display: block
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item .ri-info-wrap .ri-preview{
        margin-right: 5px;
        display: none;
        width: 80px;
        height: 50px;
        float: left;
        border-radius: 4px;
        overflow: hidden;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item.first .ri-info-wrap .ri-preview{
        display: block;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item.first .ri-info-wrap .ri-preview img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item .ri-info-wrap .ri-detail{
        float: left;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item .ri-info-wrap .ri-detail .ri-title{
        line-height: 18px;
        height: 18px;
        overflow: hidden;
        color: #222;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item .ri-info-wrap .ri-detail .ri-title:hover{
        color: #00a1d6;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item.first .ri-info-wrap .ri-detail .ri-title{
        height: 36px;
        width: 150px;
        margin-top: -3px;
        padding: 0;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item .ri-info-wrap .ri-detail .ri-point{
        line-height: 12px;
        color: #99a2aa;
        height: 12px;
        margin-top: 5px;
        display: none;
        overflow: hidden;
    }
    .sec-rank .rank-list-wrap .rank-list .rank-item.first .ri-info-wrap .ri-detail .ri-point{
        display: block;
    }
</style>