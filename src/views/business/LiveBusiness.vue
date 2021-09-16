<template>
  <div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto p-header">服务内容</h1>
      <div class="row justify-content-center">
        <div class="col-sm-8">
          <div class="mt-5 row justify-content-center">
            <div class="col-sm-4 col-5" v-for="(item,index) in serviceContent"
               :class="item.bg"
               :key="index">
            <b-img-lazy :src=item.img fluid alt="Responsive image"></b-img-lazy>
            <p class="p-header">{{ item.title }}</p>
            <div class="m-auto" :class="item.line"></div>
              <p class="pt-4"></p>
            <p class="p-body" v-for="(item,index) in item.text"
               :key="index">{{ item }}</p>
          </div>
          </div>
        </div>
      </div>
      <div class="card text-center text-wrap text-white mt-5 about-tiktok font-weight-bold">
        <p class="p-header" style="padding-top: 4rem;padding-bottom: 2rem">每个直播账号都有一个生长过程</p>
        <p class="p-body">初始化阶段 放量阶段/纠编 精细化运营阶段</p>
        <p class="p-body" style="padding-bottom: 4rem;">账号定位 内容表现形式/试错 内容深耕与延展</p>
      </div>
    </div>
    <div style="margin-top: 4rem">
      <h1 class="header m-auto p-header">与我们合作，下一个火的就是你</h1>
      <div class="card text-center text-wrap mt-5 service-bg font-weight-bold">
        <p class="p-header pt-5">直播代运营，就找帆番传播</p>
        <p class="p-body pt-5">5G时代来临，视频化内容成为未来内容传播的主流</p>
        <p class="p-body">占领碎片化时间，短视频成为年轻人的主要娱乐方式</p>
        <p class="p-body">抖音和快手成为中国最具影响力的短视频平台</p>
        <p class="p-body">抖音日活跃用户突破5亿，人均日使用时长超1小时</p>
        <p class="p-body" style="padding-bottom: 2rem;">众多企业呈井喷式涌入直播行业，并占据内容的前沿阵地</p>
      </div>
      <p class="p-header m-auto pt-5">帆番传播代运营优势</p>
      <div class="mt-5">
        <div class="row justify-content-center">
            <div class="col-6 col-sm-2" v-for="(item,index) in NextContent"
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
    </div>
  </div>
</template>

<script>
    export default {
      name: "LiveBusiness",
      data(){
        return{
          serviceContent:[
            {
              img:require('@/assets/business/LiveBusiness/21.png'),
              title:'需求分析',
              text:['根据甲方需求及账号调性','提出可行性意见与建议'],
              bg:'',
              line:'line'
            }, {
              img:require('@/assets/business/LiveBusiness/22.png'),
              title:'舆情监控',
              text:['合同期内24小时舆情监控','出现负面情况第一时间处理'],
              bg:'color-bg',
              line:'line1'
            }, {
              img:require('@/assets/business/LiveBusiness/23.png'),
              title:'账号定位',
              text:['制定策划方案','确定账号直播内容方向','及主角人设与甲方达成一致'],
              bg:'',
              line:'line'
            }, {
              img:require('@/assets/business/LiveBusiness/24.png'),
              title:'工作汇报',
              text:['每月第一个星期一向甲方提供上月','直播数据月报和运营期结束后','向甲方提供运营全期结案报告'],
              bg:'color-bg',
              line:'line1'
            }, {
              img:require('@/assets/business/LiveBusiness/25.png'),
              title:'运营团队',
              text:['组建专属运营小组','负责日常对接工作','及直播方案执行'],
              bg:'',
              line:'line'
            }, {
              img:require('@/assets/business/LiveBusiness/26.png'),
              title:'全期例会',
              text:['针对运营过程中','甲方所产生的疑问','乙方全力配合解答'],
              bg:'color-bg',
              line:'line1'
            },
          ],
          NextContent:[
            {
              img:require('@/assets/business/LiveBusiness/11.png'),
              title:'天马行空的策划团队',
              text:'根据品牌需求和直播平台属性，给予私人订制直播营销解决方案。'
            }, {
              img:require('@/assets/business/LiveBusiness/12.png'),
              title:'海归视频摄制团队',
              text:'追求完美的摄影师团队，加之极其注重细节的直播策划团队，为甲方保证每一条直播的质量。'
            }, {
              img:require('@/assets/business/LiveBusiness/13.png'),
              title:'千人KOL素人矩阵',
              text:'干余素人小号资源，直播开播后模拟真人行为进行观看、点赞、评论、转发，促使直播进入更大流量池，自然流量呈井喷式增长。'
            },
          ],
        }
      },
      methods:{}
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
.service-bg{
  /*height: 20rem;*/
  width: 100%;
  background-image: url("../../assets/business/shortvideo/bg-1.png");
  background-repeat: no-repeat;
  background-size:100% 100%;
}
.p-header {
  padding-top: 2rem;
  /*padding-bottom: 2rem;*/
  font-family: 'SourceHanSansBold';
}

.p-body {
  font-family: 'SourceHanSansRegular';
}
.card-body{
  padding: 0;
}
.line1 {
  width: 3rem;
  height: 4px;
  background-color: #ffffff;
  border-radius: 2px;
}

.line {
  width: 3rem;
  height: 4px;
  border-radius: 2px;
  background-color: #eb5127;
}

.line-bot {
  padding-top: 2rem;
}

.col-5 {
  width: 20rem;
  height: 26rem;
  padding-top: 2rem;
}

.color-bg {
  background-image: linear-gradient(-40deg,
  #e61115 0%,
  #ec692e 100%);
  color: #fff;
}

.about-tiktok {
  width: 100%;
  background-image: url("../../assets/business/LiveBusiness/27.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
