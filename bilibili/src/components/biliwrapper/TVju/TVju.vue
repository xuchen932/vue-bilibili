<template>
    <div class="donghua clearfix">
        <div class="zone-module">
            <div class="l-con">
                <div class="zone-title">
                    <div class="headline clearfix">
                        <i class="icon-dianshiju"></i>
                        <a href="#" class="name">TV剧</a>
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
        this.$http.get('https://www.easy-mock.com/mock/5c7d1b71cf384074c61ce181/bilibili/biliwrapper2').then(response => {
          // console.log(response.json())
          this.biliwrapper = response.data.data.biliwrapper
 
        }, response => {
            console.log("error");
        });
    },

}
</script>
<style>
    .donghua .zone-module .l-con .headline .icon-dianshiju{
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: middle;
        float: left;
        margin-top: -10px;
        background-image: url(http://static.hdslb.com/images/base/icons.png);
        background-position: -141px -845px;
        /* display: inline-block; */
    }
</style>