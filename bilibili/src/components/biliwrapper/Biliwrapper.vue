<template>
    <div class="biliwrapper">
        <app-homepage></app-homepage>
        <!-- 推广开始 -->
        <app-popularize></app-popularize>
        <!-- 推广结束 -->
        <a href="#live" id="live"></a>
        <app-zhibo></app-zhibo>
        <a href="#donghua" id="donghua"></a>
        <app-donghua></app-donghua>
        <a href="#fanju" id="fanju"></a>
        <app-fanju></app-fanju>
        <a href="#guochuang" id="guochuang"></a>
        <app-guochuang></app-guochuang>
        <a href="#yinyue" id="yinyue"></a>
        <app-yinyue></app-yinyue>
        <a href="#wudao" id="wudao"></a>
        <app-wudao></app-wudao>
        <a href="#youxi" id="youxi"></a>
        <app-youxi></app-youxi>
        <a href="#keji" id="keji"></a>
        <app-keji></app-keji>
        <a href="#shuma" id="shuma"></a>
        <app-shuma></app-shuma>
        <a href="#shenghuo" id="shenghuo"></a>
        <app-shenghuo></app-shenghuo>
        <a href="#guichu" id="guichu"></a>
        <app-guichu></app-guichu>
        <a href="#shishang" id="shishang"></a>
        <app-shishang></app-shishang>
        <a href="#guanggao" id="guanggao"></a>
        <app-guanggao></app-guanggao>
        <a href="#TVju" id="TVju"></a>
        <app-TVju></app-TVju>
        <a href="#yule" id="yule"></a>
        <app-yule></app-yule>
        <a href="#dianying" id="dianying"></a>
        <app-dianying></app-dianying>
        <a href="#yingshi" id="yingshi"></a>
        <app-yingshi></app-yingshi>
        <a href="#jilupian" id="jilupian"></a>
        <app-jilupian></app-jilupian>

    </div>
</template>
<script>

    import homepage from "./homepage/Homepage"
    import popularize from "./popularize/Popularize"
    import donghua from "./donghua/Donghua"
    import zhibo from "./zhibo/Zhibo"
    import fanju from "./fanju/Fanju"
    import guochuang from "./guochuang/Guochuang"
    import yinyue from "./yinyue/Yinyue"
    import wudao from "./wudao/Wudao"
    import youxi from "./youxi/Youxi"
    import keji from "./keji/Keji"
    import shuma from "./shuma/Shuma"
    import shenghuo from "./shenghuo/Shenghuo"
    import guichu from "./guichu/Guichu"
    import shishang from "./shishang/Shishang"
    import guanggao from "./guanggao/Guanggao"
    import TVju from "./TVju/TVju"
    import yule from "./yule/Yule"
    import dianying from "./dianying/Dianying"
    import yingshi from "./yingshi/Yingshi"
    import jilupian from "./jilupian/Jilupian"

export default {
    data() {
        return {
            
        }
    },
    components:{
        'app-homepage':homepage,
        'app-popularize':popularize,
        'app-zhibo':zhibo,
        'app-donghua':donghua,
        'app-fanju':fanju,
        'app-guochuang':guochuang,
        'app-yinyue':yinyue,
        'app-wudao':wudao,
        'app-youxi':youxi,
        'app-keji':keji,
        'app-shuma':shuma,
        'app-shenghuo':shenghuo,
        'app-guichu':guichu,
        'app-shishang':shishang,
        'app-guanggao':guanggao,
        'app-TVju':TVju,
        'app-yule':yule,
        'app-dianying':dianying,
        'app-yingshi':yingshi,
        'app-jilupian':jilupian,
    }
}
</script>
<style>
    .biliwrapper{
        margin: 0 auto;
        width: 1160px;
    }
</style>