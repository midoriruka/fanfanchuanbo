<template>
  <div>
    <div class="module">
      <h1 class="header m-auto p-header">优势对比</h1>
      <div class="mt-5 row justify-content-center">
        <div class="col-sm-2 col-5">
          <p class="p-header">拼服务</p>
          <p class="p-body">建立项目制作群组项目</p>
          <p class="p-body">全程实时与技术人员沟通</p>
          <p class="p-body">配备1V1项目经理</p>
          <p class="p-body">把控项目进度</p>
        </div>
        <div class="col-sm-2 col-5 color-bg">
          <p class="p-header">拼质量</p>
          <p class="p-body">每个项目配备技术总监</p>
          <p class="p-body">实时把控项目细节</p>
          <p class="p-body">内部自有品控环节</p>
          <p class="p-body">保障项目效果和质量</p>
        </div>
        <div class="col-sm-2 col-5">
          <p class="p-header">拼效率</p>
          <p class="p-body">每个项目均安排团队</p>
          <p class="p-body">进行制作把控</p>
          <p class="p-body">以便达到工期短、质量高</p>
          <p class="p-body">服务好的最终效果</p>
        </div>
        <div class="col-sm-2 col-5 color-bg">
          <p class="p-header">拼策划</p>
          <p class="p-body">每个项目都会配备</p>
          <p class="p-body">相应的策划团队</p>
          <p class="p-body">最快2小时出方案</p>
          <p class="p-body">让您安心、省心</p>
        </div>
      </div>
      <div class="mt-5 row justify-content-center">
        <div class="col-sm-2 col-5 color-bg">
          <p class="p-header">拼成片</p>
          <p class="p-body">每个项目最低输出标准为</p>
          <p class="p-body">1920*1080分辨率标准</p>
          <p class="p-body">让您可以在</p>
          <p class="p-body">各种场景进行使用</p>
        </div>
        <div class="col-sm-2 col-5">
          <p class="p-header">拼售后</p>
          <p class="p-body">每个项目都是免费修改至满意</p>
          <p class="p-body">就算后期定稿后</p>
          <p class="p-body">有一定的小修改</p>
          <p class="p-body">我们也是及时反应</p>
        </div>
        <div class="col-sm-2 col-5 color-bg">
          <p class="p-header">拼备份</p>
          <p class="p-body">我们为每个项目都会有</p>
          <p class="p-body">长达5年的免费备份</p>
          <p class="p-body">让您在数据丢失的情况下</p>
          <p class="p-body">还能给您提供后期保障</p>
        </div>
        <div class="col-sm-2 col-5" style="padding-top: 11rem">
          <b-img-lazy src="@/assets/home/logo.png" class="pl-3" left fluid alt="Responsive image"></b-img-lazy>
        </div>
      </div>
      <div class="card text-center text-wrap mt-5 about-tiktok font-weight-bold">
        <p class="p-header" style="padding-top: 4rem;">帆番传播</p>
        <p class="p-header">思您所想</p>
        <p class="p-header">达您所需</p>
        <p class="p-header" style="padding-bottom: 4rem;">好的广告来自客户的赞美</p>
      </div>
    </div>
    <div class="module">
      <h1 class="header m-auto p-header mt-5">帆番传播，专注可视化解决方案</h1>
      <div class="mt-5">
        <div class="row justify-content-center">
            <div class="col-6 col-sm-2" v-for="(item,index) in visualizationContent"
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
      <!--<p class="p-header m-auto pt-5">案例观赏</p>-->
      <!--<div class="mt-5">-->
        <!--<div class="row justify-content-center">-->
          <!--<div class="col-6 col-sm-2" v-for="(item,index) in visualizationExamples"-->
               <!--:key="index">-->
            <!--<b-card-->
              <!--tag="article"-->
              <!--style="max-width: 18rem;"-->
              <!--class="mb-2"-->
            <!--&gt;-->
              <!--<b-card-img-lazy :src=item.img class="rounded-0"></b-card-img-lazy>-->
              <!--<b-card-text style="padding: 1rem;">-->
                <!--<p class="p-header">{{item.title}}</p>-->
                <!--<p class="p-body">{{item.text}}</p>-->
              <!--</b-card-text>-->
            <!--</b-card>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <div class="module">
      <h1 class="header m-auto p-header mt-5">每部作品，都是经典，做您想要的实力派</h1>
      <div class="mt-5">
        <div class="row justify-content-center">
          <div class="col-6 col-sm-2" v-for="(item,index) in capabilityContent"
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
      <!--<p class="p-header m-auto pt-5">案例观赏</p>-->
      <!--<div class="mt-5">-->
        <!--<div class="row justify-content-center">-->
            <!--<div class="col-6 col-sm-2" v-for="(item,index) in capabilityExamples"-->
                 <!--:key="index">-->
              <!--<b-card-->
                <!--tag="article"-->
                <!--style="max-width: 18rem;"-->
                <!--class="mb-2"-->
              <!--&gt;-->
                <!--<b-card-img-lazy :src=item.img class="rounded-0"></b-card-img-lazy>-->
                <!--<b-card-text style="padding: 1rem;">-->
                  <!--<p class="p-header">{{item.title}}</p>-->
                  <!--<p class="p-body">{{item.text}}</p>-->
                <!--</b-card-text>-->
              <!--</b-card>-->
            <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
    export default {
      name: "VideoMaking",
      data(){
        return{
          visualizationContent:[
            {
              img:require('@/assets/business/videomake/11.png'),
              title:'影视制作',
              text:'企业宣传片、产品宣传片、人物宣传片、城市宣传片、专题汇报片、TVC广告、网络微电影、微课慕课、信息流广告'
            }, {
              img:require('@/assets/business/videomake/12.png'),
              title:'二维动画',
              text:'MG动画、AE动画、FLASH动画、三渲二动画、逐帧动画、手绘动画、课件动画、剧集动画、抖音动漫'
            }, {
              img:require('@/assets/business/videomake/13.png'),
              title:'三维动画',
              text:'工业流程动画、产品宣传动画、地产三维动画、LOGO片头动画、栏目整套包装、游戏三维动画、直播礼物动画、展厅全息投影'
            }, {
              img:require('@/assets/business/videomake/14.png'),
              title:'其他服务',
              text:'品牌全案策划、形象IP打造、插画海报设计、项目脚本策划、活动全程直播、工业产品建模、游戏原画设计'
            },
          ],
          visualizationExamples:[
            {
              img:require('@/assets/business/shortvideo/36.png'),
              title:'案例名称',
              text:'案例简介的内容'
            },{
              img:require('@/assets/business/shortvideo/36.png'),
              title:'案例名称',
              text:'案例简介的内容'
            },{
              img:require('@/assets/business/shortvideo/36.png'),
              title:'案例名称',
              text:'案例简介的内容'
            },{
              img:require('@/assets/business/shortvideo/36.png'),
              title:'案例名称',
              text:'案例简介的内容'
            },
          ],
          capabilityContent:[
            {
              img:require('@/assets/business/videomake/11.png'),
              title:'影视制作',
              text:'提供方案策划、脚本分镜、影视拍摄、演员经济、剪辑特效、调光调色、配音配乐等一站式服务。其中包含宣传片制作、TVC广告、微电影、抖音视频、活动全程直播等多项服务。'
            }, {
              img:require('@/assets/business/videomake/12.png'),
              title:'二维动画',
              text:'提供解说词策划、线稿分镜、人物设计、场景设计、动画制作、剪辑合成、配音配乐等一站式服务，其中包含MG动画、FLASH动画、AE动画、剧集动画、逐帧动画、课件动画等多项服务。'
            }, {
              img:require('@/assets/business/videomake/13.png'),
              title:'三维动画',
              text:'提供脚本设计、模型制作、材质贴图、动画制作、渲染合成、配音配乐等一站式服务，其中包含产品三维动画、工业流程三维动画、建筑地产三维动画、C4D广告三维动画等多项服务。'
            },
          ],
          capabilityExamples:[
            {
              img:require('@/assets/business/shortvideo/36.png'),
              title:'案例名称',
              text:'案例简介的内容'
            },{
              img:require('@/assets/business/shortvideo/36.png'),
              title:'案例名称',
              text:'案例简介的内容'
            },{
              img:require('@/assets/business/shortvideo/36.png'),
              title:'案例名称',
              text:'案例简介的内容'
            },{
              img:require('@/assets/business/shortvideo/36.png'),
              title:'案例名称',
              text:'案例简介的内容'
            },
          ]
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .module{
    margin-top: 4rem;
  }
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
  .card-body{
    padding: 0;
  }
  .col-5{
    width: 20rem;
    height: 26rem;
    padding-top: 7rem;
  }
  .color-bg{
    background-image: linear-gradient(-40deg,
    #e61115 0%,
    #ec692e 100%);
    color:#fff;
  }
  .about-tiktok{
    width: 100%;
    background-image: url("../../assets/business/shortvideo/bg-1.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
  }
</style>
