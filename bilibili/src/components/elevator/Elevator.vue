<template>
    <div class="elevator-module" :style="{top:num+'px'}">
        <div class="nav-bg">
            <div class="tips-img"></div>
        </div>
        <div class="nav-list">
            <div class="item sortable" @click="live">直播</div>
            <div class="item sortable" @click="donghua">动画</div>
            <div class="item sortable" @click="fanju">番剧</div>
            <div class="item sortable" @click="guochuang">国创</div>
            <div class="item sortable" @click="yinyue">音乐</div>
            <div class="item sortable" @click="wudao">舞蹈</div>
            <div class="item sortable" @click="youxi">游戏</div>
            <div class="item sortable" @click="keji">科技</div>
            <div class="item sortable" @click="shuma">数码</div>
            <div class="item sortable" @click="shenghuo">生活</div>
            <div class="item sortable" @click="guichu">鬼畜</div>
            <div class="item sortable" @click="shishang">时尚</div>
            <div class="item sortable" @click="guanggao">广告</div>
            <div class="item sortable" @click="TVju">TV剧</div>
            <div class="item sortable" @click="yule">娱乐</div>
            <div class="item sortable" @click="dianying">电影</div>
            <div class="item sortable" @click="yingshi">影视</div>
            <div class="item sortable" @click="jilupian">纪录片</div>
            <div class="item customize">
                <i class="icon"></i>排序
            </div>
        </div>
        <div class="s-line"></div>
        <div class="back-top icon" @click="top"></div>
        <div class="app-download">
            <a href="#">
                <div class="app-icon"></div>
                <div class="app-tips-icon"></div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            num:232,
            i:450,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
        // window.addEventListener('scroll', this.skip, true);

    },
    methods: {
            handleScroll() {
                // console.log(window.scrollY)
                if(window.scrollY <= 232){
                    this.num = 232
                }else if(window.scrollY >=232){
                    this.num = 0
                };
            },
            top(){
                window.location.hash = "#top"; 
            },
            live(){
                window.location.hash = "#live"; 
            },
            donghua(){
                window.location.hash = "#donghua"; 
            },
            fanju(){
                window.location.hash = "#fanju"; 
            },
            guochuang(){
                window.location.hash = "#guochuang"; 
            },
            yinyue(){
                window.location.hash = "#yinyue"; 
            },
            wudao(){
                window.location.hash = "#wudao"; 
            },
            youxi(){
                window.location.hash = "#youxi"; 
            },
            keji(){
                window.location.hash = "#keji"; 
            },
            shuma(){
                window.location.hash = "#shuma"; 
            },
            shenghuo(){
                window.location.hash = "#shenghuo"; 
            },
            guichu(){
                window.location.hash = "#guichu"; 
            },
            shishang(){
                window.location.hash = "#shishang"; 
            },
            guanggao(){
                window.location.hash = "#guanggao"; 
            },
            TVju(){
                window.location.hash = "#TVju"; 
            },
            yule(){
                window.location.hash = "#yule"; 
            },
            dianying(){
                window.location.hash = "#dianying"; 
            },
            yingshi(){
                window.location.hash = "#yingshi"; 
            },
            jilupian(){
                window.location.hash = "#jilupian"; 
            }
    }

    
}
</script>
<style>
    .elevator-module{
        /* top: 0; */
        position: fixed;
        z-index: 10;
        left: 50%;
        margin-left: 590px;
        transition: top .3s;
    }
    .elevator-module .nav-list{
        position: relative;
        border: 1px solid #e5e9ef;
        background-color: #f6f9fa;
        overflow: hidden;
        border-radius: 4px;
    }
    .elevator-module .nav-list .item{
        width: 48px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        transition: background-color .3s linear;
        cursor: pointer;
        user-select: none; /*文件不能被选择*/
    }
    .elevator-module .nav-list .item:hover{
        background-color: #00a1d6;
        color: #fff;
    }
    .elevator-module .nav-list .item.on{
        background-color: #00a1d6;
        color: #fff;
    }
    .elevator-module .nav-list .item.customize{
        height: 38px;
        line-height: 20px;
        padding: 8px 0;
        border-top: 1px solid #e5e9ef;
    }
    .elevator-module .nav-list .item.customize .icon{
        display: block;
        margin: 0 auto 4px;
        background-position: -663px -151px;
        height: 18px;
        width: 18px;
    }
    .elevator-module .nav-list .item.customize:hover .icon{
        background-position:-727px -151px;
    }


    .elevator-module .s-line{
        position: relative;
        width: 30px;
        height: 9px;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        margin: 0 auto;
    }
    .elevator-module .back-top{
        position: relative;
        display: block;
        height: 48px;
        cursor: pointer;
        background-position: -648px -72px;
        background-color: #f6f9fa;
        border: 1px solid #e5e9ef;
        overflow: hidden;
        border-radius: 4px;
    }
    .elevator-module .back-top:hover{
        background-color: #00a1d6;
        color: #fff;
        background-position: -714px -72px;
    }
    .elevator-module .app-download{
        position: relative;
        width: 50px;
        height: 70px;
    }
    .elevator-module .app-download .app-icon{
        position: absolute;
        left: -15px;
        width: 80px;
        height: 80px;
        background-image: url(http://s1.hdslb.com/bfs/static/jinkela/home/asserts/app-download.png);

    }
</style>