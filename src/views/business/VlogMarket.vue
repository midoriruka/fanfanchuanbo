<template>
    <div style="margin-top: 4rem">
      <div class="card text-center text-wrap text-white mt-5 service-bg font-weight-bold" style="font-size: 20px">
        <p class="p-body pt-5">好内容，好生意</p>
        <p class="p-body">制作短视频成本太贵怎么办？</p>
        <p class="p-body">帆番传播，只要 <span style="font-size: 30px">698</span> 起</p>
        <p class="p-body pb-5">占领流量入口、打造品牌IP、打通营销路径</p>
      </div>
      <div class="mt-5" style="background-color: #f4f6f8">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6">
            <b-img-lazy src="@/assets/business/shortvideo/51.png" fluid alt="Responsive image"></b-img-lazy>
          </div>
          <div class="col-12 col-sm-6">
            <b-img-lazy src="@/assets/business/shortvideo/52.png" fluid alt="Responsive image"></b-img-lazy>
          </div>
        </div>
      </div>
      <!--我们了解每一个热门领域-->
      <h1 class="header m-auto p-header pt-5">我们了解每一个热门领域</h1>
      <h1 class="header m-auto p-header">OUR ADVANTAGES</h1>
      <div class="mt-3 row justify-content-center">
        <div class="col-12 col-sm-8" v-for="(item,index) in serviceContent"
             :key="index">
          <div class="row justify-content-center">
            <div class="col-6 col-sm-3" v-for="(item,index) in item"
                 :key="index">
              <div style="margin: 10px;background-color: #eb5027;padding: 29px">
                <div class="m-auto img-wrap">
                  <b-img-lazy :src=item.img fluid alt="Responsive image"></b-img-lazy>
                </div>
                <p class="p-body text-white" v-for="(title,index) in item.title"
                   :key="index">{{title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--公司结构-->
      <h1 class="header m-auto p-header pt-5">公司结构</h1>
      <h1 class="header m-auto p-header">COMPANY STRUCTURE</h1>
      <div style="background-color: #f4f6f8">
        <div class="mt-5 row justify-content-center pt-3 pb-3">
              <div class="col-5 col-sm-2" v-for="(item,index) in companyStructure"
                   :key="index">
                <b-img-lazy :src=item.img fluid alt="Responsive image"></b-img-lazy>
                <p class="p-header pt-3">{{item.title}}</p>
                <p class="p-body" v-for="(text,index) in item.text"
                   :key="index">{{text}}</p>
              </div>
        </div>
      </div>
      <!--运营流程-->
      <h1 class="header m-auto p-header pt-5">运营流程</h1>
      <h1 class="header m-auto p-header">OPERATION PROCESS</h1>
      <div class="mt-5 row justify-content-center">
        <div class="col-12 col-sm-8">
          <b-img-lazy src="@/assets/business/shortvideo/publish.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
      </div>
      <!--客户案例-->
      <h1 class="header m-auto p-header pt-5">客户案例</h1>
      <h1 class="header m-auto p-header">CUSTOMER CASE</h1>
      <div class="mt-5 row justify-content-center">
        <div class="col-12 col-sm-12">
          <b-img-lazy src="@/assets/business/shortvideo/new_1.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
      </div>
      <h1 class="header m-auto p-header pt-5">案例展示</h1>
      <h1 class="header m-auto p-header">CASE SHOW</h1>
      <div class="mt-5 row justify-content-center">
        <div class="col-12 col-sm-12">
          <b-img-lazy src="@/assets/business/shortvideo/new_2.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
      </div>
      <h1 class="header m-auto p-header pt-5">团队优势</h1>
      <h1 class="header m-auto p-header">TEAM ADVANTAGE</h1>
      <div class="mt-5 row justify-content-center">
        <div class="col-12 col-sm-12 mt-1">
          <b-img-lazy src="@/assets/business/shortvideo/new_3.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
        <div class="col-12 col-sm-12 mt-1">
          <b-img-lazy src="@/assets/business/shortvideo/new_4.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
        <div class="col-12 col-sm-12 mt-1">
          <b-img-lazy src="@/assets/business/shortvideo/new_5.png" fluid alt="Responsive image"></b-img-lazy>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "VlogMarket",
      data(){
          return{
            serviceContent:[
              [{
                img:require('@/assets/business/shortvideo/41.png'),
                title:['明星','STAR'],
              },{
                img:require('@/assets/business/shortvideo/42.png'),
                title:['时尚','FASHION'],
              },{
                img:require('@/assets/business/shortvideo/43.png'),
                title:['美妆','MAKE UP'],
              },{
                img:require('@/assets/business/shortvideo/44.png'),
                title:['美食','DELICIOUS FOOD'],
              },
              ],[{
                img:require('@/assets/business/shortvideo/45.png'),
                title:['音乐','MUSIC'],
              },{
                img:require('@/assets/business/shortvideo/46.png'),
                title:['电商','ONLINE RETAILERS'],
              },{
                img:require('@/assets/business/shortvideo/47.png'),
                title:['游戏','GAME'],
              },{
                img:require('@/assets/business/shortvideo/48.png'),
                title:['影视','MOVIES'],
              },],
            ],
            //公司结构
            companyStructure:[
              {
                img:require('@/assets/business/shortvideo/01.png'),
                title:'商务部',
                text:['负责全国范围内的销售任务']
              },{
                img:require('@/assets/business/shortvideo/02.png'),
                title:'创意部',
                text:['负责进行项目创意输出','及脚本制作']
              },{
                img:require('@/assets/business/shortvideo/03.png'),
                title:'制作部',
                text:['能够拍剪多种视频风格', '摄影与后期配合', '高效完成制作任务']
              },{
                img:require('@/assets/business/shortvideo/04.png'),
                title:'运营部',
                text:['负责账号运营、数据监控、舆情管理']
              },
            ],
          }
      },
        methods:{}
    }
</script>

<style scoped>
.header{
  font-size: 2.5rem;
  color: #eb5027;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 4px;
}
.p-header {
  font-family: 'SourceHanSansBold';
}
.p-body{
  font-family: 'SourceHanSansRegular';
}
.service-bg{
  width: 100%;
  background-image: url("../../assets/business/shortvideo/bg-2.png");
  background-repeat: no-repeat;
  background-size:100% 100%;
}
.img-wrap{
  width: 145px;
  height: 114px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
</style>
