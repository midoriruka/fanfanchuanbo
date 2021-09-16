<template>
  <div>
    <a-upload
      action="http://8.131.72.119:8081/upload/banner"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
      :remove="removeBanner"
      method="post"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          选择上传banner
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
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
import { getMediaList,deleteMedia } from '@/api/service';
export default {
  name: "BannerAdmin",
  data(){
    return{
      previewVisible: false,
      previewImage: '',
      fileList: [],
    }
  },
  mounted() {
    getMediaList('banner').then((res)=>{
      this.fileList = res;
    })
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
      this.fileList = fileList;
    },
    removeBanner(file){
      deleteMedia(file.uid).then(res=>{
        console.log('remove',res)
      })
    }
  }
}
</script>

<style scoped>
/deep/ .ant-upload.ant-upload-select-picture-card{
  width: 604px;
  height: 219px;
}
/deep/ .ant-upload-list-picture-card-container{
  width: 604px;
  height: 219px;
}
/deep/ .ant-upload-list-picture-card .ant-upload-list-item{
  width: 604px;
  height: 219px;
}
</style>
