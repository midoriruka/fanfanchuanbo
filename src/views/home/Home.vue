<template>
  <div>
    <div class="header-banner">
        <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        img-width="1920"
        img-height="600">
          <div class="img-content d-none d-lg-block">
            <b-container class="list-content pl-0 pr-0">
              <div class="list-line m-auto"></div>
              <b-row class="justify-content-left">
                <b-col class="pt-3" sm="8">
                  <b-img-lazy src="@/assets/home/dspyx.png" class="pl-3" left fluid alt="Responsive image"></b-img-lazy>
                  <h4 class="text-white">短视频营销</h4>
                </b-col>
                <b-col class="pt-2" sm="6">
                  <ul class="m-0">
                    <li><router-link to='/business' tag="span">抖音代运营</router-link></li>
                    <li><router-link to='/business' tag="span">信息流广告投放</router-link></li>
                  </ul>
                </b-col>
                <b-col class="pt-2 pl-0" sm="5">
                  <ul class="m-0">
                    <li><router-link to='/business' tag="span">快手代运营</router-link></li>
                    <li><router-link to='/business' tag="span">短视频培训</router-link></li>
                  </ul>
                </b-col>
              </b-row>
              <div class="list-line m-auto"></div>
              <b-row class="justify-content-left">
                <b-col class="pt-3" sm="8">
                  <b-img-lazy src="@/assets/home/spzz.png" class="pl-3" left fluid alt="Responsive image"></b-img-lazy>
                  <h4 class="text-white">视频制作</h4>
                </b-col>
                <b-col class="pt-2" sm="6">
                  <ul class="m-0">
                    <li><router-link to='/business/VideoMaking' tag="span">短视频拍摄</router-link></li>
                    <li><router-link to='/business/VideoMaking' tag="span">企业宣传片</router-link></li>
                    <li><router-link to='/business/VideoMaking' tag="span">MG动画</router-link></li>
                  </ul>
                </b-col>
                <b-col class="pt-2 pl-0" sm="5">
                  <ul class="m-0">
                    <li><router-link to='/business/VideoMaking' tag="span">微电影</router-link></li>
                    <li><router-link to='/business/VideoMaking' tag="span">TVC制作</router-link></li>
                    <li><router-link to='/business/VideoMaking' tag="span">三维动画</router-link></li>
                  </ul>
                </b-col>
              </b-row>
              <div class="list-line m-auto"></div>
              <b-row class="justify-content-left">
                <b-col class="pt-3" sm="8">
                  <b-img-lazy src="@/assets/home/ppyx.png" class="pl-3" left fluid alt="Responsive image"></b-img-lazy>
                  <h4 class="text-white">品牌营销</h4>
                </b-col>
                <b-col class="pt-2" sm="6">
                  <ul class="m-0">
                    <li><router-link to='/business/BrandMarket' tag="span">软文推广</router-link></li>
                    <li><router-link to='/business/BrandMarket' tag="span">SEO优化</router-link></li>
                  </ul>
                </b-col>
                <b-col class="pt-2 pl-0" sm="5">
                  <ul class="m-0">
                    <li><router-link to='/business/BrandMarket' tag="span">媒体邀约</router-link></li>
                    <li><router-link to='/business/BrandMarket' tag="span">舆情监测</router-link></li>
                  </ul>
                </b-col>
              </b-row>
              <div class="list-line m-auto"></div>
            </b-container>
          </div>
          <div>
            <b-carousel-slide v-for="(item,index) in banner"
                              :key="index"
                              :img-src="`${item.url}`"
            ></b-carousel-slide>
          </div>
        </b-carousel>
    </div>
    <!--视频拍摄服务-->
    <div class="mt-5 video-shoot-service">
      <h1 class="header m-auto">视频拍摄服务</h1>
      <div class="header-line m-auto"></div>
      <div class="mt-5 row justify-content-center">
        <div class="col-sm-2 col-5">
          <p class="p-header">广告片TVC</p>
          <p class="p-body">丰富广告片经验，满足各种宣传需求</p>
        </div>
        <div class="col-sm-2 col-5">
          <b-img-lazy src="@/assets/home/video-1.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
        <div class="col-sm-2 col-5">
          <p class="p-header">3D / 2D动画</p>
          <p class="p-body">高级动画师、建模师、渲染师、特效包装师，制作各种风格动画短片</p>
        </div>
        <div class="col-sm-2 col-5">
          <b-img-lazy src="@/assets/home/video-2.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
      </div>
      <div class="mt-5 row justify-content-center">
        <div class="col-sm-2 col-5">
          <b-img-lazy src="@/assets/home/video-1.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
        <div class="col-sm-2 col-5">
          <p class="p-header">宣传片</p>
          <p class="p-body">顶级拍摄设备，配备经验丰富的导演摄影及灯光师，达到最佳视觉宣传效果</p>
        </div>
        <div class="col-sm-2 col-5">
          <b-img-lazy src="@/assets/home/video-2.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
        <div class="col-sm-2 col-5">
          <p class="p-header">互联网视频</p>
          <p class="p-body">顶级拍摄团队，优秀演员资源，自有摄影棚，百种场景，满足您的需求</p>
        </div>
      </div>
      <div class="mt-5 row justify-content-center text-white video-banner">
        <div class="mt-5 mb-5 col-10 col-sm-8">
            <div class="row justify-content-center">
              <div class="ml-3 col-sm-3 col-10 content pt-4">
                <p class="p-header text-left">专业服务</p>
                <p class="p-body text-left">为客户提供专业的影视相关指导，贴心的考虑到客户的每一个要求，无限创意的策划构思、专业高效的摄制团队、技术满分的后期制作、精准定位客户的需求，为客户量身定制专属影片。</p>
              </div>
              <div class="ml-3 col-10 col-sm-3 content pt-4">
                <p class="p-header text-left">资历规模</p>
                <p class="p-body text-left">专注：自创办以来完成800多部作品，服务300多家企业。
                  <br>设备：千万级影视设备、播音级录音棚、央视级演播室、电影级灯光应有尽有。
                  <br>团队：大师级策划顾问团队、专业执行制作团队、大师级配音团队，高配团队满足客户需求。
                </p>
              </div>
              <div class="ml-3 col-10 col-sm-3 content pt-4">
                <p class="p-header text-left">优势所在</p>
                <p class="p-body text-left">覆盖全网的媒体资源包括电视台、线上门户网站、视频网站、自媒体、线下广告牌、LED大屏报纸、杂志等全方位整合营销宣传推广服务。并且采用创意策划营销加上专业高效团队，提升制作效率，提高成片品质降低制作时间与成本。让客户在享受专业影视制作服务的同时享受到实惠的价格。</p>
              </div>
            </div>
          </div>
      </div>
      <div class="mt-5">
        <b-img-lazy src="@/assets/home/video-progress.png" fluid alt="Responsive image"></b-img-lazy>
      </div>
      <div class="mt-5">
        <div class="row justify-content-center" style="background-color: #f4f6f8">
          <div class="col-12 col-sm-6">
            <b-img-lazy src="@/assets/home/home1.png" fluid alt="Responsive image"></b-img-lazy>
          </div>
          <div class="col-12 col-sm-6">
            <b-img-lazy src="@/assets/home/home2.png" fluid alt="Responsive image"></b-img-lazy>
          </div>
        </div>
      </div>
    </div>
    <!--直播带货服务-->
    <div class="mt-5 video-shoot-service">
      <h1 class="header m-auto">直播带货服务</h1>
      <p class="mt-2 p-body">优质网红带货资源矩阵 4000平米直播场地 覆盖10亿＋流量</p>
      <div>
        <div class="row justify-content-center">
          <div class="col-sm-8">
            <div class="row justify-content-center">
                <div class="col-6 col-sm-3" v-for="(item,index) in liveBroadcast"
                :key="index">
                  <b-card
                    :img-src=item.img
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text class="p-body">
                      {{item.text}}
                    </b-card-text>
                  </b-card>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card text-white text-center text-wrap mt-5" style="height: 6rem;width: 100%;background-color:#eb5027">
          <p class="p-header pt-4">美妆、时尚、穿搭、美食、母婴等高品质KOL打入核心圈，消费者对产品进行深度解读和场景化种草.</p>
      </div>
    </div>
    <!--公关媒介服务-->
    <div class="mt-5 video-shoot-service">
      <h1 class="header m-auto">公关媒介服务</h1>
      <p class="mt-2 p-body">全面的媒体资源，一站式解决您的媒体传播需求</p>
      <div class="header-line m-auto"></div>
      <div class="public-service">
          <div class="mt-5 row justify-content-center text-white pt-5 pb-5">
            <div class="mt-3 col-8 col-sm-6">
              <div class="row justify-content-center">
                <div class="col-5 col-sm-3" v-for="(item,index) in publicService"
                :key="index">
                  <b-img-lazy :src=item.img fluid alt="Responsive image"></b-img-lazy>
                  <p class="p-body">{{item.text}}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <p class="mt-4 text-center text-wrap p-body">提升企业价值，拓展媒体资源，维护媒体关系。提升企业知名度，传播企业的品牌定位和内涵。</p>
      <div class="mt-5">
        <div class="mt-5 row justify-content-center">
              <div class="col-6 col-sm-2" v-for="(item,index) in publicService2"
                   :key="index">
                <b-img-lazy :src=item.img fluid alt="Responsive image"></b-img-lazy>
                <p class="p-body">{{item.text}}</p>
              </div>
        </div>
      </div>
      <div class="cooperative-customers">
      </div>
    </div>
    <!--帆番商学院-->
    <div class="mt-5 video-shoot-service">
      <h1 class="header m-auto">帆番商学院</h1>
      <div class="header-line m-auto"></div>
      <b-card no-body class="overflow-hidden" style="border:0">
        <b-row no-gutters class="mt-3 justify-content-center">
          <b-col md="4" style="background-color: #f4f6f8">
            <b-card-body>
              <b-card-text class="p-body text-left" style="padding: 3.4375rem 3rem 0 3rem;">
                帆番商学院拥有专业的服务团队，为企业提供品牌营销一站式托管运营服务，致力于帮助企业在品牌营销中走过从0到1的发展过程，高性价比解决企业品牌营销无思路、招人难、用人成本高、管理烦等痛点。
                帆番传播策划运营团队成员均来自百度、腾讯、微软、华为及大型互联网公司，能够轻松帮助企业连接互联网，助力企业品牌抢占品牌营销阵地。
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="4">
            <b-card-img-lazy src="@/assets/home/school-right.png" class="rounded-0"></b-card-img-lazy>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body class="overflow-hidden ffcb-main" style="border:0">
        <b-row no-gutters class="mt-3 justify-content-left">
          <b-col md="6">
            <b-card-img-lazy src="@/assets/home/school-left.png" class="rounded-0"></b-card-img-lazy>
          </b-col>
          <b-col md="4">
            <h1 class="header m-0 text-left ml-4 mt-4 d-none d-lg-block">帆番传播</h1>
            <div class="header-line d-none d-lg-block" style="margin-left: 4rem"></div>
            <b-card-body class="p-5 text-white ffcb" style="background-color: #eb5027">
              <b-card-text class="p-body text-left">
                帆番传播成立于2015年，公司主要项目有：短视频营销、抖音代运营、新媒体业务等，擅长在互联网领域的传播，并积累了大量的媒体 合作资源，为上市公司、大中型公司以及中小企业提供量身定制的一站式互联网媒体营销推广方案。
                具有丰富行业经验以及国内高等艺术院校的编导、策划等精英人士，拥有二十余人专业执行团队，以专业化、规范化、高效率的团队 协作之力为客户提供更专业、更全面、更优质的广告服务。
                公司奉行“创意行销、创意传播，为客户提供有效服务”的理念，以实现客户价值利益最大化为目标。为客户提供品牌营销全方位的解决方案，成为成长型品牌不可或缺的战略合作伙伴。
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <!--服务保障-->
    <div class="mt-5 video-shoot-service">
      <h1 class="header m-auto">服务保障</h1>
      <div class="header-line m-auto"></div>
      <div class="mt-5 row justify-content-center">
        <div class="mt-3 col-sm-8">
          <div class="row justify-content-center">
            <div class="col-5 col-sm-3 p-5" v-for="(item,index) in serviceGuarantees"
                 :class="item.bg"
            :key="index">
              <b-img-lazy :src=item.img fluid alt="Responsive image"></b-img-lazy>
              <p class="text-white pt-4">{{item.title}}</p>
              <p class="text-white p-body">{{item.text}}</p>
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
      name: "Home",
      data(){
          return{
            banner:[{
                url:require('../../assets/home/banner1.jpg')
              },],
            //直播带货
            liveBroadcast:[
              {
                img:require('@/assets/home/live-card-1.png'),
                text:'网红带货合作资源'
              },{
                img:require('@/assets/home/live-card-2.png'),
                text:'全面覆盖核心消费人群'
              },{
                img:require('@/assets/home/live-card-3.png'),
                text:'专业一体化营销服务'
              },{
                img:require('@/assets/home/live-card-4.png'),
                text:'实力打造高效流量渠道'
              },
            ],
            //公关媒介服务
            publicService:[
              {
                img:require('@/assets/home/zhuanxie.png'),
                text:'文章撰写'
              },{
                img:require('@/assets/home/wenzhangfabu.png'),
                text:'文章发布'
              },{
                img:require('@/assets/home/weihu.png'),
                text:'媒体维护'
              },{
                img:require('@/assets/home/jiance.png'),
                text:'媒体监测'
              },
            ],
            publicService2:[
              {
                img:require('@/assets/home/meiti.png'),
                text:'5000多家网媒'
              },{
                img:require('@/assets/home/Broadcast-rafiki.png'),
                text:'30余家电视台'
              },{
                img:require('@/assets/home/pingtai.png'),
                text:'20多家视频平台'
              },{
                img:require('@/assets/home/wanghong.png'),
                text:'5000个网红达人'
              },
            ],
            //服务保障
            serviceGuarantees:[
              {
                img:require('@/assets/home/shield-ok.png'),
                title:'雇主保障',
                text:'已加入雇主保障计划让您后顾无忧',
                bg:'fuwu-bg1'
              },{
                img:require('@/assets/home/stopwatch.png'),
                title:'服务承诺',
                text:'保证原创、让您的项目在约定时间内达到预期效果',
                bg:'fuwu-bg2'
              },{
                img:require('@/assets/home/call-recieved.png'),
                title:'完善售后',
                text:'设计过程中遇到问题随时致电省力省心',
                bg:'fuwu-bg3'
              },{
                img:require('@/assets/home/book.png'),
                title:'无忧托管',
                text:'一键托管，项目总监24小时保持在线',
                bg:'fuwu-bg4'
              },
            ],
          }
      },
      mounted() {
        getMediaList('banner').then((res)=>{
          this.banner=res;
         console.log('banner',res)
        })
      }
    }
</script>

<style scoped>
.img-content{
  position: absolute;
  left:20%;
  width: 21.5rem;
  height: 100%;
  background-color: rgba(0, 0, 0,0.5);
  /*opacity: 0.5;*/
  z-index: 2;
}
.list-content{
  padding-top: 3.3125rem;
  opacity: 1;
}
.list-line{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 1px;
  background-color: #cccccc;
  opacity: 0.6;
}
.list-content li{
  font-family: 'SourceHanSansRegular';
  list-style:none;
  color: #aaaaaa;
  /*height: 38px;*/
  padding-bottom: 5px;
}
.list-content h4{
  font-size: 18px;
  margin-bottom: 0;
}
.video-shoot-service .header{
  font-family: 'SourceHanSansBold';
  font-size:2.425rem;
  color: #eb5027;
  font-weight: normal;
  font-stretch: normal;
  margin-top: 6.125rem;
}
.video-shoot-service .header-line{
  width: 8rem;
  height: 0.125rem;
  background-color: #eb5027;
  border-radius: 0.0625rem;
}
.video-banner{
  background-image: url("../../assets/home/video-banner.png");
  background-repeat: no-repeat;
  background-size:100% 100%;
}
.video-banner .content{
  background-color: #eb5027;
  box-shadow: 5px 7px 8px 0px
  rgba(0, 0, 0, 0.16);
  opacity: 0.8;
}
@media screen and (min-width:900px){
  .ffcb{
    margin-top: 6.25rem;
    z-index: 2;
    margin-left: -10rem;
  }
  .ffcb-main{
    margin-top: 7rem;
  }
}
.p-header{
  font-family: 'SourceHanSansBold';
}
.p-body{
  font-family: 'SourceHanSansRegular';
}
  .public-service{
    background-image: url("../../assets/home/public-banner.png");
  }
  .cooperative-customers{
    background-image: url("../../assets/home/cooperativecustomers.png");
  }
  .fuwu-bg1{
    background-image: url("../../assets/home/gzbz.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
  }
  .fuwu-bg2{
    background-image: url("../../assets/home/fwcn.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
  }
  .fuwu-bg3{
    background-image: url("../../assets/home/wssh.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
  }
  .fuwu-bg4{
    background-image: url("../../assets/home/wytg.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
  }
</style>
