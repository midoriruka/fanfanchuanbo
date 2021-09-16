<template>
  <div>
    <div>
      <b-img-lazy src="@/assets/business/shortvideo/banner.png" fluid alt="Responsive image"></b-img-lazy>
    </div>
    <div style="margin-top: 4rem">
        <h1 class="header m-auto p-header">帆番商学院拥有最专业的服务团队</h1>
    </div>
    <div style="margin-top: 2rem">
      <b-card no-body class="overflow-hidden ffcb-main" style="border:0;background-color: #f4f6f8">
        <b-row no-gutters class="mt-3 justify-content-left">
          <b-col sm="5" md="5" class="text-center p-header">
            <b-card-img-lazy src="@/assets/school/1.png" class="rounded-0" style="max-width: 488px"></b-card-img-lazy>
          </b-col>
          <b-col sm="6" md="6">
            <div class="header-line d-none d-lg-block" style="margin-left: 4rem"></div>
            <b-card-body class="p-5">
              <b-card-text class="text-left text-white">
                <p class="p-body">为企业提供品牌营销一站式托管运营服务</p>
                <p class="p-body">致力于帮助企业在品牌营销中走过从0到1的发展过程</p>
                <p class="p-body">高性价比解决企业品牌营销无思路、招人难、用人成本高、管理烦等痛点</p>
                <p class="p-body">帆番传播策划运营团队成员均来自百度、腾讯、微软、华为及大型互联网公司</p>
                <p class="p-body">能够轻松帮助企业连接互联网，助力企业品牌抢占品牌营销阵地</p>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div style="margin-top: 4rem">
      <div class="row justify-content-center">
        <div class="col-sm-10 mb-3">
          <div class="row justify-content-center">
            <div class="col-sm-4 mb-3" >
              <h1 class="header m-auto p-header">热门资讯</h1>
              <div class="line m-auto"></div>
              <div class="mt-5">
                <listitem v-for="(item, index) in newsList" :key="index" :list-data="item" :border-index="index"></listitem>
              </div>
            </div>
            <div class="col-sm-4 mb-3">
              <h1 class="header m-auto p-header">企业新闻</h1>
              <div class="line m-auto"></div>
              <div class="mt-5">
                  <listitem v-for="(item, index) in companyNewsList" :key="index" :list-data="item" :border-index="index"></listitem>
              </div>
            </div>
            <div class="col-sm-4 mb-3" >
              <h1 class="header m-auto p-header">运营干货</h1>
              <div class="line m-auto"></div>
              <div class="mt-5">
                <listitem v-for="(item, index) in businessKnowledgeList" :key="index" :list-data="item" :border-index="index"></listitem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listitem from '@/components/ListItem'
import { getNews } from '@/api/service';
export default {
  name: "school",
  components: {
    listitem,
  },
  data(){
    return {
      newsList:[],
      companyNewsList:[],
      businessKnowledgeList:[]
    }
  },
  mounted() {
    getNews(0).then(res=>{
      console.log('',res);
      if(res.result){
        this.newsList = res.result;
      }
    })
    getNews(1).then(res=>{
      console.log('',res);
      if(res.result) {
        this.companyNewsList = res.result;
      }
    })
    getNews(2).then(res=>{
      console.log('',res);
      if(res.result) {
        this.businessKnowledgeList = res.result;
      }
    })
  }
}
</script>

<style scoped>

.ffcb-main{
  background-image: url("../../assets/school/11.png");
  /*background-position:center;*/
  /*background-repeat: no-repeat;*/
}
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
  width: 197px;
  height: 4px;
  border-radius: 2px;
  background-color: #eb5127;
}
</style>
