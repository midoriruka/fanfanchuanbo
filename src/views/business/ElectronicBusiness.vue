<template>
  <div style="margin-top: 4rem">
    <h1 class="header m-auto p-header">一站式托管电商运营托管服务</h1>
    <p class="p-header font-weight-bold" style="font-size: 20px">提升转化，打造爆款</p>
    <p class="p-header font-weight-bold" style="font-size: 20px">传统企业为什么做不好电商？</p>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10">
        <div class="row justify-content-center">
          <div class="pt-5 col-6 col-sm-2" v-for="(item,index) in problemContent" :key="index">
            <b-img-lazy :src=item.img fluid alt="Responsive image"></b-img-lazy>
            <p class="p-header">{{item.title}}</p>
            <p class="p-body p-reason" v-for="(item,index) in item.text" :key="index">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card text-center text-wrap mt-5 pb-5 about-tiktok">
      <p class="p-header text-white" style="padding-top: 2.5rem;">为何要找帆番传播电商托管</p>
      <div class="row text-left justify-content-center" v-for="(item,index) in reasonContent"
      :key="index" :class="item.margin">
        <div class="col-sm-10">
          <div class="row justify-content-center">
            <div class="col-sm-3 col-5 col-bg" v-for="(item,index) in item.content"
                 :key="index">
              <p class="p-header">{{item.title}}</p>
              <p class="p-body" v-for="(text,index) in item.text"
              :key="index">{{text}}</p>
            </div>
          </div>
        </div>
      </div>
      <p class="p-header text-white" style="padding-top: 2.5rem;">把店铺交给帆番传播，您会得到意外的惊喜！</p>
    </div>
    <p class="p-header m-auto pt-5 pb-3">服务内容</p>
    <div class="line m-auto"></div>
    <p class="p-body m-auto pt-3 pb-5">一站式托管运营服务，各大电商平台专业代运营服务</p>
    <div class="mt-3 row justify-content-center">
      <div class="col-10 col-sm-8" v-for="(item,index) in serviceContent"
      :key="index">
        <div class="row justify-content-center">
          <div class="col-5 col-sm-3" v-for="(item,index) in item"
               :key="index">
            <b-img-lazy :src=item.img fluid alt="Responsive image"></b-img-lazy>
            <p class="p-body">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <p class="p-header">为您提供一站式电商服务</p>
    <div class="row justify-content-center success-start">
      <div class="col-sm-8">
        <div class="mt-5 row justify-content-center">
          <div class="col-sm-4 col-5" v-for="(item,index) in hostContent"
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
    <p class="p-header pt-5">帆番传播的优势 , 是你成功的开始!</p>
  </div>
</template>

<script>
    export default {
      name: "ElectronicBusiness",
      data(){
        return{
          problemContent:[{
            img:require('@/assets/business/ElectronicBusiness/02.png'),
            title:'没有电商运营基因',
            text:['传统企业重生产','而电商企业重运营'],
          },{
            img:require('@/assets/business/ElectronicBusiness/03.png'),
            title:'没有电商运营经验',
            text:['靠自己摸索','走弯路，周期长']
          },{
            img:require('@/assets/business/ElectronicBusiness/04.png'),
            title:'没有专业运营团队',
            text:['运营、设计、推广不专业'],
          },{
            img:require('@/assets/business/ElectronicBusiness/05.png'),
            title:'没有运营平台资源',
            text:['不管是淘宝、天猫、京东','资源很重要'],
          },{
            img:require('@/assets/business/ElectronicBusiness/06.png'),
            title:'没有运营大数据',
            text:['数据是服务的基础', '无数据不服务'],
          },],
          hostContent:[
            {
              img:require('@/assets/business/ElectronicBusiness/12.png'),
              title:'店铺运营',
              text:['电商一站式服务','同时教您高质量电商运营技术'],
              bg:'',
              line:'line'
            }, {
              img:require('@/assets/business/ElectronicBusiness/13.png'),
              title:'推广宣传',
              text:['直通车，砖展，超级推荐','专业车手，打造爆款，全网营销'],
              bg:'color-bg',
              line:'line1'
            }, {
              img:require('@/assets/business/ElectronicBusiness/14.png'),
              title:'摄影服务',
              text:['拍照修图，按电商需求','拍摄图片'],
              bg:'',
              line:'line'
            }, {
              img:require('@/assets/business/ElectronicBusiness/15.png'),
              title:'网店入驻',
              text:['天猫、京东入驻','下店后付费，安全有保障'],
              bg:'color-bg',
              line:'line1'
            }, {
              img:require('@/assets/business/ElectronicBusiness/16.png'),
              title:'视觉设计',
              text:['提供各大产品类目详情页','直通车钻展图、活动海报','整店装修、定制'],
              bg:'',
              line:'line'
            }, {
              img:require('@/assets/business/ElectronicBusiness/17.png'),
              title:'内容推广',
              text:['直播代运营，对接MCN机构','短视频运营'],
              bg:'color-bg',
              line:'line1'
            },
          ],
          reasonContent:[
            {
              content:[
                {
                  title:'省时间',
                  text:['电商托管代运营多年操盘经验','专业化托管您的店铺']
                },{
                  title:'快盈利',
                  text:['迅速打造爆款','让您马上开店，马上销售']
                },{
                  title:'全方位网店托管',
                  text:['精心定位市场，产品，客户','专业托管您店铺的设计、推广、运营']
                },
              ],
              margin:''
            },{
              content:[
                {
                  title:'大数据',
                  text:['更新各店铺销售数据','数据积累沉淀']
                },{
                  title:'高端设计',
                  text:['主流设计风格，极致交互体验','提升品牌价值']
                },{
                  title:'全方位代运营托管',
                  text:['淘宝、天猫、京东、拼多多... ...','想开什么成功什么']
                },
              ],
              margin:'mt-5'
            }
          ],
          serviceContent:[
            [{
                img:require('@/assets/business/ElectronicBusiness/21.png'),
                title:'淘宝代运营',
              },{
                img:require('@/assets/business/ElectronicBusiness/22.png'),
                title:'天猫代运营',
              },{
                img:require('@/assets/business/ElectronicBusiness/23.png'),
                title:'京东代运营',
              },{
                img:require('@/assets/business/ElectronicBusiness/24.png'),
                title:'拼多多代运营',
              },
            ],[{
               img:require('@/assets/business/ElectronicBusiness/25.png'),
               title:'平台入驻',
             },{
               img:require('@/assets/business/ElectronicBusiness/26.png'),
               title:'爆款打造',
             },{
               img:require('@/assets/business/ElectronicBusiness/27.png'),
               title:'客服外包',
             },{
               img:require('@/assets/business/ElectronicBusiness/28.png'),
               title:'网店装修设计',
             },],
          ]
        }
      },
      methods:{}
    }
</script>

<style scoped>
.header {
  font-size: 2.425rem;
  color: #eb5027;
  font-weight: normal;
  font-stretch: normal;
  margin-top: 6.125rem;
}

.p-header {
  padding-top: 2rem;
  font-family: 'SourceHanSansBold';
}

.p-body {
  font-family: 'SourceHanSansRegular';
}
.about-tiktok {
  width: 100%;
  background-image: url("../../assets/business/ElectronicBusiness/11.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.col-bg{
  margin-right: 6rem;
  width: 17rem;
  /*height: 9rem;*/
  background-color: #ffffff;
  opacity: 0.7;
}
.color-bg {
  background-image: linear-gradient(-40deg,
  #e61115 0%,
  #ec692e 100%);
  color: #fff;
}
.success-start .col-5 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.line {
  width: 3rem;
  height: 4px;
  border-radius: 2px;
  background-color: #eb5127;
}
.line1 {
  width: 3rem;
  height: 4px;
  background-color: #ffffff;
  border-radius: 2px;
}
.line-bot {
  padding-top: 2rem;
}
.p-reason{
  font-size: 14px;
  color: #333333;
  margin: 0;
}
@media screen and (max-width:480px){
  .col-bg{
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    width: 17rem;
    background-color: #ffffff;
    opacity: 0.7;
  }
}
</style>
