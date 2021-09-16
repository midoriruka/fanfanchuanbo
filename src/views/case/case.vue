<template>
  <div>
    <div>
      <b-img-lazy src="@/assets/case/banner.png" fluid alt="Responsive image"></b-img-lazy>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto">客户案例</h1>
    </div>
    <div class="mt-5 video-bg">
      <!-- 视频播放 -->
      <div class="m-auto video-content">
        <b-embed type="video" controls v-html="videoUrl">
        </b-embed>
      </div>
    </div>
    <div class="mt-5">
      <div class="row justify-content-center">
        <div class="col-6 col-sm-2" v-for="(item,index) in visualizationContent"
             :key="index">
          <b-card
            tag="article"
            class="case-box mb-2"
          >
            <b-card-text class="text-left">
              <p class="p-header">{{item.title}}</p>
              <p class="p-body">{{item.text}}</p>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto">案例展示</h1>
      <p class="mt-3 p-header">短视频作品案例部分展示</p>
      <div>
        <div class="row justify-content-center">
          <div class="col-5 col-sm-2 mb-3" v-for="(item,index) in shortVideoImg"
               :key="index">
            <b-img-lazy :src=item fluid alt="Responsive image"></b-img-lazy>
          </div>
        </div>
      </div>
      <p class="mt-3 p-header">信息流作品案例部分展示</p>
      <div>
        <div class="row justify-content-center">
          <div class="col-5 col-sm-2 mb-3" v-for="(item,index) in informationImg"
               :key="index">
            <b-img-lazy :src=item fluid alt="Responsive image"></b-img-lazy>
          </div>
        </div>
      </div>
      <p class="mt-3 p-header">直播代运营</p>
      <div>
        <div class="row justify-content-center">
          <div class="col-sm-8">
            <div class="row justify-content-center">
              <div class="col-5 col-sm-2 mb-3" v-for="(item,index) in liveBusinessImg.first"
                   :key="index">
                <b-img-lazy :src=item fluid alt="Responsive image"></b-img-lazy>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-sm-8">
            <div class="row justify-content-center">
              <div class="col-5 col-sm-2 mb-3" v-for="(item,index) in liveBusinessImg.two"
                   :key="index">
                <b-img-lazy :src=item fluid alt="Responsive image"></b-img-lazy>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMediaList } from '@/api/service';
export default {
  name: "case",
  data(){
    return {
      visualizationContent:[
        {
          title:'影视制作',
          text:'企业宣传片、产品宣传片、人物宣传片、城市宣传片、专题汇报片、TVC广告、网络微电影、微课慕课、信息流广告'
        }, {
          title:'二维动画',
          text:'MG动画、AE动画、FLASH动画、三渲二动画、逐帧动画、手绘动画、课件动画、剧集动画、抖音动漫'
        }, {
          title:'三维动画',
          text:'工业流程动画、产品宣传动画、地产三维动画、LOGO片头动画、栏目整套包装、游戏三维动画、直播礼物动画、展厅全息投影'
        }, {
          title:'其他服务',
          text:'品牌全案策划、形象IP打造、插画海报设计、项目脚本策划、活动全程直播、工业产品建模、游戏原画设计'
        },
      ],
      shortVideoImg:[
        require('@/assets/case/1.png'),
        require('@/assets/case/2.png'),
        require('@/assets/case/3.png'),
      ],
      informationImg:[
        require('@/assets/case/4.png'),
        require('@/assets/case/5.png'),
        require('@/assets/case/6.png'),
      ],
      liveBusinessImg:{
        first:[
          require('@/assets/case/7.png'),
          require('@/assets/case/8.png'),
          require('@/assets/case/9.png'),
          require('@/assets/case/10.png'),
          require('@/assets/case/11.png'),
        ],
        two:[
          require('@/assets/case/12.png'),
          require('@/assets/case/13.png'),
          require('@/assets/case/14.png'),
          require('@/assets/case/15.png'),
          require('@/assets/case/16.png'),
        ],
      },
      videoUrl:'',
    }
  },
  mounted() {
    getMediaList('video').then((res)=>{
      this.videoUrl=`'<source src="${res[0].url}" type="video/mp4">'`
    })
  }
}
</script>

<style scoped>
.header{
  font-family: 'SourceHanSansBold';
  font-size: 2.425rem;
  color: #eb5027;
  font-weight: normal;
  font-stretch: normal;
  margin-top: 6.125rem;
}
.p-header{
  font-family: 'SourceHanSansBold';
}
.p-body{
  font-family: 'SourceHanSansRegular';
}
.video-bg{
  background-image: url("../../assets/case/video-bg.png");
  background-position:center;
  background-repeat: no-repeat;
  /*background-size:100% 100%;*/
}
@media screen and (min-width:900px){
  .video-content {
    width: 50%;
   /*height: 30rem;*/
  }
  .case-box{
    width: 15rem;
    height: 11rem;
  }
}
@media screen and (max-width:480px){
  .case-box{
    width: 12rem;
    height: 16rem;
  }
}

</style>
