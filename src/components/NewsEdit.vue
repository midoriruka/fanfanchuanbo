<template>
  <div>
    <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-form-item label="文章标题">
        <a-input v-model="article.title"/>
      </a-form-item>
      <a-form-item label="文章简介">
        <a-input v-model="article.summary"/>
      </a-form-item>
      <a-form-item label="文章正文">
        <div v-if="editType=='0'" id='editor1'></div>
        <div v-else-if="editType=='1'" id='editor2'></div>
        <div v-else id='editor3'></div>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button style="background-color: #e34319;border-radius: 19px;border-color:#e34319" type="primary" @click="handleSave">
          上传提交
        </a-button>
      </a-form-item>
      <a-form-item label="文章封面">
        <a-upload
          :action=uploadUrl
          list-type="picture-card"
          :before-upload="beforeUpload"
          :file-list="fileList"
          @preview="handlePreview"
          @change="handleChange"
          method="post"
        >
          <div v-if="fileList.length < 1">
            <a-icon type="plus" />
            <div class="ant-upload-text">
              选择上传封面图
            </div>
          </div>
        </a-upload>
      </a-form-item>
    </a-form>
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
import { postNews } from '@/api/service';
import E from 'wangeditor'
export default {
  name: "NewsEdit",
  props:{
    editType:{ //0 热门资讯 1 企业新闻 2 运营干货
      type:String,
      defaultValue:'1'
    }
  },
  data(){
    return{
      article:{
        title:'',
        summary:'' ,
        text:'',
      },
      previewVisible: false,
      previewImage: '',
      fileList: [],
      editor:null,
      uploadUrl:'http://8.131.72.119:8081/article-picture',
      article_id:''
    }
  },
  mounted() {
    this.editor = new E(`#editor${this.editType}`);
    this.editor.config.height = 300;
    this.editor.config.placeholder = '';
    // 配置菜单栏，设置不需要的菜单
    this.editor.config.excludeMenus = [
      'foreColor',
      'backColor',
      'todo',
      'emoticon',
      'video',
      'table',
      'code',
    ]
    this.editor.create();
  },
  methods:{
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
    handleChange({fileList}) {
      if(Boolean(this.article_id)){
        this.fileList = fileList;
      }
    },
    handleSave(){
      // 通过代码获取编辑器内容
      this.article.text = this.editor.txt.html();
      this.article.article_type = parseFloat(this.editType);
      postNews(this.article).then(res=>{
        console.log('编辑器',res);
        if(res.error.code==0){
          this.$message.success('文章内容上传成功！请继续上传封面图！');
          this.article_id = res.result.article_id;
          this.uploadUrl='http://8.131.72.119:8081/article-picture/'+this.article_id;
        }
      })
    },
    beforeUpload(file) {
      const ifUpload =Boolean(this.article_id);
      console.log(ifUpload);
      if (!ifUpload) {
        this.$message.error('请先上传提交文章内容！');
      }
      return ifUpload;
    },
  }
}
</script>

<style scoped>
/deep/ .ant-upload.ant-upload-select-picture-card{
  width: 404px;
  height: 219px;
}
/deep/ .ant-upload-list-picture-card-container{
  width: 404px;
  height: 219px;
}
/deep/ .ant-upload-list-picture-card .ant-upload-list-item{
  width: 404px;
  height: 219px;
}
</style>
