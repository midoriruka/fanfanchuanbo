<template>
    <div>
      <a-layout>
        <a-layout-sider :style="{height: '100vh',width:'208px',backgroundColor:'#fff' }">
          <div class="logo" style="width: 208px;height: 60px;margin-top: 16px">
            <img src="@/assets/admin/logo.png" alt="">
            <span style="font-size: 18px;color: #e34319;padding-left: 5px">帆番后台管理系统</span>
          </div>
          <a-menu style="" mode="vertical" @click="handleClick">
            <a-menu-item key="1" style="width: 200px">
              <a-icon type="picture" />
              banner管理
            </a-menu-item>
            <a-menu-item key="2" style="width: 200px">
              <a-icon type="container" />
              客户案例&emsp;
            </a-menu-item>
            <a-menu-item key="3" style="width: 200px">
              <a-icon type="team" />
              关于我们&emsp;
            </a-menu-item>
            <a-menu-item key="4" style="width: 200px">
              <a-icon type="book" />
              帆番商学院
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header :style="{ background: '#fff', padding: 0,height:'64px' }">
            <div style="float: right;margin-right: 85px">
              <img src="@/assets/admin/person.png" alt="">
              <span style="font-size: 14px;color: #999999;padding-left: 10px">fanfan</span>
            </div>
          </a-layout-header>
          <div style="height: 60px;background-color: #ffffff;">
            <p class="text-left" style="font-size: 20px;color: #000000;line-height: 29px;margin: 0 0 0 20px">{{headerContent.title}}</p>
            <p class="text-left" style="margin: 0 0 0 20px">{{headerContent.description}}</p>
          </div>
          <a-layout-content class="content" :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', }" >
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </div>
</template>

<script>
export default {
  name: "index",
  data(){
      return {
        headerContent:{
          title:'banner管理',
          description:'用于上传及修改首页banner',
        }
      }
  },
  methods:{
    handleClick(e) {
      console.log('click ', e);
      switch (e.key){
        case '1':
          this.headerContent={
            title:'banner管理',
            description:'用于上传及修改首页banner',
          }
          this.$router.push('/admin');
          break;
        case '2':
          this.headerContent = {
            title:'客户案例',
            description:'用于上传及修改客户案例视频',
          }
          this.$router.push('/admin/case');
          break;
        case '3':
          this.headerContent = {
            title:'关于我们',
            description:'用于上传团队照片及招聘信息',
          }
          this.$router.push('/admin/about');
          break;
        case '4':
          this.headerContent = {
            title:'帆番商学院',
            description:'用于上传新闻资料',
          }
          this.$router.push('/admin/school');
          break;
        default:
          break;
      }
    },
  }
}
</script>

<style scoped>
.content{
  height: calc(100% - 160px);
}
</style>
