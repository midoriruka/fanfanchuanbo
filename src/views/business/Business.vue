<template>
  <div>
    <div>
      <b-img-lazy src="@/assets/business/shortvideo/banner.png" fluid alt="Responsive image"></b-img-lazy>
    </div>
    <div>
      <b-nav id="nav-color" align="center" variant="light">
        <b-nav-item v-for="(item,index) in navObject"
                    :key="index"
                    :to="item.path"
                    :active="actNum==item.num"
                    exact
                    @click="changeActive(item.num)"
        >{{item.title}}</b-nav-item>
      </b-nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Business",
      data(){
          const routerPath = this.$route.path.split('/');
          return{
            actNum:0,
            navObject:[{
              num:0,
              title:'短视频营销',
              path:'/business'
            },{
              num:1,
              title:'视频制作',
              path:'/business/VideoMaking'
            },{
              num:2,
              title:'直播业务',
              path:'/business/LiveBusiness'
            },{
              num:3,
              title:'品牌营销',
              path:'/business/BrandMarket'
            },{
              num:4,
              title:'电商代运营',
              path:'/business/ElectronicBusiness'
            },
            ],
            path:routerPath,
          }
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          const path=to.path.split('/');
          if(path.length<3){
            vm.actNum=0;
          }else if(path[2]=='VideoMaking'){
            vm.actNum=1;
          }else if(path[2]=='LiveBusiness'){
            vm.actNum=2;
          }else if(path[2]=='BrandMarket'){
            vm.actNum=3;
          }else if(path[2]=='ElectronicBusiness'){
            vm.actNum=4;
          }
        });
      },
      methods:{
        changeActive(val){
          this.actNum=val;
        },
      }
    }
</script>

<style scoped>
  .item-link{
    color: rgb(0,0,0);
    background-color: #fff;
  }
  .active{
    color: #eb5027!important;
    border-bottom: 2px solid #eb5027;
  }
  #nav-color{
    margin-top: 6rem;
    border-bottom: 1px solid #eb5027;
  }
  #nav-color a{
    color:#333333;
    /*border-bottom: 1px solid #eb5027;*/
    padding-bottom: 1.5rem;
  }
</style>
