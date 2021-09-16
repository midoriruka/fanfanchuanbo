<template>
  <div class="home container-fluid">
    <header>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-container>
          <b-navbar-brand to="/home" href="#">
            <img src="@/assets/home/logo.png" alt="帆番传媒" />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/home" :active="activeNum == 0" exact @click="changeActive(0)">网站首页</b-nav-item>
              <b-nav-item to="/business" :active="activeNum == 1" exact @click="changeActive(1)">业务模块</b-nav-item>
              <b-nav-item to="/case" :active="activeNum == 2" @click="changeActive(2)">客户案例</b-nav-item>
              <b-nav-item to="/school" :active="activeNum == 3" @click="changeActive(3)">帆番商学院</b-nav-item>
              <b-nav-item to="/about" :active="activeNum == 4" @click="changeActive(4)">关于我们</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>
    <main class="content">
      <router-view></router-view>
    </main>
    <footer class="container-fluid foot-wrap" style="background-color: #303437">
      <div class="container">
        <div class="line m-auto"></div>
        <b-row class="justify-content-center">
          <b-col class="mt-5" sm="2" cols="12">
            <h3>短视频营销</h3>
            <ul>
              <li><a href="#">抖音代运营</a></li>
              <li><a href="#">信息流广告投放</a></li>
              <li><a href="#">快手代运营</a></li>
              <li><a href="#">短视频培训</a></li>
            </ul>
          </b-col>
          <b-col class="mt-5" sm="2" cols="12">
            <h3>视频制作</h3>
            <ul>
              <li><a href="#">短视频拍摄</a></li>
              <li><a href="#">企业宣传片</a></li>
              <li><a href="#">MG动画</a></li>
              <li><a href="#">微电影</a></li>
              <li><a href="#">TVC制作</a></li>
              <li><a href="#">三维动画</a></li>
            </ul>
          </b-col>
          <b-col class="mt-5" sm="2" cols="12">
            <h3>品牌营销</h3>
            <ul>
              <li><a href="#">软文推广</a></li>
              <li><a href="#">SEO优化</a></li>
              <li><a href="#">媒体邀约</a></li>
              <li><a href="#">舆情监测</a></li>
            </ul>
          </b-col>
          <b-col class="mt-5" sm="3" cols="12">
            <h3>联系我们</h3>
            <ul>
              <li><a href="#">联系电话：4008-161-160</a></li>
              <li><a href="#">服务邮箱：fanfancb@sina.com</a></li>
              <li style="padding-top: 5rem">
                <b-img-lazy :src="require('../assets/home/foot-logo.png')"></b-img-lazy>
              </li>
            </ul>
          </b-col>
          <b-col class="mt-5" sm="2" cols="0" >
            <div style="padding-left: 15rem" class="d-none d-lg-block" @click="toTop">
              <b-img-lazy :src="require('../assets/home/top.png')"></b-img-lazy>
            </div>
          </b-col>
        </b-row>
        <div class="line m-auto"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Main",
  metaInfo: {
    title: '帆番传播', // set a title
    meta: [{             // set meta
      name: '帆番传播',
      content: '帆番传播'
    },
      {
        name: 'description',
        content: '帆番传播'
      }],
    link: [{ // set link
      rel: 'asstes',
      href: 'https://assets-cdn.github.com/'
    }]
  },
  data(){
    return {
      activeNum: 0
    }
  },
  watch:{
    // 监听 this.$route.path     watch监听非DOM元素的改变
    '$route':'getPath'
  },
  methods:{
    changeActive(num){
      this.activeNum=num;
    },
    toTop(){
      scrollTo(0,0);
    },
    getPath(){
      console.log(this.$route.path);
      this.activeNum = 1
    }
  }
}
</script>

<style scoped>
#nav_collapse {
  font-size: 18px;
  color: #999999;
  font-family: 'SourceHanSansBold';
}

.navbar {
  padding: 0;
}

/*.navbar-nav {*/
/*  height: 94px;*/
/*  line-height: 79px;*/
/*}*/
@media screen and (min-width:900px){
  .navbar-nav {
    height: 94px;
    line-height: 79px;
  }
}

.active {
  background-image: linear-gradient(-42deg, #e60c14 0%, #ec692e 100%);
  color:#fff!important;
}
.foot-wrap{
  padding: 5.375rem 1rem 5.375rem 1rem;
  margin-top: 6rem;
}
  .foot-wrap h3{
    font-family: 'SourceHanSansBold';
    font-size: 24px;
    color: #ffffff;
  }
  .foot-wrap a{
    font-family: 'SourceHanSansRegular';
    font-size: 16px;
    color: #aaaaaa;
  }
  .foot-wrap li{
     list-style:none;
    padding-top: 1.375rem;
   }
.foot-wrap ul{
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 2.375rem;
}
  .foot-wrap .line{
    /*width: 70rem;*/
    height: 0.125rem;
    background-color: #595959;
    border-radius: 0.0625rem;
  }

</style>
