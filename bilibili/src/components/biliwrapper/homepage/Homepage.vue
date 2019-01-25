<template>
    <div class="homepage clearfix">
        <div class="slideshow-box">
            <div class="slideshow">
                <div class="panel">

                    <div class="block">
                        <el-carousel trigger="click" height="220px">
                        <el-carousel-item v-for="(list,item) in slideList" :key="item">
                            <a :href="list.clickUrl">
                                <img :src="list.image" alt="">
                            </a>
                        </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!-- </ul> -->
                    <!-- <ul>
                        <li class="title" v-for="(list,index) in slideList" :key="index">
                            <a href="#">
                                {{list.msg}}
                            </a>
                        </li>
                    </ul> -->
                     
                </div>
            </div>
        </div>
        <div class="recommend-module clearfix" @mouseenter="btnShow" @mouseleave="btnHide" v-for="(list,index) in cardList" :key="index">
            <div class="groom-module home-card">
                <a href="#" :title="list.title">
                    <img :src="list.image" :alt="list.title" class="pic">
                    <div class="card-mark">
                        <p class="title">{{list.title}}</p>
                        <p class="author">{{list.author}}</p>
                        <p class="play">{{list.play}}</p>
                    </div>
                </a>
                <div class="watch-later-trigger"></div>
            </div>
            <div class="groom-module home-card">
                <a href="#" :title="list.title">
                    <img :src="list.image" :alt="list.title" class="pic">
                    <div class="card-mark">
                        <p class="title">{{list.title}}</p>
                        <p class="author">{{list.author}}</p>
                        <p class="play">{{list.play}}</p>
                    </div>
                </a>
                <div class="watch-later-trigger"></div>
            </div>
            <div class="groom-module home-card">
                <a href="#" :title="list.title">
                    <img :src="list.image" :alt="list.title" class="pic">
                    <div class="card-mark">
                        <p class="title">{{list.title}}</p>
                        <p class="author">{{list.author}}</p>
                        <p class="play">{{list.play}}</p>
                    </div>
                </a>
                <div class="watch-later-trigger"></div>
            </div>
            <div class="groom-module home-card">
                <a href="#" :title="list.title">
                    <img :src="list.image" :alt="list.title" class="pic">
                    <div class="card-mark">
                        <p class="title">{{list.title}}</p>
                        <p class="author">{{list.author}}</p>
                        <p class="play">{{list.play}}</p>
                    </div>
                </a>
                <div class="watch-later-trigger"></div>
            </div>
            <div class="groom-module home-card">
                <a href="#" :title="list.title">
                    <img :src="list.image" :alt="list.title" class="pic">
                    <div class="card-mark">
                        <p class="title">{{list.title}}</p>
                        <p class="author">{{list.author}}</p>
                        <p class="play">{{list.play}}</p>
                    </div>
                </a>
                <div class="watch-later-trigger"></div>
            </div>
            <div class="groom-module home-card">
                <a href="#" :title="list.title">
                    <img :src="list.image" :alt="list.title" class="pic">
                    <div class="card-mark">
                        <p class="title">{{list.title}}</p>
                        <p class="author">{{list.author}}</p>
                        <p class="play">{{list.play}}</p>
                    </div>
                </a>
                <div class="watch-later-trigger"></div>
            </div>
            <div class="groom-module home-card">
                <a href="#" :title="list.title">
                    <img :src="list.image" :alt="list.title" class="pic">
                    <div class="card-mark">
                        <p class="title">{{list.title}}</p>
                        <p class="author">{{list.author}}</p>
                        <p class="play">{{list.play}}</p>
                    </div>
                </a>
                <div class="watch-later-trigger"></div>
            </div>
            <div class="groom-module home-card">
                <a href="#" :title="list.title">
                    <img :src="list.image" :alt="list.title" class="pic">
                    <div class="card-mark">
                        <p class="title">{{list.title}}</p>
                        <p class="author">{{list.author}}</p>
                        <p class="play">{{list.play}}</p>
                    </div>
                </a>
                <div class="watch-later-trigger"></div>
            </div>
            <span class="rec-btn prev" v-show="btn">昨日</span>
            <span class="rec-btn next" v-show="btn">周一</span>
        </div>
    </div>
</template>
<script>
export default {
    
    data () {
        return {
            slideList: [
                {
                    "clickUrl": "#",
                    "image": "http://i0.hdslb.com/bfs/archive/8fc241a07b6dcd9488e40f1f44de9d3e28874ac3.jpg",
                },
                {
                    "clickUrl": "#",
                    "image": "http://i0.hdslb.com/bfs/archive/8fc241a07b6dcd9488e40f1f44de9d3e28874ac3.jpg",
                },
                {
                    "clickUrl": "#",
                    "image": "http://i0.hdslb.com/bfs/archive/8fc241a07b6dcd9488e40f1f44de9d3e28874ac3.jpg",
                },
                {
                    "clickUrl": "#",
                    "image": "http://i0.hdslb.com/bfs/archive/8fc241a07b6dcd9488e40f1f44de9d3e28874ac3.jpg",
                },
                {
                    "clickUrl": "#",
                    "image": "http://i0.hdslb.com/bfs/archive/8fc241a07b6dcd9488e40f1f44de9d3e28874ac3.jpg",
                },
                // {
                //     "clickUrl": "#",
                //     "image": "https://i0.hdslb.com/bfs/sycp/creative_img/201901/905503fa1725ac9a5b968d22dc85f107.jpg",
                // },
                // {
                //     "clickUrl": "#",
                //     "image": "https://i0.hdslb.com/bfs/sycp/creative_img/201901/55ee648fd7761539188af9655d401912.jpg",
                // },
                // {
                //     "clickUrl": "#",
                //     "image": "http://i0.hdslb.com/bfs/archive/5ebb38fde8819a8a6911f149cb2ba846b2fac265.jpg",
                // },
                // {
                //     "clickUrl": "#",
                //     "image": "http://i0.hdslb.com/bfs/archive/20c822f9e1882dc6fcf879ad9dde4625f1fd7c37.jpg",
                // }
            ],
            cardList:[
                {
                    "clickUrl": "#",
                    "image": "http://i1.hdslb.com/bfs/archive/3e8149e1014a68a0bdbe0df2b119506085811213.png@160w_100h.png",
                    "title":"【碧蓝航线】我克利夫兰有个梦想，就是成为舞蹈巨星！",
                    "author":"up主：ewwe404",
                    "play":"播放：8.5万"
                }
            ],
            currentIndex: 0,
            timer:"",
            btn:false,
        }
    },
    methods:{
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        },
        btnShow(){
            this.btn = !this.btn
        },
        btnHide(){
            this.btn = !this.btn
        }
    },
    created() {
        //在DOM加载完成后，下个tick中开始轮播
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        })
    },
    
}
</script>
<style>
    
    .groom-module:hover .watch-later-trigger{
        display: block;
    }


    .homepage{
        padding-bottom:40px;
    }
    .homepage .slideshow-box{
        width: 440px;
        height: 220px;
        float: left;
        background: rgba(0, 0, 0, .30)
    }
    .homepage .slideshow-box .slideshow{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .homepage .slideshow-box .slideshow .panel{
        border-radius: 4px;
        overflow: hidden;
    }
    .homepage .slideshow-box .slideshow .panel .pic{
        width: 500%;
        margin-left: 0%;
        zoom: 1;
        position: relative;
        transition: all .3s;
    }
    .homepage .slideshow-box .slideshow .panel .pic li{
        position: relative;
    }
    .homepage .slideshow-box .slideshow .panel .pic .scrollx{
        float: left;
    }

    .homepage .slideshow-box .slideshow .panel .pic li a{
        display: inline-block;
    }
    .homepage .slideshow-box .slideshow .panel .pic li a img{
        border: none;
        vertical-align: middle;
    }

    .homepage .slideshow-box .slideshow .panel .title{
        /* background: -webkit-linear-gradient(transparent,rgba(0,0,0,.5)); */
        z-index: 2;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        font-size: 14px;
        line-height: 35px;
    }
    .homepage .slideshow-box .slideshow .panel .title a{
        width: 280px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: absolute;
        width: 100%;
        color: #fff;
        text-decoration: none;
        padding-left: 10px;
        opacity: 1;
        z-index: 1;
        transition: all .3s;
    }


    .homepage .recommend-module{
        height: 220px;
        position: relative;
        overflow: hidden;
    }
    .homepage .recommend-module .groom-module{
        float: left;
        margin: 0 0 20px 20px;
        width: 160px;
        height: 100px;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        background: #fff;
    }
    .homepage .recommend-module .groom-module .pic{
        width: 160px;
        height: 100px;
    }
    .homepage .recommend-module .groom-module .card-mark{
        position: absolute;
        left: 0;
        top:68px;
        width: 150px;
        height: 20px;
        padding: 10px 5px;
        font-size: 12px;
        overflow: hidden;
        line-height: 20px;
        background: linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
    }
    .homepage .recommend-module .groom-module .card-mark .title{
        overflow: hidden;
        color: #fff;
        height: 40px;
        margin-bottom: 5px;
    }
    .homepage .recommend-module .groom-module .card-mark .author,
    .homepage .recommend-module .groom-module .card-mark .play{
        opacity: 0;
        color: #99a2aa;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        transition: all .6s;
    }
    /* .homepage .recommend-module .groom-module a:hover .author{
        opacity: 1;
    } */
    .homepage .recommend-module .groom-module:hover .card-mark{
        top:0;
        height:100%;
        background:rgba(0,0,0,.7);
    }
    .homepage .recommend-module .groom-module:hover .card-mark .author,
    .homepage .recommend-module .groom-module:hover .card-mark .play{
        opacity:1
    }


    .homepage .recommend-module .rec-btn{
        opacity: 0;
        background-color: rgba(0, 0, 0, .6);
        position: absolute;
        width: 20px;
        top: 50%;
        margin-top: -8px;
        font-size: 12px;
        color: #fff;
        cursor: pointer;
        text-align: center;
        transition: all 1s;
        background-image: url(http://s1.hdslb.com/bfs/static/jinkela/home/asserts/icons2.png)
    }
    .homepage .recommend-module .rec-btn.prev{
        left: 20px;
        border-radius: 0 4px 4px 0;
        padding: 13px 5px 13px 10px;
        background-position: 6px -1211px;
    }
    .homepage .recommend-module .rec-btn.next{
        right: 0;
        border-radius: 4px 0 0 4px;
        padding: 13px 10px 13px 5px;
        background-position: 25px -1262px;
    }
    .homepage .recommend-module:hover .prev,
    .homepage .recommend-module:hover .next{
        opacity: 1;
    }
</style>