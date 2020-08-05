<template>
    <div class="header">
        <div class="top-wrapper">
            <div class="back-wrapper">
                <span class="icon-arrow_lift"></span>
            </div>
            <form class="search-wrapper">
                <span class="search-icon"></span>
                <input type="text" class="search-bar" placeholder="Search product" name="" id="">
            </form>
            <div class="more-wrapper">
                <a class="spelling-bt" href="">More</a>
                <div class="more-bt">
                    <i class="s-radius"></i>
                    <i class="s-radius"></i>
                    <i class="s-radius"></i>

                </div>
            </div>

        </div>
        <div class="content-wrapper">
            <div class="icon" :style="head_bg">
                <!-- <img :src="poiInfo.pic_url" alt="" /> -->
            </div>
            <div class="name">
                <h3>{{poiInfo.name}}</h3>
            </div>
            <div class="collect">
                <img src="../../../resource/img/star.png" alt="">
                <span>Save</span>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <img class="icon" v-if="poiInfo.discounts2" :src="poiInfo.discounts2[0].icon_url">
            <span class="text" v-if="poiInfo.discounts2">{{poiInfo.discounts2[0].info}}</span>
            <div class="detail" v-if="poiInfo.discounts2">
                {{poiInfo.discounts2.length}}activities
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </div>
        <div class="bg-wrapper" :style="content_bg">
            <!-- <img :src="poiInfo.head_pic_url" /> -->
        </div>
        <div class="bulletin-detail">
            <div class="detail-wrapper">
                <div class="main-wrapper" :style="detail_bg">
                    <div class="icon" :style="head_bg"></div>
                    <h3 class="name">{{poiInfo.name}}</h3>
                    <p class="tip">
                        {{poiInfo.min_price_tip}} <i>|</i>
                        {{poiInfo.shipping_fee_tip}} <i>|</i>
                        {{poiInfo.delivery_time_tip}}
                    </p>
                    <p class="time">
                        delivery time:
                        {{poiInfo.shipping_time}}
                    </p>
                    <div class="discounts" v-if="poiInfo.discounts2">
                        <p>
                            <img :src="poiInfo.discounts2[0].icon_url" alt="">
                            <span>{{poiInfo.discounts2[0].info}}</span>
                        </p>
                    </div>
                </div>
                <div class="close-wrapper">
                    <span class="icon-lose"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        //send from app.vue
        poiInfo: {
            type: Object,
            default: {}
        }
    },
    computed: {
        content_bg(){
            return "background-image: url(" + this.poiInfo.head_pic_url + ");"
        },
        head_bg(){
            return "background-image: url(" + this.poiInfo.pic_url + ");"
        },
        detail_bg(){
            return "background-image: url(" + this.poiInfo.poi_back_pic_url + ");"
        }
    }
}
</script>

<style scoped>
@import url('../../common/styles/icon.css');
.header {
    height: 160px;
    padding-top: 20px;
}
.header .top-wrapper {
    position: relative;
}
.header .top-wrapper .back-wrapper{
    width: 50px;
    height: 31px;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 31px;
    color: white;
}
.header .top-wrapper .search-wrapper{
   width: 100%;
   height: 31px;
   padding: 0 104px 0 50px;
   box-sizing: border-box;
}
.header .top-wrapper .search-icon{
    width: 28px;
    height: 31px;
    background: url(../../../resource/img/titans_h5_search@2x.png) no-repeat 11px center;
    position: absolute;
    background-size: 13px 13px;
}
.header .top-wrapper .search-bar{
    width: 100%;
    height: 31px;
    border: 0;
    box-sizing: border-box;
    background-color: #cdcdcc;
    border-radius: 25px;
    padding-left: 28px;
    outline: none;
}
.header .top-wrapper .more-wrapper{
    width: 65px;
    height: 24px;
    position: absolute;
    right: 0;
    top: 0;
    padding: 7px 15px 0 24px;
}
.header .top-wrapper .more-wrapper .spelling-bt {
    width:  30px;
    height: 17px;
    color: white;
    line-height: 17px;
    border: 1px solid white;
    text-align: center;
    float: left;
    text-decoration: none;
    font-size: 10px;
}
.header .top-wrapper .more-wrapper .more-bt {
    float: right;
    width: 20px;
    height: 24px;
    margin-left: 13px;
    margin-top: 6px;
}
.header .top-wrapper .more-wrapper .more-bt .s-radius{
    width: 3px;
    height: 3px;
    border-radius: 50%;
    border: 1px solid white;
    display: block;
    float: left;
    margin-right: 1px;

}
.header .bg-wrapper {
    width: 100%;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-size: 100% 135%;
    background-position: center -12px;
}
.content-wrapper {
    padding: 17px 10px 11px;
    height: 50px;
}
.content-wrapper .icon {
    background-size: 135% 100%;
    width: 50px;
    height: 50px;
    background-position: center;
    border-radius: 5px;
    float: left;
}
.content-wrapper .name {
    float: left;
    padding: 18px 0 0 12px;
}
.content-wrapper .name h3 {
    font-size: 16px;
    font-weight: bold;
    color: white;
}
.content-wrapper .collect {
    width: 25px;
    height: 37px;
    float: right;
    text-align: center;
    padding-top: 6px;
}
.content-wrapper .collect img {
    width: 20px;
    height: 20px;
}
.content-wrapper .collect span {
    margin-top: 7px;
    color: white;
    font-size: 11px;
}

.bulletin-wrapper {
    height: 16px;
    padding: 0 10px;
}
.bulletin-wrapper .icon{
    width: 16px;
    height: 16px;
    float: left;
    margin-right: 6px;
}
.bulletin-wrapper .text{
    font-size: 11px;
    color: white;
    float: left;
    line-height: 16px;
}
.bulletin-wrapper .detail{
    color: white;
    float: right;
    font-size: 11px;
    line-height: 16px;
}
.bulletin-wrapper span{
    font-size: 16px;
    line-height: 16px;
    float: right;
}
.header .bulletin-detail {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(98, 98, 98, 0.8)
}
.header .bulletin-detail .detail-wrapper{
    width: 100%;
    height: 100%;
    padding: 43px 20px 125px;
    box-sizing: border-box;
}
.header .bulletin-detail .detail-wrapper .main-wrapper{
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    border-radius: 10px;
    text-align: center;
}
.header .bulletin-detail .detail-wrapper .main-wrapper .icon{
    background-size: 135% 100%;
    width: 60px;
    height: 60px;
    background-position: center;
    border-radius: 5px;
    border-radius: 5px;
    display: inline-block;
    margin-top: 40px;
}
.header .bulletin-detail .detail-wrapper .main-wrapper .name{
    font-size: 15px;
    color: white;
    margin-top: 13px;
}
.header .bulletin-detail .detail-wrapper .main-wrapper .tip{
    font-size: 15px;
    color: #bababc;
    margin-top: 13px;
}
.header .bulletin-detail .detail-wrapper .main-wrapper .tip i{
    margin: 0 7px;
}

.header .bulletin-detail .detail-wrapper .main-wrapper .time{
    font-size: 11px;
    color: #bababc;
    margin-top: 13px;
}
.header .bulletin-detail .detail-wrapper .main-wrapper .discounts{
    margin-top: 20px;
    padding: 0 20px;
}
.header .bulletin-detail .detail-wrapper .main-wrapper .discounts p{
    padding-top: 20px;
    border-top: 1px solid #bababc;
}
.header .bulletin-detail .detail-wrapper .main-wrapper .discounts img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
}
.header .bulletin-detail .detail-wrapper .main-wrapper .discounts span{
    font-size: 11px;
    line-height: 16px;
    color: white;
}
</style>