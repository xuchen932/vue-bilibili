<template>
    <div class="donghua clearfix">
        <div class="zone-module">
            <div class="l-con">
                <div class="zone-title">
                    <div class="headline clearfix">
                        <i class="icon-shishang"></i>
                        <a href="#" class="name">时尚</a>
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
                <div class="storey-box clearfix" v-show="xindongtai"  v-for="(list,index) in videoList" :key="index">
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" alt="【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                <div class="storey-box clearfix" v-show="zuixintougao" v-for="(list,index) in videoList1" :key="'info2'+index">
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                    <div class="spread-module">
                        <a href="#">
                            <div class="pic">
                                <img :src="list.image" :alt="list.msg">
                                <div class="mask-video"></div><!--图片hover后阴影 -->
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
                        <li class="rank-item">
                            <i class="ri-num">4</i>
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
                        <li class="rank-item">
                            <i class="ri-num">5</i>
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
                        <li class="rank-item">
                            <i class="ri-num">6</i>
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
                        <li class="rank-item">
                            <i class="ri-num">7</i>
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
                            <i class="ri-num">1</i>
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
                            <i class="ri-num">1</i>
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
                        <li class="rank-item">
                            <i class="ri-num">1</i>
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
                        <li class="rank-item">
                            <i class="ri-num">1</i>
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
                        <li class="rank-item">
                            <i class="ri-num">1</i>
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
                        <li class="rank-item">
                            <i class="ri-num">1</i>
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
            videoList: [
                {
                    "clickUrl": "#",
                    "image": "https://i0.hdslb.com/bfs/archive/86ed88a1c76d703d08ee6c81308f73ba579eb605.jpg@160w_100h.jpg",
                    "msg":"【全明星】卧槽！盘他！！    ——所以你们到底都盘了些什么奇怪的东西",
                    "dur":"01:10",
                    "msgInfo":1180,
                    "danmuInfo":5521
                }
            ],
            videoList1:[
                {
                   "clickUrl": "#",
                    "image": "https://i2.hdslb.com/bfs/archive/f25b3dd8506c7b6b088e20b3b94e2a996b21fac2.jpg@320w_200h.webp",
                    "msg":"【凹凸世界手书】雷德和祖玛的牵丝戏（超级ooc，注意避雷）",
                    "dur":"01:10",
                    "msgInfo":1234,
                    "danmuInfo":2345 
                }
            ],
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
    }

}
</script>
<style>
    .donghua .zone-module .l-con .headline .icon-shishang{
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: middle;
        float: left;
        margin-top: -10px;
        background-image: url(http://static.hdslb.com/images/base/icons.png);
        background-position: -141px -718px;
        /* display: inline-block; */
    }
</style>