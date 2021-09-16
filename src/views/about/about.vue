<template>
  <div>
    <div>
      <b-img-lazy src="@/assets/about/banner.png" fluid alt="Responsive image"></b-img-lazy>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto p-header">公司介绍</h1>
      <div class="line m-auto"></div>
      <p class="p-body pt-5">北京新奥来国际文化科技有限公司旗下帆番传播</p>
      <p class="p-body">是基于微信、微博、短视频营销等社会媒体快速崛起的背景下成长起来的一家媒体营销策划公司</p>
      <p class="p-body">业务包括短视频营销、抖音代运营、自媒体推广、口碑营销、新媒体等</p>
      <p class="p-body">擅长在互联网及科技领域的传播，并积累了大量的媒体合作资源</p>
      <p class="p-body">为上市公司、大中型公司以及中小企业提供量身定制的一站式互联网媒体营销推广方案</p>
      <p class="p-body">帆番传播运用媒体力量，助您企业实现品牌梦想</p>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto p-header">服务准则</h1>
      <div class="line m-auto"></div>
      <div style="margin-top: 2rem">
        <b-card no-body class="overflow-hidden ffcb-main" style="border:0;background-color: #f4f6f8">
          <b-row no-gutters class="mt-3 justify-content-left">
            <b-col sm="5" md="5" class="text-center p-header">
              <b-card-img-lazy src="@/assets/about/1.png" class="rounded-0" style="max-width: 488px"></b-card-img-lazy>
            </b-col>
            <b-col sm="6" md="6">
              <b-card-body class="p-5">
                <b-card-text class="text-left text-white text-left">
                  <p class="p-body" style="max-width: 504px;line-height: 35px">帆番传播只做有效果的品牌营销服务，
                    专注为企业提供营销一站式运营服务，为企业解决设计用人成本高、质量低、管理烦而定位的设计外包服务商，致力于帮助企业走过从0到1的发展过程，通过专业的运营团队帮助企业实现其产品的塑造以及产品服务的商业变现；帮助企业连接互联网，顺利转型，助力企业品牌抢占新媒体营销阵地</p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto p-header">团队风采</h1>
      <div class="line m-auto"></div>
      <b-card-img-lazy src="@/assets/about/艺术总监.png" class="rounded-0" style="max-width: 1280px"></b-card-img-lazy>
      <b-card-img-lazy src="@/assets/about/后期制作.png" class="rounded-0" style="max-width: 1280px"></b-card-img-lazy>
      <b-card-img-lazy src="@/assets/about/宣传总监.png" class="rounded-0" style="max-width: 1280px"></b-card-img-lazy>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto p-header">招贤纳士</h1>
      <div class="line m-auto"></div>
      <div style="margin-top: 3rem">
        <div class="employ-item text-left" v-for="(item,index) in employInformation" :key="index"
             :class="{ hasBg: (index+1)%2==1}">
          <p class="title">{{item.JobName}}</p>
          <p class="sub-title">【职位描述】</p>
          <div v-for="(desc,index) in item.JobDescription_" :key="index">
            <p>{{desc}}</p>
          </div>
          <p class="sub-title">【任职要求】</p>
          <div v-for="(require,index) in item.RequireMent_" :key="index">
            <p>{{require}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEmployList,getTeamList } from '@/api/service';
export default {
  name: "about",
  data(){
    return {
      teamInformation:{
        top:[{
            img:require('@/assets/about/2.png'),
            name:'创始人&CEO',
            slog:'个人口号',
            introduction:'个人介绍个人介绍',
        }],
        center:[{
            img:require('@/assets/about/3.png'),
            name:'创始人&CEO',
            slog:'个人口号',
            introduction:'个人介绍个人介绍',
          },{
            img:require('@/assets/about/3.png'),
            name:'创始人&CEO',
            slog:'个人口号',
            introduction:'个人介绍个人介绍',
          },],
        bottom:[{
          img:require('@/assets/about/3.png'),
          name:'创始人&CEO',
          slog:'个人口号',
          introduction:'个人介绍个人介绍',
        },{
          img:require('@/assets/about/3.png'),
          name:'创始人&CEO',
          slog:'个人口号',
          introduction:'个人介绍个人介绍',
        },],
      },
      teamInfo:[{
        photo_url:require('@/assets/about/2.png'),
        position:'创始人&CEO',
        slogan:'个人口号',
        introduction:'个人介绍个人介绍'
      },{
        photo_url:require('@/assets/about/3.png'),
        position:'创始人&CEO',
        slogan:'个人口号',
        introduction:'个人介绍个人介绍'
      },{
        photo_url:require('@/assets/about/3.png'),
        position:'创始人&CEO',
        slogan:'个人口号',
        introduction:'个人介绍个人介绍'
      },{
        photo_url:require('@/assets/about/3.png'),
        position:'创始人&CEO',
        slogan:'个人口号',
        introduction:'个人介绍个人介绍'
      },{
        photo_url:require('@/assets/about/3.png'),
        position:'创始人&CEO',
        slogan:'个人口号',
        introduction:'个人介绍个人介绍'
      },
      ],
      employInformation:[
        {
          jobName:'销售代表',
          jobDescription:[],
        }
      ]
    }
  },
  mounted() {
    getTeamList().then(res=>{
      if(res.result){
        this.teamInfo = res.result;
      }
    })
    getEmployList().then(res=>{
      console.log('职位信息',res.result);
      this.employInformation = res.result;
      this.employInformation.forEach(e=>{
        e.JobDescription_=e.JobDescription.split('；');
        e.RequireMent_=e.RequireMent.split('；');
      })
    })
  }
}
</script>

<style scoped>
.header{
  font-size: 2.425rem;
  color: #eb5027;
  font-weight: normal;
  font-stretch: normal;
  padding-bottom: 1.5rem;
}
.p-header{
  font-family: 'SourceHanSansBold';
}
.p-body{
  font-family: 'SourceHanSansRegular';
}
.line {
  width: 128px;
  height: 2px;
  background-color: #eb5027;
  border-radius: 1px;
}
.ffcb-main{
  background-image: url("../../assets/school/11.png");
  /*background-position:center;*/
  /*background-repeat: no-repeat;*/
}
.employ-item{
  padding: 4rem 20% 3rem 20%;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
}
.sub-title{
  font-size: 1.1rem;
  font-weight: bold;
}
.hasBg{
  background-color: #eb5027;
  color:#fff;
}
</style>
