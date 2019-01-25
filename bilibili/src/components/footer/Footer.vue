<template>
    <div class="bili-footer">
        <div class="footer-wrapper">
            <div class="footer-cnt clearfix">
                <ul class="boston-postcards">
                    <li>
                        <div class="tips">Bilibili</div>
                        <div class="cards">
                            <a href="#">关于我们</a>
                        </div>
                        <div class="cards">
                            <a href="#">联系我们</a>
                        </div>
                        <div class="cards">
                            <a href="#">加入我们</a>
                        </div>
                        <div class="cards">
                            <a href="#">友情链接</a>
                        </div>
                        <div class="cards">
                            <a href="#">bilibili认证</a>
                        </div>
                        <div class="cards">
                            <a href="#">Investor Relations</a>
                        </div>
                    </li>
                    <li>
                        <div class="tips">传送门</div>
                        <div class="cards">
                            <a href="#">帮助中心</a>
                        </div>
                        <div class="cards">
                            <a href="#">高级弹幕</a>
                        </div>
                        <div class="cards">
                            <a href="#">活动专题页</a>
                        </div>
                        <div class="cards">
                            <a href="#">侵权申诉</a>
                        </div>
                        <div class="cards">
                            <a href="#">活动中心</a>
                        </div>
                        <div class="cards">
                            <a href="#">用户反馈论坛</a>
                        </div>
                        <div class="cards">
                            <a href="#">壁纸站</a>
                        </div>
                        <div class="cards">
                            <a href="#">名人堂</a>
                        </div>
                        <div class="cards">
                            <a href="#">专车号服务中心</a>
                        </div>
                    </li>
                    <li>
                        <div class="right">
                            <a href="#">
                                <div class="phone">
                                    <div class="pic footer-phone-app"></div>
                                    <em>客户端下载</em>
                                    <!-- <div class="qrcode-phone"></div> -->
                                </div>
                            </a>
                            <a href="#">
                                <div class="weibo">
                                    <div class="pic footer-weibo-app"></div>
                                    <em>新浪微博</em>
                                    <!-- <div class="qrcode-weibo"></div> -->
                                </div>
                            </a>
                            <a href="#" class="weixin">
                                <div class="weixin">
                                    <div class="pic footer-weixin-app"></div>
                                    <em>官方微信</em>
                                    <!-- <div class="qrcode-weixin"></div> -->
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .bili-footer{
        padding-top: 20px;
        width: 100%;
        color: #99a2aa;
        font-size: 12px;
        text-align: center;
        /* height: 200px; */
        /* background-color: pink; */
    }
    .bili-footer a{
        outline: none;
        text-decoration: none;
        cursor: pointer;
        white-space: nowrap;
        color: #222;
    }
    .bili-footer .footer-wrapper{
        padding: 40px 0 110px 0;
        background-color: #f6f9fa;
    }
    .bili-footer .footer-wrapper .footer-cnt{
        width: 1160px;
        margin: 0 auto;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards{
        margin: 0 auto;
        float: left;
        list-style: none;
        margin-bottom: 30px;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards li{
        float: left;
        text-align: left;
        list-style: none;
        width: 360px;
        height: 112px;
        padding-right: 40px;
        padding-left: 39px;
        line-height: 1;
        border-left: 1px solid #e5e9ef;
        font-size: 14px;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards li:first-child{
        border-left: 0;
        padding-left: 0;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards li:last-child{
        /* border-right: 0; */
        padding-right: 0;
        width: 280px;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards li .tips{
        margin-bottom: 22px;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards li .cards{
        position: relative;
        float: left;
        margin-bottom: 16px;
        width: 120px;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards li .cards a{
        color: #222;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards li .cards:hover a{
        color: #00a1d6;
    }
    .bili-footer .footer-wrapper .footer-cnt .boston-postcards li .right{
        float: right;
        display: block;
        width: 100%;
        position: relative;
    }
    .bili-footer .right em{
        position: absolute;
        width: 82px;
        /* height: 14px; */
        line-height: 14px;
        float: left;
        bottom: 0;
        left: 0;
        text-align: center;
        font-style: normal;
        font-weight: normal;
    }
    .bili-footer .right em:hover{
        color: #00a1d6;
    }
    .bili-footer .right .phone,
    .bili-footer .right .weibo,
    .bili-footer .right .weixin{
        position: relative;
        width: 82px;
        height: 80px;
        float: left;
    }
    .bili-footer .right .pic{
        background-image: url(http://static.hdslb.com/images/base/icons.png);
        background-repeat: no-repeat;
        position: relative;
        margin-left: 11px;
        width: 60px;
        height: 60px;
        color: #222;
    }
    .bili-footer .right .pic.footer-phone-app{
        background-position: -1024px -194px;
    }
    .bili-footer .right .pic.footer-weibo-app{
        background-position: -1024px -322px;
    }
    .bili-footer .right .pic.footer-weixin-app{
        background-position: -1024px -66px;
    }
</style>