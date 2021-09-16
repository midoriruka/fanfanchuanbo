<template>
  <div>
    <div>
      <a-tabs default-active-key="1" @tabClick="callback">
        <a-tab-pane key="1" tab="团队照片">
          <div style="margin-top: 4rem">
            <div class="mt-5 row justify-content-center">
              <div class="col-sm-8 col-10">
                <div class="row justify-content-center">
                  <div class="col-sm-6 col-6" style="padding: 0">
                    <a-upload
                      action="http://8.131.72.119:8081/team-photo/1"
                      list-type="picture-card"
                      :file-list="fileList1"
                      @preview="handlePreview"
                      @change="handleChange1"
                      method="post"
                    >
                      <div v-if="fileList1.length < 1">
                        <a-icon type="plus" />
                        <div class="ant-upload-text">
                          选择上传照片
                        </div>
                      </div>
                    </a-upload>
                  </div>
                  <div class="col-sm-6 col-6" style="padding: 0 5px 0 5px">
                    <a-input class="pt-2" v-model="teamInfo[0].position" addon-before="职位" placeholder="请输入职位名称" />
                    <a-input class="pt-2 pb-2" v-model="teamInfo[0].slogan" addon-before="口号" placeholder="请输入个人口号" />
                    <a-textarea class="pt-3" v-model="teamInfo[0].introduction" addon-before="简介" placeholder="请输入个人简介" :rows="4" />
                  </div>
                </div>
                <div class="row justify-content-center" >
                  <div class="col-sm-3 col-5" style="padding: 0">
                    <a-upload
                      action="http://8.131.72.119:8081/team-photo/2"
                      list-type="picture-card"
                      :file-list="fileList2"
                      @preview="handlePreview"
                      @change="handleChange2"
                      method="post"
                    >
                      <div v-if="fileList2.length < 1">
                        <a-icon type="plus" />
                        <div class="ant-upload-text">
                          选择上传照片
                        </div>
                      </div>
                    </a-upload>
                  </div>
                  <div class="col-sm-3 col-5" style="padding: 0 5px 0 5px">
                    <a-input class="pt-2" v-model="teamInfo[1].position" addon-before="职位" placeholder="请输入职位名称" />
                    <a-input class="pt-2 pb-2" v-model="teamInfo[1].slogan" addon-before="口号" placeholder="请输入个人口号" />
                    <a-textarea class="pt-3" v-model="teamInfo[1].introduction" addon-before="简介" placeholder="请输入个人简介" :rows="4" />
                  </div>
                  <div class="col-sm-3 col-5" style="padding: 0">
                    <a-upload
                      action="http://8.131.72.119:8081/team-photo/3"
                      list-type="picture-card"
                      :file-list="fileList3"
                      @preview="handlePreview"
                      @change="handleChange3"
                      method="post"
                    >
                      <div v-if="fileList3.length < 1">
                        <a-icon type="plus" />
                        <div class="ant-upload-text">
                          选择上传照片
                        </div>
                      </div>
                    </a-upload>
                  </div>
                  <div class="col-sm-3 col-5" style="padding: 0">
                    <a-input class="pt-2" v-model="teamInfo[2].position" addon-before="职位" placeholder="请输入职位名称" />
                    <a-input class="pt-2 pb-2" v-model="teamInfo[2].slogan" addon-before="口号" placeholder="请输入个人口号" />
                    <a-textarea class="pt-3" v-model="teamInfo[2].introduction" addon-before="简介" placeholder="请输入个人简介" :rows="4" />
                  </div>
                </div>
                <div class="row justify-content-center" >
                  <div class="col-sm-3 col-5" style="padding: 0">
                    <a-input class="pt-2" v-model="teamInfo[3].position" addon-before="职位" placeholder="请输入职位名称" />
                    <a-input class="pt-2 pb-2" v-model="teamInfo[3].slogan" addon-before="口号" placeholder="请输入个人口号" />
                    <a-textarea class="pt-3" v-model="teamInfo[3].introduction" addon-before="简介" placeholder="请输入个人简介" :rows="4" />
                  </div>
                  <div class="col-sm-3 col-5" style="padding: 0">
                    <a-upload
                      action="http://8.131.72.119:8081/team-photo/4"
                      list-type="picture-card"
                      :file-list="fileList4"
                      @preview="handlePreview"
                      @change="handleChange4"
                      method="post"
                    >
                      <div v-if="fileList4.length < 1">
                        <a-icon type="plus" />
                        <div class="ant-upload-text">
                          选择上传照片
                        </div>
                      </div>
                    </a-upload>
                  </div>
                  <div class="col-sm-3 col-5" style="padding: 0">
                    <a-input class="pt-2" v-model="teamInfo[4].position" addon-before="职位" placeholder="请输入职位名称" />
                    <a-input class="pt-2 pb-2" v-model="teamInfo[4].slogan" addon-before="口号" placeholder="请输入个人口号" />
                    <a-textarea class="pt-3" v-model="teamInfo[4].introduction" addon-before="简介" placeholder="请输入个人简介" :rows="4" />
                  </div>
                  <div class="col-sm-3 col-5" style="padding: 0">
                    <a-upload
                      action="http://8.131.72.119:8081/team-photo/5"
                      list-type="picture-card"
                      :file-list="fileList5"
                      @preview="handlePreview"
                      @change="handleChange5"
                      method="post">
                      <div v-if="fileList5.length < 1">
                        <a-icon type="plus" />
                        <div class="ant-upload-text">
                          选择上传照片
                        </div>
                      </div>
                    </a-upload>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a-button style="background-color: #554f4c;border-radius: 19px;
              border-color:#554f4c;margin-right: 10px" type="primary" @click="deleteAllTeamInfo">
                清空数据
              </a-button>
              <a-button style="background-color: #e34319;border-radius: 19px;border-color:#e34319" type="primary" @click="handleTeamSave">
                上传提交团队信息
              </a-button>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="招聘信息" force-render>
          <div class="text-left" v-show="showEdit==1">
            <div class="box text-center" style="padding-top: 100px;" @click="createNewEmploy">
              <div>
                <a-icon type="plus" :style="{ fontSize: '46px' }"/>
                <p style="padding-top: 20px">新的招聘</p>
              </div>
            </div>
            <div class="box" v-for="(item,index) in employList" :key="index">
              <p style="font-size: 14px">{{ item.JobName }}</p>
              <p style="font-size: 12px">【职位描述】</p>
              <p style="font-size: 12px">
                {{item.JobDescription}}
              </p>
              <span class="delete" @click="deleteEmployItem(item.Id)">x</span>
              <p style="font-size: 12px">【任职要求】</p>
              <p style="font-size: 12px">{{item.RequireMent}}</p>
            </div>
          </div>
          <div v-show="showEdit==2">
            <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-form-item label="招聘岗位">
                <a-input v-model="employInfo.job_name" placeholder="请输入招聘岗位名称"/>
              </a-form-item>
              <a-form-item label="职位描述">
                <a-textarea v-model="employInfo.job_description" placeholder="请输入职位描述，以分号隔开" :rows="8" />
              </a-form-item>
              <a-form-item label="任职要求">
                <a-textarea v-model="employInfo.require_ment" placeholder="请输入任职要求，以分号隔开" :rows="8" />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                <a-button style="background-color: #e34319;border-radius: 19px;border-color:#e34319" type="primary" @click="handleEmploySave">
                  上传提交
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
import { getEmployList,postEmployItem,deleteEmployItem,getTeamList,postTeam,deleteAllTeam,deleteTeam } from '@/api/service';
export default {
  name: "AboutAdmin",
  data(){
    return{
      showEdit:1,
      teamInfo:[
        {
          id:1,
        },{
          id:2,
        },{
          id:3,
        },{
          id:4,
        },{
          id:5,
        }
      ],
      employInfo:{
        job_name:'',
        job_description:'',
        require_ment:'',
      },
      employList:[],
      fileList1: [],
      fileList2: [],
      fileList3: [],
      fileList4: [],
      fileList5: [],
    }
  },
  mounted() {
    getTeamList().then(res=>{
      // this.teamInfo = res.result;
      if(res.result){
        if(res.result[0]&&res.result[0].photo_url){
          this.fileList1=[{
            uid:1,
            url:res.result[0].photo_url
          }]
        }
        if(res.result[1]&&res.result[1].photo_url){
          this.fileList2=[{
            uid:2,
            url:res.result[1].photo_url
          }]
        }
        if(res.result[2]&&res.result[2].photo_url){
          this.fileList3=[{
            uid:3,
            url:res.result[2].photo_url
          }]
        }
        if(res.result[3]&&res.result[3].photo_url){
          this.fileList4=[{
            uid:4,
            url:res.result[3].photo_url
          }]
        }
        if(res.result[4]&&res.result[4].photo_url){
          this.fileList5=[{
            uid:5,
            url:res.result[4].photo_url
          }]
        }
        this.teamInfo = res.result;
      }
      console.log('list',res);
    })
    getEmployList().then(res=>{
      this.employList = res.result;
    })
  },
  methods:{
    callback(key) {
      if(key=='2'){
        this.showEdit = 1;
      }
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    //招聘
    createNewEmploy(){
      this.showEdit = 2;
    },
    handleEmploySave(){
      postEmployItem(this.employInfo).then(res=>{
        const { error }=res;
        if(error.code==0){
          getEmployList().then(res=>{
            this.employList = res.result;
          })
          this.showEdit = 1;
          console.log('保存成功');
          this.$message.success('招聘信息上传成功！');
        }else{
          console.log('保存失败');
        }
      })
    },
    deleteEmployItem(id){
      deleteEmployItem(id).then((res)=>{
        if(res.success){
          getEmployList().then(res=>{
            this.employList = res.result;
          })
        }
      })
    },
    //团队
    handleChange1({fileList}){
      this.fileList1 = fileList;
    },
    handleChange2({fileList}) {
      this.fileList2 = fileList;
    },
    handleChange3({fileList}) {
      this.fileList3 = fileList;
    },
    handleChange4({fileList}) {
      this.fileList4 = fileList;
    },
    handleChange5({fileList}) {
      this.fileList5 = fileList;
    },
    handleTeamSave(){
      deleteTeam().then(res=>{
        const { error }=res;
        if(error.code==0){
            console.log(this.teamInfo);
            this.teamInfo.forEach((t,index)=>{
              t.id=index+1
            })
            console.log(this.teamInfo);
            postTeam(this.teamInfo).then(res => {
              const {error} = res;
              if (error.code == 0) {
                console.log('保存成功');
                this.$message.success('团队信息上传成功！');
              } else {
                console.log('保存失败');
              }
            })
        }
      })
    },
    //删除所有信息,包括图片
    deleteAllTeamInfo(){
      deleteAllTeam().then(res=>{
        console.log(res);
        this.teamInfo=[{id:1,},{id:2,},{id:3,},{id:4,},{id:5,}];
        this.fileList1=[];
        this.fileList2=[];
        this.fileList3=[];
        this.fileList4=[];
        this.fileList5=[];
        this.$message.success('团队信息删除成功！');
      })
    }
  }
}
</script>

<style scoped>
.box{
  position: relative;
  width: 200px;
  height: 250px;
  box-shadow: 0px 4px 8px 0px rgba(25, 25, 25, 0.08);
  border-radius: 4px;
  padding: 10px;
  overflow: auto;
  display: inline-block;
}
.delete{
  position: absolute;
  top:10px;
  right: 10px;
}
.delete:hover{
  cursor: pointer;
}
/deep/ .ant-upload.ant-upload-select-picture-card{
  width: 100%;
  height: 219px;
}
/deep/ .ant-upload-list-picture-card-container{
  width: 100%;
  height: 219px;
}
/deep/ .ant-upload-list-picture-card .ant-upload-list-item{
  width: 100%;
  height: 219px;
}
</style>
