<template>
  <div>
    <div class="mt-5">
      <div class="row justify-content-center" style="background-color: #f4f6f8">
        <div class="col-12 col-sm-6">
          <b-img-lazy src="@/assets/business/BrandMarket/41.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
        <div class="col-12 col-sm-6">
          <b-img-lazy src="@/assets/business/BrandMarket/42.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h1 class="header m-auto p-header">海量网络媒体资源</h1>
      <p class="p-body mt-3" style="color: #333333;">聚焦新闻媒体、自媒体。移动社交网络广告在内的95%媒体资源，形成遍及全网的覆盖状态，通过大数据分析提供全自助媒体投放。</p>
      <div class="row justify-content-center mt-3">
        <div class="col-sm-10">
          <div class="row justify-content-center">
            <div class="col-sm-4 col-10">
              <b-img-lazy src="@/assets/business/BrandMarket/001.png" alt="Responsive image"></b-img-lazy>
            </div>
            <div class="col-sm-4 col-10">
              <b-img-lazy src="@/assets/business/BrandMarket/002.png" alt="Responsive image"></b-img-lazy>
            </div>
            <div class="col-sm-4 col-10">
              <b-img-lazy src="@/assets/business/BrandMarket/003.png" alt="Responsive image"></b-img-lazy>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h1 class="header m-auto p-header">部分行业案例展示</h1>
      <div class="card text-center text-wrap mt-5 pb-5 pt-5 about-tiktok">
        <div class="row text-left justify-content-center" v-for="(item,index) in imgs"
             :key="index" :class="item.margin">
          <div class="col-sm-10">
            <div class="row justify-content-center">
              <div class="col-sm-3 col-5 mt-3" v-for="(img,index) in item.content"
                   :key="index">
                <b-img-lazy :src="img.img" fluid alt="Responsive image"></b-img-lazy>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h1 class="header m-auto p-header">超10,000 家优秀企业已选择帆番传播打造品牌营销</h1>
      <div class="row justify-content-center mt-5">
        <div class="col-sm-12" style="padding-left: 200px">
          <div class="row justify-content-left">
            <div class="col-sm-4 col-10">
              <b-img-lazy src="@/assets/business/BrandMarket/004.png" fluid alt="Responsive image"></b-img-lazy>
            </div>
            <div class="col-sm-4 col-10">
              <b-img-lazy src="@/assets/business/BrandMarket/005.png" fluid alt="Responsive image"></b-img-lazy>
            </div>
            <div class="col-sm-2 col-10">
              <b-img-lazy src="@/assets/business/BrandMarket/006.png" fluid alt="Responsive image"></b-img-lazy>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h1 class="header m-auto p-header">媒体推广成功案例</h1>
      <div class="mt-3">
        <b-img-lazy class="mt-5" src="@/assets/business/BrandMarket/007.png" fluid alt="Responsive image"></b-img-lazy>
        <b-img-lazy class="mt-5" src="@/assets/business/BrandMarket/008.png" fluid alt="Responsive image"></b-img-lazy>
        <b-img-lazy class="mt-5" src="@/assets/business/BrandMarket/009.png" fluid alt="Responsive image"></b-img-lazy>
      </div>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto p-header">帆番传播双微运营标准服务</h1>
      <div style="margin-top: 4rem">
        <b-card no-body class="overflow-hidden ffcb-main" style="border:0;background-color: #f4f6f8">
          <b-row no-gutters class="mt-3 justify-content-left">
            <b-col md="6" class="text-center p-header pl-5">
              <p style="padding-top: 4rem">通过帆番传播专属运营团队+资源匹配</p>
              <p>提供（双微运营+新媒体矩阵+社群+短视频结合直播+精细化运营）</p>
              <p>帮助其实现业绩增长，建立私域流量客户资产</p>
              <b-card-img-lazy src="@/assets/business/BrandMarket/11.png" class="rounded-0" style="max-width: 679px"></b-card-img-lazy>
            </b-col>
            <b-col md="6">
              <div class="header-line d-none d-lg-block" style="margin-left: 4rem"></div>
              <b-card-body class="p-5 ffcb">
                <b-card-text>
                  <p class="p-header" style="padding-top: 4rem">适合什么企业</p>
                  <p class="p-body">希望帮助团队快速建立标准化系统化精细化运营体系</p>
                  <p class="p-body">希望抢占新媒体营销阵地，建立企业私域流量客户资产</p>
                  <p class="p-body">团队人员能力弱，不稳定/没有团队/难招人</p>
                  <p class="p-body">想做新媒体品牌电商，缺资源，想省心一降 低成本</p>
                  <p class="p-header" style="padding-top: 4rem">服务准则</p>
                  <p class="p-body">只做有效果的双微+媒体矩阵运营服务，专注为企业提供营销一站式运营服务</p>
                  <p class="p-body">为企业解决设计用人成本高、质量低、管理烦而定位的设计外包服务商</p>
                  <p class="p-body">致力于帮助企业走过从0到1的发展过程，通过新媒体帮助企业实现其产品的塑造</p>
                  <p class="p-body">产品服务的商业变现；帮助企业连接互联网，顺利转型，助力企业品牌抢占新媒体营销阵地</p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto p-header">帆番传播</h1>
      <h1 class="header m-auto p-header">让品牌更具有生命力</h1>
      <div style="margin-top: 4rem">
        <b-img-lazy src="@/assets/business/BrandMarket/21.png" fluid alt="Responsive image"></b-img-lazy>
      </div>
      <b-card no-body class="overflow-hidden" style="border:0;margin-top: 4rem">
        <b-row no-gutters class="justify-content-center">
          <b-col md="7">
            <b-card-img-lazy src="@/assets/business/BrandMarket/26.png" class="rounded-0"></b-card-img-lazy>
          </b-col>
          <b-col md="3">
            <b-card-body class="text-left mt-3" style="padding: 0 0 0 3rem;">
              <b-card-text  class="part-card-text">
                <p class="p-header count">01</p>
                <p class="p-header" style="font-size: 1.125rem;color: #333333;letter-spacing: 0px;">市场难</p>
                <p class="p-body m-0">高成本引流，因不信任导致转化率低</p>
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="3">
            <b-card-body class="text-left mt-3" style="padding: 0 3rem 0 0;">
              <b-card-text  class="part-card-text">
                <p class="p-header count">02</p>
                <p class="p-header" style="font-size: 1.125rem;color: #333333;letter-spacing: 0px;">发展难</p>
                <p class="p-body m-0">品牌口碑没有建立，发展代理困难重重</p>
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="7">
            <b-card-img-lazy src="@/assets/business/BrandMarket/27.png" class="rounded-0 mt-3" ></b-card-img-lazy>
          </b-col>
          <b-col md="6">
            <b-card-img-lazy src="@/assets/business/BrandMarket/28.png" class="rounded-0 mt-3"></b-card-img-lazy>
          </b-col>
          <b-col md="4">
            <b-card-body class="text-left mt-3" style="padding: 0 0 0 3rem;">
              <b-card-text  class="part-card-text">
                <p class="p-header count">03</p>
                <p class="p-header" style="font-size: 1.125rem;color: #333333;letter-spacing: 0px;">招聘难</p>
                <p class="p-body m-0">人在网上查不到公司信息，不敢应聘</p>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <div class="mt-5">
        <div class="row justify-content-center" >
              <div class="col-6 col-sm-2" v-for="(item,index) in propagationContent"
                   :key="index">
                <b-card
                  tag="article"
                  style="max-width: 18rem;"
                  class="mb-2"
                >
                  <b-card-img-lazy :src=item.img class="rounded-0"></b-card-img-lazy>
                  <b-card-text style="padding: 1rem;">
                    <p class="p-header">{{item.title}}</p>
                    <p class="p-body">{{item.text}}</p>
                  </b-card-text>
                </b-card>
              </div>
        </div>
      </div>
      <p class="p-header m-auto pt-5 font-weight-bold" style="font-size: 20px">红人大号营销推广</p>
      <p class="p-body m-auto pt-5 font-weight-bold">提供一站式网红大号服务！</p>
      <p class="p-body m-auto pb-3 font-weight-bold">用心解决选号，投放，运营，数据等难题。</p>
      <div class="line m-auto"></div>
      <div class="mt-5">
        <b-img-lazy src="@/assets/business/BrandMarket/29.png" fluid alt="Responsive image"></b-img-lazy>
      </div>
      <div class="mt-5">
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <b-img-lazy src="@/assets/business/BrandMarket/30.png" fluid alt="Responsive image"></b-img-lazy>
          </div>
          <div class="col-sm-6">
            <b-img-lazy src="@/assets/business/BrandMarket/31.png" fluid alt="Responsive image"></b-img-lazy>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "BrandMarket",
      data(){
        return{
          propagationContent:[
            {
              img:require('@/assets/business/BrandMarket/22.png'),
              title:'专业策划服务团队',
              text:'我们策划团队会根据客户行业结合客户需求先出大纲再出稿，文章修改到客户满意为止。'
            }, {
              img:require('@/assets/business/BrandMarket/23.png'),
              title:'海归视频摄制团队',
              text:'追求完美的摄影师团队，加之极其注重细节的直播策划团队，为甲方保证每一条直播的质量。'
            }, {
              img:require('@/assets/business/BrandMarket/24.png'),
              title:'承诺对营销效果负责',
              text:'帆番传播对客户承若，对营销效果负责。每个项目做完后，我们都会给客户提供一份详细的结案报告，营销效果展示。'
            }, {
              img:require('@/assets/business/BrandMarket/25.png'),
              title:'品牌合作经验丰富',
              text:'我们策划团队熟悉行业规则为品牌方提供专业建议，树立互联网品牌为品牌方提供专业建议，树立互联网品牌商业价值，抢占消费市场。'
            },
          ],
          imgs:[{
            content:[{
                img:require('@/assets/business/BrandMarket/43.png'),
              },{
                img:require('@/assets/business/BrandMarket/44.png'),
              },{
              img: require('@/assets/business/BrandMarket/45.png'),
            }, {
              img: require('@/assets/business/BrandMarket/46.png'),
            },
            ],
          }, {
            content: [
               {
                img: require('@/assets/business/BrandMarket/47.png'),
              }, {
                img: require('@/assets/business/BrandMarket/48.png'),
              },{
                img: require('@/assets/business/BrandMarket/49.png'),
              }, {
                img: require('@/assets/business/BrandMarket/50.png'),
              },
            ],
          }]
        }
      },
      methods:{
      }
    }
</script>

<style scoped>
.header{
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
.count{
  font-size: 2.375rem;
  color: #444444;
  line-height: 26px;
  letter-spacing: 0px;
}
.part-card-text{
  background-color: #f3f3f3;
  padding:3.4375rem 3.8125rem 3.6825rem 2.9375rem
}
.card-body{
  padding: 0;
}
.line {
  width: 3rem;
  height: 4px;
  border-radius: 2px;
  background-color: #eb5127;
}
@media screen and (max-width:480px){
  .part-card-text {
    padding:1rem
  }
  .count{
    font-size: 1.5rem;
  }
}
.about-tiktok {
  width: 100%;
  background-image: url("../../assets/business/ElectronicBusiness/11.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
