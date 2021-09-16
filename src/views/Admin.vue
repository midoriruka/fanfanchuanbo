<template>
  <!-- 登录页面-->
  <div>
    <div class="bg">
      <div class="login-form">
        <div class="title">
          帆番后台管理系统
        </div>
        <div style="width: 66%;margin-left: 17%">
          <a-input ref="userNameInput" v-model="userName" placeholder="请输入用户名" style="margin-top: 12%;">
            <a-icon slot="prefix" type="user" />
          </a-input>
          <a-input ref="userNameInput" v-model="passWord" placeholder="请输入密码" style="margin-top: 4%">
            <a-icon slot="prefix" type="key" />
          </a-input>
          <a-button class="login-btn" block style="" @click="login">
            登陆
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data(){
    return {
      userName:'',
      passWord:'',
    }
  },
  methods:{
    login(){
      if(this.userName=='fanfan'&&this.passWord=='fanfan123'){
        this.$router.push('/admin');
      }else{
        this.$message.error('用户名或密码错误');
      }
    }
  }
}
</script>

<style scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/admin/bg.png") no-repeat center 0;
  background-size: contain;
}
.login-form{
  position: absolute;
  top:20%;
  right: 10%;
  width: 32%;
  height: 57%;
  background-color: #ffffff;
  box-shadow: 0 0 15px 1px rgba(25, 25, 25, 0.08);
  border-radius: 8px;
}
.title{
  margin-top: 22%;
  font-size: 34px;
  line-height: 29px;
  color: #e34319;
}
.login-btn{
  margin-top: 6%;
  background-color: #e34319;
  border-radius: 4px;
  color:#ffffff;
}
</style>
